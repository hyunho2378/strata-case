import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

// Strata 케이스 스터디. 배정 레퍼런스 플러스엑스 이마트 앱 사례. 포트 5193.
// public/app 은 Strata 시민 화면을 /app/ 경로로 다시 빌드한 결과다. 하위 경로 새로고침이 그 index.html 로 가게 한다.
const BASE = '/strata-case/';

// dist/index.html 을 404.html 로 복사해 깃허브 페이지 새로고침에 대비한다
function copy404() {
  return {
    name: 'strata-copy-404',
    closeBundle() {
      const out = path.resolve('dist');
      if (fs.existsSync(path.join(out, 'index.html'))) fs.copyFileSync(path.join(out, 'index.html'), path.join(out, '404.html'));
    },
  };
}

function appFallback() {
  const serve = (root) => (req, res, next) => {
    let url = (req.url || '').split('?')[0];
    if (url.startsWith(BASE)) url = '/' + url.slice(BASE.length);
    if (!url.startsWith('/app')) return next();
    const file = path.join(root, decodeURIComponent(url));
    if (url !== '/app' && url !== '/app/' && fs.existsSync(file) && fs.statSync(file).isFile()) return next();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(fs.readFileSync(path.join(root, 'app/index.html')));
  };
  return {
    name: 'strata-app-fallback',
    configureServer(server) { server.middlewares.use(serve(path.resolve('public'))); },
    configurePreviewServer(server) { server.middlewares.use(serve(path.resolve('dist'))); },
  };
}

export default defineConfig({
  base: BASE,
  plugins: [react(), appFallback(), copy404()],
  server: { port: 5193, strictPort: true },
  preview: { port: 5193, strictPort: true },
});

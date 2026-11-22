import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { motion } from './tokens.js';

// 이마트 WOW fadeInUp: 요소가 화면 아래에서 150px 올라오면 1.0s 동안 50px 떠오르며 나타남. 한 번만.
export function useReveal() {
  useEffect(() => {
    const off = Math.min(motion.fadeInUp.offset, Math.round(window.innerHeight * 0.15));
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: `0px 0px -${off}px 0px` });
    const els = document.querySelectorAll('[data-reveal]');
    els.forEach((el) => io.observe(el));
    // 첫 로드 때 이미 화면 안에 들어온 요소는 즈시 켜 첫 화면이 비지 않게 함
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight - off && r.bottom > 0) { el.classList.add('in'); io.unobserve(el); }
      });
    });
    // 문서 끝에서는 문턱에 닿지 못하는 요소를 모두 켬
    const onEnd = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => el.classList.add('in'));
      }
    };
    window.addEventListener('scroll', onEnd, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onEnd); };
  }, []);
}

// skrollr 문턱(-100 bottom)처럼 들어오면 켜고 나가면 끔. 양방향.
export function useToggle(ref, threshold = motion.bar.threshold, once = false) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return undefined;
    const off = Math.min(threshold, Math.round(window.innerHeight * 0.2));
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); if (once) io.disconnect(); }
      else if (!once && e.boundingClientRect.top > 0) setOn(false);
    }, { rootMargin: `0px 0px -${off}px 0px` });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, once]);
  return on;
}

// 휴대폰 틀
export function Phone({ src, alt, children, lift = true, eager = false }) {
  return (
    <div className={`phone ${lift ? 'lift' : ''}`}>
      <div className="scr">
        {children || <img src={src} alt={alt} width="390" height="844" loading={eager ? 'eager' : 'lazy'} decoding="async" />}
      </div>
    </div>
  );
}

// 크게 보기
const LbCtx = createContext(() => {});
export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);
  const lastFocus = useRef(null);
  const closeRef = useRef(null);
  const open = useCallback((it) => { lastFocus.current = document.activeElement; setItem(it); }, []);
  const close = useCallback(() => { setItem(null); lastFocus.current?.focus?.(); }, []);
  useEffect(() => {
    document.body.classList.toggle('lock', !!item);
    if (!item) return undefined;
    closeRef.current?.focus();
    const k = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [item, close]);
  return (
    <LbCtx.Provider value={open}>
      {children}
      <div className={`lb ${item ? 'on' : ''}`} role="dialog" aria-modal="true" aria-label="화면 크게 보기" aria-hidden={!item} onClick={close}>
        {item && (
          <div onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.alt} />
            <p>{item.alt}</p>
          </div>
        )}
        <button ref={closeRef} className="x" aria-label="닫기" onClick={close} tabIndex={item ? 0 : -1}><X size={24} /></button>
      </div>
    </LbCtx.Provider>
  );
}

// 컴퓨터 화면 한 장. 누르면 크게 보기
export function Shot({ src, alt }) {
  const open = useContext(LbCtx);
  return (
    <button type="button" className="shot" onClick={() => open({ src, alt })} aria-label={`${alt} 크게 보기`}>
      <img src={src} alt={alt} width="1800" height="1125" loading="lazy" decoding="async" />
      <span className="zoom" aria-hidden="true"><Maximize2 size={18} /></span>
    </button>
  );
}

// 한 글자씩 써지는 제목(이마트 sp_memo 커서 대신). 글자당 60ms, 진입 때 한 번
export function Typed({ text, className }) {
  const ref = useRef(null);
  const on = useToggle(ref, 150, true);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!on) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(text.length); return undefined; }
    let i = 0;
    const t = setInterval(() => { i += 1; setN(i); if (i >= text.length) clearInterval(t); }, 60);
    return () => clearInterval(t);
  }, [on, text]);
  return (
    <h2 ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>{text.slice(n)}</span>
    </h2>
  );
}

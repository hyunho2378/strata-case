// Strata 케이스 스터디 토큰. 색은 Strata 서비스 원본(kitTokens.js)의 주색 파랑과 위험 빨강, 무채색만 쓴다.
export const color = {
  blue: '#005BC1',      // 주색 파랑(Strata primary)
  blueBright: '#1E6EF4',// 흰 글자 대비용 파랑
  red: '#BA1A1A',       // 위험 빨강(Strata danger)
  redBright: '#E9152D', // 보조 빨강
  ink: '#111418',
  ink2: '#4B5059',
  ink3: '#6B7079',
  line: '#E4E6EA',
  surface: '#F2F3F5',
  white: '#FFFFFF',
  night: '#0E1116',
};

// 이마트 사례 측정값(_ref/분석_emart.md)을 그대로 옮긴 움직임 값
export const motion = {
  fadeInUp: { y: 50, duration: 1.0, offset: 150 },       // WOW fadeInUp, offset 150
  bar: { threshold: 100, duration: 0.8, start: 30 },       // skrollr -100-bottom, 30px에서 제 폭, 0.8s
  marquee: { duration: 30 },                               // Swiper speed 30000
  carousel: { delay: 1500, speed: 1500 },                  // Swiper2 autoplay 1500, speed 1500
  bubble: { width: 0.7, text: 0.8, textDelay: 0.2 },       // KOLON MALL .oneb
};

export const ease = {
  power1inOut: 'cubic-bezier(0.45,0,0.55,1)',
  power2out: 'cubic-bezier(0.33,1,0.68,1)',
  power2inOut: 'cubic-bezier(0.65,0,0.35,1)',
  power3out: 'cubic-bezier(0.25,1,0.5,1)',
};

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Thermometer, Tent, Ambulance, Stethoscope, Dumbbell, Users, Landmark, Droplets } from 'lucide-react';
import { color, motion } from './tokens.js';
import { LightboxProvider, Phone, Shot, Typed, useReveal, useToggle } from './parts.jsx';
import { DemoCitizen, DemoStaff } from './demos.jsx';

gsap.registerPlugin(ScrollTrigger);
const B = import.meta.env.BASE_URL;
const img = (n) => `${B}img/${n}.webp`;
// 한국어 제목은 구절 단위로만 줄바꿈
const ph = (t) => t.split('|').flatMap((x, i) => (i ? [' ', <span className="ph" key={i}>{x}</span>] : [<span className="ph" key={i}>{x}</span>]));

// 시민 화면의 찾는 종류 여덟 가지(Strata 서비스 원본 strataData.js CATEGORIES)
const KINDS = [
  { I: Thermometer, name: '한파쉼터와 무더위쉼터', hint: '추울 때와 더울 때 쉬는 곳' },
  { I: Tent, name: '대피소', hint: '지진과 해일, 민방위 대피' },
  { I: Ambulance, name: '응급실', hint: '밤에도 받는 응급 진료' },
  { I: Stethoscope, name: '병원과 약국', hint: '의원과 보건소, 약국' },
  { I: Dumbbell, name: '체육시설', hint: '수영장과 운동장, 체육관' },
  { I: Users, name: '어르신 모임과 아이 돌봄', hint: '경로당과 마을회관, 돌봄 공간' },
  { I: Landmark, name: '행정복지센터와 경찰, 소방', hint: '민원과 신고 창구' },
  { I: Droplets, name: '임시 주거와 급수', hint: '머물 곳과 물 받는 곳' },
];


// 글은 왼쪽 좁은 칸, 화면은 오른쪽 넓은 칸(이마트 섹션 리듬)
function Band({ title, lead, source, className, children }) {
  return (
    <section className={`sec band-sec ${className || ''}`}>
      <div className="band">
        <div className="side">
          <h2 className="h2" data-reveal>{title}</h2>
          {lead && <p className="lead" data-reveal>{lead}</p>}
          {source && <p className="src" data-reveal>{source}</p>}
        </div>
        <div className="media">{children}</div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="mark" href="#top">Strata</a>
        <a className="go" href="#try">직접 눌러 보기</a>
      </div>
    </header>
  );
}

// 1 표지(이마트 cover)
function Cover() {
  return (
    <section className="cover" id="top">
      <Header />
      <div className="wrap">
        <div className="tit" data-reveal>
          <h1>{ph('오늘 문 여는 시설을|한 화면에서 봅니다.')}</h1>
          <p className="sub">동해시 공공시설 운영 정보 통합 서비스 Strata</p>
          <p className="credit">2026 한림 G-Lab@동해 AI 활용 지역문제해결 해커톤 출품작</p>
        </div>
        <div data-reveal><Phone src={img('m_home')} alt="Strata 시민 첫 화면" eager lift={false} /></div>
      </div>
    </section>
  );
}

// 2 개요(이마트 overview)
function Overview() {
  return (
    <section className="overview band-sec">
      <div className="band">
        <div className="side">
          <h2 className="h2" data-reveal>{ph('시설 404곳의 오늘 상태를|모았습니다.')}</h2>
          <p className="lead" data-reveal>Strata는 동해시 공공시설이 오늘 여는지 보여 줍니다. 닫힌 시설에는 같은 역할의 가까운 시설이 함께 나옵니다. 시민은 세 번 눌러 확인합니다. 담당자가 공지를 확인하면 시민 화면이 바뀝니다.</p>
          <dl className="facts" data-reveal>
            <div><dt>작업 기간</dt><dd>2026. 10. 18.부터 11. 11.까지</dd></div>
            <div><dt>과제</dt><dd>동해시 공공시설 실시간 이용정보 통합서비스</dd></div>
            <div><dt>화면</dt><dd>시민 휴대폰 화면과 담당자 컴퓨터 화면</dd></div>
          </dl>
        </div>
        <div className="media">
          <figure data-reveal className="wide">
            <img src={img('d_widths')} alt="폭별 시민 첫 화면: 갤럭시 360과 390, 아이폰 393" width="1800" height="1266" loading="lazy" />
            <figcaption className="cap">폭이 달라도 같은 첫 화면</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Notice({ src, w, h, title, note, th }) {
  const ref = useRef(null);
  const on = useToggle(ref, th);
  return (
    <figure ref={ref} className={`nt ${on ? 'in' : ''}`}>
      <div className="im"><img src={src} alt={title} width={w} height={h} loading="lazy" /></div>
      <figcaption>{note && <b>{note}</b>}{title}</figcaption>
    </figure>
  );
}

// 3 그림 공지(이마트 data 키워드 문턱)
function Notices() {
  return (
    <Band
      title={ph('공지는 누리집 다섯 곳에|흩어져 있습니다.')}
      lead="2026. 11. 11. 누리집 다섯 곳에서 9월부터 11월까지 공지를 셌습니다. 동해시청 공사알림은 1건이었고 고시와 공고에는 운영 변경 공지가 없었습니다. 첫 화면 배너와 동해교육도서관 공지는 그림으로만 올라왔습니다. 동해시는 해커톤 사전질의에서 당일 운영 여부를 시설별 안내 전화로 확인한다고 답했습니다."
      source="출처: 동해시청 누리집 공사알림과 고시와 공고, 첫 화면 배너, 동해시시설관리공단 공지사항, 동해교육도서관 공지사항(2026. 11. 11. 직접 열람), 동해시 사전질의 답변(2026. 11.)"
    >
      <div className="notices">
        <Notice th={150} src={img('n_L01')} w={1123} h={1587} note="휴관 기간이 그림 안에만 있음" title="동해교육도서관 임시휴관 안내(2026. 9. 3.)" />
        <div className="col2">
          <Notice th={260} src={img('n_L02')} w={1400} h={989} note="본문 전체가 그림" title="동해교육도서관 열람실 임시 휴실 안내(2026. 9. 4.)" />
          <Notice th={360} src={img('n_SB1')} w={1400} h={990} note="본문 글자 없이 4.15MB 그림 한 장" title="동해시시설관리공단 추석 연휴 시설 운영 안내(2026. 8. 21.)" />
        </div>
      </div>
    </Band>
  );
}

// 4 쉼터 대장의 경로당(이마트 catalogue)
function Halls() {
  return (
    <Band
      title={ph('공사 공고가 난 경로당 10곳이|쉼터 대장에 있습니다.')}
      lead="2026년 경로당 그린리모델링 공사 공고 10곳이 한파쉼터 대장에 그대로 올라 있습니다. 동해시 한파쉼터 157곳 가운데 128곳이 경로당입니다. Strata는 공사 기간과 전화 확인 필요를 함께 띄웁니다."
      source="출처: 국민안전24 안전지도 동해시 층(2026. 10. 18. 수집본), 나라장터 2026년 경로당 그린리모델링 공사 공고"
    >
      <div className="row row-1">
        <div data-reveal><Phone src={img('m_closed')} alt="동막경로당 상세: 그린리모델링 일정 2026. 12. 2.까지, 전화 확인 필요" /><p className="cap">공사 일정이 붙은 동막경로당</p></div>
      </div>
    </Band>
  );
}

// 5 콘셉트(이마트 conception, 사진 scrub는 KOLON MALL)
function Concept() {
  const box = useRef(null);
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.to('.concept .full img', {
        scale: 1, yPercent: 0, ease: 'none',
        scrollTrigger: { trigger: '.concept .full', start: '5% 90%', end: 'bottom 80%', scrub: 1.2 },
      });
    }, box);
    return () => ctx.revert();
  }, []);
  return (
    <section className="sec concept" ref={box}>
      <div className="wrap tophead">
        <h2 className="h2 one" data-reveal>시설 위에 역할을 층으로 쌓습니다.</h2>
        <p className="lead" data-reveal>멈추는 기간과 대신 쓸 시설이 같은 화면에 나옵니다.</p>
      </div>
      <div className="full">
        <img src={img('d_board')} alt="3D 상황판: 동해시 건물과 역할 표시, 운영 중단 10곳과 비는 역할 20곳" width="1800" height="1125" loading="lazy" />
      </div>
    </section>
  );
}

// 6 세 번 누름(이마트 direction). 실제 시민 화면을 코드로 다시 짜 자동 재생
function ThreeTaps() {
  return (
    <Band
      title="시민은 세 번 눌러 찾습니다."
      lead="찾는 종류를 고르면 지금 열린 곳이 가까운 순으로 나옵니다. 공사 일정이 있는 시설을 열면 대신 갈 곳 3곳이 바로 아래에 붙습니다."
      className="taps"
    >
      <div data-reveal>
        <DemoCitizen />
        <p className="cap">한파쉼터와 무더위쉼터를 고른 뒤 동막경로당까지 가는 흐름이 저절로 재생됩니다</p>
      </div>
    </Band>
  );
}

// 시민 화면을 390 x 844 그대로 띄우고 휴대폰 틀 폭에 맞춰 줄임
function ScaledFrame({ src }) {
  const ref = useRef(null);
  const [k, setK] = useState(1);
  useEffect(() => {
    const scr = ref.current?.parentElement; if (!scr) return undefined;
    const ro = new ResizeObserver(() => setK(scr.clientWidth / 390));
    ro.observe(scr);
    return () => ro.disconnect();
  }, []);
  return <iframe ref={ref} className="fix" src={src} title="Strata 시민 화면" loading="lazy" style={{ transform: `scale(${k})` }} />;
}

// 7 직접 눌러 보기(이마트 sp_memo)
function Live() {
  const ways = [
    ['첫 화면', `${B}app/`],
    ['한파쉼터 목록', `${B}app/list?cat=shelter`],
    ['공사 중인 경로당', `${B}app/place/F003`],
    ['지도', `${B}app/map`],
  ];
  const [src, setSrc] = useState(`${B}app/`);
  const [nonce, setNonce] = useState(0);
  return (
    <section className="sec live band-sec" id="try">
      <div className="band">
        <div className="side">
          <Typed className="typed" text="지금 문 연 한파쉼터" />
          <p className="lead" data-reveal>앞 구간의 데모와 같은 화면을 그대로 넣었습니다. 화면 안을 직접 눌러 보세요.</p>
          <div className="ways" role="group" aria-label="바로 열 화면">
            {ways.map(([t, u]) => (
              <button key={u} type="button" aria-pressed={src === u} onClick={() => { setSrc(u); setNonce((n) => n + 1); }}>{t}</button>
            ))}
          </div>
        </div>
        <div className="media">
          <div className="row row-1">
            <div data-reveal>
              <Phone lift={false}>
                <ScaledFrame key={nonce} src={src} />
              </Phone>
              <p className="cap">직접 써 보는 시민 화면. 위 단추로 화면을 바꿉니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 8 대신 갈 곳(이마트 splash 계단)
function Alternatives() {
  const s = [
    ['m_er', '응급 이용 불가 병원', '근로복지공단 동해병원: 응급 이용 불가와 대신 갈 곳 3곳'],
    ['m_planned', '휴관이 예정된 체육관', '동해체육관: 운영 중, 예정 휴관 기간 함께 표시'],
  ];
  return (
    <Band
      title="닫힌 시설에는 대신 갈 곳 3곳이 붙습니다."
      lead="같은 역할의 시설이 거리 순으로 나옵니다. 걸어서 걸리는 시간도 함께 보입니다. 재설계 전에는 이 자리가 2.2화면 아래에 있었습니다."
      className="splash"
    >
      <div className="row row-2 stagger">
        {s.map(([f, t, a], i) => (
          <div key={f} data-reveal>
            <Phone src={img(f)} alt={a} />
            <p className="cap"><span className="n">{i + 1}</span>{t}</p>
          </div>
        ))}
      </div>
    </Band>
  );
}

// 9 과업 측정(이마트 home 두 대 엇갈림)
function Measure() {
  return (
    <Band
      title={ph('첫 화면 글자를|1,109자에서 255자로|줄였습니다.')}
      lead="아이콘 카드와 동 고르기 줄을 빼고 찾는 종류 목록 하나만 남겼습니다. 같은 과업을 다시 해 보니 첫 화면 스크롤이 4.51화면에서 1.45화면으로 줄었습니다."
      source="출처: Strata 시민 화면 과업 측정(2026. 11. 11., 390 x 844, 시설 404곳 기준)"
    >
      <div className="row row-2">
        <div data-reveal><Phone src={img('m_before')} alt="재설계 전 시민 첫 화면" /><p className="cap">재설계 전, 1,109자</p></div>
        <div data-reveal data-delay="1"><Phone src={img('m_home')} alt="재설계 후 시민 첫 화면" /><p className="cap">재설계 후, 255자</p></div>
      </div>
    </Band>
  );
}

// 10 찾는 종류(이마트 stp_ico 가운데 화면과 넘어가는 줄)
function Kinds() {
  const n = KINDS.length;
  const list = [...KINDS, ...KINDS, ...KINDS];
  const box = useRef(null);
  const trackRef = useRef(null);
  const seen = useToggle(box, 100);
  const [idx, setIdx] = useState(n);
  const [jump, setJump] = useState(false);
  const [geo, setGeo] = useState({ w: 0, item: 300 });
  const [hold, setHold] = useState(false);

  useEffect(() => {
    const fit = () => {
      const first = trackRef.current?.firstElementChild;
      setGeo({ w: box.current?.querySelector('.reel')?.clientWidth || 0, item: first?.offsetWidth || 300 });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  useEffect(() => {
    if (!seen || hold || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setIdx((i) => i + 1), motion.carousel.delay + motion.carousel.speed);
    return () => clearInterval(t);
  }, [seen, hold]);
  useEffect(() => {
    if (!jump) return undefined;
    const r = requestAnimationFrame(() => requestAnimationFrame(() => setJump(false)));
    return () => cancelAnimationFrame(r);
  }, [jump]);
  const onEnd = () => {
    if (idx >= 2 * n) { setJump(true); setIdx(idx - n); }
    if (idx < n) { setJump(true); setIdx(idx + n); }
  };
  const x = geo.w / 2 - (idx + 0.5) * geo.item;
  return (
    <section className="sec kinds" ref={box}>
      <div className="wrap">
        <h2 className="h2 one" data-reveal>찾는 종류는 시민이 쓰는 말로 적었습니다.</h2>
        <p className="lead" data-reveal>자료의 역할 이름 대신 시설에서 하는 일로 묶었습니다. 큰 글씨 목록에서 바로 고릅니다.</p>
      </div>
      <div className="stage two" data-reveal onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
        <div className="duo">
          <Phone src={img('m_cat')} alt="한파쉼터와 무더위쉼터를 고른 뒤의 목록 화면" lift={false} />
        </div>
        <div className="reel">
          <div ref={trackRef} className={`track ${jump ? 'jump' : ''}`} style={{ transform: `translate3d(${x}px,0,0)` }} onTransitionEnd={onEnd}>
            {list.map((k, i) => {
              const I = k.I;
              const on = ((i % n) + n) % n === ((idx % n) + n) % n;
              return (
                <button type="button" key={i} className={`kind ${on ? 'on' : ''}`} onClick={() => setIdx(i)} tabIndex={i >= n && i < 2 * n ? 0 : -1} aria-label={`${k.name}, ${k.hint}`}>
                  <I size={40} strokeWidth={1.8} aria-hidden="true" />
                  <strong>{k.name}</strong>
                  <span>{k.hint}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// 11 담당자 흐름(이마트 event_stp). 판독과 반영을 자동 재생
function Staff() {
  return (
    <Band
      title="담당자가 확인하면 시민 화면이 바뀝니다."
      lead="담당자가 공지를 올리면 판독함에 읽은 값이 나옵니다. 값마다 공지 원문 문장이 붙습니다. 확인을 누르면 시민 화면과 쉬운 말 안내문이 함께 만들어집니다."
    >
      <div data-reveal>
        <DemoStaff />
        <p className="cap">공지 원문에서 값 여섯 줄이 잡히고 확인을 누르는 흐름이 저절로 재생됩니다</p>
      </div>
      <figure data-reveal>
        <Shot src={img('d_applied')} alt="확인 반영 완료: 같은 역할의 대신 갈 곳과 안내문" />
        <figcaption className="cap">확인 뒤 담당자 화면에 남는 반영 기록</figcaption>
      </figure>
      <div className="pair">
        <figure data-reveal className="zoomcol">
          <img src={img('d_read_zoom')} alt="읽은 값 여섯 줄 확대: 시설, 상태, 기간, 이용 불가 범위, 사유, 대신 갈 곳" width="1278" height="1754" loading="lazy" />
          <figcaption className="cap">실제 판독함 화면의 읽은 값 부분</figcaption>
        </figure>
        <figure data-reveal data-delay="1">
          <Shot src={img('d_print')} alt="큰 글씨 인쇄용 안내문 미리 보기" />
          <figcaption className="cap">경로당에 붙이는 큰 글씨 안내문</figcaption>
        </figure>
      </div>
    </Band>
  );
}

// 12 3D 상황판(이마트 brand_music). 역할 층 갈라짐을 자동 재생
function Board() {
  return (
    <Band
      title="한 건물에 겹친 역할을 층으로 나눕니다."
      lead="공개 자료로 시설 404곳과 역할 기록을 모았습니다. 역할이 둘 이상 겹치는 건물은 168곳입니다. 한 곳이 멈추면 그 건물에서 받던 역할이 함께 멈춥니다."
      source="출처: 국민안전24 안전지도 동해시 시설 층 17종(2026. 10. 18. 수집본), 전국마을회관및경로당표준데이터, 강원특별자치도교육청 학교현황"
      className="board"
    >
      <figure data-reveal>
        <Shot src={img('d_floor')} alt="건물 층 나눠 보기: 대룡빌딩에 겹친 역할 층과 연결선" />
        <figcaption className="cap">상황판에서 대룡빌딩을 고르면 건물 한 채가 맡은 역할이 층으로 갈라집니다</figcaption>
      </figure>
      <figure data-reveal>
        <Shot src={img('d_panel')} alt="시설 패널: 대룡빌딩이 맡은 역할과 담당 부서" />
        <figcaption className="cap">시설 하나를 고른 패널</figcaption>
      </figure>
    </Band>
  );
}

// 13 현황판(이마트 coupon)
function Desk() {
  return (
    <Band
      title="현황판 첫 줄에 오늘 운영 중단이 보입니다."
      lead="등록 시설과 오늘 운영 중단이 첫 줄에 나옵니다. 처리할 일에서 확인 대기 공지를 바로 엽니다."
      className="desk"
    >
      <figure data-reveal>
        <Shot src={img('d_overview')} alt="담당자 현황판: 오늘 운영 중단 10곳, 비는 역할 20개, 처리할 일 5" />
        <figcaption className="cap">담당자 현황판</figcaption>
      </figure>
    </Band>
  );
}

// 14 끝맺음(이마트 name)
function Credit() {
  return (
    <footer className="name">
      <div className="wrap">
        <p className="mk" data-reveal>Strata</p>
        <div className="cr" data-reveal>
          <strong>2026 한림 G-Lab@동해 AI 활용 지역문제해결 해커톤 출품작</strong>
          동해시 공공시설 운영 정보 통합 서비스
          <p className="src srcs">출처: 동해시청 누리집 공사알림과 고시와 공고, 첫 화면 배너, 동해시시설관리공단 공지사항, 동해교육도서관 공지사항(2026. 11. 11. 직접 열람), 국민안전24 안전지도 동해시 층(2026. 10. 18. 수집본), 나라장터 공고, 동해시 사전질의 답변(2026. 11.), Strata 과업 측정 기록(2026. 11. 11.). 화면은 모두 Strata 서비스 실제 화면입니다.</p>
        </div>
      </div>
      <div className="bgimg"><img src={img('d_picked')} alt="3D 상황판에서 대룡빌딩을 고른 화면" width="1800" height="1125" loading="lazy" /></div>
    </footer>
  );
}

export default function App() {
  useLayoutEffect(() => {
    const r = document.documentElement.style;
    Object.entries(color).forEach(([k, v]) => r.setProperty(`--${k}`, v));
    window.scrollTo(0, 0);
  }, []);
  useReveal();
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    return () => { clearTimeout(t); window.removeEventListener('load', onLoad); };
  }, []);
  return (
    <LightboxProvider>
      <main>
        <Cover />
        <Overview />
        <Notices />
        <Halls />
        <Concept />
        <ThreeTaps />
        <Live />
        <Alternatives />
        <Measure />
        <Kinds />
        <Staff />
        <Board />
        <Desk />
      </main>
      <Credit />
    </LightboxProvider>
  );
}

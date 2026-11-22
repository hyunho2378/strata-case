import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Thermometer, Tent, Ambulance, Stethoscope, Dumbbell, Users, Landmark, Droplets, ChevronRight, ChevronLeft, Check, Phone as PhoneIcon } from 'lucide-react';

// 화면에 들어오면 재생, 나가면 멈춤. 움직임 줄이기를 켠 기기는 마지막 상태로 고정
function usePlay(ref, build) {
  useLayoutEffect(() => {
    const el = ref.current; if (!el) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const tl = build();
      if (!tl) return;
      if (reduce) { tl.progress(1).pause(); return; }
      tl.pause();
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) tl.play(); else tl.pause(); }, { threshold: 0.25 });
      io.observe(el);
      el._io = io;
    }, el);
    return () => { el._io?.disconnect(); ctx.revert(); };
  }, []);
}

const KINDROWS = [
  [Thermometer, '한파쉼터와 무더위쉼터', '36곳'],
  [Tent, '대피소', '81곳'],
  [Ambulance, '응급실', '1곳'],
  [Stethoscope, '병원과 약국', '68곳'],
  [Dumbbell, '체육시설', '4곳'],
  [Users, '어르신 모임과 아이 돌봄', '116곳'],
  [Landmark, '행정복지센터와 경찰, 소방', '11곳'],
  [Droplets, '임시 주거와 급수', '32곳'],
];

const LISTROWS = [
  ['농업기술센터농업인상담실', '운영 중, 하루 내내 개방', '한파쉼터, 무더위쉼터'],
  ['동강장여관(응급대피소)', '운영 중, 하루 내내 개방', '한파쉼터, 무더위쉼터'],
  ['동해시근로자종합복지회관', '운영 중, 하루 내내 개방', '천곡동, 한파쉼터, 무더위쉼터'],
  ['동막경로당', '공사 일정 있음, 전화 확인 필요', '이로동, 한파쉼터, 무더위쉼터'],
  ['부곡경로당', '운영 중, 18:00까지', '부곡동, 한파쉼터, 무더위쉼터'],
];

const NEAR = [
  ['홍도경로당', '운영 중, 18:00까지', '400m, 걸어서 6분'],
  ['중앙경로당', '운영 중, 18:00까지', '500m, 걸어서 8분'],
  ['삼화경로당', '쉼터 운영 기간 아님, 평소 용도로 개방', '250m, 걸어서 4분'],
];

// 데모 1. 시민이 종류를 고르고 닫힌 시설에서 대신 갈 곳을 받는 흐름
export function DemoCitizen() {
  const box = useRef(null);
  usePlay(box, () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, defaults: { ease: 'power2.out' } });
    tl.set('.dc .s2, .dc .s3', { xPercent: 100 })
      .set('.dc .near li, .dc .hit', { opacity: 0 })
      .to('.dc .hit-kind', { opacity: 1, duration: 0.18 }, 1.1)
      .to('.dc .hit-kind', { opacity: 0, duration: 0.25 }, 1.45)
      .to('.dc .s2', { xPercent: 0, duration: 0.55, ease: 'power3.out' }, 1.4)
      .to('.dc .hit-row', { opacity: 1, duration: 0.18 }, 2.9)
      .to('.dc .hit-row', { opacity: 0, duration: 0.25 }, 3.25)
      .to('.dc .s3', { xPercent: 0, duration: 0.55, ease: 'power3.out' }, 3.2)
      .from('.dc .closed', { opacity: 0, y: 14, duration: 0.4 }, 3.7)
      .to('.dc .near li', { opacity: 1, y: 0, duration: 0.4, stagger: 0.18 }, 4.1)
      .from('.dc .call', { opacity: 0, y: 10, duration: 0.35 }, 5.1)
      .to({}, { duration: 1.8 })
      .to('.dc .s2, .dc .s3', { xPercent: 100, duration: 0.45 }, '>')
      .set('.dc .near li', { opacity: 0, y: 14 });
    return tl;
  });
  return (
    <div className="demo dc" ref={box} role="img" aria-label="시민 화면 데모: 한파쉼터와 무더위쉼터를 고르면 목록이 열리고, 공사 일정이 있는 동막경로당에서 대신 갈 곳 3곳이 나옵니다">
      <div className="scr">
        <div className="s1">
          <h4>동해시 공공시설</h4>
          <p className="muted">오늘 운영</p>
          <p className="head">284곳 운영 중</p>
          <p className="muted small">일부 운영 104곳, 확인 중 16곳</p>
          <ul className="rows">
            {KINDROWS.map(([I, name, n], i) => (
              <li key={name} className={i === 0 ? 'first' : ''}>
                <I size={20} strokeWidth={1.8} aria-hidden="true" />
                <span>{name}</span><em>{n}</em><ChevronRight size={16} aria-hidden="true" />
                {i === 0 && <span className="hit hit-kind" aria-hidden="true" />}
              </li>
            ))}
          </ul>
        </div>
        <div className="s2">
          <p className="bar"><ChevronLeft size={18} aria-hidden="true" />한파쉼터와 무더위쉼터</p>
          <p className="pick">동 고르기<em>동해시 전체</em></p>
          <p className="muted small">지금 열린 곳 20곳, 급한 역할 순</p>
          <ul className="list">
            {LISTROWS.map(([a, b, c], i) => (
              <li key={a} className={i === 3 ? 'target' : ''}>
                <b>{a}</b><span>{b}</span><span className="muted small">{c}</span>
                {i === 3 && <span className="hit hit-row" aria-hidden="true" />}
              </li>
            ))}
          </ul>
        </div>
        <div className="s3">
          <p className="bar"><ChevronLeft size={18} aria-hidden="true" />동막경로당</p>
          <div className="closed">
            <p className="muted small">경로당, 이로동</p>
            <p className="head2">그린리모델링(건축, 기계, 전기) 일정 2026. 12. 2.까지, 전화 확인 필요</p>
            <p className="muted small">비드프로 동막의 그린리모델링(건축, 기계, 전기) 일정</p>
          </div>
          <p className="muted small gap">대신 갈 곳 3곳</p>
          <ul className="near">
            {NEAR.map(([a, b, c]) => (
              <li key={a}><b>{a}</b><span>{b}</span><span className="muted small">{c}</span></li>
            ))}
          </ul>
          <p className="call"><PhoneIcon size={16} aria-hidden="true" />전화 걸기</p>
        </div>
      </div>
    </div>
  );
}

const READ = [
  ['시설', '동해체육관'],
  ['상태', '운영 중단'],
  ['기간', '2026. 11. 24. 부터 2026. 12. 12. 까지'],
  ['이용 불가 범위', '수영장과 체력단련장'],
  ['사유', '바닥 보수 공사'],
  ['대신 갈 곳', '전천생활체육공원'],
];

// 데모 2. 담당자가 공지를 확인하면 시민 화면과 안내문이 바뀌는 흐름
export function DemoStaff() {
  const box = useRef(null);
  usePlay(box, () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8, defaults: { ease: 'power2.out' } });
    tl.set('.ds .read li', { opacity: 0, y: 10 })
      .set('.ds .after', { opacity: 0 })
      .set('.ds .mark', { backgroundColor: 'rgba(0,0,0,0)' })
      .to('.ds .mark', { backgroundColor: 'rgba(0,91,193,.14)', duration: 0.3, stagger: 0.35 }, 0.7)
      .to('.ds .read li', { opacity: 1, y: 0, duration: 0.35, stagger: 0.35 }, 1.0)
      .to('.ds .ok', { scale: 0.94, duration: 0.14, yoyo: true, repeat: 1 }, 3.5)
      .to('.ds .before', { opacity: 0, duration: 0.3 }, 3.9)
      .to('.ds .after', { opacity: 1, duration: 0.4 }, 4.1)
      .from('.ds .after p', { opacity: 0, y: 12, duration: 0.35, stagger: 0.2 }, 4.2)
      .to({}, { duration: 2 });
    return tl;
  });
  return (
    <div className="demo ds" ref={box} role="img" aria-label="담당자 화면 데모: 공지 원문에서 읽은 값 여섯 줄이 차례로 잡히고, 확인을 누르면 시민 화면과 쉬운 말 안내문이 바뀝니다">
      <div className="pane ori">
        <p className="ttl">공지 원문</p>
        <p className="muted small">동해시 공고 제2026-1180호</p>
        <p className="note">동해체육관 임시 휴관 안내</p>
        <p>1. 기간: <span className="mark">2026. 11. 24. 부터 2026. 12. 12. 까지</span></p>
        <p>2. 사유: <span className="mark">바닥 보수 공사</span></p>
        <p>3. 내용: <span className="mark">공사 기간 중 수영장과 체력단련장은 이용할 수 없습니다.</span></p>
        <p>4. 대체 안내: <span className="mark">가까운 전천생활체육공원을 이용해 주시기 바랍니다.</span></p>
      </div>
      <div className="pane val">
        <p className="ttl">읽은 값<span className="ok">확인</span></p>
        <ul className="read">
          {READ.map(([k, v]) => (
            <li key={k}><span className="muted small">{k}</span><b>{v}</b><span className="chk"><Check size={13} aria-hidden="true" />공지 원문 일치</span></li>
          ))}
        </ul>
      </div>
      <div className="pane out">
        <div className="before">
          <p className="ttl">시민 화면</p>
          <p className="head2">동해체육관</p>
          <p className="muted small">운영 중, 22:00까지</p>
        </div>
        <div className="after">
          <p className="ttl">시민 화면 반영 완료</p>
          <p className="head2 red">운영 중단, 2026. 12. 12.까지</p>
          <p className="muted small">수영장과 체력단련장 이용 불가</p>
          <p className="near1"><b>전천생활체육공원</b><span className="muted small">대신 갈 곳</span></p>
          <p className="easy">동해체육관 수영장과 체력단련장은 2026년 11월 24일부터 12월 12일까지 바닥 보수 공사로 이용하실 수 없습니다.</p>
        </div>
      </div>
    </div>
  );
}


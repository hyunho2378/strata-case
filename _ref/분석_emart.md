# 플러스엑스 이마트 앱 사례 스크롤 연출 분석

측정일: 2026. 11. 22. / 측정 환경: Aside 브라우저, 창 1440x900
표기: [측정]은 원본 HTML과 CSS, JS 원문 또는 getBoundingClientRect로 확인한 값. [추정]은 화면만 보고 판단한 내용.
원본 사본: `_ref/emart.html`, `_ref/animate.css`, 보충 `_ref/km.html`(KOLON MALL)

## 0. 진입 경로와 실제 URL

- 목록: https://www.plus-ex.com/experience#emart (목록 위 오버레이 iframe)
- 상세 본문: https://www.plus-ex.com/source/iframe/portfolio/emart.html [측정]
- 라이브러리 [측정]: jQuery 1.11.1, WOW.js 1.1.3(진입 연출), animate.css(fadeInUp), skrollr(막대 그래프와 키워드 등장), Swiper(카드 띠와 스탬프 아이콘 회전). GSAP 없음
- 레이아웃 [측정]: `.portfolio { min-width:1200px }`, 본문 칸 `.con_bx { width:1200px; margin:0 auto }`. @media 없음

## 1. 전체 구조 측정값

- 문서 높이 38,290px = 화면 높이(900) 42.5배 [측정]
- 스무스 스크롤 없음, 핀 없음, scrub 없음 [측정]. 움직임은 전부 진입 때 한 번 재생(WOW)과 스크롤 위치 문턱(skrollr)으로 켜고 끄는 방식
- 섹션 사이 여백이 매우 큼: 대부분 `margin-top:400px` 또는 `padding-top:300~400px` [측정]
- 배경 전환: 표지 노란 사진, overview `#f2f2f2`, coupon `#F0F0F0`, 나머지 흰색. 스크롤 보간 없이 섹션 면 색으로 끊어 바뀜 [측정]

## 2. 섹션 순서표

위치는 1440x900 기준 문서 y좌표 [측정].

| 번호 | 클래스 | 구간(px) | 화면 배수 | 보이는 내용 | 움직임 | 기법 근거 |
|---|---|---|---|---|---|---|
| 1 | cover | 0~1280 | 0~1.4 | 노란 종이 사진 배경, 왼쪽 로고와 제목(폭 418), 오른쪽 휴대폰 화면(폭 364, 15px 검은 테, 반경 48, 그림자 15px 39px 36px) | 제목 묶음과 휴대폰이 아래에서 떠오름 | WOW fadeInUp, data-wow-duration 1.0s, offset 150. animate.css: opacity 0, translateY(50px)에서 0 [측정] |
| 2 | overview | 1280~2802 | 1.4~3.1 | 회색 면 #f2f2f2, 앱 아이콘 80px(반경 20), 소개 3줄(16px/38px #808080), 과정 4칸(폭 306/349/353), 바닥에 1200x542 그림 | 요소마다 fadeInUp | 같은 WOW 값 [측정] |
| 3 | interview | 2802~4369 | 3.1~4.9 | 왼쪽 큰 글(36px/64px, 폭 584) 아래 번호 목록 10줄, 오른쪽 말풍선 그림(480x775, margin-top 250) 위 글 4개 절대 위치 | 왼쪽 묶음, 오른쪽 그림 순서로 fadeInUp, 오른쪽 delay 0.2s | data-wow-delay 0.2s [측정] |
| 4 | app_web | 4369~5997 | 4.9~6.7 | App 쪽 막대 6개(폭 1100, 961, 496, 360, 228, 212), Web 쪽 막대 6개. 높이 30, 반경 15, 2px 테, 색 채움은 4px 어긋나게 깔림 | 막대 폭이 30px에서 제 길이로 늘어남, 숫자는 opacity 0에서 1 | skrollr: 막대 `data--100-bottom` 30px, `data--101-bottom` 제 폭. 색 채움은 -114/-115, 숫자 -120/-121. CSS transition all 0.8s [측정] |
| 5 | data | 5997~6986 | 6.7~7.8 | 여정 그래프 선 그림 994x418 위 키워드 9개(Good, Normal, Bad 얼굴 아이콘) | 키워드가 서로 다른 스크롤 위치에서 하나씩 켜짐 | skrollr opacity 0에서 1, 문턱 -150, -190, -300, -360, -500, -550, -560, -580 bottom [측정] |
| 6 | direction | 7386~9711 | 8.2~10.8 | 큰 숫자 그림, DIRECTION 제목, 휴대폰 목업 5대가 세 열로 엇갈림(열 margin-top 882, 496, 0), 아래 5칸 설명 | 목업마다 fadeInUp | 반경 36, 그림자 28px 33px 37px [측정] |
| 7 | conception | 10111~11309 | 11.2~12.6 | 전체 폭 사진 배경(높이 1198), 영문 큰 글 그림, 설명 24px/60px | 제목, 큰 글, 설명 fadeInUp | [측정] |
| 8 | home | 11709~15207 | 13.0~16.9 | 휴대폰 2대(둘째 margin 215 0 0 60), 설명, 긴 화면 3열(열 margin-top 0, 173, 491) | 열마다 fadeInUp | [측정] |
| 9 | splash | 15677~17503 | 17.4~19.4 | 배경 그림 위 휴대폰 3대 계단(margin-top 0, 245, 490) | fadeInUp | [측정] |
| 10 | quick | 18193~19240 | 20.2~21.4 | 휴대폰 3대 한 줄(간격 75) | fadeInUp | [측정] |
| 11 | sp_memo | 19750~21496 | 21.9~23.9 | 가운데 제목 옆 깜빡이는 세로 막대(2x50), 가운데 휴대폰 GIF 448x928(반경 50) | 커서 깜빡임 0.5s 무한 | `@keyframes active` opacity 0에서 1, 0.5s 0.5s infinite [측정] |
| 12 | catalogue | 21899~24473 | 24.3~27.2 | 노란 반원 면(높이 1200, border-radius 100% 100% 0 0) 위 휴대폰 3대, 아래 카드 그림 띠(4246px) | 카드 띠가 왼쪽으로 끝없이 흐름 | Swiper speed 30000, loop, autoplay [측정] |
| 13 | event_stp | 24982~26872 | 27.8~29.9 | 글 묶음 왼쪽 위 절대 위치, 화면 3열(margin-top 600, 300, 0) | fadeInUp | [측정] |
| 14 | stp_ico | 27314~28432 | 30.3~31.6 | 가운데 휴대폰 목업(346x752), 그 뒤로 아이콘 줄(슬라이드 폭 360) | 아이콘이 가운데 정렬로 하나씩 옆으로 넘어감 | Swiper speed 1500, autoplay 1500, centeredSlides, loop [측정] |
| 15 | brand_music | 28712~30421 | 31.9~33.8 | 1920x1572 배경 그림 위 휴대폰 3대(margin 0, 300, 600) | fadeInUp | [측정] |
| 16 | coupon | 30804~33337 | 34.2~37.0 | 회색 면 #F0F0F0, 큰 휴대폰과 쿠폰 조각 3장, 둘째 휴대폰 margin-top 262 | fadeInUp | [측정] |
| 17 | element | 33737~36026 | 37.5~40.0 | 아이콘 12개(6열, 106px), 색 원 3개(250px), 글꼴 견본 | fadeInUp | [측정] |
| 18 | name | 36426~38291 | 40.5~42.5 | 로고와 크레딧, 전체 폭 사진(높이 1387) | fadeInUp | [측정] |

## 3. 공통 연출 문법

### 문법 1. fadeInUp(기본 진입)
- 원본 값 [측정]: animate.css fadeInUp 0% opacity 0, translateY(50px), 100% opacity 1, translateY(0). duration 1.0s, 기본 ease(animate.css 기본), WOW offset 150(요소가 화면 아래에서 150px 올라오면 시작). 한 번만 재생
- 우리 구현: IntersectionObserver rootMargin `0px 0px -150px 0px`, 들어오면 `.in` 붙임. transition opacity 1s ease, transform 1s ease, translateY 50px

### 문법 2. 막대 자라기(skrollr 문턱)
- 원본 값 [측정]: 막대가 화면 아래에서 100px 들어오면 폭이 30px에서 제 길이로, 색 채움은 114px, 숫자는 120px에서 켜짐. transition 0.8s. 스크롤을 되돌리면 다시 줄어듦(skrollr는 양방향)
- 우리 구현: 막대마다 IntersectionObserver rootMargin `0px 0px -100px 0px`, 들어오면 scaleX 적용, 나가면 되돌림. transform scaleX(시작 30px 비율)에서 1, 0.8s. 숫자는 opacity 0.8s, 20px 늦은 문턱 대신 0.15s 지연

### 문법 3. 문턱마다 하나씩 켜기(data 키워드)
- 원본 값 [측정]: 같은 그래프 안 키워드 9개가 -150에서 -580 bottom까지 서로 다른 문턱에서 opacity 0에서 1
- 우리 구현: 공지 그림 5장에 문턱 150, 220, 300, 380, 460px을 나눠 걸고 opacity와 translateY(24px) 0.6s

### 문법 4. 끝없이 흐르는 띠(catalogue Swiper)
- 원본 값 [측정]: Swiper speed 30000, loop. 4246px 띠가 30초에 한 칸씩 흐름
- 우리 구현: CSS keyframes translateX(0)에서 -50%, 내용 두 벌 이어 붙임, 30s linear infinite. prefers-reduced-motion이면 멈춤

### 문법 5. 가운데 고정 화면 뒤로 넘어가는 줄(stp_ico Swiper)
- 원본 값 [측정]: 슬라이드 폭 360, 가운데 정렬, 1.5초마다 1.5초 걸려 한 칸 넘어감
- 우리 구현: transform translateX를 1500ms마다 한 칸, transition 1500ms, 끝에서 처음으로 이어 붙임. 칸을 누르면 그 칸으로 이동

### 문법 6. 커서 깜빡임(sp_memo)
- 원본 값 [측정]: 2x50 막대 opacity 0.5s 0.5s infinite
- 우리 구현: 화면 금지 규칙(깜빡이는 표시 금지)에 따라 깜빡임은 빼고, 제목 글자가 한 글자씩 타이핑되는 연출(글자당 60ms, 진입 때 한 번)로 바꿈

### 보충 문법(KOLON MALL, km)
- 말풍선 폭 늘어나기 [측정]: `.oneb .bg { transition: width 0.7s power2inOut }`, 글자 opacity 0.8s power1inOut 0.2s 지연. 우리는 width 대신 transform scaleX로 같은 시간과 곡선을 씀(레이아웃 속성 애니메이션 금지 규칙)
- 무리 등장 [측정]: `.fadein-group .item` opacity 0.65s power1inOut, transform translateY(15%)에서 0 0.6s power2out, 둘째부터 0.1s 지연
- 곡선 [측정]: power1inOut cubic-bezier(0.45,0,0.55,1), power2out cubic-bezier(0.33,1,0.68,1), power2inOut cubic-bezier(0.65,0,0.35,1), power3out cubic-bezier(0.25,1,0.5,1)
- 스크롤 따라 살짝 줄어드는 사진 [측정]: `.scrub` scale 1.2에서 1, y 8%, scrub 1.2, start `5% 90%`, end `bottom 80%`. 우리 상황판 큰 화면에 한 번 씀(진입 구간만, pin 없음)

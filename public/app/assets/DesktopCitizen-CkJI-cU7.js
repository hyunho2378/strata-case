import { _ as __exportAll, d as useNavigate, h as require_react, p as useParams, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { r as createLucideIcon, t as Button } from "./Button-scljtAU-.js";
import { t as Select } from "./Select-UMsCnY49.js";
import { B as distText, J as telOf, K as routeLinks, N as CATEGORIES, Q as walkText, R as categoryById, U as dutyText, V as dongList, W as haversineM, Y as urgentRank, Z as useStrata, ft as Map$1 } from "./index-iSpUmSYP.js";
import { t as Skeleton } from "./Skeleton-DLJWn7CQ.js";
import { n as Region3D, t as prefersReducedMotion } from "./useReducedMotion-CLTlFPmU.js";
import { t as SegmentControl } from "./SegmentControl-43K5xRyT.js";
import { a as DetailSection, c as StatusBand, o as ListDetail, r as InfoRows } from "./console-Bo24m_YT.js";
import { t as Input } from "./Input-xFxgKSoK.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Box = createLucideIcon("box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Navigation = createLucideIcon("navigation", [["polygon", {
	points: "3 11 22 2 13 21 11 13 3 11",
	key: "1ltx0t"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Phone = createLucideIcon("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
//#endregion
//#region src/lib/api.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var api_exports = /* @__PURE__ */ __exportAll({
	API_URL: () => "",
	ORG_NAME: () => ORG_NAME,
	USE_MOCK: () => false
});
var ORG_NAME = "동해시";
//#endregion
//#region src/components/public/publicApi.js
var pickFn = (...names) => {
	for (const n of names) if (typeof api_exports[n] === "function") return api_exports[n];
	return null;
};
var BASE = "".replace(/\/$/, "");
async function call(url, init, ms = 7e3) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), ms);
	try {
		const res = await fetch(`${BASE}${url}`, {
			...init,
			signal: ctrl.signal,
			headers: {
				"Content-Type": "application/json",
				...init?.headers || {}
			}
		});
		if (!res.ok) throw new Error(`응답 ${res.status}`);
		const json = await res.json();
		if (json?.error) throw new Error(json.error.message || "서버 오류");
		return json;
	} finally {
		clearTimeout(timer);
	}
}
async function loadStatusEvents() {
	const fn = pickFn("getStatusEvents", "getStatus", "fetchStatus");
	const json = fn ? await fn() : await call("/api/status");
	return {
		updatedAt: json?.updatedAt || null,
		events: Array.isArray(json?.events) ? json.events : []
	};
}
async function loadLive(kind) {
	const fn = pickFn("getLive", "fetchLive");
	const json = fn ? await fn(kind) : await call(`/api/live?kind=${encodeURIComponent(kind)}`);
	const list = Array.isArray(json?.list) ? json.list : [];
	if (!list.length) throw new Error("받은 자료 없음");
	return {
		source: json.source || "",
		asOf: json.asOf || null,
		fetchedAt: json.fetchedAt || null,
		list
	};
}
async function askPlaces({ question, lat = null, lng = null }) {
	const fn = pickFn("askPlaces", "postAsk", "ask");
	const json = fn ? await fn({
		question,
		lat,
		lng
	}) : await call("/api/ask", {
		method: "POST",
		body: JSON.stringify({
			question,
			lat,
			lng
		})
	}, 2e4);
	return {
		answer: json?.answer || "",
		places: Array.isArray(json?.places) ? json.places : [],
		unknown: !!json?.unknown
	};
}
//#endregion
//#region src/lib/status.js
var STATUS_LABEL = {
	open: "운영 중",
	closed: "오늘 휴관",
	partial: "일부 운영",
	unknown: "확인 중",
	planned: "예정 휴관"
};
function dotDay(v) {
	if (!v) return "";
	const d = new Date(v);
	if (Number.isNaN(d.getTime())) return String(v);
	return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}
function monthDay(v) {
	if (!v) return "";
	const d = new Date(v);
	if (Number.isNaN(d.getTime())) return String(v);
	return `${d.getMonth() + 1}. ${d.getDate()}.`;
}
function hm(v) {
	const m = /^(\d{1,2}):(\d{2})$/.exec(String(v || "").trim());
	if (!m) return null;
	return Number(m[1]) * 60 + Number(m[2]);
}
var HOURS = [
	{
		test: (f) => hasSub(f, "er"),
		days: [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		from: "00:00",
		to: "24:00",
		text: "하루 내내 개방",
		allDay: true
	},
	{
		test: (f) => /편의점/.test(f.type || ""),
		days: [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		from: "00:00",
		to: "24:00",
		text: "하루 내내 개방",
		allDay: true
	},
	{
		test: (f) => /옥외공간|공동주택|기타/.test(f.type || ""),
		days: [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		from: "00:00",
		to: "24:00",
		text: "하루 내내 개방",
		allDay: true
	},
	{
		test: (f) => /약국/.test(f.type || ""),
		days: [
			1,
			2,
			3,
			4,
			5,
			6
		],
		from: "09:00",
		to: "19:00",
		text: "평일과 토요일 09:00~19:00"
	},
	{
		test: (f) => /의료기관/.test(f.type || ""),
		days: [
			1,
			2,
			3,
			4,
			5
		],
		from: "09:00",
		to: "18:00",
		text: "평일 09:00~18:00"
	},
	{
		test: (f) => /체육시설/.test(f.type || ""),
		days: [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		from: "06:00",
		to: "22:00",
		text: "매일 06:00~22:00"
	},
	{
		test: (f) => /학교/.test(f.type || ""),
		days: [
			1,
			2,
			3,
			4,
			5
		],
		from: "09:00",
		to: "17:00",
		text: "평일 09:00~17:00"
	},
	{
		test: (f) => /행정복지센터|경찰|소방/.test(f.type || ""),
		days: [
			1,
			2,
			3,
			4,
			5
		],
		from: "09:00",
		to: "18:00",
		text: "평일 09:00~18:00"
	}
];
var DEFAULT_HOURS = {
	days: [
		1,
		2,
		3,
		4,
		5
	],
	from: "09:00",
	to: "18:00",
	text: "평일 09:00~18:00"
};
var hasSub = (f, sub) => (f?.roles || []).some((r) => r.sub === sub);
function defaultHours(facility) {
	const base = HOURS.find((h) => h.test(facility || {})) || DEFAULT_HOURS;
	return {
		days: base.days,
		from: base.from,
		to: base.to,
		text: base.text,
		allDay: !!base.allDay
	};
}
function withinHours(hours, date) {
	if (!hours) return true;
	const day = date.getDay();
	if (!hours.days.includes(day)) return false;
	const min = date.getHours() * 60 + date.getMinutes();
	const from = hm(hours.from) ?? 0;
	const to = hours.to === "24:00" ? 1440 : hm(hours.to) ?? 1440;
	return min >= from && min < to;
}
function seasonActive(season, date) {
	const m = /^(\d{4})(\d{2})(\d{2})~(\d{4})(\d{2})(\d{2})$/.exec(String(season || "").replace(/\s/g, ""));
	if (!m) return null;
	const md = (mm, dd) => Number(mm) * 100 + Number(dd);
	const now = md(date.getMonth() + 1, date.getDate());
	const s = md(m[2], m[3]);
	const e = md(m[5], m[6]);
	return s <= e ? now >= s && now <= e : now >= s || now <= e;
}
var covers$1 = (e, ms) => {
	const s = e.start ? Date.parse(e.start) : null;
	const t = e.end ? Date.parse(`${e.end}T23:59:59+09:00`) : null;
	if (s == null && t == null) return false;
	if (s != null && ms < s) return false;
	if (t != null && ms > t) return false;
	return true;
};
function plannedClosure(facility, { confirmed = [], now = Date.now(), windowDays = 90 } = {}) {
	const until = now + windowDays * 864e5;
	const rows = [];
	for (const e of confirmed || []) {
		if (!e || e.facilityId !== facility?.id || e.status === "open") continue;
		const s = e.start ? Date.parse(e.start) : NaN;
		if (Number.isNaN(s) || s <= now || s > until) continue;
		rows.push({
			at: s,
			from: e.start,
			to: e.end || null,
			reason: e.reason || "운영 변경",
			kind: "confirmed",
			sourceName: e.source?.name || "담당자 확인"
		});
	}
	for (const e of facility?.events || []) {
		const s = e.start ? Date.parse(e.start) : NaN;
		if (Number.isNaN(s) || s <= now || s > until) continue;
		rows.push({
			at: s,
			from: e.start,
			to: e.end || null,
			reason: e.cause || e.kind || "운영 변경",
			kind: "notice",
			sourceName: e.source || "동해시 공고"
		});
	}
	if (!rows.length) return null;
	const first = rows.sort((a, b) => a.at - b.at)[0];
	const head = `예정 휴관 ${monthDay(first.from)}부터`;
	return {
		code: "planned",
		label: STATUS_LABEL.planned,
		from: first.from,
		to: first.to,
		reason: first.reason,
		line: head,
		detail: [
			head,
			first.to ? `${monthDay(first.to)}까지` : "종료일 미정",
			first.reason
		].filter(Boolean).join(", "),
		basis: {
			kind: first.kind,
			text: `${first.sourceName}의 ${first.reason} 일정`,
			sourceName: first.sourceName
		}
	};
}
var roleNames = (ids, roles) => (ids || []).map((id) => (roles || []).find((r) => r.id === id)?.label || "").filter(Boolean);
function computeStatus(facility, opt = {}) {
	const now = opt.now ?? Date.now();
	const base = statusNow(facility, opt);
	const planned = plannedClosure(facility, {
		confirmed: opt.confirmed || [],
		now
	});
	return planned ? {
		...base,
		planned
	} : base;
}
function statusNow(facility, { confirmed = [], now = Date.now(), roles = [] } = {}) {
	const date = new Date(now);
	const hours = defaultHours(facility);
	const base = {
		hours,
		facilityRoles: [...new Set((facility?.roles || []).map((r) => r.role))]
	};
	const mine = (confirmed || []).filter((e) => e && e.facilityId === facility?.id && covers$1(e, now));
	if (mine.length) {
		const ev = mine.sort((a, b) => Date.parse(b.confirmedAt || 0) - Date.parse(a.confirmedAt || 0))[0];
		const until = ev.end ? `${dotDay(ev.end)}까지` : "다시 안내할 때까지";
		const scope = ev.scope || roleNames(ev.roles, roles).join("과 ");
		if (ev.status === "closed") return {
			...base,
			code: "closed",
			label: STATUS_LABEL.closed,
			line: `${ev.reason || "운영 변경"} 휴관, ${until}`,
			basis: basisOf(ev),
			until
		};
		if (ev.status === "partial") return {
			...base,
			code: "partial",
			label: STATUS_LABEL.partial,
			line: `${scope || "일부 공간"} 이용 불가, ${until}`,
			basis: basisOf(ev),
			until
		};
		if (ev.status === "hours" && ev.hours) {
			const text = `오늘 ${ev.hours} 운영`;
			return {
				...base,
				code: "partial",
				label: STATUS_LABEL.partial,
				line: text,
				basis: basisOf(ev),
				hours: {
					...hours,
					text: ev.hours,
					changed: true
				}
			};
		}
		return {
			...base,
			code: "open",
			label: STATUS_LABEL.open,
			line: "운영 중, 담당자 확인 완료",
			basis: basisOf(ev)
		};
	}
	const notices = (facility?.events || []).filter((e) => covers$1(e, now));
	if (notices.length) {
		const ev = notices.sort((a, b) => Date.parse(b.notice || b.start || 0) - Date.parse(a.notice || a.start || 0))[0];
		const until = ev.end ? `${dotDay(ev.end)}까지` : "끝나는 날이 정해지기 전까지";
		const nb = {
			kind: "notice",
			text: `${ev.source || "공고"}의 ${ev.cause || ev.kind} 일정`,
			sourceName: ev.source || "동해시 공고",
			sourceUrl: ev.url || "",
			checkedAt: ev.notice || null,
			certainty: ev.certainty || "예정"
		};
		const names = roleNames(ev.roles, roles);
		const all = base.facilityRoles.length > 0 && base.facilityRoles.every((r) => (ev.roles || []).includes(r));
		if (ev.certainty === "확정" && all) return {
			...base,
			code: "closed",
			label: STATUS_LABEL.closed,
			line: `${ev.cause || ev.kind} 휴관, ${until}`,
			basis: nb,
			until
		};
		if (ev.certainty === "확정") return {
			...base,
			code: "partial",
			label: STATUS_LABEL.partial,
			line: `${names.join("과 ") || "일부 기능"} 이용 불가, ${until}`,
			basis: nb,
			until
		};
		return {
			...base,
			code: "unknown",
			label: STATUS_LABEL.unknown,
			line: `${ev.cause || ev.kind} 일정 ${until}, 전화 확인 필요`,
			basis: nb,
			until
		};
	}
	if (facility?.status === "check") return {
		...base,
		code: "unknown",
		label: STATUS_LABEL.unknown,
		line: "안내 자료와 공지 불일치, 담당 부서 확인 중",
		basis: {
			kind: "record",
			text: "안내 자료와 공지 내용이 서로 다름"
		}
	};
	const season = (facility?.roles || []).map((r) => seasonActive(r.season, date)).filter((v) => v !== null);
	if (season.length && !season.some(Boolean)) return {
		...base,
		code: "partial",
		label: STATUS_LABEL.partial,
		line: "쉼터 운영 기간 아님, 평소 용도로 개방",
		basis: {
			kind: "season",
			text: "쉼터 운영 기간은 겨울과 여름"
		}
	};
	const open = withinHours(hours, date);
	const hb = {
		kind: "hours",
		text: hours.allDay ? `${hours.text}` : `같은 분류 시설 운영시간 ${hours.text}`
	};
	if (open) {
		const line = hours.allDay ? `운영 중, ${hours.text}` : `운영 중, ${hours.to}까지`;
		return {
			...base,
			code: "open",
			label: STATUS_LABEL.open,
			line,
			basis: hb
		};
	}
	return {
		...base,
		code: "closed",
		label: STATUS_LABEL.closed,
		line: `운영 시간 아님, ${hours.text} 운영`,
		basis: hb
	};
}
function basisOf(ev) {
	return {
		kind: "confirmed",
		text: `${ev.source?.name || "시설 공지"}, 담당자 확인 완료`,
		sourceName: ev.source?.name || "시설 공지",
		sourceUrl: ev.source?.url || "",
		quote: ev.source?.quote || "",
		checkedAt: ev.confirmedAt || null,
		certainty: "확정"
	};
}
//#endregion
//#region src/components/public/useCitizenData.js
function useCitizenData() {
	const { data, ready, empty } = useStrata();
	const [confirmed, setConfirmed] = (0, import_react.useState)({
		events: [],
		updatedAt: null,
		failed: false,
		ready: false
	});
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setNow(Date.now()), 6e4);
		return () => clearInterval(t);
	}, []);
	(0, import_react.useEffect)(() => {
		let live = true;
		loadStatusEvents().then((r) => {
			if (live) setConfirmed({
				events: r.events,
				updatedAt: r.updatedAt,
				failed: false,
				ready: true
			});
		}).catch(() => {
			if (live) setConfirmed({
				events: [],
				updatedAt: null,
				failed: true,
				ready: true
			});
		});
		return () => {
			live = false;
		};
	}, []);
	const facilities = data.facilities || [];
	const roles = data.roles || [];
	return {
		data,
		facilities,
		roles,
		byId: (0, import_react.useMemo)(() => Object.fromEntries(facilities.map((f) => [f.id, f])), [facilities]),
		ready,
		empty,
		now,
		statusOf: (0, import_react.useCallback)((f) => computeStatus(f, {
			confirmed: confirmed.events,
			now,
			roles
		}), [
			confirmed.events,
			now,
			roles
		]),
		roleLabel: (0, import_react.useCallback)((id) => roles.find((r) => r.id === id)?.label || "", [roles]),
		confirmed
	};
}
//#endregion
//#region src/mobile/citizen/model.js
function placeMeta(facility, distM) {
	if (distM != null) return [distText(distM), walkText(distM)].filter(Boolean).join(", ");
	return [facility.dong, dutyText(facility, 2)].filter(Boolean).join(", ");
}
var covers = (e, ms) => {
	const s = e.start ? Date.parse(e.start) : null;
	const t = e.end ? Date.parse(`${e.end}T23:59:59+09:00`) : null;
	if (s == null && t == null) return false;
	if (s != null && ms < s) return false;
	if (t != null && ms > t) return false;
	return true;
};
var dayText = (v) => {
	if (!v) return "";
	const d = new Date(v);
	if (Number.isNaN(d.getTime())) return "";
	return `${d.getMonth() + 1}. ${d.getDate()}.`;
};
function useHere() {
	const [coords, setCoords] = (0, import_react.useState)(null);
	const [state, setState] = (0, import_react.useState)("idle");
	return {
		coords,
		state,
		ask: (0, import_react.useCallback)(() => {
			if (typeof navigator === "undefined" || !navigator.geolocation) {
				setState("denied");
				return;
			}
			setState("loading");
			const guard = setTimeout(() => setState((s) => s === "loading" ? "denied" : s), 7e3);
			navigator.geolocation.getCurrentPosition((p) => {
				clearTimeout(guard);
				setCoords({
					lat: p.coords.latitude,
					lon: p.coords.longitude
				});
				setState("ready");
			}, () => {
				clearTimeout(guard);
				setState("denied");
			}, {
				timeout: 6e3,
				maximumAge: 3e5
			});
		}, [])
	};
}
function useCitizenModel() {
	const base = useCitizenData();
	const { facilities, statusOf, now, byId } = base;
	const marked = (0, import_react.useMemo)(() => facilities.map((f) => ({
		f,
		st: statusOf(f)
	})), [facilities, statusOf]);
	const summary = (0, import_react.useMemo)(() => {
		const out = {
			open: 0,
			closed: 0,
			partial: 0,
			unknown: 0
		};
		for (const m of marked) out[m.st.code] += 1;
		return out;
	}, [marked]);
	const counts = (0, import_react.useMemo)(() => {
		const out = {};
		for (const c of CATEGORIES) out[c.id] = marked.filter((m) => m.st.code === "open" && c.match(m.f)).length;
		return out;
	}, [marked]);
	const listOf = (0, import_react.useCallback)(({ cat = null, dong = null, coords = null, limit = 20, openOnly = true } = {}) => {
		const c = categoryById(cat);
		return marked.filter((m) => (!c || c.match(m.f)) && (!dong || m.f.dong === dong) && (!openOnly || m.st.code === "open")).map((m) => ({
			...m,
			distM: coords ? haversineM(coords, {
				lat: m.f.lat,
				lon: m.f.lon
			}) : null
		})).sort((a, b) => (coords ? (a.distM ?? Number.MAX_SAFE_INTEGER) - (b.distM ?? Number.MAX_SAFE_INTEGER) : urgentRank(a.f) - urgentRank(b.f)) || a.f.name.localeCompare(b.f.name, "ko")).slice(0, limit);
	}, [marked]);
	const news = (0, import_react.useMemo)(() => {
		const confirmed = (base.confirmed.events || []).filter((e) => covers(e, now)).map((e) => ({
			key: `c-${e.id}`,
			id: e.facilityId,
			name: byId[e.facilityId]?.name || "시설",
			line: [e.status === "closed" ? "휴관" : e.status === "partial" ? "일부 이용 불가" : "운영시간 변경", e.end ? `${dayText(e.end)}까지` : "재안내 전까지"].join(", "),
			why: e.reason || e.source?.name || "담당자 확인"
		}));
		const noticed = facilities.flatMap((f) => (f.events || []).filter((e) => covers(e, now)).map((e) => ({
			key: `n-${f.id}-${e.id || e.start}`,
			id: f.id,
			name: f.name,
			line: [e.certainty === "확정" ? "휴관" : "공사 일정", e.end ? `${dayText(e.end)}까지` : "종료일 미정"].join(", "),
			why: e.cause || e.kind || "공고"
		})));
		return [...confirmed, ...noticed];
	}, [
		base.confirmed.events,
		facilities,
		byId,
		now
	]);
	const dongs = (0, import_react.useMemo)(() => dongList(facilities), [facilities]);
	const stoppedRoles = (0, import_react.useCallback)((facility) => {
		const mine = [...new Set((facility?.roles || []).map((r) => r.role))];
		const fromConfirmed = ((base.confirmed.events || []).find((e) => e && e.facilityId === facility?.id && covers(e, now) && e.status !== "open")?.roles || []).filter((r) => mine.includes(r));
		if (fromConfirmed.length) return fromConfirmed;
		const fromNotice = ((facility?.events || []).find((e) => covers(e, now))?.roles || []).filter((r) => mine.includes(r));
		if (fromNotice.length) return fromNotice;
		return mine;
	}, [base.confirmed.events, now]);
	const altsOf = (0, import_react.useCallback)((facility, limit = 4) => {
		if (!facility) return [];
		const want = stoppedRoles(facility);
		const wantSubs = (facility.roles || []).filter((r) => want.includes(r.role)).map((r) => r.sub).filter(Boolean);
		const hasWanted = (f) => (f.roles || []).some((r) => want.includes(r.role));
		const hasSameSub = (f) => (f.roles || []).some((r) => want.includes(r.role) && wantSubs.includes(r.sub));
		const seen = /* @__PURE__ */ new Map();
		for (const a of facility.alternatives || []) {
			const target = byId[a.facilityId];
			if (!target || seen.has(a.facilityId)) continue;
			if (!want.includes(a.role) || !hasWanted(target)) continue;
			seen.set(a.facilityId, {
				f: target,
				distM: a.distM ?? null,
				climbM: a.climbM ?? 0,
				st: statusOf(target),
				role: a.role,
				sameSub: hasSameSub(target)
			});
		}
		let pool = [...seen.values()];
		if (wantSubs.length && pool.some((x) => x.sameSub)) pool = pool.filter((x) => x.sameSub);
		if (!pool.length) {
			const sameSub = facilities.filter((f) => f.id !== facility.id && hasSameSub(f));
			pool = (sameSub.length ? sameSub : facilities.filter((f) => f.id !== facility.id && hasWanted(f))).map((f) => ({
				f,
				distM: haversineM({
					lat: facility.lat,
					lon: facility.lon
				}, {
					lat: f.lat,
					lon: f.lon
				}),
				climbM: 0,
				st: statusOf(f),
				role: want[0],
				sameSub: hasSameSub(f)
			}));
		}
		return pool.sort((x, y) => (x.st.code === "open" ? 0 : 1) - (y.st.code === "open" ? 0 : 1) || (x.distM ?? 0) - (y.distM ?? 0)).slice(0, limit);
	}, [
		facilities,
		byId,
		statusOf,
		stoppedRoles
	]);
	return {
		...base,
		marked,
		summary,
		counts,
		listOf,
		news,
		dongs,
		altsOf,
		stoppedRoles
	};
}
var openLine = (summary) => `${summary.open}곳 운영 중`;
var openCaption = (summary) => [
	summary.closed ? `오늘 휴관 ${summary.closed}곳` : "",
	summary.partial ? `일부 운영 ${summary.partial}곳` : "",
	summary.unknown ? `확인 중 ${summary.unknown}곳` : ""
].filter(Boolean).join(", ");
//#endregion
//#region src/components/public/CitizenMap.jsx
var CITY = [129.079, 37.5215];
var safe = (scene, name, ...args) => {
	if (scene && typeof scene[name] === "function") try {
		return scene[name](...args);
	} catch {
		return;
	}
};
function CitizenMap({ facilities = [], roleFilter = [], subFilter = [], time, viewMode = "2d", focusId = null, onPick, onReady }) {
	const boxRef = (0, import_react.useRef)(null);
	const sceneRef = (0, import_react.useRef)(null);
	const propsRef = (0, import_react.useRef)({});
	const cbRef = (0, import_react.useRef)({});
	const [failed, setFailed] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [percent, setPercent] = (0, import_react.useState)(0);
	propsRef.current = {
		facilities,
		roleFilter,
		subFilter,
		time,
		viewMode,
		focusId
	};
	cbRef.current = {
		onPick,
		onReady
	};
	(0, import_react.useEffect)(() => {
		let scene = null;
		let timer = null;
		try {
			scene = new Region3D(boxRef.current, {
				theme: "light",
				reducedMotion: prefersReducedMotion(),
				onProgress: (p) => {
					if (p < 0) {
						setFailed(true);
						return;
					}
					setPercent((prev) => Math.max(prev, Math.min(96, Math.round(p * 100))));
				},
				onReady: () => {
					const s = sceneRef.current;
					const v = propsRef.current;
					safe(s, "setFacilities", v.facilities);
					safe(s, "setRoleFilter", v.roleFilter, v.subFilter);
					safe(s, "setQuality", "auto");
					if (v.time != null) safe(s, "setTime", v.time);
					safe(s, "flyToLonLat", CITY[0], CITY[1], 1.55);
					timer = setTimeout(() => {
						safe(s, "setViewMode", "3d");
						safe(s, "setViewMode", propsRef.current.viewMode);
						setPercent(100);
						setReady(true);
						cbRef.current.onReady?.();
					}, 1100);
				},
				onPick: (e) => cbRef.current.onPick?.(e && e.type ? e : { type: "none" })
			});
		} catch {
			setFailed(true);
		}
		sceneRef.current = scene;
		return () => {
			if (timer) clearTimeout(timer);
			safe(scene, "dispose");
			sceneRef.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) safe(sceneRef.current, "setFacilities", facilities);
	}, [facilities, ready]);
	(0, import_react.useEffect)(() => {
		if (ready) safe(sceneRef.current, "setRoleFilter", roleFilter, subFilter);
	}, [
		roleFilter,
		subFilter,
		ready
	]);
	(0, import_react.useEffect)(() => {
		if (ready && time != null) safe(sceneRef.current, "setTime", time);
	}, [time, ready]);
	(0, import_react.useEffect)(() => {
		if (ready) safe(sceneRef.current, "setViewMode", viewMode);
	}, [viewMode, ready]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		if (focusId) safe(sceneRef.current, "focusFacility", focusId);
		else safe(sceneRef.current, "clearFocus");
	}, [focusId, ready]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: boxRef,
				className: "h-full w-full",
				role: "region",
				"aria-label": "동해시 공공시설 지도"
			}),
			!ready && !failed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-mute px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					role: "status",
					"aria-live": "polite",
					className: "type-body text-text-sec tabular-nums",
					children: [
						"지도 불러오는 중 ",
						percent,
						"%"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 w-48 max-w-full overflow-hidden rounded-xs bg-line-def",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-xs bg-primary transition-[width] duration-dur",
						style: { width: `${Math.max(4, percent)}%` }
					})
				})]
			}),
			failed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-page px-5 py-4 type-body text-text-sec shadow-md",
				children: "지도 불러오기 실패, 목록에서 시설 고르기"
			})
		]
	});
}
//#endregion
//#region src/components/public/AskPanel.jsx
var EXAMPLES = [
	"지금 문 연 한파쉼터",
	"오늘 밤에 가는 응급실",
	"천곡동에서 가까운 약국"
];
function AskPanel({ coords = null, byId = {} }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)({
		loading: false,
		lines: [],
		places: [],
		failed: false,
		asked: false
	});
	const send = async (text) => {
		const question = (text ?? q).trim();
		if (!question || state.loading) return;
		setQ(question);
		setState({
			loading: true,
			lines: [],
			places: [],
			failed: false,
			asked: true
		});
		try {
			const r = await askPlaces({
				question,
				lat: coords?.lat ?? null,
				lng: coords?.lon ?? null
			});
			const lines = String(r.answer || "").split("\n").map((x) => x.trim()).filter(Boolean);
			setState({
				loading: false,
				lines: r.unknown ? [] : lines,
				places: r.places,
				failed: r.unknown,
				asked: true
			});
		} catch {
			setState({
				loading: false,
				lines: [],
				places: [],
				failed: true,
				asked: true
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailSection, {
		title: "말로 묻기",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex flex-wrap gap-2",
			onSubmit: (e) => {
				e.preventDefault();
				send();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "찾는 곳 적기",
				compact: true,
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "지금 문 연 한파쉼터",
				className: "min-w-0 flex-1 basis-80"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				loading: state.loading,
				leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
					size: 20,
					"aria-hidden": "true"
				}),
				children: "묻기"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-wrap gap-2",
			children: EXAMPLES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "lg",
				onClick: () => send(e),
				children: e
			}) }, e))
		})]
	}), state.asked && !state.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailSection, {
		title: "답",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "status",
			className: "flex flex-col gap-1",
			children: [state.lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "type-body text-text-pri",
				children: line
			}, i)), state.failed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "type-body text-text-pri",
				children: [
					"맞는 시설 없음, ",
					"동해시청 대표전화",
					" ",
					"033-530-2114",
					" 확인"
				]
			})]
		}), state.places.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 flex flex-col",
			children: state.places.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: `/place/${p.id}`,
				className: "flex min-h-14 items-center justify-between gap-4 rounded-lg px-3 hover:bg-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block type-body text-text-pri",
						children: byId[p.id]?.name || p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block type-body-sm text-text-sec",
						children: p.why || ""
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 type-body-sm text-text-sec",
					children: p.statusLabel || ""
				})]
			}) }, p.id))
		})]
	})] });
}
//#endregion
//#region src/components/public/DesktopCitizen.jsx
function MapPane({ facilities, roleFilter, subFilter, now, pickedId, onPick }) {
	const [view, setView] = (0, import_react.useState)("2d");
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 1400);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 flex items-center justify-end",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentControl, {
			label: "지도 보기 방식",
			value: view,
			onChange: setView,
			items: [{
				value: "2d",
				label: "위에서 보기",
				icon: Map$1
			}, {
				value: "3d",
				label: "3D 보기",
				icon: Box
			}]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative aspect-square w-full overflow-hidden rounded-lg bg-canvas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenMap, {
			facilities,
			roleFilter,
			subFilter,
			time: now,
			viewMode: view,
			focusId: pickedId,
			onPick
		})
	})] });
}
function DetailPane({ facility, status, alts, showAlts, roleLabel, sources, onOpen }) {
	const { tel, name: telName } = telOf(facility);
	const links = routeLinks(facility);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailSection, {
			title: facility.name,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-h1 text-text-pri",
					children: status.line
				}),
				status.planned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 type-body-strong text-text-pri",
					children: status.planned.detail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 type-body text-text-sec",
					children: status.basis?.text || ""
				}),
				status.basis?.quote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 rounded-md bg-subtle px-4 py-3 type-body-sm text-text-sec",
					children: status.basis.quote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						as: "a",
						href: `tel:${tel.replace(/-/g, "")}`,
						size: "lg",
						leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							size: 20,
							"aria-hidden": "true"
						}),
						children: [
							telName,
							" ",
							tel
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						as: "a",
						href: links.kakao,
						target: "_blank",
						rel: "noreferrer",
						size: "lg",
						variant: "ghost",
						leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
							size: 20,
							"aria-hidden": "true"
						}),
						children: "길 찾기"
					})]
				})
			]
		}),
		showAlts && !alts.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
			title: "대신 갈 곳",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "type-body text-text-sec",
				children: "같은 역할 시설 없음"
			})
		}),
		alts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
			title: `대신 갈 곳 ${alts.length}곳`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: alts.map(({ f, st, distM }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(f.id),
					className: "flex min-h-14 w-full items-center justify-between gap-4 rounded-lg px-3 text-left hover:bg-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block type-body text-text-pri",
							children: f.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block type-body-sm text-text-sec",
							children: st.line
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 type-body-sm text-text-sec tabular-nums",
						children: placeMeta(f, distM)
					})]
				}) }, f.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
			title: "운영 정보",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRows, {
				columns: 2,
				rows: [
					{
						key: "hours",
						label: "운영시간",
						value: status.hours?.text || "전화 확인",
						wide: true
					},
					{
						key: "addr",
						label: "주소",
						value: facility.addr || "전화 확인",
						wide: true
					},
					{
						key: "role",
						label: "맡은 역할",
						value: (facility.roles || []).map((r) => r.subLabel || roleLabel(r.role)).join(", ") || "등록 역할 없음",
						wide: true
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
			title: "확인한 자료",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRows, { rows: [
				{
					key: "src",
					label: "자료",
					value: status.basis?.sourceName || sources[0]?.label || "공개 자료"
				},
				status.basis?.checkedAt ? {
					key: "at",
					label: "확인일",
					value: dotDay(status.basis.checkedAt)
				} : null,
				...sources.map((s) => ({
					key: s.id,
					label: "원자료",
					value: `${s.label}, ${s.date} 기준`
				}))
			].filter(Boolean) })
		})
	] });
}
function DesktopCitizen({ pane = "map" }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const { ready, facilities, byId, statusOf, roleLabel, summary, counts, listOf, altsOf, now, data } = useCitizenModel();
	const { coords } = useHere();
	const [cat, setCat] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => listOf({
		cat,
		coords,
		limit: 40,
		openOnly: pane !== "detail"
	}), [
		listOf,
		cat,
		coords,
		pane
	]);
	const category = categoryById(cat);
	const facility = pane === "detail" ? byId[id] || null : null;
	const status = facility ? statusOf(facility) : null;
	const alts = facility && status && status.code !== "open" ? altsOf(facility, 4) : [];
	const sources = facility ? [...new Set((facility.roles || []).map((r) => r.source).filter(Boolean))].map((sid) => (data.sources || []).find((s) => s.id === sid)).filter(Boolean) : [];
	const items = (0, import_react.useMemo)(() => {
		const base = rows.map(({ f, st, distM }) => ({
			id: f.id,
			title: f.name,
			sub: [st.line, st.planned?.line].filter(Boolean).join(", "),
			trailing: placeMeta(f, distM)
		}));
		if (facility && !base.some((x) => x.id === facility.id)) base.unshift({
			id: facility.id,
			title: facility.name,
			sub: [status.line, status.planned?.line].filter(Boolean).join(", "),
			trailing: placeMeta(facility, null)
		});
		return base;
	}, [
		rows,
		facility,
		status
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cq mx-auto w-full max-w-page px-4 pb-10 pt-5 md:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBand, {
				tag: ready ? `${summary.open}곳 운영 중` : "불러오는 중",
				tone: "primary",
				className: "mb-6",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					label: "찾는 종류",
					hideLabel: true,
					size: "md",
					value: cat || "all",
					onChange: (v) => setCat(v === "all" ? null : v),
					options: [{
						value: "all",
						label: "모든 종류"
					}, ...CATEGORIES.map((c) => ({
						value: c.id,
						label: c.name,
						secondary: ready ? `${counts[c.id]}곳` : ""
					}))]
				}),
				children: ready ? `${category ? category.name : "동해시 공공시설"} ${rows.length}곳, ${coords ? "가까운 순" : "급한 역할 순"}` : "시설 상태 불러오는 중"
			}),
			!ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-96 w-full rounded-lg" }),
			ready && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListDetail, {
				items,
				selectedId: pane === "detail" ? id : null,
				onSelect: (next) => navigate(`/place/${next}`),
				listLabel: "시설 목록",
				listTitle: category ? category.name : "지금 열린 곳",
				children: [
					pane === "detail" && facility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailPane, {
						facility,
						status,
						alts,
						showAlts: status.code !== "open",
						roleLabel,
						sources,
						onOpen: (next) => navigate(`/place/${next}`)
					}),
					pane === "detail" && !facility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-body text-text-sec",
						children: "찾는 시설 없음"
					}),
					pane === "ask" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AskPanel, {
						coords,
						byId
					}),
					pane === "map" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPane, {
						facilities,
						roleFilter: category?.roleIds || [],
						subFilter: category?.subIds || [],
						now,
						pickedId: null,
						onPick: (e) => {
							if (e?.facilityId) navigate(`/place/${e.facilityId}`);
						}
					})
				]
			})
		]
	});
}
//#endregion
export { placeMeta as a, dotDay as c, openLine as i, askPlaces as l, CitizenMap as n, useCitizenModel as o, openCaption as r, useHere as s, DesktopCitizen as t, loadLive as u };

import { h as require_react, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { ot as create, tt as colors, z as countByStatus } from "./index-iSpUmSYP.js";
//#region src/lib/workspaceApi.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var ApiError = class extends Error {
	constructor(status, code, message) {
		super(message);
		this.status = status;
		this.code = code;
	}
};
async function call(path, opts = {}) {
	let r;
	try {
		r = await fetch(path, opts);
	} catch {
		throw new ApiError(0, "NETWORK", "서버에 연결하지 못했습니다");
	}
	if (!(r.headers.get("content-type") || "").includes("application/json")) throw new ApiError(r.status, "UNAVAILABLE", "서버 저장소를 쓸 수 없습니다");
	const body = await r.json();
	if (!r.ok) throw new ApiError(r.status, body?.error?.code || "ERROR", body?.error?.message || "요청을 처리하지 못했습니다");
	return body;
}
var json = (method, body) => ({
	method,
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(body)
});
function serialize(item) {
	const { responses, ...rest } = item;
	let out = item.kind === "form" ? rest : item;
	if (JSON.stringify(out).length > 7e5 && out.versions) out = {
		...out,
		versions: out.versions.slice(-3)
	};
	return out;
}
var list = () => call("/api/workspace").then((b) => b.items || []);
var publicForm = (id) => call(`/api/workspace?id=${encodeURIComponent(id)}&public=1`).then((b) => b.item);
var put = (item) => call("/api/workspace", json("PUT", serialize(item)));
var del = (id) => call(`/api/workspace?id=${encodeURIComponent(id)}`, { method: "DELETE" });
var submit = (formId, answers) => call(`/api/workspace?action=submit&id=${encodeURIComponent(formId)}`, json("POST", { answers }));
var responses = (id) => call(`/api/workspace?action=responses&id=${encodeURIComponent(id)}`).then((b) => b.responses || []);
var seed = (items) => call("/api/workspace?action=seed", json("POST", { items: items.map(serialize) }));
var law = (text) => call("/api/law", json("POST", { text }));
var lint = (text, preset) => call("/api/lint", json("POST", {
	text,
	preset
}));
async function parseFile(file) {
	if (file.size > 4194304) throw new ApiError(413, "TOO_LARGE", "4MB 이하 파일만 읽을 수 있습니다");
	return call(`/api/parse?name=${encodeURIComponent(file.name)}`, {
		method: "POST",
		headers: { "Content-Type": "application/octet-stream" },
		body: file
	});
}
var hwpxPreview = (doc) => call("/api/hwpx", json("POST", {
	...doc,
	render: true
}));
async function hwpx({ title, markdown, preset, gongmun, spans, paras }) {
	let r;
	try {
		r = await fetch("/api/hwpx", json("POST", {
			title,
			markdown,
			preset,
			gongmun,
			spans,
			paras
		}));
	} catch {
		throw new ApiError(0, "NETWORK", "서버에 연결하지 못했습니다");
	}
	const type = r.headers.get("content-type") || "";
	if (!r.ok || type.includes("application/json") || type.includes("text/html")) {
		let msg = "한글 문서를 만들지 못했습니다";
		if (type.includes("application/json")) msg = (await r.json().catch(() => null))?.error?.message || msg;
		else if (type.includes("text/html")) msg = "한글 문서 변환은 배포된 서버에서만 동작합니다";
		throw new ApiError(r.status, "HWPX", msg);
	}
	return r.blob();
}
//#endregion
//#region src/lib/docVars.js
var n = (x) => Number(x || 0).toLocaleString("ko-KR");
var dotDate = (d = /* @__PURE__ */ new Date()) => `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
var VAR_DEFS = [
	{
		key: "today",
		label: "오늘 날짜",
		group: "기본"
	},
	{
		key: "basis",
		label: "자료 기준",
		group: "기본"
	},
	{
		key: "org",
		label: "기관명",
		group: "기본"
	},
	{
		key: "facilities",
		label: "등록 시설",
		unit: "곳",
		group: "시설",
		num: true
	},
	{
		key: "multiRole",
		label: "둘 이상 기능 시설",
		unit: "곳",
		group: "시설",
		num: true
	},
	{
		key: "threePlus",
		label: "세 기능 이상 시설",
		unit: "곳",
		group: "시설",
		num: true
	},
	{
		key: "roles",
		label: "기능 종류",
		unit: "종",
		group: "시설",
		num: true
	},
	{
		key: "open",
		label: "운영 중 시설",
		unit: "곳",
		group: "운영",
		num: true
	},
	{
		key: "closed",
		label: "운영 중단 시설",
		unit: "곳",
		group: "운영",
		num: true
	},
	{
		key: "check",
		label: "확인 필요 시설",
		unit: "곳",
		group: "운영",
		num: true
	},
	{
		key: "events",
		label: "등록된 중단 일정",
		unit: "건",
		group: "운영",
		num: true
	},
	{
		key: "alternatives",
		label: "대체 시설 연결",
		unit: "건",
		group: "운영",
		num: true
	},
	{
		key: "tableRoles",
		label: "기능별 시설 수 표",
		group: "표",
		table: true
	},
	{
		key: "tableClosed",
		label: "운영 중단 시설 표",
		group: "표",
		table: true
	}
];
var VAR_BY_KEY = Object.fromEntries(VAR_DEFS.map((d) => [d.key, d]));
var TD = `border:1px solid ${colors.text.pri};padding:4px 6px;text-align:center`;
var TH = `${TD};background:${colors.mute};font-weight:700`;
var table = (head, rows) => `<table class="dv-table" style="border-collapse:collapse;width:100%;margin:6px 0"><thead><tr>${head.map((h) => `<th style="${TH}">${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td style="${TD}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
function computeVars(data, ms = Date.now()) {
	const facilities = data?.facilities || [];
	const roles = data?.roles || [];
	const by = countByStatus(facilities, ms);
	const roleCount = Object.fromEntries(roles.map((r) => [r.id, 0]));
	let events = 0;
	let alts = 0;
	let multi = 0;
	let three = 0;
	for (const f of facilities) {
		const ids = [...new Set((f.roles || []).map((r) => r.role))];
		if (ids.length >= 2) multi += 1;
		if (ids.length >= 3) three += 1;
		for (const id of ids) roleCount[id] = (roleCount[id] || 0) + 1;
		events += (f.events || []).length;
		alts += (f.alternatives || []).length;
	}
	const closedRows = facilities.filter((f) => (f.events || []).length).flatMap((f) => (f.events || []).map((e) => [
		f.name,
		e.cause || e.kind || "",
		`${e.start || "미정"} ~ ${e.end || "미정"}`,
		e.certainty || ""
	]));
	const vals = {
		today: dotDate(/* @__PURE__ */ new Date()),
		basis: data?.basis || "○○○",
		org: "동해시",
		facilities: facilities.length,
		multiRole: multi,
		threePlus: three,
		roles: roles.length,
		open: by.open || 0,
		closed: by.closed || 0,
		check: by.check || 0,
		events,
		alternatives: alts
	};
	vals.tableRoles = roles.length ? table(["기능", "시설 수"], roles.map((r) => [r.label, `${n(roleCount[r.id] || 0)}곳`])) : table(["기능", "시설 수"], [["자료 없음", ""]]);
	vals.tableClosed = closedRows.length ? table([
		"시설",
		"사유",
		"기간",
		"확실성"
	], closedRows) : table([
		"시설",
		"사유",
		"기간",
		"확실성"
	], [[
		"운영 중단 일정 없음",
		"",
		"",
		""
	]]);
	return vals;
}
function formatVar(key, vals) {
	const d = VAR_BY_KEY[key];
	const v = vals[key];
	if (v == null) return "○○○";
	if (d?.num && typeof v === "number") return `${n(v)}${d.unit || ""}`;
	return String(v);
}
function evalCalc(expr, vals, digits = 0) {
	const src = String(expr).replace(/[A-Za-z][A-Za-z0-9]*/g, (k) => VAR_BY_KEY[k]?.num ? String(Number(vals[k] || 0)) : "NaN");
	if (!/^[\d\s+\-*/().NaN]+$/.test(src)) return "계산 불가";
	try {
		const r = Function(`"use strict";return (${src})`)();
		if (!Number.isFinite(r)) return "계산 불가";
		return r.toLocaleString("ko-KR", {
			minimumFractionDigits: digits,
			maximumFractionDigits: digits
		});
	} catch {
		return "계산 불가";
	}
}
function withOverrides(vals, overrides) {
	if (!overrides) return vals;
	const out = { ...vals };
	for (const [k, t] of Object.entries(overrides)) {
		if (t == null) continue;
		const num = Number(String(t).replace(/[,\s]/g, "").replace(/(명|대|곳|건|%|분)$/, ""));
		out[k] = VAR_BY_KEY[k]?.num && Number.isFinite(num) && /\d/.test(t) ? num : t;
	}
	return out;
}
function refreshVars(root, vals) {
	root.querySelectorAll(".dv[data-var]").forEach((el) => {
		const k = el.dataset.var;
		if (VAR_BY_KEY[k]?.table) el.innerHTML = vals[k] || "";
		else el.textContent = formatVar(k, vals);
	});
	root.querySelectorAll(".dv[data-calc]").forEach((el) => {
		el.textContent = `${evalCalc(el.dataset.calc, vals, Number(el.dataset.fmt || 0))}${el.dataset.unit || ""}`;
	});
}
var V = (key) => VAR_BY_KEY[key]?.table ? `<div class="dv dv-block" data-var="${key}" contenteditable="false"></div>` : `<span class="dv" data-var="${key}" contenteditable="false"></span>`;
var C = (expr, unit = "", digits = 0) => `<span class="dv" data-calc="${expr}" data-fmt="${digits}" data-unit="${unit}" contenteditable="false"></span>`;
//#endregion
//#region src/lib/workspaceTemplates.js
var DOC_CATEGORIES = [
	{
		key: "gongmun",
		label: "공문"
	},
	{
		key: "report",
		label: "보고"
	},
	{
		key: "record",
		label: "기록"
	}
];
var P = (s) => `<p>${s}</p>`;
var DOC_TEMPLATES = [
	{
		key: "blank",
		title: "빈 문서",
		desc: "처음부터 쓰기",
		cat: "report",
		preset: "보고서",
		html: P("내용을 적습니다.")
	},
	{
		key: "request",
		title: "시설 협조 요청 공문",
		desc: "운영 중단 시설의 대체 시설 협조 요청",
		cat: "gongmun",
		preset: "기안문",
		numbering: "gian",
		head: {
			org: "동해시",
			to: "수신자 부서",
			via: "",
			title: "공공시설 기능 대체 협조 요청"
		},
		foot: { sender: "동해시장" },
		html: [
			P("1. 관련: 공공시설 기능연속성 관리 계획"),
			P("2. 아래 시설의 운영 중단으로 해당 역할을 대신할 시설의 협조를 요청합니다."),
			P("가. 대상 시설: ○○○"),
			P("나. 중단 기능: ○○○"),
			P("다. 중단 기간: ○○○"),
			P("라. 대체 요청 시설: ○○○"),
			P("3. 협조 가능 여부를 회신하여 주시기 바랍니다.")
		].join("")
	},
	{
		key: "continuity",
		title: "기능연속성 조치 계획",
		desc: "중단 기간 동안의 기능 대체 계획",
		cat: "report",
		preset: "계획서",
		html: [
			P("1. 추진 배경"),
			P("공공시설 한 곳이 여러 역할을 함께 맡고 있어 한 시설이 멈추면 여러 역할이 동시에 멈춥니다."),
			P("2. 현황"),
			P(`등록 시설 ${V("facilities")}, 둘 이상 기능을 맡은 시설 ${V("multiRole")}, 운영 중단 시설 ${V("closed")}.`),
			P("3. 조치 계획"),
			P("가. 대체 시설 지정: ○○○"),
			P("나. 주민 안내 방법: ○○○"),
			P("다. 복귀 시점: ○○○")
		].join("")
	},
	{
		key: "situation",
		title: "시설 운영 상황 보고",
		desc: "역할별 운영과 중단 현황 보고",
		cat: "report",
		preset: "보고서",
		html: [
			P(`기준 시각: ${V("today")}`),
			P(`등록 시설 ${V("facilities")} 가운데 운영 중 ${V("open")}, 중단 ${V("closed")}, 확인 필요 ${V("check")} 입니다.`),
			P("특이 사항: ○○○"),
			P("조치 사항: ○○○")
		].join("")
	},
	{
		key: "interview",
		title: "담당 부서 면담 기록",
		desc: "시설 운영 확인 면담 기록",
		cat: "record",
		preset: "회의록",
		html: [
			P(`일시: ${V("today")}`),
			P("장소: ○○○"),
			P("참석: 부서명만 적습니다."),
			P("확인 내용: ○○○"),
			P("후속 조치: ○○○")
		].join("")
	}
];
var SHEET_TEMPLATES = [
	{
		key: "blank",
		title: "빈 시트",
		desc: "처음부터 쓰기",
		columns: [
			{
				key: "a",
				label: "열 1"
			},
			{
				key: "b",
				label: "열 2"
			},
			{
				key: "c",
				label: "열 3"
			}
		],
		rows: [
			[
				"",
				"",
				""
			],
			[
				"",
				"",
				""
			],
			[
				"",
				"",
				""
			]
		]
	},
	{
		key: "facilities",
		title: "시설 기능 대장",
		desc: "시설별 기능과 담당 부서",
		columns: [
			{
				key: "name",
				label: "시설"
			},
			{
				key: "role",
				label: "기능"
			},
			{
				key: "dept",
				label: "담당 부서"
			},
			{
				key: "status",
				label: "운영 상태"
			},
			{
				key: "memo",
				label: "메모"
			}
		],
		rows: [[
			"",
			"",
			"",
			"",
			""
		], [
			"",
			"",
			"",
			"",
			""
		]]
	},
	{
		key: "closure",
		title: "운영 중단 일정표",
		desc: "공사와 점검으로 멈추는 기간",
		columns: [
			{
				key: "name",
				label: "시설"
			},
			{
				key: "cause",
				label: "사유"
			},
			{
				key: "start",
				label: "시작"
			},
			{
				key: "end",
				label: "종료"
			},
			{
				key: "alt",
				label: "대체 시설"
			}
		],
		rows: [[
			"",
			"",
			"",
			"",
			""
		]]
	},
	{
		key: "check",
		title: "현장 확인 기록",
		desc: "대장과 현장이 다른 항목 확인",
		columns: [
			{
				key: "name",
				label: "시설"
			},
			{
				key: "item",
				label: "확인 항목"
			},
			{
				key: "ledger",
				label: "대장 값"
			},
			{
				key: "field",
				label: "현장 값"
			},
			{
				key: "memo",
				label: "메모"
			}
		],
		rows: [[
			"",
			"",
			"",
			"",
			""
		]]
	}
];
var QUESTION_TYPES = [
	{
		value: "short",
		label: "단답형"
	},
	{
		value: "long",
		label: "장문형"
	},
	{
		value: "choice",
		label: "객관식"
	},
	{
		value: "check",
		label: "체크박스"
	},
	{
		value: "scale",
		label: "선형 배율"
	},
	{
		value: "date",
		label: "날짜"
	}
];
var FORM_TEMPLATES = [
	{
		key: "blank",
		title: "빈 설문지",
		desc: "처음부터 만들기",
		questions: [{
			type: "short",
			title: "질문",
			required: false
		}]
	},
	{
		key: "facilityCheck",
		title: "시설 운영 확인",
		desc: "담당 부서에 묻는 운영 상태 확인",
		questions: [
			{
				type: "short",
				title: "시설 이름",
				required: true
			},
			{
				type: "choice",
				title: "지금 운영 상태",
				required: true,
				options: [
					"운영 중",
					"운영 중단",
					"확인 필요"
				]
			},
			{
				type: "date",
				title: "중단 시작일",
				required: false
			},
			{
				type: "date",
				title: "운영 재개 예정일",
				required: false
			},
			{
				type: "long",
				title: "대체로 쓸 수 있는 시설",
				required: false
			}
		]
	},
	{
		key: "resident",
		title: "주민 이용 설문",
		desc: "시설을 찾을 때 겪는 어려움",
		questions: [
			{
				type: "short",
				title: "사는 동",
				required: true
			},
			{
				type: "check",
				title: "최근 한 해 동안 이용한 기능",
				required: false,
				options: [
					"쉼터",
					"대피",
					"임시주거",
					"급수",
					"응급",
					"체육",
					"돌봄",
					"행정"
				]
			},
			{
				type: "scale",
				title: "시설이 문을 열었는지 알기 쉬웠다",
				required: true,
				min: 1,
				max: 5
			},
			{
				type: "long",
				title: "헛걸음한 경험",
				required: false
			}
		]
	},
	{
		key: "ut",
		title: "사용성 평가 사후 설문",
		desc: "과업 후 만족도와 의견",
		questions: [
			{
				type: "short",
				title: "참여자 번호",
				required: true
			},
			{
				type: "scale",
				title: "시설이 맡은 기능을 한눈에 알 수 있었다",
				required: true,
				min: 1,
				max: 5
			},
			{
				type: "scale",
				title: "운영 중단 기간을 찾기 쉬웠다",
				required: true,
				min: 1,
				max: 5
			},
			{
				type: "scale",
				title: "대체 시설을 고르기 쉬웠다",
				required: true,
				min: 1,
				max: 5
			},
			{
				type: "long",
				title: "가장 헷갈린 화면과 이유",
				required: false
			}
		]
	},
	{
		key: "consent",
		title: "면담 참여 동의",
		desc: "참여, 녹음, 인용 동의",
		questions: [
			{
				type: "short",
				title: "소속",
				required: true
			},
			{
				type: "choice",
				title: "면담 참여에 동의합니까?",
				required: true,
				options: ["동의", "동의하지 않음"]
			},
			{
				type: "choice",
				title: "면담 녹음에 동의합니까?",
				required: true,
				options: ["동의", "동의하지 않음"]
			},
			{
				type: "choice",
				title: "발언 익명 인용에 동의합니까?",
				required: true,
				options: ["동의", "동의하지 않음"]
			}
		]
	}
];
//#endregion
//#region src/store/useWorkspaceStore.js
var nid = (p) => `${p}${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
var now = () => (/* @__PURE__ */ new Date()).toISOString();
var metaOf = (t) => ({
	template: t.key,
	preset: t.preset || "보고서",
	numbering: t.numbering || "report",
	bodyFont: "myeongjo",
	head: t.head ? { ...t.head } : null,
	foot: t.foot ? { ...t.foot } : null,
	approval: t.approval ? [...t.approval] : null,
	noticeHead: t.noticeHead ? { ...t.noticeHead } : null,
	press: t.press ? JSON.parse(JSON.stringify(t.press)) : null
});
var fromDocTemplate = (t, title) => ({
	id: nid("d"),
	kind: "doc",
	title: title || t.head?.title || t.title,
	html: t.html,
	meta: metaOf(t),
	updatedAt: now(),
	createdAt: now(),
	versions: [{
		at: now(),
		label: "처음 만듦",
		html: t.html
	}]
});
var fromSheetTemplate = (t, title) => ({
	id: nid("s"),
	kind: "sheet",
	title: title || t.title,
	columns: t.columns.map((c) => ({ ...c })),
	rows: (t.rows || []).map((r) => [...r]),
	source: t.source || null,
	formId: null,
	updatedAt: now(),
	createdAt: now()
});
var fromFormTemplate = (t, title) => ({
	id: nid("f"),
	kind: "form",
	title: title || t.title,
	desc: t.desc,
	questions: t.questions.map((q) => ({
		...q,
		id: nid("q"),
		options: q.options ? [...q.options] : void 0
	})),
	responses: [],
	open: true,
	sheetId: null,
	updatedAt: now(),
	createdAt: now()
});
function buildSeed() {
	const docs = [
		fromDocTemplate(DOC_TEMPLATES.find((t) => t.key === "situation")),
		fromDocTemplate(DOC_TEMPLATES.find((t) => t.key === "continuity")),
		fromDocTemplate(DOC_TEMPLATES.find((t) => t.key === "request"), "동해시 안전과 협조 요청 공문"),
		fromDocTemplate(DOC_TEMPLATES.find((t) => t.key === "interview"), "망상동 담당 부서 면담 기록")
	];
	const sheets = [fromSheetTemplate(SHEET_TEMPLATES.find((t) => t.key === "facilities"), "시설 기능 대장"), fromSheetTemplate(SHEET_TEMPLATES.find((t) => t.key === "closure"), "운영 중단 일정표")];
	const form = fromFormTemplate(FORM_TEMPLATES.find((t) => t.key === "facilityCheck"), "시설 운영 확인 요청");
	const formSheet = {
		id: nid("s"),
		kind: "sheet",
		title: `${form.title} (응답)`,
		columns: [],
		rows: [],
		source: "form",
		formId: form.id,
		updatedAt: now(),
		createdAt: now()
	};
	form.sheetId = formSheet.id;
	return [
		...docs,
		...sheets,
		form,
		formSheet
	];
}
var timers = /* @__PURE__ */ new Map();
var retries = /* @__PURE__ */ new Map();
var initPromise = null;
var useWorkspaceStore = create((set, get) => {
	const isServer = () => get().mode === "server";
	const pushNow = async (id) => {
		clearTimeout(timers.get(id));
		timers.delete(id);
		const item = get().items.find((x) => x.id === id);
		if (!item) return;
		set({ sync: "saving" });
		try {
			await put(item);
			retries.delete(id);
			set({
				sync: timers.size ? "saving" : "idle",
				savedAt: now()
			});
		} catch {
			const n = (retries.get(id) || 0) + 1;
			retries.set(id, n);
			set({ sync: "error" });
			if (n <= 3) timers.set(id, setTimeout(() => pushNow(id), 5e3));
		}
	};
	const schedule = (id) => {
		if (!isServer()) return;
		clearTimeout(timers.get(id));
		timers.set(id, setTimeout(() => pushNow(id), 1e3));
		set({ sync: "saving" });
	};
	return {
		items: buildSeed(),
		mode: "loading",
		ready: false,
		sync: "idle",
		savedAt: null,
		get: (id) => get().items.find((x) => x.id === id),
		init: () => {
			if (initPromise) return initPromise;
			initPromise = (async () => {
				try {
					let items = await list();
					if (!items.length) {
						items = (await seed(get().items)).seeded ? get().items : await list();
						if (!items.length) items = get().items;
					}
					set({
						items,
						mode: "server",
						ready: true
					});
					window.addEventListener("pagehide", () => {
						for (const id of [...timers.keys()]) {
							const item = get().items.find((x) => x.id === id);
							if (!item) continue;
							const body = JSON.stringify(serialize(item));
							if (body.length < 6e4) fetch("/api/workspace", {
								method: "PUT",
								headers: { "Content-Type": "application/json" },
								body,
								keepalive: true
							}).catch(() => {});
						}
					});
				} catch {
					set({
						mode: "memory",
						ready: true
					});
				}
			})();
			return initPromise;
		},
		flush: async () => {
			await Promise.all([...timers.keys()].map((id) => pushNow(id)));
		},
		create: (kind, templateKey, title) => {
			let item;
			if (kind === "doc") item = fromDocTemplate(DOC_TEMPLATES.find((t) => t.key === templateKey) || DOC_TEMPLATES[0], title);
			if (kind === "sheet") item = fromSheetTemplate(SHEET_TEMPLATES.find((t) => t.key === templateKey) || SHEET_TEMPLATES[0], title);
			if (kind === "form") item = fromFormTemplate(FORM_TEMPLATES.find((t) => t.key === templateKey) || FORM_TEMPLATES[0], title);
			set((s) => ({ items: [item, ...s.items] }));
			schedule(item.id);
			return item.id;
		},
		createFromHtml: (title, html) => {
			const item = {
				id: nid("d"),
				kind: "doc",
				title,
				html,
				updatedAt: now(),
				createdAt: now(),
				versions: [{
					at: now(),
					label: "파일에서 가져옴",
					html
				}]
			};
			set((s) => ({ items: [item, ...s.items] }));
			schedule(item.id);
			return item.id;
		},
		update: (id, patch) => {
			if (get().items.find((x) => x.id === id)?.meta?.locked) return;
			set((s) => ({ items: s.items.map((x) => x.id === id ? {
				...x,
				...patch,
				updatedAt: now()
			} : x) }));
			schedule(id);
		},
		remove: (id) => {
			if (get().items.find((x) => x.id === id)?.meta?.locked) return;
			const gone = get().items.filter((x) => x.id === id || x.formId === id).map((x) => x.id);
			set((s) => ({ items: s.items.filter((x) => !gone.includes(x.id)) }));
			for (const g of gone) {
				clearTimeout(timers.get(g));
				timers.delete(g);
				if (isServer()) del(g).catch(() => {});
			}
		},
		duplicate: (id) => {
			const src = get().items.find((x) => x.id === id);
			if (!src) return null;
			const copy = JSON.parse(JSON.stringify(src));
			copy.id = nid(src.kind[0]);
			copy.title = `${src.title} 사본`;
			copy.createdAt = now();
			copy.updatedAt = now();
			if (copy.kind === "form") {
				copy.responses = [];
				copy.sheetId = null;
			}
			if (copy.meta) {
				delete copy.meta.locked;
				delete copy.meta.pinned;
			}
			set((s) => ({ items: [copy, ...s.items] }));
			schedule(copy.id);
			return copy.id;
		},
		saveVersion: (id, label) => {
			if (get().items.find((x) => x.id === id)?.meta?.locked) return;
			let changed = false;
			set((s) => ({ items: s.items.map((x) => {
				if (x.id !== id || x.kind !== "doc") return x;
				const last = x.versions[x.versions.length - 1];
				if (last && last.html === x.html) return x;
				changed = true;
				return {
					...x,
					versions: [...x.versions, {
						at: now(),
						label: label || "자동 저장",
						html: x.html
					}].slice(-30)
				};
			}) }));
			if (changed) schedule(id);
		},
		submit: async (formId, answers) => {
			if (!isServer()) {
				set((s) => ({ items: s.items.map((x) => x.id === formId ? {
					...x,
					responses: [...x.responses, {
						id: nid("r"),
						at: now(),
						answers
					}]
				} : x) }));
				return { ok: true };
			}
			try {
				await get().flush();
				await submit(formId, answers);
				await get().refreshResponses(formId);
				return { ok: true };
			} catch (e) {
				return {
					ok: false,
					message: e.message || "응답을 보내지 못했습니다"
				};
			}
		},
		refreshResponses: async (formId) => {
			if (!isServer()) return;
			const list = await responses(formId);
			set((s) => ({ items: s.items.map((x) => x.id === formId ? {
				...x,
				responses: list
			} : x) }));
		},
		linkSheet: (formId) => {
			const form = get().items.find((x) => x.id === formId);
			if (!form) return null;
			if (form.sheetId && get().items.some((x) => x.id === form.sheetId)) return form.sheetId;
			const sheet = {
				id: nid("s"),
				kind: "sheet",
				title: `${form.title} (응답)`,
				columns: [],
				rows: [],
				source: "form",
				formId,
				updatedAt: now(),
				createdAt: now()
			};
			set((s) => ({ items: [sheet, ...s.items.map((x) => x.id === formId ? {
				...x,
				sheetId: sheet.id
			} : x)] }));
			schedule(sheet.id);
			schedule(formId);
			return sheet.id;
		}
	};
});
function useWorkspaceInit() {
	const ready = useWorkspaceStore((s) => s.ready);
	const init = useWorkspaceStore((s) => s.init);
	(0, import_react.useEffect)(() => {
		init();
	}, [init]);
	return ready;
}
function useFormResponsePolling(formId, enabled) {
	const refreshResponses = useWorkspaceStore((s) => s.refreshResponses);
	const mode = useWorkspaceStore((s) => s.mode);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const refresh = (0, import_react.useCallback)(async () => {
		if (!formId || mode !== "server") return;
		setLoading(true);
		try {
			await refreshResponses(formId);
		} catch {} finally {
			setLoading(false);
		}
	}, [
		formId,
		mode,
		refreshResponses
	]);
	(0, import_react.useEffect)(() => {
		if (!enabled || mode !== "server") return void 0;
		refresh();
		const t = setInterval(() => {
			if (document.visibilityState === "visible") refresh();
		}, 1e4);
		return () => clearInterval(t);
	}, [
		enabled,
		mode,
		refresh
	]);
	return {
		refresh,
		loading
	};
}
//#endregion
export { publicForm as C, parseFile as S, withOverrides as _, DOC_TEMPLATES as a, law as b, SHEET_TEMPLATES as c, VAR_BY_KEY as d, VAR_DEFS as f, refreshVars as g, formatVar as h, DOC_CATEGORIES as i, C as l, evalCalc as m, useWorkspaceInit as n, FORM_TEMPLATES as o, computeVars as p, useWorkspaceStore as r, QUESTION_TYPES as s, useFormResponsePolling as t, V as u, hwpx as v, submit as w, lint as x, hwpxPreview as y };

import { d as useNavigate, h as require_react, p as useParams, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
import { t as Select } from "./Select-UMsCnY49.js";
import { t as EmptyState } from "./EmptyState-XkMqg1JB.js";
import { t as Search } from "./search-B5z5RKz4.js";
import { C as alternativesOf, H as dotDate, I as STATUS_LABEL, L as activeEvents, O as km, Z as useStrata, q as statusAt } from "./index-iSpUmSYP.js";
import { i as todayLabel, r as PageHeader, t as StatusChip } from "./StatusChip-CTSks7fv.js";
import { t as PageShell } from "./PageShell-GgddYxkL.js";
import { a as DetailSection, n as LinkRow, o as ListDetail, r as InfoRows } from "./console-Bo24m_YT.js";
import { t as Input } from "./Input-xFxgKSoK.js";
//#region src/components/ui/FilterBar.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function FilterBar({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": "필터",
		className: clsx("flex flex-wrap items-center gap-2", className),
		children
	});
}
//#endregion
//#region src/pages/console/FacilitiesScreen.jsx
var TONE = {
	open: "primary",
	closed: "danger",
	check: "neutral"
};
function FacilitiesScreen() {
	const { data, ready, empty } = useStrata();
	const { id } = useParams();
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("all");
	const [state, setState] = (0, import_react.useState)("all");
	const [page, setPage] = (0, import_react.useState)(0);
	const now = Date.now();
	const STEP = 12;
	const facilities = data.facilities || [];
	const roles = data.roles || [];
	const roleLabel = (rid) => roles.find((r) => r.id === rid)?.label || "기타";
	const byId = (0, import_react.useMemo)(() => Object.fromEntries(facilities.map((f) => [f.id, f])), [facilities]);
	const rows = (0, import_react.useMemo)(() => facilities.filter((f) => {
		if (role !== "all" && !(f.roles || []).some((r) => r.role === role)) return false;
		if (state !== "all" && statusAt(f, now) !== state) return false;
		if (!q) return true;
		return `${f.name} ${f.dong || ""} ${f.type || ""} ${f.addr || ""}`.includes(q);
	}), [
		facilities,
		q,
		role,
		state,
		now
	]);
	const open = (id ? byId[id] : null) || rows[0] || null;
	(0, import_react.useEffect)(() => {
		if (id && ready && !byId[id]) navigate("/admin/facilities", { replace: true });
	}, [
		id,
		ready,
		byId,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		setPage(0);
	}, [
		q,
		role,
		state
	]);
	const pages = Math.max(1, Math.ceil(rows.length / STEP));
	const cur = Math.min(page, pages - 1);
	const items = rows.slice(cur * STEP, (cur + 1) * STEP).map((f) => {
		const st = statusAt(f, now);
		return {
			id: f.id,
			title: f.name,
			sub: `${f.dong || "동 미상"}, ${[...new Set((f.roles || []).map((r) => r.role))].map(roleLabel).join(", ")}`,
			chip: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
				tone: TONE[st],
				children: STATUS_LABEL[st]
			})
		};
	});
	const roleOptions = [{
		value: "all",
		label: "전체"
	}, ...roles.map((r) => ({
		value: r.id,
		label: r.label
	}))];
	const stateOptions = [
		{
			value: "all",
			label: "전체"
		},
		{
			value: "open",
			label: "운영 중"
		},
		{
			value: "closed",
			label: "운영 중단"
		},
		{
			value: "check",
			label: "확인 필요"
		}
	];
	const detail = (() => {
		if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			compact: true,
			title: "조건에 맞는 시설 없음",
			desc: "조건을 바꿔 다시 확인"
		});
		const st = statusAt(open, now);
		const evs = activeEvents(open, now);
		const openRoles = [...new Set((open.roles || []).map((r) => r.role))];
		const closedRoles = [...new Set(evs.flatMap((e) => e.roles || []))];
		const alts = alternativesOf(open, byId, closedRoles.length ? closedRoles : openRoles);
		const history = (open.events || []).slice().sort((a, b) => String(b.start || b.notice || "").localeCompare(String(a.start || a.notice || "")));
		const sourceLabel = (sid) => (data.sources || []).find((x) => x.id === sid)?.label || "";
		const sourceNames = [...new Set((open.roles || []).map((r) => sourceLabel(r.source)).filter(Boolean))];
		const basisDate = (data.sources || [])[0]?.date || "";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailSection, {
				title: "결론",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-title text-text-pri",
					children: st === "closed" ? `오늘 운영 중단, 비는 역할 ${closedRoles.length || openRoles.length}개` : st === "check" ? "대장과 공지 불일치, 담당 부서 확인 대상" : "오늘 운영 중"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRows, {
					className: "mt-2",
					rows: [
						{
							key: "n",
							label: "시설 이름",
							value: open.fullName || open.name,
							strong: true
						},
						{
							key: "a",
							label: "주소",
							value: open.addr || "자료 없음"
						},
						{
							key: "t",
							label: "분류",
							value: [open.type, open.dong].filter(Boolean).join(", ")
						},
						{
							key: "r",
							label: "맡은 역할",
							value: openRoles.map(roleLabel).join(", ") || "없음"
						},
						...evs.length ? [{
							key: "e",
							label: "오늘 중단 기간",
							value: `${dotDate(evs[0].start)} 부터 ${evs[0].end ? `${dotDate(evs[0].end)} 까지` : "미정"}`
						}] : []
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
				title: "할 일",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "-mx-3",
					children: [alts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
						dense: true,
						onClick: () => navigate(`/admin/facilities/${a.facilityId}`),
						title: a.facility?.name || "가까운 시설",
						sub: `${roleLabel(a.role)} 대신 갈 곳, 오르막 ${Math.round(a.climbM || 0)}m`,
						value: km(a.distM)
					}) }, a.role + a.facilityId)), !alts.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 type-body text-text-sec",
						children: "등록된 대체 시설 없음, 같은 역할 시설 지정 필요"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
				title: "근거",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRows, { rows: [
					...history.slice(0, 4).map((e, i) => ({
						key: `h${i}`,
						label: e.kind || "운영 변경",
						value: `${e.start ? dotDate(e.start) : "시작 미정"} 부터 ${e.end ? `${dotDate(e.end)} 까지` : "미정"}, ${e.certainty || "예정"}`,
						note: [
							e.cause,
							e.source,
							e.notice ? `공고 ${dotDate(e.notice)}` : ""
						].filter(Boolean).join(", ")
					})),
					...history.length ? [] : [{
						key: "h0",
						label: "운영 변경 이력",
						value: "없음"
					}],
					{
						key: "s",
						label: "자료 출처",
						value: sourceNames.join(", ") || "공개 자료"
					},
					...basisDate ? [{
						key: "d",
						label: "기준일",
						value: basisDate
					}] : []
				] })
			})
		] });
	})();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "시설",
		hideHeader: true,
		className: "flex flex-col lg:pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "시설",
				meta: todayLabel(),
				className: "!mb-3 shrink-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterBar, {
				className: "mb-4 shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "시설 찾기",
						compact: true,
						placeholder: "시설 이름, 동 이름, 분류",
						value: q,
						onChange: (e) => setQ(e.target.value),
						leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 16,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						compact: true,
						label: "역할",
						value: role,
						onChange: setRole,
						options: roleOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						compact: true,
						label: "오늘 상태",
						value: state,
						onChange: setState,
						options: stateOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "type-body-sm text-text-sec tabular-nums",
						children: [rows.length, "곳"]
					})
				]
			}),
			ready && empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center type-body-sm text-text-meta",
				children: "시설 자료 준비 중"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListDetail, {
					items,
					selectedId: open?.id,
					onSelect: (fid) => navigate(`/admin/facilities/${fid}`),
					listLabel: "시설 목록",
					listTitle: `시설 ${rows.length}곳`,
					children: detail
				}), pages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-w-0 gap-10 cq-lg:grid-cols-[5fr_7fr] cq-lg:gap-8 cq-xl:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "쪽 이동",
						className: "mt-3 flex items-center justify-between gap-2 px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "type-body-sm text-text-sec tabular-nums",
							children: [
								cur * STEP + 1,
								"-",
								Math.min(rows.length, (cur + 1) * STEP),
								" / ",
								rows.length.toLocaleString("ko-KR")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: cur === 0,
								onClick: () => setPage(cur - 1),
								className: "inline-flex h-10 items-center rounded-lg px-3 type-body-sm text-text-pri hover:bg-subtle disabled:text-text-ter",
								children: "이전"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: cur >= pages - 1,
								onClick: () => setPage(cur + 1),
								className: "inline-flex h-10 items-center rounded-lg px-3 type-body-sm text-text-pri hover:bg-subtle disabled:text-text-ter",
								children: "다음"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
				})]
			})
		]
	});
}
//#endregion
export { FacilitiesScreen as default };

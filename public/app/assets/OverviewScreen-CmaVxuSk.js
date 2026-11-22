import { h as require_react, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, t as Button } from "./Button-scljtAU-.js";
import { A as reviewItems, D as fmt, E as closedToday, T as closedByDong, Z as useStrata, j as statusCount } from "./index-iSpUmSYP.js";
import { i as todayLabel, n as SummaryRows, r as PageHeader } from "./StatusChip-CTSks7fv.js";
import { t as PageShell } from "./PageShell-GgddYxkL.js";
import { c as StatusBand, i as Section, n as LinkRow, s as NumberFlow } from "./console-Bo24m_YT.js";
//#region src/components/dashboard/RegionBars.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var shortName = (n) => n.replace(/ 일대$/, "").replace(/동$/, "");
function RegionBars({ rows, className = "h-[140px] cq-2xl:h-[264px]", ariaLabel, fill = false }) {
	const max = Math.max(1, ...rows.map((r) => r.value));
	const top = rows.reduce((m, r) => r.value > m.value ? r : m, { value: -1 });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: clsx("flex gap-1", fill && "cq-xl:min-h-[200px] cq-xl:max-h-[320px] cq-xl:flex-1"),
		role: "img",
		"aria-label": ariaLabel || `지역별 운영 중단 시설: ${rows.map((r) => `${r.name} ${r.value}곳`).join(", ")}`,
		children: rows.map((r) => {
			const hot = r.key === top.key && r.value > 0;
			const pct = r.value > 0 ? Math.max(14, Math.round(r.value / max * 100)) : 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col items-center",
				title: `${r.name} ${r.value}곳`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: clsx("flex w-full flex-col items-center justify-end", fill ? "h-[140px] cq-xl:h-auto cq-xl:min-h-0 cq-xl:flex-1" : className),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col items-center justify-end",
						style: {
							height: r.value > 0 ? `${pct}%` : void 0,
							minHeight: r.value > 0 ? 32 : 4
						},
						children: [r.value > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: clsx("mb-1 type-meta tabular-nums", hot ? "font-bold text-danger-text" : "text-text-sec"),
							children: r.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: clsx("min-h-1 w-7 flex-1 rounded-t-sm", hot ? "bg-danger" : r.value > 0 ? "bg-text-sec" : "bg-mute"),
							style: r.value > 0 ? void 0 : {
								flex: "none",
								height: 4
							}
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 w-full break-keep text-center type-meta text-text-sec",
					children: shortName(r.name)
				})]
			}, r.key);
		})
	});
}
//#endregion
//#region src/components/strata/useLive.js
async function ask(kind) {
	const res = await fetch(`/api/live?kind=${kind}`, { credentials: "same-origin" });
	if (!res.ok) throw new Error(String(res.status));
	return res.json();
}
function useLive() {
	const [state, setState] = (0, import_react.useState)({
		ready: false,
		ok: false,
		warning: null,
		er: null
	});
	(0, import_react.useEffect)(() => {
		let live = true;
		Promise.allSettled([ask("warning"), ask("er")]).then(([w, e]) => {
			if (!live) return;
			const warning = w.status === "fulfilled" ? w.value : null;
			const er = e.status === "fulfilled" ? e.value : null;
			setState({
				ready: true,
				ok: Boolean(warning || er),
				warning,
				er
			});
		});
		return () => {
			live = false;
		};
	}, []);
	return state;
}
function warningText(warning) {
	const list = (warning?.list || []).filter((x) => x.forDonghae);
	if (!list.length) return "발효 특보 없음";
	return [...new Set(list.map((x) => x.title).filter(Boolean))].slice(0, 2).join(", ");
}
function erText(er) {
	const list = er?.list || [];
	if (!list.length) return null;
	const beds = list.filter((x) => Number.isFinite(x.beds));
	if (!beds.length) return `응급의료기관 ${list.length}곳`;
	const sum = beds.reduce((n, x) => n + x.beds, 0);
	return `${beds.length}곳 병상 ${sum}개`;
}
//#endregion
//#region src/pages/console/OverviewScreen.jsx
function useSaved() {
	const [rows, setRows] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let live = true;
		fetch("/api/status", { credentials: "same-origin" }).then((r) => r.ok ? r.json() : null).then((d) => {
			if (live && d) setRows(d.events || []);
		}).catch(() => {});
		return () => {
			live = false;
		};
	}, []);
	return rows;
}
function OverviewScreen() {
	const { data, ready, empty } = useStrata();
	const live = useLive();
	const saved = useSaved();
	const now = Date.now();
	const facilities = data.facilities || [];
	const roles = data.roles || [];
	const roleLabel = (id) => roles.find((r) => r.id === id)?.label || "기타";
	const gap = (0, import_react.useMemo)(() => closedToday(facilities, now), [facilities, now]);
	const bars = (0, import_react.useMemo)(() => closedByDong(facilities, now), [facilities, now]);
	const review = (0, import_react.useMemo)(() => reviewItems(facilities), [facilities]);
	const status = (0, import_react.useMemo)(() => statusCount(facilities, now), [facilities, now]);
	const noticeCount = review.filter((it) => it.kind === "공지 판독").length;
	const ledgerCount = review.filter((it) => it.kind === "대장 확인").length;
	const headline = gap.facilities ? `오늘 운영 중단 ${fmt(gap.facilities)}곳, 비는 역할 ${fmt(gap.roleSlots)}개` : "오늘 운영 중단 시설 없음";
	const basisDate = (data.sources || [])[0]?.date || "";
	const flow = [
		{
			label: "등록 시설",
			value: fmt(facilities.length),
			unit: "곳",
			note: `${roles.length}종 역할`
		},
		{
			label: "오늘 운영 중단",
			value: fmt(gap.facilities),
			unit: "곳",
			note: `운영 중 ${fmt(status.open)}곳`,
			tone: gap.facilities ? "danger" : void 0
		},
		{
			label: "비는 역할",
			value: fmt(gap.roleSlots),
			unit: "개",
			note: "중단 시설이 맡던 역할",
			tone: gap.roleSlots ? "danger" : void 0
		},
		{
			label: "대체 지정 완료",
			value: fmt(gap.covered),
			unit: "개",
			note: `남은 지정 ${fmt(Math.max(0, gap.roleSlots - gap.covered))}개`
		}
	];
	const factRows = [
		{
			key: "f",
			label: "등록 시설",
			value: `${fmt(facilities.length)}곳`
		},
		{
			key: "c",
			label: "오늘 운영 중단",
			value: `${fmt(gap.facilities)}곳`,
			tone: gap.facilities ? "danger" : void 0
		},
		{
			key: "g",
			label: "비는 역할",
			value: `${fmt(gap.roleSlots)}개`
		},
		{
			key: "a",
			label: "대체 지정 완료",
			value: `${fmt(gap.covered)}개`
		},
		{
			key: "r",
			label: "대장과 공지 불일치",
			value: `${fmt(status.check)}곳`
		},
		{
			key: "s",
			label: "담당자 확인 반영",
			value: `${fmt(saved.length)}건`
		}
	];
	const todoRows = [
		...noticeCount ? [{
			key: "notice",
			to: "/admin/review",
			title: "공지 판독 확인 대기",
			sub: "공고 기간과 착공 확인",
			value: `${fmt(noticeCount)}건`
		}] : [],
		...ledgerCount ? [{
			key: "ledger",
			to: "/admin/review",
			title: "대장과 공지 대조",
			sub: "담당 부서 확인",
			value: `${fmt(ledgerCount)}건`
		}] : [],
		...gap.roleSlots - gap.covered > 0 ? [{
			key: "alt",
			to: "/admin/facilities",
			title: "대체 시설 지정",
			sub: "비는 역할 가운데",
			value: `${fmt(gap.roleSlots - gap.covered)}개`
		}] : [],
		...gap.items.slice(0, 3).map(({ facility, roles: rs }) => ({
			key: facility.id,
			to: `/admin/facilities/${facility.id}`,
			title: facility.name,
			sub: rs.map(roleLabel).join(", "),
			value: "운영 중단",
			tone: "danger"
		}))
	];
	const erLine = erText(live.er);
	const conditionRows = [{
		key: "w",
		label: "기상특보",
		value: warningText(live.warning)
	}, ...erLine ? [{
		key: "e",
		label: "응급실 병상",
		value: erLine
	}] : []];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "오늘의 현황",
		hideHeader: true,
		className: "flex h-full min-h-fit flex-col !pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "오늘의 현황",
			meta: todayLabel()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBand, {
					tag: gap.facilities ? "운영 중단" : "이상 없음",
					tone: gap.facilities ? "danger" : "primary",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						as: Link,
						to: "/admin/review",
						children: "판독함"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						as: Link,
						to: "/admin/facilities",
						variant: "secondary",
						children: "대체 시설 지정"
					})] }),
					children: headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberFlow, {
					items: flow,
					cards: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-w-0 gap-x-10 gap-y-8 cq-lg:[grid-template-columns:minmax(0,1fr)_20rem] cq-lg:[grid-template-areas:'chart_todo''facts_facts'] cq-xl:[grid-template-columns:17rem_minmax(0,1fr)_21rem] cq-xl:[grid-template-areas:'facts_chart_todo'] cq-2xl:[grid-template-columns:19rem_minmax(0,1fr)_24rem]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid min-w-0 content-start gap-10 [grid-area:chart]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								id: "ov-chart",
								title: "동별 운영 중단 시설",
								action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin/board",
									className: "inline-flex min-h-7 items-center type-strong text-primary-text hover:underline",
									children: "상황판에서 보기"
								}),
								children: bars.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionBars, { rows: bars }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "type-body text-text-sec",
									children: "오늘 운영 중단 시설 없음"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								id: "ov-list",
								title: "운영 중단 시설",
								count: `${gap.items.length}곳`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "-mx-3 cq-xl:grid cq-xl:grid-cols-2 cq-xl:gap-x-2",
									children: [gap.items.slice(0, 10).map(({ facility, roles: rs, covered }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
										dense: true,
										to: `/admin/facilities/${facility.id}`,
										title: facility.name,
										sub: facility.dong || "동 미상",
										value: covered === rs.length ? "대체 지정" : `지정 ${rs.length - covered}개 남음`,
										tone: covered === rs.length ? void 0 : "danger"
									}) }, facility.id)), !gap.items.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "type-body text-text-sec",
										children: "오늘 운영 중단 시설 없음"
									})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid min-w-0 content-start gap-6 [grid-area:todo]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								id: "ov-todo",
								title: "처리할 일",
								count: todoRows.length,
								children: todoRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "type-body text-text-sec",
									children: "처리할 일 없음"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "-mx-3",
									children: todoRows.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
										dense: true,
										to: t.to,
										title: t.title,
										sub: t.sub,
										value: t.value,
										tone: t.tone
									}) }, t.key))
								})
							}), live.ready && live.ok && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								tone: "surface",
								dense: true,
								id: "ov-live",
								title: "오늘 여건",
								className: "!p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRows, { rows: conditionRows }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 type-meta text-text-sec",
									children: "기상청 기상특보 조회, 국립중앙의료원 응급의료기관 정보 조회"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid min-w-0 content-start gap-6 [grid-area:facts]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								tone: "surface",
								dense: true,
								id: "ov-facts",
								title: "오늘 현황",
								className: "!p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRows, { rows: factRows }), basisDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 type-meta text-text-sec",
									children: ["자료 기준 ", basisDate]
								})]
							})
						})
					]
				}),
				ready && empty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-16 text-center type-body-sm text-text-meta",
					children: "시설 자료 준비 중"
				})
			]
		})]
	});
}
//#endregion
export { OverviewScreen as default };

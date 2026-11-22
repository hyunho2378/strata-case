import { t as require_jsx_runtime } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
//#region src/lib/todayLabel.js
var WEEK = [
	"일",
	"월",
	"화",
	"수",
	"목",
	"금",
	"토"
];
var todayLabel = (d = /* @__PURE__ */ new Date()) => `${d.getMonth() + 1}월 ${d.getDate()}일 ${WEEK[d.getDay()]}요일`;
//#endregion
//#region src/components/console/PageHeader.jsx
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, meta, action, className }) {
	const shown = meta === void 0 ? todayLabel() : meta;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx("mb-4 [@media(max-height:860px)]:mb-2 flex min-h-10 flex-wrap items-center justify-between gap-x-4 gap-y-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "flex min-w-0 items-baseline gap-2 type-h2 text-text-pri",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0",
				children: title
			}), shown && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 truncate font-normal text-text-sec",
				children: [
					"(",
					shown,
					")"
				]
			})]
		}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: action
		})]
	});
}
//#endregion
//#region src/components/console/SummaryRows.jsx
function SummaryRows({ rows, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: clsx("min-w-0", className),
		children: rows.filter(Boolean).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-9 items-baseline justify-between gap-4 py-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "shrink-0 type-body-sm text-text-sec",
				children: r.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
				className: clsx("min-w-0 break-keep text-right type-body-strong tabular-nums", r.tone === "danger" ? "text-danger-text" : "text-text-pri"),
				children: [r.value, r.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block type-meta font-normal text-text-sec",
					children: r.note
				})]
			})]
		}, r.key ?? r.label))
	});
}
//#endregion
//#region src/components/console/StatusChip.jsx
var TONE = {
	danger: "bg-danger text-text-inverse",
	primary: "bg-primary text-text-inverse",
	neutral: "bg-mute text-text-pri"
};
function StatusChip({ tone = "neutral", children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: clsx("inline-flex h-6 items-center whitespace-nowrap rounded-full px-2.5 type-caption tabular-nums", TONE[tone], className),
		children
	});
}
//#endregion
export { todayLabel as i, SummaryRows as n, PageHeader as r, StatusChip as t };

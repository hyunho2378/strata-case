import { h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
//#region src/components/ui/SegmentControl.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SegmentControl({ items = [], value, onChange, label, className }) {
	const refs = (0, import_react.useRef)([]);
	const idx = items.findIndex((i) => i.value === value);
	const onKeyDown = (e) => {
		if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
		e.preventDefault();
		const next = e.key === "ArrowRight" ? (idx + 1) % items.length : (idx - 1 + items.length) % items.length;
		onChange?.(items[next].value);
		refs.current[next]?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": label,
		onKeyDown,
		className: clsx("inline-flex rounded-sm bg-mute p-1 gap-1", className),
		children: items.map((it, i) => {
			const active = it.value === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				ref: (el) => {
					refs.current[i] = el;
				},
				type: "button",
				role: "radio",
				"aria-checked": active,
				tabIndex: active ? 0 : -1,
				onClick: () => onChange?.(it.value),
				className: clsx("pressable h-8 min-h-11 md:min-h-0 px-3 rounded-xs type-caption whitespace-nowrap", active ? "bg-page text-text-pri shadow-sm" : "text-text-sec hover:text-text-pri"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5",
					children: [it.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
						size: 16,
						"aria-hidden": "true",
						className: it.iconClass
					}), it.label]
				})
			}, it.value);
		})
	});
}
//#endregion
export { SegmentControl as t };

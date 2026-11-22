import { h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
//#region src/components/ui/Input.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Input({ label, hint, error, leftIcon, rightSlot, id, className, compact = false, ...rest }) {
	const auto = (0, import_react.useId)();
	const inputId = id || auto;
	const descId = error || hint ? `${inputId}-desc` : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			label && !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: inputId,
				className: "block type-caption text-text-sec mb-1.5",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: clsx("flex items-center h-11 px-3 rounded-md bg-page border transition-colors duration-fast", error ? "border-danger" : "border-line-def hover:border-line-strong", "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary-line"),
				children: [
					leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 text-text-meta",
						children: leftIcon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoComplete: "off",
						spellCheck: false,
						id: inputId,
						"aria-invalid": error ? true : void 0,
						"aria-describedby": descId,
						"aria-label": compact ? label : void 0,
						className: "flex-1 h-full min-w-0 bg-transparent outline-none type-body-sm text-text-pri placeholder:text-text-ter",
						...rest
					}),
					rightSlot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 shrink-0",
						children: rightSlot
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: descId,
				role: "alert",
				className: "mt-1 type-caption text-danger-text",
				children: error
			}) : hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: descId,
				className: "mt-1 type-meta text-text-meta",
				children: hint
			})
		]
	});
}
//#endregion
export { Input as t };

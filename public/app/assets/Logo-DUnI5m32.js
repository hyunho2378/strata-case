import { r as Link, t as require_jsx_runtime } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
import { pt as Layers } from "./index-iSpUmSYP.js";
//#region src/components/nav/Logo.jsx
var import_jsx_runtime = require_jsx_runtime();
function Logo({ to = "/", className, compact = false, linked = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(linked ? Link : "span", {
		...linked ? {
			to,
			"aria-label": "Strata 홈"
		} : {},
		className: clsx("inline-flex items-center gap-2 min-h-11 md:min-h-0 text-text-pri", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-text-inverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
				size: 20,
				"aria-hidden": "true"
			})
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "type-h3",
			children: "Strata"
		})]
	});
}
//#endregion
export { Logo as t };

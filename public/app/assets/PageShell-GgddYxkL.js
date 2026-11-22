import { h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
import { at as useTopbar } from "./index-iSpUmSYP.js";
import { r as PageHeader } from "./StatusChip-CTSks7fv.js";
//#region src/components/strata/PageShell.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ title, eyebrow, actions = null, hideHeader = false, children, className, full = false }) {
	useTopbar({
		title,
		actions: null
	});
	(0, import_react.useEffect)(() => {
		if (title) document.title = `${title} | Strata`;
	}, [title]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx(full ? "cq flex h-full w-full flex-col p-2" : "cq w-full px-4 md:px-6 pt-3 pb-6 lg:px-8 lg:pt-4", className),
		children: [!hideHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title,
			meta: eyebrow,
			action: actions
		}), children]
	});
}
//#endregion
export { PageShell as t };

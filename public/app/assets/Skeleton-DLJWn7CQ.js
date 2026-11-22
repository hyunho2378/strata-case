import { t as require_jsx_runtime } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
import { it as useLang } from "./index-iSpUmSYP.js";
//#region src/components/ui/Skeleton.jsx
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ variant = "block", lines = 3, className }) {
	const { t } = useLang();
	const live = {
		role: "status",
		"aria-live": "polite",
		"aria-label": t("common.meta.loading")
	};
	if (variant === "text") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: clsx("space-y-2", className),
		...live,
		children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: clsx("h-3 rounded-xs skeleton-bar", i === 1 && "skeleton-bar-2", i === 2 && "skeleton-bar-3", i === lines - 1 ? "w-2/3" : "w-full") }, i))
	});
	if (variant === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx("bg-page rounded-lg shadow-card p-4 lg:p-5", className),
		...live,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-1/3 rounded-xs skeleton-bar" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-3 w-full rounded-xs skeleton-bar skeleton-bar-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-3 w-4/5 rounded-xs skeleton-bar skeleton-bar-3" })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: clsx("rounded-md skeleton-bar", className),
		...live
	});
}
//#endregion
export { Skeleton as t };

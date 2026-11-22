import { t as require_jsx_runtime } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon, t as Button } from "./Button-scljtAU-.js";
import { it as useLang } from "./index-iSpUmSYP.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCw = createLucideIcon("rotate-cw", [["path", {
	d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
	key: "1p45f6"
}], ["path", {
	d: "M21 3v5h-5",
	key: "1q7to0"
}]]);
//#endregion
//#region src/components/ui/EmptyState.jsx
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ tone = "empty", title, desc, action, onRetry, image, className, compact = false }) {
	const { t } = useLang();
	const isError = tone === "error";
	const src = image || "/images/illustrations/empty.svg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx(compact ? "py-8" : "py-16", "flex flex-col items-center text-center", className),
		role: isError ? "alert" : void 0,
		children: [
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "w-24 h-24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: clsx(compact ? "type-body-strong" : "mt-4 type-h3", "text-text-pri"),
				children: title || (isError ? t("common.error.loadTitle") : "")
			}),
			(desc || isError) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 type-body-sm text-text-meta max-w-[320px]",
				children: desc || t("common.error.loadDesc")
			}),
			(action || onRetry) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: action || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: onRetry,
					leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
						size: 16,
						"aria-hidden": "true"
					}),
					children: t("common.action.retry")
				})
			})
		]
	});
}
//#endregion
export { EmptyState as t };

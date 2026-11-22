import { r as Link, t as require_jsx_runtime } from "./jsx-runtime-CjhTEqEu.js";
import { t as Button } from "./Button-scljtAU-.js";
//#region src/pages/public/NotFoundPage.jsx
var import_jsx_runtime = require_jsx_runtime();
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center justify-center px-4 py-20 text-center page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/strata-case/app/images/illustrations/not-found.svg",
				alt: "",
				className: "h-32 w-32"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 type-h1 text-text-pri",
				children: "찾는 화면 없음"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 type-body text-text-sec",
				children: "주소에 해당하는 화면 없음, 주소 확인 필요"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					as: Link,
					to: "/",
					size: "lg",
					children: "지도 화면"
				})
			})
		]
	});
}
//#endregion
export { NotFoundPage as default };

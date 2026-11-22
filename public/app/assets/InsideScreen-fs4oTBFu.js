import { h as require_react, p as useParams, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { X as useJson, Z as useStrata, tt as colors } from "./index-iSpUmSYP.js";
//#region src/pages/facility/InsideScreen.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function InsideScreen() {
	const { id } = useParams();
	const { data: strata } = useStrata();
	const { data: inside, ready } = useJson("inside.json");
	const [imageOk, setImageOk] = (0, import_react.useState)(true);
	const facility = (strata.facilities || []).find((f) => f.id === id);
	const areas = (0, import_react.useMemo)(() => inside && (inside[id]?.areas || inside[id]) || [], [inside, id]);
	const hasAreas = Array.isArray(areas) && areas.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-page px-4 py-6 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/board",
				className: "type-body-sm text-primary-text underline",
				children: "상황판으로 돌아가기"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 type-h1 text-text-pri",
				children: [facility?.name || "시설", " 속 보기"]
			}),
			ready && (!imageOk || !hasAreas) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-md bg-page px-6 py-16 text-center shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-h3 text-text-pri",
					children: "등록된 층 자료 없음"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 type-body-sm text-text-sec",
					children: "단면 그림과 공간 영역 등록 뒤 표시"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 overflow-hidden rounded-md bg-page shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `/inside/${id}.webp`,
					alt: `${facility?.name || "시설"} 단면 그림`,
					onError: () => setImageOk(false),
					className: "block w-full"
				}), areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute rounded-sm transition-opacity duration-fast hover:brightness-110",
					style: {
						left: `${a.x}%`,
						top: `${a.y}%`,
						width: `${a.w}%`,
						height: `${a.h}%`,
						backgroundColor: colors.primary.DEFAULT,
						opacity: .32
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-1 top-1 rounded-xs bg-page px-1 type-meta text-text-pri",
						children: a.label
					})
				}, a.id || a.label))]
			})
		]
	});
}
//#endregion
export { InsideScreen as default };

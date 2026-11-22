import { a as useSearchParams, d as useNavigate, h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { a as placeMeta, n as CitizenMap, o as useCitizenModel, s as useHere, t as DesktopCitizen } from "./DesktopCitizen-CkJI-cU7.js";
import { R as categoryById, _ as Segmented, g as ListRow, h as List, s as AppBar, x as useWide } from "./index-iSpUmSYP.js";
//#region src/mobile/citizen/CitizenMapScreen.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function CitizenMapScreen() {
	const { facilities, now, listOf } = useCitizenModel();
	const { coords } = useHere();
	const [view, setView] = (0, import_react.useState)("2d");
	const [picked, setPicked] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const [params] = useSearchParams();
	const cat = params.get("cat");
	const rows = listOf({
		cat,
		coords,
		limit: 12
	});
	const category = categoryById(cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, { title: category ? category.name : "지도" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mob-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
				label: "지도 보기",
				value: view,
				onChange: setView,
				options: [{
					value: "2d",
					label: "위에서 보기"
				}, {
					value: "3d",
					label: "3D 보기"
				}]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cit-map",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenMap, {
					facilities,
					roleFilter: category?.roleIds || [],
					subFilter: category?.subIds || [],
					time: now,
					viewMode: view,
					focusId: picked,
					onPick: (e) => {
						if (e?.facilityId) setPicked(e.facilityId);
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mob-section-title mob-t-headline",
				children: "지금 열린 곳"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "지금 열린 곳",
				children: rows.map(({ f, st, distM }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: f.name,
					subtitle: st.line,
					meta: placeMeta(f, distM),
					chevron: true,
					onClick: () => navigate(`/place/${f.id}`)
				}, f.id))
			})
		]
	})] });
}
//#endregion
//#region src/pages/public/MapScreen.jsx
function MapScreen() {
	return useWide() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopCitizen, { pane: "map" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenMapScreen, {});
}
//#endregion
export { MapScreen as default };

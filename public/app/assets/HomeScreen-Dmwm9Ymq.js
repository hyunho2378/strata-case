import { d as useNavigate, h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { r as createLucideIcon } from "./Button-scljtAU-.js";
import { i as openLine, o as useCitizenModel, r as openCaption, t as DesktopCitizen, u as loadLive } from "./DesktopCitizen-CkJI-cU7.js";
import { i as Dumbbell, n as Stethoscope, r as Landmark, t as Tent } from "./tent-DeViw-EM.js";
import { N as CATEGORIES, b as Spinner, dt as MessageSquare, f as Figure, g as ListRow, h as List, lt as Users, s as AppBar, u as DisplaySettings, x as useWide } from "./index-iSpUmSYP.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ambulance = createLucideIcon("ambulance", [
	["path", {
		d: "M10 10H6",
		key: "1bsnug"
	}],
	["path", {
		d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
		key: "wrbu53"
	}],
	["path", {
		d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
		key: "lrkjwd"
	}],
	["path", {
		d: "M8 8v4",
		key: "1fwk8c"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["circle", {
		cx: "17",
		cy: "18",
		r: "2",
		key: "332jqn"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "2",
		key: "19iecd"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Droplets = createLucideIcon("droplets", [["path", {
	d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
	key: "1ptgy4"
}], ["path", {
	d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
	key: "1sl1rz"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Thermometer = createLucideIcon("thermometer", [["path", {
	d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
	key: "17jzev"
}]]);
//#endregion
//#region src/components/public/useLive.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useLive(kind) {
	const [data, setData] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		loadLive(kind).then((d) => {
			if (live) setData(d);
		}).catch(() => {
			if (live) setData(null);
		});
		return () => {
			live = false;
		};
	}, [kind]);
	return data;
}
var erRow = (x) => ({
	id: x.id || x.name,
	title: x.name || "응급실",
	value: x.beds != null ? `남은 자리 ${x.beds}` : "확인 중"
});
var warnRow = (x) => ({
	id: x.id || x.title,
	title: x.title || "기상특보",
	value: x.at ? String(x.at).slice(5, 16) : ""
});
//#endregion
//#region src/mobile/citizen/CitizenHome.jsx
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	Thermometer,
	Tent,
	Ambulance,
	Stethoscope,
	Dumbbell,
	Users,
	Landmark,
	Droplets
};
function CitizenHome() {
	const { ready, summary, counts, news } = useCitizenModel();
	const navigate = useNavigate();
	const shown = news.slice(0, 3);
	const er = useLive("er");
	const warning = useLive("warning");
	const liveRows = [...(er?.list || []).slice(0, 2).map(erRow), ...(warning?.list || []).filter((x) => x.forDonghae).slice(0, 1).map(warnRow)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {
		title: "동해시 공공시설",
		large: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mob-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				plain: true,
				label: "오늘 운영",
				value: ready ? openLine(summary) : "불러오는 중",
				caption: ready ? openCaption(summary) : "",
				children: !ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { label: "시설 상태 불러오는 중" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "찾는 종류",
				children: CATEGORIES.map((c) => {
					const Icon = ICONS[c.icon] || Thermometer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						lead: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 }),
						title: c.name,
						trailing: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mob-t-callout tabular-nums",
							children: [counts[c.id], "곳"]
						}) : null,
						chevron: true,
						onClick: () => navigate(`/list?cat=${c.id}`)
					}, c.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "말로 묻기",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					lead: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 22 }),
					title: "말로 묻기",
					subtitle: "문장으로 물으면 지금 열린 곳 안내",
					chevron: true,
					onClick: () => navigate("/ask")
				})
			}),
			shown.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mob-section-title mob-t-headline",
				children: "오늘 바뀐 운영 소식"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(List, {
				label: "오늘 바뀐 운영 소식",
				children: [shown.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: n.name,
					subtitle: n.line,
					meta: n.why,
					chevron: true,
					onClick: () => navigate(`/place/${n.id}`)
				}, n.key)), news.length > shown.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: `운영 소식 ${news.length}건 모두 보기`,
					chevron: true,
					onClick: () => navigate("/list?news=1")
				})]
			})] }),
			liveRows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "지금 들어온 실시간 자료",
				children: liveRows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: r.title,
					trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mob-t-callout tabular-nums",
						children: r.value
					})
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplaySettings, {})
		]
	})] });
}
//#endregion
//#region src/pages/public/HomeScreen.jsx
function HomeScreen() {
	return useWide() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopCitizen, { pane: "map" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenHome, {});
}
//#endregion
export { HomeScreen as default };

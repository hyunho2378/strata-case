const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeScreen-Dmwm9Ymq.js","assets/jsx-runtime-CjhTEqEu.js","assets/Button-scljtAU-.js","assets/DesktopCitizen-CkJI-cU7.js","assets/Select-UMsCnY49.js","assets/Skeleton-DLJWn7CQ.js","assets/useReducedMotion-CLTlFPmU.js","assets/SegmentControl-43K5xRyT.js","assets/console-Bo24m_YT.js","assets/StatusChip-CTSks7fv.js","assets/Input-xFxgKSoK.js","assets/tent-DeViw-EM.js","assets/PlaceScreen-BD8mzK0B.js","assets/MapScreen-gO4gDZ6S.js","assets/ListScreen-DC09m-FX.js","assets/AskScreen-ry6WDFas.js","assets/OverviewScreen-CmaVxuSk.js","assets/PageShell-GgddYxkL.js","assets/BoardScreen-By2zIuuw.js","assets/file-text-CP6Ius2P.js","assets/search-B5z5RKz4.js","assets/FacilitiesScreen-CmpqO8tR.js","assets/EmptyState-XkMqg1JB.js","assets/ReviewScreen-CQ006g0T.js","assets/circle-check-pwNv1VDz.js","assets/copy-WJKa5ueD.js","assets/file-up-GEGHyfeR.js","assets/undo-2-CSlrtOrK.js","assets/trash-2-DmlgnNRu.js","assets/InsideScreen-fs4oTBFu.js","assets/NotFoundPage-zKaR3vz3.js","assets/WorkspaceHome-3OEDM-XS.js","assets/list-checks-BaaQgnz9.js","assets/plus-BRb5oufJ.js","assets/sheet-CpUmBIgo.js","assets/useWorkspaceStore-D5Yy-l9c.js","assets/docConvert-B35BrSj_.js","assets/DocEditor-DeL7UUNa.js","assets/EditorFrame-xXtODuPt.js","assets/refresh-cw-njuoxWj3.js","assets/SheetEditor-CBdrp3l3.js","assets/link-2-C_dlvS-X.js","assets/FormEditor-GoP-gPO4.js","assets/FormRenderer-BsIpPe45.js","assets/FormFillPage-Xbedvzr-.js","assets/Logo-DUnI5m32.js","assets/LoginScreen-J4C10hBs.js"])))=>i.map(i=>d[i]);
import { c as Route, d as useNavigate, f as useNavigationType, g as __commonJSMin, h as require_react, i as NavLink, l as Routes, m as require_react_dom, n as BrowserRouter, o as Navigate, r as Link, s as Outlet, t as require_jsx_runtime, u as useLocation, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon, t as Button$1 } from "./Button-scljtAU-.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var m = require_react_dom();
	exports.createRoot = m.createRoot;
	exports.hydrateRoot = m.hydrateRoot;
}));
//#endregion
//#region src/index.css
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Archive = createLucideIcon("archive", [
	["rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1",
		key: "1wp1u1"
	}],
	["path", {
		d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
		key: "1s80jp"
	}],
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Building2 = createLucideIcon("building-2", [
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}],
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
		key: "secmi2"
	}],
	["path", {
		d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
		key: "16ra0t"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleQuestionMark = createLucideIcon("circle-question-mark", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleX = createLucideIcon("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileScan = createLucideIcon("file-scan", [
	["path", {
		d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",
		key: "1rdf37"
	}],
	["path", {
		d: "M14 2v4a2 2 0 0 0 2 2h4",
		key: "tnqrlb"
	}],
	["path", {
		d: "M16 14a2 2 0 0 0-2 2",
		key: "ceaadl"
	}],
	["path", {
		d: "M20 14a2 2 0 0 1 2 2",
		key: "1ny6zw"
	}],
	["path", {
		d: "M20 22a2 2 0 0 0 2-2",
		key: "1l9q4k"
	}],
	["path", {
		d: "M16 22a2 2 0 0 1-2-2",
		key: "1wqh5n"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderOpen = createLucideIcon("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var House = createLucideIcon("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Inbox = createLucideIcon("inbox", [["polyline", {
	points: "22 12 16 12 14 15 10 15 8 12 2 12",
	key: "o97t9d"
}], ["path", {
	d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
	key: "oot6mr"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LayoutDashboard = createLucideIcon("layout-dashboard", [
	["rect", {
		width: "7",
		height: "9",
		x: "3",
		y: "3",
		rx: "1",
		key: "10lvy0"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "14",
		y: "3",
		rx: "1",
		key: "16une8"
	}],
	["rect", {
		width: "7",
		height: "9",
		x: "14",
		y: "12",
		rx: "1",
		key: "1hutg5"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "ldoo1y"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LayoutGrid = createLucideIcon("layout-grid", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "3",
		rx: "1",
		key: "6d4xhi"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPinned = createLucideIcon("map-pinned", [
	["path", {
		d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
		key: "11u0oz"
	}],
	["circle", {
		cx: "12",
		cy: "8",
		r: "2",
		key: "1822b1"
	}],
	["path", {
		d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
		key: "q8zwxj"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Map$1 = createLucideIcon("map", [
	["path", {
		d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
		key: "169xi5"
	}],
	["path", {
		d: "M15 5.764v15",
		key: "1pn4in"
	}],
	["path", {
		d: "M9 3.236v15",
		key: "1uimfh"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelLeft = createLucideIcon("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Type = createLucideIcon("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var WifiOff = createLucideIcon("wifi-off", [
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 7 0",
		key: "1bycff"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 5.17-2.69",
		key: "1dl1wf"
	}],
	["path", {
		d: "M19 12.859a10 10 0 0 0-2.007-1.523",
		key: "4k23kn"
	}],
	["path", {
		d: "M2 8.82a15 15 0 0 1 4.177-2.643",
		key: "1grhjp"
	}],
	["path", {
		d: "M22 8.82a15 15 0 0 0-11.288-3.764",
		key: "z3jwby"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region src/hooks/useMediaQuery.js
function useMediaQuery(query) {
	const [subscribe, getSnapshot] = (0, import_react.useMemo)(() => {
		const mql = window.matchMedia(query);
		return [(cb) => {
			mql.addEventListener("change", cb);
			return () => mql.removeEventListener("change", cb);
		}, () => mql.matches];
	}, [query]);
	return (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, () => false);
}
//#endregion
//#region node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial, replace) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState = () => state;
	const getInitialState = () => initialState;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const api = {
		setState,
		getState,
		getInitialState,
		subscribe
	};
	const initialState = state = createState(setState, getState, api);
	return api;
};
var createStore = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
//#endregion
//#region node_modules/zustand/esm/react.mjs
var identity = (arg) => arg;
function useStore(api, selector = identity) {
	const slice = import_react.useSyncExternalStore(api.subscribe, import_react.useCallback(() => selector(api.getState()), [api, selector]), import_react.useCallback(() => selector(api.getInitialState()), [api, selector]));
	import_react.useDebugValue(slice);
	return slice;
}
var createImpl = (createState) => {
	const api = createStore(createState);
	const useBoundStore = (selector) => useStore(api, selector);
	Object.assign(useBoundStore, api);
	return useBoundStore;
};
var create = ((createState) => createState ? createImpl(createState) : createImpl);
//#endregion
//#region src/store/useAdminUi.js
var useAdminUi = create((set) => ({
	range: "7d",
	setRange: (range) => set({ range }),
	sidebarOpen: false,
	setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
	guideOpen: false,
	setGuideOpen: (guideOpen) => set({ guideOpen }),
	topbar: {
		title: "",
		actions: null
	},
	setTopbar: (topbar) => set({ topbar }),
	desktopBannerDismissed: false,
	dismissDesktopBanner: () => set({ desktopBannerDismissed: true }),
	collapsed: {},
	toggleGroup: (key) => set((s) => ({ collapsed: {
		...s.collapsed,
		[key]: !s.collapsed[key]
	} }))
}));
function useTopbar({ title, actions = null }) {
	const setTopbar = useAdminUi((s) => s.setTopbar);
	(0, import_react.useLayoutEffect)(() => {
		setTopbar({
			title,
			actions
		});
	}, [title, setTopbar]);
}
//#endregion
//#region src/components/layout/ErrorBoundary.jsx
var import_jsx_runtime = require_jsx_runtime();
var ErrorBoundary = class extends import_react.Component {
	state = { error: null };
	static getDerivedStateFromError(error) {
		return { error };
	}
	componentDidCatch(error) {
		console.error("화면 오류", error);
	}
	render() {
		if (!this.state.error) return this.props.children;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "alert",
			className: "mx-auto flex max-w-text flex-col items-center px-4 py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "type-h2 text-text-pri",
					children: "화면을 표시하지 못함"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 type-body-sm text-text-sec",
					children: "새로고침 후에도 같으면 담당자 화면 처음으로 이동"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						onClick: () => window.location.reload(),
						children: "새로고침"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "secondary",
						onClick: () => {
							window.location.href = "/console";
						},
						children: "처음으로"
					})]
				})
			]
		});
	}
};
//#endregion
//#region src/i18n/ko/common.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
//#endregion
//#region src/i18n/ko/index.js
var ko = { common: {
	language: "언어",
	lang: {
		ko: "한국어",
		en: "English",
		ja: "日本語",
		zh: "中文"
	},
	nav: {
		home: "상담 홈",
		facilities: "시설 안내",
		notices: "공지",
		faq: "자주 묻는 질문",
		menu: "메뉴",
		admin: "관리자"
	},
	action: {
		search: "검색",
		save: "저장",
		cancel: "취소",
		confirm: "확인",
		delete: "삭제",
		edit: "수정",
		add: "추가",
		close: "닫기",
		back: "뒤로",
		next: "다음",
		prev: "이전",
		more: "더 보기",
		retry: "다시 시도",
		copy: "복사",
		copied: "복사 완료",
		download: "내려받기",
		upload: "올리기",
		reset: "초기화",
		apply: "적용",
		submit: "접수",
		login: "로그인",
		logout: "로그아웃",
		viewOriginal: "원문 보기",
		select: "선택",
		detail: "상세",
		sort: "정렬"
	},
	status: {
		normal: "정상",
		maintenance: "유지보수",
		closed: "휴관",
		open: "여유",
		stable: "안정적",
		limited: "제한됨",
		full: "마감",
		booked: "예약됨",
		auto: "자동처리",
		handoff: "인계",
		unresolved: "미해결",
		wait: "대기",
		progress: "처리 중",
		done: "완료",
		indexed: "색인됨",
		pending: "대기",
		failed: "실패",
		correct: "정답",
		wrong: "오답",
		hold: "보류",
		achieved: "달성",
		near: "근접",
		missed: "미달"
	},
	meta: {
		updatedAt: "갱신",
		createdAt: "접수",
		all: "전체",
		today: "오늘",
		loading: "불러오는 중",
		count: "건",
		period: "기간",
		required: "필수",
		date: "날짜",
		facility: "시설",
		category: "카테고리",
		preparing: "준비 중"
	},
	empty: {
		title: "자료 없음",
		desc: "조건 변경 후 다시 조회",
		searchTitle: "검색 결과 없음",
		searchDesc: "다른 검색어로 다시 조회",
		filterDesc: "필터 변경 시 다른 결과 확인 가능"
	},
	a11y: {
		pagination: "페이지 이동",
		prevPage: "이전 페이지",
		nextPage: "다음 페이지"
	},
	error: {
		loadTitle: "자료 불러오기 실패",
		loadDesc: "네트워크 상태 확인 후 다시 시도",
		network: "서버 연결 실패. 잠시 후 다시 시도",
		notFound: "요청 자료 없음",
		unauthorized: "로그인 필요",
		notFoundPage: "화면 없음",
		notFoundDesc: "주소 변경 또는 삭제된 화면"
	},
	footer: {
		privacy: "개인정보처리방침",
		contact: "대표 연락처",
		desc: "공식 자료 기반 안내"
	},
	notice: {
		title: "공지",
		subtitle: "운영 안내",
		related: "관련 시설",
		ask: "이 공지에 대해 물어보기",
		empty: "등록된 공지 없음",
		notFound: "공지 없음",
		list: "공지 목록"
	},
	faq: {
		cat: {
			hours: "운영시간",
			fee: "요금",
			reserve: "예약",
			guide: "이용안내",
			way: "찾아오는길",
			closed: "휴관"
		},
		title: "자주 묻는 질문",
		subtitle: "자주 묻는 질문",
		askMore: "더 자세히 물어보기",
		empty: "등록된 질문 없음"
	}
} };
//#endregion
//#region src/i18n/LangContext.jsx
var LangContext = (0, import_react.createContext)(null);
var pick$1 = (dict, key) => key.split(".").reduce((o, k) => o?.[k], dict);
function LangProvider({ children }) {
	const t = (0, import_react.useCallback)((key, vars) => {
		const value = pick$1(ko, key);
		if (typeof value !== "string") return key;
		if (!vars) return value;
		return value.replace(/\{(\w+)\}/g, (m, k) => k in vars ? vars[k] : m);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		lang: "ko",
		setLang: () => {},
		t
	}), [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value,
		children
	});
}
function useLang() {
	return (0, import_react.useContext)(LangContext);
}
//#endregion
//#region src/hooks/useBodyScrollLock.js
function useBodyScrollLock(open) {
	(0, import_react.useEffect)(() => {
		if (!open) return void 0;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);
}
//#endregion
//#region src/hooks/useFocusTrap.js
var SELECTOR = "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex=\"-1\"])";
function useFocusTrap(active, onClose) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!active || !ref.current) return;
		const node = ref.current;
		const prev = document.activeElement;
		const items = () => Array.from(node.querySelectorAll(SELECTOR)).filter((el) => el.offsetParent !== null);
		items()[0]?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") {
				onClose?.();
				return;
			}
			if (e.key !== "Tab") return;
			const list = items();
			if (!list.length) return;
			const first = list[0];
			const last = list[list.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};
		node.addEventListener("keydown", onKey);
		return () => {
			node.removeEventListener("keydown", onKey);
			prev?.focus?.();
		};
	}, [active, onClose]);
	return ref;
}
//#endregion
//#region src/components/ui/IconButton.jsx
var SIZE$1 = {
	sm: "w-8 h-8 min-w-11 min-h-11 md:min-w-0 md:min-h-0",
	md: "w-10 h-10 min-w-11 min-h-11 md:min-w-0 md:min-h-0",
	lg: "w-11 h-11"
};
var VARIANT = {
	ghost: "bg-transparent text-text-sec hover:bg-mute hover:text-text-pri",
	soft: "bg-primary-soft text-primary hover:bg-primary-line",
	primary: "bg-primary text-text-inverse hover:bg-primary-hover"
};
var IconButton = (0, import_react.forwardRef)(function IconButton({ size = "md", variant = "ghost", radius = "full", className, children, ...rest }, ref) {
	if (!rest["aria-label"]) console.warn("IconButton: aria-label 필요");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type: rest.type || "button",
		className: clsx("pressable inline-flex shrink-0 items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed", radius === "full" ? "rounded-full" : radius === "xs" ? "rounded-xs" : "rounded-md", SIZE$1[size], VARIANT[variant], className),
		...rest,
		children
	});
});
//#endregion
//#region src/components/ui/Modal.jsx
function Modal({ open, onClose, title, footer, children, className }) {
	const { t } = useLang();
	const trapRef = useFocusTrap(open, onClose);
	useBodyScrollLock(open);
	if (!open) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-modal flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-text-pri/40 animate-fade-in",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: trapRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			className: clsx("relative w-full max-w-[560px] max-h-[90vh] flex flex-col bg-page rounded-xl shadow-float animate-pop-in", className),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "px-6 pt-6 flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "type-h2 text-text-pri",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						"aria-label": t("common.action.close"),
						size: "sm",
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-6 py-4 overflow-y-auto",
					children
				}),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "px-6 pb-6 flex justify-end gap-2",
					children: footer
				})
			]
		})]
	}), document.body);
}
//#endregion
//#region src/components/ui/Drawer.jsx
function Drawer(props) {
	if (props.side !== "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open: props.open,
		onClose: props.onClose,
		title: props.title,
		footer: props.footer,
		className: props.size === "wide" ? "max-w-[760px]" : void 0,
		children: props.children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideSheet, { ...props });
}
function SideSheet({ open, onClose, title, footer, side, children }) {
	const { t } = useLang();
	const trapRef = useFocusTrap(open, onClose);
	useBodyScrollLock(open);
	if (!open) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-drawer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-text-pri/40 animate-fade-in-sheet",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			ref: trapRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			className: clsx("absolute top-0 h-full w-[clamp(360px,40vw,560px)] max-w-full bg-page shadow-float flex flex-col", side === "left" ? "left-0 animate-slide-in-left" : "right-0 animate-slide-in-right"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "h-14 shrink-0 px-5 flex items-center justify-between border-b border-line-sub",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "type-h2 text-text-pri",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						"aria-label": t("common.action.close"),
						size: "sm",
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-5",
					children
				}),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "p-4 border-t border-line-sub flex justify-end gap-2",
					children: footer
				})
			]
		})]
	}), document.body);
}
//#endregion
//#region src/kitTokens.js
var ios = {
	"blue": "#0088FF",
	"blueAccessible": "#1E6EF4",
	"redAccessible": "#E9152D",
	"red": "#FF383C",
	"green": "#34C759",
	"greenAccessible": "#008932",
	"orange": "#FF9500",
	"orangeAccessible": "#C93400",
	"purple": "#AF52DE",
	"purpleAccessible": "#B02FC2",
	"label": "#000000",
	"secondaryLabel": "rgba(60,60,67,0.6)",
	"tertiaryLabel": "rgba(60,60,67,0.3)",
	"secondaryText": "#48484A",
	"white": "#FFFFFF",
	"grouped": "#F2F2F7",
	"fill": "#E5E5EA",
	"gray": "#8E8E93",
	"gray2": "#AEAEB2",
	"gray3": "#C7C7CC",
	"gray4": "#D1D1D6",
	"gray5": "#E5E5EA",
	"gray6": "#F2F2F7"
};
var m3 = {
	"primary": "#005bc1",
	"onPrimary": "#ffffff",
	"primaryContainer": "#d8e2ff",
	"onPrimaryContainer": "#001a41",
	"secondary": "#565e71",
	"onSecondary": "#ffffff",
	"secondaryContainer": "#dbe2f9",
	"onSecondaryContainer": "#141b2c",
	"tertiary": "#715573",
	"onTertiary": "#ffffff",
	"tertiaryContainer": "#fbd7fc",
	"onTertiaryContainer": "#29132d",
	"error": "#ba1a1a",
	"onError": "#ffffff",
	"errorContainer": "#ffdad6",
	"onErrorContainer": "#410002",
	"background": "#fefbff",
	"onBackground": "#1b1b1f",
	"surface": "#fefbff",
	"onSurface": "#1b1b1f",
	"surfaceVariant": "#e1e2ec",
	"onSurfaceVariant": "#44474f",
	"outline": "#74777f",
	"outlineVariant": "#c4c6d0",
	"shadow": "#000000",
	"scrim": "#000000",
	"inverseSurface": "#303033",
	"inverseOnSurface": "#f2f0f4",
	"inversePrimary": "#adc6ff"
};
var kitShadow = {
	sm: "0 2px 10px rgba(0,0,0,0.07)",
	md: "0 8px 28px rgba(0,0,0,0.12)",
	lg: "0 16px 48px rgba(0,0,0,0.18)"
};
//#endregion
//#region src/tokens.js
var krds = {
	gray: {
		0: ios.white,
		5: ios.grouped,
		10: ios.fill,
		20: ios.gray4,
		30: ios.gray3,
		40: ios.gray2,
		50: ios.secondaryText,
		60: ios.secondaryText,
		70: ios.secondaryText,
		80: ios.label,
		90: ios.label,
		95: ios.label
	},
	primary: {
		5: ios.grouped,
		10: ios.fill,
		20: ios.blue,
		30: ios.blue,
		40: ios.blue,
		50: m3.primary,
		60: m3.primary,
		70: m3.primary,
		80: m3.primary
	},
	point: {
		5: ios.grouped,
		10: ios.fill,
		20: ios.red,
		30: ios.red,
		40: ios.red,
		50: m3.error,
		60: m3.error,
		70: m3.error
	}
};
var g = krds.gray;
var p = krds.primary;
var r = krds.point;
var colors = {
	page: g[0],
	canvas: g[5],
	mute: g[10],
	subtle: g[5],
	text: {
		pri: g[90],
		sec: g[70],
		meta: g[60],
		ter: g[50],
		inverse: g[0]
	},
	primary: {
		DEFAULT: p[50],
		hover: p[60],
		soft: p[10],
		line: p[20],
		text: p[60]
	},
	line: {
		sub: g[10],
		def: g[20],
		strong: g[30]
	},
	danger: {
		DEFAULT: r[50],
		strong: r[60],
		soft: r[5],
		text: r[60]
	},
	warning: {
		DEFAULT: ios.orangeAccessible,
		soft: ios.fill,
		text: ios.label
	},
	success: {
		DEFAULT: ios.greenAccessible,
		soft: ios.fill,
		text: ios.label
	},
	kind: {
		doc: ios.blueAccessible,
		sheet: ios.greenAccessible,
		form: ios.purpleAccessible
	},
	chart: {
		1: p[50],
		2: g[70],
		3: g[50],
		4: g[40],
		heat: {
			1: p[20],
			2: p[30],
			3: p[40],
			4: p[50]
		},
		heatDanger: {
			1: r[10],
			2: r[30],
			3: r[50],
			4: r[60]
		}
	}
};
colors.line.def, colors.text.sec;
({ ...kitShadow });
var motion = {
	duration: {
		press: "120ms",
		fast: "160ms",
		pop: "180ms",
		dur: "280ms",
		sheet: "360ms"
	},
	easing: {
		out: "cubic-bezier(0.23,1,0.32,1)",
		inOut: "cubic-bezier(0.77,0,0.175,1)",
		drawer: "cubic-bezier(0.32,0.72,0,1)",
		spring: "cubic-bezier(0.32,1.32,0.5,1)"
	},
	press: "scale(0.97)",
	skeleton: {
		duration: "1.4s",
		from: colors.line.def,
		to: colors.text.ter
	}
};
//#endregion
//#region src/hooks/usePopExit.js
function usePopExit(open, instant = false) {
	const [mounted, setMounted] = (0, import_react.useState)(open);
	const timer = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (open) {
			clearTimeout(timer.current);
			setMounted(true);
			return;
		}
		if (!mounted) return void 0;
		if (instant || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setMounted(false);
			return;
		}
		timer.current = setTimeout(() => setMounted(false), parseInt(motion.duration.pop, 10));
		return () => clearTimeout(timer.current);
	}, [
		open,
		mounted,
		instant
	]);
	return {
		mounted,
		closing: mounted && !open
	};
}
//#endregion
//#region src/components/ui/Avatar.jsx
var SIZE = {
	sm: "w-6 h-6 type-meta",
	md: "w-8 h-8 type-caption",
	lg: "w-10 h-10 type-body-sm"
};
function Avatar({ name = "", size = "md", className }) {
	const initial = name.trim().slice(0, 1) || "?";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: clsx("inline-flex shrink-0 items-center justify-center rounded-full bg-primary text-text-inverse type-strong", SIZE[size], className),
		children: initial
	});
}
//#endregion
//#region src/components/nav/UserMenu.jsx
var USER = {
	name: "동해시 담당자",
	org: "동해시청"
};
function UserMenu({ compact = false, className }) {
	const navigate = useNavigate();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [instantPop, setInstantPop] = (0, import_react.useState)(false);
	const { mounted, closing } = usePopExit(open, instantPop);
	const rootRef = (0, import_react.useRef)(null);
	const triggerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return void 0;
		const onDown = (e) => {
			if (!rootRef.current?.contains(e.target)) setOpen(false);
		};
		document.addEventListener("pointerdown", onDown);
		return () => document.removeEventListener("pointerdown", onDown);
	}, [open]);
	const onKeyDown = (e) => {
		if (e.key !== "Escape") return;
		setInstantPop(true);
		setOpen(false);
		triggerRef.current?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: clsx("relative", className),
		onKeyDown,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			ref: triggerRef,
			type: "button",
			"aria-haspopup": "menu",
			"aria-expanded": open,
			onClick: (e) => {
				setInstantPop(e.detail === 0);
				setOpen((o) => !o);
			},
			className: clsx("pressable flex w-full items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-mute", compact && "justify-center"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { name: USER.name }), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate type-strong text-text-pri",
					children: USER.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate type-meta text-text-meta",
					children: USER.org
				})]
			})]
		}), mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			role: "menu",
			"aria-hidden": closing || void 0,
			className: clsx("pop-panel origin-top absolute bottom-full left-0 mb-2 z-dropdown w-full min-w-[180px] rounded-md bg-page shadow-md p-1", instantPop && "pop-instant", closing && "pop-panel-exit"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				role: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "menuitem",
					onClick: async () => {
						setOpen(false);
						try {
							await fetch("/api/session", {
								method: "DELETE",
								credentials: "same-origin"
							});
						} catch {}
						navigate("/admin/login", { replace: true });
					},
					className: "flex w-full items-center gap-2 min-h-11 px-3 rounded-xs type-body-sm text-text-sec hover:bg-mute hover:text-text-pri transition-colors duration-fast",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
						size: 16,
						"aria-hidden": "true"
					}), "로그아웃"]
				})
			})
		})]
	});
}
//#endregion
//#region src/components/layout/navConfig.js
var MAIN_NAV = [
	{
		key: "home",
		to: "/admin",
		end: true,
		label: "현황판",
		Icon: LayoutDashboard,
		match: ["/admin"],
		exact: true
	},
	{
		key: "review",
		to: "/admin/review",
		label: "판독함",
		Icon: FileScan,
		match: ["/admin/review"],
		queue: true
	},
	{
		key: "facilities",
		to: "/admin/facilities",
		label: "시설",
		Icon: Building2,
		match: ["/admin/facilities", "/admin/facility"]
	},
	{
		key: "board",
		to: "/admin/board",
		label: "상황판",
		Icon: MapPinned,
		match: ["/admin/board"]
	}
];
var DOCS_NAV = [{
	key: "docs",
	to: "/admin/docs",
	label: "문서함",
	Icon: FolderOpen,
	match: ["/admin/docs"]
}];
var PUBLIC_NAV = [{
	key: "site",
	to: "/",
	end: true,
	label: "시민 화면",
	Icon: Users
}];
var RAIL_GROUPS = [
	{
		key: "work",
		label: "업무",
		Icon: LayoutGrid,
		items: MAIN_NAV
	},
	{
		key: "record",
		label: "기록",
		Icon: Archive,
		items: DOCS_NAV
	},
	{
		key: "public",
		label: "외부",
		Icon: Users,
		items: PUBLIC_NAV
	}
];
var SECTION_TABS = {};
function sectionOf(pathname) {
	return [
		...MAIN_NAV,
		...DOCS_NAV,
		...PUBLIC_NAV.filter((m) => m.match)
	].find((m) => m.exact ? pathname === m.to : m.match.some((p) => pathname === p || pathname.startsWith(p + "/")));
}
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/strata-case/app/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return import.meta.resolve(specifier);
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			).href;
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			dep = importMetaResolve(dep);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region src/lib/strataData.js
var JSONS = /* #__PURE__ */ Object.assign({
	"../data/inside.json": () => __vitePreload(() => import("./inside-D1uLX6RY.js"), []),
	"../data/scenes.json": () => __vitePreload(() => import("./scenes-BX-TZPl3.js"), []),
	"../data/strata.json": () => __vitePreload(() => import("./strata-DeQzHz1k.js"), [])
});
var pick = (name) => JSONS[`../data/${name}`];
var EMPTY = {
	generatedAt: "",
	basis: "",
	sources: [],
	roles: [],
	facilities: [],
	stats: {}
};
var SPACE_TAIL = /\s+((?:전체\s*동의\s*|[\d~]+동\s*)?(?:지하\s*\d*\s*층?\s*)?(?:주차장|대피소|회의실|연회장|방공호)(?:\s*지하)?(?:\s*[\d~]+\s*층)?)\s*$/;
function splitFacilityName(full) {
	const raw = String(full || "").replace(/\s+/g, " ").trim();
	const m = raw.match(SPACE_TAIL);
	if (!m) return {
		name: raw,
		space: ""
	};
	const space = m[1].trim();
	const head = raw.slice(0, m.index).trim();
	if (!head || !/지하|층|전체 동의/.test(space)) return {
		name: raw,
		space: ""
	};
	return {
		name: head,
		space
	};
}
function normalizeFacilities(list) {
	return (list || []).map((f) => {
		const { name, space } = splitFacilityName(f.name);
		return space ? {
			...f,
			name,
			space,
			fullName: f.name
		} : {
			...f,
			space: "",
			fullName: f.name
		};
	});
}
async function loadJson(name) {
	const loader = pick(name);
	if (!loader) return null;
	try {
		const mod = await loader();
		return mod?.default ?? mod ?? null;
	} catch {
		return null;
	}
}
var loadStrata = () => loadJson("strata.json");
function useStrata() {
	const [state, setState] = (0, import_react.useState)({
		data: EMPTY,
		ready: false,
		empty: true
	});
	(0, import_react.useEffect)(() => {
		let live = true;
		loadStrata().then((d) => {
			if (!live) return;
			const data = d ? {
				...EMPTY,
				...d,
				facilities: normalizeFacilities(d.facilities)
			} : EMPTY;
			setState({
				data,
				ready: true,
				empty: !d || !(d.facilities || []).length
			});
		});
		return () => {
			live = false;
		};
	}, []);
	return state;
}
function useJson(name) {
	const [state, setState] = (0, import_react.useState)({
		data: null,
		ready: false
	});
	(0, import_react.useEffect)(() => {
		let live = true;
		loadJson(name).then((d) => {
			if (live) setState({
				data: d,
				ready: true
			});
		});
		return () => {
			live = false;
		};
	}, [name]);
	return state;
}
var STATUS_LABEL = {
	open: "운영 중",
	closed: "운영 중단",
	check: "확인 필요"
};
var roleLabel = (data, id) => (data.roles || []).find((r) => r.id === id)?.label || id;
var activeEvents = (facility, ms) => (facility.events || []).filter((e) => {
	const s = e.start ? Date.parse(e.start) : null;
	const t = e.end ? Date.parse(e.end) : null;
	if (s == null && t == null) return false;
	if (s != null && ms < s) return false;
	if (t != null && ms > t) return false;
	return true;
});
function statusAt(facility, ms) {
	if (activeEvents(facility, ms).length) return "closed";
	return facility.status || "open";
}
function countByStatus(facilities, ms) {
	const out = {
		open: 0,
		closed: 0,
		check: 0
	};
	for (const f of facilities) out[statusAt(f, ms)] = (out[statusAt(f, ms)] || 0) + 1;
	return out;
}
function dotDate(v) {
	if (!v) return "";
	const d = new Date(v);
	if (Number.isNaN(d.getTime())) return String(v);
	return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}
var CATEGORIES = [
	{
		id: "shelter",
		roleIds: ["shelter"],
		subIds: [],
		name: "한파쉼터와 무더위쉼터",
		icon: "Thermometer",
		hint: "추울 때와 더울 때 쉬는 곳",
		match: (f) => hasRole(f, "shelter")
	},
	{
		id: "evac",
		roleIds: ["evac"],
		subIds: [],
		name: "대피소",
		icon: "Tent",
		hint: "지진과 해일, 민방위 대피",
		match: (f) => hasRole(f, "evac")
	},
	{
		id: "er",
		roleIds: ["medical"],
		subIds: ["er"],
		name: "응급실",
		icon: "Ambulance",
		hint: "밤에도 받는 응급 진료",
		match: (f) => hasSub(f, "er")
	},
	{
		id: "clinic",
		roleIds: ["medical"],
		subIds: [
			"clinic",
			"pharmacy",
			"health"
		],
		name: "병원과 약국",
		icon: "Stethoscope",
		hint: "의원과 보건소, 약국",
		match: (f) => hasSub(f, "clinic") || hasSub(f, "pharmacy") || hasSub(f, "health")
	},
	{
		id: "sports",
		roleIds: ["sports"],
		subIds: [],
		name: "체육시설",
		icon: "Dumbbell",
		hint: "수영장과 운동장, 체육관",
		match: (f) => hasRole(f, "sports")
	},
	{
		id: "care",
		roleIds: ["care"],
		subIds: [],
		name: "어르신 모임과 아이 돌봄",
		icon: "Users",
		hint: "경로당과 마을회관, 돌봄 공간",
		match: (f) => hasRole(f, "care")
	},
	{
		id: "admin",
		roleIds: ["admin"],
		subIds: [],
		name: "행정복지센터와 경찰, 소방",
		icon: "Landmark",
		hint: "민원과 신고 창구",
		match: (f) => hasRole(f, "admin")
	},
	{
		id: "life",
		roleIds: ["housing", "water"],
		subIds: [],
		name: "임시 주거와 급수",
		icon: "Droplets",
		hint: "머물 곳과 물 받는 곳",
		match: (f) => hasRole(f, "housing") || hasRole(f, "water")
	}
];
var hasRole = (f, role) => (f?.roles || []).some((r) => r.role === role);
var hasSub = (f, sub) => (f?.roles || []).some((r) => r.sub === sub);
var categoryById = (id) => CATEGORIES.find((c) => c.id === id) || null;
function haversineM(a, b) {
	if (!a || !b) return null;
	const R = 6371e3;
	const rad = Math.PI / 180;
	const dLat = (b.lat - a.lat) * rad;
	const dLon = (b.lon - a.lon) * rad;
	const s = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
	return Math.round(2 * R * Math.asin(Math.sqrt(s)));
}
function distText(m) {
	if (m == null) return "";
	if (m < 1e3) return `${Math.max(50, Math.round(m / 50) * 50)}m`;
	return `${(m / 1e3).toFixed(1)}km`;
}
var walkText = (m) => m == null ? "" : `걸어서 ${Math.max(1, Math.round(m / 67))}분`;
var CITY_TEL = "033-530-2114";
var CITY_TEL_NAME = "동해시청 대표전화";
var telOf = (f) => ({
	tel: f?.tel || "033-530-2114",
	name: f?.tel ? f.name : CITY_TEL_NAME
});
function routeLinks(f) {
	const name = encodeURIComponent(f?.name || "목적지");
	return {
		kakao: `https://map.kakao.com/link/to/${name},${f?.lat},${f?.lon}`,
		naver: `https://map.naver.com/p/search/${name}?c=${f?.lon},${f?.lat},16,0,0,0,dh`
	};
}
function dongList(facilities = []) {
	const map = /* @__PURE__ */ new Map();
	for (const f of facilities) {
		const d = (f.dong || "").trim();
		if (!d) continue;
		map.set(d, (map.get(d) || 0) + 1);
	}
	return [...map.entries()].sort((a, b) => b[1] - a[1]).map(([name, n]) => ({
		name,
		n
	}));
}
function dutyText(facility, limit = 3) {
	const seen = [];
	for (const r of facility?.roles || []) {
		const label = r.subLabel || r.role;
		if (label && !seen.includes(label)) seen.push(label);
	}
	return seen.slice(0, limit).join(", ");
}
var URGENT = [
	"medical",
	"shelter",
	"evac",
	"water",
	"admin",
	"housing",
	"sports",
	"care"
];
var urgentRank = (f) => Math.min(...[...(f?.roles || []).map((r) => URGENT.indexOf(r.role))].map((i) => i < 0 ? 99 : i).concat(99));
//#endregion
//#region src/store/useReviewQueue.js
var useReviewQueue = create((set) => ({
	uploaded: [],
	removed: [],
	applied: {},
	addUploaded: (entry) => set((s) => ({ uploaded: [entry, ...s.uploaded] })),
	remove: (id) => set((s) => ({ removed: s.removed.includes(id) ? s.removed : [...s.removed, id] })),
	setApplied: (id, value) => set((s) => ({ applied: {
		...s.applied,
		[id]: value
	} })),
	clearApplied: (id) => set((s) => {
		const next = { ...s.applied };
		delete next[id];
		return { applied: next };
	}),
	reset: () => set({
		uploaded: [],
		removed: [],
		applied: {}
	})
}));
//#endregion
//#region src/lib/strataStats.js
var fmt = (n) => Number(n || 0).toLocaleString("ko-KR");
function reviewItems(facilities) {
	const out = [];
	for (const f of facilities) for (const e of f.events || []) {
		if (e.certainty === "확정") continue;
		out.push({
			id: f.id + "-" + (e.id || e.notice || ""),
			facility: f,
			event: e,
			kind: "공지 판독",
			reason: e.start ? "공고에서 읽은 기간, 착공 여부 확인" : "공고에 기간 없음, 시작일 확인"
		});
	}
	for (const f of facilities) {
		if (f.status !== "check" || (f.events || []).some((e) => e.certainty !== "확정")) continue;
		out.push({
			id: f.id + "-reg",
			facility: f,
			event: null,
			kind: "대장 확인",
			reason: "대장과 공지 불일치, 담당 부서 확인"
		});
	}
	return out;
}
var statusCount = (facilities, ms) => {
	const stopped = new Set(closedToday(facilities, ms).items.map((it) => it.facility.id));
	const out = {
		open: 0,
		closed: stopped.size,
		check: 0
	};
	for (const f of facilities) {
		if (stopped.has(f.id)) continue;
		if (statusAt(f, ms) === "check") out.check += 1;
		else out.open += 1;
	}
	return out;
};
function pendingReview(facilities, { uploaded = [], removed = [] } = {}) {
	const out = new Set(removed);
	return [...(uploaded || []).map((x) => x.id), ...reviewItems(facilities).map((x) => x.id)].filter((id) => !out.has(id));
}
function useReviewCount() {
	const { data } = useStrata();
	const uploaded = useReviewQueue((s) => s.uploaded);
	const removed = useReviewQueue((s) => s.removed);
	return (0, import_react.useMemo)(() => pendingReview(data.facilities || [], {
		uploaded,
		removed
	}).length, [
		data,
		uploaded,
		removed
	]);
}
var km = (m) => m >= 1e3 ? (m / 1e3).toFixed(1) + "km" : Math.round(m) + "m";
var basisShort = (basis) => basis ? String(basis).split(".")[0].trim() : "";
function closedToday(facilities, ms) {
	const items = [];
	let roleSlots = 0;
	let covered = 0;
	for (const f of facilities) {
		const evs = activeEvents(f, ms);
		if (!evs.length) continue;
		const roles = [...new Set(evs.flatMap((e) => e.roles || []))];
		roleSlots += roles.length;
		const alts = f.alternatives || [];
		const withAlt = roles.filter((r) => alts.some((a) => a.role === r));
		covered += withAlt.length;
		items.push({
			facility: f,
			roles,
			event: evs[0],
			covered: withAlt.length
		});
	}
	return {
		items,
		roleSlots,
		covered,
		facilities: items.length
	};
}
function closedByDong(facilities, ms, limit = 8) {
	const map = /* @__PURE__ */ new Map();
	for (const { facility } of closedToday(facilities, ms).items) {
		const key = (facility.dong || "").trim() || "동 미상";
		const row = map.get(key) || {
			key,
			name: key,
			value: 0,
			items: []
		};
		row.value += 1;
		row.items.push(facility);
		map.set(key, row);
	}
	return [...map.values()].sort((a, b) => b.value - a.value).slice(0, limit);
}
function alternativesOf(facility, byId, roles = null) {
	const best = {};
	for (const a of facility?.alternatives || []) {
		if (roles && !roles.includes(a.role)) continue;
		if (!best[a.role] || a.distM < best[a.role].distM) best[a.role] = a;
	}
	return Object.entries(best).map(([role, a]) => ({
		role,
		...a,
		facility: byId?.[a.facilityId] || null
	}));
}
//#endregion
//#region src/components/layout/Sidebar.jsx
function SideNav({ collapsed = false, onNavigate, showHeader = true }) {
	const pending = useReviewCount();
	const { pathname } = useLocation();
	const current = sectionOf(pathname);
	const row = (m) => {
		const active = current?.key === m.key || m.to && !m.match && pathname === m.to;
		const cls = clsx("relative flex min-h-9 items-center rounded-lg [@media(min-height:800px)]:min-h-10 transition-colors duration-fast", collapsed ? "justify-center px-0" : "gap-2 px-3", active ? "bg-subtle text-text-pri" : "text-text-sec hover:bg-subtle hover:text-text-pri");
		const badgeLabel = `확인 대기 공지 ${pending}건`;
		const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.Icon, {
				size: 20,
				"aria-hidden": "true",
				className: clsx("shrink-0", active ? "text-text-pri" : "text-text-meta")
			}),
			!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: clsx("min-w-0 flex-1 whitespace-nowrap type-body-sm", active && "font-bold"),
				children: m.label
			}),
			!collapsed && m.key === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-label": "AI 읽기",
				className: "shrink-0 rounded-md bg-mute px-1.5 type-count text-text-pri",
				children: "AI"
			}),
			m.queue && pending > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				title: badgeLabel,
				"aria-label": badgeLabel,
				className: clsx("inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-text-pri px-1.5 type-count text-text-inverse", collapsed && "absolute right-2 top-1.5"),
				children: pending
			})
		] });
		const subs = !collapsed && current?.key === m.key ? SECTION_TABS[m.key] : null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
			to: m.to,
			end: m.end,
			onClick: onNavigate,
			title: collapsed ? m.label : void 0,
			"aria-label": collapsed ? m.label : void 0,
			"aria-current": active ? "page" : void 0,
			className: cls,
			children: inner
		}), subs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mb-0 flex flex-col",
			children: subs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
				to: t.to,
				onClick: onNavigate,
				className: ({ isActive }) => clsx("flex min-h-7 items-center rounded-lg pl-11 pr-4 type-body-sm transition-colors duration-fast", isActive ? "font-bold text-text-pri" : "text-text-sec hover:text-text-pri"),
				children: t.label
			}) }, t.to))
		})] }, m.key);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: clsx("flex h-14 shrink-0 items-center", collapsed ? "justify-center" : "justify-between pl-5 pr-4"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin",
					"aria-label": "현황판으로 가기",
					className: "inline-flex items-center gap-2 text-text-pri",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-text-inverse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
							size: 18,
							"aria-hidden": "true"
						})
					}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "type-h3",
						children: "Strata"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "담당자 메뉴",
				className: clsx("min-h-0 flex-1 overflow-y-auto pb-1 pt-2", collapsed ? "px-2" : "px-3"),
				children: RAIL_GROUPS.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-label": g.label,
					className: clsx(i > 0 && (collapsed ? "mt-3" : "mt-2")),
					children: [
						!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-0.5 px-3 type-body-sm font-bold text-text-meta",
							children: g.label
						}),
						collapsed && i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "mx-auto mb-2 block h-1 w-1 rounded-full bg-line-strong"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-0.5",
							children: g.items.map(row)
						})
					]
				}, g.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: clsx("shrink-0 pb-6 pt-2", collapsed ? "flex justify-center px-2" : "px-3"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenu, { compact: collapsed })
			})
		]
	});
}
function NavPanel({ onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideNav, {
		onNavigate,
		showHeader: false
	});
}
//#endregion
//#region src/components/ui/Badge.jsx
var TONE$1 = {
	neutral: "bg-line-def text-text-sec",
	primary: "bg-primary-soft text-primary-text",
	success: "bg-success-soft text-success-text",
	warning: "bg-warning-soft text-warning-text",
	danger: "bg-danger-soft text-danger-text",
	critical: "bg-danger text-text-inverse"
};
function Badge({ tone = "neutral", className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: clsx("inline-flex items-center h-5 px-1.5 rounded-xs type-caption", TONE$1[tone], className),
		children
	});
}
//#endregion
//#region src/lib/screenGuide.js
var SECTIONS = [
	"이 화면에서 하는 일",
	"눈여겨볼 곳",
	"다음에 갈 곳"
];
var GUIDES = {
	"/admin": {
		title: "현황판",
		does: [
			"오늘 운영 중단 시설과 비는 역할 확인",
			"동별 운영 중단 분포 확인",
			"처리할 일과 대체 지정 남은 수 확인"
		],
		look: [
			"상태 띠: 오늘 결론 한 문장",
			"숫자 흐름: 등록 시설에서 대체 지정까지",
			"동별 운영 중단 막대와 시설 목록",
			"오늘 여건: 기상특보와 응급실 병상"
		],
		next: [
			{
				text: "판독함: 확인 대기 공지 처리",
				to: "/admin/review"
			},
			{
				text: "시설: 대체 시설 지정",
				to: "/admin/facilities"
			},
			{
				text: "상황판: 지도에서 보기",
				to: "/admin/board"
			}
		]
	},
	"/admin/review": {
		title: "판독함",
		does: [
			"공지 올리기와 AI 읽기 실행",
			"읽은 값과 원본 공지 대조",
			"제외, 수정, 확인으로 시민 화면 반영"
		],
		look: [
			"단계 표시: 공지 올리기, AI 읽기, 담당자 확인",
			"확인 대기 목록, 위아래 키와 Enter",
			"원본 공지의 근거 문장 형광 표시",
			"확인 필요 사유와 확인할 곳"
		],
		next: [{
			text: "시설: 반영된 운영 상태 확인",
			to: "/admin/facilities"
		}, {
			text: "현황판: 오늘 결론 다시 보기",
			to: "/admin"
		}]
	},
	"/admin/facilities": {
		title: "시설",
		does: [
			"시설 목록과 오늘 상태 확인",
			"맡은 역할과 대신 갈 곳 확인",
			"운영 변경 이력과 출처 확인"
		],
		look: [
			"조건 줄: 시설 찾기, 역할, 오늘 상태",
			"왼쪽 목록, 선택한 시설은 면 색과 굵은 제목",
			"상세 순서: 결론, 할 일, 근거"
		],
		next: [{
			text: "상황판: 같은 시설 지도에서 보기",
			to: "/admin/board"
		}, {
			text: "판독함: 공지로 상태 고치기",
			to: "/admin/review"
		}]
	},
	"/admin/board": {
		title: "상황판",
		does: [
			"지도에서 운영 중단 시설 위치 확인",
			"역할별 분포와 공백 지역 확인",
			"시각 이동으로 날짜별 상태 확인"
		],
		look: [
			"지도 위 겹친 정보 판",
			"역할 고르기와 시각 막대",
			"시설 선택 시 오른쪽 상세"
		],
		next: [{
			text: "시설: 목록으로 보기",
			to: "/admin/facilities"
		}, {
			text: "현황판: 숫자로 보기",
			to: "/admin"
		}]
	},
	"/admin/docs": {
		title: "문서함",
		does: [
			"공문과 표, 서식 만들기",
			"최근 문서와 고정 문서 열기",
			"현황판 숫자를 문서에 넣기"
		],
		look: [
			"서식 묶음과 새 문서 시작",
			"최근 문서 목록과 고친 시각",
			"문서 종류 배지"
		],
		next: [{
			text: "현황판: 숫자 다시 확인",
			to: "/admin"
		}, {
			text: "시설: 문서에 넣을 시설 찾기",
			to: "/admin/facilities"
		}]
	}
};
function guideFor(pathname) {
	if (GUIDES[pathname]) return {
		path: pathname,
		...GUIDES[pathname]
	};
	const hit = Object.keys(GUIDES).filter((p) => p !== "/admin" && pathname.startsWith(p + "/")).sort((a, b) => b.length - a.length)[0];
	return hit ? {
		path: hit,
		...GUIDES[hit]
	} : null;
}
//#endregion
//#region src/components/onboarding/tours.js
var band = {
	find: "section",
	text: "오늘",
	up: "section"
};
var flow = {
	find: "p",
	text: "등록 시설",
	up: "ol"
};
var sec = (text, tag = "h2") => ({
	find: tag,
	text,
	up: "section"
});
var btn = (text, extra = {}) => ({
	find: "button",
	text,
	...extra
});
var TOURS = {
	"/admin": [
		{
			title: "결론과 숫자 흐름",
			body: "오늘 결론 한 문장과 등록 시설에서 대체 지정까지 네 칸 숫자",
			targets: [band, flow]
		},
		{
			title: "동별 운영 중단",
			body: "동별 막대와 운영 중단 시설 목록, 선택 시 시설 상세 이동",
			targets: [sec("동별 운영 중단 시설")]
		},
		{
			title: "처리할 일",
			body: "공지 판독과 대체 시설 지정 대기 건수, 선택 시 해당 화면 이동",
			targets: [sec("처리할 일")]
		},
		{
			title: "오늘 여건",
			body: "기상특보와 응급실 병상, 공공데이터 응답이 있을 때만 표시",
			targets: [sec("오늘 여건")]
		}
	],
	"/admin/review": [
		{
			title: "공지 올리기",
			body: "공지 글 붙여넣기와 배너 그림 올리기, AI 읽기 시작",
			targets: [btn("공지 올리기")]
		},
		{
			title: "확인 대기 목록",
			body: "공지와 다른 건 위에, 위아래 키 이동과 Enter 확인",
			targets: [sec("확인 대기")]
		},
		{
			title: "원본 공지와 읽은 값",
			body: "원문 근거 문장 형광 표시, 값마다 원문 일치 표시",
			targets: [{ selector: "section[aria-label=\"원본 공지\"]" }, { selector: "section[aria-label=\"읽은 결과\"]" }]
		},
		{
			title: "확인 단추",
			body: "제외, 수정, 확인, 확인 시 시민 화면 반영과 안내문 생성",
			targets: [
				btn("제외", { exact: true }),
				btn("수정", { exact: true }),
				btn("확인", { exact: true })
			]
		}
	]
};
var norm = (el) => (el.textContent || "").replace(/\s+/g, " ").trim();
function resolveTarget(def, root = document) {
	const scope = def.within ? root.querySelector(def.within) : root;
	if (!scope) return null;
	let el = null;
	if (def.selector) el = scope.querySelector(def.selector);
	else {
		const re = def.re ? new RegExp(def.re) : null;
		const texts = [].concat(def.text || []);
		const list = [...scope.querySelectorAll(def.find || "*")].filter((e) => {
			const t = norm(e);
			return re ? re.test(t) : texts.some((x) => def.exact ? t === x : t.startsWith(x));
		});
		list.sort((a, b) => norm(a).length - norm(b).length);
		el = list[0] || null;
	}
	if (el && def.up) el = el.closest(def.up) || el.parentElement;
	return el;
}
function resolveTargets(step, root = document) {
	return (step.targets || []).map((d) => resolveTarget(d, root)).filter(Boolean);
}
function unionRect(els) {
	let l = Infinity, t = Infinity, r = -Infinity, b = -Infinity;
	for (const el of els) {
		const q = el.getBoundingClientRect();
		if (!q.width && !q.height) continue;
		l = Math.min(l, q.left);
		t = Math.min(t, q.top);
		r = Math.max(r, q.right);
		b = Math.max(b, q.bottom);
	}
	return Number.isFinite(l) ? {
		left: l,
		top: t,
		width: r - l,
		height: b - t
	} : null;
}
//#endregion
//#region src/components/onboarding/CoachTour.jsx
var openRequest = null;
function requestTour(setter) {
	openRequest = setter;
}
function startCoachTour() {
	if (openRequest) {
		openRequest();
		return true;
	}
	return false;
}
var PAD = 8;
var GAP = 12;
var MARGIN = 16;
var BW = 320;
var RADIUS = 16;
var ARROW = 8;
function placeBubble(rect, size, vw, vh) {
	const hole = {
		l: rect.left - PAD,
		t: rect.top - PAD,
		r: rect.left + rect.width + PAD,
		b: rect.top + rect.height + PAD
	};
	const clampX = (x) => Math.max(MARGIN, Math.min(x, vw - size.w - MARGIN));
	const clampY = (y) => Math.max(MARGIN, Math.min(y, vh - size.h - MARGIN));
	const cx = rect.left + rect.width / 2;
	const cy = rect.top + rect.height / 2;
	const pick = [
		{
			side: "below",
			left: clampX(cx - size.w / 2),
			top: hole.b + GAP,
			ok: hole.b + GAP + size.h + MARGIN <= vh
		},
		{
			side: "above",
			left: clampX(cx - size.w / 2),
			top: hole.t - GAP - size.h,
			ok: hole.t - GAP - size.h >= MARGIN
		},
		{
			side: "right",
			left: hole.r + GAP,
			top: clampY(cy - size.h / 2),
			ok: hole.r + GAP + size.w + MARGIN <= vw
		},
		{
			side: "left",
			left: hole.l - GAP - size.w,
			top: clampY(cy - size.h / 2),
			ok: hole.l - GAP - size.w >= MARGIN
		}
	].find((t) => t.ok);
	if (pick) {
		const arrow = pick.side === "below" || pick.side === "above" ? { x: Math.max(24, Math.min(cx - pick.left, size.w - 24)) } : { y: Math.max(24, Math.min(cy - pick.top, size.h - 24)) };
		return {
			...pick,
			arrow
		};
	}
	return {
		side: "inside",
		left: clampX(hole.l + 24),
		top: clampY(Math.min(hole.b, vh) - size.h - 24),
		arrow: null
	};
}
function clipToViewport(r) {
	if (!r || typeof window === "undefined") return r;
	const edge = 20;
	const top = Math.max(r.top, edge);
	const left = Math.max(r.left, edge);
	const bottom = Math.min(r.top + r.height, window.innerHeight - edge);
	const right = Math.min(r.left + r.width, window.innerWidth - edge);
	return {
		left,
		top,
		width: Math.max(0, right - left),
		height: Math.max(0, bottom - top)
	};
}
function CoachTour() {
	const { pathname } = useLocation();
	const [active, setActive] = (0, import_react.useState)(null);
	const [rect, setRect] = (0, import_react.useState)(null);
	const [size, setSize] = (0, import_react.useState)({
		w: BW,
		h: 170
	});
	const bubbleRef = (0, import_react.useRef)(null);
	const hasTour = !!TOURS[pathname];
	const begin = (0, import_react.useCallback)(() => {
		const steps = (TOURS[pathname] || []).map((d) => ({
			...d,
			els: resolveTargets(d)
		})).filter((s) => s.els.length);
		if (steps.length) setActive({
			steps,
			i: 0
		});
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		setActive(null);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		requestTour(hasTour ? begin : null);
		return () => requestTour(null);
	}, [hasTour, begin]);
	const step = active ? active.steps[active.i] : null;
	const measure = (0, import_react.useCallback)(() => {
		if (!step) return setRect(null);
		const els = step.els.every((e) => document.body.contains(e)) ? step.els : resolveTargets(step);
		setRect(clipToViewport(unionRect(els)));
	}, [step]);
	(0, import_react.useLayoutEffect)(() => {
		if (!step) return void 0;
		const first = step.els[0];
		const r0 = unionRect(step.els);
		if (r0 && first?.scrollIntoView) {
			const vh = window.innerHeight;
			if (r0.top < 72 || r0.top + r0.height > vh - 16) first.scrollIntoView({
				block: r0.height > vh * .8 ? "start" : "center",
				behavior: "instant"
			});
		}
		measure();
		const raf = requestAnimationFrame(measure);
		window.addEventListener("resize", measure);
		window.addEventListener("scroll", measure, true);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", measure);
			window.removeEventListener("scroll", measure, true);
		};
	}, [step, measure]);
	(0, import_react.useLayoutEffect)(() => {
		if (bubbleRef.current) {
			const q = bubbleRef.current.getBoundingClientRect();
			if (Math.abs(q.height - size.h) > 1) setSize({
				w: BW,
				h: q.height
			});
		}
	});
	(0, import_react.useEffect)(() => {
		if (step) document.querySelector("[data-next]")?.focus({ focusVisible: false });
	}, [step]);
	const close = (0, import_react.useCallback)(() => setActive(null), []);
	const go = (0, import_react.useCallback)((d) => setActive((a) => {
		if (!a) return a;
		const n = a.i + d;
		return n < 0 ? a : n >= a.steps.length ? null : {
			...a,
			i: n
		};
	}), []);
	(0, import_react.useEffect)(() => {
		if (!active) return void 0;
		const onKey = (e) => {
			if (e.key === "Escape") close();
			else if (e.key === "ArrowRight") go(1);
			else if (e.key === "ArrowLeft") go(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		active,
		close,
		go
	]);
	const total = active?.steps.length || 0;
	const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
	const vh = typeof window !== "undefined" ? window.innerHeight : 900;
	const place = rect ? placeBubble(rect, size, vw, vh) : null;
	const hole = rect ? {
		left: rect.left - PAD,
		top: rect.top - PAD,
		width: rect.width + 16,
		height: rect.height + 16
	} : null;
	const dir = place?.side;
	const last = active ? active.i + 1 === total : false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: active && step && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-[90]",
		role: "dialog",
		"aria-modal": "false",
		"aria-label": `화면 안내 ${active.i + 1}/${total}`,
		children: [hole ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "coach-dim absolute inset-0",
				style: {
					clipPath: holePath(vw, vh, hole),
					"--coach-cx": `${hole.left + hole.width / 2}px`,
					"--coach-cy": `${hole.top + hole.height / 2}px`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto absolute left-0 right-0 top-0",
				style: { height: Math.max(0, hole.top) },
				onClick: close
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto absolute left-0 right-0 bottom-0",
				style: { top: hole.top + hole.height },
				onClick: close
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto absolute left-0",
				style: {
					top: hole.top,
					height: hole.height,
					width: Math.max(0, hole.left)
				},
				onClick: close
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto absolute right-0",
				style: {
					top: hole.top,
					height: hole.height,
					left: hole.left + hole.width
				},
				onClick: close
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "coach-ring pointer-events-none absolute",
				style: {
					...hole,
					borderRadius: RADIUS
				}
			}, active.i)
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "coach-dim pointer-events-auto absolute inset-0",
			style: {
				"--coach-cx": "50%",
				"--coach-cy": "50%"
			},
			onClick: close
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: bubbleRef,
			"data-side": dir || "",
			className: "coach-bubble pointer-events-auto absolute break-keep rounded-[16px] bg-page p-5",
			style: {
				left: place ? place.left : 24,
				top: place ? place.top : 24,
				width: BW
			},
			children: [
				place?.arrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BubbleArrow, {
					side: dir,
					arrow: place.arrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-body-strong text-text-pri",
					children: step.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 type-body-sm text-text-sec",
					children: step.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						"aria-hidden": "true",
						children: active.steps.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 rounded-full transition-all duration-200 ${k === active.i ? "w-4 bg-primary" : "w-1.5 bg-line-strong"}` }, k))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "type-meta text-text-sec tabular-nums",
						children: [
							active.i + 1,
							" / ",
							total
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						size: "sm",
						variant: "ghost",
						onClick: close,
						children: "건너뛰기"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [active.i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							size: "sm",
							variant: "ghost",
							onClick: () => go(-1),
							children: "이전"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							"data-next": "1",
							size: "sm",
							onClick: () => go(1),
							children: last ? "완료" : "다음"
						})]
					})]
				})
			]
		})]
	}) });
}
function BubbleArrow({ side, arrow }) {
	const W = 18;
	const base = {
		position: "absolute",
		width: W,
		height: ARROW,
		clipPath: "path(\"M0 8 L6.4 1.2 Q9 -1.2 11.6 1.2 L18 8 Z\")"
	};
	const pos = {
		below: {
			...base,
			top: -7,
			left: arrow.x - W / 2
		},
		above: {
			...base,
			bottom: -7,
			left: arrow.x - W / 2,
			transform: "rotate(180deg)"
		},
		right: {
			...base,
			left: -12,
			top: arrow.y - ARROW / 2,
			transform: "rotate(-90deg)"
		},
		left: {
			...base,
			right: -12,
			top: arrow.y - ARROW / 2,
			transform: "rotate(90deg)"
		}
	}[side];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: "bg-page",
		style: pos
	});
}
function holePath(vw, vh, h) {
	const r = Math.min(RADIUS, h.width / 2, h.height / 2);
	const x = h.left, y = h.top, w = h.width, hh = h.height;
	return `path(evenodd, "M0 0 H${vw} V${vh} H0 Z M${x + r} ${y} H${x + w - r} A${r} ${r} 0 0 1 ${x + w} ${y + r} V${y + hh - r} A${r} ${r} 0 0 1 ${x + w - r} ${y + hh} H${x + r} A${r} ${r} 0 0 1 ${x} ${y + hh - r} V${y + r} A${r} ${r} 0 0 1 ${x + r} ${y} Z")`;
}
//#endregion
//#region src/components/onboarding/GuidePanel.jsx
function GuideButton() {
	const open = useAdminUi((s) => s.guideOpen);
	const setOpen = useAdminUi((s) => s.setGuideOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		size: "sm",
		variant: "secondary",
		collapse: "xl",
		leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
			size: 16,
			"aria-hidden": "true"
		}),
		"aria-haspopup": "dialog",
		"aria-expanded": open,
		"data-guide-trigger": "1",
		onClick: () => setOpen(!open),
		children: "화면 안내"
	});
}
function GuidePanel() {
	const open = useAdminUi((s) => s.guideOpen);
	const setOpen = useAdminUi((s) => s.setGuideOpen);
	const { pathname } = useLocation();
	const closeRef = (0, import_react.useRef)(null);
	const guide = guideFor(pathname);
	const hasTour = !!(guide && TOURS[guide.path] && guide.path === pathname);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname, setOpen]);
	(0, import_react.useEffect)(() => {
		if (!open) return void 0;
		closeRef.current?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			document.querySelector("[data-guide-trigger]")?.focus({ preventScroll: true });
		};
	}, [open, setOpen]);
	if (!open) return null;
	const lists = guide ? [
		guide.does,
		guide.look,
		guide.next
	] : [];
	const startTour = () => {
		setOpen(false);
		setTimeout(startCoachTour, 260);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "fixed inset-0 z-[70]",
		onClick: () => setOpen(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		role: "dialog",
		"aria-modal": "false",
		"aria-label": `${guide?.title || "화면"} 안내`,
		className: "fixed bottom-0 right-0 top-0 z-[80] flex w-[420px] max-w-full flex-col bg-page shadow-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-start justify-between gap-4 px-8 pb-2 pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-meta text-text-sec",
						children: "화면 안내"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 type-h2 text-text-pri",
						children: guide?.title || "이 화면"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
					ref: closeRef,
					"aria-label": "안내 닫기",
					onClick: () => setOpen(false),
					className: "shrink-0 text-text-sec",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						size: 20,
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-8 pb-8 pt-4",
				children: guide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8",
					children: SECTIONS.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"aria-labelledby": `guide-h-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: `guide-h-${i}`,
							className: "type-title text-text-pri",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-1",
							children: lists[i].map((item, k) => i === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: "flex min-h-10 items-center justify-between gap-3 rounded-lg px-3 py-1 -mx-3 type-body text-text-pri hover:bg-subtle",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0",
									children: item.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 16,
									"aria-hidden": "true",
									className: "shrink-0 text-text-meta"
								})]
							}) }, item.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 py-1 type-body text-text-pri",
								children: [i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "w-5 shrink-0 text-right font-bold tabular-nums text-primary-text",
									children: k + 1
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-text-meta"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0",
									children: item
								})]
							}, item))
						})]
					}, name))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-body text-text-sec",
					children: "이 화면의 안내 없음"
				})
			}),
			hasTour && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 px-8 pb-8 pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					size: "lg",
					className: "w-full",
					onClick: startTour,
					children: "화면 투어 시작"
				})
			})
		]
	})] });
}
//#endregion
//#region src/components/layout/Topbar.jsx
var ICON_BTN = "inline-flex h-10 w-10 items-center justify-center rounded-md text-text-meta transition-colors duration-fast hover:bg-page hover:text-text-pri";
function Topbar({ isDesktop, panelOpen, onTogglePanel, basisDate }) {
	const topbar = useAdminUi((s) => s.topbar);
	const setSidebarOpen = useAdminUi((s) => s.setSidebarOpen);
	const { pathname } = useLocation();
	const section = sectionOf(pathname);
	const Icon = section?.Icon;
	const sub = section && topbar.title && topbar.title !== section.label ? topbar.title : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-16 shrink-0 items-center gap-4 pr-4 md:pr-[calc(40px+var(--admin-gutter,0px))]",
		children: [
			isDesktop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-center gap-1 pl-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": panelOpen ? "메뉴 접기" : "메뉴 펴기",
					"aria-pressed": panelOpen,
					className: ICON_BTN,
					onClick: onTogglePanel,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {
						size: 18,
						"aria-hidden": "true"
					})
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "메뉴 열기",
				className: clsx(ICON_BTN, "ml-2 h-11 w-11"),
				onClick: () => setSidebarOpen(true),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
					size: 20,
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex min-w-0 flex-1 items-center gap-2 type-body-sm text-text-sec",
				children: [
					Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 14,
						"aria-hidden": "true",
						className: "shrink-0 text-text-meta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: section?.label || topbar.title
					}),
					sub && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						size: 12,
						"aria-hidden": "true",
						className: "shrink-0 text-text-meta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-text-pri",
						children: sub
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideButton, {}), basisDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "neutral",
						children: "자료 " + basisDate + " 기준"
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/components/layout/AdminLayout.jsx
function AdminLayout() {
	const sidebarOpen = useAdminUi((s) => s.sidebarOpen);
	const setSidebarOpen = useAdminUi((s) => s.setSidebarOpen);
	const bannerDismissed = useAdminUi((s) => s.desktopBannerDismissed);
	const dismissBanner = useAdminUi((s) => s.dismissDesktopBanner);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const isWide = useMediaQuery("(min-width: 1024px)");
	const { pathname } = useLocation();
	const { data } = useStrata();
	const [panelOpen, setPanelOpen] = (0, import_react.useState)(isWide);
	const mainRef = (0, import_react.useRef)(null);
	const [gutter, setGutter] = (0, import_react.useState)(0);
	(0, import_react.useLayoutEffect)(() => {
		const el = mainRef.current;
		if (!el) return void 0;
		const read = () => setGutter(Math.max(0, el.offsetWidth - el.clientWidth));
		read();
		const ro = new ResizeObserver(read);
		ro.observe(el);
		return () => ro.disconnect();
	}, [isDesktop]);
	(0, import_react.useEffect)(() => {
		if (isDesktop) setSidebarOpen(false);
	}, [isDesktop, setSidebarOpen]);
	(0, import_react.useEffect)(() => {
		setPanelOpen(isWide && !pathname.startsWith("/admin/board"));
	}, [isWide, pathname]);
	(0, import_react.useEffect)(() => {
		mainRef.current?.scrollTo(0, 0);
	}, [pathname]);
	const basis = (data.sources || [])[0]?.date || (data.generatedAt ? dotDate(data.generatedAt) : "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh overflow-hidden bg-mute",
		style: { "--admin-gutter": `${gutter}px` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				onClick: (e) => {
					e.preventDefault();
					mainRef.current?.focus();
				},
				className: "sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-text-pri focus:px-4 focus:py-2 focus:font-bold focus:text-text-inverse",
				children: "본문 바로가기"
			}),
			isDesktop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "shrink-0",
				style: { width: panelOpen ? 220 : 80 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideNav, { collapsed: !panelOpen })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, {
						isDesktop,
						panelOpen,
						onTogglePanel: () => setPanelOpen((o) => !o),
						basisDate: basis
					}),
					!isDesktop && !bannerDismissed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-4 pb-2 text-text-sec",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-w-0 flex-1 type-caption",
							children: "담당자 화면은 컴퓨터 사용 권장, 휴대폰은 조회 위주"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							size: "sm",
							"aria-label": "안내 닫기",
							onClick: dismissBanner,
							className: "text-text-sec",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								size: 16,
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-0 flex-1 overflow-hidden bg-page md:mr-2 md:rounded-t-lg md:shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-w-0 flex-1 flex-col",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
								id: "main",
								tabIndex: -1,
								ref: mainRef,
								className: "admin-surface relative min-h-0 flex-1 overflow-y-auto focus:outline-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "min-h-[60vh]",
										"aria-busy": "true"
									}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }, pathname)
								})
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoachTour, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuidePanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
				open: sidebarOpen,
				side: "left",
				onClose: () => setSidebarOpen(false),
				title: "담당자 메뉴",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavPanel, { onNavigate: () => setSidebarOpen(false) })
			})
		]
	});
}
//#endregion
//#region src/mobile/citizen/useWide.js
var WIDE = 1024;
var read = () => typeof window === "undefined" ? false : window.innerWidth >= WIDE;
function useWide() {
	const [wide, setWide] = (0, import_react.useState)(read);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia(`(min-width: ${WIDE}px)`);
		const on = () => setWide(mq.matches);
		on();
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return wide;
}
//#endregion
//#region src/mobile/platform.js
var STORAGE_KEY = "strata.mobile.platform";
var LARGE_TEXT_KEY = "strata.mobile.largeText";
function normalizePlatform(value) {
	const v = String(value || "").trim().toLowerCase();
	if (v === "ios" || v === "iphone" || v === "ipad") return "ios";
	if (v === "android" || v === "aos" || v === "m3") return "android";
	return null;
}
function detectFromUserAgent(ua) {
	return /android/i.test(String(ua || "")) ? "android" : null;
}
function resolvePlatform({ search = "", stored = null, userAgent = "" } = {}) {
	let fromQuery = null;
	try {
		fromQuery = normalizePlatform(new URLSearchParams(search).get("platform"));
	} catch {
		fromQuery = null;
	}
	if (fromQuery) return {
		platform: fromQuery,
		source: "query"
	};
	const fromStore = normalizePlatform(stored);
	if (fromStore) return {
		platform: fromStore,
		source: "stored"
	};
	const fromUa = detectFromUserAgent(userAgent);
	if (fromUa) return {
		platform: fromUa,
		source: "userAgent"
	};
	return {
		platform: "ios",
		source: "default"
	};
}
function bodyClassFor(platform, largeText = false) {
	return [
		"mobile-ui",
		`platform-${normalizePlatform(platform) || "ios"}`,
		largeText ? "text-large" : "text-regular"
	];
}
//#endregion
//#region src/mobile/usePlatform.js
var PlatformContext = (0, import_react.createContext)(null);
function readStore(key) {
	try {
		return window.sessionStorage.getItem(key);
	} catch {
		return null;
	}
}
function writeStore(key, value) {
	try {
		window.sessionStorage.setItem(key, value);
	} catch {}
}
function PlatformProvider({ children }) {
	const initial = (0, import_react.useMemo)(() => resolvePlatform({
		search: typeof window === "undefined" ? "" : window.location.search,
		stored: typeof window === "undefined" ? null : readStore(STORAGE_KEY),
		userAgent: typeof navigator === "undefined" ? "" : navigator.userAgent
	}), []);
	const [platform, setPlatformState] = (0, import_react.useState)(initial.platform);
	const [source, setSource] = (0, import_react.useState)(initial.source);
	const [largeText, setLargeTextState] = (0, import_react.useState)(() => readStore(LARGE_TEXT_KEY) === "1");
	(0, import_react.useEffect)(() => {
		if (initial.source === "query") writeStore(STORAGE_KEY, initial.platform);
	}, [initial]);
	(0, import_react.useEffect)(() => {
		const classes = bodyClassFor(platform, largeText);
		document.body.classList.add(...classes);
		return () => document.body.classList.remove(...classes);
	}, [platform, largeText]);
	(0, import_react.useEffect)(() => {
		const v = new URLSearchParams(window.location.search).get("safetop");
		if (v && /^\d+$/.test(v)) document.documentElement.style.setProperty("--m-frame-safe-top", `${v}px`);
	}, []);
	const setPlatform = (0, import_react.useCallback)((next) => {
		const p = normalizePlatform(next);
		if (!p) return;
		writeStore(STORAGE_KEY, p);
		setPlatformState(p);
		setSource("manual");
	}, []);
	(0, import_react.useEffect)(() => {
		const on = (e) => {
			if (e.origin !== window.location.origin || e.data?.type !== "strata-mobile-platform") return;
			setPlatform(e.data.platform);
			if (typeof e.data.safeTop === "number") document.documentElement.style.setProperty("--m-frame-safe-top", `${e.data.safeTop}px`);
		};
		window.addEventListener("message", on);
		return () => window.removeEventListener("message", on);
	}, [setPlatform]);
	const setLargeText = (0, import_react.useCallback)((on) => {
		writeStore(LARGE_TEXT_KEY, on ? "1" : "0");
		setLargeTextState(!!on);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		platform,
		source,
		isIOS: platform === "ios",
		isAndroid: platform === "android",
		setPlatform,
		largeText,
		setLargeText
	}), [
		platform,
		source,
		setPlatform,
		largeText,
		setLargeText
	]);
	return (0, import_react.createElement)(PlatformContext.Provider, { value }, children);
}
function usePlatform() {
	const ctx = (0, import_react.useContext)(PlatformContext);
	if (!ctx) throw new Error("usePlatform 은 PlatformProvider 안에서만 씀");
	return ctx;
}
function sizeClassOf(width) {
	if (width >= 840) return "expanded";
	if (width >= 600) return "medium";
	return "compact";
}
function postureOf({ hSegments = 1, vSegments = 1 } = {}) {
	if (hSegments >= 2) return "book";
	if (vSegments >= 2) return "tabletop";
	return "flat";
}
function layoutFor({ platform = "ios", width = 402, height = 874, hSegments = 1, vSegments = 1 } = {}) {
	const size = sizeClassOf(width);
	const posture = postureOf({
		hSegments,
		vSegments
	});
	const extra = posture === "flat" ? {} : { posture };
	if (platform === "android") return {
		size,
		bar: size === "compact" ? "bottom" : "rail",
		twoPane: posture === "book" ? true : posture === "tabletop" ? false : size === "expanded",
		margin: size === "compact" ? 16 : size === "medium" ? 32 : 24,
		...extra
	};
	const twoPane = posture === "tabletop" ? false : posture === "book" ? true : size !== "compact";
	const bar = height < 760 ? "side" : "bottom";
	return {
		size,
		bar,
		twoPane,
		margin: bar === "side" || twoPane ? 20 : 16,
		...extra
	};
}
//#endregion
//#region src/mobile/time.js
var validTime = (value) => /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
var timeValue = (hour, minute) => String(hour).padStart(2, "0") + ":" + String(minute).padStart(2, "0");
//#endregion
//#region src/mobile/ui.jsx
var segCount = (axis) => {
	if (typeof window === "undefined" || !window.matchMedia) return 1;
	return window.matchMedia(`(${axis}-viewport-segments: 2)`).matches ? 2 : 1;
};
function useViewport() {
	const read = () => typeof window === "undefined" ? {
		width: 402,
		height: 874
	} : {
		width: window.innerWidth,
		height: window.innerHeight,
		hSegments: segCount("horizontal"),
		vSegments: segCount("vertical")
	};
	const [vp, setVp] = (0, import_react.useState)(read);
	(0, import_react.useEffect)(() => {
		const on = () => setVp(read());
		window.addEventListener("resize", on);
		const posture = navigator.devicePosture;
		posture?.addEventListener?.("change", on);
		return () => {
			window.removeEventListener("resize", on);
			posture?.removeEventListener?.("change", on);
		};
	}, []);
	return vp;
}
var LayoutContext = (0, import_react.createContext)(layoutFor());
function useLayout() {
	return (0, import_react.useContext)(LayoutContext);
}
function MobileRoot({ platform: forced, className = "", children, ...rest }) {
	const { platform, largeText } = usePlatform();
	const p = forced || platform;
	const layout = layoutFor({
		platform: p,
		...useViewport()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutContext.Provider, {
		value: layout,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mob-root platform-${p} size-${layout.size} bar-${layout.bar} ${layout.twoPane ? "two-pane" : ""} ${layout.posture ? `posture-${layout.posture}` : ""} ${typeof window !== "undefined" && window.self !== window.top ? "in-frame" : ""} ${largeText ? "text-large" : ""} ${className}`,
			"data-platform": p,
			"data-size": layout.size,
			"data-bar": layout.bar,
			...rest,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastHost, { children })
		})
	});
}
function useRootPlatform(ref) {
	const { platform } = usePlatform();
	const [p, setP] = (0, import_react.useState)(platform);
	(0, import_react.useEffect)(() => {
		const el = ref.current?.closest(".mob-root");
		if (el?.dataset.platform) setP(el.dataset.platform);
	}, [ref, platform]);
	return p;
}
function AppBar({ title, large = false, onBack, backLabel = "뒤로", trailing, scrollTarget }) {
	const ref = (0, import_react.useRef)(null);
	const platform = useRootPlatform(ref);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const target = scrollTarget || window;
		const onScroll = () => setScrolled((target.scrollY ?? target.scrollTop ?? 0) > 8);
		onScroll();
		target.addEventListener("scroll", onScroll, { passive: true });
		return () => target.removeEventListener("scroll", onScroll);
	}, [scrollTarget]);
	const showLarge = large && !scrolled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref,
		className: `mob-bar ${scrolled ? "scrolled" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mob-bar-row ${showLarge && platform === "ios" && !onBack && !trailing ? "bare" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mob-bar-slot ${onBack ? "" : "empty"}`,
					children: onBack && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mob-icon-btn",
						onClick: onBack,
						"aria-label": backLabel,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(platform === "android" ? ArrowLeft : ChevronLeft, {
							size: 24,
							"aria-hidden": "true"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mob-bar-title",
					"aria-hidden": showLarge && platform === "ios" ? "true" : void 0,
					"data-hidden": showLarge && platform === "ios" ? "true" : void 0,
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mob-bar-slot",
					children: trailing
				})
			]
		}), showLarge && platform === "ios" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mob-bar-large",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mob-t-display",
				role: "heading",
				"aria-level": 1,
				children: title
			})
		})]
	});
}
function Button({ variant = "filled", size = "md", block = false, className = "", onPointerDown, children, ...rest }) {
	const ref = (0, import_react.useRef)(null);
	const platform = useRootPlatform(ref);
	const handleDown = (e) => {
		if (platform === "android" && ref.current && !rest.disabled) {
			const r = ref.current.getBoundingClientRect();
			const s = Math.max(r.width, r.height);
			const dot = document.createElement("span");
			dot.className = "mob-ripple";
			dot.style.width = dot.style.height = `${s}px`;
			dot.style.left = `${e.clientX - r.left - s / 2}px`;
			dot.style.top = `${e.clientY - r.top - s / 2}px`;
			ref.current.appendChild(dot);
			setTimeout(() => dot.remove(), 500);
		}
		onPointerDown?.(e);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type: "button",
		className: `mob-btn v-${variant} size-${size} ${block ? "block" : ""} ${className}`,
		onPointerDown: handleDown,
		...rest,
		children
	});
}
function List({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mob-list",
		"aria-label": label,
		children
	});
}
var CODE_RE = /([A-Z]{1,3}(?:-\d+)+,?|[^\s(),]+\([^\s()]*\)?,?)/g;
function keepCodes(text) {
	if (typeof text !== "string" || !/[A-Z]-\d|\S\(/.test(text)) return text;
	return text.split(CODE_RE).map((part, i) => i % 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mob-nb",
		children: part
	}, i) : part);
}
function ListRow({ lead, title, subtitle, meta, trailing, onClick, href, chevron, tall, className = "", ...rest }) {
	const Tag = href ? "a" : onClick ? "button" : "div";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
		className: `mob-row ${tall || meta ? "tall" : ""} ${className.replace("mob-row", "").trim()}`.trim(),
		onClick,
		href,
		type: Tag === "button" ? "button" : void 0,
		...rest,
		children: [
			lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mob-row-lead",
				"aria-hidden": "true",
				children: lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mob-row-main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mob-t-body",
						children: keepCodes(title)
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mob-t-callout",
						children: keepCodes(subtitle)
					}),
					meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mob-t-sub",
						children: keepCodes(meta)
					})
				]
			}),
			(trailing || chevron) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mob-row-trail",
				children: [trailing, chevron && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					size: 20,
					"aria-hidden": "true"
				})]
			})
		]
	}) });
}
function radioProps(values, current, onChange, value) {
	return {
		tabIndex: value === (values.includes(current) ? current : values[0]) ? 0 : -1,
		onKeyDown: (e) => {
			const i = values.indexOf(value);
			let j = null;
			if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % values.length;
			else if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + values.length) % values.length;
			else if (e.key === "Home") j = 0;
			else if (e.key === "End") j = values.length - 1;
			if (j == null) return;
			e.preventDefault();
			onChange(values[j]);
			const group = e.currentTarget.closest("[role=\"radiogroup\"]");
			(group ? group.querySelectorAll("[role=\"radio\"]") : [])[j]?.focus();
		}
	};
}
function Segmented({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mob-seg",
		role: "radiogroup",
		"aria-label": label,
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			role: "radio",
			"aria-checked": value === o.value,
			onClick: () => onChange(o.value),
			...radioProps(options.map((x) => x.value), value, onChange, o.value),
			children: [value === o.value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "mob-seg-check",
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z",
					fill: "currentColor"
				})
			}), o.label]
		}, o.value))
	});
}
function Toggle({ checked, onChange, label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		className: "mob-toggle",
		"aria-checked": !!checked,
		"aria-label": label,
		onClick: () => onChange(!checked),
		...rest
	});
}
function Spinner({ label = "불러오는 중" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mob-spinner",
		role: "status",
		"aria-label": label
	});
}
var FOCUSABLE = "button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function trapTab(e, root) {
	if (e.key !== "Tab" || !root) return false;
	const items = [...root.querySelectorAll(FOCUSABLE)];
	if (!items.length) {
		e.preventDefault();
		return true;
	}
	const first = items[0];
	const last = items[items.length - 1];
	const active = root.ownerDocument.activeElement;
	if (e.shiftKey && (active === first || !root.contains(active))) {
		e.preventDefault();
		last.focus();
		return true;
	}
	if (!e.shiftKey && (active === last || !root.contains(active))) {
		e.preventDefault();
		first.focus();
		return true;
	}
	return false;
}
function useOverlay(open, onClose) {
	const box = (0, import_react.useRef)(null);
	const closeRef = (0, import_react.useRef)(onClose);
	closeRef.current = onClose;
	(0, import_react.useEffect)(() => {
		if (!open) return void 0;
		const before = document.activeElement;
		const onKey = (e) => {
			const overlays = document.querySelectorAll(".mob-sheet, .mob-dialog");
			if (overlays.length && overlays[overlays.length - 1] !== box.current) return;
			if (e.key === "Escape") closeRef.current?.();
			else trapTab(e, box.current);
		};
		document.addEventListener("keydown", onKey);
		const scrim = box.current?.parentElement;
		const siblings = scrim?.parentElement ? [...scrim.parentElement.children].filter((el) => el !== scrim && !el.hasAttribute("inert")) : [];
		siblings.forEach((el) => el.setAttribute("inert", ""));
		const first = box.current?.querySelector("[data-autofocus]");
		if (first) first.focus();
		else box.current?.focus({ preventScroll: true });
		return () => {
			document.removeEventListener("keydown", onKey);
			siblings.forEach((el) => el.removeAttribute("inert"));
			if (before && document.contains(before)) before.focus?.();
		};
	}, [open]);
	return box;
}
function Sheet({ open, onClose, title, hideTitle = false, center = false, children }) {
	const box = useOverlay(open, onClose);
	const id = (0, import_react.useId)();
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mob-scrim",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: box,
			tabIndex: -1,
			className: `mob-sheet${center ? " center" : ""}`,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": id,
			onClick: (e) => e.stopPropagation(),
			children: [
				!center && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mob-grabber",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id,
					className: hideTitle ? "mob-sr-only" : "mob-t-headline mob-sheet-title",
					children: title
				}),
				children
			]
		})
	});
}
var ToastContext = (0, import_react.createContext)(() => {});
function ToastHost({ children }) {
	const [toast, setToast] = (0, import_react.useState)(null);
	const timer = (0, import_react.useRef)(null);
	const show = (0, import_react.useCallback)((message, action) => {
		clearTimeout(timer.current);
		setToast({
			message,
			action,
			key: Date.now()
		});
		timer.current = setTimeout(() => setToast(null), action ? 6e3 : 3200);
	}, []);
	(0, import_react.useEffect)(() => () => clearTimeout(timer.current), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToastContext.Provider, {
		value: show,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mob-toast-wrap",
			role: "status",
			"aria-live": "polite",
			children: toast && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mob-toast",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mob-toast-text",
					children: toast.message
				}), toast.action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "plain",
					size: "sm",
					onClick: () => {
						toast.action.onClick();
						setToast(null);
					},
					children: toast.action.label
				})]
			}, toast.key)
		})]
	});
}
function OfflineBanner({ pending = 0 }) {
	const [online, setOnline] = (0, import_react.useState)(typeof navigator === "undefined" ? true : navigator.onLine);
	(0, import_react.useEffect)(() => {
		const on = () => setOnline(true);
		const off = () => setOnline(false);
		window.addEventListener("online", on);
		window.addEventListener("offline", off);
		return () => {
			window.removeEventListener("online", on);
			window.removeEventListener("offline", off);
		};
	}, []);
	if (online && !pending) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		label: "연결 상태",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
			lead: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, {
				size: 20,
				"aria-hidden": "true"
			}),
			role: "status",
			className: online ? "" : "tone-red-text",
			title: online ? `보내는 중 ${pending}건` : "연결 끊김",
			subtitle: online ? "연결되어 다시 보내는 중" : `보고는 휴대폰에 보관, 연결되면 전송${pending ? `, 대기 ${pending}건` : ""}`
		})
	});
}
function EmptyState({ icon, title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mob-empty",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mob-empty-icon",
				"aria-hidden": "true",
				children: icon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { size: 28 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mob-t-headline",
				children: title
			}),
			body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mob-t-sub",
				children: body
			}),
			action
		]
	});
}
function BottomNav({ items, label = "주요 화면" }) {
	const { bar } = useLayout();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: `mob-nav nav-${bar}`,
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mob-nav-inner",
			children: items.map((it) => {
				const Tag = it.href ? "a" : "button";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
					href: it.href,
					onClick: it.onClick,
					type: Tag === "button" ? "button" : void 0,
					"aria-current": it.current ? "page" : void 0,
					className: "mob-nav-item",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mob-nav-pill",
						children: [it.icon, it.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mob-nav-badge",
							"aria-label": `${it.badge}건`,
							children: it.badge
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mob-nav-label",
						children: it.label
					})]
				}, it.key);
			})
		})
	});
}
function DisplaySettings() {
	const { largeText, setLargeText } = usePlatform();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		label: "화면 설정",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
			title: "큰 글자",
			subtitle: "글자와 버튼을 크게",
			trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				label: "큰 글자",
				checked: largeText,
				onChange: setLargeText
			})
		})
	});
}
function FilledInput({ className = "", type = "text", ...props }) {
	if (type === "time") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimePicker, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		type,
		className: `mob-filled-input ${className}`
	});
}
var WEEK = [
	"일",
	"월",
	"화",
	"수",
	"목",
	"금",
	"토"
];
function calendarKeyMove(date, key) {
	const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	const shiftMonth = (k) => {
		const last = new Date(d.getFullYear(), d.getMonth() + k + 1, 0).getDate();
		return new Date(d.getFullYear(), d.getMonth() + k, Math.min(d.getDate(), last));
	};
	switch (key) {
		case "ArrowLeft": return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
		case "ArrowRight": return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
		case "ArrowUp": return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
		case "ArrowDown": return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);
		case "Home": return new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay());
		case "End": return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (6 - d.getDay()));
		case "PageUp": return shiftMonth(-1);
		case "PageDown": return shiftMonth(1);
		default: return null;
	}
}
function IosInlineCalendar({ day, onDay }) {
	const [focus, setFocus] = (0, import_react.useState)(() => new Date(day.getFullYear(), day.getMonth(), day.getDate()));
	const view = new Date(focus.getFullYear(), focus.getMonth(), 1);
	const gridRef = (0, import_react.useRef)(null);
	const moved = (0, import_react.useRef)(false);
	const today = /* @__PURE__ */ new Date();
	const first = view.getDay();
	const last = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
	const cells = Array.from({ length: Math.ceil((first + last) / 7) * 7 }, (_, n) => n < first || n >= first + last ? null : n - first + 1);
	const rows = Array.from({ length: cells.length / 7 }, (_, r) => cells.slice(r * 7, r * 7 + 7));
	const same = (a, d) => a.getFullYear() === view.getFullYear() && a.getMonth() === view.getMonth() && a.getDate() === d;
	const move = (k) => {
		const last2 = new Date(view.getFullYear(), view.getMonth() + k + 1, 0).getDate();
		setFocus(new Date(view.getFullYear(), view.getMonth() + k, Math.min(focus.getDate(), last2)));
	};
	(0, import_react.useEffect)(() => {
		if (!moved.current) return;
		moved.current = false;
		gridRef.current?.querySelector("[tabindex=\"0\"]")?.focus();
	}, [focus]);
	const onKey = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onDay(new Date(focus));
			return;
		}
		const next = calendarKeyMove(focus, e.key);
		if (!next) return;
		e.preventDefault();
		moved.current = true;
		setFocus(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mob-ios-cal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mob-ios-cal-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mob-ios-cal-month",
					"aria-live": "polite",
					children: [
						view.getFullYear(),
						"년 ",
						view.getMonth() + 1,
						"월",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mob-ios-cal-disc",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 13,
								strokeWidth: 3
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mob-ios-cal-arrows",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mob-ios-cal-arrow",
						"aria-label": "이전 달",
						onClick: () => move(-1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mob-ios-cal-arrow",
						"aria-label": "다음 달",
						onClick: () => move(1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mob-ios-cal-week",
				"aria-hidden": "true",
				children: WEEK.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w }, w))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: gridRef,
				className: "mob-ios-cal-grid",
				role: "grid",
				"aria-label": `${view.getFullYear()}년 ${view.getMonth() + 1}월 날짜`,
				onKeyDown: onKey,
				children: rows.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "row",
					className: "mob-ios-cal-row",
					children: row.map((d, c) => d === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "gridcell",
						"aria-hidden": "true"
					}, "e" + c) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "gridcell",
						"aria-selected": same(day, d),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							tabIndex: d === focus.getDate() ? 0 : -1,
							"aria-label": `${view.getMonth() + 1}월 ${d}일${same(today, d) ? ", 오늘" : ""}`,
							className: `mob-ios-day ${same(today, d) ? "is-today" : ""} ${same(day, d) ? "is-selected" : ""}`,
							onClick: () => {
								const nd = new Date(view.getFullYear(), view.getMonth(), d);
								setFocus(nd);
								onDay(nd);
							},
							children: d
						})
					}, d))
				}, r))
			})
		]
	});
}
function DigitPair({ hour, minute, setHour, setMinute, inputProps, className, onEnter }) {
	const hRef = (0, import_react.useRef)(null);
	const mRef = (0, import_react.useRef)(null);
	const atEnd = (el) => el.selectionStart === el.value.length && el.selectionEnd === el.value.length;
	const atStart = (el) => el.selectionStart === 0 && el.selectionEnd === 0;
	const keyH = (e) => {
		if (e.key === "ArrowRight" && atEnd(e.currentTarget)) {
			e.preventDefault();
			mRef.current?.focus();
			mRef.current?.setSelectionRange(0, 0);
		} else if (e.key === "Enter") {
			e.preventDefault();
			onEnter?.();
		}
	};
	const keyM = (e) => {
		if ((e.key === "ArrowLeft" || e.key === "Backspace") && atStart(e.currentTarget)) {
			e.preventDefault();
			hRef.current?.focus();
		} else if (e.key === "Enter") {
			e.preventDefault();
			onEnter?.();
		}
	};
	const changeH = (e) => {
		const v = e.target.value.replace(/\D/g, "");
		setHour(v);
		if (v.length === 2) mRef.current?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				...inputProps,
				ref: hRef,
				"aria-label": "시",
				inputMode: "numeric",
				maxLength: 2,
				value: hour,
				onChange: changeH,
				onKeyDown: keyH
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: ":"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: mRef,
				"aria-label": "분",
				inputMode: "numeric",
				maxLength: 2,
				value: minute,
				onChange: (e) => setMinute(e.target.value.replace(/\D/g, "")),
				onKeyDown: keyM
			})
		]
	});
}
function TimePicker({ value = "", onChange, disabled, label = "시각", ...props }) {
	const { platform } = usePlatform();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [hour, setHour] = (0, import_react.useState)("00");
	const [minute, setMinute] = (0, import_react.useState)("00");
	const [day, setDay] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const choose = () => {
		const [h, m] = (validTime(value) ? value : timeValue((/* @__PURE__ */ new Date()).getHours(), (/* @__PURE__ */ new Date()).getMinutes())).split(":");
		setHour(h);
		setMinute(m);
		setOpen(true);
	};
	const result = timeValue(hour, minute);
	const ok = validTime(result);
	const commit = () => {
		onChange?.({ target: { value: result } });
		setOpen(false);
	};
	const hint = !ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "alert",
		className: "mob-t-sub",
		children: "시 00-23, 분 00-59 입력"
	});
	if (platform === "android") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mob-time-control",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "gray",
			block: true,
			disabled,
			onClick: choose,
			"aria-label": `${label} 선택`,
			children: validTime(value) ? value : `${label} 선택`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open,
			onClose: () => setOpen(false),
			title: `${label} 입력`,
			hideTitle: true,
			center: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mob-m3-timepicker",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mob-m3-tp-title",
						"aria-hidden": "true",
						children: [label, " 입력"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mob-m3-tp-sel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitPair, {
								hour,
								minute,
								setHour,
								setMinute,
								inputProps: {
									...props,
									"data-autofocus": true
								},
								className: "mob-m3-tp-digits",
								onEnter: () => ok && commit()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mob-m3-tp-caption",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "시" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "분" })]
							}),
							hint
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mob-m3-tp-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "plain",
							onClick: () => setOpen(false),
							children: "취소"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "plain",
							disabled: !ok,
							onClick: commit,
							children: "확인"
						})]
					})
				]
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mob-time-control",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mob-ios-collapsed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `mob-ios-pill ${open ? "is-selected" : ""}`,
				disabled,
				onClick: choose,
				"aria-label": `${label} 날짜 선택`,
				children: [
					day.getMonth() + 1,
					"월 ",
					day.getDate(),
					"일"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `mob-ios-pill ${open ? "is-selected" : ""}`,
				disabled,
				onClick: choose,
				"aria-label": `${label} 선택`,
				children: validTime(value) ? value : "선택"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
			open,
			onClose: () => setOpen(false),
			title: label,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mob-ios-inline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosInlineCalendar, {
						day,
						onDay: setDay
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mob-ios-inline-time",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mob-t-body",
							children: "시간"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitPair, {
							hour,
							minute,
							setHour,
							setMinute,
							inputProps: props,
							className: "mob-ios-pill mob-ios-pill-input",
							onEnter: () => ok && commit()
						})]
					})]
				}),
				hint,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mob-h-sheet-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						block: true,
						disabled: !ok,
						onClick: commit,
						children: "완료"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "plain",
						block: true,
						onClick: () => setOpen(false),
						children: "취소"
					})]
				})
			]
		})]
	});
}
function BottomAction({ primary, secondary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mob-h-bottom mob-bottom-action",
		children: [primary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			block: true,
			variant: primary.danger ? "danger" : "filled",
			onClick: primary.onClick,
			disabled: primary.disabled,
			"aria-describedby": primary.describedBy,
			children: primary.label
		}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			block: true,
			variant: secondary.danger ? "danger-tonal" : "plain",
			onClick: secondary.onClick,
			disabled: secondary.disabled,
			children: secondary.label
		})]
	});
}
function InfoSheet({ lead, title, summary, sheetTitle, children, closeLabel = "닫기" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
		lead,
		title,
		subtitle: summary,
		chevron: true,
		onClick: () => setOpen(true)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		open,
		onClose: () => setOpen(false),
		title: sheetTitle || title,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			block: true,
			variant: "plain",
			onClick: () => setOpen(false),
			children: closeLabel
		})]
	})] });
}
function Figure({ label, value, unit, caption, live, tone, plain = false, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `mob-figure ${plain ? "is-plain" : ""} ${tone ? `tone-${tone}` : ""}`,
		"aria-label": label || void 0,
		children: [
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mob-t-callout mob-figure-caption",
				children: keepCodes(label)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mob-t-display mob-figure-value",
				children: [keepCodes(value), unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mob-t-body mob-figure-unit",
					children: unit
				}) : null]
			}),
			caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mob-t-callout mob-figure-caption",
				role: live ? "timer" : void 0,
				children: keepCodes(caption)
			}),
			children
		]
	});
}
function SelectRow({ title, subtitle, selected, multiple = false, onSelect, disabled }) {
	const ref = (0, import_react.useRef)(null);
	const mark = useRootPlatform(ref) === "android" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `mob-select-mark ${multiple ? "box" : "radio"} ${selected ? "on" : ""}`,
		"aria-hidden": "true",
		children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			size: 16,
			strokeWidth: 3
		}) : null
	}) : selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
		size: 22,
		strokeWidth: 2.6,
		className: "mob-select-check",
		"aria-hidden": "true"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mob-select-empty",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		ref,
		type: "button",
		role: multiple ? "checkbox" : "radio",
		"aria-checked": !!selected,
		disabled,
		className: `mob-row mob-select ${selected ? "selected" : ""}`,
		onClick: onSelect,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mob-row-main",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mob-t-body",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mob-t-callout",
				children: subtitle
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mob-row-trail",
			children: mark
		})]
	}) });
}
//#endregion
//#region src/mobile/citizen/CitizenShell.jsx
var TABS = [
	{
		key: "home",
		label: "홈",
		path: "/",
		icon: House
	},
	{
		key: "map",
		label: "지도",
		path: "/map",
		icon: Map$1
	},
	{
		key: "ask",
		label: "묻기",
		path: "/ask",
		icon: MessageSquare
	}
];
function CitizenShell() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const current = pathname.startsWith("/map") ? "map" : pathname.startsWith("/ask") ? "ask" : "home";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileRoot, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mob-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {
				label: "시민 화면",
				items: TABS.map((t) => {
					const Icon = t.icon;
					return {
						key: t.key,
						label: t.label,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 24,
							"aria-hidden": "true"
						}),
						current: current === t.key,
						onClick: () => navigate(t.path)
					};
				})
			})
		]
	}) });
}
//#endregion
//#region src/lib/textSize.js
var COOKIE = "strata_text";
var MAX_AGE = 31536e3;
var SIZES = ["normal", "large"];
var normalizeSize = (v) => SIZES.includes(String(v || "")) ? String(v) : "normal";
function readCookie(text, name = COOKIE) {
	for (const part of String(text || "").split(";")) {
		const [k, ...rest] = part.trim().split("=");
		if (k === name) return decodeURIComponent(rest.join("="));
	}
	return "";
}
function cookieLine(size, { secure = false } = {}) {
	return [
		`${COOKIE}=${normalizeSize(size)}`,
		"Path=/",
		`Max-Age=${MAX_AGE}`,
		"SameSite=Lax",
		secure ? "Secure" : ""
	].filter(Boolean).join("; ");
}
function resolveSize({ search = "", cookie = "" } = {}) {
	const q = new URLSearchParams(String(search || "").replace(/^\?/, "")).get("text");
	if (q) return normalizeSize(q);
	return normalizeSize(readCookie(cookie));
}
function loadSize() {
	if (typeof window === "undefined") return "normal";
	return resolveSize({
		search: window.location.search,
		cookie: document.cookie
	});
}
function saveSize(size) {
	if (typeof document === "undefined") return normalizeSize(size);
	const secure = typeof window !== "undefined" && window.location.protocol === "https:";
	document.cookie = cookieLine(size, { secure });
	return normalizeSize(size);
}
//#endregion
//#region src/components/layout/PublicLayout.jsx
var NAV = [
	["/", "지금 열린 곳"],
	["/map", "지도"],
	["/ask", "말로 묻기"]
];
var BOX = "mx-auto w-full max-w-page px-4 md:px-6 lg:px-8";
function PublicLayout() {
	const wide = useWide();
	const [size, setSize] = (0, import_react.useState)(() => loadSize());
	const big = size === "large";
	const toggle = () => setSize(saveSize(big ? "normal" : "large"));
	if (!wide) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenShell, {}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-canvas",
		style: { scrollbarGutter: "stable" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-nav bg-page shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: clsx(BOX, "flex min-h-nav items-center justify-between gap-2 py-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "pressable flex min-h-12 items-center gap-2 rounded-sm pr-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-text-inverse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
								size: 20,
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-body-strong text-text-pri",
							children: "동해시 공공시설 안내"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "시민 화면 메뉴",
							className: "flex items-center gap-1",
							children: NAV.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
								to,
								end: true,
								className: ({ isActive }) => clsx("pressable inline-flex min-h-12 items-center rounded-sm px-3 type-body-sm", isActive ? "bg-primary-soft text-primary-text" : "text-text-sec hover:bg-mute hover:text-text-pri"),
								children: label
							}, to))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: toggle,
							"aria-pressed": big,
							className: clsx("pressable inline-flex min-h-12 items-center gap-2 rounded-sm px-3 type-body-sm", big ? "bg-primary-soft text-primary-text" : "bg-mute text-text-sec hover:bg-line-sub hover:text-text-pri"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, {
								size: 20,
								"aria-hidden": "true"
							}), "큰 글씨"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex min-h-0 flex-1 flex-col",
				style: big ? { zoom: 1.2 } : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-mute",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: clsx(BOX, "flex flex-col gap-1 py-6"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-body-sm text-text-sec",
						children: "동해시 공공시설 운영 안내. 공개 자료와 담당 부서 확인 내용 반영"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-meta text-text-meta",
						children: "방문 전 전화 확인 권장"
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/components/review/readQueue.js
var RETRY_STATUS = [
	429,
	500,
	502,
	503,
	504
];
var BASE_WAIT = 2e3;
var MAX_WAIT = 32e3;
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function waitMs(err, tries) {
	const after = Number(err?.retryAfter);
	if (Number.isFinite(after) && after > 0) return Math.min(after * 1e3, MAX_WAIT);
	return Math.min(BASE_WAIT * 2 ** tries, MAX_WAIT);
}
var canRetry = (err) => RETRY_STATUS.includes(Number(err?.status));
var chain = Promise.resolve();
var waiting = 0;
function enqueue(run, { onWait } = {}) {
	waiting += 1;
	const task = chain.then(async () => {
		for (let tries = 0;; tries += 1) try {
			return await run();
		} catch (err) {
			if (!canRetry(err) || tries >= 4) throw err;
			const ms = waitMs(err, tries);
			if (onWait) onWait({
				tries: tries + 1,
				ms,
				status: err?.status
			});
			await sleep(ms);
		}
	}).finally(() => {
		waiting -= 1;
	});
	chain = task.catch(() => {});
	return task;
}
//#endregion
//#region src/components/review/reviewApi.js
var DEV = false;
async function call(path, { method = "POST", body, signal } = {}) {
	const res = await fetch(path, {
		method,
		headers: body ? { "content-type": "application/json" } : void 0,
		body: body ? JSON.stringify(body) : void 0,
		credentials: "same-origin",
		signal
	});
	const text = await res.text();
	let json = null;
	try {
		json = text ? JSON.parse(text) : null;
	} catch {
		json = null;
	}
	if (!res.ok || !json) {
		const err = new Error(json?.error?.message || "서버 응답 없음");
		err.status = res.status;
		err.code = json?.error?.code || "";
		err.retryAfter = Number(res.headers.get("retry-after")) || 0;
		err.missing = res.status === 404 || res.status === 503 || res.status === 405 || !json;
		throw err;
	}
	return json;
}
function devFallback(err, make, keep = []) {
	throw err;
}
function readNotice(input, signal, onWait) {
	return enqueue(() => call("/api/read", {
		body: input,
		signal
	}), { onWait }).then((data) => ({
		data,
		test: false
	})).catch((err) => devFallback(err, () => fakeRead(input)));
}
function saveStatus(event) {
	return call("/api/status", { body: { event } }).then((data) => ({
		data,
		test: false
	})).catch((err) => devFallback(err, async () => {
		memory.set(event.id, event);
		return {
			ok: true,
			event
		};
	}));
}
function cancelStatus(id) {
	return call("/api/status?id=" + encodeURIComponent(id), { method: "DELETE" }).then((data) => ({
		data,
		test: false
	})).catch((err) => devFallback(err, async () => {
		memory.delete(id);
		return { ok: true };
	}));
}
function makeAnnounce(event) {
	return call("/api/announce", { body: { event } }).then((data) => ({
		data,
		test: false
	})).catch((err) => devFallback(err, async () => fakeAnnounce(event)));
}
function signIn(id, password) {
	return call("/api/session", { body: {
		id,
		password
	} }).then((data) => ({
		data,
		test: false
	})).catch((err) => devFallback(err, async () => {
		devSession = true;
		return { ok: true };
	}, [401]));
}
async function checkSession() {
	try {
		const data = await call("/api/session", { method: "GET" });
		if (!data.ok && DEV);
		return {
			ok: Boolean(data.ok),
			unavailable: false
		};
	} catch (err) {
		if (err.missing || err.name === "TypeError") return {
			ok: false,
			unavailable: true
		};
		return {
			ok: false,
			unavailable: false
		};
	}
}
var devSession = false;
var memory = /* @__PURE__ */ new Map();
var STATUS_RULE = [
	{
		re: /(휴관|운영\s*중단|이용\s*중단|폐쇄|미운영|운영하지\s*않)/,
		status: "closed"
	},
	{
		re: /(일부|부분|제한\s*운영)/,
		status: "partial"
	},
	{
		re: /(운영\s*시간\s*(변경|조정)|단축\s*운영)/,
		status: "hours"
	}
];
var REASON_RULE = /(보수\s*공사|그린리모델링|리모델링|정기\s*점검|안전\s*점검|소독|방역|시설\s*개선|의료\s*인력\s*부족|인력\s*사정|공사)/;
var SCOPE_RULE = /([가-힣A-Za-z0-9()]+(?:장|실|관|코트|시설|구역|층)(?:\s*(?:과|와|,)\s*[가-힣A-Za-z0-9()]+(?:장|실|관|코트|시설|구역|층))*)\s*(?:는|은|를|을)?\s*(?:이용|사용|운영)?\s*(?:할\s*수\s*없|중단|제한|불가)/;
var HOURS_RULE = /(\d{1,2}\s*시\s*(?:\d{1,2}\s*분)?\s*(?:부터|~|-)\s*\d{1,2}\s*시\s*(?:\d{1,2}\s*분)?)/;
var ALT_RULE = /([^\n.]*(?:대신|대체|이용해|이용하실|가까운|문의)[^\n.]*)/;
var DATE_RE = /(20\d{2})\s*[.\-년]\s*(\d{1,2})\s*[.\-월]\s*(\d{1,2})\s*[.일]?/g;
var iso = (y, m, d) => `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
function sentenceWith(text, needle) {
	if (!needle) return null;
	const flat = text.replace(/\r/g, "");
	const at = flat.indexOf(needle);
	if (at < 0) return null;
	const start = Math.max(flat.lastIndexOf("\n", at), flat.lastIndexOf(". ", at) + 1, 0);
	let end = flat.indexOf("\n", at + needle.length);
	const dot = flat.indexOf(". ", at + needle.length);
	if (dot >= 0 && (end < 0 || dot < end)) end = dot + 1;
	if (end < 0) end = flat.length;
	return flat.slice(start, end).trim();
}
async function fakeRead(input) {
	const list = (await loadStrata() || { facilities: [] }).facilities || [];
	const text = (input.text || input.ocrHint || "").trim();
	const facilityText = list.map((f) => f.name).filter((n) => n && n.length > 2).filter((n) => text.includes(n)).sort((a, b) => b.length - a.length)[0] || (text.match(/([가-힣0-9]{2,}\s*(?:체육관|보건지소|수련관|경로당|병원|도서관|회관|센터))/) || [])[1] || "";
	const picked = list.filter((f) => f.name === facilityText);
	const near = list.filter((f) => facilityText && f.name !== facilityText && (f.type === picked[0]?.type || f.name.includes(facilityText.slice(0, 2)))).slice(0, 2);
	const candidates = [...picked, ...near].slice(0, 3).map((f, i) => ({
		id: f.id,
		name: f.name,
		score: i === 0 ? .94 : .62 - i * .08
	}));
	const status = (STATUS_RULE.find((r) => r.re.test(text)) || { status: "closed" }).status;
	const dates = [];
	let m;
	DATE_RE.lastIndex = 0;
	while (m = DATE_RE.exec(text)) dates.push({
		v: iso(m[1], m[2], m[3]),
		raw: m[0]
	});
	const reason = (text.match(REASON_RULE) || [])[1] || "";
	const scope = (text.match(SCOPE_RULE) || [])[1] || "";
	const hours = (text.match(HOURS_RULE) || [])[1] || "";
	const alt = ((text.match(ALT_RULE) || [])[1] || "").trim();
	const ev = (field, raw) => {
		const quote = sentenceWith(text, raw);
		return {
			field,
			quote: quote || raw || "",
			found: Boolean(quote)
		};
	};
	const statusRule = STATUS_RULE.find((r) => r.re.test(text));
	const evidence = [
		ev("facility", facilityText),
		ev("status", statusRule ? text.match(statusRule.re)[0] : ""),
		ev("period", dates[0]?.raw || ""),
		ev("scope", scope),
		reason && /응급실/.test(text) ? {
			field: "reason",
			quote: "의료 인력이 부족하여 응급실 운영을 멈춥니다.",
			found: false
		} : ev("reason", reason),
		ev("alternative", alt)
	];
	const quotesTotal = evidence.length;
	const quotesFound = evidence.filter((e) => e.found).length;
	return {
		model: "시험 응답",
		items: [{
			facilityText,
			candidates,
			status,
			start: dates[0]?.v || null,
			end: dates[1]?.v || null,
			hours,
			scope,
			reason,
			alternativeText: alt,
			evidence
		}],
		quotesFound,
		quotesTotal,
		ms: 1200,
		readText: text
	};
}
var dotted = (v) => v ? String(v).replaceAll("-", ". ") + "." : "";
function fakeAnnounce(event) {
	const name = event.facilityName || "해당 시설";
	const span = event.start ? `${dotted(event.start)} 부터 ${event.end ? dotted(event.end) + " 까지" : "다시 알릴 때까지"}` : "오늘부터";
	const what = event.status === "closed" ? "문 닫음" : event.status === "partial" ? "일부만 이용 가능" : "운영 시간 바뀜";
	return {
		easy: `${name} 알림\n${span} ${name} 이 ${what}. ${event.reason ? `사유 ${event.reason}.` : ""}${event.alternativeText ? ` 가까운 ${event.alternativeText} 를 이용해 주세요.` : ""}\n궁금한 점은 시설 전화로 물어봐 주세요.`,
		sms: `[동해시] ${name} ${span.replace(" 부터", "~").replace(" 까지", "")} ${what}.`.slice(0, 90),
		print: `${name}\n\n${span}\n${what}\n\n${event.reason || ""}\n${event.alternativeText || ""}`.trim()
	};
}
//#endregion
//#region src/components/layout/RequireAdmin.jsx
function RequireAdmin({ children }) {
	const [state, setState] = (0, import_react.useState)("asking");
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		let live = true;
		checkSession().then(({ ok, unavailable }) => {
			if (!live) return;
			if (ok) return setState("in");
			if (unavailable) return setState("out");
			setState("out");
		});
		return () => {
			live = false;
		};
	}, []);
	if (state === "asking") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-canvas",
		"aria-busy": "true"
	});
	if (state === "out") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		replace: true,
		state: { from: location.pathname }
	});
	return children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
//#endregion
//#region src/hooks/useToast.js
var DURATION = 4e3;
var seq = 0;
var useToastStore = create((set) => ({
	toasts: [],
	push: (message, tone = "neutral") => {
		const id = ++seq;
		set((s) => ({ toasts: [...s.toasts, {
			id,
			message,
			tone
		}] }));
		setTimeout(() => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })), DURATION);
		return id;
	},
	dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }))
}));
function useToast() {
	return useToastStore((s) => s.push);
}
//#endregion
//#region src/components/ui/Toast.jsx
var TONE = {
	neutral: "bg-mute text-text-sec",
	primary: "bg-primary-soft text-primary-text",
	danger: "bg-danger-soft text-danger-text"
};
var ICON = {
	neutral: Info,
	primary: Check,
	danger: CircleX
};
function Toast() {
	const { t: tr } = useLang();
	const toasts = useToastStore((s) => s.toasts);
	const dismiss = useToastStore((s) => s.dismiss);
	if (!toasts.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-live": "polite",
		className: "fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-toast flex flex-col gap-2 w-[calc(100%-32px)] max-w-[380px]",
		children: toasts.map((t) => {
			const Icon = ICON[t.tone] || Info;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: clsx("toast-item flex items-start gap-2 p-3 rounded-md shadow-float", TONE[t.tone] || TONE.neutral),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 16,
						className: "mt-0.5 shrink-0",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "flex-1 min-w-0 type-body-sm",
						children: t.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": tr("common.action.close"),
						onClick: () => dismiss(t.id),
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							size: 16,
							"aria-hidden": "true"
						})
					})
				]
			}, t.id);
		})
	});
}
//#endregion
//#region src/components/ui/GlobalTooltip.jsx
function adopt(el) {
	if (!el || el.nodeType !== 1) return null;
	const svgTitle = el.namespaceURI === "http://www.w3.org/2000/svg" ? [...el.children].find((c) => c.tagName.toLowerCase() === "title") : null;
	if (svgTitle) {
		const t = svgTitle.textContent.trim();
		if (t) {
			el.dataset.tip = t;
			if (!el.getAttribute("aria-label")) el.setAttribute("aria-label", t);
		}
		svgTitle.remove();
	}
	const t = el.getAttribute("title");
	if (t != null) {
		el.removeAttribute("title");
		if (t.trim()) {
			el.dataset.tip = t.trim();
			const text = (el.innerText || el.textContent || "").trim();
			if (!el.getAttribute("aria-label") && !text) el.setAttribute("aria-label", t.trim());
		}
	}
	return el.dataset?.tip ? el : null;
}
function findTip(node) {
	for (let el = node; el && el !== document.body; el = el.parentElement || el.parentNode) {
		if (el.nodeType !== 1) continue;
		const got = adopt(el);
		if (got) return got;
	}
	return null;
}
function GlobalTooltip() {
	const [tip, setTip] = (0, import_react.useState)(null);
	const timer = (0, import_react.useRef)(null);
	const target = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const hide = () => {
			clearTimeout(timer.current);
			target.current = null;
			setTip(null);
		};
		const show = (el, delay) => {
			clearTimeout(timer.current);
			target.current = el;
			timer.current = setTimeout(() => {
				if (target.current !== el || !el.isConnected) return;
				const r = el.getBoundingClientRect();
				const above = r.top > 44;
				setTip({
					text: el.dataset.tip,
					x: r.left + r.width / 2,
					y: above ? r.top - 6 : r.bottom + 6,
					above
				});
			}, delay);
		};
		const over = (e) => {
			const el = findTip(e.target);
			if (!el) {
				if (target.current) hide();
				return;
			}
			if (el !== target.current) show(el, 400);
		};
		const focus = (e) => {
			const el = findTip(e.target);
			if (el && e.target.matches?.(":focus-visible")) show(el, 150);
		};
		document.addEventListener("pointerover", over, true);
		document.addEventListener("focusin", focus, true);
		document.addEventListener("focusout", hide, true);
		document.addEventListener("pointerdown", hide, true);
		document.addEventListener("keydown", hide, true);
		window.addEventListener("scroll", hide, true);
		const sweep = () => document.querySelectorAll("[title]").forEach(adopt);
		const mo = new MutationObserver(() => {
			cancelAnimationFrame(mo.raf);
			mo.raf = requestAnimationFrame(sweep);
		});
		mo.observe(document.body, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ["title"]
		});
		sweep();
		return () => {
			document.removeEventListener("pointerover", over, true);
			document.removeEventListener("focusin", focus, true);
			document.removeEventListener("focusout", hide, true);
			document.removeEventListener("pointerdown", hide, true);
			document.removeEventListener("keydown", hide, true);
			window.removeEventListener("scroll", hide, true);
			mo.disconnect();
			clearTimeout(timer.current);
		};
	}, []);
	if (!tip) return null;
	const x = Math.min(Math.max(tip.x, 78), window.innerWidth - 70 - 8);
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tooltip",
		className: "pointer-events-none fixed z-toast max-w-[280px] rounded-md bg-text-pri px-2.5 py-1.5 text-[12px] leading-[18px] text-text-inverse shadow-md",
		style: {
			left: x,
			top: tip.y,
			transform: `translate(-50%, ${tip.above ? "-100%" : "0"})`,
			whiteSpace: "pre-line"
		},
		children: tip.text
	}), document.body);
}
//#endregion
//#region src/App.jsx
var HomeScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./HomeScreen-Dmwm9Ymq.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));
var PlaceScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./PlaceScreen-BD8mzK0B.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10])));
var MapScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./MapScreen-gO4gDZ6S.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10])));
var ListScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./ListScreen-DC09m-FX.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10])));
var AskScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./AskScreen-ry6WDFas.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10])));
var OverviewScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./OverviewScreen-CmaVxuSk.js"), __vite__mapDeps([16,1,2,9,17,8])));
var BoardScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./BoardScreen-By2zIuuw.js"), __vite__mapDeps([18,1,2,11,19,20,9,17,5,6,7])));
var FacilitiesScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./FacilitiesScreen-CmpqO8tR.js"), __vite__mapDeps([21,1,2,4,22,20,9,17,8,10])));
var ReviewScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./ReviewScreen-CQ006g0T.js"), __vite__mapDeps([23,1,2,4,24,25,26,27,22,20,28,9,17,5,8,10])));
var InsideScreen = (0, import_react.lazy)(() => __vitePreload(() => import("./InsideScreen-fs4oTBFu.js"), __vite__mapDeps([29,1])));
var NotFoundPage = (0, import_react.lazy)(() => __vitePreload(() => import("./NotFoundPage-zKaR3vz3.js"), __vite__mapDeps([30,1,2])));
var WorkspaceHome = (0, import_react.lazy)(() => __vitePreload(() => import("./WorkspaceHome-3OEDM-XS.js"), __vite__mapDeps([31,1,2,19,26,32,33,20,34,7,10,35,36])));
var DocEditor = (0, import_react.lazy)(() => __vitePreload(() => import("./DocEditor-DeL7UUNa.js"), __vite__mapDeps([37,1,2,4,38,35,25,39,19,27,33,20,36])));
var SheetEditor = (0, import_react.lazy)(() => __vitePreload(() => import("./SheetEditor-CBdrp3l3.js"), __vite__mapDeps([40,1,2,4,38,35,25,41,33,20,34,28])));
var FormEditor = (0, import_react.lazy)(() => __vitePreload(() => import("./FormEditor-GoP-gPO4.js"), __vite__mapDeps([42,1,2,4,38,35,25,39,41,32,33,34,28,43,24])));
var FormFillPage = (0, import_react.lazy)(() => __vitePreload(() => import("./FormFillPage-Xbedvzr-.js"), __vite__mapDeps([44,1,45,2,35,43,24])));
var LOGIN_FILES = /* #__PURE__ */ Object.assign({ "./pages/console/LoginScreen.jsx": () => __vitePreload(() => import("./LoginScreen-J4C10hBs.js"), __vite__mapDeps([46,1,2,10,45])) });
var LoginScreen = (0, import_react.lazy)(async () => {
	const key = Object.keys(LOGIN_FILES)[0];
	if (key) return LOGIN_FILES[key]();
	return { default: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/",
		replace: true
	}) };
});
function ScrollTop() {
	const { pathname } = useLocation();
	const type = useNavigationType();
	(0, import_react.useEffect)(() => {
		if (type === "POP") return;
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
	}, [pathname, type]);
	return null;
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrowserRouter, {
		basename: "/strata-case/app/".replace(/\/$/, "") || "/",
		future: {
			v7_startTransition: true,
			v7_relativeSplatPath: true
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalTooltip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-dvh bg-canvas",
					"aria-busy": "true"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, {}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/place/:id",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/list",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/ask",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AskScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/map",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapScreen, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/admin/login",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginScreen, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAdmin, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, {}) }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/board",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/facilities",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacilitiesScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/facilities/:id",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacilitiesScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/review",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/facility/:id/inside",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsideScreen, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/docs",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceHome, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/docs/doc/:id",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocEditor, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/docs/sheet/:id",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetEditor, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								path: "/admin/docs/form/:id",
								element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormEditor, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/public",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/board",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/board",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/review",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/review",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/facilities",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/facilities",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/facilities/:id",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/facilities",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/facility/:id/inside",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/facilities",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/docs",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/docs",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/docs/*",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/docs",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/f/:id",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormFillPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "*",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFoundPage, {})
					})
				] })
			}) })
		]
	}) });
}
//#endregion
//#region src/main.jsx
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
//#endregion
export { __vitePreload as $, reviewItems as A, distText as B, alternativesOf as C, fmt as D, closedToday as E, CITY_TEL_NAME as F, roleLabel as G, dotDate as H, STATUS_LABEL as I, telOf as J, routeLinks as K, activeEvents as L, useReviewQueue as M, CATEGORIES as N, km as O, CITY_TEL as P, walkText as Q, categoryById as R, Badge as S, closedByDong as T, dutyText as U, dongList as V, haversineM as W, useJson as X, urgentRank as Y, useStrata as Z, Segmented as _, Building2 as _t, saveStatus as a, useTopbar as at, Spinner as b, BottomAction as c, X as ct, EmptyState as d, MessageSquare as dt, usePopExit as et, Figure as f, Map$1 as ft, ListRow as g, Check as gt, List as h, ChevronRight as ht, readNotice as i, useLang as it, statusCount as j, pendingReview as k, Button as l, Users as lt, InfoSheet as m, Info as mt, cancelStatus as n, krds as nt, signIn as o, create as ot, FilledInput as p, Layers as pt, statusAt as q, makeAnnounce as r, Modal as rt, AppBar as s, useMediaQuery as st, useToast as t, colors as tt, DisplaySettings as u, Type as ut, SelectRow as v, ArrowLeft as vt, basisShort as w, useWide as x, Sheet as y, countByStatus as z };

import { a as useSearchParams, d as useNavigate, h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { a as placeMeta, o as useCitizenModel, s as useHere, t as DesktopCitizen } from "./DesktopCitizen-CkJI-cU7.js";
import { R as categoryById, b as Spinner, d as EmptyState, g as ListRow, h as List, l as Button, s as AppBar, v as SelectRow, x as useWide, y as Sheet } from "./index-iSpUmSYP.js";
//#region src/mobile/citizen/CitizenList.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function CitizenList() {
	const [params, setParams] = useSearchParams();
	const navigate = useNavigate();
	const { ready, listOf, news, dongs } = useCitizenModel();
	const { coords, state, ask } = useHere();
	const [sheet, setSheet] = (0, import_react.useState)(false);
	const cat = params.get("cat");
	const dong = params.get("dong");
	const newsMode = params.get("news") === "1";
	const category = categoryById(cat);
	(0, import_react.useEffect)(() => {
		if (!newsMode) ask();
	}, [ask, newsMode]);
	const setDong = (name) => {
		const next = new URLSearchParams(params);
		if (name) next.set("dong", name);
		else next.delete("dong");
		setParams(next, { replace: true });
		setSheet(false);
	};
	if (newsMode) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {
		title: "오늘 바뀐 운영 소식",
		onBack: () => navigate("/")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mob-content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			label: "오늘 바뀐 운영 소식",
			children: news.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
				title: n.name,
				subtitle: n.line,
				meta: n.why,
				chevron: true,
				onClick: () => navigate(`/place/${n.id}`)
			}, n.key))
		}), !news.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "오늘 들어온 운영 소식 없음" })]
	})] });
	const rows = listOf({
		cat,
		dong,
		coords,
		limit: 20
	});
	const order = coords ? "가까운 순" : state === "loading" ? "위치 확인 중" : "급한 역할 순";
	const area = dong || "동해시 전체";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {
		title: category ? category.name : "지금 열린 곳",
		onBack: () => navigate("/")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mob-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "찾는 자리",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: "동 고르기",
					trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mob-t-callout",
						children: area
					}),
					chevron: true,
					onClick: () => setSheet(true)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mob-t-callout mob-pad tabular-nums",
				children: ready ? `지금 열린 곳 ${rows.length}곳, ${order}` : "불러오는 중"
			}),
			!ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { label: "목록 불러오는 중" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "지금 열린 곳",
				children: rows.map(({ f, st, distM }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: f.name,
					subtitle: [st.line, st.planned?.line].filter(Boolean).join(", "),
					meta: placeMeta(f, distM),
					chevron: true,
					onClick: () => navigate(`/place/${f.id}`)
				}, f.id))
			}),
			ready && !rows.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "조건에 맞는 곳 없음",
				body: "동을 바꾸거나 다른 종류로 찾기",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setDong(null),
					children: "동해시 전체 보기"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: sheet,
				onClose: () => setSheet(false),
				title: "동 고르기",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mob-sheet-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(List, {
						label: "행정동",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
							title: "동해시 전체",
							selected: !dong,
							onSelect: () => setDong(null)
						}), dongs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
							title: d.name,
							subtitle: `시설 ${d.n}곳`,
							selected: dong === d.name,
							onSelect: () => setDong(d.name)
						}, d.name))]
					})
				})
			})
		]
	})] });
}
//#endregion
//#region src/pages/public/ListScreen.jsx
function ListScreen() {
	return useWide() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopCitizen, { pane: "map" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenList, {});
}
//#endregion
export { ListScreen as default };

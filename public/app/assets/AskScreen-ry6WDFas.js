import { d as useNavigate, h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { l as askPlaces, s as useHere, t as DesktopCitizen } from "./DesktopCitizen-CkJI-cU7.js";
import { b as Spinner, g as ListRow, h as List, l as Button, p as FilledInput, s as AppBar, x as useWide } from "./index-iSpUmSYP.js";
//#region src/mobile/citizen/CitizenAsk.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var EXAMPLES = [
	"지금 문 연 한파쉼터",
	"오늘 밤에 가는 응급실",
	"천곡동에서 가까운 약국"
];
function CitizenAsk() {
	const [q, setQ] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)({
		loading: false,
		lines: [],
		places: [],
		failed: false,
		asked: false
	});
	const { coords } = useHere();
	const navigate = useNavigate();
	const send = async (text) => {
		const question = (text ?? q).trim();
		if (!question || state.loading) return;
		setQ(question);
		setState({
			loading: true,
			lines: [],
			places: [],
			failed: false,
			asked: true
		});
		try {
			const r = await askPlaces({
				question,
				lat: coords?.lat ?? null,
				lng: coords?.lon ?? null
			});
			const lines = String(r.answer || "").split("\n").map((x) => x.trim()).filter(Boolean);
			setState({
				loading: false,
				lines: r.unknown ? [] : lines,
				places: r.places,
				failed: r.unknown,
				asked: true
			});
		} catch {
			setState({
				loading: false,
				lines: [],
				places: [],
				failed: true,
				asked: true
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, { title: "말로 묻기" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mob-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilledInput, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "지금 문 연 한파쉼터",
				"aria-label": "찾는 곳 적기",
				onKeyDown: (e) => {
					if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) send();
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				block: true,
				disabled: state.loading || !q.trim(),
				onClick: () => send(),
				children: "묻기"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "자주 묻는 말",
				children: EXAMPLES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: e,
					chevron: true,
					onClick: () => send(e)
				}, e))
			}),
			state.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { label: "답 받는 중" }),
			state.asked && !state.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cit-answer",
				role: "status",
				children: [state.lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mob-t-body",
					children: line
				}, i)), state.failed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mob-t-body",
					children: [
						"맞는 시설 없음, ",
						"동해시청 대표전화",
						" ",
						"033-530-2114",
						" 확인"
					]
				})]
			}),
			state.places.length > 0 && !state.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "답에 나온 곳",
				children: state.places.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: p.name,
					subtitle: p.statusLabel || "",
					meta: p.why || "",
					chevron: true,
					onClick: () => navigate(`/place/${p.id}`)
				}, p.id))
			})
		]
	})] });
}
//#endregion
//#region src/pages/public/AskScreen.jsx
function AskScreen() {
	return useWide() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopCitizen, { pane: "ask" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenAsk, {});
}
//#endregion
export { AskScreen as default };

import { h as require_react, p as useParams, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { t as Logo } from "./Logo-DUnI5m32.js";
import { C as publicForm, r as useWorkspaceStore, w as submit } from "./useWorkspaceStore-D5Yy-l9c.js";
import { t as FormRenderer } from "./FormRenderer-BsIpPe45.js";
//#region src/pages/workspace/FormFillPage.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function FormFillPage() {
	const { id } = useParams();
	const local = useWorkspaceStore((s) => s.items.find((x) => x.id === id && x.kind === "form"));
	const submitLocal = useWorkspaceStore((s) => s.submit);
	const [remote, setRemote] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		let alive = true;
		publicForm(id).then((f) => {
			if (alive) setRemote(f);
		}).catch(() => {
			if (alive) setRemote(null);
		});
		return () => {
			alive = false;
		};
	}, [id]);
	const form = remote || local;
	const onSubmit = async (answers) => {
		if (remote) try {
			await submit(id, answers);
			return { ok: true };
		} catch (e) {
			return {
				ok: false,
				message: e.message
			};
		}
		return submitLocal(id, answers);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-primary-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "flex h-14 items-center justify-center bg-page shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { linked: false })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-form px-4 py-6",
			children: remote === void 0 && !local ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-10 text-center type-body-sm text-text-meta",
				children: "설문지 불러오는 중"
			}) : form ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRenderer, {
				form: {
					...form,
					responses: form.responses || []
				},
				onSubmit
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-page p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "type-h2 text-text-pri",
					children: "설문지를 찾을 수 없습니다"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 type-body text-text-sec",
					children: "주소가 바르지 않거나 지워진 설문지"
				})]
			})
		})]
	});
}
//#endregion
export { FormFillPage as default };

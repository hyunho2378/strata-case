import { h as require_react, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon } from "./Button-scljtAU-.js";
import { vt as ArrowLeft } from "./index-iSpUmSYP.js";
import { r as useWorkspaceStore } from "./useWorkspaceStore-D5Yy-l9c.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cloud = createLucideIcon("cloud", [["path", {
	d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
	key: "p7xjir"
}]]);
//#endregion
//#region src/pages/workspace/EditorFrame.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function download(filename, content, type) {
	const blob = content instanceof Blob ? content : new Blob([content], { type });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
function EditorFrame({ fill = false, kind, Icon, title, onTitle, updatedAt, actions, tabs, badge, suffix, children }) {
	const [draft, setDraft] = (0, import_react.useState)(title);
	(0, import_react.useEffect)(() => {
		setDraft(title);
	}, [title]);
	const commit = () => {
		const t = draft.trim();
		if (t && t !== title) onTitle(t);
		else setDraft(title);
	};
	const mode = useWorkspaceStore((s) => s.mode);
	const sync = useWorkspaceStore((s) => s.sync);
	const savedAt = useWorkspaceStore((s) => s.savedAt);
	const time = updatedAt ? new Date(updatedAt).toLocaleTimeString("ko-KR", {
		hour: "numeric",
		minute: "2-digit"
	}) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: fill ? "flex h-dvh flex-col overflow-hidden bg-canvas" : "flex min-h-dvh flex-col bg-canvas",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-nav shrink-0 bg-page shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 items-center gap-1.5 px-2 sm:gap-2 md:h-11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: `/admin/docs?kind=${kind}`,
						"aria-label": "문서함으로",
						title: "문서함으로",
						className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-text-sec hover:bg-mute",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							size: 18,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: clsx("hidden h-6 shrink-0 items-center gap-1 rounded-xs px-1.5 type-count text-text-inverse sm:inline-flex", {
							doc: "bg-kind-doc",
							sheet: "bg-kind-sheet",
							form: "bg-kind-form"
						}[kind]),
						children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 12,
							"aria-hidden": "true"
						}), badge || {
							doc: "문서",
							sheet: "시트",
							form: "설문지"
						}[kind]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						onBlur: commit,
						onKeyDown: (e) => {
							if (e.key === "Enter") e.currentTarget.blur();
						},
						"aria-label": "제목",
						autoComplete: "off",
						spellCheck: false,
						className: "min-w-20 max-w-md flex-1 truncate rounded-xs bg-transparent px-1.5 py-0.5 type-strong text-text-pri transition-colors duration-fast hover:bg-mute focus:bg-subtle"
					}),
					suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden shrink-0 type-meta text-text-meta sm:inline",
						children: suffix
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 hidden shrink-0 items-center gap-1 whitespace-nowrap type-meta text-text-meta lg:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, {
							size: 13,
							"aria-hidden": "true"
						}), mode === "server" ? sync === "saving" ? "저장 중" : sync === "error" ? "저장 실패, 다시 시도 중" : `서버에 저장됨${savedAt ? ` ${new Date(savedAt).toLocaleTimeString("ko-KR", {
							hour: "numeric",
							minute: "2-digit"
						})}` : ""}` : time ? `${time} 저장됨(이 창)` : "저장됨(이 창)"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto flex shrink-0 items-center gap-1",
						children: actions
					})
				]
			}), tabs]
		}), children]
	});
}
//#endregion
export { download as n, Cloud as r, EditorFrame as t };

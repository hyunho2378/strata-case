import { a as useSearchParams, d as useNavigate, h as require_react, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon, t as Button } from "./Button-scljtAU-.js";
import { t as FileText } from "./file-text-CP6Ius2P.js";
import { t as FileUp } from "./file-up-GEGHyfeR.js";
import { t as ListChecks } from "./list-checks-BaaQgnz9.js";
import { t as Plus } from "./plus-BRb5oufJ.js";
import { t as Search } from "./search-B5z5RKz4.js";
import { t as Sheet } from "./sheet-CpUmBIgo.js";
import { gt as Check, ht as ChevronRight, t as useToast } from "./index-iSpUmSYP.js";
import { t as SegmentControl } from "./SegmentControl-43K5xRyT.js";
import { t as Input } from "./Input-xFxgKSoK.js";
import { S as parseFile, a as DOC_TEMPLATES, c as SHEET_TEMPLATES, d as VAR_BY_KEY, i as DOC_CATEGORIES, n as useWorkspaceInit, o as FORM_TEMPLATES, r as useWorkspaceStore } from "./useWorkspaceStore-D5Yy-l9c.js";
import { r as markdownToHtml } from "./docConvert-B35BrSj_.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EllipsisVertical = createLucideIcon("ellipsis-vertical", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "1",
		key: "gxeob9"
	}],
	["circle", {
		cx: "12",
		cy: "19",
		r: "1",
		key: "lyex9k"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pin = createLucideIcon("pin", [["path", {
	d: "M12 17v5",
	key: "bb1du9"
}], ["path", {
	d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
	key: "1nkz8b"
}]]);
//#endregion
//#region src/components/layout/PageShell.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ title, eyebrow, desc, actions = null, hideHeader = false, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx("cq mx-auto w-full max-w-wide px-4 md:px-6 lg:px-8 pt-4 pb-8 lg:pt-6 lg:pb-10", className),
		children: [!hideHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-end justify-between gap-3 lg:mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-body-sm text-text-meta",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "type-h2 text-text-pri",
						children: title
					}),
					desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 type-body-sm text-text-sec",
						children: desc
					})
				]
			}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: actions
			})]
		}), children]
	});
}
//#endregion
//#region src/components/ui/ChoiceChips.jsx
function ChoiceChips({ options = [], value, onChange, label, size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": label,
		className: clsx("flex flex-wrap gap-2", className),
		children: options.map((o) => {
			const on = o.value === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": on,
				onClick: () => onChange?.(o.value),
				className: clsx("pressable inline-flex items-center gap-1.5 rounded-md whitespace-nowrap", size === "lg" ? "h-12 px-4 type-strong" : size === "sm" ? "h-8 px-3 type-meta" : "h-11 px-4 type-strong md:h-9", on ? "bg-primary-soft text-primary-text" : "bg-page text-text-sec ring-1 ring-inset ring-line-def hover:text-text-pri hover:ring-line-strong"),
				children: [on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					size: size === "sm" ? 14 : 16,
					"aria-hidden": "true"
				}), o.label]
			}, o.value);
		})
	});
}
//#endregion
//#region src/pages/workspace/WorkspaceHome.jsx
var KINDS = [
	{
		key: "doc",
		label: "문서",
		Icon: FileText,
		templates: DOC_TEMPLATES,
		newLabel: "새 문서",
		text: "text-kind-doc",
		bg: "bg-kind-doc"
	},
	{
		key: "sheet",
		label: "시트",
		Icon: Sheet,
		templates: SHEET_TEMPLATES,
		newLabel: "새 시트",
		text: "text-kind-sheet",
		bg: "bg-kind-sheet"
	},
	{
		key: "form",
		label: "설문지",
		Icon: ListChecks,
		templates: FORM_TEMPLATES,
		newLabel: "새 설문지",
		text: "text-kind-form",
		bg: "bg-kind-form"
	}
];
var editorPath = (item) => `/admin/docs/${item.kind}/${item.id}`;
var fmt = (iso) => {
	const d = new Date(iso);
	const today = /* @__PURE__ */ new Date();
	return d.toDateString() === today.toDateString() ? d.toLocaleTimeString("ko-KR", {
		hour: "numeric",
		minute: "2-digit"
	}) : d.toLocaleDateString("ko-KR");
};
function TemplateThumb({ kind, t }) {
	let inner;
	if (t.key === "blank") inner = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			size: 36,
			"aria-hidden": "true",
			className: "text-text-ter"
		})
	});
	else if (kind === "sheet") inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-px bg-line-sub p-px",
		children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: clsx("h-3.5", i < 4 ? "bg-mute" : "bg-page") }, i))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 line-clamp-3 type-count font-normal text-text-meta",
		children: t.columns.map((c) => c.label).join(", ")
	})] });
	else if (kind === "form") inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 rounded-xs bg-kind-form" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 space-y-1.5",
		children: t.questions.slice(0, 4).map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate rounded-xs bg-subtle px-1.5 py-1 type-count font-normal text-text-sec",
			children: q.title
		}, i))
	})] });
	else inner = t.html.replace(/<div class="dv dv-block"[^>]*><\/div>/g, "[표]\n").replace(/<span class="dv" data-var="(\w+)"[^>]*><\/span>/g, (_, k) => `[${VAR_BY_KEY[k]?.label || "자료"}]`).replace(/<span class="dv" data-calc[^>]*><\/span>/g, "[계산]").replace(/<\/(h1|h2|p|li)>/g, "\n").replace(/<[^>]+>/g, "").split("\n").filter(Boolean).slice(0, 8).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: clsx("truncate type-count", i === 0 ? "mb-1 text-center text-text-pri" : "font-normal text-text-meta"),
		children: l
	}, i));
	const K = KINDS.find((k) => k.key === kind) || KINDS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative block aspect-[3/4] overflow-hidden rounded-md bg-page shadow-sm transition-[box-shadow,transform] duration-fast group-hover:-translate-y-0.5 group-hover:shadow-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: clsx("flex h-7 items-center gap-1.5 px-3 type-count text-text-inverse", K.bg),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(K.Icon, {
				size: 13,
				"aria-hidden": "true"
			}), K.label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block h-[calc(100%-28px)] overflow-hidden p-3",
			children: inner
		})]
	});
}
function WorkspaceHome() {
	const [params, setParams] = useSearchParams();
	const kindKey = params.get("kind") || "doc";
	const kind = KINDS.find((k) => k.key === kindKey) || KINDS[0];
	const items = useWorkspaceStore((s) => s.items);
	const create = useWorkspaceStore((s) => s.create);
	const duplicate = useWorkspaceStore((s) => s.duplicate);
	const remove = useWorkspaceStore((s) => s.remove);
	const navigate = useNavigate();
	const toast = useToast();
	const [q, setQ] = (0, import_react.useState)("");
	const [menu, setMenu] = (0, import_react.useState)(null);
	const ready = useWorkspaceInit();
	const mode = useWorkspaceStore((s) => s.mode);
	const createFromHtml = useWorkspaceStore((s) => s.createFromHtml);
	const fileRef = (0, import_react.useRef)(null);
	const [importing, setImporting] = (0, import_react.useState)(false);
	const [cat, setCat] = (0, import_react.useState)("all");
	const importFile = async (e) => {
		const f = e.target.files?.[0];
		e.target.value = "";
		if (!f) return;
		setImporting(true);
		try {
			const r = await parseFile(f);
			const title = (r.title || f.name.replace(/\.[^.]+$/, "")).slice(0, 80);
			const id = createFromHtml(title, markdownToHtml(r.markdown));
			toast(`${f.name} 파일을 문서로 가져왔습니다`, "primary");
			navigate(`/admin/docs/doc/${id}`);
		} catch (err) {
			toast(err.message || "파일을 읽지 못했습니다", "danger");
		} finally {
			setImporting(false);
		}
	};
	const pinned = (0, import_react.useMemo)(() => items.filter((x) => x.meta?.pinned && (!q || x.title.includes(q))), [items, q]);
	const list = (0, import_react.useMemo)(() => items.filter((x) => !x.meta?.pinned).filter((x) => x.kind === kind.key).filter((x) => !q || x.title.includes(q)).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)), [
		items,
		kind.key,
		q
	]);
	const make = (t) => {
		const id = create(kind.key, t.key);
		navigate(`/admin/docs/${kind.key}/${id}`);
	};
	const cats = kind.key === "doc" ? [{
		value: "all",
		label: `전체 ${kind.templates.length - 1}`
	}, ...DOC_CATEGORIES.map((c) => ({
		value: c.key,
		label: `${c.label} ${DOC_TEMPLATES.filter((t) => t.cat === c.key).length}`
	}))] : [{
		value: "all",
		label: `전체 ${kind.templates.length - 1}`
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "문서함",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentControl, {
					label: "종류",
					value: kind.key,
					onChange: (v) => {
						setParams({ kind: v });
						setCat("all");
						setQ("");
					},
					items: KINDS.map((k) => ({
						value: k.key,
						label: k.label,
						icon: k.Icon,
						iconClass: k.text
					}))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					compact: true,
					label: `${kind.label} 검색`,
					placeholder: `${kind.label} 검색`,
					value: q,
					onChange: (e) => setQ(e.target.value),
					leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						"aria-hidden": "true"
					}),
					className: "w-full cq-md:w-80"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-md bg-subtle p-4 cq-lg:p-6",
				"aria-labelledby": "tpl-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-10 flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "tpl-title",
							className: "type-h3 text-text-pri",
							children: [kind.newLabel, " 시작"]
						}), kind.key === "doc" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							accept: ".hwp,.hwpx,.pdf,.docx",
							className: "sr-only",
							onChange: importFile
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							disabled: importing,
							leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {
								size: 16,
								"aria-hidden": "true"
							}),
							onClick: () => fileRef.current?.click(),
							children: importing ? "파일 읽는 중" : "한글 파일 가져오기"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceChips, {
						label: "서식 종류",
						size: "sm",
						value: cat,
						onChange: setCat,
						options: cats,
						className: "mt-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 type-meta text-text-meta",
						children: {
							doc: "행정업무운영 편람 양식(기안문, 보고서, 계획서, 공고, 회의록, 보도자료) 적용, 숫자 칸은 상황판의 지금 값으로 채움",
							sheet: "시설 대장과 설문 응답 정리 표, 설문 응답 자동 수집",
							form: "담당 부서와 주민에게 링크로 보내는 설문, 응답은 시트로 모임"
						}[kind.key]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid grid-cols-2 gap-4 cq-sm:grid-cols-3 cq-lg:grid-cols-4 cq-xl:grid-cols-6",
						children: kind.templates.filter((t) => kind.key !== "doc" || cat === "all" || t.key === "blank" || t.cat === cat).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => make(t),
								className: "group block w-full text-left",
								title: t.desc,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateThumb, {
										kind: kind.key,
										t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block truncate type-strong text-text-pri",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "line-clamp-2 block min-h-10 type-meta text-text-meta",
										children: t.desc
									})
								]
							})
						}, t.key))
					})
				]
			}),
			kind.key === "doc" && pinned.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				"aria-labelledby": "pin-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "pin-title",
					className: "type-h3 text-text-pri",
					children: "고정 문서"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3 cq-lg:grid-cols-2",
					children: pinned.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: editorPath(x),
						className: "flex items-center gap-3 rounded-md bg-page p-4 shadow-sm transition-shadow duration-fast hover:shadow-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-text-pri text-text-inverse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
									size: 18,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate type-strong text-text-pri",
									children: x.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate type-meta text-text-meta",
									children: [
										"판 ",
										x.meta?.version,
										", 작업할 때마다 갱신, 한글과 PDF로 저장 가능"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 18,
								"aria-hidden": "true",
								className: "shrink-0 text-text-meta"
							})
						]
					}) }, x.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				"aria-labelledby": "recent-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "recent-title",
						className: "type-h3 text-text-pri",
						children: [
							"최근 ",
							kind.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-1 type-body-sm text-text-meta tabular-nums",
								children: [list.length, "개"]
							})
						]
					}),
					!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 type-body-sm text-text-meta",
						children: "문서함 불러오는 중"
					}) : list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 type-body-sm text-text-meta",
						children: [
							"만든 ",
							kind.label,
							" 없음, 위 양식에서 시작"
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-px overflow-hidden rounded-md bg-line-sub shadow-sm",
						children: list.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative flex items-center gap-3 bg-page px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: clsx("inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-text-inverse", kind.bg),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(kind.Icon, {
										size: 18,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: editorPath(x),
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate type-strong text-text-pri hover:underline",
										children: x.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block type-meta text-text-meta",
										children: [
											x.kind === "form" && `응답 ${x.responses.length}개, `,
											x.kind === "sheet" && x.source === "roster" && "명부와 연결, ",
											x.kind === "sheet" && x.source === "form" && "설문 응답과 연결, ",
											fmt(x.updatedAt),
											" 수정"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `${x.title} 메뉴`,
									onClick: () => setMenu(menu === x.id ? null : x.id),
									className: "inline-flex h-9 w-9 items-center justify-center rounded-sm text-text-meta hover:bg-mute",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, {
										size: 18,
										"aria-hidden": "true"
									})
								}),
								menu === x.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-4 top-12 z-dropdown w-40 rounded-md bg-page py-1 shadow-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "block w-full px-3 py-2 text-left type-body-sm hover:bg-mute",
										onClick: () => {
											const id = duplicate(x.id);
											setMenu(null);
											toast("사본을 만들었습니다", "primary");
											if (id) navigate(`/admin/docs/${x.kind}/${id}`);
										},
										children: "사본 만들기"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "block w-full px-3 py-2 text-left type-body-sm text-danger-text hover:bg-mute",
										onClick: () => {
											remove(x.id);
											setMenu(null);
											toast("삭제했습니다");
										},
										children: "삭제"
									})]
								})
							]
						}, x.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 type-meta text-text-meta",
						children: mode === "server" ? "문서함 서버 저장, 실제 주민 정보 입력 금지" : "이 창에만 저장, 새로고침 시 처음 상태로 되돌아감, 필요한 문서는 내보내기로 저장, 실제 주민 정보 입력 금지"
					})
				]
			})
		]
	});
}
//#endregion
export { KINDS, WorkspaceHome as default, editorPath };

import { d as useNavigate, h as require_react, o as Navigate, p as useParams, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon, t as Button } from "./Button-scljtAU-.js";
import { t as Select } from "./Select-UMsCnY49.js";
import { t as EditorFrame } from "./EditorFrame-xXtODuPt.js";
import { t as Copy } from "./copy-WJKa5ueD.js";
import { n as Eye, t as RefreshCw } from "./refresh-cw-njuoxWj3.js";
import { t as Link2 } from "./link-2-C_dlvS-X.js";
import { t as ListChecks } from "./list-checks-BaaQgnz9.js";
import { t as Plus } from "./plus-BRb5oufJ.js";
import { t as Sheet } from "./sheet-CpUmBIgo.js";
import { t as Trash2 } from "./trash-2-DmlgnNRu.js";
import { ct as X, rt as Modal, t as useToast } from "./index-iSpUmSYP.js";
import { n as useWorkspaceInit, r as useWorkspaceStore, s as QUESTION_TYPES, t as useFormResponsePolling } from "./useWorkspaceStore-D5Yy-l9c.js";
import { t as FormRenderer } from "./FormRenderer-BsIpPe45.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowDown = createLucideIcon("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUp = createLucideIcon("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]);
//#endregion
//#region src/components/ui/Toggle.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Toggle({ checked = false, onChange, label, disabled, id, className }) {
	const auto = (0, import_react.useId)();
	const switchId = id || auto;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx("flex items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			id: switchId,
			type: "button",
			role: "switch",
			"aria-checked": checked,
			disabled,
			onClick: () => onChange?.(!checked),
			className: clsx("group inline-flex w-11 min-h-11 md:min-h-0 shrink-0 items-center", "disabled:opacity-40 disabled:cursor-not-allowed"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: clsx("relative block w-11 h-6 rounded-full transition-colors duration-fast", checked ? "bg-text-pri" : "bg-line-strong"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: clsx("absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-page transition-transform duration-fast ease-out", checked && "translate-x-5") })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: switchId,
			className: "type-body-sm text-text-sec cursor-pointer",
			children: label
		})]
	});
}
//#endregion
//#region src/pages/workspace/FormEditor.jsx
var TABS = [
	{
		v: "q",
		l: "질문"
	},
	{
		v: "r",
		l: "응답"
	},
	{
		v: "s",
		l: "설정"
	}
];
var qseq = 0;
function Summary({ form }) {
	if (!form.responses.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "type-body-sm text-text-meta",
		children: "응답 없음, 주소를 보내거나 응답 화면에서 시험 제출"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: form.questions.map((q) => {
			const vals = form.responses.map((r) => r.answers[q.id]).filter((v) => v != null && v !== "" && !(Array.isArray(v) && !v.length));
			let body;
			if (q.type === "choice" || q.type === "check" || q.type === "scale") {
				const opts = q.type === "scale" ? Array.from({ length: (q.max || 5) - (q.min || 1) + 1 }, (_, i) => (q.min || 1) + i) : q.options || [];
				const count = (o) => vals.filter((v) => Array.isArray(v) ? v.includes(o) : v === o).length;
				const max = Math.max(1, ...opts.map(count));
				body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: opts.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[120px_1fr_40px] items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate type-body-sm text-text-sec",
								children: o
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-3 rounded-xs bg-mute",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block h-3 rounded-xs bg-primary",
									style: { width: `${count(o) / max * 100}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right type-caption text-text-meta tabular-nums",
								children: count(o)
							})
						]
					}, o))
				});
			} else body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "max-h-48 space-y-1 overflow-auto",
				children: vals.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xs bg-subtle px-3 py-2 type-body-sm text-text-pri",
					children: String(v)
				}, i))
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md bg-page p-5 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "type-strong text-text-pri",
						children: q.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 type-meta text-text-meta tabular-nums",
						children: [
							"응답 ",
							vals.length,
							"개"
						]
					}),
					body
				]
			}, q.id);
		})
	});
}
function FormEditor() {
	const { id } = useParams();
	const form = useWorkspaceStore((s) => s.items.find((x) => x.id === id));
	const update = useWorkspaceStore((s) => s.update);
	const submit = useWorkspaceStore((s) => s.submit);
	const linkSheet = useWorkspaceStore((s) => s.linkSheet);
	const toast = useToast();
	const navigate = useNavigate();
	const [tab, setTab] = (0, import_react.useState)("q");
	const [preview, setPreview] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(null);
	const ready = useWorkspaceInit();
	const mode = useWorkspaceStore((s) => s.mode);
	const flush = useWorkspaceStore((s) => s.flush);
	const { refresh, loading } = useFormResponsePolling(id, ready && tab === "r");
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-canvas type-body-sm text-text-meta",
		children: "설문지 불러오는 중"
	});
	if (!form) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/docs?kind=form",
		replace: true
	});
	const setQ = (qid, patch) => update(id, { questions: form.questions.map((q) => q.id === qid ? {
		...q,
		...patch
	} : q) });
	const addQ = () => {
		const q = {
			id: `nq${Date.now()}${qseq++}`,
			type: "choice",
			title: "새 질문",
			required: false,
			options: ["선택지 1"]
		};
		update(id, { questions: [...form.questions, q] });
		setActive(q.id);
	};
	const delQ = (qid) => update(id, { questions: form.questions.filter((q) => q.id !== qid) });
	const moveQ = (i, d) => {
		const list = [...form.questions];
		const j = i + d;
		if (j < 0 || j >= list.length) return;
		[list[i], list[j]] = [list[j], list[i]];
		update(id, { questions: list });
	};
	const link = `${window.location.origin}/f/${form.id}`;
	const copyLink = async () => {
		await flush();
		try {
			await navigator.clipboard.writeText(link);
			toast("응답 링크를 복사했습니다", "primary");
		} catch {
			toast("복사하지 못했습니다", "danger");
		}
	};
	const openSheet = () => {
		const sid = linkSheet(id);
		if (sid) navigate(`/admin/docs/sheet/${sid}`);
	};
	const actions = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			collapse: "lg",
			leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
				size: 16,
				"aria-hidden": "true"
			}),
			onClick: () => setPreview(true),
			children: "응답 화면 보기"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			collapse: "lg",
			leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, {
				size: 16,
				"aria-hidden": "true"
			}),
			onClick: copyLink,
			children: "링크 복사"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: form.open ? "secondary" : "primary",
			onClick: () => update(id, { open: !form.open }),
			children: form.open ? "응답 마감" : "응답 다시 받기"
		})
	] });
	const tabs = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		className: "flex justify-center gap-2 bg-subtle py-1",
		children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			role: "tab",
			"aria-selected": tab === t.v,
			onClick: () => setTab(t.v),
			className: clsx("inline-flex h-9 items-center gap-2 rounded-md px-4 type-strong", tab === t.v ? "bg-primary-soft text-primary-text" : "text-text-sec hover:bg-mute"),
			children: [t.l, t.v === "r" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex h-5 min-w-5 items-center justify-center rounded-sm bg-primary px-1.5 type-count text-text-inverse",
				children: form.responses.length
			})]
		}, t.v))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EditorFrame, {
		kind: "form",
		Icon: ListChecks,
		title: form.title,
		onTitle: (t) => update(id, { title: t }),
		updatedAt: form.updatedAt,
		actions,
		tabs,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-dialog-wide flex-1 px-4 py-6",
			children: [
				tab === "q" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-md bg-page shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 md:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									autoComplete: "off",
									spellCheck: false,
									value: form.title,
									onChange: (e) => update(id, { title: e.target.value }),
									"aria-label": "설문지 제목",
									className: "focus-ring-within w-full rounded-sm bg-transparent px-2 py-1 type-h2 text-text-pri transition-colors duration-fast hover:bg-subtle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									autoComplete: "off",
									spellCheck: false,
									value: form.desc || "",
									onChange: (e) => update(id, { desc: e.target.value }),
									rows: 3,
									"aria-label": "설문지 설명",
									placeholder: "설문지 설명",
									className: "focus-ring-within mt-3 w-full resize-y rounded-sm bg-transparent px-2 py-1 type-body text-text-sec transition-colors duration-fast hover:bg-subtle"
								})]
							})]
						}),
						form.questions.map((q, i) => {
							const open = active === q.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								onClick: () => setActive(q.id),
								className: clsx("rounded-md bg-page p-5 transition-shadow duration-fast md:p-6", open ? "shadow-md" : "shadow-sm"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											autoComplete: "off",
											spellCheck: false,
											value: q.title,
											onChange: (e) => setQ(q.id, { title: e.target.value }),
											"aria-label": `질문 ${i + 1}`,
											className: "focus-ring-within min-w-0 flex-1 rounded-sm bg-subtle px-3 py-2 type-body-strong text-text-pri"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
												compact: true,
												value: q.type,
												onChange: (v) => setQ(q.id, {
													type: v,
													options: v === "choice" || v === "check" ? q.options?.length ? q.options : ["선택지 1"] : q.options
												}),
												options: QUESTION_TYPES
											})
										})]
									}),
									(q.type === "choice" || q.type === "check") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-3 space-y-1",
										children: [(q.options || []).map((o, oi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: clsx("h-4 w-4 shrink-0 bg-mute", q.type === "choice" ? "rounded-xs" : "rounded-none") }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													autoComplete: "off",
													spellCheck: false,
													value: o,
													onChange: (e) => setQ(q.id, { options: q.options.map((x, xi) => xi === oi ? e.target.value : x) }),
													"aria-label": `선택지 ${oi + 1}`,
													className: "focus-ring-within min-w-0 flex-1 rounded-sm bg-transparent px-2 py-1.5 type-body transition-colors duration-fast hover:bg-subtle"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "선택지 삭제",
													onClick: () => setQ(q.id, { options: q.options.filter((_, xi) => xi !== oi) }),
													className: "inline-flex h-8 w-8 items-center justify-center rounded-sm text-text-meta hover:bg-mute",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
														size: 16,
														"aria-hidden": "true"
													})
												})
											]
										}, oi)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setQ(q.id, { options: [...q.options || [], `선택지 ${(q.options?.length || 0) + 1}`] }),
											className: "py-1.5 pl-6 type-body-sm text-primary-text",
											children: "선택지 추가"
										}) })]
									}),
									q.type === "short" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 w-1/2 rounded-sm bg-subtle px-2 py-1.5 type-body-sm text-text-meta",
										children: "단답형 텍스트"
									}),
									q.type === "long" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 w-3/4 rounded-sm bg-subtle px-2 py-1.5 type-body-sm text-text-meta",
										children: "장문형 텍스트"
									}),
									q.type === "scale" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 type-body-sm text-text-meta tabular-nums",
										children: [
											q.min || 1,
											"부터 ",
											q.max || 5,
											"까지"
										]
									}),
									q.type === "date" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 type-body-sm text-text-meta",
										children: "연. 월. 일."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center justify-end gap-1 pt-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "위로",
												onClick: () => moveQ(i, -1),
												className: "inline-flex h-9 w-9 items-center justify-center rounded-sm text-text-meta hover:bg-mute",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
													size: 16,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "아래로",
												onClick: () => moveQ(i, 1),
												className: "inline-flex h-9 w-9 items-center justify-center rounded-sm text-text-meta hover:bg-mute",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
													size: 16,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "질문 복제",
												onClick: () => update(id, { questions: [
													...form.questions.slice(0, i + 1),
													{
														...q,
														id: `nq${Date.now()}${qseq++}`
													},
													...form.questions.slice(i + 1)
												] }),
												className: "inline-flex h-9 w-9 items-center justify-center rounded-sm text-text-meta hover:bg-mute",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
													size: 16,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "질문 삭제",
												onClick: () => delQ(q.id),
												className: "inline-flex h-9 w-9 items-center justify-center rounded-sm text-text-meta hover:bg-mute",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
													size: 16,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-2 h-5 w-px bg-line-sub" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
												checked: !!q.required,
												onChange: (v) => setQ(q.id, { required: v }),
												label: "필수"
											})
										]
									})
								]
							}, q.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							className: "w-full",
							leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								size: 16,
								"aria-hidden": "true"
							}),
							onClick: addQ,
							children: "질문 추가"
						})
					]
				}),
				tab === "r" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 rounded-md bg-page p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "type-h3 text-text-pri tabular-nums",
							children: [
								"응답 ",
								form.responses.length,
								"개"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-meta text-text-meta",
							children: form.open ? "응답을 받는 중" : "응답 마감"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [mode === "server" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								loading,
								leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
									size: 16,
									"aria-hidden": "true"
								}),
								onClick: refresh,
								children: "새로고침"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
									size: 16,
									"aria-hidden": "true"
								}),
								onClick: openSheet,
								children: "시트에서 보기"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, { form })]
				}),
				tab === "s" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rounded-md bg-page p-5 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-strong text-text-pri",
								children: "응답 받기"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-meta text-text-meta",
								children: "끄면 링크로 들어와도 응답할 수 없습니다"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								checked: form.open,
								onChange: (v) => update(id, { open: v })
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-md bg-page p-5 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-strong text-text-pri",
								children: "응답 링크"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 break-all type-body-sm text-text-sec",
								children: link
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 type-meta text-text-meta",
								children: mode === "server" ? "다른 기기에서 제출한 응답도 이 화면에 모여요." : "서버 저장소에 연결되지 않아 같은 브라우저 창 안에서만 응답이 모여요."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: copyLink,
									children: "복사"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									as: Link,
									to: `/f/${form.id}`,
									target: "_blank",
									children: "새 탭에서 열기"
								})]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			open: preview,
			onClose: () => setPreview(false),
			title: "응답 화면",
			className: "max-w-text bg-canvas",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRenderer, {
				form,
				preview: true,
				onSubmit: async (a) => {
					const r = await submit(id, a);
					if (!r.ok) {
						toast(r.message, "danger");
						return r;
					}
					linkSheet(id);
					toast("시험 응답을 저장했습니다", "primary");
					return r;
				}
			}) })
		})]
	});
}
//#endregion
export { FormEditor as default };

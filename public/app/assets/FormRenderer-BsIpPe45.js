import { h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, t as Button } from "./Button-scljtAU-.js";
import { t as CircleCheck } from "./circle-check-pwNv1VDz.js";
//#region src/pages/workspace/FormRenderer.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function FormRenderer({ form, onSubmit, preview = false }) {
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [sendError, setSendError] = (0, import_react.useState)("");
	const set = (qid, v) => {
		setAnswers((a) => ({
			...a,
			[qid]: v
		}));
		setErrors((e) => ({
			...e,
			[qid]: false
		}));
	};
	if (!form.open && !preview) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-page p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "type-h2 text-text-pri",
			children: form.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 type-body text-text-sec",
			children: "지금은 응답을 받지 않아요."
		})]
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-page p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				size: 32,
				"aria-hidden": "true",
				className: "text-success"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 type-h2 text-text-pri",
				children: "응답을 보냈습니다"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 type-body text-text-sec",
				children: "참여해 주셔서 고마워요."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4",
				variant: "secondary",
				onClick: () => {
					setAnswers({});
					setDone(false);
				},
				children: "다른 응답 쓰기"
			})
		]
	});
	const submit = async (e) => {
		e.preventDefault();
		const miss = Object.fromEntries(form.questions.filter((q) => q.required && (answers[q.id] == null || answers[q.id] === "" || Array.isArray(answers[q.id]) && !answers[q.id].length)).map((q) => [q.id, true]));
		setErrors(miss);
		if (Object.keys(miss).length) {
			document.getElementById(`q-${Object.keys(miss)[0]}`)?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
			return;
		}
		setSending(true);
		setSendError("");
		try {
			const r = await onSubmit?.(answers);
			if (r && r.ok === false) {
				setSendError(r.message || "응답을 보내지 못했습니다");
				return;
			}
			setDone(true);
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		noValidate: true,
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-md bg-page shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "type-h2 text-text-pri",
							children: form.title
						}),
						form.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 whitespace-pre-line type-body text-text-sec",
							children: form.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 type-meta text-danger-text",
							children: "* 표시는 꼭 답해야 하는 질문입니다"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 rounded-md bg-subtle px-3 py-2 type-meta text-text-sec",
							children: "주민등록번호와 상세 주소, 병력 같은 주민 정보 입력 금지"
						})
					]
				})]
			}),
			form.questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				id: `q-${q.id}`,
				className: clsx("rounded-md p-5 shadow-sm md:p-6", errors[q.id] ? "bg-danger-soft" : "bg-page"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
						className: "type-body-strong text-text-pri",
						children: [q.title, q.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-danger-text",
							"aria-label": "필수",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [
							q.type === "short" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoComplete: "off",
								spellCheck: false,
								value: answers[q.id] || "",
								onChange: (e) => set(q.id, e.target.value),
								className: "focus-ring-within h-11 w-full rounded-sm bg-subtle px-3 type-body",
								placeholder: "내 답변"
							}),
							q.type === "long" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								autoComplete: "off",
								spellCheck: false,
								value: answers[q.id] || "",
								onChange: (e) => set(q.id, e.target.value),
								rows: 3,
								className: "focus-ring-within w-full resize-y rounded-sm bg-subtle p-3 type-body",
								placeholder: "내 답변"
							}),
							q.type === "date" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoComplete: "off",
								spellCheck: false,
								inputMode: "numeric",
								value: answers[q.id] || "",
								onChange: (e) => set(q.id, e.target.value),
								className: "focus-ring-within h-11 w-48 rounded-sm bg-subtle px-3 type-body",
								placeholder: "2026. 10. 12."
							}),
							q.type === "choice" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1",
								children: (q.options || []).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-2 hover:bg-mute",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: q.id,
										checked: answers[q.id] === o,
										onChange: () => set(q.id, o),
										className: ""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "type-body text-text-pri",
										children: o
									})]
								}, o))
							}),
							q.type === "check" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1",
								children: (q.options || []).map((o) => {
									const cur = answers[q.id] || [];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-2 hover:bg-mute",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: cur.includes(o),
											onChange: () => set(q.id, cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o]),
											className: ""
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "type-body text-text-pri",
											children: o
										})]
									}, o);
								})
							}),
							q.type === "scale" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "type-meta text-text-meta",
										children: "전혀 아니다"
									}),
									Array.from({ length: (q.max || 5) - (q.min || 1) + 1 }, (_, i) => (q.min || 1) + i).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => set(q.id, n),
										"aria-pressed": answers[q.id] === n,
										className: clsx("h-11 w-11 rounded-sm type-strong tabular-nums", answers[q.id] === n ? "bg-primary text-text-inverse" : "bg-mute text-text-pri hover:bg-line-sub"),
										children: n
									}, n)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "type-meta text-text-meta",
										children: "매우 그렇다"
									})
								]
							})
						]
					}),
					errors[q.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 type-caption text-danger-text",
						children: "답해야 하는 질문입니다"
					})
				]
			}, q.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						loading: sending,
						children: preview ? "시험 제출" : "보내기"
					}), sendError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-caption text-danger-text",
						role: "alert",
						children: sendError
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setAnswers({});
						setErrors({});
					},
					className: "type-body-sm text-primary-text",
					children: "양식 지우기"
				})]
			})
		]
	});
}
//#endregion
export { FormRenderer as t };

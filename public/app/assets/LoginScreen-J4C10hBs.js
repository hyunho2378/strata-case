import { d as useNavigate, h as require_react, t as require_jsx_runtime, u as useLocation, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, t as Button } from "./Button-scljtAU-.js";
import { o as signIn } from "./index-iSpUmSYP.js";
import { t as Input } from "./Input-xFxgKSoK.js";
import { t as Logo } from "./Logo-DUnI5m32.js";
//#region src/components/ui/Card.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PAD = {
	md: "p-4 lg:p-5",
	sm: "p-3 lg:p-4",
	lg: "p-5 lg:p-6",
	none: ""
};
var HEAD = {
	md: "px-4 pt-4 lg:px-5 lg:pt-5",
	sm: "px-3 pt-3 lg:px-4 lg:pt-4",
	lg: "px-5 pt-5 lg:px-6 lg:pt-6",
	none: "px-4 pt-4 lg:px-5"
};
var TONE = {
	default: "bg-page shadow-card",
	primary: "bg-primary-soft",
	danger: "bg-danger-soft",
	mute: "bg-subtle",
	flat: ""
};
function Card({ title, desc, meta, actions, toolbar, eyebrow, media, children, className, bodyClassName, padding = "md", tone = "default", as: As = "section", headingLevel = 2, ...rest }) {
	const H = `h${headingLevel}`;
	const hasHead = title || actions || eyebrow || media;
	const hasBody = children != null && children !== false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(As, {
		className: clsx("rounded-lg min-w-0", padding === "none" && tone !== "flat" && "overflow-hidden", TONE[tone], className),
		...rest,
		children: [
			hasHead && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: clsx("flex flex-wrap items-center justify-between gap-x-3 gap-y-2", HEAD[padding], tone === "flat" && "!px-0 !pt-0", (padding === "none" || !hasBody) && "pb-3 lg:pb-4", !hasBody && padding !== "none" && "pb-4 lg:pb-5"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						media && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3",
							children: media
						}),
						eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 type-caption text-text-meta",
							children: eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline gap-x-2",
							children: [title && (tone === "flat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
								className: "type-title text-text-pri",
								children: title
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
								className: "type-strong text-text-pri",
								children: title
							})), meta != null && meta !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: clsx(tone === "flat" ? "type-title" : "type-strong", "font-normal text-text-sec tabular-nums"),
								children: meta
							})]
						}),
						desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: clsx("mt-1 type-meta text-text-meta", tone !== "flat" && "pl-4"),
							children: desc
						})
					]
				}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: actions
				})]
			}),
			toolbar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: clsx("flex flex-wrap items-center gap-2", padding === "none" ? "px-4 pb-3 lg:px-5" : clsx(HEAD[padding].replace(/pt-\S+/g, ""), "pt-3")),
				children: toolbar
			}),
			hasBody && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: clsx(PAD[padding], (hasHead || toolbar) && padding !== "none" && "pt-3 lg:pt-4", bodyClassName),
				children
			})
		]
	});
}
//#endregion
//#region src/pages/console/LoginScreen.jsx
function LoginScreen() {
	(0, import_react.useEffect)(() => {
		document.title = "담당자 로그인 | Strata";
	}, []);
	const [id, setId] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const back = useLocation().state?.from || "/admin";
	const submit = async (e) => {
		e.preventDefault();
		if (busy) return;
		if (!id.trim() || !password) {
			setError("아이디와 비밀번호 입력 필요");
			return;
		}
		setBusy(true);
		setError("");
		try {
			await signIn(id.trim(), password);
			navigate(back, { replace: true });
		} catch {
			setError("아이디 또는 비밀번호 불일치");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center bg-canvas px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-[440px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { to: "/" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				as: "div",
				padding: "lg",
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-caption text-text-sec",
						children: "동해시 공공시설 운영 정보"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 type-h1 text-text-pri",
						children: "담당자 로그인"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 flex flex-col gap-4",
						onSubmit: submit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "아이디",
								value: id,
								autoComplete: "username",
								onChange: (e) => setId(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "비밀번호",
								type: "password",
								value: password,
								autoComplete: "current-password",
								onChange: (e) => setPassword(e.target.value)
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "rounded-md bg-danger-soft px-3 py-2 type-body-sm text-danger-text",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full",
								loading: busy,
								children: "로그인"
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { LoginScreen as default };

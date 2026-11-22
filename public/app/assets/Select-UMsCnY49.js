import { h as require_react, m as require_react_dom, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon } from "./Button-scljtAU-.js";
import { et as usePopExit, gt as Check } from "./index-iSpUmSYP.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
//#endregion
//#region src/components/ui/Select.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Select({ label, value, onChange, options = [], placeholder = "선택", disabled, error, compact = false, id, className, size = "md", portal = true, menuMinWidth = 0, triggerClassName, hideLabel = false }) {
	const auto = (0, import_react.useId)();
	const btnId = id || auto;
	const [open, setOpen] = (0, import_react.useState)(false);
	const [instantPop, setInstantPop] = (0, import_react.useState)(false);
	const { mounted: popMounted, closing: popClosing } = usePopExit(open, instantPop);
	const [highlight, setHighlight] = (0, import_react.useState)(0);
	const rootRef = (0, import_react.useRef)(null);
	const triggerRef = (0, import_react.useRef)(null);
	const listRef = (0, import_react.useRef)(null);
	const typed = (0, import_react.useRef)({
		s: "",
		t: 0
	});
	const [pos, setPos] = (0, import_react.useState)(null);
	const small = size !== "md";
	(0, import_react.useLayoutEffect)(() => {
		if (!open || !portal) return void 0;
		const place = () => {
			const r = triggerRef.current?.getBoundingClientRect();
			if (!r) return;
			const width = Math.max(r.width, menuMinWidth);
			const below = window.innerHeight - r.bottom - 8;
			const up = below < 220 && r.top > below;
			const maxH = Math.min(320, Math.max(120, (up ? r.top : below) - 8));
			const left = Math.max(8, Math.min(r.left, window.innerWidth - width - 8));
			setPos({
				left,
				width,
				maxH,
				top: up ? void 0 : r.bottom + 4,
				bottom: up ? window.innerHeight - r.top + 4 : void 0
			});
		};
		place();
		window.addEventListener("resize", place);
		window.addEventListener("scroll", place, true);
		return () => {
			window.removeEventListener("resize", place);
			window.removeEventListener("scroll", place, true);
		};
	}, [
		open,
		portal,
		menuMinWidth
	]);
	const selected = options.find((o) => o.value === value) || null;
	const SelectedIcon = selected?.icon;
	(0, import_react.useEffect)(() => {
		if (!open) return void 0;
		const onDown = (e) => {
			if (!rootRef.current?.contains(e.target) && !listRef.current?.contains(e.target)) setOpen(false);
		};
		document.addEventListener("pointerdown", onDown);
		return () => document.removeEventListener("pointerdown", onDown);
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const idx = Math.max(0, options.findIndex((o) => o.value === value));
		setHighlight(idx);
		requestAnimationFrame(() => {
			listRef.current?.children[idx]?.scrollIntoView({ block: "nearest" });
		});
	}, [
		open,
		options,
		value
	]);
	const pick = (i, viaKeyboard = false) => {
		if (!options[i]) return;
		onChange?.(options[i].value);
		setInstantPop(viaKeyboard);
		setOpen(false);
		triggerRef.current?.focus();
	};
	const move = (delta) => {
		setHighlight((h) => {
			const next = (h + delta + options.length) % options.length;
			listRef.current?.children[next]?.scrollIntoView({ block: "nearest" });
			return next;
		});
	};
	const onKeyDown = (e) => {
		if (disabled) return;
		if (e.key === "Escape") {
			setInstantPop(true);
			setOpen(false);
			triggerRef.current?.focus();
			return;
		}
		if (!open) {
			if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
				e.preventDefault();
				setInstantPop(true);
				setOpen(true);
			}
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			move(1);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			move(-1);
		} else if (e.key === "Home") {
			e.preventDefault();
			move(-highlight);
		} else if (e.key === "End") {
			e.preventDefault();
			move(options.length - 1 - highlight);
		} else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			pick(highlight, true);
		} else if (e.key.length === 1) {
			const now = Date.now();
			typed.current.s = now - typed.current.t < 700 ? typed.current.s + e.key : e.key;
			typed.current.t = now;
			const i = options.findIndex((o) => o.label.toLowerCase().startsWith(typed.current.s.toLowerCase()));
			if (i >= 0) move(i - highlight);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx("relative", className),
		ref: rootRef,
		onKeyDown,
		children: [
			label && !compact && !hideLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: btnId,
				className: "block type-caption text-text-sec mb-1.5",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				ref: triggerRef,
				id: btnId,
				type: "button",
				role: "combobox",
				"aria-haspopup": "listbox",
				"aria-expanded": open,
				"aria-invalid": error ? true : void 0,
				"aria-controls": `${btnId}-list`,
				"aria-activedescendant": open ? `${btnId}-opt-${highlight}` : void 0,
				"aria-label": compact || hideLabel ? label : void 0,
				disabled,
				onClick: (e) => {
					setInstantPop(e.detail === 0);
					setOpen((o) => !o);
				},
				onMouseDown: (e) => {
					if (portal) e.preventDefault();
				},
				className: clsx("flex items-center gap-2 bg-page transition-colors duration-fast", size === "xs" ? "h-7 rounded-xs px-2" : size === "sm" ? "h-8 rounded-sm px-2.5" : "h-11 px-3 rounded-md", compact ? clsx("w-auto max-w-full", !small && "md:h-9") : "w-full", "ring-1 ring-inset disabled:opacity-40 disabled:cursor-not-allowed", error ? "ring-danger" : open ? "ring-primary ring-2" : "ring-line-def hover:ring-line-strong", compact ? "justify-start" : "justify-between", triggerClassName),
				children: [compact && label && !hideLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 type-caption text-text-meta",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [
						!compact && SelectedIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedIcon, {
							size: 16,
							className: "shrink-0 text-text-meta",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: clsx("truncate", small ? "text-[12px] leading-4" : "type-body-sm", selected ? "text-text-pri" : "text-text-ter"),
							children: selected ? selected.label : placeholder
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							size: small ? 14 : 16,
							className: clsx("shrink-0 text-text-meta transition-transform duration-fast", open && "rotate-180"),
							"aria-hidden": "true"
						})
					]
				})]
			}),
			popMounted && (portal ? (p) => (0, import_react_dom.createPortal)(p, document.body) : (p) => p)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				style: portal && pos ? {
					position: "fixed",
					left: pos.left,
					width: pos.width,
					top: pos.top,
					bottom: pos.bottom,
					maxHeight: pos.maxH,
					zIndex: 75
				} : void 0,
				onMouseDown: (e) => {
					if (portal) e.preventDefault();
				},
				ref: listRef,
				id: `${btnId}-list`,
				role: "listbox",
				"aria-label": label,
				tabIndex: -1,
				"aria-hidden": popClosing || void 0,
				className: clsx("pop-panel origin-top z-dropdown overflow-y-auto rounded-md bg-page shadow-md ring-1 ring-line-sub p-1", portal ? pos ? "" : "invisible fixed" : "absolute inset-x-0 top-full mt-1 max-h-[320px]", instantPop && "pop-instant", popClosing && "pop-panel-exit"),
				children: [options.map((o, i) => {
					const Icon = o.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: `${btnId}-opt-${i}`,
						role: "option",
						"aria-selected": o.value === value,
						onMouseEnter: () => setHighlight(i),
						onClick: (e) => pick(i, e.detail === 0),
						className: clsx("flex cursor-pointer items-center gap-3 px-2.5 rounded-xs transition-colors duration-fast", small ? "min-h-8 md:min-h-8" : "min-h-11", highlight === i || o.value === value ? "bg-mute text-text-pri" : "text-text-sec"),
						children: [
							Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 20,
								className: "shrink-0 text-text-meta",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex min-w-0 flex-1 items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: clsx("truncate", small ? "text-[13px]" : "type-body-sm"),
									style: o.style,
									children: o.label
								}), o.secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 type-caption text-text-meta",
									children: o.secondary
								})]
							}),
							o.value === value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 16,
								className: "shrink-0 text-primary",
								"aria-hidden": "true"
							})
						]
					}, o.value);
				}), !options.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "min-h-11 px-2.5 flex items-center type-body-sm text-text-ter",
					children: "항목 없음"
				})]
			})),
			error && !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 type-caption text-danger-text",
				children: error
			})
		]
	});
}
//#endregion
export { Select as t };

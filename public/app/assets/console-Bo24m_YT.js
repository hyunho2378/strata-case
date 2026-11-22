import { h as require_react, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx } from "./Button-scljtAU-.js";
import { ht as ChevronRight } from "./index-iSpUmSYP.js";
import { t as StatusChip } from "./StatusChip-CTSks7fv.js";
//#region src/components/console/StatusBand.jsx
var import_jsx_runtime = require_jsx_runtime();
function StatusBand({ tag, tone = "danger", action, children, className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: clsx("flex flex-wrap items-center gap-x-4 gap-y-3", className),
		...rest,
		children: [
			tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
				tone,
				children: tag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "min-w-0 flex-1 basis-80 type-title text-text-pri tabular-nums",
				children
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: action
			})
		]
	});
}
//#endregion
//#region src/components/console/NumberFlow.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function NumberFlow({ items, label = "숫자 흐름", className, cards = false }) {
	if (cards) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		"aria-label": label,
		className: clsx("grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]", className),
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative min-w-0 rounded-lg bg-subtle px-6 py-4 [@media(max-height:860px)]:py-3",
			children: [
				i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute -left-6 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-text-sec",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-body-sm font-bold text-text-sec",
					children: it.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-baseline gap-x-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: clsx("tabular-nums type-title", it.tone === "danger" ? "text-danger-text" : "text-text-pri"),
						children: [it.value, it.unit]
					}), it.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-body-sm text-text-sec",
						children: it.note
					})]
				})
			]
		}, it.label))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		"aria-label": label,
		className: clsx("flex flex-wrap items-stretch gap-y-2 py-0", className),
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			"aria-hidden": "true",
			className: "flex w-8 shrink-0 items-center justify-center text-text-sec",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 22 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "min-w-[9.5rem] flex-1 basis-40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-body-sm font-bold text-text-sec",
					children: it.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: clsx("tabular-nums type-title", it.tone === "danger" ? "text-danger-text" : "text-text-pri"),
					children: [it.value, it.unit]
				}),
				it.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-body-sm text-text-sec",
					children: it.note
				})
			]
		})] }, it.label))
	});
}
//#endregion
//#region src/components/console/ListItem.jsx
function ListItem({ dense, id, icon, title, sub, chip, trailing, selected, onSelect, onKeyDown, tabIndex = -1, itemRef }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		role: "presentation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			ref: itemRef,
			id,
			type: "button",
			role: "option",
			"aria-selected": !!selected,
			tabIndex,
			onClick: onSelect,
			onKeyDown,
			className: clsx("flex w-full items-center gap-4 rounded-lg px-4 text-left", dense ? "min-h-11 py-1" : "min-h-[72px] py-3", "text-left transition-colors duration-fast", selected ? "bg-mute" : "hover:bg-subtle"),
			children: [
				icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mute text-text-sec",
					children: icon
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: clsx("min-w-0 flex-1", dense && "flex items-baseline gap-3"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: clsx(dense ? "shrink-0" : "block truncate", "type-body text-text-pri", selected && "font-bold"),
						children: title
					}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: clsx(dense ? "min-w-0" : "block truncate", "type-body-sm text-text-sec tabular-nums"),
						children: sub
					})]
				}),
				trailing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 type-body-strong text-text-pri tabular-nums",
					children: trailing
				}),
				chip
			]
		})
	});
}
//#endregion
//#region src/components/console/ListDetail.jsx
function ListDetail({ items, selectedId, onSelect, listLabel, listTitle, actions, children }) {
	const refs = (0, import_react.useRef)({});
	const move = (i) => {
		const t = items[Math.max(0, Math.min(items.length - 1, i))];
		if (!t) return;
		onSelect(t.id);
		refs.current[t.id]?.focus();
	};
	const keys = (i) => (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			move(i + 1);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			move(i - 1);
		} else if (e.key === "Home") {
			e.preventDefault();
			move(0);
		} else if (e.key === "End") {
			e.preventDefault();
			move(items.length - 1);
		}
	};
	const activeId = items.some((x) => x.id === selectedId) ? selectedId : items[0]?.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-w-0 gap-10 cq-lg:grid-cols-[5fr_7fr] cq-lg:items-start cq-lg:gap-8 cq-xl:gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [listTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 type-title text-text-pri",
				children: listTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				role: "listbox",
				"aria-label": listLabel,
				className: "flex flex-col gap-1",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
					...it,
					selected: it.id === activeId,
					tabIndex: it.id === activeId ? 0 : -1,
					itemRef: (el) => {
						refs.current[it.id] = el;
					},
					onSelect: () => onSelect(it.id),
					onKeyDown: keys(i)
				}, it.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 px-2 pt-1",
			"aria-live": "polite",
			children: [actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex flex-wrap items-center justify-end gap-2",
				children: actions
			}), children]
		})]
	});
}
//#endregion
//#region src/components/console/DetailSection.jsx
function DetailSection({ title, action, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: clsx("mt-10 first:mt-0", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "type-title text-text-pri",
				children: title
			}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: action
			})]
		}), children]
	});
}
//#endregion
//#region src/components/console/Section.jsx
function Section({ title, count, action, id, children, className, tone, dense }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": id,
		className: clsx("min-w-0", tone === "surface" && (dense ? "rounded-lg bg-subtle p-5" : "rounded-lg bg-subtle p-6"), className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: clsx(dense ? "mb-2" : "mb-4", "flex flex-wrap items-center justify-between gap-x-4 gap-y-1"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id,
				className: clsx("flex items-baseline gap-2 text-text-pri", dense ? "type-body-strong" : "type-title"),
				children: [title, count != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: clsx("font-normal tabular-nums text-text-sec", dense ? "type-body-strong" : "type-title"),
					children: count
				})]
			}), action]
		}), children]
	});
}
//#endregion
//#region src/components/console/InfoRows.jsx
function InfoRows({ rows, columns = 1, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: clsx("grid min-w-0", columns === 2 && "cq-xl:grid-cols-2 cq-xl:gap-x-10", className),
		children: rows.filter(Boolean).map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: clsx(r.wide && "cq-xl:col-span-2", "grid min-h-14 grid-cols-1 items-baseline gap-x-6 gap-y-0 py-2 cq-md:grid-cols-[11rem_1fr]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "type-body-sm text-text-sec",
				children: r.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: clsx("tabular-nums", r.strong ? "type-body-strong text-text-pri" : "type-body text-text-pri"),
						children: r.value
					}),
					r.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block type-meta text-text-sec tabular-nums",
						children: r.note
					}),
					r.extra
				]
			})]
		}, r.key ?? i))
	});
}
//#endregion
//#region src/components/console/LinkRow.jsx
function LinkRow({ to, onClick, title, sub, value, tone, dense, className }) {
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex min-w-0 flex-1 items-baseline gap-x-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 type-body text-text-pri",
			children: title
		}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 truncate type-body-sm text-text-sec tabular-nums",
			children: sub
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex shrink-0 items-center gap-2",
		children: [value != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: clsx("type-body-strong tabular-nums", tone === "danger" ? "text-danger-text" : "text-text-pri"),
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
			size: 18,
			"aria-hidden": "true",
			className: "-mr-[6px] w-[18px] shrink-0 text-text-sec"
		})]
	})] });
	const cls = clsx("flex w-full items-center gap-2 rounded-lg px-3 text-left hover:bg-subtle", dense ? "min-h-10 py-0.5 [@media(max-height:860px)]:min-h-9" : "min-h-11 py-1", className);
	return to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cls,
		children: body
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cls,
		children: body
	});
}
//#endregion
//#region src/components/console/StepIndicator.jsx
var REVIEW_STEPS = [
	{
		key: "upload",
		label: "공지 올리기"
	},
	{
		key: "read",
		label: "AI 읽기"
	},
	{
		key: "confirm",
		label: "담당자 확인"
	}
];
function stepStates(status, steps = REVIEW_STEPS) {
	const current = Math.max(0, steps.findIndex((s) => s.key === status));
	return steps.map((s, i) => i < current ? "done" : i === current ? "current" : "todo");
}
function StepIndicator({ status, steps = REVIEW_STEPS, label = "판독 단계", className }) {
	const states = stepStates(status, steps);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		"aria-label": label,
		className: clsx("grid w-full gap-2", steps.length === 3 ? "grid-cols-3" : "grid-cols-5", className),
		children: steps.map((s, i) => {
			const st = states[i];
			const active = st === "current";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "min-w-0",
				"aria-current": active ? "step" : void 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: clsx("block h-2 w-full rounded-full", st === "todo" ? "bg-line-strong" : "bg-primary")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: clsx("mt-2 block break-keep type-caption", active ? "text-text-pri" : "font-normal text-text-meta"),
					children: [s.label, st === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: " 완료"
					})]
				})]
			}, s.key);
		})
	});
}
//#endregion
export { DetailSection as a, StatusBand as c, Section as i, LinkRow as n, ListDetail as o, InfoRows as r, NumberFlow as s, StepIndicator as t };

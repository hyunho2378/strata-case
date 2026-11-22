import { h as require_react, o as Navigate, p as useParams, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon, t as Button } from "./Button-scljtAU-.js";
import { t as Select } from "./Select-UMsCnY49.js";
import { n as download, t as EditorFrame } from "./EditorFrame-xXtODuPt.js";
import { t as Copy } from "./copy-WJKa5ueD.js";
import { t as Link2 } from "./link-2-C_dlvS-X.js";
import { t as Plus } from "./plus-BRb5oufJ.js";
import { t as Search } from "./search-B5z5RKz4.js";
import { t as Sheet } from "./sheet-CpUmBIgo.js";
import { t as Trash2 } from "./trash-2-DmlgnNRu.js";
import { t as useToast } from "./index-iSpUmSYP.js";
import { n as useWorkspaceInit, r as useWorkspaceStore, t as useFormResponsePolling } from "./useWorkspaceStore-D5Yy-l9c.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowDownAZ = createLucideIcon("arrow-down-a-z", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["path", {
		d: "M20 8h-5",
		key: "1vsyxs"
	}],
	["path", {
		d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
		key: "ag13bf"
	}],
	["path", {
		d: "M15 14h5l-5 6h5",
		key: "ur5jdg"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpAZ = createLucideIcon("arrow-up-a-z", [
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["path", {
		d: "M20 8h-5",
		key: "1vsyxs"
	}],
	["path", {
		d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
		key: "ag13bf"
	}],
	["path", {
		d: "M15 14h5l-5 6h5",
		key: "ur5jdg"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Upload = createLucideIcon("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]);
//#endregion
//#region src/components/ui/ExportButton.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var esc = (v) => {
	const s = v == null ? "" : String(v);
	return /[",\n]/.test(s) ? `"${s.replace(/"/g, "\"\"")}"` : s;
};
function toCsv(columns, rows) {
	return `\uFEFF${columns.map((c) => esc(c.label)).join(",")}\n${rows.map((r) => columns.map((c) => esc(c.value ? c.value(r) : r[c.key])).join(",")).join("\n")}`;
}
//#endregion
//#region src/pages/workspace/SheetEditor.jsx
var letter = (i) => {
	let s = "";
	i += 1;
	while (i > 0) {
		const m = (i - 1) % 26;
		s = String.fromCharCode(65 + m) + s;
		i = Math.floor((i - 1) / 26);
	}
	return s;
};
function parseCsv(text) {
	const rows = [];
	let row = [];
	let cell = "";
	let q = false;
	for (let i = 0; i < text.length; i++) {
		const c = text[i];
		if (q) {
			if (c === "\"" && text[i + 1] === "\"") {
				cell += "\"";
				i++;
			} else if (c === "\"") q = false;
			else cell += c;
		} else if (c === "\"") q = true;
		else if (c === ",") {
			row.push(cell);
			cell = "";
		} else if (c === "\n") {
			row.push(cell);
			rows.push(row);
			row = [];
			cell = "";
		} else if (c !== "\r") cell += c;
	}
	if (cell || row.length) {
		row.push(cell);
		rows.push(row);
	}
	return rows;
}
function SheetEditor() {
	const { id } = useParams();
	const sheet = useWorkspaceStore((s) => s.items.find((x) => x.id === id));
	const form = useWorkspaceStore((s) => s.items.find((x) => x.id === sheet?.formId));
	const update = useWorkspaceStore((s) => s.update);
	const toast = useToast();
	const fileRef = (0, import_react.useRef)(null);
	const [sel, setSel] = (0, import_react.useState)({
		r: 0,
		c: 0
	});
	const [q, setQ] = (0, import_react.useState)("");
	const [limit, setLimit] = (0, import_react.useState)(200);
	const [sort, setSort] = (0, import_react.useState)(null);
	const ready = useWorkspaceInit();
	const mode = useWorkspaceStore((s) => s.mode);
	useFormResponsePolling(sheet?.formId, ready && sheet?.source === "form");
	const { columns, rows, locked } = (0, import_react.useMemo)(() => {
		if (!sheet) return {
			columns: [],
			rows: [],
			locked: true
		};
		if (sheet.source === "form") {
			if (!form) return {
				columns: [{
					key: "none",
					label: "연결된 설문지 없음"
				}],
				rows: [],
				locked: true
			};
			return {
				columns: [{
					key: "at",
					label: "제출 시각"
				}, ...form.questions.map((qq) => ({
					key: qq.id,
					label: qq.title
				}))],
				rows: form.responses.map((r) => [new Date(r.at).toLocaleString("ko-KR"), ...form.questions.map((qq) => {
					const v = r.answers[qq.id];
					return Array.isArray(v) ? v.join(", ") : v ?? "";
				})]),
				locked: true
			};
		}
		return {
			columns: sheet.columns,
			rows: sheet.rows,
			locked: false
		};
	}, [sheet, form]);
	const view = (0, import_react.useMemo)(() => {
		let list = rows.map((r, i) => ({
			r,
			i
		}));
		if (q) list = list.filter(({ r }) => r.some((v) => String(v).includes(q)));
		if (sort) list = [...list].sort((a, b) => {
			const x = a.r[sort.c] ?? "";
			const y = b.r[sort.c] ?? "";
			const nx = Number(x);
			const ny = Number(y);
			const cmp = x !== "" && y !== "" && !Number.isNaN(nx) && !Number.isNaN(ny) ? nx - ny : String(x).localeCompare(String(y), "ko");
			return sort.dir === "asc" ? cmp : -cmp;
		});
		return list;
	}, [
		rows,
		q,
		sort
	]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-canvas type-body-sm text-text-meta",
		children: "시트 불러오는 중"
	});
	if (!sheet) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/docs?kind=sheet",
		replace: true
	});
	const setCell = (ri, ci, value) => {
		const col = columns[ci];
		if (locked || col?.readOnly) return;
		const next = sheet.rows.map((r) => [...r]);
		next[ri][ci] = value;
		update(id, { rows: next });
	};
	const setHeader = (ci, label) => {
		if (locked || sheet.source) return;
		update(id, { columns: sheet.columns.map((c, i) => i === ci ? {
			...c,
			label
		} : c) });
	};
	const addRow = () => update(id, { rows: [...sheet.rows, columns.map(() => "")] });
	const addCol = () => update(id, {
		columns: [...sheet.columns, {
			key: `c${Date.now()}`,
			label: `열 ${sheet.columns.length + 1}`
		}],
		rows: sheet.rows.map((r) => [...r, ""])
	});
	const delRow = () => {
		if (!sheet.rows.length) return;
		update(id, { rows: sheet.rows.filter((_, i) => i !== sel.r) });
		setSel({
			r: Math.max(0, sel.r - 1),
			c: sel.c
		});
	};
	const exportCsv = () => {
		const cols = columns.map((c, i) => ({
			label: c.label,
			value: (r) => r[i]
		}));
		download(`${sheet.title}.csv`, toCsv(cols, rows), "text/csv;charset=utf-8");
	};
	const copyForGoogle = async () => {
		const tsv = [columns.map((c) => c.label), ...rows].map((r) => r.map((v) => String(v ?? "").replace(/\t|\n/g, " ")).join("	")).join("\n");
		try {
			await navigator.clipboard.writeText(tsv);
			window.open("https://sheets.new", "_blank", "noopener");
			toast("표 복사 완료, 새 구글 시트 A1 칸에 붙여 넣기", "primary");
		} catch {
			toast("복사하지 못했어요. 브라우저 권한을 확인하세요", "danger");
		}
	};
	const importCsv = async (e) => {
		const f = e.target.files?.[0];
		e.target.value = "";
		if (!f) return;
		const data = parseCsv((await f.text()).replace(/^\uFEFF/, ""));
		if (!data.length) return;
		const [head, ...body] = data;
		update(id, {
			columns: head.map((l, i) => ({
				key: `c${i}`,
				label: l
			})),
			rows: body.map((r) => head.map((_, i) => r[i] ?? ""))
		});
		toast(`${body.length}행을 가져왔습니다`, "primary");
	};
	const onKey = (e, vi, ci) => {
		const move = {
			ArrowDown: [1, 0],
			Enter: [1, 0],
			ArrowUp: [-1, 0]
		}[e.key];
		if (!move) return;
		e.preventDefault();
		const ni = Math.min(Math.min(view.length, limit) - 1, Math.max(0, vi + move[0]));
		document.querySelector(`[data-cell="${ni}-${ci}"]`)?.focus();
	};
	const selRow = rows[sel.r];
	const selVal = selRow ? selRow[sel.c] ?? "" : "";
	const selLocked = locked || columns[sel.c]?.readOnly;
	const actions = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		!sheet.source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref: fileRef,
			type: "file",
			accept: ".csv,text/csv",
			className: "sr-only",
			onChange: importCsv
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			collapse: "xl",
			leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
				size: 16,
				"aria-hidden": "true"
			}),
			onClick: () => fileRef.current?.click(),
			children: "CSV 가져오기"
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			collapse: "lg",
			leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
				size: 16,
				"aria-hidden": "true"
			}),
			onClick: exportCsv,
			children: "CSV 저장"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			collapse: "sm",
			leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				size: 16,
				"aria-hidden": "true"
			}),
			onClick: copyForGoogle,
			children: "구글 시트로 복사"
		})
	] });
	const bar = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-subtle",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 px-3 py-1.5 md:px-5",
			children: [
				!sheet.source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							size: 16,
							"aria-hidden": "true"
						}),
						onClick: addRow,
						children: "행"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							size: 16,
							"aria-hidden": "true"
						}),
						onClick: addCol,
						children: "열"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							size: 16,
							"aria-hidden": "true"
						}),
						onClick: delRow,
						children: "선택 행 삭제"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 h-5 w-px bg-line-sub" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownAZ, {
						size: 16,
						"aria-hidden": "true"
					}),
					onClick: () => setSort({
						c: sel.c,
						dir: "asc"
					}),
					children: "오름차순"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpAZ, {
						size: 16,
						"aria-hidden": "true"
					}),
					onClick: () => setSort({
						c: sel.c,
						dir: "desc"
					}),
					children: "내림차순"
				}),
				sort && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSort(null),
					className: "type-caption text-primary-text underline",
					children: "정렬 해제"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "ml-auto flex h-9 w-full max-w-xs items-center gap-2 rounded-md bg-mute px-3 sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 14,
						"aria-hidden": "true",
						className: "text-text-meta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoComplete: "off",
						spellCheck: false,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "시트에서 찾기",
						className: "min-w-0 flex-1 bg-transparent type-body-sm outline-none"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 bg-subtle px-3 md:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "w-14 shrink-0 py-2 text-center type-caption text-text-meta tabular-nums",
					children: [letter(sel.c), sel.r + 2]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-5 w-px bg-line-sub" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-1 type-caption italic text-text-meta",
					children: "fx"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoComplete: "off",
					spellCheck: false,
					"aria-label": "선택한 칸 내용",
					defaultValue: selVal,
					readOnly: selLocked,
					onBlur: (e) => {
						if (e.target.value !== String(selVal)) setCell(sel.r, sel.c, e.target.value);
					},
					onKeyDown: (e) => {
						if (e.key === "Enter") e.currentTarget.blur();
					},
					className: clsx("min-w-0 flex-1 bg-transparent py-2 type-body-sm outline-none", selLocked && "text-text-meta")
				}, `${sel.r}-${sel.c}-${selVal}`)
			]
		})]
	});
	const note = sheet.source === "form" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"설문지 ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: `/admin/docs/form/${sheet.formId}`,
			className: "text-primary-text underline",
			children: form?.title
		}),
		" 응답 자동 수집, 응답 수정 불가"
	] }) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EditorFrame, {
		fill: true,
		kind: "sheet",
		Icon: Sheet,
		title: sheet.title,
		onTitle: (t) => update(id, { title: t }),
		updatedAt: sheet.updatedAt,
		actions,
		tabs: bar,
		children: [
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 bg-primary-soft px-4 py-2 type-body-sm text-primary-text md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, {
					size: 16,
					"aria-hidden": "true",
					className: "shrink-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-auto bg-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "border-separate border-spacing-px bg-line-sub type-body-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("thead", {
							className: "sticky top-0 z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "sticky left-0 z-20 h-7 w-12 bg-subtle" }), columns.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: clsx("h-7 min-w-36 bg-subtle type-caption font-normal tabular-nums", sel.c === ci ? "text-primary-text" : "text-text-meta"),
								children: letter(ci)
							}, c.key))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "sticky left-0 z-20 h-9 bg-subtle type-caption font-normal text-text-meta",
								children: "1"
							}), columns.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "h-9 bg-page p-0 text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									autoComplete: "off",
									spellCheck: false,
									value: c.label,
									readOnly: locked || !!sheet.source,
									onChange: (e) => setHeader(ci, e.target.value),
									"aria-label": `${letter(ci)}열 제목`,
									className: "h-9 w-full bg-transparent px-2 type-strong text-text-pri focus:bg-primary-soft"
								})
							}, c.key))] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: view.slice(0, limit).map(({ r, i }, vi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: clsx("sticky left-0 z-raised h-8 bg-subtle type-caption font-normal tabular-nums", sel.r === i ? "text-primary-text" : "text-text-meta"),
							children: i + 2
						}), columns.map((c, ci) => {
							const ro = locked || c.readOnly;
							const bad = c.options && r[ci] && !c.options.includes(r[ci]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: clsx("h-8 p-0", bad ? "bg-danger-soft" : "bg-page"),
								children: c.options && !ro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									label: `${letter(ci)}${i + 2}`,
									hideLabel: true,
									size: "xs",
									portal: true,
									menuMinWidth: 140,
									value: r[ci] ?? "",
									placeholder: r[ci] || "선택",
									onChange: (v) => setCell(i, ci, v),
									options: [{
										value: "",
										label: "비우기"
									}, ...c.options.map((o) => ({
										value: o,
										label: o
									}))],
									triggerClassName: "h-8 w-full rounded-none bg-transparent"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									autoComplete: "off",
									spellCheck: false,
									"data-cell": `${vi}-${ci}`,
									defaultValue: r[ci] ?? "",
									readOnly: ro,
									onFocus: () => setSel({
										r: i,
										c: ci
									}),
									onBlur: (e) => {
										if (e.target.value !== String(r[ci] ?? "")) setCell(i, ci, e.target.value);
									},
									onKeyDown: (e) => onKey(e, vi, ci),
									"aria-label": `${letter(ci)}${i + 2}`,
									className: clsx("h-8 w-full bg-transparent px-2 focus:bg-primary-soft", ro ? "text-text-sec" : "text-text-pri", c.type === "number" && "text-right tabular-nums")
								}, `${i}-${ci}-${r[ci]}`)
							}, c.key);
						})] }, i)) })]
					}),
					view.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-6 py-8 type-body-sm text-text-meta",
						children: q ? "찾는 내용 없음" : "행 없음"
					}),
					view.length > limit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-3 md:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setLimit((n) => n + 200),
							children: "다음 200행 보기"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-3 type-meta text-text-meta tabular-nums",
							children: [
								view.length,
								"행 중 ",
								limit,
								"행 표시"
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex items-center justify-between bg-subtle px-4 py-2 type-meta text-text-meta md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: view.length === rows.length ? `${rows.length}행` : `${rows.length}행 중 ${view.length}행 표시`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: mode === "server" ? "서버에 저장됩니다" : "새로고침하면 처음 상태로 돌아갑니다" })]
			})
		]
	});
}
//#endregion
export { SheetEditor as default };

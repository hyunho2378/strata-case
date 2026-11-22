import { h as require_react, r as Link, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
import { n as clsx, r as createLucideIcon, t as Button } from "./Button-scljtAU-.js";
import { t as Select } from "./Select-UMsCnY49.js";
import { t as CircleCheck } from "./circle-check-pwNv1VDz.js";
import { t as Copy } from "./copy-WJKa5ueD.js";
import { t as FileUp } from "./file-up-GEGHyfeR.js";
import { n as Printer, r as Pencil, t as Undo2 } from "./undo-2-CSlrtOrK.js";
import { t as EmptyState } from "./EmptyState-XkMqg1JB.js";
import { t as Search } from "./search-B5z5RKz4.js";
import { t as Trash2 } from "./trash-2-DmlgnNRu.js";
import { A as reviewItems, C as alternativesOf, G as roleLabel, H as dotDate, M as useReviewQueue, O as km, Z as useStrata, a as saveStatus, i as readNotice, k as pendingReview, n as cancelStatus, r as makeAnnounce, rt as Modal, t as useToast, tt as colors } from "./index-iSpUmSYP.js";
import { i as todayLabel, r as PageHeader, t as StatusChip } from "./StatusChip-CTSks7fv.js";
import { t as PageShell } from "./PageShell-GgddYxkL.js";
import { t as Skeleton } from "./Skeleton-DLJWn7CQ.js";
import { a as DetailSection, n as LinkRow, r as InfoRows, t as StepIndicator } from "./console-Bo24m_YT.js";
import { t as Input } from "./Input-xFxgKSoK.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ImagePlus = createLucideIcon("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]);
//#endregion
//#region src/components/ui/Textarea.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Textarea({ label, hint, error, rows = 4, id, className, ...rest }) {
	const auto = (0, import_react.useId)();
	const inputId = id || auto;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: inputId,
				className: "block type-caption text-text-sec mb-1.5",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: clsx("px-3 py-2.5 rounded-md bg-page border transition-colors duration-fast", error ? "border-danger" : "border-line-def hover:border-line-strong", "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary-line"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					autoComplete: "off",
					spellCheck: false,
					id: inputId,
					rows,
					"aria-invalid": error ? true : void 0,
					className: "w-full min-w-0 resize-none bg-transparent outline-none type-body-sm text-text-pri placeholder:text-text-ter",
					...rest
				})
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 type-caption text-danger-text",
				children: error
			}) : hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 type-meta text-text-meta",
				children: hint
			})
		]
	});
}
var SAMPLES = [
	{
		id: "gym",
		label: "체육관 휴관 공지 글",
		kind: "text",
		text: `동해시 공고 제2026-1180호

동해체육관 임시 휴관 안내

1. 기간: 2026. 11. 24. 부터 2026. 12. 12. 까지
2. 사유: 바닥 보수 공사
3. 내용: 공사 기간 중 수영장과 체력단련장은 이용할 수 없습니다.
4. 대체 안내: 가까운 전천생활체육공원을 이용해 주시기 바랍니다.

문의: 동해시시설관리공단 체육시설팀`,
		sourceName: "동해시 공고 제2026-1180호",
		sourceUrl: "https://dh.go.kr/www/notice/2026-1180"
	},
	{
		id: "banner",
		label: "보건지소 휴무 배너 그림",
		kind: "image",
		image: "/strata-case/app/".replace(/\/$/, "") + "/samples/notice-banner.png",
		ocrHint: `삼화보건지소 임시 휴무 안내

2026. 11. 20. 부터 2026. 11. 21. 까지
사유: 시설 방역 소독
해당 기간에는 진료실을 이용할 수 없습니다.
가까운 동해시보건소를 이용해 주세요.`,
		sourceName: "동해시 보건소 알림 배너",
		sourceUrl: "https://dh.go.kr/health/notice/2026-0411"
	},
	{
		id: "er",
		label: "응급실 야간 미운영 안내",
		kind: "text",
		text: `의료법인 동해동인병원 응급실 야간 운영 안내

2026. 11. 22. 부터 응급실 야간 진료를 운영하지 않습니다. 종료일은 다시 알려 드립니다.
의료 인력 사정으로 당분간 야간 시간대 응급실은 이용할 수 없습니다.
야간에는 가까운 종합병원 응급실로 먼저 연락해 주세요.`,
		sourceName: "동해동인병원 누리집 공지",
		sourceUrl: "https://dh.go.kr/www/notice/2026-1193"
	}
];
//#endregion
//#region src/components/review/shrinkImage.js
var MAX_UPLOAD_BYTES = 4194304;
var EDGES = [
	4e3,
	3e3,
	2400,
	2e3
];
var QUALITY = [
	.92,
	.84,
	.74,
	.62,
	.5
];
var dataUrlBytes = (url) => {
	const base64 = String(url || "").split(",")[1] || "";
	return Math.floor(base64.length * 3 / 4);
};
var readAsDataUrl = (file) => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.onload = () => resolve(String(reader.result || ""));
	reader.onerror = () => reject(/* @__PURE__ */ new Error("그림을 읽지 못함"));
	reader.readAsDataURL(file);
});
var loadImage = (url) => new Promise((resolve, reject) => {
	const img = new Image();
	img.onload = () => resolve(img);
	img.onerror = () => reject(/* @__PURE__ */ new Error("그림을 열지 못함"));
	img.src = url;
});
function drawTo(img, edge, type, quality) {
	const long = Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height);
	const scale = long > edge ? edge / long : 1;
	const w = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
	const h = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0, 0, w, h);
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = "high";
	ctx.drawImage(img, 0, 0, w, h);
	return {
		url: canvas.toDataURL(type, quality),
		width: w,
		height: h
	};
}
async function shrinkImageFile(file, maxBytes = MAX_UPLOAD_BYTES) {
	const first = await readAsDataUrl(file);
	const fromBytes = file.size || dataUrlBytes(first);
	const mime = file.type === "image/png" ? "image/png" : "image/jpeg";
	if (fromBytes <= maxBytes) return {
		dataUrl: first,
		mime: file.type || mime,
		bytes: fromBytes,
		shrunk: false,
		from: fromBytes
	};
	const img = await loadImage(first);
	let best = null;
	for (const edge of EDGES) for (const quality of QUALITY) {
		const out = drawTo(img, edge, "image/jpeg", quality);
		const bytes = dataUrlBytes(out.url);
		best = {
			dataUrl: out.url,
			mime: "image/jpeg",
			bytes,
			width: out.width,
			height: out.height,
			shrunk: true,
			from: fromBytes
		};
		if (bytes <= maxBytes) return best;
	}
	return best;
}
var sizeLabel = (bytes) => bytes >= 1048576 ? `${Math.round(bytes / 1048576 * 10) / 10}MB` : `${Math.max(1, Math.round(bytes / 1024))}KB`;
//#endregion
//#region src/components/review/NoticeForm.jsx
var toDataUrl = (file) => new Promise((resolve) => {
	const reader = new FileReader();
	reader.onload = () => resolve(String(reader.result || ""));
	reader.readAsDataURL(file);
});
function NoticeForm({ busy, onRead }) {
	const [text, setText] = (0, import_react.useState)("");
	const [image, setImage] = (0, import_react.useState)(null);
	const [mime, setMime] = (0, import_react.useState)("");
	const [ocrHint, setOcrHint] = (0, import_react.useState)("");
	const [sourceName, setSourceName] = (0, import_react.useState)("");
	const [sourceUrl, setSourceUrl] = (0, import_react.useState)("");
	const [sample, setSample] = (0, import_react.useState)("");
	const [drop, setDrop] = (0, import_react.useState)(false);
	const [shrinkNote, setShrinkNote] = (0, import_react.useState)("");
	const fileRef = (0, import_react.useRef)(null);
	const takeFile = async (file) => {
		if (!file || !file.type.startsWith("image/")) return;
		setSample("");
		setOcrHint("");
		try {
			const out = await shrinkImageFile(file, MAX_UPLOAD_BYTES);
			setImage(out.dataUrl);
			setMime(out.mime);
			setShrinkNote(out.shrunk ? `그림 ${sizeLabel(out.from)} 에서 ${sizeLabel(out.bytes)} 로 줄여 올림, ${out.width}x${out.height}` : "");
		} catch {
			setImage(await toDataUrl(file));
			setMime(file.type);
			setShrinkNote("");
		}
	};
	const loadSample = async (s) => {
		if (busy) return;
		setSample(s.label);
		setSourceName(s.sourceName);
		setSourceUrl(s.sourceUrl);
		if (s.kind === "text") {
			setText(s.text);
			setImage(null);
			setMime("");
			setOcrHint("");
			onRead({
				text: s.text,
				sourceName: s.sourceName,
				sourceUrl: s.sourceUrl,
				sampleLabel: s.label
			});
			return;
		}
		setText("");
		setMime("image/png");
		setOcrHint(s.ocrHint || "");
		const blob = await (await fetch(s.image)).blob();
		const url = await toDataUrl(new File([blob], "notice.png", { type: "image/png" }));
		setImage(url);
		onRead({
			imageBase64: url.split(",")[1],
			imagePreview: url,
			mime: "image/png",
			ocrHint: s.ocrHint || "",
			sourceName: s.sourceName,
			sourceUrl: s.sourceUrl,
			sampleLabel: s.label
		});
	};
	const ready = Boolean(text.trim() || image);
	const submit = () => {
		if (!ready || busy) return;
		onRead({
			text: text.trim(),
			imageBase64: image ? image.split(",")[1] : void 0,
			imagePreview: image,
			mime: image ? mime : void 0,
			ocrHint,
			sourceName: sourceName.trim(),
			sourceUrl: sourceUrl.trim(),
			sampleLabel: sample
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				label: "공지 글",
				rows: 7,
				value: text,
				onChange: (e) => {
					setText(e.target.value);
					if (sample) setSample("");
				},
				placeholder: "시설 누리집 공지 글 붙여넣기"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 type-caption text-text-sec",
					children: "안내 그림"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onDragOver: (e) => {
						e.preventDefault();
						setDrop(true);
					},
					onDragLeave: () => setDrop(false),
					onDrop: (e) => {
						e.preventDefault();
						setDrop(false);
						takeFile(e.dataTransfer.files?.[0]);
					},
					className: clsx("flex min-h-32 flex-col items-center justify-center gap-2 rounded-lg p-4 text-center transition-colors duration-fast", drop ? "bg-primary-soft" : "bg-subtle"),
					children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: "올린 안내 그림",
						className: "max-h-40 w-full rounded-md object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							size: 16,
							"aria-hidden": "true"
						}),
						onClick: () => {
							setImage(null);
							setMime("");
							setOcrHint("");
							setSample("");
							setShrinkNote("");
						},
						children: "그림 지우기"
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
							size: 24,
							"aria-hidden": "true",
							className: "text-text-meta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-body-sm text-text-sec",
							children: "배너 그림 끌어다 놓기"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => fileRef.current?.click(),
							children: "그림 고르기"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "image/*",
						className: "hidden",
						onChange: (e) => takeFile(e.target.files?.[0])
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 type-caption text-text-meta",
					children: shrinkNote || "4MB 를 넘는 그림은 올리기 전에 자동으로 줄임"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 cq-md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "공지 이름",
					value: sourceName,
					onChange: (e) => setSourceName(e.target.value),
					placeholder: "동해시 공고 제2026-0000호"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "누리집 주소",
					value: sourceUrl,
					onChange: (e) => setSourceUrl(e.target.value),
					placeholder: "https://dh.go.kr/www/notice/0000"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "type-body-strong text-text-pri",
				children: "견본 공지"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "-mx-3 mt-1",
				children: SAMPLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
					dense: true,
					onClick: () => loadSample(s),
					title: s.label,
					sub: s.sourceName,
					value: sample === s.label ? "읽는 중" : "읽기"
				}) }, s.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					loading: busy,
					disabled: !ready,
					onClick: submit,
					children: "읽기"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-body-sm text-text-sec",
					children: "읽기 뒤 담당자 확인 한 번으로 반영"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/review/HighlightedNotice.jsx
function slice(text, marks) {
	const spans = [];
	for (const m of marks) {
		if (!m.quote) continue;
		const at = text.indexOf(m.quote);
		if (at < 0) continue;
		if (spans.some((s) => at < s.end && at + m.quote.length > s.start)) {
			const same = spans.find((s) => s.start === at && s.end === at + m.quote.length);
			if (same && m.active) same.active = true;
			continue;
		}
		spans.push({
			start: at,
			end: at + m.quote.length,
			active: m.active,
			field: m.field
		});
	}
	spans.sort((a, b) => a.start - b.start);
	const out = [];
	let cur = 0;
	for (const s of spans) {
		if (s.start > cur) out.push({ text: text.slice(cur, s.start) });
		out.push({
			text: text.slice(s.start, s.end),
			mark: true,
			active: s.active
		});
		cur = s.end;
	}
	if (cur < text.length) out.push({ text: text.slice(cur) });
	return out;
}
function HighlightedNotice({ text = "", marks = [], className }) {
	const parts = slice(text, marks);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: clsx("whitespace-pre-wrap break-words type-body-sm text-text-sec", className),
		children: parts.map((p, i) => p.mark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
			className: clsx("rounded-xs px-0.5", p.active ? "bg-primary text-text-inverse" : "bg-primary-soft text-primary-text"),
			children: p.text
		}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.text }, i))
	});
}
//#endregion
//#region src/components/review/OriginalNotice.jsx
var OriginalNotice = (0, import_react.forwardRef)(function OriginalNotice({ text = "", marks = [], imagePreview, box, source, title = "원본 공지" }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		tabIndex: -1,
		"aria-label": "원본 공지",
		className: "flex min-h-0 min-w-0 flex-col focus:outline-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 shrink-0 type-caption text-text-sec",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto pr-1",
				children: [
					imagePreview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-3 w-full overflow-hidden rounded-md bg-mute",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: imagePreview,
							alt: "올린 안내 그림",
							className: "block h-auto w-full"
						}), box && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "absolute rounded-xs bg-primary/10 ring-2 ring-primary",
							style: {
								left: `${box[0]}%`,
								top: `${box[1]}%`,
								width: `${box[2]}%`,
								height: `${box[3]}%`
							}
						})]
					}),
					imagePreview && text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 type-caption text-text-sec",
						children: "그림에서 읽은 글"
					}),
					text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HighlightedNotice, {
						text,
						marks
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-body-sm text-text-sec",
						children: "원문 글 없음"
					})
				]
			}),
			source?.name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 flex shrink-0 flex-wrap items-baseline gap-x-3 type-meta text-text-sec",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["출처 ", source.name] }), source.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: source.url,
					target: "_blank",
					rel: "noreferrer",
					className: "text-primary-text underline underline-offset-2",
					children: "누리집 열기"
				})]
			})
		]
	});
});
//#endregion
//#region src/components/review/evidence.js
var STATUS_WORDS = {
	closed: [
		"휴관",
		"휴무",
		"휴업",
		"운영 중단",
		"이용 중단",
		"미운영",
		"운영하지 않",
		"진료하지 않",
		"문을 닫",
		"이용할 수 없",
		"사용할 수 없"
	],
	partial: [
		"일부",
		"제한 운영",
		"부분 운영",
		"이용할 수 없",
		"사용할 수 없"
	],
	hours: [
		"운영시간",
		"운영 시간",
		"단축 운영",
		"시간 변경",
		"시간 조정"
	],
	open: [
		"정상 운영",
		"다시 운영",
		"재개",
		"운영을 재개"
	]
};
var dotted = (v) => v ? String(v).replaceAll("-", ". ") + "." : "";
function lineWith(text, needle) {
	if (!text || !needle) return null;
	const at = text.indexOf(needle);
	if (at < 0) return null;
	const from = text.lastIndexOf("\n", at) + 1;
	const to = text.indexOf("\n", at);
	return text.slice(from, to < 0 ? text.length : to).trim() || null;
}
function find(text, candidates) {
	for (const c of candidates) {
		if (!c) continue;
		const line = lineWith(text, c);
		if (line) return {
			quote: line,
			found: true
		};
	}
	return null;
}
function buildEvidence({ item, text, facilityName, values }) {
	const given = Object.fromEntries((item.evidence || []).map((e) => [e.field, e]));
	const out = {};
	const put = (key, server, guesses) => {
		if (server?.quote && server.found && text.includes(server.quote)) {
			out[key] = {
				quote: server.quote,
				found: true
			};
			return;
		}
		const mine = find(text, guesses);
		if (mine) {
			out[key] = mine;
			return;
		}
		out[key] = {
			quote: server?.quote || "",
			found: false
		};
	};
	put("facility", given.facility, [facilityName, item.facilityText]);
	put("status", given.status, STATUS_WORDS[values.status] || []);
	put("period", given.period, [
		dotted(values.start),
		values.start,
		dotted(values.end),
		values.end
	]);
	put("scope", given.scope, [values.scope]);
	put("reason", given.reason, [values.reason]);
	put("alternative", given.alternative, [values.alternativeText]);
	put("hours", given.hours, [values.hours]);
	return out;
}
//#endregion
//#region src/components/review/ReadResult.jsx
var STATUS_OPTIONS = [
	{
		value: "closed",
		label: "운영 중단"
	},
	{
		value: "partial",
		label: "일부 이용"
	},
	{
		value: "hours",
		label: "운영 시간 변경"
	},
	{
		value: "open",
		label: "정상 운영"
	}
];
var ROWS = [
	{
		key: "facility",
		label: "시설",
		kind: "facility",
		ev: "facility"
	},
	{
		key: "status",
		label: "상태",
		kind: "status",
		ev: "status"
	},
	{
		key: "period",
		label: "기간",
		kind: "period",
		ev: "period"
	},
	{
		key: "scope",
		label: "이용 불가 범위",
		kind: "text",
		ev: "scope"
	},
	{
		key: "reason",
		label: "사유",
		kind: "text",
		ev: "reason"
	},
	{
		key: "alternativeText",
		label: "대신 갈 곳",
		kind: "text",
		ev: "alternative"
	}
];
var statusLabel = (id) => STATUS_OPTIONS.find((s) => s.value === id)?.label || "운영 중단";
function parseDate(v) {
	const n = String(v || "").match(/(20\d{2})\D+(\d{1,2})\D+(\d{1,2})/);
	if (!n) return null;
	return `${n[1]}-${String(n[2]).padStart(2, "0")}-${String(n[3]).padStart(2, "0")}`;
}
function ReadResult({ entry, facilities = [], applying, onApply, onReject, onShowQuote }) {
	const item = entry.item;
	const noticeText = entry.noticeText || "";
	const [values, setValues] = (0, import_react.useState)(() => ({
		facilityId: entry.facilityId || item.candidates?.[0]?.id || "",
		status: item.status || "closed",
		start: item.start || null,
		end: item.end || null,
		hours: item.hours || "",
		scope: item.scope || "",
		reason: item.reason || "",
		alternativeText: item.alternativeText || ""
	}));
	const [edited, setEdited] = (0, import_react.useState)({});
	const [open, setOpen] = (0, import_react.useState)("");
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setValues({
			facilityId: entry.facilityId || item.candidates?.[0]?.id || "",
			status: item.status || "closed",
			start: item.start || null,
			end: item.end || null,
			hours: item.hours || "",
			scope: item.scope || "",
			reason: item.reason || "",
			alternativeText: item.alternativeText || ""
		});
		setEdited({});
		setOpen("");
	}, [entry.id]);
	const byId = (0, import_react.useMemo)(() => Object.fromEntries(facilities.map((f) => [f.id, f])), [facilities]);
	const evidence = (0, import_react.useMemo)(() => buildEvidence({
		item,
		text: noticeText,
		facilityName: byId[values.facilityId]?.name,
		values
	}), [
		item,
		noticeText,
		byId,
		values
	]);
	const search = (0, import_react.useMemo)(() => {
		const q = query.trim();
		if (!q) return [];
		return facilities.filter((f) => f.name.includes(q)).slice(0, 6);
	}, [facilities, query]);
	const periodText = values.start ? `${dotDate(values.start)} 부터 ${values.end ? `${dotDate(values.end)} 까지` : "다시 알릴 때까지"}` : "";
	const rawValue = (key) => {
		if (key === "facility") return byId[values.facilityId]?.name || item.facilityText || "";
		if (key === "status") return statusLabel(values.status);
		if (key === "period") return periodText;
		return values[key] || "";
	};
	const state = (key) => {
		const value = rawValue(key);
		if (key === "facility") return values.facilityId ? edited.facility ? "hand" : "ok" : "missing";
		if (!value) return "empty";
		if (edited[key]) return "hand";
		return evidence[ROWS.find((r) => r.key === key)?.ev]?.found ? "ok" : "missing";
	};
	const changed = Object.keys(edited).length > 0;
	const need = ROWS.filter((r) => state(r.key) === "missing");
	const blocked = need.length > 0 || !values.facilityId;
	const setValue = (key, v) => {
		setValues((s) => ({
			...s,
			[key]: v
		}));
		setEdited((s) => ({
			...s,
			[key]: true
		}));
	};
	const apply = () => {
		const facility = byId[values.facilityId];
		onApply({
			facilityId: values.facilityId,
			facilityName: facility?.name || item.facilityText,
			status: values.status,
			start: values.start,
			end: values.end,
			hours: values.hours,
			scope: values.scope,
			reason: values.reason,
			alternativeText: values.alternativeText,
			source: {
				name: entry.source?.name || "",
				url: entry.source?.url || "",
				quote: evidence.status?.found ? evidence.status.quote : evidence.period?.quote || ""
			}
		});
	};
	const editor = (row) => {
		if (row.kind === "status") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
			label: "상태",
			value: values.status,
			options: STATUS_OPTIONS,
			onChange: (v) => {
				setValue("status", v);
				setOpen("");
			}
		});
		if (row.kind === "facility") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "시설 이름으로 찾기",
				compact: true,
				value: query,
				onChange: (e) => setQuery(e.target.value),
				placeholder: "시설 이름",
				leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					size: 16,
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "-mx-2 flex flex-col",
				children: [search.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setValues((s) => ({
							...s,
							facilityId: f.id
						}));
						setEdited((s) => ({
							...s,
							facility: true
						}));
						setOpen("");
						setQuery("");
					},
					className: "flex min-h-11 w-full flex-col justify-center rounded-lg px-2 text-left hover:bg-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "type-body-sm text-text-pri",
						children: f.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "type-meta text-text-sec",
						children: f.addr
					})]
				}) }, f.id)), (item.candidates || []).filter((c) => !query).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setValues((s) => ({
							...s,
							facilityId: c.id
						}));
						setEdited((s) => ({
							...s,
							facility: true
						}));
						setOpen("");
					},
					className: "flex min-h-11 w-full flex-col justify-center rounded-lg px-2 text-left hover:bg-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "type-body-sm text-text-pri",
						children: byId[c.id]?.name || c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "type-meta text-text-sec",
						children: byId[c.id]?.addr || "후보 시설"
					})]
				}) }, c.id))]
			})]
		});
		if (row.kind === "period") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 cq-sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "시작일",
				compact: true,
				defaultValue: values.start ? dotDate(values.start) : "",
				placeholder: "2026. 11. 24.",
				onChange: (e) => setValue("start", parseDate(e.target.value))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "종료일",
				compact: true,
				defaultValue: values.end ? dotDate(values.end) : "",
				placeholder: "2026. 12. 12.",
				onChange: (e) => setValue("end", parseDate(e.target.value))
			})]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			label: row.label,
			compact: true,
			defaultValue: values[row.key] || "",
			placeholder: "값 적기",
			onChange: (e) => setValue(row.key, e.target.value)
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "읽은 결과",
		className: "flex min-h-0 min-w-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "min-w-0 flex-1 truncate type-title text-text-pri",
				children: rawValue("facility") || "시설 미확인"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex shrink-0 items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onReject,
						children: "제외"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						disabled: !changed,
						onClick: apply,
						children: "수정"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-confirm": "1",
						variant: "primary",
						disabled: blocked || changed,
						loading: applying,
						onClick: apply,
						children: "확인"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 space-y-4 overflow-y-auto pr-1",
			children: [need.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "alert",
				className: "rounded-md bg-warning-soft px-4 py-3 text-warning-text",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "type-strong",
					children: [
						"확인 필요 ",
						need.length,
						"개"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-1 space-y-1",
					children: need.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-body-sm",
						children: r.key === "facility" ? "시설 연결 안 됨" : `${r.label} 근거 문장 없음`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => r.key === "facility" ? setOpen("facility") : onShowQuote?.(),
						className: "min-h-11 rounded-md type-meta underline underline-offset-2 md:min-h-0",
						children: ["확인할 곳: ", r.key === "facility" ? "시설 고치기" : "원본 공지"]
					})] }, r.key))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid min-w-0",
				children: ROWS.map((row) => {
					const st = state(row.key);
					const value = rawValue(row.key);
					const ev = evidence[row.ev];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid min-h-14 grid-cols-1 items-baseline gap-x-6 py-2 cq-md:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "type-body-sm text-text-sec",
							children: row.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-wrap items-baseline gap-x-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: clsx("type-body-strong tabular-nums", st === "missing" ? "text-danger-text" : "text-text-pri"),
										children: value || "원문에 없음"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setOpen(open === row.key ? "" : row.key),
										className: "inline-flex min-h-8 items-center gap-1 rounded-md type-meta text-text-sec hover:text-text-pri",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
											size: 14,
											"aria-hidden": "true"
										}), "고치기"]
									})]
								}),
								ev?.quote && st !== "hand" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block type-meta text-text-sec",
									children: `"${ev.quote}"`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: clsx("mt-0.5 inline-flex items-center gap-1 type-meta", st === "missing" ? "text-danger-text" : "text-text-sec"),
									children: [
										st === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											size: 14,
											"aria-hidden": "true"
										}), "공지 원문 일치"] }),
										st === "missing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
											size: 14,
											"aria-hidden": "true"
										}), "원문에서 찾지 못함, 고친 뒤 반영"] }),
										st === "hand" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "담당자 직접 입력" })
									]
								}),
								open === row.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block",
									children: editor(row)
								})
							]
						})]
					}, row.key);
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/review/AppliedPanel.jsx
var TABS = [
	{
		id: "easy",
		label: "쉬운 말"
	},
	{
		id: "sms",
		label: "문자 90자"
	},
	{
		id: "print",
		label: "인쇄용"
	}
];
var statusText = (id) => STATUS_OPTIONS.find((s) => s.value === id)?.label || "운영 중단";
var stamp = (iso) => {
	const d = new Date(iso);
	return `${dotDate(d)} ${d.getHours()}시 ${String(d.getMinutes()).padStart(2, "0")}분`;
};
function AppliedPanel({ event, announce, facility, facilities = [], roleLabel, onCancel, onNext, onCopied }) {
	const [tab, setTab] = (0, import_react.useState)("easy");
	const byId = (0, import_react.useMemo)(() => Object.fromEntries(facilities.map((f) => [f.id, f])), [facilities]);
	const alts = (0, import_react.useMemo)(() => alternativesOf(facility, byId).slice(0, 4), [facility, byId]);
	const span = event.start ? `${dotDate(event.start)} 부터 ${event.end ? `${dotDate(event.end)} 까지` : "다시 알릴 때까지"}` : "오늘부터";
	const body = announce?.[tab] || "";
	const copy = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			return;
		}
		onCopied?.();
	};
	const print = () => {
		const win = window.open("", "_blank", "width=720,height=900");
		if (!win) return;
		const safe = (s) => String(s || "").replace(/[&<>]/g, (c) => ({
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;"
		})[c]);
		win.document.open();
		win.document.write("<!doctype html><html lang=\"ko\"><head><meta charset=\"utf-8\"><title>" + safe(event.facilityName) + " 안내문</title><style>body{margin:0;padding:48px;font-family:\"Pretendard GOV\",\"Pretendard\",sans-serif;color:" + colors.text.pri + "}h1{font-size:52px;font-weight:800;letter-spacing:-0.035em;line-height:1.14;margin:0 0 32px}p{font-size:36px;font-weight:600;letter-spacing:-0.02em;line-height:1.6;margin:0 0 20px;white-space:pre-wrap}</style></head><body><h1>" + safe(event.facilityName) + "</h1><p>" + safe(announce?.print || "") + "</p></body></html>");
		win.document.close();
		win.focus();
		win.print();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "반영 완료",
		className: "flex min-h-0 min-w-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
					tone: "primary",
					children: "반영 완료"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "min-w-0 flex-1 type-title text-text-pri",
					children: [
						"시민 화면 반영 완료, 대신 갈 곳 ",
						alts.length,
						"곳"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex shrink-0 items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, {
								size: 16,
								"aria-hidden": "true"
							}),
							onClick: onCancel,
							children: "반영 취소"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: onNext,
							children: "다음 공지"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							as: Link,
							to: `/place/${event.facilityId}`,
							rightIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								size: 16,
								"aria-hidden": "true"
							}),
							children: "시민 화면에서 보기"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto pr-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
					title: "반영 내용",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRows, { rows: [
						{
							key: "f",
							label: "시설",
							value: event.facilityName,
							strong: true
						},
						{
							key: "s",
							label: "상태",
							value: statusText(event.status)
						},
						{
							key: "p",
							label: "기간",
							value: span
						},
						...event.scope ? [{
							key: "c",
							label: "이용 불가 범위",
							value: event.scope
						}] : [],
						...event.reason ? [{
							key: "r",
							label: "사유",
							value: event.reason
						}] : [],
						...event.source?.quote ? [{
							key: "q",
							label: "공지 문장",
							value: `"${event.source.quote}"`
						}] : [],
						{
							key: "t",
							label: "확인 시각",
							value: stamp(event.confirmedAt)
						}
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
					title: "같은 역할의 대신 갈 곳",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "-mx-3",
						children: [alts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
							dense: true,
							to: `/admin/facilities/${a.facilityId}`,
							title: a.facility?.name || "가까운 시설",
							sub: [roleLabel?.(a.role) || a.role, a.facility?.dong].filter(Boolean).join(", "),
							value: km(a.distM)
						}) }, a.role + a.facilityId)), !alts.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-3 type-body-sm text-text-sec",
							children: "등록된 대체 시설 없음, 안내문에 전화 문의 추가"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailSection, {
					title: "안내문",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-1",
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": tab === t.id,
							onClick: () => setTab(t.id),
							className: clsx("h-9 rounded-lg px-3 type-body-sm transition-colors duration-fast", tab === t.id ? "bg-mute font-bold text-text-pri" : "text-text-sec hover:bg-subtle"),
							children: t.label
						}, t.id))
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: clsx("whitespace-pre-wrap rounded-lg bg-subtle p-4 text-text-pri", tab === "print" ? "type-h3" : "type-body-sm"),
						children: body
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
									size: 16,
									"aria-hidden": "true"
								}),
								onClick: () => copy(body),
								children: "복사"
							}),
							tab === "print" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
									size: 16,
									"aria-hidden": "true"
								}),
								onClick: print,
								children: "인쇄"
							}),
							tab === "sms" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "type-meta text-text-sec tabular-nums",
								children: [body.length, "자"]
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/review/QueueList.jsx
var TONE = {
	diff: "text-danger-text",
	check: "text-text-pri",
	ok: "text-text-sec",
	done: "text-primary-text"
};
function QueueList({ items, selectedId, onSelect, onConfirm, title = "확인 대기", action }) {
	const listRef = (0, import_react.useRef)(null);
	const pos = Math.max(0, items.findIndex((x) => x.id === selectedId));
	const move = (next) => {
		const n = Math.max(0, Math.min(items.length - 1, next));
		const t = items[n];
		if (!t) return;
		onSelect(t.id);
		requestAnimationFrame(() => listRef.current?.querySelectorAll("[role=\"option\"]")[n]?.focus());
	};
	const onKey = (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			move(pos + 1);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			move(pos - 1);
		} else if (e.key === "Home") {
			e.preventDefault();
			move(0);
		} else if (e.key === "End") {
			e.preventDefault();
			move(items.length - 1);
		} else if (e.key === "Enter" && e.target.getAttribute?.("aria-selected") === "true") {
			e.preventDefault();
			onConfirm?.();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "확인 대기 목록",
		className: "flex min-h-0 flex-col max-lg:max-h-[40vh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-baseline justify-between gap-2 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "type-title text-text-pri",
					children: [
						title,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-normal tabular-nums text-text-sec",
							children: [items.length, "건"]
						})
					]
				}), action]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 pb-2 type-body-sm text-text-sec",
				children: "위아래 키 이동, Enter 확인"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				ref: listRef,
				role: "listbox",
				"aria-label": "확인 대기 항목",
				onKeyDown: onKey,
				className: "min-h-0 flex-1 space-y-0.5 overflow-y-auto pr-1",
				children: [items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					role: "presentation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "option",
						"aria-selected": i === pos,
						tabIndex: i === pos ? 0 : -1,
						onClick: () => onSelect(it.id),
						className: clsx("flex min-h-[56px] w-full items-center gap-3 rounded-xl px-3 py-1.5 text-left transition-colors duration-fast", i === pos ? "bg-mute" : "hover:bg-subtle"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: clsx("block truncate type-body text-text-pri", i === pos && "font-bold"),
								children: it.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate type-body-sm text-text-sec",
								children: it.sub
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: clsx("shrink-0 type-body-sm font-bold", TONE[it.state] || TONE.ok),
							children: it.stateLabel
						})]
					})
				}, it.id)), !items.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-3 py-6 type-body-sm text-text-sec",
					children: "확인 대기 항목 없음"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/console/ReviewScreen.jsx
var emptyItem = {
	facilityText: "",
	candidates: [],
	status: "closed",
	start: null,
	end: null,
	hours: "",
	scope: "",
	reason: "",
	alternativeText: "",
	evidence: []
};
function fromNotice(it) {
	const e = it.event || {};
	const text = [
		`${it.facility.name} 운영 중단 공고(${e.kind || "운영 변경"})`,
		e.cause ? `사유: ${e.cause}` : "",
		e.start ? `기간: ${dotDate(e.start)} 부터 ${e.end ? `${dotDate(e.end)} 까지` : "미정"}` : "",
		e.notice ? `공고일: ${dotDate(e.notice)}` : "",
		e.source ? `출처: ${e.source}` : ""
	].filter(Boolean).join("\n");
	return {
		id: it.id,
		kind: it.kind,
		facilityId: it.facility.id,
		title: it.facility.name,
		sub: `${it.facility.dong || "동 미상"}, ${it.kind}`,
		state: e.certainty === "예정" ? "check" : "ok",
		stateLabel: it.kind === "대장 확인" ? "대장과 다름" : "착공 확인 필요",
		noticeText: text,
		source: {
			name: e.source || "",
			url: e.url || ""
		},
		item: {
			...emptyItem,
			facilityText: it.facility.name,
			candidates: [{
				id: it.facility.id,
				name: it.facility.name,
				score: 1
			}],
			status: "closed",
			start: e.start || null,
			end: e.end || null,
			reason: e.cause || e.kind || "",
			evidence: []
		}
	};
}
function ReviewScreen() {
	const { data } = useStrata();
	const toast = useToast();
	const facilities = data.facilities || [];
	const label = (id) => roleLabel(data, id);
	const [uploadOpen, setUploadOpen] = (0, import_react.useState)(false);
	const [reading, setReading] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)("");
	const reads = useReviewQueue((s) => s.uploaded);
	const removed = useReviewQueue((s) => s.removed);
	const applied = useReviewQueue((s) => s.applied);
	const addUploaded = useReviewQueue((s) => s.addUploaded);
	const removeItem = useReviewQueue((s) => s.remove);
	const setApplied = useReviewQueue((s) => s.setApplied);
	const clearApplied = useReviewQueue((s) => s.clearApplied);
	const [applying, setApplying] = (0, import_react.useState)(false);
	const [selectedId, setSelectedId] = (0, import_react.useState)("");
	const noticeRef = (0, import_react.useRef)(null);
	const dataItems = (0, import_react.useMemo)(() => reviewItems(facilities).map(fromNotice), [facilities]);
	const queue = (0, import_react.useMemo)(() => {
		const keep = new Set(pendingReview(facilities, {
			uploaded: reads,
			removed
		}));
		return [...reads, ...dataItems].filter((x) => keep.has(x.id));
	}, [
		facilities,
		reads,
		dataItems,
		removed
	]);
	const current = queue.find((x) => x.id === selectedId) || queue[0] || null;
	(0, import_react.useEffect)(() => {
		if (current && current.id !== selectedId) setSelectedId(current.id);
	}, [current, selectedId]);
	const doneCount = Object.keys(applied).length;
	const stepStatus = reading ? "read" : queue.length ? "confirm" : "upload";
	const steps = [
		{
			key: "upload",
			label: `공지 올리기 ${reads.length}건`
		},
		{
			key: "read",
			label: "AI 읽기"
		},
		{
			key: "confirm",
			label: `담당자 확인 ${queue.length}건`
		}
	];
	const run = async (payload) => {
		setFailed("");
		setReading(true);
		try {
			const { data: res } = await readNotice({
				text: payload.text || void 0,
				imageBase64: payload.imageBase64,
				mime: payload.mime,
				ocrHint: payload.ocrHint || void 0,
				sourceName: payload.sourceName || void 0,
				sourceUrl: payload.sourceUrl || void 0
			});
			const item = res.items?.[0] || emptyItem;
			const noticeText = res.readText || payload.text || payload.ocrHint || "";
			const ev = buildEvidence({
				item,
				text: noticeText,
				facilityName: item.candidates?.[0]?.name,
				values: { ...item }
			});
			const missing = [
				"facility",
				"status",
				"period"
			].filter((k) => !ev[k]?.found).length;
			const id = `R${Date.now()}`;
			const entry = {
				id,
				kind: "공지 판독",
				title: item.candidates?.[0]?.name || item.facilityText || "시설 미확인",
				sub: `${payload.sourceName || "올린 공지"}, ${todayLabel()}`,
				state: missing ? "diff" : "ok",
				stateLabel: missing ? "공지와 다름" : "공지 원문 일치",
				noticeText,
				imagePreview: payload.imagePreview,
				source: {
					name: payload.sourceName,
					url: payload.sourceUrl
				},
				item
			};
			addUploaded(entry);
			setSelectedId(id);
			setUploadOpen(false);
			toast(`공지 읽기 완료, 확인 대기 ${queue.length + 1}건`, "primary");
		} catch {
			setFailed("공지를 읽지 못함, 글을 다시 올리거나 값 직접 입력");
		} finally {
			setReading(false);
		}
	};
	const apply = async (draft) => {
		if (!current) return;
		setApplying(true);
		const event = {
			id: `S${Date.now()}`,
			...draft,
			confirmedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const saved = await saveStatus(event);
			const note = await makeAnnounce(event);
			setApplied(current.id, {
				event: {
					...saved.data?.event || event,
					facilityName: draft.facilityName
				},
				announce: note.data
			});
			toast("시민 화면 반영 완료", "primary");
		} catch {
			toast("반영 실패, 잠시 뒤 다시 확인");
		} finally {
			setApplying(false);
		}
	};
	const cancel = async () => {
		const done = applied[current.id];
		if (!done) return;
		try {
			await cancelStatus(done.event.id);
		} catch {
			toast("반영 취소 실패");
			return;
		}
		clearApplied(current.id);
		toast("반영 취소 완료");
	};
	const reject = () => {
		if (!current) return;
		removeItem(current.id);
		toast("확인 대기에서 제외 완료");
	};
	const next = () => {
		const rest = queue.filter((x) => x.id !== current.id && !applied[x.id]);
		setSelectedId(rest[0]?.id || "");
		if (!rest.length) setUploadOpen(true);
	};
	const done = current ? applied[current.id] : null;
	const facility = done ? facilities.find((f) => f.id === done.event.facilityId) : null;
	const marks = (0, import_react.useMemo)(() => {
		if (!current) return [];
		const ev = buildEvidence({
			item: current.item,
			text: current.noticeText || "",
			facilityName: current.title,
			values: { ...current.item }
		});
		return Object.values(ev).filter((x) => x.found).map((x) => ({
			quote: x.quote,
			active: false
		}));
	}, [current]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "판독함",
		hideHeader: true,
		className: "flex flex-col lg:h-full lg:pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "판독함",
				meta: todayLabel(),
				className: "!mb-3 shrink-0",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {
						size: 16,
						"aria-hidden": "true"
					}),
					onClick: () => setUploadOpen(true),
					children: "공지 올리기"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex shrink-0 flex-wrap items-end justify-between gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, {
					status: stepStatus,
					steps,
					className: "min-w-0 flex-1 basis-80"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "type-body-sm text-text-sec tabular-nums",
					children: [
						"처리 완료 ",
						doneCount,
						"건"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: uploadOpen,
				onClose: () => setUploadOpen(false),
				title: "공지 올리기",
				className: "max-w-[640px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoticeForm, {
					busy: reading,
					onRead: run
				}), failed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-3 rounded-md bg-danger-soft px-4 py-3 type-body-sm text-danger-text",
					children: failed
				})]
			}),
			reading && !uploadOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-2/3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-1/2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full" })
				]
			}),
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 gap-x-8 gap-y-4 lg:grid-cols-[minmax(240px,300px)_minmax(0,1fr)_minmax(320px,26rem)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueueList, {
						items: queue.map((x) => applied[x.id] ? {
							...x,
							state: "done",
							stateLabel: "반영 완료"
						} : x),
						selectedId: current.id,
						onSelect: setSelectedId,
						onConfirm: () => {
							if (!applied[current.id]) document.querySelector("button[data-confirm=\"1\"]")?.click();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OriginalNotice, {
						ref: noticeRef,
						text: current.noticeText,
						marks,
						imagePreview: current.imagePreview,
						source: current.source
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppliedPanel, {
						event: done.event,
						announce: done.announce,
						facility,
						facilities,
						roleLabel: label,
						onCancel: cancel,
						onNext: next,
						onCopied: () => toast("안내문 복사 완료")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadResult, {
						entry: current,
						facilities,
						applying,
						onApply: apply,
						onReject: reject,
						onShowQuote: () => noticeRef.current?.scrollIntoView({
							block: "center",
							behavior: "smooth"
						})
					}, current.id)
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "확인 대기 공지 없음",
				desc: "새 공지는 공지 올리기로 등록",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setUploadOpen(true),
					children: "공지 올리기"
				})
			})
		]
	});
}
//#endregion
export { ReviewScreen as default };

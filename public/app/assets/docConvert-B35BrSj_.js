//#region src/pages/workspace/docConvert.js
var TD = "border:1px solid #9ca3af;padding:6px 8px;vertical-align:top";
var TH = `${TD};background:#f3f4f6;font-weight:700`;
var TABLE = "border-collapse:collapse;width:100%;margin:12px 0;font-size:14px";
var esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
var ALLOWED_INLINE = [
	"br",
	"sup",
	"sub",
	"b",
	"strong",
	"i",
	"em",
	"u"
];
function inlineHtml(raw) {
	let s = esc(raw);
	s = s.replace(new RegExp(`&lt;(\\/?)(${ALLOWED_INLINE.join("|")})\\s*\\/?&gt;`, "gi"), (m, close, tag) => tag.toLowerCase() === "br" ? "<br>" : `<${close}${tag.toLowerCase()}>`);
	s = s.replace(/\\([\\`*_{}[\]()#+\-.!|<>~])/g, (m, c) => `&#${c.charCodeAt(0)};`);
	s = s.replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)\s]+)\)/g, (m, t, u) => `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`);
	s = s.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/(^|[^*])\*([^*\s][^*]*)\*(?!\*)/g, "$1<i>$2</i>");
	return s;
}
function cleanTableHtml(html) {
	const t = new DOMParser().parseFromString(html, "text/html").querySelector("table");
	if (!t) return "";
	const cell = (c) => {
		const span = ["colspan", "rowspan"].map((a) => {
			const v = parseInt(c.getAttribute(a) || "", 10);
			return v > 1 && v < 50 ? ` ${a}="${v}"` : "";
		}).join("");
		const tag = c.tagName === "TH" ? "th" : "td";
		const body = inlineHtml(c.innerHTML.replace(/<br\s*\/?>/gi, "&lt;br&gt;").replace(/<(?!\/?(?:sup|sub|b|strong|i|em|u)\b)[^>]*>/gi, "").replace(/&lt;br&gt;/g, "<br>").replace(/<(\/?)(sup|sub|b|strong|i|em|u)>/gi, "&lt;$1$2&gt;").replace(/&(?!lt;|gt;|amp;|quot;|#)/g, "&amp;"));
		return `<${tag}${span} style="${tag === "th" ? TH : TD}">${body}</${tag}>`;
	};
	return `<table style="${TABLE}"><tbody>${[...t.querySelectorAll("tr")].map((tr) => `<tr>${[...tr.children].filter((c) => /^(TD|TH)$/.test(c.tagName)).map(cell).join("")}</tr>`).join("")}</tbody></table>`;
}
var splitRow = (line) => {
	let s = line.trim();
	if (s.startsWith("|")) s = s.slice(1);
	if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);
	return s.split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, "|"));
};
var isSep = (line) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/.test(line) && line.includes("-");
function markdownToHtml(md) {
	const lines = String(md || "").replace(/\r\n?/g, "\n").split("\n");
	const out = [];
	let i = 0;
	const isBlank = (l) => !l || !l.trim();
	const listRe = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;
	while (i < lines.length) {
		const line = lines[i];
		if (isBlank(line)) {
			i++;
			continue;
		}
		if (/^\s*<table\b/i.test(line)) {
			const buf = [];
			while (i < lines.length) {
				buf.push(lines[i]);
				if (/<\/table>/i.test(lines[i])) {
					i++;
					break;
				}
				i++;
			}
			const t = cleanTableHtml(buf.join("\n"));
			if (t) out.push(t);
			continue;
		}
		const h = line.match(/^\s{0,3}(#{1,6})\s+(.*?)\s*#*\s*$/);
		if (h) {
			const text = inlineHtml(h[2]);
			if (h[1].length === 1) out.push(`<h1>${text}</h1>`);
			else if (h[1].length === 2) out.push(`<h2>${text}</h2>`);
			else out.push(`<p><b>${text}</b></p>`);
			i++;
			continue;
		}
		if (line.includes("|") && i + 1 < lines.length && isSep(lines[i + 1])) {
			const head = splitRow(line);
			i += 2;
			const body = [];
			while (i < lines.length && !isBlank(lines[i]) && lines[i].includes("|")) {
				body.push(splitRow(lines[i]));
				i++;
			}
			const cols = Math.max(head.length, ...body.map((r) => r.length));
			const fit = (r) => [...r, ...Array(cols - r.length).fill("")];
			out.push(`<table style="${TABLE}"><tbody><tr>${fit(head).map((c) => `<th style="${TH}">${inlineHtml(c)}</th>`).join("")}</tr>${body.map((r) => `<tr>${fit(r).map((c) => `<td style="${TD}">${inlineHtml(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
			continue;
		}
		if (listRe.test(line)) {
			const stack = [];
			let html = "";
			while (i < lines.length && !isBlank(lines[i]) && listRe.test(lines[i])) {
				const [, sp, mark, text] = lines[i].match(listRe);
				const indent = sp.replace(/\t/g, "  ").length;
				const ordered = /\d/.test(mark);
				while (stack.length && indent < stack[stack.length - 1].indent) html += `</li></${stack.pop().ordered ? "ol" : "ul"}>`;
				if (!stack.length || indent > stack[stack.length - 1].indent) {
					stack.push({
						indent,
						ordered
					});
					html += `<${ordered ? "ol" : "ul"}><li>`;
				} else html += "</li><li>";
				html += inlineHtml(text);
				i++;
			}
			while (stack.length) html += `</li></${stack.pop().ordered ? "ol" : "ul"}>`;
			out.push(html);
			continue;
		}
		const buf = [];
		while (i < lines.length && !isBlank(lines[i]) && !/^\s{0,3}#{1,6}\s/.test(lines[i]) && !listRe.test(lines[i]) && !/^\s*<table\b/i.test(lines[i]) && !(lines[i].includes("|") && i + 1 < lines.length && isSep(lines[i + 1]))) {
			buf.push(lines[i].replace(/^\s*>\s?/, "").replace(/\s{2,}$/, "<br>").trim());
			i++;
		}
		if (buf.length) out.push(`<p>${buf.map(inlineHtml).join(" ").replace(/&lt;br&gt;/g, "<br>")}</p>`);
	}
	return out.join("") || "<h1>제목 없는 문서</h1><p></p>";
}
var CITE = /「([^」]{2,60})」\s*((?:제\s*\d+\s*조(?:\s*의\s*\d+)?)(?:\s*제\s*\d+\s*항)?(?:\s*제\s*\d+\s*호)?)/g;
var ARTICLE_ONLY = /제\s*\d+\s*조/;
function findCitations(text) {
	const found = [];
	const seen = /* @__PURE__ */ new Set();
	for (const m of String(text).matchAll(CITE)) {
		const c = `${m[1].trim()} ${m[2].replace(/\s+/g, "")}`;
		if (!seen.has(c)) {
			seen.add(c);
			found.push(c);
		}
	}
	return {
		citations: found,
		hasArticle: ARTICLE_ONLY.test(text)
	};
}
var hashText = (s) => {
	let h = 5381;
	for (let i = 0; i < s.length; i++) h = (h * 33 ^ s.charCodeAt(i)) >>> 0;
	return `${s.length}:${h.toString(36)}`;
};
//#endregion
export { hashText as n, markdownToHtml as r, findCitations as t };

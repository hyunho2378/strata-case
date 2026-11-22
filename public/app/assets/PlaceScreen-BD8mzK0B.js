import { d as useNavigate, p as useParams, t as require_jsx_runtime } from "./jsx-runtime-CjhTEqEu.js";
import { a as placeMeta, c as dotDay, o as useCitizenModel, t as DesktopCitizen } from "./DesktopCitizen-CkJI-cU7.js";
import { J as telOf, K as routeLinks, b as Spinner, c as BottomAction, d as EmptyState, f as Figure, g as ListRow, h as List, m as InfoSheet, s as AppBar, x as useWide } from "./index-iSpUmSYP.js";
//#region src/mobile/citizen/CitizenPlace.jsx
var import_jsx_runtime = require_jsx_runtime();
function CitizenPlace() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { ready, byId, statusOf, roleLabel, altsOf, data } = useCitizenModel();
	const facility = byId[id] || null;
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {
		title: "시설",
		onBack: () => navigate(-1)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "main",
		className: "mob-content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { label: "시설 정보 불러오는 중" })
	})] });
	if (!facility) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {
		title: "시설",
		onBack: () => navigate("/")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "main",
		className: "mob-content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "찾는 시설 없음",
			body: "홈에서 다시 찾기"
		})
	})] });
	const status = statusOf(facility);
	const { tel, name: telName } = telOf(facility);
	const links = routeLinks(facility);
	const alts = status.code === "open" ? [] : altsOf(facility, 3);
	const roles = facility.roles || [];
	const sources = [...new Set(roles.map((r) => r.source).filter(Boolean))].map((sid) => (data.sources || []).find((s) => s.id === sid)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {
		title: facility.name,
		onBack: () => navigate(-1)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mob-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				label: [facility.type, facility.dong].filter(Boolean).join(", "),
				value: status.line,
				caption: [status.planned?.detail, status.basis?.text].filter(Boolean).join("\n"),
				tone: status.code === "closed" ? "red" : void 0
			}),
			status.code !== "open" && !alts.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "대신 갈 곳",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, { title: "같은 역할 시설 없음" })
			}),
			alts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mob-section-title mob-t-headline",
				children: [
					"대신 갈 곳 ",
					alts.length,
					"곳"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "대신 갈 곳",
				children: alts.map(({ f, st, distM }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: f.name,
					subtitle: st.line,
					meta: placeMeta(f, distM),
					chevron: true,
					onClick: () => navigate(`/place/${f.id}`)
				}, f.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(List, {
				label: "운영 정보",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						title: "운영시간",
						subtitle: status.hours?.text || "전화 확인"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						title: "주소",
						subtitle: facility.addr || "전화 확인"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						title: "전화",
						subtitle: `${telName} ${tel}`
					})
				]
			}),
			roles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "맡은 역할",
				children: roles.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: r.subLabel || roleLabel(r.role),
					subtitle: [r.cap ? `${r.cap}명` : "", facility.space || ""].filter(Boolean).join(", ") || "자리 정보 전화 확인"
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				label: "확인한 자료",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSheet, {
					title: "확인한 자료",
					summary: status.basis?.sourceName || sources[0]?.label || "공개 자료",
					sheetTitle: "확인한 자료",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mob-stack",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mob-t-body",
								children: status.basis?.text || ""
							}),
							status.basis?.quote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mob-t-sub",
								children: status.basis.quote
							}),
							status.basis?.checkedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mob-t-sub",
								children: [dotDay(status.basis.checkedAt), " 확인"]
							}),
							sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mob-t-sub",
								children: [
									s.label,
									", ",
									s.date,
									" 기준"
								]
							}, s.id))
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomAction, {
				primary: {
					label: "전화 걸기",
					onClick: () => {
						window.location.href = `tel:${tel.replace(/-/g, "")}`;
					}
				},
				secondary: {
					label: "길 찾기",
					onClick: () => window.open(links.kakao, "_blank", "noreferrer")
				}
			})
		]
	})] });
}
//#endregion
//#region src/pages/public/PlaceScreen.jsx
function PlaceScreen() {
	return useWide() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopCitizen, { pane: "detail" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenPlace, {});
}
//#endregion
export { PlaceScreen as default };

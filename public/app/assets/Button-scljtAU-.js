import { h as require_react, t as require_jsx_runtime, v as __toESM } from "./jsx-runtime-CjhTEqEu.js";
//#region node_modules/lucide-react/dist/esm/shared/src/utils.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => (0, import_react.createElement)("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region src/components/ui/Button.jsx
var import_jsx_runtime = require_jsx_runtime();
var BASE = "pressable inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold disabled:opacity-40 disabled:cursor-not-allowed";
var SIZE = {
	sm: "h-8 min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-3 type-caption",
	md: "h-10 min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-4 type-body-sm",
	lg: "h-11 px-5 type-body-sm",
	xl: "h-14 w-full px-5 rounded-xl type-h3"
};
var VARIANT = {
	primary: "bg-primary text-text-inverse hover:bg-primary-hover",
	secondary: "bg-transparent text-text-pri ring-1 ring-inset ring-text-pri hover:bg-mute",
	ghost: "bg-transparent text-text-sec hover:bg-mute hover:text-text-pri",
	danger: "bg-danger text-text-inverse hover:bg-danger-strong"
};
function Button({ as: As = "button", variant = "primary", size = "md", loading = false, leftIcon, rightIcon, disabled, className, children, collapse, ...rest }) {
	const isButton = As === "button";
	const SHOW = {
		sm: "hidden sm:inline",
		md: "hidden md:inline",
		lg: "hidden lg:inline",
		xl: "hidden xl:inline"
	};
	const named = collapse && typeof children === "string" ? {
		"aria-label": rest["aria-label"] || children,
		title: rest.title || children
	} : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(As, {
		className: clsx(BASE, SIZE[size], VARIANT[variant], collapse && leftIcon && "max-[1279px]:px-2", !isButton && (disabled || loading) && "pointer-events-none opacity-40", className),
		...isButton ? {
			type: rest.type || "button",
			disabled: disabled || loading
		} : {},
		...named,
		...rest,
		children: [
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
				size: 16,
				className: "animate-spin motion-reduce:animate-none",
				"aria-hidden": "true"
			}) : leftIcon,
			collapse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: SHOW[collapse],
				children
			}) : children,
			!loading && rightIcon
		]
	});
}
//#endregion
export { clsx as n, createLucideIcon as r, Button as t };

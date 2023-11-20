"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Footer.scss");
const Footer = () => {
    return ((0, jsx_runtime_1.jsxs)("footer", { children: [" All Rights Reserved \u00A9 ", new Date().getFullYear(), " "] }));
};
exports.default = Footer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const black_logo_png_1 = __importDefault(require("../../assets/black_logo.png"));
require("./Logo.scss");
const react_1 = require("react");
const Logo = () => {
    const logoRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        logoRef.current.addEventListener('click', () => {
            Array.from(document.querySelectorAll('ul.head_icons li')).forEach((icon) => {
                icon.classList.remove('active');
            });
            Array.from(document.querySelectorAll('ul.head_icons li'))[0].classList.add('active');
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: (0, jsx_runtime_1.jsx)("div", { className: 'logo', ref: logoRef, children: (0, jsx_runtime_1.jsx)("img", { src: black_logo_png_1.default, alt: 'FaceX Black Logo' }) }) }));
};
exports.default = Logo;

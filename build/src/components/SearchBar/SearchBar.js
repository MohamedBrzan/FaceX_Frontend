"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./SearchBar.scss");
const SearchBar = () => {
    const searchRef = (0, react_1.useRef)(null);
    const inputRef = (0, react_1.useRef)(null);
    const iconRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const searchDiv = searchRef.current;
        const inputEle = inputRef.current;
        const searchIcon = iconRef.current;
        searchDiv.addEventListener('click', () => searchDiv.classList.add('full_width'));
        inputEle.addEventListener('blur', () => searchRef.current.classList.remove('full_width'));
        searchIcon.addEventListener('click', () => inputEle.focus());
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'search', ref: searchRef, children: [(0, jsx_runtime_1.jsx)("div", { className: 'search_icon', ref: iconRef, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMagnifyingGlass }) }), (0, jsx_runtime_1.jsx)("input", { type: 'search', className: 'search', ref: inputRef })] }));
};
exports.default = SearchBar;

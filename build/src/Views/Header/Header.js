"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Logo_1 = __importDefault(require("../../constants/Logo/Logo"));
require("./Header.scss");
const SearchBar_1 = __importDefault(require("../../components/SearchBar/SearchBar"));
const react_router_dom_1 = require("react-router-dom");
const me_jpg_1 = __importDefault(require("../../assets/me.jpg"));
const Header = () => {
    const userRef = (0, react_1.useRef)(null);
    const dropMenuRef = (0, react_1.useRef)(null);
    const dropMenuModalRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const icons = document.querySelectorAll('ul.head_icons li');
        icons.forEach((icon) => {
            icon.addEventListener('click', () => {
                icons.forEach((icon) => icon.classList.remove('active'));
                icon.classList.add('active');
            });
        });
        userRef.current.onclick = () => {
            dropMenuRef.current.classList.toggle('active');
            dropMenuModalRef.current.classList.toggle('active');
        };
        const links = document.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                Array.from(document.querySelectorAll('a')).forEach((link) => {
                    const ele = link.parentNode;
                    ele.classList.remove('active');
                });
                const a = link.parentNode;
                a.classList.add('active');
            });
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsx)(Container_1.default, { children: (0, jsx_runtime_1.jsxs)(Row_1.default, { className: 'm-0', children: [(0, jsx_runtime_1.jsx)(Col_1.default, { xs: 12, md: 6, className: 'mb-2', children: (0, jsx_runtime_1.jsxs)(Row_1.default, { children: [(0, jsx_runtime_1.jsx)(Col_1.default, { xs: 4, md: 4, lg: 3, children: (0, jsx_runtime_1.jsx)(Logo_1.default, {}) }), (0, jsx_runtime_1.jsx)(Col_1.default, { children: (0, jsx_runtime_1.jsx)(SearchBar_1.default, {}) })] }) }), (0, jsx_runtime_1.jsx)(Col_1.default, { xs: 12, md: 4, children: (0, jsx_runtime_1.jsxs)("ul", { className: 'head_icons list-unstyled', children: [(0, jsx_runtime_1.jsx)("li", { title: 'Home', className: 'active', children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: 'icon', to: '/', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHome }), (0, jsx_runtime_1.jsx)("small", { children: "Home" })] }) }), (0, jsx_runtime_1.jsx)("li", { title: 'Network', className: 'notify', children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: 'icon', to: '/networks', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPeopleGroup }), (0, jsx_runtime_1.jsx)("span", { className: 'badge', children: "99+" }), (0, jsx_runtime_1.jsx)("small", { children: "Networks" })] }) }), (0, jsx_runtime_1.jsx)("li", { title: 'Jobs', className: 'notify', children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: 'icon', to: '/jobs', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBriefcase }), (0, jsx_runtime_1.jsx)("span", { className: 'badge', children: "99+" }), (0, jsx_runtime_1.jsx)("small", { children: "Jobs" })] }) }), (0, jsx_runtime_1.jsx)("li", { title: 'Messages', className: 'notify', children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: 'icon', to: '/messages', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCommentDots }), (0, jsx_runtime_1.jsx)("span", { className: 'badge', children: "99+" }), (0, jsx_runtime_1.jsx)("small", { children: "Messages" })] }) }), (0, jsx_runtime_1.jsx)("li", { title: 'Notifications', className: 'notify', children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: 'icon', to: '/notifications', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBell }), (0, jsx_runtime_1.jsx)("span", { className: 'badge', children: "99+" }), (0, jsx_runtime_1.jsx)("small", { children: "Notifications" })] }) })] }) }), (0, jsx_runtime_1.jsx)(Col_1.default, { xs: 12, md: 2, children: (0, jsx_runtime_1.jsxs)("div", { className: 'user', ref: userRef, children: [(0, jsx_runtime_1.jsx)("div", { className: 'user_img', children: (0, jsx_runtime_1.jsx)("img", { src: me_jpg_1.default, alt: 'User Photo' }) }), (0, jsx_runtime_1.jsx)("div", { className: 'drop_menu', ref: dropMenuRef, children: (0, jsx_runtime_1.jsxs)("ul", { className: 'list-unstyled', children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: (0, jsx_runtime_1.jsx)("small", { children: "Hello world" }) }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: (0, jsx_runtime_1.jsx)("small", { children: "Hello world" }) }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: (0, jsx_runtime_1.jsx)("small", { children: "Hello world" }) }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: (0, jsx_runtime_1.jsx)("small", { children: "Hello world" }) }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: 'drop_menu_modal', ref: dropMenuModalRef })] }) })] }) }) }));
};
exports.default = Header;

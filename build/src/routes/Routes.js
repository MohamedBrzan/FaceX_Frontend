"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const UserNetwork_1 = __importDefault(require("../pages/UserNetwork/UserNetwork"));
const Jobs_1 = __importDefault(require("../pages/Jobs/Jobs"));
const Home_1 = __importDefault(require("../pages/Home/Home"));
const Messages_1 = __importDefault(require("../pages/Messages/Messages"));
const Notifications_1 = __importDefault(require("../pages/Notifications/Notifications"));
const AppRoutes = () => {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: '/', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/networks', element: (0, jsx_runtime_1.jsx)(UserNetwork_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/jobs', element: (0, jsx_runtime_1.jsx)(Jobs_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/messages', element: (0, jsx_runtime_1.jsx)(Messages_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/notifications', element: (0, jsx_runtime_1.jsx)(Notifications_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Page Not Found !" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: "Go Back To Home" })] }) })] }));
};
exports.default = AppRoutes;

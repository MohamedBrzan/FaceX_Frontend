"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Row_1 = __importDefault(require("react-bootstrap/Row"));
require("./Home.scss");
const Col_1 = __importDefault(require("react-bootstrap/esm/Col"));
const Posts_1 = __importDefault(require("../../components/Posts/Posts"));
const Home = () => {
    return ((0, jsx_runtime_1.jsx)("section", { className: 'home', children: (0, jsx_runtime_1.jsx)(Container_1.default, { children: (0, jsx_runtime_1.jsxs)(Row_1.default, { children: [(0, jsx_runtime_1.jsx)(Col_1.default, { md: 3, children: "hi" }), (0, jsx_runtime_1.jsx)(Col_1.default, { children: (0, jsx_runtime_1.jsx)(Posts_1.default, {}) }), (0, jsx_runtime_1.jsx)(Col_1.default, { md: 3, children: "holla" })] }) }) }));
};
exports.default = Home;

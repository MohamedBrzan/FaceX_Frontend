"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./App.scss");
const Footer_1 = __importDefault(require("./Views/Footer/Footer"));
const Header_1 = __importDefault(require("./Views/Header/Header"));
const Routes_1 = __importDefault(require("./routes/Routes"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsx)(Routes_1.default, {}) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;

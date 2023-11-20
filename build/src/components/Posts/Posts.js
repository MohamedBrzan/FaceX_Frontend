"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const me_jpg_1 = __importDefault(require("../../assets/me.jpg"));
require("./Posts.scss");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_1 = require("react");
const Posts = () => {
    (0, react_1.useEffect)(() => {
        Array.from(document.querySelectorAll('.follow_btn')).forEach((followBtn) => {
            followBtn.addEventListener('click', () => (followBtn.children[1].textContent = 'Connected'));
        });
    }, []);
    const fetchPosts = [
        {
            id: 1,
            user: {
                name: 'Sherif Eldeeb',
                position: 'Software Instructor | team lead | mentor | youtuber',
                avatar: me_jpg_1.default,
            },
            content: 'Junior or fresh software engineer',
            comments: [
                {
                    id: 1,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
                {
                    id: 2,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
                {
                    id: 3,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
            ],
            expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
            },
        },
        {
            id: 2,
            user: {
                name: 'Sherif Eldeeb',
                position: 'Software Instructor | team lead | mentor | youtuber',
                avatar: me_jpg_1.default,
            },
            content: 'Junior or fresh software engineer',
            comments: [
                {
                    id: 1,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
                {
                    id: 2,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
                {
                    id: 3,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
            ],
            expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
            },
        },
        {
            id: 3,
            user: {
                name: 'Sherif Eldeeb',
                position: 'Software Instructor | team lead | mentor | youtuber',
                avatar: me_jpg_1.default,
            },
            content: 'Junior or fresh software engineer',
            comments: [
                {
                    id: 1,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
                {
                    id: 2,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
                {
                    id: 3,
                    user: {
                        name: 'mohamed',
                        avatar: me_jpg_1.default,
                        position: 'Software Instructor | team lead | mentor | youtuber',
                    },
                    message: 'Junior or fresh software engineer',
                    replies: [
                        {
                            id: 1,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 2,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                        {
                            id: 3,
                            user: {
                                name: 'mohamed',
                                avatar: me_jpg_1.default,
                                position: 'Software Instructor | team lead | mentor | youtuber',
                            },
                            reply: 'Junior or fresh software engineer',
                            expressions: {
                                like: 0,
                                love: 0,
                                support: 0,
                                sad: 0,
                                happy: 0,
                                angry: 0,
                                disgust: 0,
                                surprise: 0,
                                fear: 0,
                            },
                        },
                    ],
                    expressions: {
                        like: 0,
                        love: 0,
                        support: 0,
                        sad: 0,
                        happy: 0,
                        angry: 0,
                        disgust: 0,
                        surprise: 0,
                        fear: 0,
                    },
                },
            ],
            expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
            },
        },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { className: 'posts', children: fetchPosts.map(({ user, content }, i) => ((0, jsx_runtime_1.jsxs)("article", { className: 'post', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'post_head', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'user_info', children: [(0, jsx_runtime_1.jsx)("figure", { className: 'avatar', children: (0, jsx_runtime_1.jsx)("img", { src: user.avatar, alt: user.name }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'user', children: [(0, jsx_runtime_1.jsx)("div", { className: 'username', children: (0, jsx_runtime_1.jsx)("strong", { children: user.name }) }), (0, jsx_runtime_1.jsx)("div", { className: 'user_position', children: (0, jsx_runtime_1.jsx)("small", { children: user.position }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'follow_btn', children: [(0, jsx_runtime_1.jsx)("div", { className: 'icon', children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUserPlus }) }), ' ', (0, jsx_runtime_1.jsx)("span", { className: 'text', children: "follow" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: 'post_body', children: (0, jsx_runtime_1.jsx)("p", { className: 'content', children: content }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("div", { className: 'post_footer', children: (0, jsx_runtime_1.jsxs)("div", { className: 'interactions_icons', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'interact expressions', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_regular_svg_icons_1.faThumbsUp }), (0, jsx_runtime_1.jsx)("div", { className: 'identifier', children: "Like" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'interact comment', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_regular_svg_icons_1.faComment }), (0, jsx_runtime_1.jsx)("div", { className: 'identifier', children: "Comment" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'interact repost', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faRepeat }), (0, jsx_runtime_1.jsx)("div", { className: 'identifier', children: "Repost" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'interact send', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_regular_svg_icons_1.faPaperPlane }), (0, jsx_runtime_1.jsx)("div", { className: 'identifier', children: "Send" })] })] }) })] }, i))) }));
};
exports.default = Posts;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var evergreen_ui_1 = require("evergreen-ui");
var react_1 = require("react");
var styles_1 = require("../styles");
var Title_1 = require("./Components/Title");
var TopBar_1 = require("./Components/TopBar");
var EntryViewController_1 = require("./EntryViewController");
var Game_1 = require("./Components/Game");
function EntryView() {
    var _a = EntryViewController_1["default"](), gameState = _a.gameState, gameViewProps = _a.gameViewProps, startBtnProps = _a.startBtnProps, topBarProps = _a.topBarProps;
    return gameState.shows ? (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(TopBar_1["default"], __assign({}, topBarProps)),
        react_1["default"].createElement(Title_1["default"], __assign({}, gameState)),
        gameState.isStartGame && react_1["default"].createElement(Game_1["default"], __assign({}, gameViewProps)),
        react_1["default"].createElement(evergreen_ui_1.Button, __assign({}, startBtnProps), "Start new game"))) : (react_1["default"].createElement(evergreen_ui_1.Spinner, { size: 40 }));
}
exports["default"] = EntryView;

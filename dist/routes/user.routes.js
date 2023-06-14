"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const Router = require('express').Router;
const router = new Router();
router.post('/get_user', user_controller_1.default.getUser);
exports.default = router;

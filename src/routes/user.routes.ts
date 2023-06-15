import user from "../controller/user.controller";
const Router = require('express').Router;
const router = new Router();

router.post('/get_user', user.getUser)

export default router
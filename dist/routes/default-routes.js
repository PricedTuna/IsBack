"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).send("Hello World");
});
router.get("/about", (req, res) => {
    res.status(200).send("About page");
});
exports.default = router;

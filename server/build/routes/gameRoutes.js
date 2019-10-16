"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GameRuotes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => res.send("Games"));
    }
}
const gameRuotes = new GameRuotes();
exports.default = gameRuotes.router;

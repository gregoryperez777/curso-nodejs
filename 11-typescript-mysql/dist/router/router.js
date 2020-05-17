"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const heroes = `
        SELECT * 
        FROM heroes2
    `;
    mysql_1.default.ejecutarQuery(heroes, (error, heroes) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error,
            });
        }
        else {
            res.json({
                ok: true,
                heroes,
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    const { id } = req.params;
    const escapeId = mysql_1.default.instance.cnn.escape(id);
    const heroe = `
        SELECT * 
        FROM heroes
        WHERE id = ${escapeId} 
    `;
    mysql_1.default.ejecutarQuery(heroe, (error, heroe) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error,
            });
        }
        else {
            res.json({
                ok: true,
                heroe: heroe[0],
            });
        }
    });
});
exports.default = router;

const express = require("express");
const airRoutes = express.Router();
const Air = require("../models/air");

airRoutes.get("/", (req, res) => {
    Air.find((err, qualities) => {
        if (err) return res.status(500).send(err);
        res.send(qualities);
    });
});

airRoutes.post("/", (req, res) => {
    const newQuality = new Air(req.body);
    newQuality.save(err => {
        if (err) return res.status(500).send(err);
        res.send(newQuality);
    });
});

airRoutes.get("/:id", (req, res) => {
    Air.findById(req.params.id, (err, quality) => {
        if (err) return res.status(500).send(err);
        res.send(quality);
    });
});

airRoutes.put("/:id", (req, res) => {
    Air.findById(req.params.id, (err, quality) => {
        if (err) return res.status(500).send(err);
        if (req.body.location) {
            quality.location = Object.assign(quality.location, req.body.location);
            delete req.body.location;
        };
        quality = Object.assign(quality, req.body);
        quality.save(err => {
            if (err) return res.status(500).send(err);
            res.send(quality);
        });
    });
});

airRoutes.delete("/:id", (req, res) => {
    Air.findByIdAndRemove(req.params.id, (err, quality) => {
        if (err) return res.status(500).send(err);
        res.send(quality);
    });
});

module.exports = airRoutes;

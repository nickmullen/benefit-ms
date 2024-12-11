import express from "express";
import controller from "../controllers/healthController";

const router = express.Router();

router.get("/", controller.healthCheck);

router.get("/readiness", controller.readinessCheck);

export = router;

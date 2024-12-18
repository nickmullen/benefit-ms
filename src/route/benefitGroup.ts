import express from "express";
import controller from "../controllers/benefitGroupController";

const router = express.Router();

router.get("/", controller.read)

export = router;

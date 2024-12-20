import express from "express";
import controller from "../controllers/benefitController";
import { validateBenefitBody } from "../middleware/validateBenefit";

const router = express.Router();

router.get("/:snomed", controller.read)
router.post("/", validateBenefitBody, controller.create)

export = router;

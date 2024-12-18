import express from "express";
import controller from "../controllers/benefitController";
import { validateBenefitBody } from "../middleware/validateBenefit";

const router = express.Router();

router.get("/:snomed", controller.getBenefitBySnomed)
router.post("/", validateBenefitBody, controller.create)

export = router;

import express from "express";
import { isAuthorized } from "../middleware/auth";
import controller from "../controllers/benefitController";
// import { validateDecriptionLanaguages } from "../middleware/validateUserId";
import { validateUserId } from "../middleware/validateUserId";
import { validateUserBody } from "../middleware/validateUserBody";

const router = express.Router();

router.get("/:snomed", controller.getBenefitBySnomed)
router.post("/", controller.createBenefit)

// router.post("/", isAuthorized, validateUserBody, controller.createUser);

// router.get("/:userId", isAuthorized, validateUserId, controller.getUserBasedOnId);
// router.patch("/:userId", isAuthorized, validateUserId, validateUserBody, controller.updateUser);
// router.delete("/:userId", isAuthorized, validateUserId, controller.deleteUser);
// router.get("/", isAuthorized, controller.getAllUsers);

export = router;

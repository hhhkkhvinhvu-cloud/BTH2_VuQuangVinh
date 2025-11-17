import express from "express";
import { getAllUsers, getUserById } from "../controllers/userController.js";
import {
  getAllAccounts,
  getAccountByTenTK,
} from "../controllers/taikhoanController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to API route" });
});

// -----------------------users---------------------------
// Route: GET /api/users
router.get("/users/", getAllUsers);
// Route: GET /api/users/:id
router.get("/users/:id", getUserById);

// -----------------------Tai Khoan---------------------------
// Route: GET /api/accounts
router.get("/accounts/", getAllAccounts);
// Route: GET /api/accounts/:tentk
router.get("/accounts/:tentk", getAccountByTenTK);

export default router;

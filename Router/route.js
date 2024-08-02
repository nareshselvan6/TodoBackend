import express from "express";
import { createtodo, deletetodo, gettodo, gettotoid, puttodo } from "../Controller/Todolistactions.js";

const router =express.Router();

router.post("/createtodo",createtodo);
router.get("/gettodo",gettodo);
router.get("/gettodoid/:id",gettotoid);
router.put("/puttodo/:id",puttodo);
router.delete("/deletetodo/:id",deletetodo);



export default router;
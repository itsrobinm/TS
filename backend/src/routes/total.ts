import { Router, Request, Response } from "express";
import products from "../products.json";

const router = Router();

router.post("/api/total", (req: Request, res: Response) => {
  // TODO: Implement /api/total endpoint

  return res.json("Hello World!");
});

export { router as totalRouter };

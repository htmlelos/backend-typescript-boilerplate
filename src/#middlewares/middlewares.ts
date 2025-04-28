import { Request, Response, NextFunction } from "express";

export const middleware = (req: Request, res: Response, next?: NextFunction) => {
    res.send("Hello World!");
    console.log("Response sent");
  }


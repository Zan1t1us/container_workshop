import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app: Express = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const data = await prisma.sampledata.findUnique({
    where: {
      id: 3,
    },
  });
  res.send(data);
});

app.listen(port, () => {
  console.log("server listening at port " + port);
});

import express, { type Application, type Request, type Response } from "express"
import { pool } from "./db";
import { userRoute } from "./modules/user/user.rotue";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import fs from "fs"
import logger from "./middleware/logger";
import CookieParser from "cookie-parser"
const app: Application = express()
import cors from "cors"
import globalErrorHandler from "./middleware/globalEroorHandler";

app.use(CookieParser())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
const corsOptions = {
  origin: 'http://5000',
 
}
app.use(cors(corsOptions))

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "message": "Express Server",
    "author": "next level"
  })
})
app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute)




app.use(globalErrorHandler);





export default app;
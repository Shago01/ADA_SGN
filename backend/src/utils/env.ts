import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT!;
export const URI_DB = process.env.URI_DB!;
export const JWT_SECRET = process.env.JWT_SECRET!;

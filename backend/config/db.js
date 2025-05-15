import { neon } from "@neondatabase/serverless";
import doteven from "dotenv";

dotevn.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;

export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGUSER}/${PGDATABASE}`;
)
import { createPool } from "mysql2/promise";
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE} from "./config.js";

export const pool = createPool({
  host: 'containers-us-west-42.railway.app',
  user: 'root',
  password:'WwReoNGB80YZqUF9ybZS',
  port: 6178,
  database:'railway'
});


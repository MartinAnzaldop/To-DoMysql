import { createPool } from "mysql2/promise";

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE} from "./config.js";

export const pool = createPool({
  host: 'containers-us-west-10.railway.app',
  user: 'root',
  password:'kTdUK6Kn8AjGUPgnTUNW',
  port: 7798,
  database:'railway'
});


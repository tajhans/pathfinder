import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.js*",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
  },
});

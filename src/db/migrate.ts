import { db } from "./drizzle";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

// This will run migrations on the database, skipping the ones already applied
migrate(db, { migrationsFolder: "./drizzle" });

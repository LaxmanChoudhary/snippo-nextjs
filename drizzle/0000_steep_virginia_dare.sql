CREATE TABLE IF NOT EXISTS "bookmarks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(256),
	"snippet_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "snippets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(256),
	"user_info" json,
	"title" text NOT NULL,
	"slug" varchar GENERATED ALWAYS AS (lower(regexp_replace("snippets"."title", '[^a-zA-Z0-9]+', '-', 'g')) || '-' || "snippets"."id") STORED,
	"tags" text,
	"description" text,
	"code_language" varchar(64) NOT NULL,
	"code_value" text NOT NULL,
	"public" boolean DEFAULT false,
	"deleted" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_snippet_id_snippets_id_fk" FOREIGN KEY ("snippet_id") REFERENCES "public"."snippets"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

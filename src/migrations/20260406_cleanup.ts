import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // 1. Create proper enum for careers listing_status
  await db.execute(sql`
    CREATE TYPE "public"."enum_careers_listing_status" AS ENUM('open', 'closed');
  `)

  await db.execute(sql`
    CREATE TYPE "public"."enum__careers_v_version_listing_status" AS ENUM('open', 'closed');
  `)

  // 2. Add listing_status column to careers table
  await db.execute(sql`
    ALTER TABLE "careers" ADD COLUMN "listing_status" "enum_careers_listing_status" DEFAULT 'open';
  `)

  await db.execute(sql`
    ALTER TABLE "_careers_v" ADD COLUMN "version_listing_status" "enum__careers_v_version_listing_status" DEFAULT 'open';
  `)

  // 3. Copy data from old status column if it exists, then drop it
  await db.execute(sql`
    DO $$
    BEGIN
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='careers' AND column_name='status') THEN
        UPDATE "careers" SET "listing_status" =
          CASE WHEN "status"::text = 'open' THEN 'open'::"enum_careers_listing_status"
               WHEN "status"::text = 'closed' THEN 'closed'::"enum_careers_listing_status"
               ELSE 'open'::"enum_careers_listing_status"
          END;
        ALTER TABLE "careers" DROP COLUMN "status";
      END IF;
    END $$;
  `)

  await db.execute(sql`
    DO $$
    BEGIN
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='_careers_v' AND column_name='version_status') THEN
        UPDATE "_careers_v" SET "version_listing_status" =
          CASE WHEN "version_status"::text = 'open' THEN 'open'::"enum__careers_v_version_listing_status"
               WHEN "version_status"::text = 'closed' THEN 'closed'::"enum__careers_v_version_listing_status"
               ELSE 'open'::"enum__careers_v_version_listing_status"
          END;
        ALTER TABLE "_careers_v" DROP COLUMN "version_status";
      END IF;
    END $$;
  `)

  // 4. Drop career_applications tables if they exist
  await db.execute(sql`
    DROP TABLE IF EXISTS "career_applications" CASCADE;
  `)

  // 5. Drop career_applications enum if it exists
  await db.execute(sql`
    DROP TYPE IF EXISTS "public"."enum_career_applications_application_status";
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Reverse: recreate status columns and drop listing_status
  await db.execute(sql`
    ALTER TABLE "careers" ADD COLUMN "status" "enum_careers_status" DEFAULT 'open';
  `)

  await db.execute(sql`
    ALTER TABLE "_careers_v" ADD COLUMN "version_status" "enum__careers_v_version_status" DEFAULT 'open';
  `)

  await db.execute(sql`
    ALTER TABLE "careers" DROP COLUMN IF EXISTS "listing_status";
  `)

  await db.execute(sql`
    ALTER TABLE "_careers_v" DROP COLUMN IF EXISTS "version_listing_status";
  `)

  await db.execute(sql`
    DROP TYPE IF EXISTS "public"."enum_careers_listing_status";
  `)

  await db.execute(sql`
    DROP TYPE IF EXISTS "public"."enum__careers_v_version_listing_status";
  `)

  // Recreate career_applications
  await db.execute(sql`
    CREATE TYPE "public"."enum_career_applications_application_status" AS ENUM('new', 'reviewed', 'interviewed', 'hired', 'rejected');
  `)

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "career_applications" (
      "id" serial PRIMARY KEY NOT NULL,
      "first_name" varchar NOT NULL,
      "last_name" varchar NOT NULL,
      "full_name" varchar,
      "email" varchar NOT NULL,
      "phone" varchar NOT NULL,
      "position_id" integer NOT NULL,
      "resume_id" integer,
      "cover_letter" varchar,
      "application_status" "enum_career_applications_application_status" DEFAULT 'new' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );
  `)
}

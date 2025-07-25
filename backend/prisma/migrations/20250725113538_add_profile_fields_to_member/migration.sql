-- AlterTable
ALTER TABLE "public"."Member" ADD COLUMN     "description" TEXT,
ADD COLUMN     "empId" TEXT,
ADD COLUMN     "pic" TEXT,
ADD COLUMN     "skillTags" TEXT[];

-- AlterTable
ALTER TABLE "public"."ServiceRequest" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';

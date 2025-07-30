-- CreateEnum
CREATE TYPE "public"."WorkStatus" AS ENUM ('ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."User" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."Admin" (
    "admin_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "public"."Domain" (
    "domain_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("domain_id")
);

-- CreateTable
CREATE TABLE "public"."Member" (
    "member_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstLogin" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "public"."MemberDomain" (
    "member_id" TEXT NOT NULL,
    "domain_id" TEXT NOT NULL,

    CONSTRAINT "MemberDomain_pkey" PRIMARY KEY ("member_id","domain_id")
);

-- CreateTable
CREATE TABLE "public"."Service" (
    "service_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "domain_id" TEXT NOT NULL,
    "idea_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "public"."Payment" (
    "payment_id" TEXT NOT NULL,
    "payment_provider" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "public"."ServiceRequest" (
    "req_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "domain_id" TEXT NOT NULL,
    "request_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceRequest_pkey" PRIMARY KEY ("req_id")
);

-- CreateTable
CREATE TABLE "public"."MemberService" (
    "member_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "status" "public"."WorkStatus" NOT NULL DEFAULT 'ASSIGNED',
    "completedAt" TIMESTAMP(3),
    "rating" INTEGER,
    "feedback" TEXT,

    CONSTRAINT "MemberService_pkey" PRIMARY KEY ("member_id","service_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "public"."Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Domain_name_key" ON "public"."Domain"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "public"."Member"("email");

-- AddForeignKey
ALTER TABLE "public"."MemberDomain" ADD CONSTRAINT "MemberDomain_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "public"."Member"("member_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MemberDomain" ADD CONSTRAINT "MemberDomain_domain_id_fkey" FOREIGN KEY ("domain_id") REFERENCES "public"."Domain"("domain_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_domain_id_fkey" FOREIGN KEY ("domain_id") REFERENCES "public"."Domain"("domain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "public"."Service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServiceRequest" ADD CONSTRAINT "ServiceRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServiceRequest" ADD CONSTRAINT "ServiceRequest_domain_id_fkey" FOREIGN KEY ("domain_id") REFERENCES "public"."Domain"("domain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MemberService" ADD CONSTRAINT "MemberService_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "public"."Member"("member_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MemberService" ADD CONSTRAINT "MemberService_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "public"."Service"("service_id") ON DELETE CASCADE ON UPDATE CASCADE;

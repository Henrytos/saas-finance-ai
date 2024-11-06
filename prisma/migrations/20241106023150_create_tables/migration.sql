-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE', 'INVESTMENT');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('FOOD', 'TRANSPORT', 'SHOPPING', 'ENTERTAINMENT', 'HEALTH', 'OTHER');

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "description" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "cateory" "TransactionCategory" NOT NULL,
    "date" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

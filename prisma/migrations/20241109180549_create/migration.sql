/*
  Warnings:

  - You are about to drop the column `cateory` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `category` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionMethod" AS ENUM ('CASH', 'CARD', 'PIX');

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "cateory",
ADD COLUMN     "category" "TransactionCategory" NOT NULL,
ADD COLUMN     "method" "TransactionMethod" NOT NULL;

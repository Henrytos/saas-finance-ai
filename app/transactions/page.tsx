import { auth } from "@clerk/nextjs/server";
import { NavBar } from "../_components/nav-bar";
import { redirect } from "next/navigation";
import { Button } from "../_components/ui/button";
import { TransactionsTable } from "../_components/transactions-table";
import { db } from "../_lib/db";

export default async function TransactionsPage() {
  const { userId } = await auth();
  console.log(userId);
  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <NavBar />
      <div className="mx-auto w-full max-w-[2000px] space-y-6 px-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <Button>Add Transaction</Button>
        </div>

        <TransactionsTable
          transactions={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
    </>
  );
}

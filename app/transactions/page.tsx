import { auth } from "@clerk/nextjs/server";
import { NavBar } from "../_components/nav-bar";
import { redirect } from "next/navigation";
import { Button } from "../_components/ui/button";
import { TransactionsTable } from "../_components/tansactions-table";

export default async function TransactionsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="space-y-6 px-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <Button>Add Transaction</Button>
        </div>

        <TransactionsTable invoices={invoices} />
      </div>
    </>
  );
}

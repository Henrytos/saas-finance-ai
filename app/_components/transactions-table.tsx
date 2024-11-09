"use client";

import { Circle, Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";
import { Transaction } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import {
  TRANSACTION_CATEGORY,
  TRANSACTION_METHOD,
  TRANSACTION_TYPE,
} from "../_constants/transaction";
import clsx from "clsx";
import { Badge } from "./ui/badge";

interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  const styleBaseTableRow =
    "py-4 text-sm font-medium text-primary-foreground  h-18";

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="bg-white/5">
          <TableHead className={twMerge(styleBaseTableRow, "w-2/12 pl-6")}>
            Nome
          </TableHead>
          <TableHead className={twMerge(styleBaseTableRow, "w-1/12")}>
            Tipo
          </TableHead>
          <TableHead className={twMerge(styleBaseTableRow, "w-2/12")}>
            Categoria
          </TableHead>
          <TableHead className={twMerge(styleBaseTableRow, "w-2/12")}>
            Método
          </TableHead>
          <TableHead className={twMerge(styleBaseTableRow, "w-2/12")}>
            Data
          </TableHead>
          <TableHead className={twMerge(styleBaseTableRow, "w-2/12")}>
            Valor
          </TableHead>
          <TableHead
            className={twMerge(styleBaseTableRow, "w-1/12 pr-6")}
          ></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className={twMerge(styleBaseTableRow, "pl-6")}>
              {transaction.description}
            </TableCell>
            <TableCell className={styleBaseTableRow}>
              <span className="flex h-full w-auto items-center gap-1">
                <Badge
                  className={clsx({
                    "bg-green-500/10 text-green-500 hover:bg-green-500/10":
                      transaction.type === "INCOME",
                    "bg-red-500/10 text-red-500 hover:bg-red-500/10":
                      transaction.type === "EXPENSE",
                    "bg-white/10 text-white hover:bg-white/10":
                      transaction.type === "INVESTMENT",
                  })}
                >
                  <Circle
                    size={10}
                    className={clsx("mr-1", {
                      "fill-green-500 text-green-500":
                        transaction.type === "INCOME",
                      "fill-red-500 text-red-500":
                        transaction.type === "EXPENSE",

                      "fill-white text-white":
                        transaction.type === "INVESTMENT",
                    })}
                  />
                  {TRANSACTION_TYPE[transaction.type]}
                </Badge>
              </span>
            </TableCell>
            <TableCell className={styleBaseTableRow}>
              {TRANSACTION_CATEGORY[transaction.category]}
            </TableCell>
            <TableCell className={styleBaseTableRow}>
              {TRANSACTION_METHOD[transaction.method]}
            </TableCell>
            <TableCell className={styleBaseTableRow}>
              {transaction.date?.toDateString()}
            </TableCell>
            <TableCell className={styleBaseTableRow}>
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(Number(transaction.amount))}
            </TableCell>
            <TableCell className={twMerge(styleBaseTableRow, "space-x-1 pr-6")}>
              <Button size="icon" type="button" variant="outline">
                <Pen size={20} />
              </Button>
              <Button size="icon" type="button" variant="outline">
                <Trash size={20} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

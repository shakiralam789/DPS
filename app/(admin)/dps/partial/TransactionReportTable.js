import React from "react";
import { Table, Tbody, TCell, Thead, Trow } from "@/components/table/Table";
import Pagination from "@/components/Pagination";
import { useRouter } from "nextjs-toploader/app";

const data = [
  {
    id: 1,
    sl: 1,
    receipt_number: "2G3Y423M4233",
    transaction_number: "234234233",
    payment_type: "Cash",
    date: "04/02/2025",
    amount: "৳ 27,375",
    status: "active",
  },
  {
    id: 2,
    sl: 2,
    receipt_number: "2G3Y423M4233",
    transaction_number: "234234233",
    payment_type: "Cash",
    date: "04/02/2025",
    amount: "৳ 27,375",
    status: "inactive",
  },
];

const TransactionReportTable = ({showId}) => {
  const router = useRouter();
  const renderStatusBadge = (status) => {
    if (status === "active") {
      return (
        <div className="w-fit text-green-500 bg-green-light px-2 py-0.5 rounded-full">
          Active
        </div>
      );
    } else {
      return (
        <div className="w-fit text-gray-gray-400 bg-gray-light px-2 py-0.5 rounded-full">
          Inactive
        </div>
      );
    }
  };

  return (
    <>
      <Table>
        <Thead>
          <TCell role="header">SL No.</TCell>
          <TCell role="header">Receipt number</TCell>
          <TCell role="header">Transaction number</TCell>
          <TCell role="header">Payment Type</TCell>
          <TCell role="header">Date</TCell>
          <TCell role="header">Amount</TCell>
          <TCell role="header">Status</TCell>
        </Thead>
        <Tbody>
          {data &&
            data.length > 0 &&
            data.map((dps, index) => (
              <Trow
                key={dps.id}
                className="cursor-pointer"
                onClick={() => router.push(`/dps/show/${showId}/profile/${dps.id}`)}
              >
                <TCell>{dps.sl}</TCell>
                <TCell>{dps.receipt_number}</TCell>
                <TCell>{dps.transaction_number}</TCell>
                <TCell>{dps.payment_type}</TCell>
                <TCell>{dps.date}</TCell>
                <TCell>{dps.amount}</TCell>
                <TCell>{renderStatusBadge(dps.status)}</TCell>
              </Trow>
            ))}
        </Tbody>
      </Table>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default TransactionReportTable;

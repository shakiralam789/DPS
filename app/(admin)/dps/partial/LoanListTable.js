import React from "react";
import { Table, Tbody, TCell, Thead, Trow } from "@/components/table/Table";
import Pagination from "@/components/Pagination";
import { useRouter } from "nextjs-toploader/app";

const data = [
  {
    id: 1,
    loan_name: "2G3Y423M4233",
    validity: "234234233",
    starting_date: "04/02/2025",
    ending_date: "04/02/2025",
    amount: "৳ 27,375",
    status: "active",
  },
  {
    id: 2,
    loan_name: "2G3Y423M4233",
    validity: "234234233",
    starting_date: "04/02/2025",
    ending_date: "04/02/2025",
    amount: "৳ 27,375",
    status: "active",
  }
];

const LoanListTable = ({showId}) => {
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
          <TCell role="header">Loan Name</TCell>
          <TCell role="header">Validity</TCell>
          <TCell role="header">Starting Date</TCell>
          <TCell role="header">Ending date</TCell>
          <TCell role="header">Deposited amount</TCell>
          <TCell role="header">Status</TCell>
        </Thead>
        <Tbody>
          {data &&
            data.length > 0 &&
            data.map((dps, index) => (
              <Trow
                key={dps.id}
                // className="cursor-pointer"
                // onClick={() => router.push(`/dps/show/${showId}/profile/${dps.id}`)}
              >
                <TCell>{dps.loan_name}</TCell>
                <TCell>{dps.validity}</TCell>
                <TCell>{dps.starting_date}</TCell>
                <TCell>{dps.ending_date}</TCell>
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

export default LoanListTable;

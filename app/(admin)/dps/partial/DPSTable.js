// components/DPSTableDesign.jsx
import React, { useState } from "react";
import { Table, Tbody, TCell, Thead, Trow } from "@/components/table/Table";
import TableDropdown, {
  TableDropdownItem,
} from "@/components/table/TableDropdown";
import Pagination from "@/components/Pagination";
import PopUp from "@/components/PopUp";

const DPSTableDesign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});

  const dpsList = [
    {
      id: 1,
      sl: 1,
      user_name: "MD Aminul Islam",
      deposit_type: "DS",
      validity: "3 years",
      starting_date: "04/02/2025",
      ending_date: "04/02/2025",
      amount: "৳ 27,375",
      account_number: "218376874346",
      status: "active",
    },
    {
      id: 2,
      sl: 2,
      user_name: "MD Aminul Islam",
      deposit_type: "DS",
      validity: "3 years",
      starting_date: "04/02/2025",
      ending_date: "04/02/2025",
      amount: "৳ 27,375",
      account_number: "218376874346",
      status: "inactive",
    },
    {
      id: 3,
      sl: 3,
      user_name: "MD Aminul Islam",
      deposit_type: "DS",
      validity: "3 years",
      starting_date: "04/02/2025",
      ending_date: "04/02/2025",
      amount: "৳ 27,375",
      account_number: "218376874346",
      status: "active",
    },
    {
      id: 4,
      sl: 4,
      user_name: "MD Aminul Islam",
      deposit_type: "DS",
      validity: "3 years",
      starting_date: "04/02/2025",
      ending_date: "04/02/2025",
      amount: "৳ 27,375",
      account_number: "218376874346",
      status: "active",
    },
  ];

  const renderStatusBadge = (status) => {
    if (status === "active") {
      return (
          <div className="text-green-500 bg-green-light px-2 py-0.5 rounded-full">
            Active
          </div>
      );
    } else {
      return (
          <div className="text-gray-gray-400 bg-gray-light px-2 py-0.5 rounded-full">
            Inactive
          </div>
      );
    }
  };

  function openPopUp(info) {
    setInfo(info);
    setIsOpen(true);
  }

  return (
    <>
      <Table>
        <Thead>
          <TCell role="header">SL No.</TCell>
          <TCell role="header">User Name</TCell>
          <TCell role="header">Deposit type</TCell>
          <TCell role="header">Validity</TCell>
          <TCell role="header">Starting Date</TCell>
          <TCell role="header">Ending Date</TCell>
          <TCell role="header">Amount</TCell>
          <TCell role="header">Account number</TCell>
          <TCell role="header">Status</TCell>
          <TCell role="header" className="text-center">
            Action
          </TCell>
        </Thead>
        <Tbody>
          {dpsList &&
            dpsList.length > 0 &&
            dpsList.map((dps, index) => (
              <Trow key={dps.id}>
                <TCell>{dps.sl}</TCell>
                <TCell>{dps.user_name}</TCell>
                <TCell>{dps.deposit_type}</TCell>
                <TCell>{dps.validity}</TCell>
                <TCell>{dps.starting_date}</TCell>
                <TCell>{dps.ending_date}</TCell>
                <TCell>{dps.amount}</TCell>
                <TCell>{dps.account_number}</TCell>
                <TCell>{renderStatusBadge(dps.status)}</TCell>
                <TCell className="text-center">
                  <TableDropdown>
                    <TableDropdownItem>View</TableDropdownItem>
                    <TableDropdownItem href={`/users/edit/${dps.id}`}>
                      Edit
                    </TableDropdownItem>
                    <TableDropdownItem
                      onClick={() =>
                        openPopUp({
                          title: "Are you sure you want to Delete?",
                          method: "post",
                          route: `/dps/delete/${dps.id}`,
                        })
                      }
                    >
                      Delete
                    </TableDropdownItem>
                  </TableDropdown>
                </TCell>
              </Trow>
            ))}
        </Tbody>
      </Table>
      <div>
        <Pagination />
      </div>
      <PopUp info={info} show={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default DPSTableDesign;

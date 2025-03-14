// components/UserTableDesign.jsx
import React, { useState } from "react";
import { Table, Tbody, TCell, Thead, Trow } from "@/components/table/Table";
import TableDropdown, {
  TableDropdownItem,
} from "@/components/table/TableDropdown";
import { PencilIcon } from "@heroicons/react/24/outline";
import PopUp from "@/components/PopUp";
import Button from "@/components/form/Button";

const depositRulesSchemesList = [
  {
    type: "ds",
    label: "Daily savings",
    year: "3 years",
    data: [
      {
        id: 1,
        daily_installment: "৳ 25",
        total_deposit_savings: "৳ 27 375",
        expected_profit: "৳ 33 000",
      },
      {
        id: 2,
        daily_installment: "৳ 50",
        total_deposit_savings: "৳ 54 750",
        expected_profit: "৳ 66 000",
      },
      {
        id: 3,
        daily_installment: "৳ 75",
        total_deposit_savings: "৳ 82 126",
        expected_profit: "৳ 99 000",
      },
      {
        id: 4,
        daily_installment: "৳ 100",
        total_deposit_savings: "৳ 109 500",
        expected_profit: "৳ 1 32 000",
      },
      {
        id: 5,
        daily_installment: "৳ 150",
        total_deposit_savings: "৳ 164 250",
        expected_profit: "৳ 1 98 000",
      },
    ],
  },
  {
    type: "WS",
    label: "Monthly savings",
    year: "5 years",
    data: [
      {
        id: 1,
        daily_installment: "৳ 25",
        total_deposit_savings: "৳ 27 375",
        expected_profit: "৳ 33 000",
      },
      {
        id: 2,
        daily_installment: "৳ 50",
        total_deposit_savings: "৳ 54 750",
        expected_profit: "৳ 66 000",
      },
      {
        id: 3,
        daily_installment: "৳ 75",
        total_deposit_savings: "৳ 82 126",
        expected_profit: "৳ 99 000",
      },
      {
        id: 4,
        daily_installment: "৳ 100",
        total_deposit_savings: "৳ 109 500",
        expected_profit: "৳ 1 32 000",
      },
      {
        id: 5,
        daily_installment: "৳ 150",
        total_deposit_savings: "৳ 164 250",
        expected_profit: "৳ 1 98 000",
      },
    ],
  },
];

const DepositRulesSchemes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});

  function openPopUp(info) {
    setInfo(info);
    setIsOpen(true);
  }

  return (
    <>
      {depositRulesSchemesList.map((depositRulesSchemes, index) => {
        let listColor;
        switch (depositRulesSchemes.type) {
          case "ds":
            listColor = "text-primary-purple";
            break;
          case "WS":
            listColor = "text-red-400";
            break;
          default:
            listColor = "bg-gray-100";
        }
        return <div key={index} className="bg-white p-4 rounded-xl">
          <div className="flex items-center justify-between gap-2 mb-2 2xl:mb-4">
            <div className={`${listColor} capitalize font-medium font-24 text-gray-text`}>
              {depositRulesSchemes.label}{" "}
              <span className={`uppercase`}>({depositRulesSchemes.type})</span>
              <span className="text-gray-text font-14 ml-2 font-normal">{depositRulesSchemes.year}</span>
            </div>
            <Button href={`/deposit-rule-schemes/edit/${depositRulesSchemes.type}`} variant="stroke"><PencilIcon className="w-3.5 2xl:w-4"/> Edit</Button>
          </div>
          <Table>
            <Thead>
              <TCell className="bg-white" role="header">daily installment</TCell>
              <TCell className="bg-white" role="header">total deposit savings</TCell>
              <TCell className="bg-white" role="header">expected profit</TCell>
              <TCell className="bg-white text-center" role="header">
                Action
              </TCell>
            </Thead>
            <Tbody>
              {depositRulesSchemes &&
                depositRulesSchemes.data.length > 0 &&
                depositRulesSchemes.data.map((data) => (
                  <Trow key={data.id}>
                    <TCell>{data.daily_installment}</TCell>
                    <TCell>{data.total_deposit_savings}</TCell>
                    <TCell>{data.expected_profit}</TCell>
                    <TCell className="text-center">
                      <TableDropdown>
                        <TableDropdownItem>View</TableDropdownItem>
                        <TableDropdownItem href={`/users/edit/${data.id}`}>
                          Edit
                        </TableDropdownItem>
                        <TableDropdownItem
                          onClick={() =>
                            openPopUp({
                              title: "Are you sure you want to Delete?",
                              method: "post",
                              route: `/users/${data.id}`,
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
        </div>
      })}
      <PopUp info={info} show={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default DepositRulesSchemes;

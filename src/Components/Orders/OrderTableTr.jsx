import React, { useEffect, useState } from "react";

const OrderTableTr = ({ DelieveryStatus }) => {
  const [status, setstatus] = useState(null);

  useEffect(() => {

    switch (DelieveryStatus) {
      case "Packaging":
        setstatus(
          <ul className="steps text-xs">
            <li data-content="✓" className="step step-info">
              Packaging
            </li>
            <li className="step">Deliever</li>
            <li className="step">Receive</li>
          </ul>
        );
        break;
      case "Deliever":
        setstatus(
          <ul className="steps text-xs">
            <li data-content="✓" className="step step-info">
              Packaging
            </li>
            <li data-content="✓" className="step step-info">
              Deliever
            </li>
            <li className="step">Receive</li>
          </ul>
        );
        break;
      case "Receive":
        setstatus(
          <ul className="steps text-xs">
            <li data-content="✓" className="step step-info">
              Packaging
            </li>
            <li data-content="✓" className="step step-info">
              Deliever
            </li>
            <li data-content="✓" className="step step-info">
              Receive
            </li>
          </ul>
        );
        break;
      default:
        setstatus(
          <ul className="steps text-xs">
            <li className="step">Packaging</li>
            <li className="step">Deliever</li>
            <li className="step">Receive</li>
          </ul>
        );
        break;
    }
  }, []);

  return (
    <tr>
      <td className="font-bold">U Thu Ra Min</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://images.unsplash.com/photo-1606041011872-596597976b25?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">iPhone 14 Pro Max</div>
            <div className="text-sm opacity-50">Apple</div>
          </div>
        </div>
      </td>
      <td>No.28 Ahlone Road, Yangon Myanmar</td>
      <td>17 January 2024</td>
      <th>{status}</th>
    </tr>
  );
};

export default OrderTableTr;

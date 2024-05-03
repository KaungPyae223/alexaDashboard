import React, { useEffect, useState } from "react";

const OrderTableTr = ({ src,itemName,brand,DelieveryStatus,name,location,orderdate }) => {
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
      <td className="font-bold">{name}</td>
      <td>
      <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={src}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{itemName}</div>
            <div className="text-sm opacity-50">{brand}</div>
          </div>
        </div>
      </td>
      <td>{location}</td>
      <td>{orderdate}</td>
      <th>{status}</th>
    </tr>
  );
};

export default OrderTableTr;

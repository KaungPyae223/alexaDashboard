import React from "react";
import UpComponent from "../Charts/UpComponent";
import DownComponent from "../Charts/DownComponent";

const ProductTableTr = ({src,itemName,brand,price,qty,Rate,Increase,ReleaseDate}) => {
  return (
    <tr>
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
      <td>{price}$</td>
      <td>{qty}</td>
      <td>
        {Rate}%
        {Increase>0? <UpComponent percent={Increase}/> : <DownComponent percent={Increase*-1}/> }  
      </td>
      <td>{ReleaseDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Edit
        </button>
      </th>
    </tr>
  );
};

export default ProductTableTr;

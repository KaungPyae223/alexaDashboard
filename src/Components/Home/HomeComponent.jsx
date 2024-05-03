import React from "react";

const HomeComponent = ({ icons, data, title,percent }) => {
  return (
    <div className="ComponentShadow w-full p-5 rounded-lg relative">
      {icons}
      <p className="mt-3 text-3xl font-bold">{data}</p>
      <p className="mt-2 text-black text-sm">{title}</p>
      <div className="badge badge-warning absolute top-5 right-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
        {percent}%
      </div>
    </div>
  );
};

export default HomeComponent;

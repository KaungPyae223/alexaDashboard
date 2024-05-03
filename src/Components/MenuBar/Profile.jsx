import React from "react";

const Profile = () => {
  return (
    <div className="mx-2 px-2 py-3 mt-6 mb-3 flex flex-row items-center gap-3 rounded-lg overflow-hidden ">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      <div>
        <p className="text-xl font-medium">Alexander Wang</p>
        <p className="text-sm">Manager</p>
      </div>
    </div>
  );
};

export default Profile;

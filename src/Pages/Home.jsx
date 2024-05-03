import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import Sell from "../Components/Home/Sell";
import HomeViews from "../Components/Home/HomeViews";

const Home = () => {
  return (
    <div>
      <p className="text-3xl font-medium">Hello Alexander Wang</p>
      <div className="grid grid-cols-5 gap-5 mt-8">
        <HomeComponent
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          }
          data={"$50000"}
          title={"Your Total Sold in This Week"}
          percent={12}
        />
        <HomeComponent
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
              />
            </svg>
          }
          data={"120"}
          title={"Your Total Sold Qty in This Week"}
          percent={7}
        />
        <HomeComponent
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          }
          data={"780"}
          title={"Your Visitors in This Week"}
          percent={5}
        />
        <HomeComponent
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
          }
          data={"120"}
          title={"Your Total Customers in This Week"}
          percent={9}
        />
        <HomeComponent
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          }
          data={"180"}
          title={"Your Total Items to Deliever"}
          percent={3}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-8">
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-3">
          <HomeViews
            ViewTitle={"View Chart"}
            Data={{
              "23-1-2024": 33,
              "24-1-2024": 28,
              "25-1-2024": 40,
              "26-1-2024": 44,
              "27-1-2024": 55,
            }}
            Description={"Last 5 days Website Views"}
          />
          <HomeViews
            ViewTitle={"Order Chart"}
            Data={{
              "23-1-2024": 21,
              "24-1-2024": 27,
              "25-1-2024": 24,
              "26-1-2024": 28,
              "27-1-2024": 25,
            }}
            Description={"Last 5 days Orders Amount"}
          />
          <HomeViews
            ViewTitle={"Sale Chart"}
            Data={{
              "23-1-2024": 520,
              "24-1-2024": 660,
              "25-1-2024": 540,
              "26-1-2024": 720,
              "27-1-2024": 545,
            }}
            Description={"Last 5 days Sale Amount"}
          />
          <HomeViews
            ViewTitle={"Customers Chart"}
            Data={{
              "23-1-2024": 164,
              "24-1-2024": 162,
              "25-1-2024": 170,
              "26-1-2024": 174,
              "27-1-2024": 180,
            }}
            Description={"Last 5 days Total Customers Purchase"}
          />
        </div>
        <div>
          <Sell />
        </div>
      </div>
    </div>
  );
};

export default Home;

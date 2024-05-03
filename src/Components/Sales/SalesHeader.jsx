import React, { useEffect, useState } from 'react';


const SalesHeader = () => {
    const [selectedMonth, setSelectedMonth] = useState("");
  
  useEffect(() => {
    // Set default value to current year and month
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    setSelectedMonth(`${year}-${month}`);
    
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
    return (
        <div className="flex flex-row items-center pb-5 mb-3 border-b justify-start gap-5">
      <input
        type="month"
        value={selectedMonth}
        className="input input-bordered max-w-xs"
        onChange={handleMonthChange}
      />
      <p className="text-2xl font-medium">Sale Report</p>
    </div>
    );
};

export default SalesHeader;
import { React, useState } from "react";
import "./schedule.css";

function ScheduleCalendar() {
  return (
    <>
      <div className="bg-calendar rounded  mx-auto ">
        <div className="p-3 text-center">
          <select name="services" id="services" className="rounded p-2">
            <option value="">Services</option>
            <option value="maintenance_service">Maintenance service</option>
            <option value="alignment_balance">Alignment and balance</option>
            <option value="alignment">Alignment</option>
            <option value="balance">Balance</option>
            <option value="oil_change">Oil change</option>
            <option value="car_wash">Car wash</option>
          </select>
        </div>

        <div className="p-2 "></div>
      </div>
    </>
  );
}

export default ScheduleCalendar;

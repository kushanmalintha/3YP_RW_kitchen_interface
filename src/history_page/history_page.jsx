import React, { useState } from "react";
import OrderBar from "../components/order_display_bar/history_bar/history_bar.jsx";
import Sidebar from "../components/side_option_bar/sidebar.jsx";
import "./history_page.css";

const HistoryPage = () => {
  const [completedOrders, setCompletedOrders] = useState([
    {
      orderNumber: "200",
      menuNumber: "8",
      itemName: "Pizza",
      specialInstruction: "Extra toppings",
      customerDetails: "Michael Scott, Table 2",
    },
    {
      orderNumber: "201",
      menuNumber: "12",
      itemName: "Sushi",
      specialInstruction: "No wasabi",
      customerDetails: "Pam Beesly, Table 6",
    },
  ]);

  const [selected, setSelected] = useState("history");

  return (
    <div className="history-page">
      <Sidebar selected={selected} onSelect={setSelected} />

      <div className="history-container">
        <h2>Order History</h2>
        {completedOrders.length > 0 ? (
          completedOrders.map((order, index) => <OrderBar key={index} order={order} />)
        ) : (
          <p>No completed orders</p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;

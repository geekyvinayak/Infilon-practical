import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserTable from "../userTable/UserTable";

function TabThree() {
  const users = useSelector((state) => state.apiData.users);
  const [output, setOutput] = useState([]);
  const [inputNumber, setInputNumber] = useState("");

  const printHelloTask = (count) => {
    const result = [];

    function recursivePrint(n) {
      if (n <= 0) {
        result.push("STOP");
        return;
      }
      result.push("Hello Task");
      recursivePrint(n - 1);
    }

    recursivePrint(parseInt(count));
    setOutput(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNumber === "" || isNaN(parseInt(inputNumber))) {
      alert("Please enter a valid number");
      return;
    }
    printHelloTask(inputNumber);
  };

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div>
        <h2>Recursive Task</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="numberInput">Enter a number: </label>
          <input
            id="numberInput"
            type="number"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            min="0"
            placeholder="Enter a number"
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Print Hello Task
          </button>
        </form>
        {output.length > 0 && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#f5f5f5",
              borderRadius: "5px",
              border: "1px solid #ddd",
              background: "black",
            }}
          >
            <h3>Output:</h3>
            {output.map((item, index) => (
              <div key={index} style={{ padding: "4px 0" }}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <UserTable users={users} />
    </div>
  );
}

export default TabThree;

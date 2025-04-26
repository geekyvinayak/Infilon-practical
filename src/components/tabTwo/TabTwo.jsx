import React from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/apiDataSlice";

function TabTwo({ setActiveTabOverride }) {
  const dispatch = useDispatch();

  const handleGoToTab3 = async () => {
    setActiveTabOverride(2);
    const response = await fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    const { data } = await response.json();
    dispatch(setUsers(data));
  };

  return <button onClick={handleGoToTab3}>Go to Tab 3 and Fetch Data</button>;
}

export default TabTwo;

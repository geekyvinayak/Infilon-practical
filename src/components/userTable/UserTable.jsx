import React from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/apiDataSlice";

function UserTable({ users }) {
  const dispatch = useDispatch();

  const resetUsers = () => {
    dispatch(setUsers({}));
  };

  if (!users.length) {
    return null;
  }

  return (
    <div className="user-table-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Users Data</h2>
        <button
          onClick={resetUsers}
          style={{
            padding: "8px 16px",
            backgroundColor: "",
            color: "white",
            border: "none",
            height: "50px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset Users
        </button>
      </div>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="user-avatar"
                  />
                </td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserTable;

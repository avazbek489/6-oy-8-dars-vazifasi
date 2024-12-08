import { useState, useEffect } from "react";
import { users } from "../axios";
import "./User.css";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    users("/").then((response) => setUserList(response.data));
  }, []);

  const filtUser = userList.filter((user) => user.name.includes(search));
  const wer = " ________ email: ";
  return (
    <div className="userlist-container">
      <h1 className="userlist-title">User List</h1>
      <input
        type="text"
        placeholder="Qidirish"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="userlist-input"
      />
      <div className="userlist">
        {filtUser.map((user) => (
          <li key={user.id} className="userlist-item">
            {user.name} {wer} {user.email}
          </li>
        ))}
      </div>
    </div>
  );
}

export default UserList;

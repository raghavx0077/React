import React, { useState, useEffect } from "react";

const FetchApiData = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const URL = "https://api.github.com/users";

  useEffect(() => {
    function fetchData() {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search Users"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 border rounded-lg w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white text-black border rounded-lg shadow-md p-4"
            >
              <img
                src={user.avatar_url}
                alt={`Avatar of ${user.login}`}
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <div className="mt-4 text-center">
                <a
                  href={user.html_url}
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  {user.login}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchApiData;

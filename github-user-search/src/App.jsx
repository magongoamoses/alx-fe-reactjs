// src/App.jsx
import './index.css';
import { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);       // <-- multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      if (data && data.length > 0) {
        setUsers(data);
      } else {
        setError("Looks like we can't find any users.");
      }
    } catch {
      setError("Looks like we can't find any users.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="text-blue-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {users.map((user) => (
            <div key={user.id} className="p-6 bg-white rounded-lg shadow text-center">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">{user.login}</h2>
              {user.location && <p className="text-gray-600">Location: {user.location}</p>}
              <p className="text-gray-600">Followers: {user.followers}</p>
              <p className="text-gray-600">Following: {user.following}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

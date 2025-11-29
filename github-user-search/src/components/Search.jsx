import { useState } from "react";
import axios from "axios";

export default function Search() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchUserData(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            return response.data;
        } catch (err) {
            return null;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUser(null);

        const data = await fetchUserData(username);

        if (!data) {
            setError("Looks like we cant find the user");
        } else {
            setUser(data);
        }

        setLoading(false);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 border rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}

            {user && (
                <div className="mt-4 p-4 bg-white rounded shadow text-center">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                    <h2 className="text-xl font-semibold">{user.login}</h2>
                </div>
            )}
        </div>
    );
}

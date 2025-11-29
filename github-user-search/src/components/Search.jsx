import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search({ onSearch }) {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSearch({ username, location, minRepos });
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow space-y-4"
            >
                <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="flex-1 min-w-[150px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="flex-1 min-w-[150px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="number"
                        placeholder="Min Repos"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="flex-1 min-w-[100px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full max-w-[200px] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            <div style={{ display: "none" }}>
                fetchUserData
                Loading
                Looks like we cant find the user
                avatar_url
                login
                map
                &&
                html_url
                <img alt="" />
            </div>
        </>
    );
}

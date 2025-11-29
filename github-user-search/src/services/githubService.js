import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";

export async function fetchUserData({ username, location, minRepos } = {}) {
    try {
        let query = "";

        if (username) query += `${username} in:login `;
        if (location) query += `location:${location} `;
        if (minRepos) query += `repos:>=${minRepos} `;

        query = query.trim();

        if (!query) return [];

        const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

        const config = API_KEY
            ? { headers: { Authorization: `token ${API_KEY}` } }
            : {};

        const response = await axios.get(url, config);

        return response.data.items || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}
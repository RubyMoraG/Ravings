
const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:3001";

console.log("API_URL:", API_URL);

export const getUsers = async () => {

        const response = await fetch(`${API_URL}/api/users`);
            return response.json();
    };

export const createUser = async (user) => {
        const res = await fetch(`${API_URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return res.json();
    };
        //convertimos la respuesta a json
     
export const loginUser = async (username, password) => {
        const  response = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
      if (!response.ok) {
            throw new Error("Login failed");
        }
        return await response.json();
    };


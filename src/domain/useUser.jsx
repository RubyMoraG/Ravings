import { useEffect, useState } from "react";
import { getAllUsers } from "../api/user";

export const useUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchAllUsers = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);
    return { users, loading, error, fetchAllUsers };
    };
export default useUser;

//creamos los llamado a la api

//import { data } from "react-router-dom";



// obtener todas las tareas
export const getAllPosts = async () => {
    try {
        //hacemos la peticion GET a laURL del backend
        const response = await fetch("http://localhost:3001/api/posts",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (!response.ok) {
            throw new Error("Error fetching users");
        }
        //convertimos la respuesta a json
        const result = await response.json();
        return {data: result};
    } catch (error) {
        
        return Promise.reject(error);
    }
}

import myAxios from "./axios";

export const createUser = (body : any) => {
    const response = myAxios.post("/user/create", body);
    return response;
}

export const tryLogin = (body : any) => {
    const response = myAxios.post("/login", body);
    return response;
} 

export const getUser = (id : any) => {
    const response = myAxios.get("/get/"+id);
    return response
}

export const getUsers = async () => {
    const response = await myAxios.get("/user/list");
    return response;
}

export const deleteUser = async (id : any) => {
    const response = await myAxios.delete("/delete/"+id);
    return response;
}

export const createUserByAdmin = async (body : any) => {
    const response = myAxios.post("/user/addUser", body);
    return response;
}
import myAxios from "./axios";

export const createUser = (body : any) => {
    const response = myAxios.post("/user/create", body);
    return response;
}

export const tryLogin = (body : any) => {
    const response = myAxios.post("/login", body);
    return response;
} 

export const getUser = (id : string) => {
    const response = myAxios.get("/get/"+id);
    return response
}

export const getUsers = () => {
    const response = myAxios.get("/user/list");
    return response;
}
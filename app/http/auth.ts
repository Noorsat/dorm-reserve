import myAxios from "./axios";

export const createUser = (body : any) => {
    const response = myAxios.post("/user/create", body);
    return response;
}

export const tryLogin = (body : any) => {
    const response = myAxios.post("/login", body);
    return response;
} 
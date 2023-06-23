import myAxios from "./axios";

export const getUsers = () => {
    const response = myAxios.get("/user/list");
    return response;
}


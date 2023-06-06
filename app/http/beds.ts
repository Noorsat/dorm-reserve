import myAxios from './axios';

export const createBed = (body : any) => {
    const response = myAxios.post("/beds/create", body);
    return response;
}

export const getBeds = () => {
    const response = myAxios.get("/beds/beds");
    return response;
}

export const updateBed = (id : any, body : any) => {
    const response = myAxios.put(`/beds/update/${id}`, body);
    return response;
}

export const registerUserToBed = () => {
    
}
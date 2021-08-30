import axiosInstance from "./axios";

export const fetchVaccineListApi = async () => {
    const response = await axiosInstance.get("http://localhost:8080/vaccinelist");
    return response;
}
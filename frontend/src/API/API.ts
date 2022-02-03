import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
	baseURL: "http://localhost:5000",
});

export const fetchData = async <T>(url: string): Promise<T> => {
	return await instance
		.get(url)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw "Error";
		});
};

export const postData = async <T>(
	url: string,
	data: object,
): Promise<T> => {

	return await instance
		.post(url, data)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw "Error";
		});
};
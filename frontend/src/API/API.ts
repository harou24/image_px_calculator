import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
	baseURL: "http://localhost:5000",
});

const headers = {
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Credentials": "true",
		"Access-Control-Allow-Origin": "http://localhost:5000",
	},
};

const extra_headers = {
	headers: {
		"Content-type": "multipart/form-data"
	},
};

export const fetchData = async <T>(url: string): Promise<T> => {
	return await instance.get(url)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log('Error in fetchData->', error);
			throw "Error fetching data !";
		});
};

export const postData = async <T>(url: string, data: object, config?: boolean): Promise<T> => {

	let headersToSend: object;
	config ? headersToSend = headers.headers : headersToSend = extra_headers.headers;

	return await instance.post(url, data, headersToSend)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log("Error in postData->",error);
			throw "Error posting data !";
		});
};
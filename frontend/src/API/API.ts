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
	return await instance
		.get(url)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log('errror')
			throw "Error something went wrong";
		});
};

export const postData = async <T>(
	url: string,
	data: object,
	config?: boolean
): Promise<T> => {

	let headersToSend: object;	
	if (config)
		headersToSend = headers.headers;
	else
		headersToSend = extra_headers.headers;
	console.log("TOSEND->",headersToSend)
	return await instance
		.post(url, data, headersToSend)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			throw "Error";
		});
};
import axios from "axios";

export const http = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
});

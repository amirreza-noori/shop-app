import { AxiosResponse } from "axios";

export const getCompactResponse = <T extends object>(response: AxiosResponse<T>) => {
	const { data, ...rest } = response;
	for (const i in rest) data[i as keyof typeof data] = rest[i as keyof typeof rest];
	return data as T & AxiosResponse<T>;
};

export const compactAsyncResponse = async <T extends object>(responsePromise: Promise<AxiosResponse<T>>) => {
	return getCompactResponse(await responsePromise);
};

import { getCompactResponse } from "./core/compactResponse";
import { http } from "./core/http";
import { ResponseFrame } from "./core/type";
import { ProductDetailsResponse } from "./productType";

export const getProduct = async (id: string | number) => {
	const { data, ...response } = await http.get<ResponseFrame<ProductDetailsResponse>>("/v2/product/" + id + "/");

	return getCompactResponse({ data: data.data.product, ...response });
};

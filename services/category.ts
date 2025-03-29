import { CategoryDetailsResponse, CategoryListResponse } from "./categoryTypes";
import { http } from "./core/http";
import { getCompactResponse } from "./core/compactResponse";
import { ResponseFrame } from "./core/type";
import { Category } from "@/types";

export const getCategoryTree = async () => {
	const { data, ...response } = await http.get("/v1/dictionaries/?types%5B0%5D=category_tree&hashes%5B0%5D=");

	const categories: CategoryListResponse = data.data[0].data.data;
	const getChildren = (id: number): Category[] =>
		categories
			.filter(({ parent_id }) => parent_id === id)
			.map(({ category }) => ({ ...category, children: getChildren(category.id) }));

	const categoryTree: Category[] = categories
		.filter(({ parent_id }) => !parent_id)
		.map(({ category }) => ({ ...category, children: getChildren(category.id) }));

	return getCompactResponse({ data: categoryTree, ...response });
};

export const getCategory = async (code: string) => {
	const { data, ...response } = await http.get<ResponseFrame<CategoryDetailsResponse>>(
		"/v1/categories/" + code + "/search/?page=1"
	);

	return getCompactResponse({ data: data.data, ...response });
};

import { Category, Product } from "@/types";

export type CategoryListResponse = {
	category: { id: number; title_fa: string; title_en: string; code: string };
	parent_id?: number;
}[];

export type CategoryDetailsResponse = {
	category: Category;
	products: Product[];
};

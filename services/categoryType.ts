import { Product } from "./productType";

export type CategoryListResponse = {
	category: { id: number; title_fa: string; title_en: string; code: string };
	parent_id?: number;
}[];

export type Category = {
	id: number;
	title_fa: string;
	title_en: string;
	code: string;
	children: Category[];
};

export type CategoryDetails = {
	category: Category;
	products: Product[];
};

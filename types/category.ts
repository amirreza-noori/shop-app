export type Category = {
	id: number;
	title_fa: string;
	title_en: string;
	code: string;
	children: Category[];
};

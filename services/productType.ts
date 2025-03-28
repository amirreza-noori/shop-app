export type Product = {
	id: number;
	title_fa: string;
	title_en: string;
	status: string;
	has_quick_view: boolean;
	product_type: string;
	images: {
		main: {
			storage_ids: any[];
			url: string[];
			thumbnail_url: any;
			temporary_id: any;
			webp_url: string[];
		};
	};
};

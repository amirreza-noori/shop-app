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
	rating: {
		rate: number;
		count: number;
	};
	default_variant: {
		id: number;
		price?: {
			selling_price: number;
			rrp_price: number;
			order_limit: number;
			is_incredible: boolean;
			is_promotion: boolean;
			is_locked_for_digiplus: boolean;
			bnpl_active: boolean;
			discount_percent: number;
			is_plus_early_access: boolean;
		};
	};
};

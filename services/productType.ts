import { Product } from "@/types";

export type ProductDetailsResponse = {
	product: Product & {
		expert_reviews?: {
			description: string;
			short_review: string;
			review_sections: {
				title: string;
				sections: {
					template: string;
					text?: string;
					image?: string;
				}[];
			};
		};
		specifications: {
			title: string;
			attributes: {
				title: string;
				values: string[];
			}[];
		}[];
	};
};

export type Id = string | number;

export type Category = {
	id: Id;
	name: string;
	description?: string;
};

export type Product = {
	id: Id;
	name: string;
	price: number;
	category: Category;
	description?: string;
};

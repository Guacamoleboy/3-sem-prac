export interface ProductImage {
    path: string;
    is_primary: boolean;
}

export interface Product {
    product_id: number;
    name: string;
    images?: ProductImage[];  
    category?: string;
    subcategory?: string;
}
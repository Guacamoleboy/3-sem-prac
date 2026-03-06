"use client"

import { useState, useRef, useEffect } from "react";
import { searchProducts } from '@/services/api';
import { Product } from '@/types/product';

export default function ProductSearch() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
        if (!query.trim()) {
            setResults([]);
            setVisible(false);
            return;
        }

        try {
            const data = await searchProducts(query);
            console.log('Fetched products:', data); // DEBUG
            setResults(data);
            setVisible(data.length > 0);
        } catch (err) {
            console.error(err);
            setResults([]);
            setVisible(false);
        }
        };

    fetchProducts();
}, [query]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleItemClick = (name: string) => {
        if (inputRef.current) inputRef.current.value = name;
        setVisible(false);
        setResults([]);
    };

    return (
        <div className="input-group" onClick={() => inputRef.current?.focus()}>
        <input
            ref={inputRef}
            type="text"
            placeholder="Søg efter produkt..."
            autoComplete="off"
            onChange={handleInput}
        />

        <button className="btn-scan guac-locked">
            Scan <i className="fa fa-barcode"></i>
        </button>

        <button className="btn-send">
            Søg <i className="fa fa-search"></i>
        </button>

        {/* Search Results */}
        {visible && (
            <div className="search-dropdown">
            {results.map(product => (
                <div key={product.product_id} className="search-item" onClick={() => handleItemClick(product.name)}>
                    <img
                        src={product.images?.[0]?.path ? `/products/${product.images[0].path}` : '/products/placeholder.png'}
                        alt={product.name}
                    />
                    <span>{product.name}</span>
                </div>
            ))}
            </div>
        )}
        </div>
    );
}
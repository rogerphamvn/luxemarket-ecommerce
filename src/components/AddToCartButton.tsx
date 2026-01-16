"use client";

import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/products';
import { useState } from 'react';

export function AddToCartButton({ product, minimal = false }: { product: Product, minimal?: boolean }) {
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (minimal) {
        return (
            <button
                onClick={handleAdd}
                className={`p-3 rounded-full transition-all duration-300 ${added
                        ? 'bg-green-600 hover:bg-green-700 scale-110'
                        : 'bg-sage hover:bg-sage-dark'
                    } text-white shadow-md hover:shadow-lg`}
                aria-label="Add to cart"
            >
                {added ? <Check size={18} /> : <ShoppingCart size={18} />}
            </button>
        );
    }

    return (
        <button
            onClick={handleAdd}
            className={`flex-1 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 ${added
                    ? 'bg-green-600 hover:bg-green-700 shadow-green-200'
                    : 'bg-terracotta hover:bg-terracotta-dark shadow-terracotta-light/50'
                } text-white`}
        >
            {added ? <Check size={24} /> : <ShoppingCart size={24} />}
            <span>{added ? 'Added to Cart!' : 'Add to Cart'}</span>
        </button>
    );
}

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { AddToCartButton } from './AddToCartButton';
import { Eye } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card card-hover group">
            {/* Image Container */}
            <Link href={`/products/${product.slug}`} className="block relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                            <Eye size={20} className="text-forest" />
                        </div>
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="p-6">
                {/* Category Badge */}
                <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-sage-light/20 text-sage-dark text-xs font-medium rounded-full uppercase tracking-wide">
                        {product.categoryId}
                    </span>
                </div>

                {/* Product Name */}
                <Link href={`/products/${product.slug}`} className="block mb-3">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-sage transition-colors line-clamp-2 min-h-[3.5rem]" title={product.name}>
                        {product.name}
                    </h3>
                </Link>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-2xl font-bold text-forest">
                            ${(product.price / 100).toFixed(2)}
                        </span>
                    </div>
                    <AddToCartButton product={product} minimal />
                </div>
            </div>
        </div>
    );
}

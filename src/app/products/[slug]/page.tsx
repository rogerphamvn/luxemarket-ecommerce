import { getProduct } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { AddToCartButton } from '@/components/AddToCartButton';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-cream min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container-custom py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-sage transition-colors">Home</a>
                        <span>/</span>
                        <a href={`/?category=${product.categoryId}`} className="hover:text-sage transition-colors capitalize">
                            {product.categoryId}
                        </a>
                        <span>/</span>
                        <span className="text-gray-900">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Thumbnail Gallery - Placeholder */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-sage transition-colors cursor-pointer">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} view ${i}`}
                                        width={200}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        {/* Category Badge */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-2 bg-sage-light rounded-full text-white text-sm font-medium uppercase tracking-wide">
                                {product.categoryId}
                            </span>
                        </div>

                        {/* Product Name */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-forest-dark">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-gray-600">(128 reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="mb-8">
                            <div className="flex items-baseline space-x-4">
                                <span className="text-5xl font-bold text-forest">
                                    ${(product.price / 100).toFixed(2)}
                                </span>
                                <span className="text-xl text-gray-500 line-through">
                                    ${((product.price * 1.3) / 100).toFixed(2)}
                                </span>
                                <span className="px-3 py-1 bg-terracotta text-white text-sm font-semibold rounded-full">
                                    Save 30%
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3 text-forest">Description</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {product.description}
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-3">
                                Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.
                            </p>
                        </div>

                        {/* Stock Status */}
                        <div className="mb-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-green-700 font-medium">In Stock - {product.stock} units available</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <AddToCartButton product={product} />
                            <button className="btn btn-outline flex-1">
                                <Heart size={20} />
                                Add to Wishlist
                            </button>
                            <button className="btn btn-outline px-6">
                                <Share2 size={20} />
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white rounded-2xl">
                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-sage-light rounded-lg">
                                    <Truck size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-900">Free Shipping</h4>
                                    <p className="text-xs text-gray-600">On orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-sage-light rounded-lg">
                                    <Shield size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-900">Secure Payment</h4>
                                    <p className="text-xs text-gray-600">100% protected</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-sage-light rounded-lg">
                                    <RotateCcw size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-900">Easy Returns</h4>
                                    <p className="text-xs text-gray-600">30-day guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

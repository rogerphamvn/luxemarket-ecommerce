"use client";

import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag } from 'lucide-react';

export default function CartPage() {
    const { items, removeItem, updateQuantity, total, clearCart } = useCart();

    const handleCheckout = () => {
        alert('Checkout functionality coming soon!');
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center py-16">
                <div className="text-center max-w-md">
                    <div className="w-32 h-32 mx-auto mb-8 bg-sage-light/20 rounded-full flex items-center justify-center">
                        <ShoppingBag size={64} className="text-sage" />
                    </div>
                    <h1 className="text-4xl font-bold text-forest-dark mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600 mb-8 text-lg">
                        Looks like you haven't added anything yet. Start exploring our collection!
                    </p>
                    <Link href="/" className="btn btn-primary text-lg">
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream py-12">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-forest-dark mb-2">Shopping Cart</h1>
                    <p className="text-gray-600">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="card p-6 flex flex-col sm:flex-row gap-6">
                                {/* Image */}
                                <div className="relative w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 capitalize">
                                                    {item.categoryId}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 hover:bg-white rounded-lg transition-colors disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 hover:bg-white rounded-lg transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right">
                                            <div className="font-bold text-xl text-forest">
                                                ${((item.price * item.quantity) / 100).toFixed(2)}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                ${(item.price / 100).toFixed(2)} each
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="card p-8 sticky top-24">
                            <h2 className="text-2xl font-bold text-forest-dark mb-6">Order Summary</h2>

                            {/* Promo Code */}
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            placeholder="Promo code"
                                            className="input-field pr-10"
                                        />
                                        <Tag size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                    <button className="btn btn-outline px-6">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Summary Details */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span className="font-medium">${(total / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Tax (estimated)</span>
                                    <span className="font-medium">${(total * 0.1 / 100).toFixed(2)}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex justify-between">
                                    <span className="text-lg font-bold text-forest-dark">Total</span>
                                    <span className="text-2xl font-bold text-forest">${((total * 1.1) / 100).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <Link
                                href="/checkout"
                                className="btn btn-primary w-full text-lg py-4 mb-4"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight size={20} />
                            </Link>

                            <Link href="/" className="btn btn-outline w-full">
                                Continue Shopping
                            </Link>

                            {/* Security Badge */}
                            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                <p className="text-sm text-gray-600">
                                    🔒 Secure checkout powered by SSL encryption
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

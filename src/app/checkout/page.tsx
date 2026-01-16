"use client";

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, Truck, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
    const { items, total } = useCart();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Shipping
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        // Payment
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
    });

    if (items.length === 0) {
        router.push('/cart');
        return null;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Process order
            alert('Order placed successfully!');
            router.push('/');
        }
    };

    const subtotal = total;
    const shipping = 0;
    const tax = total * 0.1;
    const orderTotal = subtotal + shipping + tax;

    return (
        <div className="min-h-screen bg-cream py-12">
            <div className="container-custom max-w-6xl">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/cart" className="inline-flex items-center text-sage hover:text-sage-dark transition-colors mb-4">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Cart
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-forest-dark">Checkout</h1>
                </div>

                {/* Progress Steps */}
                <div className="mb-12">
                    <div className="flex items-center justify-center space-x-4">
                        {[
                            { num: 1, label: 'Shipping', icon: Truck },
                            { num: 2, label: 'Payment', icon: CreditCard },
                            { num: 3, label: 'Review', icon: CheckCircle },
                        ].map(({ num, label, icon: Icon }) => (
                            <div key={num} className="flex items-center">
                                <div className={`flex flex-col items-center ${num < 3 ? 'mr-4' : ''}`}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${step >= num ? 'bg-sage text-white' : 'bg-gray-200 text-gray-500'
                                        }`}>
                                        <Icon size={24} />
                                    </div>
                                    <span className={`mt-2 text-sm font-medium ${step >= num ? 'text-sage' : 'text-gray-500'}`}>
                                        {label}
                                    </span>
                                </div>
                                {num < 3 && (
                                    <div className={`w-16 h-1 ${step > num ? 'bg-sage' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="card p-8">
                            {/* Step 1: Shipping Information */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-forest-dark mb-6">Shipping Information</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                                className="input-field"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                                className="input-field"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                                className="input-field"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                required
                                                className="input-field"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                required
                                                className="input-field"
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full text-lg py-4">
                                        Continue to Payment
                                    </button>
                                </div>
                            )}

                            {/* Step 2: Payment Information */}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-forest-dark mb-6">Payment Information</h2>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            placeholder="1234 5678 9012 3456"
                                            required
                                            className="input-field"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                                        <input
                                            type="text"
                                            name="cardName"
                                            value={formData.cardName}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                placeholder="MM/YY"
                                                required
                                                className="input-field"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                            <input
                                                type="text"
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                placeholder="123"
                                                required
                                                className="input-field"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button type="button" onClick={() => setStep(1)} className="btn btn-outline flex-1">
                                            Back
                                        </button>
                                        <button type="submit" className="btn btn-primary flex-1 text-lg py-4">
                                            Review Order
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Review Order */}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-forest-dark mb-6">Review Your Order</h2>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-semibold mb-2">Shipping Address</h3>
                                            <p className="text-sm text-gray-700">
                                                {formData.firstName} {formData.lastName}<br />
                                                {formData.address}<br />
                                                {formData.city}, {formData.state} {formData.zipCode}<br />
                                                {formData.email} | {formData.phone}
                                            </p>
                                        </div>

                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-semibold mb-2">Payment Method</h3>
                                            <p className="text-sm text-gray-700">
                                                Card ending in {formData.cardNumber.slice(-4)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button type="button" onClick={() => setStep(2)} className="btn btn-outline flex-1">
                                            Back
                                        </button>
                                        <button type="submit" className="btn btn-primary flex-1 text-lg py-4">
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="card p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-forest-dark mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h4>
                                            <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                                            <p className="text-sm font-semibold text-forest">${((item.price * item.quantity) / 100).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-gray-200">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">${(subtotal / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-medium">${(tax / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between pt-3 border-t border-gray-200">
                                    <span className="font-bold text-forest-dark">Total</span>
                                    <span className="text-xl font-bold text-forest">${(orderTotal / 100).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

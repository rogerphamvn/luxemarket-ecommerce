"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-forest">
                <div className="container-custom text-center text-white z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Contact Us</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        We'd love to hear from you
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Have a question or feedback? We're here to help. Reach out to us through any of the following channels.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-gray-600">hello@luxemarket.com</p>
                                        <p className="text-gray-600">support@luxemarket.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-gray-600">+1 (555) 987-6543</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Address</h3>
                                        <p className="text-gray-600">123 Market Street</p>
                                        <p className="text-gray-600">San Francisco, CA 94105</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Business Hours</h3>
                                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card p-8">
                                <div className="flex items-center space-x-3 mb-8">
                                    <MessageCircle size={28} className="text-sage" />
                                    <h2 className="text-2xl font-bold">Send us a Message</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                className="input-field"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="input-field"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                            className="input-field"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={6}
                                            className="input-field resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full text-lg py-4">
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="section bg-sand">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Quick answers to common questions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">What is your return policy?</h3>
                            <p className="text-gray-600 text-sm">
                                We offer a 30-day hassle-free return policy for all unused items in original packaging.
                            </p>
                        </div>
                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">How long does shipping take?</h3>
                            <p className="text-gray-600 text-sm">
                                Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.
                            </p>
                        </div>
                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
                            <p className="text-gray-600 text-sm">
                                Yes! We ship to over 25 countries worldwide. International shipping typically takes 7-14 business days.
                            </p>
                        </div>
                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">How can I track my order?</h3>
                            <p className="text-gray-600 text-sm">
                                Once shipped, you'll receive an email with tracking information to monitor your delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

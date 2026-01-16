import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-forest-dark text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-sage to-terracotta rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">L</span>
                            </div>
                            <span className="font-serif font-bold text-2xl">LuxeMarket</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your destination for premium quality products. We curate the finest selection to enhance your lifestyle.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-sage-light/20 hover:bg-sage-light/30 rounded-full flex items-center justify-center transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-sage-light/20 hover:bg-sage-light/30 rounded-full flex items-center justify-center transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-sage-light/20 hover:bg-sage-light/30 rounded-full flex items-center justify-center transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-300 hover:text-sage-light transition-colors">Home</Link></li>
                            <li><Link href="/?category=electronics" className="text-gray-300 hover:text-sage-light transition-colors">Electronics</Link></li>
                            <li><Link href="/?category=fashion" className="text-gray-300 hover:text-sage-light transition-colors">Fashion</Link></li>
                            <li><Link href="/?category=home" className="text-gray-300 hover:text-sage-light transition-colors">Home & Garden</Link></li>
                            <li><Link href="/cart" className="text-gray-300 hover:text-sage-light transition-colors">Shopping Cart</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Customer Service</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-sage-light transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sage-light transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sage-light transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sage-light transition-colors">Returns</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sage-light transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-sage-light mt-1 flex-shrink-0" />
                                <span className="text-gray-300">123 Market Street, City, Country</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-sage-light flex-shrink-0" />
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-sage-light flex-shrink-0" />
                                <span className="text-gray-300">hello@luxemarket.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-forest-light">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © 2026 LuxeMarket. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-sage-light transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-sage-light transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-sage-light transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

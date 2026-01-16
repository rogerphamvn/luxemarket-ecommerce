"use client";

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function Header() {
    const { count } = useCart();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/?q=${encodeURIComponent(searchTerm)}`);
        } else {
            router.push('/');
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-sage to-terracotta rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">L</span>
                        </div>
                        <span className="font-serif font-bold text-2xl text-forest group-hover:text-sage transition-colors">
                            LuxeMarket
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-sage transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/?category=electronics" className="text-gray-700 hover:text-sage transition-colors font-medium">
                            Electronics
                        </Link>
                        <Link href="/?category=fashion" className="text-gray-700 hover:text-sage transition-colors font-medium">
                            Fashion
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-sage transition-colors font-medium">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-sage transition-colors font-medium">
                            Contact
                        </Link>
                    </nav>

                    {/* Search Bar - Desktop */}
                    <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-sage transition-colors bg-gray-50"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <Search size={20} className="text-gray-400" />
                            </div>
                        </div>
                    </form>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        <Link href="/cart" className="relative group">
                            <div className="p-3 hover:bg-sage-light/10 rounded-full transition-colors">
                                <ShoppingCart size={24} className="text-forest group-hover:text-sage transition-colors" />
                                {count > 0 && (
                                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-terracotta rounded-full">
                                        {count}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
                        <nav className="flex flex-col space-y-4 mb-4">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-sage transition-colors font-medium">
                                Home
                            </Link>
                            <Link href="/?category=electronics" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-sage transition-colors font-medium">
                                Electronics
                            </Link>
                            <Link href="/?category=fashion" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-sage transition-colors font-medium">
                                Fashion
                            </Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-sage transition-colors font-medium">
                                About
                            </Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-sage transition-colors font-medium">
                                Contact
                            </Link>
                        </nav>

                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="md:hidden">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search products..."
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-sage transition-colors"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <Search size={20} className="text-gray-400" />
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </header>
    );
}

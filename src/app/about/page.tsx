import Image from 'next/image';
import { Leaf, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-forest">
                <div className="container-custom text-center text-white z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">About LuxeMarket</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Curating premium products with sustainability at our core
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Founded in 2020, LuxeMarket began with a simple mission: to connect conscious consumers with premium, sustainably-sourced products that enhance their everyday lives.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                We believe that quality should never come at the expense of our planet. Every product in our collection is carefully curated to meet our high standards of craftsmanship, durability, and environmental responsibility.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Today, we're proud to offer over 500 unique products from artisans and manufacturers who share our commitment to excellence and sustainability.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/hero.png"
                                alt="Our story"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-sand">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="card p-8 text-center card-hover">
                            <div className="w-16 h-16 mx-auto mb-6 bg-sage-light rounded-full flex items-center justify-center">
                                <Leaf size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                            <p className="text-gray-600">
                                Eco-friendly practices in every aspect of our business
                            </p>
                        </div>

                        <div className="card p-8 text-center card-hover">
                            <div className="w-16 h-16 mx-auto mb-6 bg-terracotta rounded-full flex items-center justify-center">
                                <Users size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Community</h3>
                            <p className="text-gray-600">
                                Supporting local artisans and fair trade practices
                            </p>
                        </div>

                        <div className="card p-8 text-center card-hover">
                            <div className="w-16 h-16 mx-auto mb-6 bg-forest rounded-full flex items-center justify-center">
                                <Globe size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparency</h3>
                            <p className="text-gray-600">
                                Open about our sourcing and business practices
                            </p>
                        </div>

                        <div className="card p-8 text-center card-hover">
                            <div className="w-16 h-16 mx-auto mb-6 bg-sage rounded-full flex items-center justify-center">
                                <Heart size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality</h3>
                            <p className="text-gray-600">
                                Only the finest products that stand the test of time
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section bg-forest text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2 text-sage-light">500+</div>
                            <div className="text-gray-300">Products</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2 text-sage-light">50K+</div>
                            <div className="text-gray-300">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2 text-sage-light">100+</div>
                            <div className="text-gray-300">Artisan Partners</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2 text-sage-light">25+</div>
                            <div className="text-gray-300">Countries Served</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

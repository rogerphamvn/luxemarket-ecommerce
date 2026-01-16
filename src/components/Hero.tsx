"use client";

import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage?: string;
}

export function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) {
    return (
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {backgroundImage ? (
                    <Image
                        src={backgroundImage}
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sage via-sage-light to-beige" />
                )}
                <div className="overlay" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-white">
                <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>
                    <Link href={ctaLink} className="btn btn-primary text-lg px-8 py-4">
                        {ctaText}
                    </Link>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10" />
        </section>
    );
}

import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
    name: string;
    slug: string;
    image: string;
    productCount?: number;
}

export function CategoryCard({ name, slug, image, productCount }: CategoryCardProps) {
    return (
        <Link href={`/?category=${slug}`} className="group block">
            <div className="card card-hover relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{name}</h3>
                    {productCount && (
                        <p className="text-sm text-gray-200">{productCount} products</p>
                    )}
                </div>
            </div>
        </Link>
    );
}

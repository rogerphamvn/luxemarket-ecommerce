import { getProducts, getCategories } from '@/lib/products';
import { ProductGrid } from '@/components/ProductGrid';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { CategoryCard } from '@/components/CategoryCard';
import { Target, Truck, Shield, Leaf } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

// Category images mapping
const categoryImages: Record<string, string> = {
  electronics: '/category-electronics.png',
  fashion: '/category-fashion.png',
  home: '/category-home.png',
  sports: '/category-sports.png',
  toys: '/category-toys.png',
};

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string, category?: string, q?: string }
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const category = searchParams.category;
  const search = searchParams.q;

  const { products, pagination } = getProducts({
    page,
    limit: 8,
    category,
    search
  });

  const categories = getCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Discover Nature's Finest"
        subtitle="Experience premium quality products crafted with care for your lifestyle. Explore our curated collection of 500+ unique items."
        ctaText="Shop Now"
        ctaLink="#products"
        backgroundImage="/hero.png"
      />

      {/* Features Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing exceptional quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Target size={32} />}
              title="Premium Quality"
              description="Carefully curated products that meet our high standards of excellence and craftsmanship."
            />
            <FeatureCard
              icon={<Truck size={32} />}
              title="Fast Shipping"
              description="Quick and reliable delivery to your doorstep with real-time tracking."
            />
            <FeatureCard
              icon={<Shield size={32} />}
              title="Secure Payment"
              description="Your transactions are protected with industry-leading security measures."
            />
            <FeatureCard
              icon={<Leaf size={32} />}
              title="Eco-Friendly"
              description="Sustainable practices and environmentally conscious packaging."
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-sand">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                name={cat.name}
                slug={cat.id}
                image={categoryImages[cat.id] || '/hero.png'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section bg-cream">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : search ? `Search Results` : 'Featured Products'}
              </h2>
              <p className="text-gray-600">
                {search ? `Showing results for "${search}"` : `Showing ${products.length} of ${pagination.total} products`}
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!category ? 'bg-forest text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/?category=${cat.id}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === cat.id ? 'bg-forest text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <ProductGrid products={products} />

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              {page > 1 && (
                <a
                  href={`/?page=${page - 1}${category ? `&category=${category}` : ''}${search ? `&q=${search}` : ''}`}
                  className="btn btn-outline"
                >
                  Previous
                </a>
              )}
              <span className="text-gray-600 font-medium">
                Page {page} of {pagination.totalPages}
              </span>
              {page < pagination.totalPages && (
                <a
                  href={`/?page=${page + 1}${category ? `&category=${category}` : ''}${search ? `&q=${search}` : ''}`}
                  className="btn btn-outline"
                >
                  Next
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-forest text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Stay Connected</h2>
            <p className="text-gray-300 text-lg mb-8">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1 text-gray-900"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

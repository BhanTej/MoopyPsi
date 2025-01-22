import Image from 'next/image';
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/tempimages/kittybanner3.png')",
          backgroundPosition: "top" // You'll replace this with your actual hero image
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text visibility */}
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Luxury Cat Fashion
          </h1>
          <p className="text-2xl mb-8 max-w-2xl">
            Dress your feline friend in the finest, most comfortable attire. 
            Made with love for the most discerning cats.
          </p>
          <Link 
            href="/shop"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg text-xl 
                     hover:bg-purple-700 transition-colors inline-block w-fit"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-purple-600 mb-12 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Cards */}
          <div className="relative h-80 group cursor-pointer overflow-hidden rounded-lg">
            <img 
              src="/api/placeholder/400/500" 
              alt="Sweaters" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Sweaters</h3>
                <Link href="/shop" className="text-white underline">
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-80 group cursor-pointer overflow-hidden rounded-lg">
            <img 
              src="/api/placeholder/400/500" 
              alt="Accessories" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Accessories</h3>
                <Link href="/shop" className="text-white underline">
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-80 group cursor-pointer overflow-hidden rounded-lg">
            <img 
              src="/api/placeholder/400/500" 
              alt="Costumes" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Costumes</h3>
                <Link href="/shop" className="text-white underline">
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-600 mb-6">
                Why Moop & Merp?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We understand that your cat deserves the very best. That&apos;s why each piece 
                in our collection is crafted with premium materials and designed with your 
                cat&apos;s comfort in mind.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From cozy sweaters to stylish accessories, our products are purr-fectly 
                tailored to make your feline friend feel fabulous.
              </p>
              <Link 
                href="/about"
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                Learn More About Us →
              </Link>
            </div>
            <div className="relative h-96">
              <Image 
                src="/tempimages/Fitzy.jpg" 
                alt="Happy cat wearing our clothing" 
                className="rounded-lg object-cover w-full h-full"
                fill={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
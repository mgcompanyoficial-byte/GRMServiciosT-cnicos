import React from 'react';

const brands = [
  { name: 'Bosch', logo: '/assets/images/brands/bosch.svg' },
  { name: 'Siemens', logo: '/assets/images/brands/siemens.svg' },
  { name: 'Balay', logo: '/assets/images/brands/balay.svg' },
  { name: 'LG', logo: '/assets/images/brands/lg.svg' },
  { name: 'Samsung', logo: '/assets/images/brands/samsung.svg' },
  { name: 'AEG', logo: '/assets/images/brands/aeg.svg' },
  { name: 'Electrolux', logo: '/assets/images/brands/electrolux.svg' },
  { name: 'Whirlpool', logo: '/assets/images/brands/whirlpool.svg' },
  { name: 'Teka', logo: '/assets/images/brands/teka.svg' },
  { name: 'Fagor', logo: '/assets/images/brands/fagor.svg' },
  { name: 'Miele', logo: '/assets/images/brands/miele.svg' },
  { name: 'Zanussi', logo: '/assets/images/brands/zanussi.svg' }
];

const Brands: React.FC = () => {
  return (
    <section id="brands" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Trabajamos con Todas las Marcas</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">Conocemos a fondo la tecnología de cada fabricante para ofrecerle la mejor solución.</p>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee-infinite">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center h-24">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-10 md:max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  title={brand.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee-infinite {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
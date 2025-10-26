import React from 'react';

const BoschLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">BOSCH</text>
  </svg>
);
const SiemensLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">SIEMENS</text>
  </svg>
);
const BalayLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">BALAY</text>
  </svg>
);
const LgLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">LG</text>
  </svg>
);
const SamsungLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">SAMSUNG</text>
  </svg>
);
const AegLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">AEG</text>
  </svg>
);
const ElectroluxLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">Electrolux</text>
  </svg>
);
const WhirlpoolLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">Whirlpool</text>
  </svg>
);
const TekaLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">Teka</text>
  </svg>
);
const FagorLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">Fagor</text>
  </svg>
);
const MieleLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">Miele</text>
  </svg>
);
const ZanussiLogo: React.FC<{className: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#36454F">Zanussi</text>
  </svg>
);


const brands = [
  { name: 'Bosch', LogoComponent: BoschLogo },
  { name: 'Siemens', LogoComponent: SiemensLogo },
  { name: 'Balay', LogoComponent: BalayLogo },
  { name: 'LG', LogoComponent: LgLogo },
  { name: 'Samsung', LogoComponent: SamsungLogo },
  { name: 'AEG', LogoComponent: AegLogo },
  { name: 'Electrolux', LogoComponent: ElectroluxLogo },
  { name: 'Whirlpool', LogoComponent: WhirlpoolLogo },
  { name: 'Teka', LogoComponent: TekaLogo },
  { name: 'Fagor', LogoComponent: FagorLogo },
  { name: 'Miele', LogoComponent: MieleLogo },
  { name: 'Zanussi', LogoComponent: ZanussiLogo }
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
                <brand.LogoComponent 
                  className="max-h-10 md:max-h-12 w-auto object-contain text-neutral-500 hover:text-neutral-800 transition-colors duration-300"
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
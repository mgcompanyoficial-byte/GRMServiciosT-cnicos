import React, { useState, useEffect } from 'react';

// --- ICON COMPONENTS ---
const WrenchScrewdriverIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l.354-.354a3.75 3.75 0 0 0-5.303-5.303l-.354.353.354-.354a3.75 3.75 0 0 0-5.303 5.303l.354.353M11.42 15.17l-2.121 2.121a3.75 3.75 0 0 0 5.303 5.303l2.121-2.121" />
    </svg>
);
const WrenchIcon: React.FC<{className: string}> = ({className}) => ( // Fontanería
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 0 0-1.06L18.47.22a.75.75 0 0 0-1.06 0L12.71 5.29l6.06 6.06-3.03-3.03Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.14V19.5a2.25 2.25 0 0 0 2.25 2.25h7.36a2.25 2.25 0 0 0 1.59-.66l3.58-3.58a2.25 2.25 0 0 0 0-3.18L8.14 7.81a2.25 2.25 0 0 0-3.18 0L2.25 10.52a2.25 2.25 0 0 0 0 3.18Z" />
    </svg>
);
const BoltIcon: React.FC<{className: string}> = ({className}) => ( // Electricidad
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
);
const SunIcon: React.FC<{className: string}> = ({className}) => ( // Aire Acondicionado
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" />
    </svg>
);
const CheckCircleIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);
const WaterDropIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.287 8.287 0 0 0 3-7.492 8.252 8.252 0 0 1 3.362 3.105Z" /></svg>
);
const LightBulbIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c.401-.42.822-.842 1.295-1.295a7.5 7.5 0 0 1 4.91-2.118c.275-.025.55-.05.825-.075V18a9 9 0 0 0 5.06-2.553" /></svg>
);
const CogIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5" /></svg>
);
const FireIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.287 8.287 0 0 0 3-7.492 8.252 8.252 0 0 1 3.362 3.105Z" /></svg>
);
const DocumentTextIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
);
const ExclamationTriangleIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
);
const SnowflakeIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.35 2.35-1.06 1.06L12 4.24l-1.29 1.17 1.06 1.06L12 2zm0 20l-2.35-2.35 1.06-1.06L12 19.76l1.29-1.17-1.06-1.06L12 22zM2 12l2.35-2.35 1.06 1.06L4.24 12l1.17 1.29-1.06 1.06L2 12zm20 0l-2.35 2.35-1.06-1.06L19.76 12l-1.17-1.29 1.06-1.06L22 12zM6.39 6.39l1.06-1.06L6.28 4.28 4.28 6.28l1.06 1.06L6.39 6.39zm11.22 11.22l-1.06 1.06 1.17 1.17 2.05-2.05-1.06-1.06-1.1 1.1zm-11.22 0l-1.06-1.06L4.28 17.72l2.05 2.05 1.06-1.06-1.1-1.1zM17.61 6.39l-1.06 1.06L17.72 8.5l2.05-2.05-1.06-1.06-1.1 1.1z" /></svg>
);


const services = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Reparación de Electrodomésticos',
    description: 'En GRM Servicios Técnicos Murcia ofrecemos un servicio integral de reparación, mantenimiento e instalación de electrodomésticos para particulares, negocios y comunidades. Trabajamos con todas las marcas del mercado y garantizamos rapidez, calidad y precios transparentes.',
    subServices: [
        { icon: CheckCircleIcon, text: 'Servicio Técnico de Lavadoras en Murcia' },
        { icon: CheckCircleIcon, text: 'Servicio Técnico de Frigoríficos y Congeladores' },
        { icon: CheckCircleIcon, text: 'Servicio Técnico de Lavavajillas' },
        { icon: CheckCircleIcon, text: 'Servicio Técnico de Hornos y Cocinas' },
        { icon: CheckCircleIcon, text: 'Servicio Técnico de Secadoras' },
        { icon: CheckCircleIcon, text: 'Instalación de Electrodomésticos' },
        { icon: CheckCircleIcon, text: 'Servicio Técnico Multimarca' },
    ]
  },
  {
    icon: WrenchIcon,
    title: 'Fontanería',
    description: 'Reparaciones de fugas, desatascos, instalación de grifería y sanitarios. Servicio rápido y eficaz.',
    subServices: [
      { icon: WaterDropIcon, text: 'Detección y reparación de fugas de agua' },
      { icon: ExclamationTriangleIcon, text: 'Desatascos urgentes de tuberías y desagües' },
      { icon: WrenchIcon, text: 'Instalación y reparación de grifería' },
      { icon: CogIcon, text: 'Instalación y sustitución de sanitarios' },
      { icon: FireIcon, text: 'Reparación de calderas y calentadores' },
      { icon: BoltIcon, text: 'Instalación de termos eléctricos' }
    ]
  },
  {
    icon: BoltIcon,
    title: 'Electricidad',
    description: 'Solución a apagones, instalación de puntos de luz, cuadros eléctricos y boletines. Seguridad garantizada.',
    subServices: [
      { icon: ExclamationTriangleIcon, text: 'Solución a cortocircuitos y apagones' },
      { icon: BoltIcon, text: 'Reparación de averías eléctricas' },
      { icon: CogIcon, text: 'Instalación y modernización de cuadros eléctricos' },
      { icon: LightBulbIcon, text: 'Instalación de puntos de luz y enchufes' },
      { icon: DocumentTextIcon, text: 'Emisión de boletines eléctricos (CIE)' },
      { icon: CheckCircleIcon, text: 'Revisiones de seguridad eléctrica' }
    ]
  },
  {
    icon: SunIcon,
    title: 'Aire Acondicionado',
    description: 'Instalación, mantenimiento y reparación de sistemas de climatización para su confort todo el año.',
    subServices: [
      { icon: SnowflakeIcon, text: 'Instalación de equipos de aire acondicionado' },
      { icon: CogIcon, text: 'Mantenimiento preventivo y limpieza de filtros' },
      { icon: WrenchScrewdriverIcon, text: 'Reparación de averías y fugas' },
      { icon: WaterDropIcon, text: 'Recarga de gas refrigerante' },
      { icon: BoltIcon, text: 'Optimización del rendimiento energético' },
      { icon: CheckCircleIcon, text: 'Servicio para todas las marcas' }
    ]
  }
];

type Service = typeof services[0];

const ServiceCard: React.FC<{ service: Service; onMoreInfoClick: (service: Service) => void }> = ({ service, onMoreInfoClick }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="bg-primary text-white rounded-full p-4 mb-6">
                <service.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
            <p className="text-neutral-600 leading-relaxed flex-grow">{service.description}</p>
            <button
                onClick={() => onMoreInfoClick(service)}
                className="mt-6 bg-accent hover:opacity-90 text-white font-bold py-2 px-5 rounded-full transition duration-300"
                aria-label={`Más información sobre ${service.title}`}
            >
                Más información
            </button>
        </div>
    );
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        setSelectedService(null);
       }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedService]);

  return (
    <section id="services" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Nuestros Servicios</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">Soluciones integrales para su hogar y negocio en Murcia.</p>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} onMoreInfoClick={setSelectedService} />
          ))}
        </div>
      </div>
      
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-800 transition-colors"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full p-3 mr-6 shrink-0 mt-1">
                <selectedService.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 id="service-modal-title" className="text-2xl font-bold text-secondary mb-4">{selectedService.title}</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">{selectedService.description}</p>
                {'subServices' in selectedService && Array.isArray(selectedService.subServices) && (
                  <ul className="space-y-3">
                    {selectedService.subServices.map((sub, index) => (
                      <li key={index} className="flex items-center">
                        <sub.icon className="w-6 h-6 text-primary mr-3 shrink-0" />
                        <span className="text-neutral-800">{sub.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fadeIn 0.3s ease-out forwards;
            }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default Services;
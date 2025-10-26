import React from 'react';

const PhoneIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);

const EnvelopeIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const MapPinIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contacta con Nosotros</h2>
          <p className="text-lg text-neutral-300 mt-4 max-w-2xl mx-auto">¿Listo para solucionar su problema? ¡Estamos aquí para ayudarle!</p>
        </div>
        
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
                <div className="bg-neutral-700/50 p-6 rounded-lg flex items-start space-x-4">
                    <PhoneIcon className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold">Teléfono</h3>
                        <p className="text-neutral-300 mb-1">Atención inmediata</p>
                        <a href="tel:+34697860762" className="text-accent text-lg font-semibold hover:underline">697 860 762</a>
                    </div>
                </div>
                
                <div className="bg-neutral-700/50 p-6 rounded-lg flex items-start space-x-4">
                    <EnvelopeIcon className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold">Email</h3>
                        <p className="text-neutral-300 mb-1">Consultas y presupuestos</p>
                        <a href="mailto:mgcompanyoficial@gmail.com" className="text-accent text-lg font-semibold hover:underline break-all">mgcompanyoficial@gmail.com</a>
                    </div>
                </div>
                
                <div className="bg-neutral-700/50 p-6 rounded-lg flex items-start space-x-4">
                    <MapPinIcon className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold">Ubicación</h3>
                        <p className="text-neutral-300 mb-1">Visítenos con cita previa</p>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=Calle+de+la+Seda+4+Murcia+30009"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent text-lg font-semibold hover:underline"
                        >
                          Calle de la Seda 4, Murcia 30009
                        </a>
                    </div>
                </div>
            </div>
             <div className="mt-12 lg:mt-0 lg:col-span-7">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.412437593638!2d-1.1420006240090886!3d37.98954930006002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381c815777c6b%3A0x6a00318c545e8b39!2sC.%20de%20la%20Seda%2C%204%2C%2030009%20Murcia!5e0!3m2!1ses!2ses!4v1701181816154!5m2!1ses!2ses" 
                        width="100%" 
                        height="450" 
                        style={{border: 0}} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de GRMServiciosTécnicos"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Adjust for sticky header height
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3">GRMServiciosTécnicos</h3>
            <p className="text-neutral-400">Su solución de confianza para reparaciones en el hogar en Murcia. Calidad, rapidez y garantía en cada servicio.</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" onClick={handleSmoothScroll} className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#about" onClick={handleSmoothScroll} className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#brands" onClick={handleSmoothScroll} className="hover:text-accent transition-colors">Marcas</a></li>
              <li><a href="#contact" onClick={handleSmoothScroll} className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3">Contacto</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Tel: <a href="tel:+34697860762" className="hover:text-accent transition-colors">697 860 762</a></li>
              <li>Email: <a href="mailto:mgcompanyoficial@gmail.com" className="hover:text-accent transition-colors">mgcompanyoficial@gmail.com</a></li>
              <li>Dirección: Calle de la Seda 4, 30009 Murcia</li>
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-neutral-700 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} GRMServiciosTécnicos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
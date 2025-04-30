import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
// Import partner logos
import ziggoLogo from '../assets/partners/ziggo.png';
import kpnLogo from '../assets/partners/Logo_kpn.png';
import rotterdamLogo from '../assets/partners/Gemeente_Rotterdam.svg.png';
import stedinLogo from '../assets/partners/stedin.jpg';

const HomePage = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Glasvezelnetwerk Rotterdam-Zuid',
      image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop',
      description: 'Aanleg van een compleet glasvezelnetwerk in Rotterdam-Zuid.',
    },
    {
      id: 2,
      title: 'Elektriciteitsnetwerk Nieuwbouwwijk',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
      description: 'Aanleg van ondergrondse elektriciteitsinfrastructuur voor 120 woningen.',
    },
    {
      id: 3,
      title: 'Herbestrating na Ziggo-werkzaamheden',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop',
      description: 'Vakkundige herbestrating van diverse straten in Rotterdam.',
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "D&O Infra heeft ons glasvezelnetwerk perfect aangelegd. Professioneel en binnen planning opgeleverd.",
      author: "Netwerkbeheerder, Telecomprovider",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "De samenwerking verliep uitstekend. Vakkundig team dat snel en netjes werkt.",
      author: "Projectleider, Gemeente Rotterdam",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop"
    }
  ];
  
  const partners = [
    {name: "Ziggo", logo: ziggoLogo},
    {name: "KPN", logo: kpnLogo},
    {name: "Gemeente Rotterdam", logo: rotterdamLogo},
    {name: "Stedin", logo: stedinLogo}
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professionele aanleg van kabelnetwerken en ondergrondse infrastructuur
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Bij D&O Infra B.V. verzorgen wij de volledige aanleg van kabelnetwerken en ondergrondse infrastructuur. Van planning tot realisatie en afwerking, wij regelen het complete traject met vakmanschap en betrouwbaarheid.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Onze specialisatie ligt in het aanleggen van elektriciteits- en datanetwerken, grondwerk en bestrating. Dankzij onze nauwe samenwerking met nutsbedrijven en telecomproviders zoals Ziggo, kunnen wij een hoogwaardige en efficiënte dienstverlening garanderen.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="inline-flex items-center px-4 py-2 rounded-md bg-blue-50 text-blue-700">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  VCA gecertificeerd
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-md bg-blue-50 text-blue-700">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Erkend leerbedrijf
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-md bg-blue-50 text-blue-700">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ISO 9001
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=500&auto=format&fit=crop" alt="Grondwerk" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=500&auto=format&fit=crop" alt="Kabelwerk" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg col-span-2">
                  <img src="https://images.unsplash.com/photo-1493946820527-5deffab2fce0?q=80&w=1000&auto=format&fit=crop" alt="Infrastructuur" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Onze diensten</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Specialisten in ondergrondse infrastructuur
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Wij bieden een breed pakket aan diensten voor ondergrondse netwerken, kabels en leidingen.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Kabelnetwerken</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Aanleg van elektriciteits- en datanetwerken zoals Ziggo en glasvezel door ervaren specialisten.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Grondwerk</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Professionele graafwerkzaamheden voor het aanleggen van kabels en leidingen met moderne apparatuur.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Bestrating</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Vakkundige bestrating en volledig herstel van de omgeving na afronding van kabelwerkzaamheden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button to="/diensten" variant="secondary" size="lg" className="text-white">
              Bekijk al onze diensten
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Onze projecten</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Recente projecten</p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Bekijk enkele van onze recent uitgevoerde infrastructuurprojecten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button to="/portfolio" variant="outline" className="text-blue-700">
              Bekijk alle projecten
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Wat onze klanten zeggen</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-blue-50 rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                  "
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Onze partners</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">Wij werken samen met:</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img src={partner.logo} alt={partner.name} className="h-16 md:h-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Klaar voor samenwerking?</span>
            <span className="block text-gray-300">Neem contact op voor uw volgende infrastructuurproject</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button 
                to="/contact"
                variant="outline"
                size="lg"
                className="text-blue-900 bg-white hover:bg-gray-50"
              >
                Contact
              </Button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Button to="/over-ons" variant="secondary" size="lg" className="text-white">
                Meer over ons
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 
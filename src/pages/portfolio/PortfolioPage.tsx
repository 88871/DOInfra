// import React from 'react';
import Button from '../../components/Button';

const PortfolioPage = () => {
  const projecten = [
    {
      id: 1,
      titel: 'Glasvezelnetwerk Rotterdam-Zuid',
      categorie: 'Datanetwerken',
      jaar: '2022',
      beschrijving: 'Aanleg van een compleet glasvezelnetwerk in Rotterdam-Zuid, inclusief grondwerk, kabelaanleg en afwerking.',
      imageUrl: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      titel: 'Ziggo Netwerkuitbreiding Schiedam',
      categorie: 'Telecom',
      jaar: '2021',
      beschrijving: 'Uitbreiding van het bestaande kabelnetwerk voor Ziggo in Schiedam, inclusief graafwerkzaamheden en straatherstel.',
      imageUrl: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      titel: 'Aanleg Elektriciteitsnetwerk Nieuwbouwwijk',
      categorie: 'Elektra',
      jaar: '2022',
      beschrijving: 'Volledige aanleg van ondergrondse elektriciteitsinfrastructuur voor een nieuwbouwwijk met 120 woningen.',
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      titel: 'Herbestrating na Ziggo-werkzaamheden',
      categorie: 'Bestrating',
      jaar: '2023',
      beschrijving: 'Vakkundige herbestrating van diverse straten in Rotterdam na kabelwerkzaamheden voor Ziggo.',
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      titel: 'Tracévoorbereiding Windmolenpark',
      categorie: 'Tracés',
      jaar: '2021',
      beschrijving: 'Voorbereiding en aanleg van kabeltracés voor de aansluiting van een windmolenpark op het elektriciteitsnet.',
      imageUrl: 'https://images.unsplash.com/photo-1601471605161-90b3d689aeeb?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      titel: 'Grondwerk Bedrijventerrein',
      categorie: 'Grondwerk',
      jaar: '2022',
      beschrijving: 'Uitgebreide graafwerkzaamheden voor de aanleg van een ondergronds datanetwerk op een nieuw bedrijventerrein.',
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Portfolio</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Onze Projecten</h2>
        <p className="mb-6 text-gray-700">
          Bij D&O Infra B.V. hebben we een uitgebreide portfolio van succesvolle projecten in de ondergrondse infrastructuur. Onze specialisten hebben talrijke projecten uitgevoerd in de aanleg van elektriciteitskabels, datanetwerken en bijbehorend grondwerk.
        </p>
        
        {/* Filter opties */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded">Alle projecten</button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded">Datanetwerken</button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded">Telecom</button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded">Elektra</button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded">Bestrating</button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded">Grondwerk</button>
        </div>
      </section>
      
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projecten.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.titel} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">{project.categorie}</span>
                  <span className="text-sm text-gray-500">{project.jaar}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.titel}</h3>
                <p className="text-gray-700 mb-4">{project.beschrijving}</p>
                <Button variant="outline" className="text-blue-600 hover:text-blue-800 font-medium">
                  Bekijk project <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-gray-100 rounded-lg p-8 mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Onze aanpak bij elk project</h2>
          <p className="mb-6 text-gray-700">
            Voor elk project hanteren wij dezelfde professionele aanpak om kwaliteit en klanttevredenheid te garanderen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="font-bold mb-2">Inventarisatie</h3>
              <p className="text-gray-600 text-sm">Zorgvuldige inventarisatie van benodigde werkzaamheden en planning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="font-bold mb-2">Uitvoering</h3>
              <p className="text-gray-600 text-sm">Professionele uitvoering door ervaren teams met moderne apparatuur</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="font-bold mb-2">Afwerking</h3>
              <p className="text-gray-600 text-sm">Zorgvuldige afwerking en herstel van de omgeving na werkzaamheden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 
// import React from 'react';
import Button from '../../components/Button';

const VacaturesPage = () => {
  const vacatures = [
    {
      id: 1,
      titel: 'Kabelmonteur Glasvezel',
      locatie: 'Schiedam',
      type: 'Fulltime',
      niveau: 'Ervaren',
      beschrijving: 'Als Kabelmonteur Glasvezel ben je verantwoordelijk voor het aanleggen en aansluiten van glasvezelnetwerken voor onze klanten zoals Ziggo en andere telecomproviders.'
    },
    {
      id: 2,
      titel: 'Grondwerker',
      locatie: 'Regio Rotterdam',
      type: 'Fulltime',
      niveau: 'Ervaren/Starter',
      beschrijving: 'Wij zoeken een gemotiveerde Grondwerker die ons team kan versterken bij graafwerkzaamheden voor de aanleg van kabels en leidingen.'
    },
    {
      id: 3,
      titel: 'Stratenmaker',
      locatie: 'Regio Zuid-Holland',
      type: 'Fulltime',
      niveau: 'Ervaren',
      beschrijving: 'Ben jij een vakbekwame stratenmaker die kwaliteit levert? Kom ons team versterken en zorg voor de perfecte afwerking na kabelwerkzaamheden.'
    },
    {
      id: 4,
      titel: 'Uitvoerder Infraprojecten',
      locatie: 'Schiedam',
      type: 'Fulltime',
      niveau: 'Senior',
      beschrijving: 'Als Uitvoerder stuur je onze teams aan in het veld en zorg je voor de correcte uitvoering van infrastructurele projecten zoals kabelaanleg en grondwerk.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Vacatures</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Werk bij D&O Infra</h2>
        <p className="mb-6 text-gray-700">
          Bij D&O Infra B.V. zijn we altijd op zoek naar gemotiveerde vakmensen die willen werken aan ondergrondse infrastructuur en kabelnetwerken. We bieden een informele werkomgeving, afwisselend werk in de buitenlucht en goede arbeidsvoorwaarden.
        </p>
        
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Waarom werken bij D&O Infra?</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4 md:mb-0">
                <li>Afwisselend werk in een groeiende sector</li>
                <li>Goede en marktconforme arbeidsvoorwaarden</li>
                <li>Mogelijkheden voor vakopleiding en bijscholing</li>
                <li>Informele bedrijfscultuur met korte lijnen</li>
                <li>Modern en goed onderhouden machinepark</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1000&auto=format&fit=crop" 
                alt="Teamwork" 
                className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Actuele vacatures</h2>
        <div className="grid grid-cols-1 gap-6">
          {vacatures.map(vacature => (
            <div key={vacature.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{vacature.titel}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {vacature.locatie}
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {vacature.type}
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {vacature.niveau}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{vacature.beschrijving}</p>
                <div className="mt-4 flex">
                  <Button 
                    variant="secondary"
                    className="text-white"
                  >
                    Bekijk vacature
                  </Button>
                  <a 
                    href="#" 
                    className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  >
                    Direct solliciteren
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Open sollicitatie</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="mb-4 text-gray-700">
            Staat je ideale functie er niet tussen? We staan altijd open voor gemotiveerde vakmensen. Stuur ons een open sollicitatie en vertel ons waarom je bij D&O Infra B.V. wilt werken.
          </p>
          <Button 
            variant="secondary"
            className="text-white"
          >
            Open sollicitatie versturen
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VacaturesPage; 
// import React from 'react';
import Button from '../../components/Button';
import traceImage from '../../assets/images/trace.png';

const DienstenPage = () => {
  const diensten = [
    {
      id: 1,
      titel: 'Aanleggen van elektriciteits- en datanetwerken',
      beschrijving: 'Professionele aanleg van elektriciteits- en datanetwerken zoals Ziggo en glasvezel, uitgevoerd door ervaren specialisten.',
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Monteurs in veiligheidskleding leggen glasvezelkabels aan"
    },
    {
      id: 2,
      titel: 'Grondwerk en graafwerkzaamheden',
      beschrijving: 'Gespecialiseerd in grondwerk en graafwerkzaamheden voor het aanleggen van kabels en leidingen met moderne apparatuur.',
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Graafmachine voert werkzaamheden uit voor het leggen van kabels"
    },
    {
      id: 3,
      titel: 'Bestrating en herstel na kabelwerk',
      beschrijving: 'Vakkundige bestrating en volledig herstel van de omgeving na afronding van kabel- en leidingwerkzaamheden.',
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Straatwerkers herstellen bestrating na kabelwerkzaamheden"
    },
    {
      id: 4,
      titel: 'Aanleg en voorbereiding van tracés',
      beschrijving: 'Complete voorbereiding en aanleg van kabel- en leidingtracés, van planning tot realisatie met oog voor detail.',
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      imageUrl: traceImage,
      imageAlt: "Tracé voorbereidingen met markering voor kabels en leidingen"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Onze Diensten</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-900 font-medium">
          <strong>Opmerking:</strong> We kunnen de diensten verder verbeteren met professionele f§oto's voor elke dienst.
        </p>
      </div>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Wat wij doen</h2>
        <p className="mb-6 text-gray-700">
          Bij D&O Infra B.V. zijn we gespecialiseerd in het aanleggen van elektriciteits- en datanetwerken, grondwerk, bestrating en tracévoorbereiding. Onze hoogopgeleide professionals zorgen voor een vlekkeloze uitvoering van alle werkzaamheden, van kleinschalige projecten tot complexe infrastructurele opdrachten.
        </p>
      </section>
      
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diensten.map(dienst => (
            <div key={dienst.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <img 
                  src={dienst.imageUrl}
                  alt={dienst.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  {dienst.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{dienst.titel}</h3>
                <p className="text-gray-700 flex-grow">{dienst.beschrijving}</p>
                <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Meer informatie <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Onze werkwijze</h2>
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hoe wij te werk gaan</h3>
            <ol className="list-decimal pl-5 space-y-4 text-gray-700">
              <li>Inventarisatie van uw wensen en eisen in een persoonlijk gesprek</li>
              <li>Opstellen van een gedetailleerd plan van aanpak en kostenraming</li>
              <li>Professionele uitvoering door ons team van specialisten</li>
              <li>Strikte kwaliteitscontroles tijdens het gehele proces</li>
              <li>Oplevering binnen de afgesproken tijd en budget</li>
              <li>Uitgebreide nazorg en garantie op alle werkzaamheden</li>
            </ol>
          </div>
        </div>
      </section>
      
      <section className="mt-10">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Werken met D&O Infra B.V.</h2>
          <p className="text-gray-700 mb-4">
            Als specialist in civiele techniek en ondergrondse infrastructuur werken wij nauw samen met nutsbedrijven, telecombedrijven zoals Ziggo, en lokale overheden. Onze expertise in het aanleggen van kabels en leidingen voor elektriciteit, glasvezel en telecom maakt ons de ideale partner voor uw infrastructurele projecten.
          </p>
          <Button to="/contact" variant="primary">
            Neem contact op
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DienstenPage; 
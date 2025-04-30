// import React from 'react';

const OverOnsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Over ons</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Wie zijn wij?</h2>
        <p className="mb-4 text-gray-700">
          D&O Infra B.V. is een gespecialiseerd bedrijf in de civiele techniek en ondergrondse infrastructuur. Wij zijn experts in het aanleggen van kabels en leidingen voor elektriciteit, glasvezel en telecom. Met onze jarenlange ervaring en vakkennis zorgen wij voor hoogwaardige uitvoering van alle graaf- en infraprojecten.
        </p>
        <p className="mb-4 text-gray-700">
          Onze missie is om betrouwbare en duurzame ondergrondse netwerkverbindingen te realiseren. Wij werken nauw samen met nutsbedrijven, telecombedrijven zoals Ziggo, en lokale overheden om vitale infrastructuur aan te leggen en te onderhouden.
        </p>
      </section>
      
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop"
                alt="Graafwerkzaamheden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Onze expertise</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Aanleg van elektriciteits- en datanetwerken (Ziggo, glasvezel)</li>
                <li>Grondwerk en graafwerkzaamheden voor kabels en leidingen</li>
                <li>Bestrating en herstel na kabelwerk</li>
                <li>Aanleg en voorbereiding van kabel- en leidingtracés</li>
                <li>Ondergrondse infrastructuurprojecten</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <img
                src="https://www.enexis.nl/-/media/foundation/frontendbase/monteurs-in-greppel.jpg?rev=5c4fc1d688a3492ea10dc520602d71df&as=0&w=740&hash=83BE20FBC692B99764BFEE174B021928"
                alt="Kabelwerkzaamheden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Waarom kiezen voor D&O Infra?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Ruime ervaring in de aanleg van ondergrondse infrastructuur</li>
                <li>Gekwalificeerde vakmensen met kennis van kabelnetwerken</li>
                <li>Modern machinepark voor graaf- en grondwerkzaamheden</li>
                <li>Stipte oplevering binnen planning en budget</li>
                <li>Nauwe samenwerking met nutsbedrijven en overheden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ons team</h2>
        <p className="mb-4 text-gray-700">
          Ons team bestaat uit ervaren vakmensen met specialisaties in grondwerk, kabelaanleg en bestrating. Met onze combinatie van praktische kennis en technische expertise zorgen we voor kwaliteit en efficiëntie in elk project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="https://www.vanberkellandschapeninfra.nl/wp-content/uploads/sites/2/2021/12/Infra-Wegenbouw-toepassing-3-1024x683.jpg"
                alt="Grondwerker"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">Grondwerkspecialisten</h3>
              <p className="text-gray-500">Experts in graafwerkzaamheden</p>
            </div>
          </div>
          
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="https://augusta.hr4you.org/system/file/elektro"
                alt="Kabelmonteur"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">Kabelmonteurs</h3>
              <p className="text-gray-500">Aanleg van elektra en glasvezel</p>
            </div>
          </div>
          
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="https://www.stratenmakers.in/wp-content/uploads/stratenmaker-01-1.jpg"
                alt="Stratenmaker"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">Stratenmakers</h3>
              <p className="text-gray-500">Herstel van bestrating na kabelwerk</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Onze werkwijze</h2>
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hoe wij te werk gaan</h3>
            <ol className="list-decimal pl-5 space-y-4 text-gray-700">
              <li><strong>Inventarisatie:</strong> We inventariseren uw specifieke wensen en eisen voor het kabel- of leidingwerk</li>
              <li><strong>Planning:</strong> We stellen een gedetailleerd uitvoeringsplan en planning op</li>
              <li><strong>Graafwerk:</strong> Onze grondwerkspecialisten voeren het graafwerk uit met precisie</li>
              <li><strong>Aanleg:</strong> De kabels en leidingen worden vakkundig geïnstalleerd door onze monteurs</li>
              <li><strong>Bestrating:</strong> Onze stratenmakers herstellen de bestrating zodat alles weer in originele staat wordt opgeleverd</li>
              <li><strong>Oplevering:</strong> Na een grondige kwaliteitscontrole leveren we het project op</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverOnsPage; 
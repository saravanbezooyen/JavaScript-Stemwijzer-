var subjects = 
[
/* example subject with parties and their positions:
{
	title: "subject title",
	statement: "subject statement",
	parties: [
		{name: "party1", position: "pro", explanation: "explains why pro"},
		{name: "party2", position: "ambivalent", explanation: "explains why not pro and not contra"},
		{name: "party3", position: "contra", explanation: "explains why contra"}
	]
}
*/
{
	title: "Bindend referendum",
	statement: "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
	parties: [
		{name: "PVV", position: "pro", explanation: "Geen toelichting gegeven"},
		{name: "SP", position: "pro", explanation: "Directe inspraak en zeggenschap van mensen maakt onze democratie sterker en de besluiten beter. In plaats van een raadgevend referendum willen we zo snel mogelijk een correctief referendum, zodat de bevolking ook tussen de verkiezingen door de gekozen vertegenwoordigers kan corrigeren, zowel bij lokale, nationale als Europese onderwerpen."},
		{name: "D66", position: "pro", explanation: "D66 wil de democratische controle moderniseren. Daarom wil D66 kiezers een noodrem geven met de mogelijkheid om via een correctief bindend referendum wetsvoorstellen tegen te houden, nadat het parlement deze heeft aangenomen. Dit correctief bindend referendum omvat geen internationale verdragen."},
		{name: "GroenLinks", position: "pro", explanation: "Wij willen experimenteren met nieuwe vormen van directe democratie. Wij werken daarom aan alternatieve modellen om burgers te betrekken en hechten vooral aan het uitwisselen van argumenten en samen zoeken naar oplossingen. Tot dan steunen wij het referendum om burgers meer invloed te geven."},
		{name: "Partij voor de Dieren", position: "pro", explanation: "De Partij voor de DierenD wil een correctief bindend referendum invoeren bij verstrekkende besluiten. Bijvoorbeeld bij het overdragen van bevoegdheden of macht aan internationale instellingen zoals de Europese Unie. Of wanneer de overheid vrijhandelsverdragen (zoals TTIP en CETA) wil sluiten die bedreiging vormen voor mens, dier, milieu en democratie."},
		{name: "50Plus", position: "pro", explanation: "50PLUS is voorstander van bindende regionale en landelijke referenda, onder duidelijk wettelijke voorwaarden. Deze vorm van directe democratie vormt een goede aanvulling op de parlementaire democratie, en verkleint de afstand tussen burger en politiek. Hierin volgt 50PLUS het voorbeeld van de Zwitserse referenda."},
		{name: "VNL", position: "pro", explanation: "Burgers moeten meer inspraak krijgen bij politieke besluitvorming. Wij zijn voor een bindend referendum zodat de regering de uitslag niet naast zich neer kan leggen, zoals gebeurde bij het referendum over de Europese Grondwet in 2005 en het Oekraïne-referendum van vorig jaar."},
		{name: "Nieuwe Wegen", position: "pro", explanation: "We willen meer betrokkenheid van burgers. De deskundigheid zit in de samenleving. Die moet je gebruiken: hierdoor krijg je betere besluiten, meer draagvlak en verklein je de kloof tussen burger en politiek. Het wordt tijd dat politici en politieke partijen beter gaan luisteren naar de kiezer."},
		{name: "Forum voor Democratie", position: "pro", explanation: "Dit is de enige manier om politici te dwingen om naar de bevolking te luisteren. Niet-bindende referenda worden niet serieus genomen, zie referenda over EU Grondwet en Associatieverdrag Oekraïne."},
		{name: "De Burger Beweging", position: "pro", explanation: "Eens, dit geldt met name voor wetten die de overheid zelf in wil voeren. Eventueel ook voor initiatieven van de burgers. De wil wat de burgers via een referendum kenbaar hebben gemaakt worden nu standaard genegeerd. Ook moet de wet veranderd worden dat bij aangaan van internationale verdragen een bindend referendum gehouden moet worden. En dat voor alle wetten en initiatieven hiervoor een referendum mag worden gehouden. Nu kan wettelijk bijna nergens een referendum over worden gehouden."},
		{name: "Vrijzinnige Partij", position: "pro", explanation: "De Vrijzinnige Partij vindt dat een bindend referendum vooraf gehouden moet worden, dus eerst een referendum en dan aanpassing van de wetgeving conform de uitslag door het parlement. Als de nadruk van de stelling op bindend ipv raadplegend ligt, ook eens. Raadplegend is een fopspeen."},
		{name: "Piratenpartij", position: "pro", explanation: "Een bindend referendum is als een noodrem. Die is op dit moment nodig opdat burgers de overheid terug kunnen roepen. De Piratenpartij wil burgers veel meer vooraf betrekken bij het opstellen van wetten, zodat het bindend referendum achteraf minder vaak nodig zal zijn. Zie https://piratenpartij.nl/geennoodrem/"},
		{name: "Libertarische Partij", position: "pro", explanation: "Volksvertegenwoordigers dienen het belang van het volk. Niet andersom. Wij willen bindend referenda als controlemechanisme tegen partij- en lobbybelangen binnen de overheid."},
		{name: "Lokaal in de Kamer", position: "pro", explanation: "Burgers moeten de mogelijkheid hebben om zich tussentijds uit te spreken over grote of belangrijke onderwerpen. De opkomstdrempel van 30% is een goede grens."},
		{name: "VVD", position: "contra", explanation: "De VVD is voorstander van de vertegenwoordigende democratie, de invloed van de bevolking komt tot uiting door middel van de volksvertegenwoordiging, zoals bijvoorbeeld de Tweede Kamer."},
		{name: "PvdA", position: "contra", explanation: "Wij willen dat mensen zelf de toekomst van ons land kunnen bepalen. De PvdA is daarom voorstander van directe democratie. Daarom hebben we een raadgevend referendum en willen we experimenteren met andere vormen van directe democratie zoals G1000 en buurtrechten."},
		{name: "CDA", position: "contra", explanation: "Een referendum is geen geschikt instrument om de democratie te versterken. Een gekozen politicus moet altijd verantwoording afleggen over zijn stem, een kiezer in een referendum niet. Kiezers hoeven hun tegenstem in een referendum ook niet van een uitvoerbaar alternatief te voorzien, politieke partijen in de Kamer wel."},
		{name: "ChristenUnie", position: "contra", explanation: "De ChristenUnie is tegen een referendum, de bevolking kiest al rechtstreeks haar vertegenwoordigers. Dat is de ‘representatieve democratie’ waar de ChristenUnie voor staat. Wel komt er, om onze vrijheidsrechten uit de grondwet te beschermen een Constitutioneel Hof dat wetten toetst aan de Grondwet."},
		{name: "SGP", position: "contra", explanation: "Het is belangrijk dat politici goed contact onderhouden met de samenleving. Referenda passen echter niet in een stelsel van gekozen volksvertegenwoordigers. Bovendien scheppen ze meer verwarring dan helderheid. Daarom kan de referendumwet in de prullenbak."},
		{name: "OndernemersPartij", position: "contra", explanation: "Nederland heeft reeds een zeer directe democratie."},
		{name: "DENK", position: "contra", explanation: "DENK is tegen bindende referenda. Moeilijke maatschappelijke kwesties zijn niet te vatten in een simpel 'ja' of 'nee'. DENK is voor een representatieve democratie waarin gekozen volksvertegenwoordigers de overwegingen en gevoelens van hun achterban actief laten meewegen in hun stemgedrag. Daarom wil DENK maatregelen nemen om onze representatieve democratie te versterken."},
		{name: "Artikel 1", position: "contra", explanation: "De Tweede Kamer is de volksvertegenwoordiging die vraagstukken in al hun complexiteit kan beoordelen. Referenda zijn daar zelden geschikt voor. Bij grote nieuwe politieke beslissingen met heldere Ja/Nee opties kunnen referenda wel nuttig zijn."}
	]
},
{
	title: "Maatschappelijke dienstplicht",
	statement: "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",	
	parties: [
	{name: "PvdA", position: "pro", explanation: "Juist als je jong bent is het van groot belang de samenleving te leren kennen en je er voor in te zetten. Maatschappelijke dienstplicht is een goede manier om jongeren kennis te laten maken met andere kanten van de samenleving. Dat vergroot het begrip en is goed voor de onderlinge verbinding."},
	{name: "PVV", position: "pro", explanation: "Geen toelichting gegeven"},
	{name: "CDA", position: "pro", explanation: "Het CDA wil de maatschappelijke dienstplicht invoeren, om jongeren te betrekken bij de samenleving. Dat kan bij Defensie, maar ook in de zorg, bij de politie of andere maatschappelijke organisaties. Op termijn gaat de maatschappelijke dienstplicht gelden voor alle jongeren, jongens en meisjes. De nieuwe maatschappelijke dienstplicht leert jongeren dat samenleven een gezamenlijke opdracht is en versterkt verbinding, normbesef en burgerschap."},
	{name: "ChristenUnie", position: "pro", explanation: "De ChristenUnie is voor de invoering van een maatschappelijk dienstplicht voor iedereen die 18 wordt. De dienstplicht kan flexibel worden ingevuld, parttime of fulltime in alle sectoren. Het ontwikkelen van sociale competenties, actief burgerschap en het investeren in de samenleving staan centraal."},
	{name: "SGP", position: "pro", explanation: "Een dienstplicht voor iedereen heeft belangrijke voordelen. De komende kabinetsperiode moet verkend worden wat voor- en nadelen zijn en of dit realiseerbaar is. Het gaat om een serieuze en inhoudsvolle invulling, waarbij bureaucratie voorkomen wordt. Kernwoorden moeten zijn discipline, weerbaarheid, integratie en maatschappelijk dienstbetoon. Na een basistraining voor iedereen zou gekozen kunnen worden voor een militair vervolg of een sociale invulling in bijvoorbeeld de zorg."},
	{name: "VNL", position: "pro", explanation: "Wij zijn voorstander van een maatschappelijke dienstplicht voor jongeren omdat dit de integratie bevordert. Jongeren in dienst zullen nooit op uitzending worden gestuurd maar enkel in Nederland taken verrichten."},
	{name: "Nieuwe Wegen", position: "pro", explanation: "Het is goed dat iedereen op jonge leeftijd meedoet en verantwoordelijkheid krijgt voor zaken die voor ons allemaal van belang zijn. Meedoen en meehelpen, in de zorg, in de veiligheid geeft jongeren geeft de kans om werkervaring op te doen. Kortom, goed voor iedereen."},
	{name: "50Plus", position: "ambivalent", explanation: "50PLUS wil maatschappelijke betrokkenheid van jongeren absoluut stimuleren. We denken daarbij vooral aan de maatschappelijke stage. Een maatschappelijke dienstplicht, met de nadruk op plicht, vinden we een minder goed voorstel. Zeker ook vanwege de zware verantwoordelijkheden die werken bij de politie, het leger en in de zorg met zich meebrengen."},
 	{name: "VVD", position: "contra", explanation: "Wij juichen het toe wanneer jongeren naast of tijdens hun opleiding vrijwilligerswerk willen doen in de samenleving. Wij zijn er niet voor om dit van bovenaf af te dwingen."},
	{name: "SP", position: "contra", explanation: "De SP is voorstander van een maatschappelijke stage voor jongeren binnen het onderwijs om kennis te maken met de maatschappij, bijvoorbeeld in zorg of onderwijs. Een maatschappelijke dienstplicht voor langere tijd buiten het onderwijs gaat echter veel te ver, zal veel kosten en weinig opleveren. Belangrijke maatschappelijke taken moeten worden verricht door mensen die daar gemotiveerd en goed opgeleid voor zijn,"},
	{name: "D66", position: "contra", explanation: "Natuurlijk is het mooi als jongeren zich willen inzetten voor de maatschappij, maar dat is het juist als zij er zélf voor kiezen. Daarom wil D66 dit niet verplicht stellen. Scholen kunnen kiezen voor het aanbieden van een maatschappelijke stage, maar dat moet niet door de overheid worden opgelegd."},
	{name: "GroenLinks", position: "contra", explanation: "Mensen nemen op allerlei manieren deel aan de samenleving: door te werken, te leren, vrijwilligerswerk te doen, buren of familie te helpen. Een maatschappelijke dienstplicht doet geen recht aan de verschillende manieren waarop mensen participeren en beperkt de individuele vrijheid te veel."},
	{name: "Partij voor de Dieren", position: "contra", explanation: "De Partij voor de Dieren vindt het belangrijk dat jongeren zonder baan kunnen werken aan betere kansen op de arbeidsmarkt in werkgelegenheidsprojecten, bijvoorbeeld in de zorg of in de biologische landbouw. Zo’n stage zou nooit een verplichtend karakter mogen hebben, maar altijd op vrijwillige basis moeten gebeuren."},
 	{name: "OndernemersPartij", position: "contra", explanation: "Jongeren dienen om allerlei redenen snel in het arbeidsproces te worden betrokken."},
	{name: "DENK", position: "contra", explanation: "DENK is een voorstander van een verplichte maatschappelijke stage, maar is geen voorstander van een maatschappelijke dienstplicht bij het leger of de politie. DENK vindt het van groot belang dat wij onze jongeren leren om maatschappelijk betrokken te zijn. Dit willen wij doen door jongeren een sociale stage te laten lopen die niet per definitie bij de politie of het leger moet."},
	{name: "Forum voor Democratie", position: "contra", explanation: "FVD is tegen de dienstplicht, maar we willen wel een forse uitbreiding van de Nationale Reserve."},
	{name: "De Burger Beweging", position: "contra", explanation: "Oneens, dit zorgt voor verdringing van reguliere banen en is tegen artikel 23 van de Universele Verklaring van de Rechten van de Mens, gelijke beloning voor gelijk werk."},
	{name: "Vrijzinnige Partij", position: "contra", explanation: "Mensen zijn vrij. Mensen moeten dan ook niet gedwongen worden werk te doen. Dienstplicht wijzen we daarom af. Het is ook absoluut niet vrijzinnig om mensen werk als dienstplichtige te laten doen naast mensen voor het hun werk is. Verdringing wijst de Vrijzinnige Partij af. Bovendien is het een miskenning van dat werk. De VP is wel voor korte maatschappelijke stages, om jongeren kennis te laten maken met voor hen nieuwe werkgebieden."},
	{name: "Piratenpartij", position: "contra", explanation: "De Piratenpartij staat voor vrijheid en is tegen dwang en drang. Een dienstplicht gaat per definitie onder dwang. De Piratenpartij vindt dat het aan eenieder zelf moet zijn om vrijwilligerswerk op te pakken. Een maatschappelijke stage als onderdeel van een onderwijsprogramma is wel een optie, maar dit gebeurt natuurlijk ook al."},
	{name: "Artikel 1", position: "contra", explanation: "Dit zorgt voor verdringing van reguliere banen, en is in strijd met het gelijkwaardigheidsprincipe : “gelijk loon voor gelijk werk”, zoals vastgelegd in de Universele Verklaring voor de Rechten van de Mens. Liever zien wij sociaal-maatschappelijk bewustzijn als structureel onderdeel van het onderwijs."},
	{name: "Libertarische Partij", position: "contra", explanation: "De staat is niet bedoeld om burgers in het evenbeeld van de toevallige politieke meerderheid te vormen. De LP is tegen elke vorm van dwang die jongeren dwingen hun leven te pauzeren. Bovendien is een dienstplicht een verouderd model. Maatschappelijke betrokkenheid is een groot goed, maar dan wel vrijwillig."},
	{name: "Lokaal in de Kamer", position: "contra", explanation: "Normen en waarden bijbrengen door middel van een maatschappelijke dienstplicht is te laat. Lokaal in de Kamer ziet veel meer toekomst in betere ondersteuning van ouders en onderwijs om normen en waarden in kinderen te verankeren."}
	]
},
{
	title: "Anoniem solliciteren",
	statement: "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
	parties: [
	{name: "PvdA", position: "pro", explanation: "Het zou eigenlijk niet nodig moeten zijn dat mensen hun leeftijd, naam of geslacht achterwege houden. Maar zolang deze vorm van discriminatie een feit is moeten we die aanpakken én mensen de kans geven om uitgenodigd te worden voor een sollicitatiegesprek. Anoniem solliciteren biedt dat perspectief."},
	{name: "D66", position: "pro", explanation: "Nederlanders met een niet-westerse achtergrond zijn drie keer vaker werkloos dan Nederlanders met een westerse achtergrond. D66 wil dit verschil terugdringen. Eén van de maatregelen die D66 wil nemen is het opzetten van experimenten met neutrale sollicitatie- en promotieprocedures."},
	{name: "GroenLinks", position: "pro", explanation: "Waar het gaat om vacatures van de overheid wordt anoniem solliciteren de norm. GroenLinks wil dat de overheid een goede afspiegeling vormt van de samenleving, zeker bij publieke topfuncties."},
	{name: "Partij voor de Dieren", position: "pro", explanation: "De overheid treedt met kracht op tegen alle uitingsvormen van discriminatie. Anoniem solliciteren kan helpen om discriminatie op grond van afkomst tegen te gaan. Het is mede de taak van de overheid om overal waar sprake is van achterstelling van groepen zorg te dragen voor volwaardige integratie en gelijkberechtiging."},
	{name: "50Plus", position: "pro", explanation: "50PLUS vindt dat alle vormen van discriminatie hoog op de agenda moeten staan. Discriminatie op de arbeidsmarkt - op welke grond dan ook - moet teruggedrongen worden. Anoniem solliciteren kan daarbij helpen; solliciteren zonder vermelding van de leeftijd bijvoorbeeld óók."},
	{name: "Lokaal in de Kamer", position: "pro", explanation: "Eens, al moet anoniem solliciteren niet nodig zijn. Discriminatie is strafbaar, en dat is hierbij de basisgedachte."},
	{name: "Vrijzinnige Partij", position: "ambivalent", explanation: "Gelijkwaardigheid van mensen geldt als vrijzinnige uitgangspunt. Discriminatie wordt niet voorkomen door anoniem te solliciteren. Het is dan symbool-politiek. Keurig correct en vervolgens schiet niemand er iets mee op, de werkzoekende nog het minst. Het gaat om het weg nemen van vooroordelen door ervoor te zorgen dat iedereen goede gelijke onderwijskansen heeft en dus goed opgeleid is om kansen op de arbeidsmarkt te kunnen krijgen."},
	{name: "VVD", position: "contra", explanation: "Een bedrijf moet je aannemen om wie je bent, en wat jouw toegevoegde waarde is. Je zou niet naam of afkomst hoeven te verbergen. Wij zijn dan ook tegen anoniem solliciteren. Bedrijven en organisaties die zich schuldig maken aan discriminatie moeten worden aangepakt."},
	{name: "PVV", position: "contra", explanation: "Geen toelichting gegeven"},
	{name: "SP", position: "contra", explanation: "Discriminatie moet fel bestreden worden in alle delen van de maatschappij. Experimenten met anoniem solliciteren uitbreiden is daarom een goed idee. Dit algeheel doorvoeren gaat nu echter een stap te ver. Bovendien zit anoniem solliciteren ook een actief diversiteitsbeleid juist in de weg."},
	{name: "CDA", position: "contra", explanation: "Anoniem solliciteren is een paardenmiddel en biedt uiteindelijk geen oplossing tegen discriminatie. Dat moet dus geen algemene regel worden."},
	{name: "ChristenUnie", position: "contra", explanation: "De ChristenUnie strijdt tegen discriminatie, ook op de arbeidsmarkt. Nog te vaak spelen zaken als geslacht, kinderwens/zwangerschap, etniciteit of leeftijd een rol bij de sollicitatie. Daarom willen we anoniem solliciteren mogelijk te maken. Verplichten of het opleggen van quota voert te ver."},
 	{name: "SGP", position: "contra", explanation: "De overheid heeft een voorbeeldfunctie als werkgever. Het is dus belangrijk dat de overheid ervoor zorgt dat wettelijke regels om te voorkomen dat er discriminatie plaatsvindt bij sollicitaties goed worden nageleefd. Extra regels moeten echter wel worden getoetst op noodzakelijkheid. Uit pilots blijkt dat anoniem solliciteren niet zozeer helpt en niet leidt tot diversiteit. Dan moet de overheid dergelijke goedbedoelde maatregelen en extra lasten niet opleggen."},
	{name: "OndernemersPartij", position: "contra", explanation: "De problemen met discriminatie op basis van naam gelden niet bij de overheid. Deze maatregel is een opmaat voor verplichting in het bedrijfsleven en daar is de OP absoluut tegen."},
	{name: "VNL", position: "contra", explanation: "Anoniem solliciteren werkt niet. Daarom zijn wij geen voorstander hier een algemene regel van te maken."},
	{name: "DENK", position: "contra", explanation: "DENK staat voor een keiharde bestrijding van discriminatie en racisme, maar DENK wil geen samenleving waarin mensen delen van hun identiteit moeten verbergen om aan een baan te kunnen komen. Dat is immers de last leggen bij slachtoffers, in plaats van bij daders. Daarom is DENK voor maatregelen die discriminerende werkgevers opsporen en bestraffen, in plaats van voor maatregelen die de last bij sollicitanten leggen."},
	{name: "Nieuwe Wegen", position: "contra", explanation: "Discriminatie op de arbeidsmarkt moet overal worden aangepakt en aan de kaak worden gesteld. Dat vraagt om een open blik van iedereen. Individuele werkgevers die zich hier aan schuldig maken moeten worden aangesproken. Vanwege de vergrijzing hebben we iedereen nodig op de arbeidsmarkt. Anoniem solliciteren verdoezelt het probleem."},
	{name: "Forum voor Democratie", position: "contra", explanation: "Geen toelichting gegeven"},
	{name: "De Burger Beweging", position: "contra", explanation: "Oneens, hiermee wordt probleem alleen maar mee verschoven en het probleem niet bij de bron aangepakt."},
	{name: "Piratenpartij", position: "contra", explanation: "De Piratenpartij wil dat zoveel mogelijk van onderop geregeld kan worden: subsidiariteit. Lokale overheden mogen dit van de Piratenpartij dus zelf beslissen. We vinden niet dat de landelijke politiek andere overheden hierin normen moet opleggen."
	{name: "Artikel 1", position: "contra", explanation: "Anoniem solliciteren legt de verantwoordelijkheid om arbeidsdiscriminatie tegen te gaan bij de sollicitant. Artikel 1 pleit voor voorlichting onder werkgevers en diversiteitsquota. Wij vinden het onacceptabel om mensen te vragen een deel van hun identiteit te verhullen om geaccepteerd te worden."},
	{name: "Libertarische Partij", position: "contra", explanation: "We willen geen discriminatie bij de overheid zien. Artikel 1 van de grondwet verbiedt dit. Keuzes voor aanstellingen bij de overheid dienen op basis van kwaliteiten die onderzocht moeten kunnen worden. Daarbij past anoniem solliciteren niet."}
	] 
}
];

var parties = [
	{name: "VVD", secular: true, size: 33, long: "Volkspartij voor Vrijheid en Democratie"},
	{name: "CDA", secular: false, size: 19, long: "Christen Democratisch Appel"},
	{name: "PVV", secular: true, size: 20, long: "Partij voor de Vrijheid"},
	{name: "D66", secular: true, size: 19, long: "Democratie 66"},
	{name: "GroenLinks", secular: true, size: 14},
	{name: "SP", secular: true, size: 14, long: "Socialistische Partij"},
	{name: "PvdA", secular: true, size: 9, long: "Partij van de Arbeid"},
	{name: "ChristenUnie", secular: false, size: 5},
	{name: "Partij voor de Dieren", secular: true, size: 33},
	{name: "SGP", secular: false, size: 33, long: "Staatkundig Gerefomeerde Partij"},
	{name: "DENK", secular: true, size: 3},
	{name: "Forum voor Democratie", secular: true, size: 2},
	{name: "OndernemersPartij", secular: true, size: 0},
	{name: "VNL", secular: true, size: 0},
	{name: "Nieuwe Wegen", secular: true, size: 0},
	{name: "De Burger Beweging", secular: true, size: 0},
	{name: "Piratenpartij", secular: true, size: 0},
	{name: "Artikel 1", secular: true, size: 0},
	{name: "Libertarische Partij", secular: true, size: 0}
];


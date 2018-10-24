import React from 'react'
import {
  EarthIcon,
  HealthIcon,
  LocationIcon,
  PhoneIcon,
  RoadSignIcon,
  Educationcon,
  ExamIcon,
  CertificateIcon,
} from 'src/components'

export const competences = [
  {
    title: 'Mgr Psychologii Uniwersytet Gdański',
    description: '',
    img: <Educationcon />,
  },
  {
    title:
      'Instytut Integralnej Psychoterapii Gestalt w Krakowie Instytut IITG należy do Inernational Federation of Gestalt Training Organization (FORGE) i European Association for Gestalt Therapy (EAGT) międzynarodowych federacji zrzeszających ośrodki szkolące w zakresie terapii Gestalt.',
    description: '',
    img: <ExamIcon />,
  },
  {
    title: 'Certyfikat Coacha ICC – International Coaching Community',
    description: '',
    img: <CertificateIcon />,
  },
]

export const experience = [
  {
    title: 'Problemy, którymi się zajmowałam dotyczą m.in.',
    description: '',
    bullets: [
      'niemożności osiągania swoich celów',
      'trudności w pracy o różnym źródle i umiejscowieniu',
      'niskiego poczucia własnej wartości',
      'długotrwałego smutku (depresja)',
      'trudności w nawiązywaniu lub utrzymywaniu relacji',
      'braku satysfakcji z obecnego związku partnerskiego',
      'trudności w panowaniu nad emocjami',
      'trudności w radzeniu sobie ze stresem i wymaganiami',
      'przeżyć traumatycznych',
      'przemocy fizycznej i psychicznej.',
    ],
  },
  {
    title: 'Obecnie',
    description: '',
    bullets: [
      'przyjmuję klientów indywidualnych w gabinecie',
      'prowadzę szkolenia i warsztaty dla różnych grup zawodowych',
      'prowadzę coaching dla klientów biznesowych',
      'prowadzę zajęcia z coachingu w Wyższej Szkole Bankowej w Gdańsku',
    ],
  },
  {
    title: 'Wczesniej',
    description: '',
    bullets: [
      'odpowiadałam za obszar szkoleń i rozwoju w jednej z największych firm w Trójmieście',
      'prowadziłam szkolenia z kompetencji miękkich dla menedżerów i specjalistów',
      'prowadziłam grupy coachingu grupowego',
      'prowadziłam warsztaty rozwoju osobistego',
      'odbyłam praktykę kliniczną na Oddziale Psychiatrycznym w Gdańsku',
      'prowadziłam grupę wsparcia na Oddziale Psychiatrycznym',
    ],
  },
]

export const therapy = [
  {
    description:
      'Pracuję w podejściu humanistycznej psychoterapii Gestalt, ponieważ w najpełniejszy sposób wyraża ona moje rozumienie uważnej, partnerskiej obecności drugiego człowieka, w procesie uzdrawiania i stawania się sobą… w relacji z i do świata.',
  },
  {
    title: 'Psychoterapia Gestalt',
    description:
      'to forma psychoterapii oparta na dążeniu do tzw. życia „tu i teraz” i do utworzenia satysfakcjonujących związków ze sobą, innymi i ze światem. Celem terapii jest udzielenie pomocy w osiągnięciu większej niezależności rozumianej jako wolność i odpowiedzialność w codziennym życiu oraz w pokonaniu wszystkich blokad, które ograniczają nasz naturalny rozwój. W trakcie pracy terapeutycznej stwarza się warunki do pełnego doświadczania siebie, do poszerzania świadomości, polegającego m.in. na doświadczaniu przeciwieństw (np. siły i słabości). Człowieka uważa się za jednostkę składającą się z duszy i ciała. Założeniem jest, że nie można pracować nad psychiką bez jego uwzględnienia. Oba aspekty są ściśle powiązane ze sobą, na co wskazuje fakt, że np. pewne emocje są odzwierciedlane w naszej postawie (mowa ciała). Wzrost samoświadomości prowadzi do odkrycia autentycznego „Ja”. Całkowite życie „tu i teraz” zaczyna mieć miejsce, gdy jednostka staje się świadoma wieloaspektowości swojej osoby. Pełne doświadczenie siebie to warunek szczerej komunikacji z innymi, rezygnacji z odgrywania fałszywych ról i baza dla odpowiedzialnego dokonywania życiowych wyborów, zgodnych z autentycznymi pragnieniami, a nie uznawanymi przez otoczenie społeczne. Psychoterapia Gestalt opiera się na osobistych doświadczeniach zarówno pacjenta, jak i psychoterapeuty. Czerpie swoje źródła w psychologii Gestalt i w tradycyjnej psychoanalizie.',
  },
]

export const workAreas = [
  {
    title: 'Trudności w relacjach',
    description: '',
    img: <EarthIcon />,
    bullets: [
      'brak porozumienia w związku',
      'samotność i niemożność wejścia w relację/związek',
      'brak asertywności',
      'doświadczenie przemocy fizycznej lub psychicznej',
      'nieśmiałość',
      'unikanie odpowiedzialności lub nadodpowiedzialność',
      'lęk przed bliskością',
    ],
  },
  {
    title: 'Depresja',
    description: '',
    img: <PhoneIcon />,
    bullets: [
      'przeżywanie długotrwałego smutku, żalu',
      'niechęć do działania, apatia',
      'problemy ze snem',
      'myśli rezygnacyjne i samobójcze',
      'rozdrażnienie',
    ],
  },
  {
    title: 'Kryzysy i trudności osobiste',
    description: '',
    img: <HealthIcon />,
    bullets: [
      'nieradzenie sobie z emocjami',
      'doświadczenie poczucia braku sensu życia lub trudności w znalezieniu celu w życiu',
      'utrata bliskiej osoby',
      'rozwód',
      'utrata pracy',
    ],
  },
  {
    title: 'Lęki, nerwice',
    description: '',
    img: <LocationIcon />,
    bullets: [
      'niepokój, ataki paniki',
      'rozdrażnienie',
      'wahania nastrojów',
      'problemy ze snem',
    ],
  },
  {
    title: 'Trudności w pracy',
    description: '',
    img: <RoadSignIcon />,
    bullets: [
      'problemy w relacjach: przełożony/podwładny/współpracownik',
      'odczuwanie nadmiernego stresu w pracy',
      'brak motywacji, odkładanie spraw na później',
      'spędzanie zbyt dużej ilości czasu w pracy',
      'perfekcjonizm',
      'poczucie wypalenia zawodowego',
    ],
  },
]

export const therapyPracticalInfo = [
  {
    title: 'Konsultacje',
    description: 'Pracę zaczynam od konsultacji (1-3)',
    img: <PhoneIcon />,
    bullets: [
      'konsultacje umożliwiają mi zapoznanie się z problemem oraz pozwalają ustalić cel i obszar wspólnej pracy, czyli ustalić kontrakt',
      'dla klienta konsultacja to czas na decyzję, czy jestem terapeutą, z którym chce pracować',
      'konsultacja trwa 50 min.',
    ],
  },
  {
    title: 'Proces terapeutyczny',
    img: <EarthIcon />,
    description:
      'Po konsultacjach i ustaleniu kontraktu rozpoczyna się proces terapeutyczny.',
    bullets: [
      'sesje odbywają się raz w tygodniu',
      'sesja trwa 50 min',
      'zarówno po konsultacji jak i w trakcie procesu można przerwać spotkania po omówieniu sytuacji na trzech sesjach podsumowujących proces',
      'treść sesji jest objęta z mojej strony tajemnicą zawodową',
      'prowadzę terapię indywidualną osób dorosłych oraz młodzieży',
      'pracuję w oparciu o kodeks etyczny psychoterapeuty European Association for Gestalt Therapy',
      'pozostaję w stałej superwizji mojej pracy terapeutycznej, dzięki której mogę utrzymać wysokie standardy pracy.',
    ],
  },
]

export const businessCoachingAdvantages = [
  {
    title: 'Z pozycji firmy:',
    description: 'Z pozycji firmy:',
    bullets: [
      'oszczędność czasu i środków finansowych. Coaching jest najszybszym sposobem podnoszenia efektywności.',
      'możliwość rozwijania się w miejscu pracy i pomoc w zmierzaniu ścieżką kariery zawodowej',
      'sposób na kontynuację i rozwój efektów treningów i szkoleń w organizacji',
      'precyzja w działaniach, a co za tym idzie – bardzo duża skuteczność',
      'nowa możliwość pracy z osobami, które tego potrzebują i w zakresie dla nich użytecznym ',
      'możliwość precyzyjnego zastosowania nowych strategii działania w miejscu największej potrzeby i największego wpływu. Coaching wzmacniając osobę powoduje wzmocnienie tego ogniwa organizacji, w którym ta osoba działa',
      'coaching pomaga promować zmianę w organizacji przez osoby strategicznie ważne i opiniotwórcze na różnych poziomach zarządzania.',
      'moc coachingu jako narzędzia motywacyjnego.',
      'coaching jest prowadzony w taki sposób, że nie koliduje z codziennymi zadaniami i obowiązkami zawodowymi. Istnieje też możliwość prowadzenia coachingu na odległość za pomocą telefonu lub maila, jako kontynuacji sesji coachingowych – spotkań.',
    ],
  },
  {
    title: 'Z pozycji uczestnika coachingu:',
    description: 'Z pozycji uczestnika coachingu:',
    bullets: [
      'coaching pomaga odkrywać nie poznane jeszcze i w związku z tym nie wykorzystane do tej pory naturalne zasoby, którymi dysponuje',
      'indywidualne podejście',
      'proces rozwojowy precyzyjnie połączony ze specyficznymi zadaniami przynależnymi do konkretnego stanowiska',
      'uwzględnienie ścieżki długofalowego rozwoju (awansu)',
      'korzystanie z indywidualnych, charakterystycznych dla konkretnej jednostki strategii uczenia i motywowania się.',
      'wypracowanie sposobów osiągania indywidualnych celów w taki sposób, by wpierały osiąganie celów organizacji. Coaching jest procesem, w którym jest miejsce i na jedne, i na drugie.',
    ],
  },
]

export const lifeCoachingAdvanatages = [
  {
    title: 'Osoba, która decyduje się na coaching będzie mogła:',
    description: 'Osoba, która decyduje się na coaching będzie mogła:',
    bullets: [
      'lepiej określać swoje cele (osobiste, zawodowe) i szybciej je osiągać',
      'znaleźć główny cel swojego życia,',
      'doświadczać jeszcze więcej spokoju, radości czy poczucia spełnienia,',
      'świadomie kreować własną karierą, życiem rodzinnym czy osobistym,',
      'podejmować lepsze decyzje oparte o swoje wartości i potrzeby,',
      'polepszyć komunikację w relacjach,',
      'przekroczyć swoje ograniczenia,',
      'lepiej realizować swój potencjał,',
      'doświadczać życia w najlepszy dla siebie sposób.',
    ],
  },
]

export const howCanIHelp = [
  {
    title: 'Psychoterapia',
    link: '/therapy',
    description: 'Obszary pracy:',
    bullets: [
      'Trudności w relacjach',
      'Depresja',
      'Kryzysy i trudności osobiste',
      'Lęki, nerwice',
      'Trudności w pracy',
    ],
  },
  {
    title: 'Coaching',
    link: '/coaching',
    description: 'Prowadzenie szkoleń w zakresie:',
    bullets: ['Business Coaching', 'Life Coaching'],
  },
]

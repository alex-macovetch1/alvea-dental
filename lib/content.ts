/**
 * Every string on the site, in both languages the city actually speaks.
 * Keeping copy out of the components means a translation never gets lost
 * inside JSX, and the Russian version is impossible to forget.
 */

export type Lang = "ro" | "ru";
export type T = { ro: string; ru: string };

export const CLINIC = {
  name: "ALVEA",
  legal: "ALVEA Dental Clinic SRL",
  phone: "+373 22 43 90 12",
  phoneHref: "tel:+37322439012",
  mobile: "+373 69 43 90 12",
  whatsapp: "https://wa.me/37369439012",
  email: "contact@alvea.md",
  address: { ro: "str. Alexandru cel Bun 87, Chișinău", ru: "ул. Александру чел Бун 87, Кишинёв" } as T,
  maps: "https://maps.google.com/?q=Chisinau",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export const NAV: { id: string; label: T }[] = [
  { id: "servicii", label: { ro: "Servicii", ru: "Услуги" } },
  { id: "cum", label: { ro: "Cum decurge", ru: "Как проходит" } },
  { id: "rezultate", label: { ro: "Rezultate", ru: "Результаты" } },
  { id: "echipa", label: { ro: "Echipa", ru: "Команда" } },
  { id: "preturi", label: { ro: "Prețuri", ru: "Цены" } },
  { id: "contact", label: { ro: "Contact", ru: "Контакты" } },
];

export const UI = {
  book: { ro: "Programează-te", ru: "Записаться" },
  bookShort: { ro: "Programare", ru: "Запись" },
  call: { ro: "Sună acum", ru: "Позвонить" },
  menu: { ro: "Meniu", ru: "Меню" },
  close: { ro: "Închide", ru: "Закрыть" },
  open: { ro: "Deschis acum", ru: "Сейчас открыто" },
  closed: { ro: "Închis acum", ru: "Сейчас закрыто" },
  scroll: { ro: "Derulează", ru: "Листайте" },
} satisfies Record<string, T>;

export const HERO = {
  badge: { ro: "Clinică stomatologică · Chișinău", ru: "Стоматология · Кишинёв" },
  titleA: { ro: "Stomatologie", ru: "Стоматология" },
  titleEm: { ro: "fără frică", ru: "без страха" },
  titleB: { ro: "și fără surprize la plată.", ru: "и без сюрпризов в счёте." },
  sub: {
    ro: "Vezi pe ecran ce avem de făcut, primești planul și prețul fix înainte să te așezi în scaun. Apoi lucrăm calm, în ritmul tău.",
    ru: "Вы видите на экране, что нужно сделать, получаете план и фиксированную цену до того, как сядете в кресло. Дальше работаем спокойно, в вашем темпе.",
  },
  ctaMain: { ro: "Programează o consultație", ru: "Записаться на консультацию" },
  ctaAlt: { ro: "Vezi prețurile", ru: "Посмотреть цены" },
  free: { ro: "Prima consultație și scanarea 3D — gratuit", ru: "Первая консультация и 3D-скан — бесплатно" },
  cardRating: { ro: "din 487 de recenzii", ru: "на основе 487 отзывов" },
  cardPatients: { ro: "pacienți din 2012", ru: "пациентов с 2012 года" },
} satisfies Record<string, T>;

export const MARQUEE: T[] = [
  { ro: "Implanturi", ru: "Импланты" },
  { ro: "Ortodonție invizibilă", ru: "Невидимые элайнеры" },
  { ro: "Fațete", ru: "Виниры" },
  { ro: "Igienizare Air Flow", ru: "Чистка Air Flow" },
  { ro: "Albire", ru: "Отбеливание" },
  { ro: "Stomatologie pediatrică", ru: "Детская стоматология" },
  { ro: "Chirurgie orală", ru: "Хирургия" },
  { ro: "Urgențe 24/7", ru: "Неотложная помощь 24/7" },
  { ro: "Scanare 3D", ru: "3D-сканирование" },
];

export const ABOUT = {
  eyebrow: { ro: "Despre clinică", ru: "О клинике" },
  lead: {
    ro: "Oamenii nu amână dentistul pentru că le pasă prea puțin. Îl amână pentru că nu știu ce urmează, cât doare și cât costă.",
    ru: "Люди откладывают визит к стоматологу не потому, что им всё равно. А потому, что не знают, что будет дальше, насколько больно и сколько это стоит.",
  },
  leadEm: {
    ro: "Am construit ALVEA ca să răspundem la toate trei înainte de prima anestezie.",
    ru: "Мы построили ALVEA так, чтобы ответить на все три вопроса до первой анестезии.",
  },
  body: {
    ro: "Suntem o echipă de 11 oameni pe strada Alexandru cel Bun, din 2012. Lucrăm cu scaner intraoral, tomograf 3D și anestezie computerizată — nu pentru că sună bine pe site, ci pentru că astea sunt lucrurile care fac diferența între „mai vedem” și „știu exact ce am”.",
    ru: "Мы — команда из 11 человек на улице Александру чел Бун, с 2012 года. Работаем с интраоральным сканером, 3D-томографом и компьютерной анестезией — не потому, что это красиво звучит на сайте, а потому, что именно это отличает «посмотрим» от «я точно знаю, что у меня».",
  },
  statsTitle: { ro: "Cifrele noastre", ru: "Наши цифры" },
} satisfies Record<string, T>;

export const STATS: { value: number; suffix: string; label: T; decimals?: number }[] = [
  { value: 12400, suffix: "+", label: { ro: "pacienți tratați", ru: "пациентов" } },
  { value: 4.9, suffix: "", decimals: 1, label: { ro: "notă medie Google", ru: "средняя оценка Google" } },
  { value: 14, suffix: " ani", label: { ro: "de când suntem aici", ru: "лет работы" } },
  { value: 98, suffix: "%", label: { ro: "revin pentru control", ru: "возвращаются на осмотр" } },
];

export const PROMISES: { title: T; text: T }[] = [
  {
    title: { ro: "Prețul se scrie înainte", ru: "Цена — до начала" },
    text: {
      ro: "Planul de tratament îl primești pe hârtie, cu suma finală. Dacă apare ceva în plus, oprim și te întrebăm.",
      ru: "План лечения вы получаете на бумаге, с итоговой суммой. Если появится что-то ещё — остановимся и спросим вас.",
    },
  },
  {
    title: { ro: "Anestezie computerizată", ru: "Компьютерная анестезия" },
    text: {
      ro: "Substanța intră lent, controlat de aparat. Fără înțepătura bruscă și fără jumătate de față amorțită toată ziua.",
      ru: "Препарат вводится медленно, под контролем аппарата. Без резкого укола и без онемевшего пол-лица на весь день.",
    },
  },
  {
    title: { ro: "Garanție 3 ani", ru: "Гарантия 3 года" },
    text: {
      ro: "Pentru obturații, coroane și implanturi. Scrisă în contract, nu promisă la telefon.",
      ru: "На пломбы, коронки и импланты. Прописана в договоре, а не обещана по телефону.",
    },
  },
];

export const SERVICES: {
  slug: string;
  img: string;
  title: T;
  text: T;
  price: T;
  time: T;
}[] = [
  {
    slug: "consultatie",
    img: "/img/consult.jpg",
    title: { ro: "Consultație și plan", ru: "Консультация и план" },
    text: {
      ro: "Scanare 3D, fotografii intraorale și un plan scris cu prețul final. Prima dată — din partea casei.",
      ru: "3D-скан, интраоральные фото и письменный план с итоговой ценой. Первый раз — за наш счёт.",
    },
    price: { ro: "gratuit", ru: "бесплатно" },
    time: { ro: "40 min", ru: "40 мин" },
  },
  {
    slug: "igienizare",
    img: "/img/detail-brush.jpg",
    title: { ro: "Igienizare profesională", ru: "Профессиональная чистка" },
    text: {
      ro: "Ultrasunet, Air Flow și lustruire. Se face o dată la 6 luni și previne 80% din ce ne aduce lumea aici.",
      ru: "Ультразвук, Air Flow и полировка. Раз в 6 месяцев — и это предотвращает 80% того, с чем к нам приходят.",
    },
    price: { ro: "690 lei", ru: "690 леев" },
    time: { ro: "50 min", ru: "50 мин" },
  },
  {
    slug: "carii",
    img: "/img/treatment.jpg",
    title: { ro: "Tratarea cariilor", ru: "Лечение кариеса" },
    text: {
      ro: "Obturații estetice care se potrivesc la culoare cu dintele tău. Într-o singură ședință.",
      ru: "Эстетические пломбы, подобранные по цвету вашего зуба. За одно посещение.",
    },
    price: { ro: "de la 890 lei", ru: "от 890 леев" },
    time: { ro: "45 min", ru: "45 мин" },
  },
  {
    slug: "implanturi",
    img: "/img/scan.jpg",
    title: { ro: "Implanturi dentare", ru: "Импланты" },
    text: {
      ro: "Implanturi elvețiene, planificate pe tomografie 3D. Coroana se pune după integrare, la 3–4 luni.",
      ru: "Швейцарские импланты, спланированные по 3D-томографии. Коронка ставится после приживления, через 3–4 месяца.",
    },
    price: { ro: "de la 9 500 lei", ru: "от 9 500 леев" },
    time: { ro: "1 ședință", ru: "1 приём" },
  },
  {
    slug: "ortodontie",
    img: "/img/smile-3.jpg",
    title: { ro: "Ortodonție invizibilă", ru: "Невидимая ортодонтия" },
    text: {
      ro: "Gutiere transparente, schimbate acasă la 2 săptămâni. Vii la control o dată la două luni.",
      ru: "Прозрачные каппы, которые вы меняете дома каждые 2 недели. Контроль — раз в два месяца.",
    },
    price: { ro: "de la 18 000 lei", ru: "от 18 000 леев" },
    time: { ro: "8–14 luni", ru: "8–14 мес." },
  },
  {
    slug: "estetica",
    img: "/img/smile-2.jpg",
    title: { ro: "Fațete și albire", ru: "Виниры и отбеливание" },
    text: {
      ro: "Îți arătăm rezultatul digital înainte să atingem dintele. Dacă nu-ți place, schimbăm forma pe ecran.",
      ru: "Показываем цифровой результат до того, как коснёмся зуба. Не понравится — меняем форму на экране.",
    },
    price: { ro: "de la 2 400 lei", ru: "от 2 400 леев" },
    time: { ro: "2 ședințe", ru: "2 приёма" },
  },
  {
    slug: "copii",
    img: "/img/assistant.jpg",
    title: { ro: "Stomatologie pediatrică", ru: "Детская стоматология" },
    text: {
      ro: "De la 3 ani. Prima vizită e doar o plimbare prin cabinet — fără instrumente, fără grabă.",
      ru: "С 3 лет. Первый визит — просто знакомство с кабинетом: без инструментов и без спешки.",
    },
    price: { ro: "de la 450 lei", ru: "от 450 леев" },
    time: { ro: "30 min", ru: "30 мин" },
  },
  {
    slug: "urgente",
    img: "/img/clinic-room.jpg",
    title: { ro: "Urgențe 24/7", ru: "Неотложная помощь 24/7" },
    text: {
      ro: "Durere acută, dinte rupt, abces. Sună la orice oră — medicul de gardă răspunde personal.",
      ru: "Острая боль, сломанный зуб, абсцесс. Звоните в любое время — дежурный врач отвечает лично.",
    },
    price: { ro: "de la 600 lei", ru: "от 600 леев" },
    time: { ro: "azi", ru: "сегодня" },
  },
];

export const STEPS: { title: T; text: T }[] = [
  {
    title: { ro: "Suni sau scrii", ru: "Звоните или пишете" },
    text: {
      ro: "Alegi ora care îți convine. Îți confirmăm în cel mult 10 minute, pe canalul pe care ne-ai scris.",
      ru: "Выбираете удобное время. Подтверждаем максимум за 10 минут, тем же способом, которым вы написали.",
    },
  },
  {
    title: { ro: "Consultație și scanare 3D", ru: "Консультация и 3D-скан" },
    text: {
      ro: "40 de minute în care te uiți pe monitor împreună cu medicul și vezi singur ce e de făcut.",
      ru: "40 минут, за которые вы вместе с врачом смотрите на монитор и сами видите, что нужно сделать.",
    },
  },
  {
    title: { ro: "Planul și prețul, pe hârtie", ru: "План и цена — на бумаге" },
    text: {
      ro: "Cu etape, termene și suma finală. Îl iei acasă și te gândești. Nu te sună nimeni să te preseze.",
      ru: "С этапами, сроками и итоговой суммой. Забираете домой и думаете. Никто не будет звонить и давить.",
    },
  },
  {
    title: { ro: "Tratamentul", ru: "Лечение" },
    text: {
      ro: "Cu anestezie computerizată și pauze când ridici mâna. Îți spunem la fiecare pas ce urmează.",
      ru: "С компьютерной анестезией и паузами, когда вы поднимаете руку. На каждом шаге говорим, что дальше.",
    },
  },
  {
    title: { ro: "Controlul, gratuit", ru: "Контроль — бесплатно" },
    text: {
      ro: "La 6 luni. Îți amintim noi, ca să nu trebuiască să ții tu minte.",
      ru: "Через 6 месяцев. Напомним мы, чтобы вам не нужно было помнить.",
    },
  },
];

export const BEFORE_AFTER = {
  eyebrow: { ro: "Rezultate", ru: "Результаты" },
  title: { ro: "Trage de linie", ru: "Потяните за линию" },
  titleEm: { ro: "și vezi diferența", ru: "и увидите разницу" },
  text: {
    ro: "Albire profesională într-o singură ședință de 60 de minute. Rezultatul ține 12–18 luni, dacă nu bei cafea prin pai.",
    ru: "Профессиональное отбеливание за один приём в 60 минут. Результат держится 12–18 месяцев — если не пить кофе через трубочку.",
  },
  before: { ro: "Înainte", ru: "До" },
  after: { ro: "După", ru: "После" },
  drag: { ro: "trage", ru: "тяните" },
} satisfies Record<string, T>;

export const TEAM: { name: string; role: T; years: T; img: string }[] = [
  {
    name: "Dr. Andrei Cojocaru",
    role: { ro: "Medic-șef · Implantologie", ru: "Главный врач · Имплантология" },
    years: { ro: "14 ani de practică · 1 900 de implanturi", ru: "14 лет практики · 1 900 имплантов" },
    img: "/img/doc-1.jpg",
  },
  {
    name: "Dr. Ana Cebotari",
    role: { ro: "Ortodonție", ru: "Ортодонтия" },
    years: { ro: "9 ani · certificată Invisalign", ru: "9 лет · сертификат Invisalign" },
    img: "/img/doc-2.jpg",
  },
  {
    name: "Dr. Victor Grosu",
    role: { ro: "Chirurgie orală", ru: "Челюстно-лицевая хирургия" },
    years: { ro: "11 ani · rezident Iași", ru: "11 лет · резидентура в Яссах" },
    img: "/img/doc-3.jpg",
  },
  {
    name: "Dr. Elena Rusu",
    role: { ro: "Stomatologie pediatrică", ru: "Детская стоматология" },
    years: { ro: "7 ani · peste 2 000 de copii", ru: "7 лет · более 2 000 детей" },
    img: "/img/doc-4.jpg",
  },
];

export const REVIEWS: { name: string; meta: T; text: T; img: string }[] = [
  {
    name: "Marina C.",
    meta: { ro: "Ortodonție · 11 luni", ru: "Ортодонтия · 11 месяцев" },
    text: {
      ro: "Mi-a fost frică de dentist vreo 20 de ani. Aici prima ședință a fost doar vorbit și uitat pe ecran. Am ajuns să termin tot tratamentul fără să sar peste nicio programare.",
      ru: "Я боялась стоматологов лет двадцать. Здесь первый приём был просто разговор и взгляд на экран. В итоге прошла всё лечение, не пропустив ни одной записи.",
    },
    img: "/img/p-1.jpg",
  },
  {
    name: "Sergiu B.",
    meta: { ro: "Două implanturi", ru: "Два импланта" },
    text: {
      ro: "Am cerut oferte în trei locuri. Aici a fost singurul loc unde mi-au dat suma finală pe hârtie din prima zi și nu s-a schimbat nimic până la final.",
      ru: "Я запросил предложения в трёх местах. Только здесь мне дали итоговую сумму на бумаге в первый же день — и до конца ничего не изменилось.",
    },
    img: "/img/p-3.jpg",
  },
  {
    name: "Ana-Maria P.",
    meta: { ro: "Igienizare · client din 2019", ru: "Чистка · клиент с 2019" },
    text: {
      ro: "Vin la 6 luni de patru ani. Mă sună ei să-mi amintească, ceea ce e singurul motiv pentru care chiar mai vin la 6 luni.",
      ru: "Хожу раз в полгода уже четыре года. Они сами звонят и напоминают — только поэтому я действительно хожу раз в полгода.",
    },
    img: "/img/p-4.jpg",
  },
  {
    name: "Dumitru V.",
    meta: { ro: "Urgență, ora 23:40", ru: "Неотложно, 23:40" },
    text: {
      ro: "Mi s-a rupt un dinte vineri noaptea. Am sunat fără să sper mare lucru. Medicul a venit la clinică în 40 de minute.",
      ru: "У меня сломался зуб в пятницу ночью. Позвонил без особой надежды. Врач приехал в клинику за 40 минут.",
    },
    img: "/img/p-5.jpg",
  },
];

export const PRICES: { group: T; items: { name: T; price: T }[] }[] = [
  {
    group: { ro: "Prevenție", ru: "Профилактика" },
    items: [
      { name: { ro: "Consultație + scanare 3D (prima dată)", ru: "Консультация + 3D-скан (первый раз)" }, price: { ro: "0 lei", ru: "0 леев" } },
      { name: { ro: "Igienizare completă (ultrasunet + Air Flow)", ru: "Полная чистка (ультразвук + Air Flow)" }, price: { ro: "690 lei", ru: "690 леев" } },
      { name: { ro: "Sigilarea unui dinte", ru: "Герметизация зуба" }, price: { ro: "350 lei", ru: "350 леев" } },
    ],
  },
  {
    group: { ro: "Tratament", ru: "Лечение" },
    items: [
      { name: { ro: "Obturație estetică", ru: "Эстетическая пломба" }, price: { ro: "890 – 1 400 lei", ru: "890 – 1 400 леев" } },
      { name: { ro: "Tratament de canal (per canal)", ru: "Лечение канала (за канал)" }, price: { ro: "1 200 lei", ru: "1 200 леев" } },
      { name: { ro: "Extracție simplă", ru: "Простое удаление" }, price: { ro: "600 lei", ru: "600 леев" } },
    ],
  },
  {
    group: { ro: "Estetică și protetică", ru: "Эстетика и протезирование" },
    items: [
      { name: { ro: "Albire profesională (o ședință)", ru: "Профессиональное отбеливание (1 приём)" }, price: { ro: "2 400 lei", ru: "2 400 леев" } },
      { name: { ro: "Fațetă ceramică", ru: "Керамический винир" }, price: { ro: "4 200 lei", ru: "4 200 леев" } },
      { name: { ro: "Coroană de zirconiu", ru: "Циркониевая коронка" }, price: { ro: "4 900 lei", ru: "4 900 леев" } },
      { name: { ro: "Implant + coroană (complet)", ru: "Имплант + коронка (полностью)" }, price: { ro: "14 400 lei", ru: "14 400 леев" } },
    ],
  },
];

export const PRICE_NOTE = {
  ro: "Prețurile sunt cele din cabinet, nu „de la”. Plata se poate face în 3 rate fără dobândă, prin card.",
  ru: "Это цены в кабинете, а не «от». Оплату можно разделить на 3 части без процентов, картой.",
} satisfies T;

export const FAQ: { q: T; a: T }[] = [
  {
    q: { ro: "Doare?", ru: "Это больно?" },
    a: {
      ro: "Anestezia se face cu un aparat care injectează lent, deci nu simți înțepătura clasică. În timpul tratamentului, dacă ridici mâna, ne oprim — nu e o vorbă, chiar ne oprim.",
      ru: "Анестезия делается аппаратом с медленной подачей, поэтому классического укола вы не чувствуете. Во время лечения, если вы поднимете руку, мы останавливаемся — это не фигура речи.",
    },
  },
  {
    q: { ro: "Cât costă prima vizită?", ru: "Сколько стоит первый визит?" },
    a: {
      ro: "Nimic. Consultația, scanarea 3D și planul scris sunt gratuite, chiar dacă după aceea decizi să te tratezi în altă parte.",
      ru: "Ничего. Консультация, 3D-скан и письменный план бесплатны — даже если потом вы решите лечиться в другом месте.",
    },
  },
  {
    q: { ro: "Se poate plăti în rate?", ru: "Можно ли в рассрочку?" },
    a: {
      ro: "Da, în 3 rate fără dobândă, cu cardul, direct la recepție. Pentru tratamente peste 20 000 lei facem un grafic pe 6 luni.",
      ru: "Да, 3 платежа без процентов, картой, прямо на ресепшене. Для лечения дороже 20 000 леев составляем график на 6 месяцев.",
    },
  },
  {
    q: { ro: "De la ce vârstă primiți copii?", ru: "С какого возраста принимаете детей?" },
    a: {
      ro: "De la 3 ani. Prima vizită e o vizită de cunoștință: copilul stă în scaun, se joacă cu oglinda, atât. Fără instrumente în prima zi.",
      ru: "С 3 лет. Первый визит — знакомство: ребёнок сидит в кресле, играет с зеркальцем, и всё. Никаких инструментов в первый день.",
    },
  },
  {
    q: { ro: "Am o urgență noaptea. Ce fac?", ru: "У меня неотложный случай ночью. Что делать?" },
    a: {
      ro: "Suni la +373 69 43 90 12. Răspunde medicul de gardă, nu un robot. Dacă e nevoie, deschidem clinica.",
      ru: "Звоните на +373 69 43 90 12. Отвечает дежурный врач, а не автоответчик. Если нужно, откроем клинику.",
    },
  },
  {
    q: { ro: "Lucrați cu asigurarea medicală?", ru: "Работаете со страховкой?" },
    a: {
      ro: "Cu asigurările private da (Moldasig, Grawe, Donaris). Cu CNAM, doar pentru urgențe și extracții.",
      ru: "С частными страховками — да (Moldasig, Grawe, Donaris). С CNAM — только неотложная помощь и удаления.",
    },
  },
];

export const BOOKING = {
  eyebrow: { ro: "Programare", ru: "Запись" },
  title: { ro: "Alege o oră.", ru: "Выберите время." },
  titleEm: { ro: "Restul îl facem noi.", ru: "Остальное сделаем мы." },
  text: {
    ro: "Completezi trei câmpuri și te sunăm în cel mult 10 minute în timpul programului. Dacă scrii după ore, te sunăm dimineața la prima oră.",
    ru: "Заполняете три поля — и мы перезваниваем максимум за 10 минут в рабочее время. Если пишете после закрытия, позвоним утром первым делом.",
  },
  name: { ro: "Numele tău", ru: "Ваше имя" },
  phone: { ro: "Telefon", ru: "Телефон" },
  service: { ro: "Ce te interesează", ru: "Что вас интересует" },
  when: { ro: "Când îți convine", ru: "Когда удобно" },
  whenOpts: [
    { ro: "Dimineața (8:00 – 12:00)", ru: "Утром (8:00 – 12:00)" },
    { ro: "După-amiaza (12:00 – 17:00)", ru: "Днём (12:00 – 17:00)" },
    { ro: "Seara (17:00 – 20:00)", ru: "Вечером (17:00 – 20:00)" },
    { ro: "Sâmbătă", ru: "В субботу" },
  ],
  submit: { ro: "Trimite cererea", ru: "Отправить заявку" },
  sending: { ro: "Se trimite…", ru: "Отправляем…" },
  okTitle: { ro: "Am primit cererea.", ru: "Заявка получена." },
  okText: {
    ro: "Te sunăm în cel mult 10 minute. Dacă e urgent, sună tu direct — răspundem non-stop.",
    ru: "Перезвоним максимум через 10 минут. Если срочно — звоните сами, отвечаем круглосуточно.",
  },
  errPhone: { ro: "Scrie un număr de telefon valid.", ru: "Укажите корректный номер телефона." },
  errName: { ro: "Scrie-ne cum te cheamă.", ru: "Напишите, как вас зовут." },
  privacy: {
    ro: "Datele tale rămân la noi și se folosesc doar ca să te sunăm înapoi.",
    ru: "Ваши данные остаются у нас и используются только чтобы вам перезвонить.",
  },
} as const;

export const HOURS: { day: T; time: T }[] = [
  { day: { ro: "Luni – Vineri", ru: "Пн – Пт" }, time: { ro: "08:00 – 20:00", ru: "08:00 – 20:00" } },
  { day: { ro: "Sâmbătă", ru: "Суббота" }, time: { ro: "09:00 – 16:00", ru: "09:00 – 16:00" } },
  { day: { ro: "Duminică", ru: "Воскресенье" }, time: { ro: "urgențe la telefon", ru: "неотложно, по телефону" } },
];

export const FOOTER = {
  claim: { ro: "Zâmbetul tău,", ru: "Ваша улыбка —" },
  claimEm: { ro: "fără grabă.", ru: "без спешки." },
  cta: { ro: "Hai să începem cu o consultație gratuită.", ru: "Начнём с бесплатной консультации." },
  rights: { ro: "Toate drepturile rezervate.", ru: "Все права защищены." },
  note: {
    ro: "Proiect de portofoliu — clinică fictivă, date de contact fictive.",
    ru: "Портфолио-проект — вымышленная клиника, вымышленные контакты.",
  },
  by: { ro: "Design și cod:", ru: "Дизайн и код:" },
} satisfies Record<string, T>;

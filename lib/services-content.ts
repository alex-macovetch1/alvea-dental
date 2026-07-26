/**
 * The deep copy behind /servicii/[slug].
 * The short version of each service lives in content.ts (it feeds the home page
 * and the menus); everything a patient would actually want to read before
 * booking lives here, so the two never fight over one object.
 */

import type { T } from "./content";

export type ServicePage = {
  /** small line above the title */
  kicker: T;
  /** one sentence, set large under the title */
  lead: T;
  cover: string;
  /** two photos in the body, plus the cover */
  shots: [string, string];
  /** the strip of numbers under the hero */
  facts: { label: T; value: T }[];
  /** the reading part of the page */
  sections: { title: T; body: T[] }[];
  /** numbered walk-through of an appointment */
  flow: { title: T; text: T }[];
  /** what is included, as a checked list */
  includes: T[];
  prices: { name: T; price: T; note?: T }[];
  faq: { q: T; a: T }[];
  /** slugs from TEAM */
  doctors: string[];
  /** slugs from SERVICES */
  related: string[];
  /** minutes the booking wizard should block for this service */
  minutes: number;
};

export const SERVICE_PAGES: Record<string, ServicePage> = {
  /* ------------------------------------------------------------------ */
  consultatie: {
    kicker: { ro: "Prima vizită", ru: "Первый визит" },
    lead: {
      ro: "Patruzeci de minute în care nu se atinge niciun instrument de dinții tăi. Ne uităm, scanăm, îți arătăm pe ecran și scriem planul cu prețul final.",
      ru: "Сорок минут, за которые ни один инструмент не коснётся ваших зубов. Мы смотрим, сканируем, показываем на экране и пишем план с итоговой ценой.",
    },
    cover: "/img/consult.jpg",
    shots: ["/img/scan.jpg", "/img/xray-wall.jpg"],
    facts: [
      { label: { ro: "Durată", ru: "Длительность" }, value: { ro: "40 minute", ru: "40 минут" } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "0 lei", ru: "0 леев" } },
      { label: { ro: "Anestezie", ru: "Анестезия" }, value: { ro: "nu e cazul", ru: "не требуется" } },
      { label: { ro: "Primești", ru: "Вы получаете" }, value: { ro: "plan scris", ru: "план на бумаге" } },
    ],
    sections: [
      {
        title: { ro: "De ce e gratuită", ru: "Почему бесплатно" },
        body: [
          {
            ro: "Pentru că nu vrem să plătești ca să afli dacă ai o problemă. Majoritatea oamenilor care intră aici prima dată nu știu ce au și se tem de sumă mai mult decât de durere. Consultația gratuită scoate din discuție exact frica asta.",
            ru: "Потому что вы не должны платить за то, чтобы узнать, есть ли у вас проблема. Большинство людей, которые приходят к нам впервые, не знают, что у них, и боятся суммы больше, чем боли. Бесплатная консультация убирает именно этот страх.",
          },
          {
            ro: "Dacă după consultație decizi să te tratezi în altă parte, iei planul cu tine și îl folosești unde vrei. Nu-l ținem ostatic și nu te sună nimeni de la noi să te convingă.",
            ru: "Если после консультации вы решите лечиться в другом месте — забирайте план с собой и используйте где угодно. Мы его не удерживаем, и никто от нас не будет звонить и уговаривать.",
          },
        ],
      },
      {
        title: { ro: "Ce se întâmplă în cele 40 de minute", ru: "Что происходит за эти 40 минут" },
        body: [
          {
            ro: "Începem cu discuția: de când te doare, ce te deranjează, ce ai mai făcut la dinți și ce te sperie. Abia apoi vine partea tehnică — scanare intraorală, fotografii și, dacă e nevoie, tomografie 3D.",
            ru: "Начинаем с разговора: когда началась боль, что беспокоит, что уже делали с зубами и чего вы боитесь. И только потом — техническая часть: интраоральное сканирование, фотографии и, если нужно, 3D-томография.",
          },
          {
            ro: "Imaginile apar pe monitorul din fața ta, mărite. Nu-ți spunem doar că ai o carie — ți-o arătăm și îți explicăm ce se întâmplă dacă o lași încă un an.",
            ru: "Снимки появляются на мониторе перед вами, увеличенные. Мы не просто говорим, что у вас кариес — мы его показываем и объясняем, что будет, если оставить его ещё на год.",
          },
        ],
      },
      {
        title: { ro: "Planul pe hârtie", ru: "План на бумаге" },
        body: [
          {
            ro: "Pleci cu un document în care scrie: ce e de făcut, în ce ordine, câte ședințe, cât durează fiecare și cât costă totul. Suma de la final e suma pe care o plătești. Dacă în timpul tratamentului apare ceva neprevăzut, ne oprim și te întrebăm înainte să continuăm.",
            ru: "Вы уходите с документом, где написано: что нужно сделать, в каком порядке, сколько приёмов, сколько длится каждый и сколько стоит всё вместе. Итоговая сумма — это та сумма, которую вы платите. Если во время лечения появится что-то непредвиденное, мы остановимся и спросим вас, прежде чем продолжить.",
          },
        ],
      },
    ],
    flow: [
      {
        title: { ro: "Discuția", ru: "Разговор" },
        text: { ro: "10 minute despre ce te doare și ce te sperie. Fără halat între noi.", ru: "10 минут о том, что болит и чего вы боитесь. Без халата между нами." },
      },
      {
        title: { ro: "Scanarea", ru: "Сканирование" },
        text: { ro: "Scaner intraoral și fotografii. Nu doare, nu are gust, nu îți bagi nimic în gură.", ru: "Интраоральный сканер и фото. Не больно, без вкуса, ничего лишнего во рту." },
      },
      {
        title: { ro: "Explicația", ru: "Объяснение" },
        text: { ro: "Ne uităm împreună pe ecran. Întrebi orice, de câte ori vrei.", ru: "Смотрим вместе на экран. Спрашивайте что угодно и сколько угодно." },
      },
      {
        title: { ro: "Planul", ru: "План" },
        text: { ro: "Îl printăm și ți-l dăm. Te gândești acasă, fără să te sune nimeni.", ru: "Распечатываем и отдаём. Думаете дома, никто вам не звонит." },
      },
    ],
    includes: [
      { ro: "Examinare completă, inclusiv gingii și articulație", ru: "Полный осмотр, включая дёсны и сустав" },
      { ro: "Scanare intraorală 3D", ru: "Интраоральное 3D-сканирование" },
      { ro: "Fotografii intraorale", ru: "Интраоральные фотографии" },
      { ro: "Plan de tratament scris, cu preț final", ru: "Письменный план лечения с итоговой ценой" },
      { ro: "Al doilea plan, mai ieftin, dacă bugetul e o problemă", ru: "Второй план, дешевле, если бюджет — вопрос" },
    ],
    prices: [
      { name: { ro: "Consultație + scanare 3D (prima vizită)", ru: "Консультация + 3D-скан (первый визит)" }, price: { ro: "0 lei", ru: "0 леев" } },
      { name: { ro: "Consultație de control (pacienți existenți)", ru: "Контрольный осмотр (наши пациенты)" }, price: { ro: "0 lei", ru: "0 леев" } },
      { name: { ro: "Radiografie punctuală", ru: "Прицельный снимок" }, price: { ro: "120 lei", ru: "120 леев" } },
      { name: { ro: "Tomografie 3D completă", ru: "Полная 3D-томография" }, price: { ro: "650 lei", ru: "650 леев" }, note: { ro: "gratuită dacă începi tratamentul la noi", ru: "бесплатно, если начинаете лечение у нас" } },
    ],
    faq: [
      {
        q: { ro: "Chiar nu plătesc nimic?", ru: "Действительно ничего не плачу?" },
        a: { ro: "Nimic. Nici dacă vii doar ca să afli o a doua opinie despre un plan primit altundeva.", ru: "Ничего. Даже если вы пришли только за вторым мнением по плану из другого места." },
      },
      {
        q: { ro: "Pot veni doar cu o întrebare?", ru: "Можно прийти просто с вопросом?" },
        a: { ro: "Da. Multă lume vine să întrebe dacă are nevoie de ceva. Uneori răspunsul e că nu are, și e un răspuns bun.", ru: "Да. Многие приходят спросить, нужно ли им что-то. Иногда ответ — нет, и это хороший ответ." },
      },
      {
        q: { ro: "Trebuie să aduc ceva?", ru: "Нужно ли что-то приносить?" },
        a: { ro: "Doar buletinul și, dacă ai, radiografiile vechi. Restul facem aici.", ru: "Только удостоверение личности и, если есть, старые снимки. Остальное сделаем здесь." },
      },
    ],
    doctors: ["andrei-cojocaru", "ana-cebotari", "victor-grosu", "elena-rusu"],
    related: ["igienizare", "carii", "implanturi"],
    minutes: 40,
  },

  /* ------------------------------------------------------------------ */
  igienizare: {
    kicker: { ro: "Prevenție", ru: "Профилактика" },
    lead: {
      ro: "O oră la fiecare șase luni care previne cam 80% din tot ce ne aduce lumea aici. E cea mai ieftină lucrare din clinică și cea care economisește cel mai mult.",
      ru: "Один час раз в полгода, который предотвращает около 80% всего, с чем к нам приходят. Это самая дешёвая процедура в клинике — и та, что экономит больше всего.",
    },
    cover: "/img/detail-brush.jpg",
    shots: ["/img/chair.jpg", "/img/smile-2.jpg"],
    facts: [
      { label: { ro: "Durată", ru: "Длительность" }, value: { ro: "50 minute", ru: "50 минут" } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "690 lei", ru: "690 леев" } },
      { label: { ro: "Frecvență", ru: "Как часто" }, value: { ro: "la 6 luni", ru: "раз в 6 мес." } },
      { label: { ro: "Recuperare", ru: "Восстановление" }, value: { ro: "niciuna", ru: "не требуется" } },
    ],
    sections: [
      {
        title: { ro: "Trei etape, nu una", ru: "Три этапа, а не один" },
        body: [
          {
            ro: "Ultrasunetul desprinde tartrul de sub gingie, acolo unde periuța nu ajunge niciodată. Air Flow-ul suflă un jet fin de bicarbonat și apă care scoate pigmentul de cafea, ceai și țigară dintre dinți. La final, lustruirea închide porii smalțului, ca placa să se prindă mai greu următoarele luni.",
            ru: "Ультразвук снимает камень под десной — туда, куда щётка не достаёт никогда. Air Flow подаёт тонкую струю соды с водой и убирает пигмент от кофе, чая и сигарет между зубами. В конце полировка закрывает поры эмали, чтобы налёт хуже прилипал в ближайшие месяцы.",
          },
          {
            ro: "Multe locuri fac doar prima etapă și îi spun igienizare. Diferența se vede la trei luni, când petele revin.",
            ru: "Во многих местах делают только первый этап и называют это чисткой. Разница видна через три месяца, когда пятна возвращаются.",
          },
        ],
      },
      {
        title: { ro: "Dacă ai gingii sensibile", ru: "Если дёсны чувствительные" },
        body: [
          {
            ro: "Gingiile care sângerează la periaj nu sunt un motiv să amâni igienizarea — sunt exact motivul pentru care ai nevoie de ea. Sângerarea vine din inflamația provocată de tartru. După ședință, în 7–10 zile, se oprește singură.",
            ru: "Дёсны, которые кровоточат при чистке, — не повод откладывать гигиену, а именно причина, по которой она вам нужна. Кровоточивость идёт от воспаления, вызванного камнем. После процедуры она проходит сама за 7–10 дней.",
          },
          {
            ro: "Dacă ești foarte sensibil, punem gel anestezic pe gingie înainte. Se face în cinci minute și nu e o injecție.",
            ru: "Если чувствительность высокая, наносим на десну анестезирующий гель. Это пять минут и это не укол.",
          },
        ],
      },
      {
        title: { ro: "După ședință", ru: "После процедуры" },
        body: [
          {
            ro: "Primele două ore eviți cafeaua, vinul roșu și țigările — smalțul e curat și absoarbe pigmentul mai ușor. Restul zilei e complet normală. Nu ai restricții la mâncare și nu te doare nimic.",
            ru: "Первые два часа избегайте кофе, красного вина и сигарет — эмаль чистая и легче впитывает пигмент. Остальной день полностью обычный. Никаких ограничений в еде, и ничего не болит.",
          },
        ],
      },
    ],
    flow: [
      { title: { ro: "Verificarea gingiilor", ru: "Проверка дёсен" }, text: { ro: "Măsurăm adâncimea pungilor, ca să știm unde e problema.", ru: "Измеряем глубину карманов, чтобы понять, где проблема." } },
      { title: { ro: "Ultrasunet", ru: "Ультразвук" }, text: { ro: "20 de minute. Se aude, dar nu doare.", ru: "20 минут. Слышно, но не больно." } },
      { title: { ro: "Air Flow", ru: "Air Flow" }, text: { ro: "Jetul scoate pigmentul dintre dinți și de pe fețe.", ru: "Струя убирает пигмент между зубами и с поверхностей." } },
      { title: { ro: "Lustruire și fluorizare", ru: "Полировка и фторирование" }, text: { ro: "Închide smalțul și reduce sensibilitatea.", ru: "Закрывает эмаль и снижает чувствительность." } },
    ],
    includes: [
      { ro: "Detartraj cu ultrasunet, inclusiv subgingival", ru: "Ультразвуковой съём камня, включая поддесневой" },
      { ro: "Air Flow pe toți dinții", ru: "Air Flow по всем зубам" },
      { ro: "Lustruire cu pastă fină", ru: "Полировка мелкозернистой пастой" },
      { ro: "Fluorizare", ru: "Фторирование" },
      { ro: "Verificarea tehnicii tale de periaj", ru: "Проверка вашей техники чистки" },
    ],
    prices: [
      { name: { ro: "Igienizare completă (3 etape)", ru: "Полная гигиена (3 этапа)" }, price: { ro: "690 lei", ru: "690 леев" } },
      { name: { ro: "Igienizare la copii", ru: "Гигиена детям" }, price: { ro: "390 lei", ru: "390 леев" } },
      { name: { ro: "Tratament parodontal (per cadran)", ru: "Пародонтологическое лечение (за квадрант)" }, price: { ro: "850 lei", ru: "850 леев" } },
      { name: { ro: "Abonament: 2 igienizări pe an", ru: "Абонемент: 2 чистки в год" }, price: { ro: "1 190 lei", ru: "1 190 леев" }, note: { ro: "economisești 190 lei", ru: "экономия 190 леев" } },
    ],
    faq: [
      { q: { ro: "Slăbește smalțul?", ru: "Ослабляет ли эмаль?" }, a: { ro: "Nu. Ultrasunetul lucrează pe tartru, nu pe smalț. Senzația de dinte mai neted vine din faptul că nu mai e acoperit.", ru: "Нет. Ультразвук работает по камню, а не по эмали. Ощущение более гладкого зуба — оттого, что он больше не покрыт налётом." } },
      { q: { ro: "Îmi albește dinții?", ru: "Отбеливает ли зубы?" }, a: { ro: "Îi readuce la culoarea lor reală, care de obicei e cu 1–2 nuanțe mai deschisă decât credeai. Albire adevărată e altceva.", ru: "Возвращает им их настоящий цвет — обычно на 1–2 тона светлее, чем вы думали. Настоящее отбеливание — это другое." } },
      { q: { ro: "Cât de des e prea des?", ru: "Как часто — слишком часто?" }, a: { ro: "La 6 luni e norma. La fumători și la cei cu aparat, la 4 luni. Mai des de atât nu are rost.", ru: "Раз в 6 месяцев — норма. Курильщикам и тем, кто с брекетами, — раз в 4. Чаще смысла нет." } },
    ],
    doctors: ["irina-bejan", "elena-rusu"],
    related: ["consultatie", "carii", "estetica"],
    minutes: 50,
  },

  /* ------------------------------------------------------------------ */
  carii: {
    kicker: { ro: "Tratament", ru: "Лечение" },
    lead: {
      ro: "O carie prinsă la timp înseamnă 45 de minute și o obturație. Aceeași carie peste un an înseamnă tratament de canal și o coroană — de zece ori mai scump.",
      ru: "Кариес, найденный вовремя, — это 45 минут и пломба. Тот же кариес через год — это лечение канала и коронка, в десять раз дороже.",
    },
    cover: "/img/treatment.jpg",
    shots: ["/img/chair.jpg", "/img/clinic-room.jpg"],
    facts: [
      { label: { ro: "Durată", ru: "Длительность" }, value: { ro: "45 minute", ru: "45 минут" } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "de la 890 lei", ru: "от 890 леев" } },
      { label: { ro: "Ședințe", ru: "Приёмов" }, value: { ro: "una", ru: "один" } },
      { label: { ro: "Garanție", ru: "Гарантия" }, value: { ro: "3 ani", ru: "3 года" } },
    ],
    sections: [
      {
        title: { ro: "Anestezia care nu se simte", ru: "Анестезия, которую не чувствуешь" },
        body: [
          {
            ro: "Folosim un aparat care injectează substanța încet și constant, sub presiune controlată. Durerea de la anestezia clasică nu vine de la ac, ci de la lichidul împins brusc în țesut. Când intră lent, nu ai ce simți.",
            ru: "Мы используем аппарат, который вводит препарат медленно и равномерно, под контролируемым давлением. Боль при обычной анестезии идёт не от иглы, а от жидкости, которую резко вталкивают в ткань. Когда она поступает медленно, чувствовать нечего.",
          },
          {
            ro: "Înainte de înțepătură punem gel pe gingie, deci nici acul nu se simte. Iar doza e calculată pe dinte, nu pe jumătate de față — pleci fără buza amorțită până seara.",
            ru: "Перед уколом наносим гель на десну, поэтому и иглу вы не чувствуете. А доза рассчитана на зуб, а не на пол-лица — вы уходите без онемевшей до вечера губы.",
          },
        ],
      },
      {
        title: { ro: "Obturații care nu se văd", ru: "Пломбы, которые не видно" },
        body: [
          {
            ro: "Culoarea se alege cu o scală, la lumină naturală, înainte să începem — nu la final, când dintele e uscat și pare mai deschis decât e. Compozitul se pune în straturi subțiri, fiecare polimerizat separat, ca să nu apară contracția care crapă obturația peste doi ani.",
            ru: "Цвет подбирается по шкале, при естественном свете, до начала работы — а не в конце, когда зуб пересушен и кажется светлее, чем есть. Композит укладывается тонкими слоями, каждый засвечивается отдельно, чтобы не было усадки, из-за которой пломба трескается через пару лет.",
          },
          {
            ro: "La final lustruim până la luciu. O obturație mată se pătează în șase luni; una lustruită rămâne la fel și după trei ani.",
            ru: "В конце полируем до блеска. Матовая пломба окрашивается за полгода; отполированная остаётся такой же и через три года.",
          },
        ],
      },
      {
        title: { ro: "Când e nevoie de canal", ru: "Когда нужен канал" },
        body: [
          {
            ro: "Dacă infecția a ajuns la nerv, obturația singură nu ajunge. Tratamentul de canal se face sub izolare cu digă, cu instrumente rotative și cu radiografie de control la final. Durează 60–90 de minute și, cu anestezie corectă, nu doare mai mult decât o obturație obișnuită.",
            ru: "Если инфекция дошла до нерва, одной пломбы мало. Лечение канала делается под изоляцией коффердамом, вращающимися инструментами, с контрольным снимком в конце. Занимает 60–90 минут и при правильной анестезии болит не сильнее обычной пломбы.",
          },
        ],
      },
    ],
    flow: [
      { title: { ro: "Alegerea culorii", ru: "Подбор цвета" }, text: { ro: "La lumină naturală, înainte ca dintele să se usuce.", ru: "При естественном свете, пока зуб не пересох." } },
      { title: { ro: "Anestezia", ru: "Анестезия" }, text: { ro: "Gel, apoi injectare computerizată lentă.", ru: "Гель, затем медленная компьютерная подача." } },
      { title: { ro: "Curățarea", ru: "Очистка" }, text: { ro: "Scoatem doar țesutul bolnav, restul dintelui rămâne.", ru: "Убираем только поражённую ткань, остальной зуб остаётся." } },
      { title: { ro: "Reconstrucția", ru: "Реставрация" }, text: { ro: "Compozit în straturi, modelat pe forma ta de dinte.", ru: "Композит слоями, смоделированный под форму вашего зуба." } },
      { title: { ro: "Verificarea mușcăturii", ru: "Проверка прикуса" }, text: { ro: "Cu hârtie de articulație, până nu mai simți nimic în plus.", ru: "Артикуляционной бумагой, пока не перестанете чувствовать лишнее." } },
    ],
    includes: [
      { ro: "Anestezie computerizată", ru: "Компьютерная анестезия" },
      { ro: "Izolare cu digă", ru: "Изоляция коффердамом" },
      { ro: "Compozit fotopolimerizabil de la Ivoclar", ru: "Светоотверждаемый композит Ivoclar" },
      { ro: "Lustruire în două etape", ru: "Полировка в два этапа" },
      { ro: "Garanție scrisă, 3 ani", ru: "Письменная гарантия, 3 года" },
    ],
    prices: [
      { name: { ro: "Obturație mică (o suprafață)", ru: "Небольшая пломба (одна поверхность)" }, price: { ro: "890 lei", ru: "890 леев" } },
      { name: { ro: "Obturație medie (două suprafețe)", ru: "Средняя пломба (две поверхности)" }, price: { ro: "1 150 lei", ru: "1 150 леев" } },
      { name: { ro: "Reconstrucție amplă", ru: "Обширная реставрация" }, price: { ro: "1 400 lei", ru: "1 400 леев" } },
      { name: { ro: "Tratament de canal (per canal)", ru: "Лечение канала (за канал)" }, price: { ro: "1 200 lei", ru: "1 200 леев" } },
      { name: { ro: "Reluarea unui canal tratat greșit", ru: "Перелечивание канала" }, price: { ro: "1 600 lei", ru: "1 600 леев" } },
    ],
    faq: [
      { q: { ro: "Cât ține o obturație?", ru: "Сколько служит пломба?" }, a: { ro: "Cele de la noi, în medie 8–12 ani. Garanția e 3 ani, dar asta e minimul pe care ni-l asumăm scris, nu durata reală.", ru: "Наши — в среднем 8–12 лет. Гарантия 3 года, но это минимум, который мы берём на себя письменно, а не реальный срок." } },
      { q: { ro: "Pot mânca imediat după?", ru: "Можно ли есть сразу после?" }, a: { ro: "Da, compozitul e întărit complet la final. Aștepți doar să treacă anestezia, ca să nu te muști.", ru: "Да, композит полностью затвердевает сразу. Ждать нужно только окончания анестезии, чтобы не прикусить щёку." } },
      { q: { ro: "Se poate fără anestezie?", ru: "Можно ли без анестезии?" }, a: { ro: "La carii foarte superficiale, da. Îți spunem sincer dacă e cazul — nu insistăm nici într-o direcție, nici în alta.", ru: "При очень поверхностном кариесе — да. Мы честно скажем, если это тот случай, и не будем настаивать ни на одном варианте." } },
    ],
    doctors: ["andrei-cojocaru", "victor-grosu", "elena-rusu"],
    related: ["consultatie", "igienizare", "urgente"],
    minutes: 45,
  },

  /* ------------------------------------------------------------------ */
  implanturi: {
    kicker: { ro: "Implantologie", ru: "Имплантология" },
    lead: {
      ro: "Un implant e un șurub de titan care ține locul rădăcinii. Dacă e pus în osul potrivit, la unghiul potrivit, ține toată viața. Toată munca stă în planificare, nu în operație.",
      ru: "Имплант — это титановый винт, который заменяет корень. Если он поставлен в правильную кость, под правильным углом, он служит всю жизнь. Вся работа — в планировании, а не в операции.",
    },
    cover: "/img/scan.jpg",
    shots: ["/img/xray-wall.jpg", "/img/clinic-room.jpg"],
    facts: [
      { label: { ro: "Operația", ru: "Операция" }, value: { ro: "45–60 min", ru: "45–60 мин" } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "de la 9 500 lei", ru: "от 9 500 леев" } },
      { label: { ro: "Integrare", ru: "Приживление" }, value: { ro: "3–4 luni", ru: "3–4 месяца" } },
      { label: { ro: "Garanție", ru: "Гарантия" }, value: { ro: "pe viață", ru: "пожизненная" } },
    ],
    sections: [
      {
        title: { ro: "Se planifică pe calculator, nu pe loc", ru: "Планируется на компьютере, а не на месте" },
        body: [
          {
            ro: "Din tomografia 3D construim un model al maxilarului tău și așezăm implantul virtual: adâncime, unghi, distanța până la nervul alveolar și până la sinus. Abia după ce modelul arată bine se face ghidul chirurgical — o piesă tipărită care se așază peste dinți și lasă frezei un singur drum posibil.",
            ru: "По 3D-томографии мы строим модель вашей челюсти и размещаем имплант виртуально: глубина, угол, расстояние до альвеолярного нерва и до пазухи. Только когда модель выглядит правильно, изготавливается хирургический шаблон — напечатанная деталь, которая надевается на зубы и оставляет фрезе единственный возможный путь.",
          },
          {
            ro: "Cu ghid, operația durează mai puțin, se face fără lambou larg și se vindecă în două-trei zile. Fără ghid, medicul se bazează pe ochi și pe experiență — merge, dar marja de eroare e mult mai mare.",
            ru: "С шаблоном операция короче, делается без широкого лоскута и заживает за два-три дня. Без шаблона врач полагается на глаз и опыт — работает, но допуск на ошибку намного больше.",
          },
        ],
      },
      {
        title: { ro: "Ce implanturi punem", ru: "Какие импланты ставим" },
        body: [
          {
            ro: "Lucrăm cu două sisteme elvețiene și unul german, toate cu suprafață tratată pentru integrare rapidă și cu piese de schimb disponibile peste 20 de ani. Asta contează mai mult decât pare: un implant ieftin dintr-un sistem care dispare de pe piață devine imposibil de reparat când se strică bontul.",
            ru: "Мы работаем с двумя швейцарскими системами и одной немецкой — все с обработанной поверхностью для быстрого приживления и с доступными комплектующими на 20+ лет. Это важнее, чем кажется: дешёвый имплант из системы, которая исчезнет с рынка, невозможно починить, когда сломается абатмент.",
          },
        ],
      },
      {
        title: { ro: "Dacă osul nu ajunge", ru: "Если кости не хватает" },
        body: [
          {
            ro: "După o extracție veche, osul se retrage. În jumătate din cazuri e nevoie de adaos de os sau de ridicarea sinusului. Sună dramatic, dar se face în aceeași ședință cu implantul și adaugă 20–30 de minute.",
            ru: "После старого удаления кость убывает. В половине случаев нужна костная подсадка или синус-лифтинг. Звучит драматично, но делается в тот же приём, что и имплантация, и добавляет 20–30 минут.",
          },
          {
            ro: "Îți spunem la consultație dacă e cazul și cât costă, ca să nu apară ca surpriză pe scaun.",
            ru: "Мы скажем на консультации, нужно ли это и сколько стоит, чтобы это не стало сюрпризом в кресле.",
          },
        ],
      },
    ],
    flow: [
      { title: { ro: "Tomografie și planificare", ru: "Томография и планирование" }, text: { ro: "Îți arătăm pe ecran unde va sta implantul, înainte să decizi.", ru: "Показываем на экране, где будет стоять имплант, до вашего решения." } },
      { title: { ro: "Ghidul chirurgical", ru: "Хирургический шаблон" }, text: { ro: "Se tipărește după modelul tău. 5 zile de așteptare.", ru: "Печатается по вашей модели. 5 дней ожидания." } },
      { title: { ro: "Inserția", ru: "Установка" }, text: { ro: "45–60 de minute, anestezie locală. Pleci pe picioarele tale.", ru: "45–60 минут, местная анестезия. Уходите своими ногами." } },
      { title: { ro: "Integrarea", ru: "Приживление" }, text: { ro: "3–4 luni în care osul crește pe suprafața implantului.", ru: "3–4 месяца, за которые кость нарастает на поверхность импланта." } },
      { title: { ro: "Coroana", ru: "Коронка" }, text: { ro: "Amprentă digitală, probă, montaj. Două vizite scurte.", ru: "Цифровой слепок, примерка, установка. Два коротких визита." } },
    ],
    includes: [
      { ro: "Tomografie 3D și planificare digitală", ru: "3D-томография и цифровое планирование" },
      { ro: "Ghid chirurgical tipărit", ru: "Напечатанный хирургический шаблон" },
      { ro: "Implantul propriu-zis", ru: "Сам имплант" },
      { ro: "Toate controalele până la coroană", ru: "Все контроли до коронки" },
      { ro: "Garanție pe viață la implant", ru: "Пожизненная гарантия на имплант" },
    ],
    prices: [
      { name: { ro: "Implant (fără coroană)", ru: "Имплант (без коронки)" }, price: { ro: "9 500 lei", ru: "9 500 леев" } },
      { name: { ro: "Coroană de zirconiu pe implant", ru: "Циркониевая коронка на имплант" }, price: { ro: "4 900 lei", ru: "4 900 леев" } },
      { name: { ro: "Implant + coroană, complet", ru: "Имплант + коронка, полностью" }, price: { ro: "14 400 lei", ru: "14 400 леев" } },
      { name: { ro: "Adaos de os", ru: "Костная подсадка" }, price: { ro: "de la 2 800 lei", ru: "от 2 800 леев" } },
      { name: { ro: "Ridicare de sinus", ru: "Синус-лифтинг" }, price: { ro: "de la 6 200 lei", ru: "от 6 200 леев" } },
    ],
    faq: [
      { q: { ro: "Doare după?", ru: "Болит ли после?" }, a: { ro: "Două-trei zile de disconfort, ca după o extracție. Se ține cu ibuprofen. A patra zi majoritatea uită că au fost operați.", ru: "Два-три дня дискомфорта, как после удаления. Снимается ибупрофеном. На четвёртый день большинство забывает об операции." } },
      { q: { ro: "Rămân fără dinte 4 luni?", ru: "Останусь без зуба на 4 месяца?" }, a: { ro: "Nu. În zona vizibilă punem un dinte provizoriu în aceeași zi. Nu se mestecă pe el, dar se vede normal.", ru: "Нет. В видимой зоне ставим временный зуб в тот же день. Жевать на нём нельзя, но выглядит нормально." } },
      { q: { ro: "Cât ține un implant?", ru: "Сколько служит имплант?" }, a: { ro: "Statistic, peste 95% sunt funcționale la 15 ani. Ce cedează mai des e coroana, nu implantul — și coroana se schimbă.", ru: "Статистически более 95% функциональны через 15 лет. Чаще выходит из строя коронка, а не имплант — а коронка меняется." } },
    ],
    doctors: ["andrei-cojocaru", "victor-grosu"],
    related: ["consultatie", "estetica", "carii"],
    minutes: 60,
  },

  /* ------------------------------------------------------------------ */
  ortodontie: {
    kicker: { ro: "Ortodonție", ru: "Ортодонтия" },
    lead: {
      ro: "Gutiere transparente pe care le schimbi acasă la două săptămâni. Vii la control o dată la două luni, iar între timp nimeni nu observă că porți ceva.",
      ru: "Прозрачные каппы, которые вы меняете дома каждые две недели. На контроль приходите раз в два месяца, а между визитами никто не замечает, что вы что-то носите.",
    },
    cover: "/img/smile-3.jpg",
    shots: ["/img/smile-2.jpg", "/img/consult.jpg"],
    facts: [
      { label: { ro: "Durată", ru: "Длительность" }, value: { ro: "8–14 luni", ru: "8–14 мес." } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "de la 18 000 lei", ru: "от 18 000 леев" } },
      { label: { ro: "Controale", ru: "Контроли" }, value: { ro: "la 2 luni", ru: "раз в 2 мес." } },
      { label: { ro: "Vizibilitate", ru: "Заметность" }, value: { ro: "aproape zero", ru: "почти нулевая" } },
    ],
    sections: [
      {
        title: { ro: "Vezi rezultatul înainte să începi", ru: "Вы видите результат до начала" },
        body: [
          {
            ro: "Din scanarea inițială facem o simulare: dinții tăi de acum, apoi mișcarea lună cu lună, până la poziția finală. E un video de 20 de secunde pe care îl vezi la a doua vizită. Dacă rezultatul nu îți convine, se ajustează planul înainte să se comande vreo gutieră.",
            ru: "По первому скану делаем симуляцию: ваши зубы сейчас, затем движение месяц за месяцем, до финального положения. Это 20-секундное видео, которое вы смотрите на втором визите. Если результат вас не устраивает, план корректируется до того, как будет заказана хоть одна каппа.",
          },
        ],
      },
      {
        title: { ro: "Gutiere sau aparat fix", ru: "Каппы или брекеты" },
        body: [
          {
            ro: "Gutierele rezolvă majoritatea cazurilor de înghesuire, spații și rotații moderate. Pentru mușcături complicate sau dinți incluși, aparatul fix rămâne mai puternic — și îl punem, dacă ăsta e răspunsul corect.",
            ru: "Каппы решают большинство случаев скученности, промежутков и умеренных ротаций. При сложном прикусе или ретинированных зубах брекеты остаются сильнее — и мы их поставим, если это правильный ответ.",
          },
          {
            ro: "Nu vindem gutiere unde nu funcționează. E cea mai frecventă greșeală din ortodonția comercială și se plătește cu doi ani pierduți.",
            ru: "Мы не продаём каппы там, где они не работают. Это самая частая ошибка коммерческой ортодонтии, и платят за неё двумя потерянными годами.",
          },
        ],
      },
      {
        title: { ro: "Ce se cere de la tine", ru: "Что требуется от вас" },
        body: [
          {
            ro: "22 de ore pe zi. Le scoți doar când mănânci și când te speli pe dinți. Ăsta e singurul lucru care decide dacă tratamentul durează 10 luni sau 18 — nu marca gutierei și nici clinica.",
            ru: "22 часа в сутки. Снимаете только на время еды и чистки зубов. Именно это решает, займёт лечение 10 месяцев или 18 — а не марка капп и не клиника.",
          },
          {
            ro: "La final primești o gutieră de contenție pentru noapte. Se poartă pe termen lung. Fără ea, dinții se întorc încet în poziția veche, indiferent cât de bine a mers tratamentul.",
            ru: "В конце вы получаете ретенционную каппу на ночь. Носить её нужно долго. Без неё зубы медленно возвращаются в старое положение, как бы хорошо ни прошло лечение.",
          },
        ],
      },
    ],
    flow: [
      { title: { ro: "Scanare și diagnostic", ru: "Сканирование и диагностика" }, text: { ro: "Scan 3D, radiografie panoramică, fotografii.", ru: "3D-скан, панорамный снимок, фотографии." } },
      { title: { ro: "Simularea", ru: "Симуляция" }, text: { ro: "Vezi rezultatul final ca video, la a doua vizită.", ru: "Смотрите финальный результат как видео на втором визите." } },
      { title: { ro: "Prima serie de gutiere", ru: "Первая серия капп" }, text: { ro: "Sosesc în 3 săptămâni. Te învățăm cum se pun și se scot.", ru: "Приходят через 3 недели. Учим, как надевать и снимать." } },
      { title: { ro: "Controale", ru: "Контроли" }, text: { ro: "La 2 luni, 15 minute. Verificăm că mișcarea e pe grafic.", ru: "Раз в 2 месяца, 15 минут. Проверяем, что движение идёт по графику." } },
      { title: { ro: "Contenția", ru: "Ретенция" }, text: { ro: "Gutieră de noapte, ca rezultatul să rămână.", ru: "Ночная каппа, чтобы результат сохранился." } },
    ],
    includes: [
      { ro: "Toate seturile de gutiere până la final", ru: "Все наборы капп до конца лечения" },
      { ro: "Simulare digitală a rezultatului", ru: "Цифровая симуляция результата" },
      { ro: "Toate controalele", ru: "Все контрольные визиты" },
      { ro: "Refinements — seturi suplimentare, dacă e nevoie", ru: "Рефайнменты — дополнительные наборы, если нужно" },
      { ro: "Prima gutieră de contenție", ru: "Первая ретенционная каппа" },
    ],
    prices: [
      { name: { ro: "Caz ușor (până la 14 gutiere)", ru: "Лёгкий случай (до 14 капп)" }, price: { ro: "18 000 lei", ru: "18 000 леев" } },
      { name: { ro: "Caz mediu", ru: "Средний случай" }, price: { ro: "26 000 lei", ru: "26 000 леев" } },
      { name: { ro: "Caz complex, ambele arcade", ru: "Сложный случай, обе челюсти" }, price: { ro: "34 000 lei", ru: "34 000 леев" } },
      { name: { ro: "Aparat fix metalic (o arcadă)", ru: "Металлические брекеты (одна челюсть)" }, price: { ro: "9 800 lei", ru: "9 800 леев" } },
      { name: { ro: "Gutieră de contenție suplimentară", ru: "Дополнительная ретенционная каппа" }, price: { ro: "1 400 lei", ru: "1 400 леев" } },
    ],
    faq: [
      { q: { ro: "Se vede că port ceva?", ru: "Видно, что я что-то ношу?" }, a: { ro: "De la distanța la care vorbești cu cineva, practic nu. Se observă în fotografii cu blitz, de aproape.", ru: "С расстояния обычного разговора — практически нет. Заметно на фото со вспышкой, вблизи." } },
      { q: { ro: "Se vorbește greu?", ru: "Трудно ли говорить?" }, a: { ro: "Primele 2–3 zile ai un ușor sâsâit, apoi limba se obișnuiește și dispare complet.", ru: "Первые 2–3 дня лёгкое шепелявление, потом язык привыкает и оно полностью исчезает." } },
      { q: { ro: "Se poate plăti în rate?", ru: "Можно в рассрочку?" }, a: { ro: "Da, pe toată durata tratamentului, fără dobândă. Plătești lunar cât ține tratamentul.", ru: "Да, на весь срок лечения, без процентов. Платите ежемесячно, пока идёт лечение." } },
    ],
    doctors: ["ana-cebotari"],
    related: ["consultatie", "estetica", "copii"],
    minutes: 40,
  },

  /* ------------------------------------------------------------------ */
  estetica: {
    kicker: { ro: "Estetică", ru: "Эстетика" },
    lead: {
      ro: "Îți proiectăm zâmbetul pe ecran și îl probăm în gură cu un compozit provizoriu, înainte să șlefuim ceva. Dacă nu îți place, se schimbă. Dintele rămâne intact.",
      ru: "Мы проектируем вашу улыбку на экране и примеряем её во рту временным композитом, прежде чем что-то обтачивать. Не понравится — меняем. Зуб остаётся нетронутым.",
    },
    cover: "/img/smile-2.jpg",
    shots: ["/img/smile-hero.jpg", "/img/smile-3.jpg"],
    facts: [
      { label: { ro: "Albire", ru: "Отбеливание" }, value: { ro: "60 minute", ru: "60 минут" } },
      { label: { ro: "Fațete", ru: "Виниры" }, value: { ro: "2 ședințe", ru: "2 приёма" } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "de la 2 400 lei", ru: "от 2 400 леев" } },
      { label: { ro: "Proba", ru: "Примерка" }, value: { ro: "inclusă", ru: "включена" } },
    ],
    sections: [
      {
        title: { ro: "Proba care schimbă tot", ru: "Примерка, которая меняет всё" },
        body: [
          {
            ro: "Se numește mock-up. După ce proiectăm forma nouă digital, o turnăm într-un compozit alb și ți-o punem peste dinții tăi, fără să atingem smalțul. Stai zece minute cu zâmbetul nou, te uiți în oglindă, faci o poză, ceri să fie mai scurt sau mai rotund.",
            ru: "Это называется мок-ап. После цифрового проектирования новой формы мы отливаем её в белом композите и надеваем поверх ваших зубов, не трогая эмаль. Вы десять минут сидите с новой улыбкой, смотрите в зеркало, делаете фото, просите короче или круглее.",
          },
          {
            ro: "Abia după ce spui da începe partea ireversibilă. E singura metodă onestă de a face estetică: nimeni nu ar trebui să afle cum arată rezultatul după ce dintele a fost deja șlefuit.",
            ru: "И только после вашего «да» начинается необратимая часть. Это единственный честный способ делать эстетику: никто не должен узнавать, как выглядит результат, после того как зуб уже обточен.",
          },
        ],
      },
      {
        title: { ro: "Albirea, pe scurt", ru: "Об отбеливании коротко" },
        body: [
          {
            ro: "O ședință de 60 de minute, cu gel activat de lampă și gingia izolată. Ridică 4–6 nuanțe. Rezultatul ține 12–18 luni, în funcție de cafea, ceai și fumat.",
            ru: "Один приём 60 минут, гель активируется лампой, десна изолирована. Даёт 4–6 тонов. Результат держится 12–18 месяцев — зависит от кофе, чая и курения.",
          },
          {
            ro: "Sensibilitatea de după e reală, dar durează 24–48 de ore. Îți dăm gel cu fluor pentru acasă, care o scurtează mult. Nu albim peste obturații vechi din față — se schimbă întâi ele, altfel rămân galbene pe un dinte alb.",
            ru: "Чувствительность после — реальна, но длится 24–48 часов. Мы даём фторидный гель домой, он её сильно сокращает. Мы не отбеливаем поверх старых пломб во фронте — сначала меняем их, иначе они останутся жёлтыми на белом зубе.",
          },
        ],
      },
      {
        title: { ro: "Fațete: cât se șlefuiește", ru: "Виниры: сколько обтачивается" },
        body: [
          {
            ro: "Între 0,3 și 0,6 mm de pe fața dintelui — cam cât grosimea unei unghii. În cazurile în care dinții sunt deja mici sau retrași, se poate face fără șlefuire deloc. Îți spunem exact la consultație, cu cifra scrisă în plan.",
            ru: "От 0,3 до 0,6 мм с передней поверхности зуба — примерно толщина ногтя. Если зубы уже небольшие или наклонены внутрь, можно вообще без обточки. Скажем точно на консультации, с цифрой в плане.",
          },
        ],
      },
    ],
    flow: [
      { title: { ro: "Fotografii și scanare", ru: "Фотографии и сканирование" }, text: { ro: "Inclusiv cum arată zâmbetul când vorbești, nu doar când pozezi.", ru: "Включая то, как улыбка выглядит в разговоре, а не только на фото." } },
      { title: { ro: "Designul digital", ru: "Цифровой дизайн" }, text: { ro: "Forma se desenează pe fața ta, nu pe un șablon.", ru: "Форма рисуется по вашему лицу, а не по шаблону." } },
      { title: { ro: "Mock-up în gură", ru: "Мок-ап во рту" }, text: { ro: "Îl porți zece minute și decizi. Nimic nu s-a atins încă.", ru: "Носите десять минут и решаете. Ничего ещё не тронуто." } },
      { title: { ro: "Execuția", ru: "Изготовление" }, text: { ro: "Ceramica se face în laborator, după modelul aprobat de tine.", ru: "Керамика изготавливается в лаборатории по одобренной вами модели." } },
      { title: { ro: "Cimentarea", ru: "Фиксация" }, text: { ro: "Se probează întâi fără ciment. Ultima șansă să schimbi ceva.", ru: "Сначала примеряем без цемента. Последний шанс что-то изменить." } },
    ],
    includes: [
      { ro: "Design digital al zâmbetului", ru: "Цифровой дизайн улыбки" },
      { ro: "Mock-up de probă, în gură", ru: "Пробный мок-ап во рту" },
      { ro: "Ceramică presată sau stratificată", ru: "Прессованная или послойная керамика" },
      { ro: "Probă înainte de cimentare", ru: "Примерка до фиксации" },
      { ro: "Gel pentru sensibilitate, acasă", ru: "Гель от чувствительности домой" },
    ],
    prices: [
      { name: { ro: "Albire profesională (o ședință)", ru: "Профессиональное отбеливание (1 приём)" }, price: { ro: "2 400 lei", ru: "2 400 леев" } },
      { name: { ro: "Albire + kit pentru acasă", ru: "Отбеливание + набор домой" }, price: { ro: "3 100 lei", ru: "3 100 леев" } },
      { name: { ro: "Fațetă ceramică", ru: "Керамический винир" }, price: { ro: "4 200 lei", ru: "4 200 леев" } },
      { name: { ro: "Fațetă din compozit", ru: "Композитный винир" }, price: { ro: "1 900 lei", ru: "1 900 леев" } },
      { name: { ro: "Design digital + mock-up", ru: "Цифровой дизайн + мок-ап" }, price: { ro: "0 lei", ru: "0 леев" }, note: { ro: "inclus dacă faci lucrarea la noi", ru: "включено, если делаете работу у нас" } },
    ],
    faq: [
      { q: { ro: "Fațetele arată fals?", ru: "Виниры выглядят искусственно?" }, a: { ro: "Depinde de formă, nu de material. Dacă ceri opt dinți identici de un alb absolut, da. Noi păstrăm mici diferențe între dinți, exact ca la unul natural.", ru: "Зависит от формы, а не от материала. Если попросить восемь одинаковых зубов абсолютно белого цвета — да. Мы сохраняем небольшие различия между зубами, как в природе." } },
      { q: { ro: "Cât ține o fațetă?", ru: "Сколько служит винир?" }, a: { ro: "10–15 ani la ceramică, dacă nu scrâșnești. Dacă scrâșnești, primești o gutieră de noapte odată cu ele.", ru: "10–15 лет для керамики, если вы не скрипите зубами. Если скрипите — вместе с ними получаете ночную каппу." } },
      { q: { ro: "Albirea strică smalțul?", ru: "Портит ли отбеливание эмаль?" }, a: { ro: "Nu, la concentrațiile folosite în cabinet și cu izolarea gingiei. Ce strică smalțul sunt kiturile de pe internet, folosite luni la rând.", ru: "Нет — при кабинетных концентрациях и с изоляцией десны. Эмаль портят интернет-наборы, которыми пользуются месяцами." } },
    ],
    doctors: ["andrei-cojocaru", "ana-cebotari", "irina-bejan"],
    related: ["consultatie", "ortodontie", "igienizare"],
    minutes: 60,
  },

  /* ------------------------------------------------------------------ */
  copii: {
    kicker: { ro: "Pentru copii", ru: "Для детей" },
    lead: {
      ro: "Prima vizită nu are instrumente în ea. Copilul urcă în scaun, îl ridicăm și îl coborâm, se uită cu oglinda în gura lui. Atât. Data viitoare va veni fără să plângă.",
      ru: "На первом визите нет инструментов. Ребёнок садится в кресло, мы его поднимаем и опускаем, он смотрит зеркальцем себе в рот. И всё. В следующий раз он придёт без слёз.",
    },
    cover: "/img/assistant.jpg",
    shots: ["/img/chair.jpg", "/img/clinic-room.jpg"],
    facts: [
      { label: { ro: "Vârstă", ru: "Возраст" }, value: { ro: "de la 3 ani", ru: "с 3 лет" } },
      { label: { ro: "Durată", ru: "Длительность" }, value: { ro: "30 minute", ru: "30 минут" } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "de la 450 lei", ru: "от 450 леев" } },
      { label: { ro: "Părintele", ru: "Родитель" }, value: { ro: "stă lângă", ru: "рядом" } },
    ],
    sections: [
      {
        title: { ro: "Regula noastră: nimeni nu ține copilul", ru: "Наше правило: ребёнка никто не держит" },
        body: [
          {
            ro: "Dacă un copil de patru ani trebuie ținut de mâini ca să-i tratezi un dinte, ai pierdut deja. Acel copil se va teme de dentist douăzeci de ani. Preferăm să pierdem o ședință și să câștigăm un pacient pentru toată viața.",
            ru: "Если четырёхлетнего ребёнка приходится держать за руки, чтобы лечить зуб, вы уже проиграли. Этот ребёнок будет бояться стоматолога двадцать лет. Мы лучше потеряем один приём и получим пациента на всю жизнь.",
          },
          {
            ro: "Când chiar nu se poate altfel — durere acută, copil foarte mic — lucrăm cu sedare cu protoxid de azot. Copilul e treaz, răspunde, doar că nu îi mai pasă. Se trezește complet în cinci minute după ce oprim gazul.",
            ru: "Когда иначе действительно нельзя — острая боль, совсем маленький ребёнок — работаем с седацией закисью азота. Ребёнок в сознании, отвечает, просто ему всё равно. Полностью приходит в себя через пять минут после отключения газа.",
          },
        ],
      },
      {
        title: { ro: "Ce facem la copii", ru: "Что мы делаем детям" },
        body: [
          {
            ro: "Sigilări la molarii permanenți imediat ce ies, fluorizări, obturații colorate pe care copilul le alege singur, tratamente de canal la dinții de lapte când e nevoie, și extracții — cât mai rar posibil.",
            ru: "Герметизация постоянных моляров сразу после прорезывания, фторирование, цветные пломбы, которые ребёнок выбирает сам, лечение каналов молочных зубов, когда нужно, и удаления — как можно реже.",
          },
          {
            ro: "Facem și verificarea ortodontică de la 7 ani. Nu ca să punem aparat devreme, ci ca să știm dacă e nevoie de un aparat mobil acum, care poate scuti de doi ani de bracket-uri la 14.",
            ru: "Делаем и ортодонтическую проверку с 7 лет. Не чтобы поставить брекеты рано, а чтобы понять, нужна ли сейчас съёмная пластинка, которая может сэкономить два года брекетов в 14.",
          },
        ],
      },
      {
        title: { ro: "Ce să nu spui acasă", ru: "Что не говорить дома" },
        body: [
          {
            ro: "Nu spune nu doare — copilul aude cuvântul doare. Nu promite cadou dacă e cuminte, pentru că asta îi transmite că urmează ceva greu. Spune-i doar că mergem să numărăm dinții. E adevărat și e suficient.",
            ru: "Не говорите «не больно» — ребёнок слышит слово «больно». Не обещайте подарок за то, что он потерпит: так вы сообщаете, что впереди что-то тяжёлое. Скажите просто, что идём считать зубы. Это правда и этого достаточно.",
          },
        ],
      },
    ],
    flow: [
      { title: { ro: "Vizita de cunoștință", ru: "Визит-знакомство" }, text: { ro: "Fără instrumente. Doar scaunul, oglinda și aspiratorul care face zgomot.", ru: "Без инструментов. Только кресло, зеркальце и шумный слюноотсос." } },
      { title: { ro: "Numărăm dinții", ru: "Считаем зубы" }, text: { ro: "Cu oglinda, împreună. Copilul ține el oglinda.", ru: "Зеркальцем, вместе. Ребёнок держит зеркальце сам." } },
      { title: { ro: "Arătăm ce urmează", ru: "Показываем, что дальше" }, text: { ro: "Fiecare instrument e ținut în mână și pornit pe unghie, întâi.", ru: "Каждый инструмент даём в руку и сначала включаем на ногте." } },
      { title: { ro: "Tratamentul", ru: "Лечение" }, text: { ro: "Scurt, cu pauze. Dacă ridică mâna, ne oprim și noi.", ru: "Коротко, с паузами. Поднял руку — мы тоже останавливаемся." } },
    ],
    includes: [
      { ro: "Vizită de acomodare, gratuită", ru: "Адаптационный визит, бесплатно" },
      { ro: "Explicații pe limba copilului", ru: "Объяснения на языке ребёнка" },
      { ro: "Părintele stă lângă scaun", ru: "Родитель сидит рядом с креслом" },
      { ro: "Obturații colorate, la alegerea lui", ru: "Цветные пломбы на его выбор" },
      { ro: "Sedare cu protoxid, dacă e nevoie", ru: "Седация закисью азота, если нужно" },
    ],
    prices: [
      { name: { ro: "Vizită de acomodare", ru: "Адаптационный визит" }, price: { ro: "0 lei", ru: "0 леев" } },
      { name: { ro: "Consultație pediatrică", ru: "Детская консультация" }, price: { ro: "0 lei", ru: "0 леев" } },
      { name: { ro: "Obturație dinte de lapte", ru: "Пломба молочного зуба" }, price: { ro: "450 lei", ru: "450 леев" } },
      { name: { ro: "Sigilare (per dinte)", ru: "Герметизация (за зуб)" }, price: { ro: "350 lei", ru: "350 леев" } },
      { name: { ro: "Sedare cu protoxid de azot", ru: "Седация закисью азота" }, price: { ro: "700 lei", ru: "700 леев" } },
    ],
    faq: [
      { q: { ro: "De la ce vârstă?", ru: "С какого возраста?" }, a: { ro: "Prima verificare, la un an de la primul dinte. Prima vizită adevărată, pe la 3 ani. Dacă e durere, la orice vârstă.", ru: "Первая проверка — через год после первого зуба. Настоящий первый визит — около 3 лет. Если болит — в любом возрасте." } },
      { q: { ro: "Merită tratat un dinte de lapte?", ru: "Стоит ли лечить молочный зуб?" }, a: { ro: "Da. Un molar de lapte pierdut la 5 ani lasă loc dinților vecini să se mute și blochează dintele permanent care trebuia să iasă acolo.", ru: "Да. Молочный моляр, потерянный в 5 лет, позволяет соседним зубам сместиться и блокирует постоянный зуб, который должен прорезаться на его месте." } },
      { q: { ro: "Pot sta lângă el?", ru: "Можно ли быть рядом?" }, a: { ro: "Da, întotdeauna. Singura rugăminte: lasă-ne pe noi să vorbim cu el în timpul tratamentului.", ru: "Да, всегда. Единственная просьба: во время лечения дайте нам говорить с ним." } },
    ],
    doctors: ["elena-rusu"],
    related: ["consultatie", "igienizare", "ortodontie"],
    minutes: 30,
  },

  /* ------------------------------------------------------------------ */
  urgente: {
    kicker: { ro: "Urgențe", ru: "Неотложно" },
    lead: {
      ro: "Durere care nu trece cu pastile, dinte rupt, umflătură. Suni la orice oră și îți răspunde medicul de gardă, nu o secretară care îți dă o programare peste trei zile.",
      ru: "Боль, которую не снимают таблетки, сломанный зуб, отёк. Вы звоните в любое время, и отвечает дежурный врач, а не секретарь, который запишет вас через три дня.",
    },
    cover: "/img/clinic-room.jpg",
    shots: ["/img/chair.jpg", "/img/xray-wall.jpg"],
    facts: [
      { label: { ro: "Program", ru: "Режим" }, value: { ro: "24/7", ru: "24/7" } },
      { label: { ro: "Răspuns", ru: "Ответ" }, value: { ro: "sub 3 min", ru: "менее 3 мин" } },
      { label: { ro: "Deschidem în", ru: "Открываем за" }, value: { ro: "40 min", ru: "40 мин" } },
      { label: { ro: "Preț", ru: "Цена" }, value: { ro: "de la 600 lei", ru: "от 600 леев" } },
    ],
    sections: [
      {
        title: { ro: "Sună înainte să vii", ru: "Позвоните, прежде чем ехать" },
        body: [
          {
            ro: "În program, te primim în aceeași zi, între programări. În afara programului, medicul de gardă ajunge la clinică în aproximativ 40 de minute de la apel. Dacă suni întâi, îți spune la telefon ce să faci până ajungi — și de multe ori ce faci în primele 20 de minute contează mai mult decât ce facem noi după.",
            ru: "В рабочее время принимаем в тот же день, между записями. Вне графика дежурный врач приезжает в клинику примерно за 40 минут после звонка. Если позвоните заранее, он скажет по телефону, что делать до приезда — и часто то, что вы делаете в первые 20 минут, важнее того, что делаем мы потом.",
          },
        ],
      },
      {
        title: { ro: "Ce e cu adevărat urgent", ru: "Что действительно неотложно" },
        body: [
          {
            ro: "Umflătura care crește și urcă spre ochi sau coboară spre gât — asta se rezolvă în aceeași oră, nu a doua zi. Dintele complet expulzat dintr-un accident: îl pui în lapte sau în ser fiziologic, nu în apă, și ai aproximativ o oră ca să fie replantat cu șanse.",
            ru: "Отёк, который растёт и идёт вверх к глазу или вниз к шее, — это решается в тот же час, а не назавтра. Полностью выбитый зуб после травмы: положите его в молоко или физраствор, не в воду, и у вас есть примерно час, чтобы реплантация имела шансы.",
          },
          {
            ro: "Durerea pulsatilă care te trezește noaptea și nu cedează la ibuprofen înseamnă de obicei pulpită. Nu e periculoasă, dar nu trece de la sine și nu are rost să o suporți până luni.",
            ru: "Пульсирующая боль, которая будит ночью и не снимается ибупрофеном, обычно означает пульпит. Не опасно, но само не пройдёт, и терпеть до понедельника смысла нет.",
          },
        ],
      },
      {
        title: { ro: "Prima grijă e durerea", ru: "Первое — снять боль" },
        body: [
          {
            ro: "La urgență nu începem un plan de tratament complet. Scoatem durerea, oprim infecția, punem o obturație provizorie sau drenăm. Restul se face calm, în zilele următoare, când poți gândi și poți alege.",
            ru: "На неотложном приёме мы не начинаем полный план лечения. Снимаем боль, останавливаем инфекцию, ставим временную пломбу или дренируем. Остальное — спокойно, в ближайшие дни, когда вы можете думать и выбирать.",
          },
        ],
      },
    ],
    flow: [
      { title: { ro: "Apelul", ru: "Звонок" }, text: { ro: "Răspunde medicul. Îți spune ce să faci imediat.", ru: "Отвечает врач. Говорит, что делать прямо сейчас." } },
      { title: { ro: "Deschidem", ru: "Открываем" }, text: { ro: "În program — între programări. Noaptea — în ~40 de minute.", ru: "В часы работы — между записями. Ночью — примерно за 40 минут." } },
      { title: { ro: "Radiografie", ru: "Снимок" }, text: { ro: "Ca să tratăm cauza, nu ce se vede cu ochiul liber.", ru: "Чтобы лечить причину, а не то, что видно глазом." } },
      { title: { ro: "Scoatem durerea", ru: "Снимаем боль" }, text: { ro: "Anestezie, drenaj sau deschiderea canalului. Pleci fără durere.", ru: "Анестезия, дренаж или раскрытие канала. Уходите без боли." } },
    ],
    includes: [
      { ro: "Consultația de urgență", ru: "Неотложный осмотр" },
      { ro: "Radiografie", ru: "Рентген-снимок" },
      { ro: "Anestezie", ru: "Анестезия" },
      { ro: "Manopera care oprește durerea", ru: "Манипуляция, снимающая боль" },
      { ro: "Rețetă și instrucțiuni scrise", ru: "Рецепт и письменные инструкции" },
    ],
    prices: [
      { name: { ro: "Consultație de urgență, în program", ru: "Неотложный осмотр в рабочее время" }, price: { ro: "0 lei", ru: "0 леев" } },
      { name: { ro: "Deschiderea camerei pulpare", ru: "Раскрытие пульповой камеры" }, price: { ro: "600 lei", ru: "600 леев" } },
      { name: { ro: "Drenajul unui abces", ru: "Дренирование абсцесса" }, price: { ro: "900 lei", ru: "900 леев" } },
      { name: { ro: "Extracție de urgență", ru: "Экстренное удаление" }, price: { ro: "800 lei", ru: "800 леев" } },
      { name: { ro: "Deplasare în afara programului", ru: "Выезд вне графика" }, price: { ro: "+ 500 lei", ru: "+ 500 леев" } },
    ],
    faq: [
      { q: { ro: "Chiar răspunde cineva la 3 noaptea?", ru: "Правда кто-то отвечает в 3 ночи?" }, a: { ro: "Da, medicul de gardă. Rotim garda între cei patru medici, deci telefonul e mereu la cineva care poate veni.", ru: "Да, дежурный врач. Дежурство чередуется между четырьмя врачами, так что телефон всегда у того, кто может приехать." } },
      { q: { ro: "Ce iau până ajung?", ru: "Что принять до приезда?" }, a: { ro: "Ibuprofen 400 mg, dacă nu ai contraindicații, și rece pe obraz din exterior. Nu pune aspirină pe dinte și nu încălzi zona umflată.", ru: "Ибупрофен 400 мг, если нет противопоказаний, и холод на щёку снаружи. Не кладите аспирин на зуб и не грейте отёк." } },
      { q: { ro: "Trebuie să fiu pacientul vostru?", ru: "Нужно ли быть вашим пациентом?" }, a: { ro: "Nu. La urgențe primim pe oricine, inclusiv oameni care nu au mai fost niciodată la noi.", ru: "Нет. На неотложный приём принимаем всех, включая тех, кто никогда у нас не был." } },
    ],
    doctors: ["victor-grosu", "andrei-cojocaru"],
    related: ["carii", "consultatie", "implanturi"],
    minutes: 45,
  },
};

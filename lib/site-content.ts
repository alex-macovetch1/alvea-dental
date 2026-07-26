/**
 * Copy for the pages that are not a service, a doctor or an article:
 * /despre, /rezultate, /contact, /preturi, plus every string the booking
 * wizard needs and the per-route titles used for <title> and breadcrumbs.
 */

import type { T } from "./content";

/* ------------------------------------------------------------------ */
/* page titles — used by generateMetadata and by the breadcrumb        */

export const PAGE_TITLES: Record<string, T> = {
  servicii: { ro: "Servicii", ru: "Услуги" },
  echipa: { ro: "Echipa", ru: "Команда" },
  preturi: { ro: "Prețuri", ru: "Цены" },
  rezultate: { ro: "Rezultate", ru: "Результаты" },
  blog: { ro: "Blog", ru: "Блог" },
  despre: { ro: "Despre noi", ru: "О нас" },
  contact: { ro: "Contact", ru: "Контакты" },
  programare: { ro: "Programare", ru: "Запись" },
};

/* ------------------------------------------------------------------ */
/* /despre                                                             */

export const ABOUT_PAGE = {
  kicker: { ro: "Din 2012, pe aceeași stradă", ru: "С 2012 года, на той же улице" },
  title: { ro: "O clinică pornită din", ru: "Клиника, начатая из" },
  titleEm: { ro: "o nemulțumire", ru: "недовольства" },
  lead: {
    ro: "Trei medici tineri care se săturaseră să lucreze în locuri unde pacientului i se spunea suma abia la casă. Am închiriat două cabinete pe Alexandru cel Bun și am pus o singură regulă: prețul se scrie înainte.",
    ru: "Три молодых врача, уставших работать там, где пациенту называют сумму только на кассе. Мы сняли два кабинета на Александру чел Бун и ввели единственное правило: цена пишется заранее.",
  },
  storyTitle: { ro: "Ce s-a schimbat în paisprezece ani", ru: "Что изменилось за четырнадцать лет" },
  story: [
    {
      ro: "În primul an am avut 214 pacienți și un singur scaun care se strica la două luni. Nu aveam recepționeră: răspundea la telefon cine nu era în cabinet. Ce funcționa deja atunci era regula cu prețul scris, iar oamenii reveneau în principal pentru asta.",
      ru: "В первый год у нас было 214 пациентов и одно кресло, которое ломалось раз в два месяца. Администратора не было: на звонки отвечал тот, кто не в кабинете. Что уже тогда работало — правило про написанную цену, и люди возвращались в основном из-за неё.",
    },
    {
      ro: "În 2016 am cumpărat primul tomograf 3D, pe credit, într-un moment în care nicio clinică din oraș de mărimea noastră nu avea unul. A fost cea mai bună decizie financiară proastă pe care am luat-o: doi ani am plătit rate, dar am putut începe implantologia ghidată.",
      ru: "В 2016 году мы купили первый 3D-томограф в кредит — в момент, когда ни одна клиника нашего размера в городе его не имела. Это было лучшее плохое финансовое решение из принятых нами: два года мы платили взносы, но смогли начать направленную имплантологию.",
    },
    {
      ro: "În 2020 am stat închiși șapte săptămâni și am ținut toată echipa pe salariu. Am ieșit din perioada aia cu mai puțini bani și cu toți oamenii. Trei dintre ei sunt aici și acum.",
      ru: "В 2020 году мы были закрыты семь недель и держали всю команду на зарплате. Из того периода мы вышли с меньшими деньгами и со всеми людьми. Трое из них здесь и сейчас.",
    },
    {
      ro: "Astăzi suntem unsprezece oameni, patru cabinete și un laborator propriu de tehnică dentară la etajul de sus. Regula de la început a rămas neschimbată, iar acum e și scrisă în contract.",
      ru: "Сегодня нас одиннадцать человек, четыре кабинета и собственная зуботехническая лаборатория этажом выше. Правило с самого начала осталось прежним — и теперь оно прописано в договоре.",
    },
  ],
  timeline: [
    { year: "2012", text: { ro: "Două cabinete, trei medici, 214 pacienți în primul an.", ru: "Два кабинета, три врача, 214 пациентов за первый год." } },
    { year: "2016", text: { ro: "Primul tomograf 3D și începutul implantologiei ghidate.", ru: "Первый 3D-томограф и начало направленной имплантологии." } },
    { year: "2018", text: { ro: "Cabinetul de pediatrie și programul de urgențe 24/7.", ru: "Детский кабинет и режим неотложной помощи 24/7." } },
    { year: "2021", text: { ro: "Laborator propriu de tehnică dentară, la etaj.", ru: "Собственная зуботехническая лаборатория, этажом выше." } },
    { year: "2024", text: { ro: "Scaner intraoral pe fiecare cabinet. Amprentele cu pastă au dispărut.", ru: "Интраоральный сканер в каждом кабинете. Слепки пастой исчезли." } },
    { year: "2026", text: { ro: "12 400 de pacienți, 11 oameni, aceeași stradă.", ru: "12 400 пациентов, 11 человек, та же улица." } },
  ],
  valuesTitle: { ro: "Patru lucruri pe care nu le negociem", ru: "Четыре вещи, которые мы не обсуждаем" },
  values: [
    {
      title: { ro: "Prețul se scrie înainte", ru: "Цена пишется заранее" },
      text: {
        ro: "Planul are suma finală pe el. Dacă apare ceva în plus, ne oprim și te întrebăm — nu adunăm la casă.",
        ru: "В плане стоит итоговая сумма. Если появится что-то ещё, мы остановимся и спросим — а не досчитаем на кассе.",
      },
    },
    {
      title: { ro: "Nu vindem ce nu e nevoie", ru: "Мы не продаём ненужное" },
      text: {
        ro: "Dacă răspunsul corect e mai așteptăm șase luni, ăsta e răspunsul pe care îl primești, chiar dacă nu ne convine.",
        ru: "Если правильный ответ — «подождём полгода», именно его вы и получите, даже если нам это невыгодно.",
      },
    },
    {
      title: { ro: "Un pacient, un medic", ru: "Один пациент — один врач" },
      text: {
        ro: "Cine te vede prima dată te duce până la capăt. Nu te rotim între cabinete ca să umplem agenda.",
        ru: "Кто принял вас впервые, тот доводит лечение до конца. Мы не перекидываем вас между кабинетами ради заполнения графика.",
      },
    },
    {
      title: { ro: "Ridici mâna, ne oprim", ru: "Подняли руку — мы остановились" },
      text: {
        ro: "Nu e o formulă de pe site. E o regulă pe care o respectă toți medicii, inclusiv când suntem la jumătatea unei manopere.",
        ru: "Это не фраза с сайта. Это правило, которое соблюдают все врачи, даже посреди манипуляции.",
      },
    },
  ],
  techTitle: { ro: "Ce e în cabinete", ru: "Что стоит в кабинетах" },
  techLead: {
    ro: "Nu enumerăm aparate ca să impresionăm. Fiecare din lista asta schimbă concret ceva pentru tine.",
    ru: "Мы перечисляем оборудование не для впечатления. Каждый пункт списка конкретно что-то меняет для вас.",
  },
  tech: [
    {
      name: { ro: "Tomograf 3D", ru: "3D-томограф" },
      why: { ro: "Vezi osul în volum, nu o umbră pe film. Fără el, implantologia e ghicit.", ru: "Кость видна в объёме, а не тенью на плёнке. Без него имплантология — угадывание." },
    },
    {
      name: { ro: "Scaner intraoral", ru: "Интраоральный сканер" },
      why: { ro: "Fără pastă de amprentă în gură și fără senzația de vomă. Durează 90 de secunde.", ru: "Без слепочной массы во рту и без рвотного рефлекса. Занимает 90 секунд." },
    },
    {
      name: { ro: "Anestezie computerizată", ru: "Компьютерная анестезия" },
      why: { ro: "Substanța intră lent. Durerea de la anestezie vine din viteză, nu din ac.", ru: "Препарат поступает медленно. Боль от анестезии — от скорости, а не от иглы." },
    },
    {
      name: { ro: "Microscop pentru canale", ru: "Микроскоп для каналов" },
      why: { ro: "Canalele mici se văd, nu se caută pe pipăite. De asta reușim reluările.", ru: "Мелкие каналы видно, а не ищут на ощупь. Поэтому у нас получаются перелечивания." },
    },
    {
      name: { ro: "Sterilizare clasa B", ru: "Стерилизация класса B" },
      why: { ro: "Fiecare set trece prin autoclav după fiecare pacient, cu test de control zilnic.", ru: "Каждый набор проходит автоклав после каждого пациента, с ежедневным контрольным тестом." },
    },
    {
      name: { ro: "Laborator propriu", ru: "Собственная лаборатория" },
      why: { ro: "Tehnicianul e la etaj. O corecție de culoare se face în aceeași zi, nu în trei.", ru: "Техник этажом выше. Коррекция цвета делается в тот же день, а не за три." },
    },
  ],
  joinTitle: { ro: "Vrei să lucrezi aici?", ru: "Хотите работать здесь?" },
  joinText: {
    ro: "Căutăm mereu asistente cu experiență și un medic generalist. Scrie-ne pe email, cu ce ai făcut până acum.",
    ru: "Мы всегда ищем опытных ассистентов и врача-терапевта. Напишите нам на почту, с рассказом о том, что вы делали.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* /rezultate                                                          */

export type CaseStudy = {
  slug: string;
  img: string;
  service: string;
  doctor: string;
  title: T;
  problem: T;
  solution: T;
  duration: T;
  price: T;
};

export const CASES: CaseStudy[] = [
  {
    slug: "albire-o-sedinta",
    img: "/img/case-1.jpg",
    service: "estetica",
    doctor: "irina-bejan",
    title: { ro: "Albire într-o singură ședință", ru: "Отбеливание за один приём" },
    problem: {
      ro: "Pacientă de 31 de ani, fumătoare, cu pigment de cafea acumulat în opt ani. Dinți sănătoși, fără carii.",
      ru: "Пациентка 31 года, курящая, с пигментом от кофе, накопленным за восемь лет. Зубы здоровые, без кариеса.",
    },
    solution: {
      ro: "Igienizare completă, apoi albire cu gel activat de lampă, cu gingia izolată. Cinci nuanțe diferență.",
      ru: "Полная гигиена, затем отбеливание гелем с активацией лампой, десна изолирована. Разница в пять тонов.",
    },
    duration: { ro: "două vizite, o săptămână", ru: "два визита, одна неделя" },
    price: { ro: "3 090 lei", ru: "3 090 леев" },
  },
  {
    slug: "doua-implanturi-molari",
    img: "/img/case-2.jpg",
    service: "implanturi",
    doctor: "andrei-cojocaru",
    title: { ro: "Doi molari înlocuiți cu implanturi", ru: "Два моляра заменены имплантами" },
    problem: {
      ro: "Bărbat de 44 de ani, doi molari inferiori extrași acum șase ani. Osul se retrăsese pe verticală cu 3 mm.",
      ru: "Мужчина 44 лет, два нижних моляра удалены шесть лет назад. Кость убыла по вертикали на 3 мм.",
    },
    solution: {
      ro: "Adaos de os în aceeași ședință cu inserția, ghid chirurgical tipărit, coroane de zirconiu la patru luni.",
      ru: "Костная подсадка в тот же приём, что и установка, напечатанный хирургический шаблон, циркониевые коронки через четыре месяца.",
    },
    duration: { ro: "4 luni și jumătate", ru: "четыре с половиной месяца" },
    price: { ro: "31 600 lei", ru: "31 600 леев" },
  },
  {
    slug: "gutiere-inghesuire",
    img: "/img/case-3.jpg",
    service: "ortodontie",
    doctor: "ana-cebotari",
    title: { ro: "Înghesuire frontală, rezolvată cu gutiere", ru: "Скученность во фронте, решённая каппами" },
    problem: {
      ro: "Pacientă de 26 de ani, incisivi inferiori suprapuși, un canin ieșit din arcadă. Refuza aparatul fix.",
      ru: "Пациентка 26 лет, нижние резцы наложены друг на друга, клык вне дуги. От брекетов отказалась.",
    },
    solution: {
      ro: "22 de gutiere, purtate 22 de ore pe zi. Două refinements la final pentru caninul care s-a mișcat mai încet.",
      ru: "22 каппы, ношение по 22 часа в сутки. Два рефайнмента в конце для клыка, который двигался медленнее.",
    },
    duration: { ro: "11 luni", ru: "11 месяцев" },
    price: { ro: "26 000 lei", ru: "26 000 леев" },
  },
  {
    slug: "fatete-frontale",
    img: "/img/case-4.jpg",
    service: "estetica",
    doctor: "andrei-cojocaru",
    title: { ro: "Șase fațete pe frontalii superiori", ru: "Шесть виниров на верхних передних" },
    problem: {
      ro: "Bărbat de 38 de ani, dinți uzați de bruxism, doi incisivi cu obturații vechi vizibile și margine ciobită.",
      ru: "Мужчина 38 лет, зубы стёрты бруксизмом, два резца со старыми заметными пломбами и сколотым краем.",
    },
    solution: {
      ro: "Design digital, mock-up probat în gură, șase fațete ceramice. Șlefuire de 0,4 mm. Gutieră de noapte inclusă.",
      ru: "Цифровой дизайн, мок-ап с примеркой во рту, шесть керамических виниров. Обточка 0,4 мм. Ночная каппа включена.",
    },
    duration: { ro: "3 săptămâni", ru: "3 недели" },
    price: { ro: "26 600 lei", ru: "26 600 леев" },
  },
  {
    slug: "canal-reluat",
    img: "/img/case-5.jpg",
    service: "carii",
    doctor: "victor-grosu",
    title: { ro: "Canal tratat greșit, reluat sub microscop", ru: "Плохо пролеченный канал, перелечен под микроскопом" },
    problem: {
      ro: "Femeie de 35 de ani, durere la mușcat de un an, pe un molar tratat în 2019. Radiografia arăta un canal neumplut.",
      ru: "Женщина 35 лет, боль при накусывании в течение года на моляре, пролеченном в 2019-м. Снимок показал незапломбированный канал.",
    },
    solution: {
      ro: "Reluarea tratamentului sub microscop, al patrulea canal găsit și obturat, coroană de zirconiu la două săptămâni.",
      ru: "Перелечивание под микроскопом, найден и запломбирован четвёртый канал, циркониевая коронка через две недели.",
    },
    duration: { ro: "3 vizite", ru: "3 визита" },
    price: { ro: "9 700 lei", ru: "9 700 леев" },
  },
  {
    slug: "copil-fara-frica",
    img: "/img/case-6.jpg",
    service: "copii",
    doctor: "elena-rusu",
    title: { ro: "Copil de 5 ani, după o experiență proastă", ru: "Ребёнок 5 лет, после плохого опыта" },
    problem: {
      ro: "Băiat de 5 ani, ținut cu forța la o clinică anterioară. Plângea de la ușa cabinetului, patru carii pe dinți de lapte.",
      ru: "Мальчик 5 лет, которого удерживали силой в предыдущей клинике. Плакал уже от двери кабинета, четыре кариеса на молочных зубах.",
    },
    solution: {
      ro: "Trei vizite de acomodare, fără tratament. La a patra a acceptat obturația și și-a ales culoarea albastră.",
      ru: "Три адаптационных визита без лечения. На четвёртом он согласился на пломбу и выбрал синий цвет.",
    },
    duration: { ro: "6 vizite, 2 luni", ru: "6 визитов, 2 месяца" },
    price: { ro: "1 800 lei", ru: "1 800 леев" },
  },
];

export const RESULTS_PAGE = {
  kicker: { ro: "Rezultate", ru: "Результаты" },
  title: { ro: "Cazuri reale,", ru: "Реальные случаи," },
  titleEm: { ro: "cu prețul lor", ru: "с их ценой" },
  lead: {
    ro: "Fiecare caz de aici are scris ce a fost, ce am făcut, cât a durat și cât a costat. Sumele sunt cele plătite efectiv, nu de la.",
    ru: "У каждого случая здесь написано, что было, что мы сделали, сколько это заняло и сколько стоило. Суммы — фактически уплаченные, а не «от».",
  },
  problem: { ro: "Situația", ru: "Ситуация" },
  solution: { ro: "Ce am făcut", ru: "Что мы сделали" },
  duration: { ro: "Durată", ru: "Срок" },
  price: { ro: "Cost total", ru: "Общая стоимость" },
  by: { ro: "Medic", ru: "Врач" },
  note: {
    ro: "Fotografiile sunt ilustrative, iar cazurile sunt compuse din situații pe care le vedem des. Sumele sunt cele din lista noastră de prețuri.",
    ru: "Фотографии иллюстративны, а случаи составлены из ситуаций, которые мы видим часто. Суммы — из нашего прайса.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* /contact                                                            */

export const CONTACT_PAGE = {
  kicker: { ro: "Contact", ru: "Контакты" },
  title: { ro: "Suntem pe", ru: "Мы на" },
  titleEm: { ro: "Alexandru cel Bun 87", ru: "Александру чел Бун 87" },
  lead: {
    ro: "La parterul blocului, cu intrare separată din stradă. Dacă e prima dată, sună când ajungi — ieșim după tine.",
    ru: "На первом этаже дома, с отдельным входом с улицы. Если вы впервые, позвоните, когда подъедете — мы выйдем встретить.",
  },
  howTitle: { ro: "Cum ajungi", ru: "Как добраться" },
  how: [
    {
      title: { ro: "Cu mașina", ru: "На машине" },
      text: {
        ro: "Parcare gratuită în curtea interioară, patru locuri rezervate pacienților. Intrarea în curte e de pe strada laterală.",
        ru: "Бесплатная парковка во внутреннем дворе, четыре места зарезервированы для пациентов. Въезд во двор — с боковой улицы.",
      },
    },
    {
      title: { ro: "Cu troleibuzul", ru: "На троллейбусе" },
      text: {
        ro: "Liniile 1, 4 și 22, stația Teatrul Național. De acolo, trei minute pe jos.",
        ru: "Маршруты 1, 4 и 22, остановка «Национальный театр». Оттуда три минуты пешком.",
      },
    },
    {
      title: { ro: "Cu căruciorul sau în scaun rulant", ru: "С коляской или в кресле-коляске" },
      text: {
        ro: "Intrarea are rampă, iar toate cabinetele sunt la parter. Nu există trepte în interior.",
        ru: "На входе есть пандус, все кабинеты на первом этаже. Внутри ступеней нет.",
      },
    },
  ],
  writeTitle: { ro: "Scrie-ne", ru: "Напишите нам" },
  writeText: {
    ro: "Pentru întrebări care nu sunt urgente. Răspundem în aceeași zi lucrătoare.",
    ru: "Для вопросов, которые не срочные. Отвечаем в тот же рабочий день.",
  },
  urgentTitle: { ro: "Urgențe, non-stop", ru: "Неотложно, круглосуточно" },
  urgentText: {
    ro: "Sună direct pe numărul de gardă. Răspunde medicul, la orice oră.",
    ru: "Звоните прямо на дежурный номер. Отвечает врач, в любое время.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* /preturi                                                            */

export const PRICES_PAGE = {
  kicker: { ro: "Prețuri", ru: "Цены" },
  title: { ro: "Lista completă,", ru: "Полный список," },
  titleEm: { ro: "fără asteriscuri", ru: "без звёздочек" },
  lead: {
    ro: "Astea sunt prețurile din cabinet. Nu sunt prețuri de la care se pornește negocierea și nu se schimbă în funcție de cine intră pe ușă.",
    ru: "Это цены в кабинете. Это не цены, от которых начинается торг, и они не меняются в зависимости от того, кто вошёл в дверь.",
  },
  search: { ro: "Caută în listă…", ru: "Поиск по списку…" },
  empty: { ro: "Nu am găsit nimic cu textul ăsta.", ru: "По этому запросу ничего не найдено." },
  payTitle: { ro: "Cum se plătește", ru: "Как оплатить" },
  pay: [
    { ro: "Card, numerar sau transfer.", ru: "Карта, наличные или перевод." },
    { ro: "Trei rate fără dobândă, direct la recepție, pentru orice sumă peste 3 000 lei.", ru: "Три платежа без процентов, прямо на ресепшене, для сумм свыше 3 000 леев." },
    { ro: "Grafic pe 6 luni pentru tratamente peste 20 000 lei.", ru: "График на 6 месяцев для лечения дороже 20 000 леев." },
    { ro: "Lucrăm cu Moldasig, Grawe și Donaris. Cu CNAM, doar urgențe și extracții.", ru: "Работаем с Moldasig, Grawe и Donaris. С CNAM — только неотложная помощь и удаления." },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* /programare — every string the wizard needs                         */

export const BOOK = {
  kicker: { ro: "Programare online", ru: "Онлайн-запись" },
  title: { ro: "Alege ora ta.", ru: "Выберите своё время." },
  titleEm: { ro: "Se confirmă pe loc.", ru: "Подтверждается сразу." },
  lead: {
    ro: "Vezi orele libere reale ale fiecărui medic. Ce alegi aici se blochează în agenda clinicii imediat, nu așteaptă un telefon.",
    ru: "Вы видите реальные свободные часы каждого врача. То, что вы выберете, сразу блокируется в графике клиники и не ждёт звонка.",
  },
  steps: [
    { ro: "Serviciul", ru: "Услуга" },
    { ro: "Medicul", ru: "Врач" },
    { ro: "Ziua", ru: "День" },
    { ro: "Ora", ru: "Время" },
    { ro: "Datele tale", ru: "Ваши данные" },
  ],
  stepOf: { ro: "Pasul", ru: "Шаг" },
  of: { ro: "din", ru: "из" },
  pickService: { ro: "Ce te aduce la noi?", ru: "С чем вы к нам?" },
  pickDoctor: { ro: "Cine te vede?", ru: "Кто вас примет?" },
  anyDoctor: { ro: "Oricare medic disponibil", ru: "Любой свободный врач" },
  anyDoctorNote: { ro: "Îți dăm prima oră liberă din clinică", ru: "Дадим первое свободное время в клинике" },
  pickDay: { ro: "În ce zi?", ru: "В какой день?" },
  pickTime: { ro: "La ce oră?", ru: "Во сколько?" },
  yourData: { ro: "Cum te sunăm?", ru: "Как с вами связаться?" },
  noSlots: {
    ro: "Nicio oră liberă în ziua asta. Încearcă altă zi sau alt medic.",
    ru: "В этот день свободных часов нет. Попробуйте другой день или другого врача.",
  },
  doctorOff: { ro: "nu lucrează în ziua asta", ru: "в этот день не работает" },
  loadingSlots: { ro: "Verific agenda…", ru: "Проверяю график…" },
  name: { ro: "Numele tău", ru: "Ваше имя" },
  phone: { ro: "Telefon", ru: "Телефон" },
  note: { ro: "Vrei să ne spui ceva dinainte? (opțional)", ru: "Хотите что-то сообщить заранее? (необязательно)" },
  notePlaceholder: {
    ro: "De exemplu: mi-e frică de dentist, sau iau anticoagulante.",
    ru: "Например: я боюсь стоматологов, или я принимаю антикоагулянты.",
  },
  summary: { ro: "Programarea ta", ru: "Ваша запись" },
  confirm: { ro: "Confirmă programarea", ru: "Подтвердить запись" },
  sending: { ro: "Se confirmă…", ru: "Подтверждаем…" },
  back: { ro: "Înapoi", ru: "Назад" },
  change: { ro: "schimbă", ru: "изменить" },
  today: { ro: "azi", ru: "сегодня" },
  tomorrow: { ro: "mâine", ru: "завтра" },
  free: { ro: "ore libere", ru: "свободных часов" },
  freeOne: { ro: "oră liberă", ru: "свободный час" },
  closedDay: { ro: "închis", ru: "закрыто" },
  okTitle: { ro: "Gata. Te așteptăm.", ru: "Готово. Ждём вас." },
  okText: {
    ro: "Ora e blocată pe numele tău. Primești un SMS de confirmare acum și un memento cu o zi înainte.",
    ru: "Время закреплено за вами. Сейчас придёт SMS с подтверждением, а за день до визита — напоминание.",
  },
  okCode: { ro: "Codul programării", ru: "Код записи" },
  okAgain: { ro: "Fă altă programare", ru: "Записаться ещё раз" },
  okHome: { ro: "Înapoi la pagina principală", ru: "На главную" },
  errName: { ro: "Scrie-ne cum te cheamă.", ru: "Напишите, как вас зовут." },
  errPhone: { ro: "Scrie un număr de telefon valid.", ru: "Укажите корректный номер телефона." },
  errTaken: {
    ro: "Ora asta tocmai a fost luată de altcineva. Alege alta, te rog.",
    ru: "Это время только что заняли. Пожалуйста, выберите другое.",
  },
  errGeneric: {
    ro: "Ceva n-a mers. Încearcă din nou sau sună-ne direct.",
    ru: "Что-то пошло не так. Попробуйте снова или позвоните нам.",
  },
  privacy: {
    ro: "Datele rămân la clinică și se folosesc doar pentru programarea ta.",
    ru: "Данные остаются в клинике и используются только для вашей записи.",
  },
  demoNote: {
    ro: "Clinica e fictivă, dar programarea funcționează cu adevărat — ora aleasă se salvează și dispare din lista celorlalți.",
    ru: "Клиника вымышленная, но запись работает по-настоящему — выбранное время сохраняется и исчезает из списка у остальных.",
  },
} as const;

export const MONTHS: Record<"ro" | "ru", string[]> = {
  ro: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
  ru: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
};

/** Sunday first, to match Date.getDay(). */
export const WEEKDAYS: Record<"ro" | "ru", string[]> = {
  ro: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
  ru: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
};

export const WEEKDAYS_SHORT: Record<"ro" | "ru", string[]> = {
  ro: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
};

export function formatDate(iso: string, lang: "ro" | "ru"): string {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = WEEKDAYS[lang][new Date(y, m - 1, d).getDay()];
  return `${wd}, ${d} ${MONTHS[lang][m - 1]}`;
}

export function formatDateShort(iso: string, lang: "ro" | "ru"): string {
  const [y, m, d] = iso.split("-").map(Number);
  void y;
  return `${d} ${MONTHS[lang][m - 1]}`;
}

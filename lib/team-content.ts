/**
 * The long form of each person on /echipa/[slug].
 * TEAM in content.ts keeps only what a card needs; this file holds the parts
 * that make a doctor page worth reading.
 */

import type { T } from "./content";

export type DoctorPage = {
  /** the line under the name on the doctor page */
  title: T;
  /** something the doctor would actually say, set large */
  quote: T;
  bio: T[];
  education: { year: string; text: T }[];
  focus: T[];
  numbers: { value: string; label: T }[];
  languages: T;
  /** which days this doctor is in the clinic — also used by the booking wizard */
  days: number[];
  daysLabel: T;
};

export const DOCTOR_PAGES: Record<string, DoctorPage> = {
  "andrei-cojocaru": {
    title: { ro: "Medic-șef · Implantologie și protetică", ru: "Главный врач · Имплантология и протезирование" },
    quote: {
      ro: "Un implant pus prost nu se vede în ziua operației. Se vede peste patru ani, când nu mai ai ce face cu el.",
      ru: "Плохо поставленный имплант не виден в день операции. Он виден через четыре года, когда с ним уже ничего не сделаешь.",
    },
    bio: [
      {
        ro: "A terminat medicina dentară la Chișinău în 2011 și primii doi ani i-a lucrat într-o clinică de urgențe, unde a văzut în principal ce se întâmplă cu lucrările făcute repede. Spune că de acolo i-a rămas obiceiul de a refuza cazurile pe care nu le poate face bine.",
        ru: "Окончил стоматологию в Кишинёве в 2011 году и первые два года работал в клинике неотложной помощи, где в основном видел, что происходит с работами, сделанными наспех. Говорит, что оттуда у него привычка отказываться от случаев, которые он не может сделать хорошо.",
      },
      {
        ro: "A deschis ALVEA în 2012, împreună cu doi colegi din facultate. Face implantologie ghidată din 2016 și, de atunci, aproape toate implanturile din clinică trec întâi prin planificare digitală.",
        ru: "Открыл ALVEA в 2012 году вместе с двумя однокурсниками. Занимается направленной имплантологией с 2016 года, и с тех пор почти все импланты в клинике сначала проходят цифровое планирование.",
      },
      {
        ro: "Ține garda de noapte o săptămână din patru, ca toți ceilalți medici. E singura regulă din clinică pe care nu a schimbat-o niciodată.",
        ru: "Дежурит по ночам одну неделю из четырёх, как и все остальные врачи. Это единственное правило клиники, которое он ни разу не менял.",
      },
    ],
    education: [
      { year: "2011", text: { ro: "USMF Nicolae Testemițanu, medicină dentară", ru: "ГУМФ им. Николае Тестемицану, стоматология" } },
      { year: "2014", text: { ro: "Rezidențiat în protetică dentară, Iași", ru: "Резидентура по ортопедической стоматологии, Яссы" } },
      { year: "2016", text: { ro: "Curs de implantologie ghidată, Varșovia", ru: "Курс направленной имплантологии, Варшава" } },
      { year: "2019", text: { ro: "Certificare în augmentare osoasă și sinus lift", ru: "Сертификация по костной аугментации и синус-лифтингу" } },
      { year: "2023", text: { ro: "Formator regional pentru un sistem elvețian de implanturi", ru: "Региональный тренер швейцарской имплант-системы" } },
    ],
    focus: [
      { ro: "Implanturi ghidate digital", ru: "Цифровая направленная имплантация" },
      { ro: "Reabilitări complete pe implanturi", ru: "Полная реабилитация на имплантах" },
      { ro: "Coroane și punți de zirconiu", ru: "Циркониевые коронки и мосты" },
      { ro: "Cazuri complicate, trimise de alte clinici", ru: "Сложные случаи по направлению из других клиник" },
    ],
    numbers: [
      { value: "14", label: { ro: "ani de practică", ru: "лет практики" } },
      { value: "1 900", label: { ro: "implanturi inserate", ru: "установленных имплантов" } },
      { value: "97%", label: { ro: "rată de integrare la 5 ani", ru: "приживление на 5 лет" } },
    ],
    languages: { ro: "română, rusă, engleză", ru: "румынский, русский, английский" },
    days: [1, 2, 4, 5],
    daysLabel: { ro: "Luni, marți, joi, vineri", ru: "Пн, вт, чт, пт" },
  },

  "ana-cebotari": {
    title: { ro: "Ortodonție · Gutiere transparente", ru: "Ортодонтия · Прозрачные каппы" },
    quote: {
      ro: "Ortodonția nu e despre dinți drepți în poză. E despre o mușcătură care mai funcționează și la cincizeci de ani.",
      ru: "Ортодонтия — не про ровные зубы на фото. Она про прикус, который работает и в пятьдесят.",
    },
    bio: [
      {
        ro: "S-a specializat în ortodonție pentru că a purtat ea însăși aparat fix trei ani, la nouăsprezece ani, și își amintește perfect cât de puțin i-a explicat cineva ce se întâmplă. Acum arată fiecărui pacient simularea completă înainte să înceapă.",
        ru: "Пошла в ортодонтию, потому что сама носила брекеты три года, в девятнадцать, и прекрасно помнит, как мало ей объясняли, что происходит. Теперь она показывает каждому пациенту полную симуляцию до начала лечения.",
      },
      {
        ro: "Lucrează în principal cu gutiere, dar pune aparat fix fără ezitare când cazul o cere. Spune că cea mai grea parte a meseriei e să convingi un adult că un tratament de zece luni chiar durează zece luni.",
        ru: "Работает в основном с каппами, но без колебаний ставит брекеты, когда случай того требует. Говорит, что самая трудная часть работы — убедить взрослого, что лечение на десять месяцев действительно длится десять месяцев.",
      },
      {
        ro: "Conduce și verificările ortodontice la copii de la 7 ani, unde de cele mai multe ori concluzia e că nu e nevoie de nimic încă.",
        ru: "Ведёт также ортодонтические проверки у детей с 7 лет, где чаще всего вывод — что пока ничего не нужно.",
      },
    ],
    education: [
      { year: "2016", text: { ro: "USMF Nicolae Testemițanu, medicină dentară", ru: "ГУМФ им. Николае Тестемицану, стоматология" } },
      { year: "2018", text: { ro: "Rezidențiat în ortodonție, București", ru: "Резидентура по ортодонтии, Бухарест" } },
      { year: "2020", text: { ro: "Certificare Invisalign", ru: "Сертификация Invisalign" } },
      { year: "2024", text: { ro: "Curs de ortodonție interceptivă la copii, Cracovia", ru: "Курс интерцептивной ортодонтии у детей, Краков" } },
    ],
    focus: [
      { ro: "Gutiere transparente, adulți", ru: "Прозрачные каппы, взрослые" },
      { ro: "Aparate fixe estetice", ru: "Эстетические брекет-системы" },
      { ro: "Ortodonție interceptivă la copii", ru: "Интерцептивная ортодонтия у детей" },
      { ro: "Pregătire ortodontică înainte de implant", ru: "Ортодонтическая подготовка перед имплантацией" },
    ],
    numbers: [
      { value: "9", label: { ro: "ani de practică", ru: "лет практики" } },
      { value: "640", label: { ro: "cazuri finalizate", ru: "завершённых случаев" } },
      { value: "11", label: { ro: "luni, durata medie", ru: "месяцев, средний срок" } },
    ],
    languages: { ro: "română, rusă, engleză", ru: "румынский, русский, английский" },
    days: [1, 3, 5],
    daysLabel: { ro: "Luni, miercuri, vineri", ru: "Пн, ср, пт" },
  },

  "victor-grosu": {
    title: { ro: "Chirurgie orală și maxilo-facială", ru: "Оральная и челюстно-лицевая хирургия" },
    quote: {
      ro: "Extracția bună e cea de care îți amintești doar pentru că ai avut o zi liberă după.",
      ru: "Хорошее удаление — то, которое запомнилось только тем, что после него был выходной.",
    },
    bio: [
      {
        ro: "Face chirurgie de unsprezece ani, dintre care patru într-un spital din Iași, unde a lucrat cazuri pe care o clinică privată nu le vede aproape niciodată. Spune că experiența aceea îl face să rămână calm la molarii de minte pe care alți colegi îi trimit mai departe.",
        ru: "Оперирует одиннадцать лет, из них четыре — в больнице в Яссах, где вёл случаи, которые частная клиника почти никогда не видит. Говорит, что именно этот опыт позволяет ему спокойно относиться к зубам мудрости, которые другие коллеги отправляют дальше.",
      },
      {
        ro: "Se ocupă de extracțiile complicate, de dinții incluși și de partea chirurgicală a implantologiei — augmentări, sinus lift, regenerare. E și medicul care ia cele mai multe gărzi de noapte, pentru că, spune el, oricum doarme prost.",
        ru: "Занимается сложными удалениями, ретинированными зубами и хирургической частью имплантологии — аугментациями, синус-лифтингом, регенерацией. Он же берёт больше всего ночных дежурств, потому что, по его словам, всё равно плохо спит.",
      },
    ],
    education: [
      { year: "2014", text: { ro: "USMF Nicolae Testemițanu, medicină dentară", ru: "ГУМФ им. Николае Тестемицану, стоматология" } },
      { year: "2017", text: { ro: "Rezidențiat în chirurgie oro-maxilo-facială, Iași", ru: "Резидентура по челюстно-лицевой хирургии, Яссы" } },
      { year: "2019", text: { ro: "Spitalul Sf. Spiridon, Iași — 4 ani de gardă", ru: "Больница Св. Спиридона, Яссы — 4 года дежурств" } },
      { year: "2022", text: { ro: "Curs de regenerare osoasă ghidată, Berlin", ru: "Курс направленной костной регенерации, Берлин" } },
    ],
    focus: [
      { ro: "Molari de minte incluși", ru: "Ретинированные зубы мудрости" },
      { ro: "Extracții complicate", ru: "Сложные удаления" },
      { ro: "Augmentare osoasă și sinus lift", ru: "Костная аугментация и синус-лифтинг" },
      { ro: "Urgențe și abcese", ru: "Неотложные случаи и абсцессы" },
    ],
    numbers: [
      { value: "11", label: { ro: "ani de practică", ru: "лет практики" } },
      { value: "3 400", label: { ro: "intervenții", ru: "вмешательств" } },
      { value: "24/7", label: { ro: "gardă, o săptămână din patru", ru: "дежурство, неделя из четырёх" } },
    ],
    languages: { ro: "română, rusă", ru: "румынский, русский" },
    days: [2, 3, 4, 6],
    daysLabel: { ro: "Marți, miercuri, joi, sâmbătă", ru: "Вт, ср, чт, сб" },
  },

  "elena-rusu": {
    title: { ro: "Stomatologie pediatrică", ru: "Детская стоматология" },
    quote: {
      ro: "Dacă un copil trebuie ținut, ședința s-a terminat. Reprogramăm și încercăm altfel data viitoare.",
      ru: "Если ребёнка приходится держать — приём окончен. Перезаписываем и в следующий раз пробуем иначе.",
    },
    bio: [
      {
        ro: "Lucrează doar cu copii de șapte ani. A făcut și formare în psihologia copilului, nu ca linie în CV, ci pentru că jumătate din meseria asta se întâmplă înainte ca scaunul să se ridice.",
        ru: "Работает только с детьми — семь лет. Прошла и подготовку по детской психологии, не ради строчки в резюме, а потому что половина этой работы происходит до того, как кресло поднимется.",
      },
      {
        ro: "Are o regulă pe care o repetă părinților la fiecare primă vizită: prima ședință nu are tratament în ea. Copilul vine, se uită, pleacă. Spune că ședința asta pierdută economisește ani de frică.",
        ru: "У неё есть правило, которое она повторяет родителям на каждом первом визите: на первом приёме лечения нет. Ребёнок приходит, смотрит, уходит. Говорит, что этот «потерянный» приём экономит годы страха.",
      },
      {
        ro: "Face și igienizări la adulți, în zilele în care nu are copii programați.",
        ru: "Делает также гигиену взрослым — в дни, когда нет записанных детей.",
      },
    ],
    education: [
      { year: "2018", text: { ro: "USMF Nicolae Testemițanu, medicină dentară", ru: "ГУМФ им. Николае Тестемицану, стоматология" } },
      { year: "2020", text: { ro: "Specializare în stomatologie pediatrică, Cluj", ru: "Специализация по детской стоматологии, Клуж" } },
      { year: "2021", text: { ro: "Certificare în sedare conștientă cu protoxid de azot", ru: "Сертификация по седации закисью азота" } },
      { year: "2023", text: { ro: "Formare în psihologia comportamentului la copil", ru: "Подготовка по детской поведенческой психологии" } },
    ],
    focus: [
      { ro: "Prima vizită și acomodarea", ru: "Первый визит и адаптация" },
      { ro: "Sigilări și fluorizări", ru: "Герметизация и фторирование" },
      { ro: "Tratamente pe dinți de lapte", ru: "Лечение молочных зубов" },
      { ro: "Copii cu experiențe negative anterioare", ru: "Дети с негативным прошлым опытом" },
    ],
    numbers: [
      { value: "7", label: { ro: "ani de practică", ru: "лет практики" } },
      { value: "2 100", label: { ro: "copii tratați", ru: "детей принято" } },
      { value: "0", label: { ro: "copii ținuți cu forța", ru: "детей удерживали силой" } },
    ],
    languages: { ro: "română, rusă", ru: "румынский, русский" },
    days: [1, 2, 3, 5],
    daysLabel: { ro: "Luni, marți, miercuri, vineri", ru: "Пн, вт, ср, пт" },
  },

  "irina-bejan": {
    title: { ro: "Igienist principal · Parodontologie", ru: "Старший гигиенист · Пародонтология" },
    quote: {
      ro: "Cel mai bun tratament din clinica asta costă 690 de lei și se face de două ori pe an.",
      ru: "Лучшее лечение в этой клинике стоит 690 леев и делается два раза в год.",
    },
    bio: [
      {
        ro: "A făcut peste șase mii de igienizări în opt ani și susține că își amintește gingiile mai bine decât fețele. Se ocupă și de partea de parodontologie — pacienții cu pungi adânci și cu dinți care se mișcă, adică exact zona unde lumea ajunge prea târziu.",
        ru: "Сделала более шести тысяч чисток за восемь лет и утверждает, что помнит дёсны лучше, чем лица. Занимается и пародонтологией — пациентами с глубокими карманами и подвижными зубами, то есть именно той зоной, куда люди приходят слишком поздно.",
      },
      {
        ro: "Petrece în fiecare ședință cinci minute pe tehnica de periaj a pacientului. Spune că e partea care schimbă cel mai mult și pe care aproape nimeni nu o face.",
        ru: "В каждом приёме тратит пять минут на технику чистки пациента. Говорит, что именно это меняет больше всего — и почти никто этого не делает.",
      },
    ],
    education: [
      { year: "2017", text: { ro: "Colegiul de Medicină, igienă dentară", ru: "Медицинский колледж, стоматологическая гигиена" } },
      { year: "2019", text: { ro: "Certificare Air Flow și EMS Guided Biofilm Therapy", ru: "Сертификация Air Flow и EMS Guided Biofilm Therapy" } },
      { year: "2022", text: { ro: "Curs de parodontologie nechirurgicală, Cluj", ru: "Курс нехирургической пародонтологии, Клуж" } },
    ],
    focus: [
      { ro: "Igienizare în trei etape", ru: "Гигиена в три этапа" },
      { ro: "Tratament parodontal nechirurgical", ru: "Нехирургическое пародонтологическое лечение" },
      { ro: "Igienizare la purtătorii de aparat", ru: "Гигиена при брекетах" },
      { ro: "Instruire în tehnica de periaj", ru: "Обучение технике чистки" },
    ],
    numbers: [
      { value: "8", label: { ro: "ani de practică", ru: "лет практики" } },
      { value: "6 000+", label: { ro: "igienizări", ru: "чисток" } },
      { value: "50", label: { ro: "minute pe ședință", ru: "минут на приём" } },
    ],
    languages: { ro: "română, rusă", ru: "румынский, русский" },
    days: [1, 2, 3, 4, 5, 6],
    daysLabel: { ro: "Luni – sâmbătă", ru: "Пн – сб" },
  },
};

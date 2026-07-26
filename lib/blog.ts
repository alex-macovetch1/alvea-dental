/**
 * Five articles, written the way the clinic talks: concrete numbers, no
 * scare tactics, and an honest answer even when the honest answer costs us
 * a treatment. Body is a small block list so the article page can style
 * headings, lists and pull quotes without a markdown parser.
 */

import type { T } from "./content";

export type Block =
  | { kind: "p"; text: T }
  | { kind: "h"; text: T }
  | { kind: "ul"; items: T[] }
  | { kind: "quote"; text: T };

export type Post = {
  slug: string;
  cover: string;
  /** ISO date — rendered through the language's own month names */
  date: string;
  minutes: number;
  /** slug from TEAM */
  author: string;
  tag: T;
  title: T;
  excerpt: T;
  body: Block[];
  /** service slug this article naturally leads to */
  service: string;
};

export const POSTS: Post[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "cat-costa-un-implant",
    cover: "/img/scan.jpg",
    date: "2026-06-18",
    minutes: 7,
    author: "andrei-cojocaru",
    tag: { ro: "Bani", ru: "Деньги" },
    title: {
      ro: "Cât costă de fapt un implant în Chișinău",
      ru: "Сколько на самом деле стоит имплант в Кишинёве",
    },
    excerpt: {
      ro: "Prețul de pe site e aproape niciodată prețul final. Iată ce se adaugă, de ce, și ce întrebări să pui înainte să semnezi.",
      ru: "Цена на сайте почти никогда не является итоговой. Вот что добавляется, почему, и какие вопросы задать до подписания.",
    },
    service: "implanturi",
    body: [
      {
        kind: "p",
        text: {
          ro: "Dacă suni în cinci clinici din Chișinău și întrebi cât costă un implant, primești cinci cifre între 6 000 și 14 000 de lei. Toate sunt adevărate și niciuna nu răspunde la întrebarea ta, pentru că fiecare include altceva.",
          ru: "Если позвонить в пять клиник Кишинёва и спросить, сколько стоит имплант, вы получите пять цифр между 6 000 и 14 000 леев. Все они правдивы и ни одна не отвечает на ваш вопрос, потому что каждая включает разное.",
        },
      },
      { kind: "h", text: { ro: "Un implant nu e un dinte", ru: "Имплант — это не зуб" } },
      {
        kind: "p",
        text: {
          ro: "Cifra pe care o auzi la telefon se referă de obicei doar la șurubul de titan. Peste el mai vin două piese: bontul, care iese din gingie, și coroana, adică partea pe care o vezi și cu care mesteci. Fără ele, implantul e o rădăcină îngropată în os, care nu îți folosește la nimic.",
          ru: "Цифра, которую вы слышите по телефону, обычно относится только к титановому винту. Поверх него идут ещё две детали: абатмент, который выходит из десны, и коронка — та часть, которую видно и которой вы жуёте. Без них имплант — это корень, закопанный в кость, и пользы от него нет.",
        },
      },
      {
        kind: "p",
        text: {
          ro: "Deci prima întrebare pe care o pui e simplă: suma asta include coroana? La noi, implantul singur e 9 500 de lei, coroana de zirconiu 4 900, iar pachetul complet 14 400. Scriem toate trei cifrele, ca să nu existe surpriza de la a doua vizită.",
          ru: "Поэтому первый вопрос простой: эта сумма включает коронку? У нас имплант отдельно — 9 500 леев, циркониевая коронка — 4 900, полный пакет — 14 400. Мы пишем все три цифры, чтобы не было сюрприза на втором визите.",
        },
      },
      { kind: "h", text: { ro: "Ce se mai adaugă și când", ru: "Что ещё добавляется и когда" } },
      {
        kind: "ul",
        items: [
          {
            ro: "Adaos de os — 2 800 lei și în sus. E nevoie când dintele lipsește de mai mulți ani și osul s-a retras. Se știe din tomografie, înainte de operație, nu în timpul ei.",
            ru: "Костная подсадка — от 2 800 леев. Нужна, когда зуба нет уже несколько лет и кость убыла. Это известно по томографии до операции, а не во время неё.",
          },
          {
            ro: "Ridicare de sinus — de la 6 200 lei, doar la molarii de sus, când distanța până la sinus e prea mică.",
            ru: "Синус-лифтинг — от 6 200 леев, только для верхних моляров, когда расстояние до пазухи слишком мало.",
          },
          {
            ro: "Extracția dintelui vechi, dacă mai e acolo — 600–800 lei.",
            ru: "Удаление старого зуба, если он ещё на месте, — 600–800 леев.",
          },
          {
            ro: "Dintele provizoriu pentru zona vizibilă — de obicei inclus, dar întreabă.",
            ru: "Временный зуб для видимой зоны — обычно включён, но спросите.",
          },
        ],
      },
      {
        kind: "quote",
        text: {
          ro: "Diferența dintre 6 000 și 14 000 nu e lăcomia clinicii. E ce anume ai numărat.",
          ru: "Разница между 6 000 и 14 000 — это не жадность клиники. Это то, что именно вы посчитали.",
        },
      },
      { kind: "h", text: { ro: "De ce contează marca", ru: "Почему марка важна" } },
      {
        kind: "p",
        text: {
          ro: "Un implant ieftin funcționează. Problema apare peste opt ani, când se rupe un șurub sau se uzează bontul și ai nevoie de o piesă de schimb. Sistemele mari o au pe stoc și peste douăzeci de ani. Sistemele apărute acum trei ani, care se vând pe preț, dispar de pe piață — iar atunci singura soluție e să scoți implantul și să pui altul.",
          ru: "Дешёвый имплант работает. Проблема появляется через восемь лет, когда ломается винт или изнашивается абатмент и нужна запчасть. У крупных систем она есть на складе и через двадцать лет. Системы, появившиеся три года назад и продающиеся по цене, исчезают с рынка — и тогда единственное решение — вынуть имплант и поставить другой.",
        },
      },
      {
        kind: "p",
        text: {
          ro: "Nu spunem că trebuie să iei cel mai scump sistem. Spunem doar să întrebi ce marcă e și de câți ani e pe piață. Un răspuns evaziv la întrebarea asta e informația de care aveai nevoie.",
          ru: "Мы не говорим, что нужно брать самую дорогую систему. Мы говорим только: спросите, какая это марка и сколько лет она на рынке. Уклончивый ответ на этот вопрос — и есть та информация, которая вам была нужна.",
        },
      },
      { kind: "h", text: { ro: "Trei întrebări înainte să semnezi", ru: "Три вопроса до подписания" } },
      {
        kind: "ul",
        items: [
          { ro: "Suma include coroana și toate controalele până la final?", ru: "Сумма включает коронку и все контроли до конца?" },
          { ro: "Ce se întâmplă cu prețul dacă la operație se descoperă că e nevoie de os?", ru: "Что будет с ценой, если во время операции выяснится, что нужна кость?" },
          { ro: "Garanția e scrisă în contract sau spusă la telefon?", ru: "Гарантия прописана в договоре или сказана по телефону?" },
        ],
      },
      {
        kind: "p",
        text: {
          ro: "Dacă la toate trei primești răspuns clar și pe hârtie, prețul e corect, oricare ar fi el. Dacă nu, cifra mică de la început devine mare la sfârșit.",
          ru: "Если на все три вы получаете чёткий ответ и на бумаге — цена справедливая, какой бы она ни была. Если нет, маленькая цифра в начале станет большой в конце.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "gingii-care-sangereaza",
    cover: "/img/detail-brush.jpg",
    date: "2026-05-30",
    minutes: 5,
    author: "irina-bejan",
    tag: { ro: "Prevenție", ru: "Профилактика" },
    title: {
      ro: "Gingiile care sângerează nu sunt normale. Și nu e de la periaj",
      ru: "Кровоточащие дёсны — это не норма. И дело не в щётке",
    },
    excerpt: {
      ro: "Jumătate din oamenii care intră aici cred că sângerarea e de la periatul prea puternic. E fix invers.",
      ru: "Половина людей, которые к нам приходят, думают, что кровоточивость — от слишком сильной чистки. Всё ровно наоборот.",
    },
    service: "igienizare",
    body: [
      {
        kind: "p",
        text: {
          ro: "Când te tai la deget, sângerezi și știi de ce. Când scuipi roz în chiuvetă în fiecare dimineață timp de doi ani, creierul acceptă asta ca fond. Nu e fond. E inflamație, și are o cauză mecanică foarte concretă.",
          ru: "Когда вы порежете палец, вы кровоточите и знаете почему. Когда вы два года подряд каждое утро сплёвываете розовое в раковину, мозг принимает это как фон. Это не фон. Это воспаление, и у него очень конкретная механическая причина.",
        },
      },
      { kind: "h", text: { ro: "De unde vine", ru: "Откуда это берётся" } },
      {
        kind: "p",
        text: {
          ro: "Placa bacteriană se depune pe dinte în câteva ore. Dacă rămâne acolo peste 48 de ore, se mineralizează și devine tartru — o crustă dură pe care periuța nu o mai poate scoate. Tartrul stă la marginea gingiei și o irită permanent. Gingia iritată se umflă, se desprinde puțin de dinte și sângerează la cea mai mică atingere.",
          ru: "Бактериальный налёт оседает на зубе за несколько часов. Если он остаётся дольше 48 часов, он минерализуется и становится камнем — твёрдой коркой, которую щётка уже не снимет. Камень стоит на границе десны и постоянно её раздражает. Раздражённая десна отекает, слегка отходит от зуба и кровоточит от малейшего касания.",
        },
      },
      {
        kind: "quote",
        text: {
          ro: "Dacă te periai mai tare, sângerarea ar scădea, nu ar crește. Sângerează pentru că e bolnavă, nu pentru că o deranjezi.",
          ru: "Если бы вы чистили сильнее, кровоточивость уменьшилась бы, а не выросла. Она кровоточит, потому что больна, а не потому, что вы её тревожите.",
        },
      },
      { kind: "h", text: { ro: "Ce urmează dacă o lași", ru: "Что будет, если оставить" } },
      {
        kind: "p",
        text: {
          ro: "Prima etapă e gingivita: doar gingia e inflamată, se rezolvă complet cu o igienizare și zece zile de periaj corect. A doua etapă e parodontita: inflamația coboară la osul care ține dintele, iar osul se retrage. Osul pierdut nu se întoarce singur. Dinții încep să pară mai lungi, apoi se mișcă, apoi cad — dinți perfect sănătoși, fără nicio carie.",
          ru: "Первая стадия — гингивит: воспалена только десна, всё полностью проходит после гигиены и десяти дней правильной чистки. Вторая стадия — пародонтит: воспаление спускается к кости, которая держит зуб, и кость убывает. Потерянная кость сама не возвращается. Зубы начинают казаться длиннее, потом расшатываются, потом выпадают — совершенно здоровые зубы, без единого кариеса.",
        },
      },
      {
        kind: "p",
        text: {
          ro: "În Moldova, parodontita e cauza numărul unu a pierderii dinților după 40 de ani. Nu cariile.",
          ru: "В Молдове пародонтит — причина номер один потери зубов после 40 лет. Не кариес.",
        },
      },
      { kind: "h", text: { ro: "Ce se face concret", ru: "Что делать конкретно" } },
      {
        kind: "ul",
        items: [
          { ro: "O igienizare profesională completă, cu ultrasunet sub gingie — nu doar pe fața dintelui.", ru: "Полная профессиональная гигиена с ультразвуком под десну, а не только по передней поверхности." },
          { ro: "Zece zile de periaj corect după. Sângerarea scade progresiv și se oprește.", ru: "Десять дней правильной чистки после. Кровоточивость постепенно уменьшается и прекращается." },
          { ro: "Ață dentară sau periuțe interdentare, zilnic. Aici se formează 60% din placă.", ru: "Нить или межзубные ёршики, каждый день. Именно там образуется 60% налёта." },
          { ro: "Control la 6 luni. La fumători, la 4.", ru: "Контроль раз в 6 месяцев. Курильщикам — раз в 4." },
        ],
      },
      {
        kind: "p",
        text: {
          ro: "Dacă după o igienizare corectă și două săptămâni de periaj bun gingia tot sângerează, atunci e altceva și merită investigat. Dar în nouă cazuri din zece, nu e altceva.",
          ru: "Если после правильной гигиены и двух недель хорошей чистки десна всё ещё кровоточит — это уже другое и стоит разобраться. Но в девяти случаях из десяти это не другое.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "prima-vizita-a-copilului",
    cover: "/img/assistant.jpg",
    date: "2026-05-12",
    minutes: 6,
    author: "elena-rusu",
    tag: { ro: "Copii", ru: "Дети" },
    title: {
      ro: "Cum pregătești copilul pentru prima vizită la dentist",
      ru: "Как подготовить ребёнка к первому визиту к стоматологу",
    },
    excerpt: {
      ro: "Cele mai multe frici de dentist se nasc acasă, în drum spre clinică. Trei propoziții pe care să nu le spui și una care ajută.",
      ru: "Большинство страхов перед стоматологом рождается дома, по дороге в клинику. Три фразы, которые не стоит говорить, и одна, которая помогает.",
    },
    service: "copii",
    body: [
      {
        kind: "p",
        text: {
          ro: "Un copil de patru ani nu are nicio idee preconcepută despre dentist. Nu știe că ar trebui să-i fie frică. Tot ce știe vine de la felul în care i-ai spus tu că mergeți acolo.",
          ru: "У четырёхлетнего ребёнка нет никакого предубеждения о стоматологе. Он не знает, что должен бояться. Всё, что он знает, идёт от того, как вы ему сказали, что вы туда идёте.",
        },
      },
      { kind: "h", text: { ro: "Trei propoziții care fac rău", ru: "Три фразы, которые вредят" } },
      {
        kind: "ul",
        items: [
          {
            ro: "Nu doare. Copilul aude cuvântul doare și înțelege că există un motiv pentru care s-a adus vorba de durere.",
            ru: "«Не больно». Ребёнок слышит слово «больно» и понимает: есть причина, по которой о боли вообще зашла речь.",
          },
          {
            ro: "Dacă ești cuminte, îți iau ceva. Recompensa înainte de eveniment îi spune că urmează ceva greu de suportat.",
            ru: "«Если будешь молодцом, куплю тебе что-нибудь». Награда до события сообщает, что впереди нечто трудное.",
          },
          {
            ro: "Nu-ți face nimic. Aceeași problemă: neagă o amenințare la care copilul nu se gândise.",
            ru: "«Тебе ничего не сделают». Та же проблема: отрицается угроза, о которой ребёнок и не думал.",
          },
        ],
      },
      { kind: "h", text: { ro: "Ce funcționează", ru: "Что работает" } },
      {
        kind: "p",
        text: {
          ro: "Mergem să numărăm dinții. Atât. E adevărat, e concret, e o activitate, nu o procedură. Iar la prima vizită chiar asta facem: numărăm dinții cu oglinda, copilul ține el oglinda, ridicăm și coborâm scaunul de trei ori pentru că e amuzant, și pleacă.",
          ru: "«Идём считать зубы». И всё. Это правда, это конкретно, это занятие, а не процедура. И на первом визите мы действительно именно это делаем: считаем зубы зеркальцем, ребёнок держит зеркальце сам, три раза поднимаем и опускаем кресло, потому что это весело, — и он уходит.",
        },
      },
      {
        kind: "quote",
        text: {
          ro: "Ședința în care nu tratăm nimic e cea care decide dacă următorii cincisprezece ani sunt ușori sau grei.",
          ru: "Приём, на котором мы ничего не лечим, и решает, будут ли следующие пятнадцать лет лёгкими или тяжёлыми.",
        },
      },
      { kind: "h", text: { ro: "Ce faci tu în cabinet", ru: "Что делаете вы в кабинете" } },
      {
        kind: "p",
        text: {
          ro: "Stai lângă scaun, la vedere, și nu vorbi în timpul tratamentului. Sună dur, dar are un motiv: copilul nu poate urmări două voci care îi spun ce să facă. Dacă medicul zice deschide gura și tu zici în același timp hai, dragă, că trecem repede, copilul se blochează.",
          ru: "Сядьте рядом с креслом, на виду, и не говорите во время лечения. Звучит строго, но причина есть: ребёнок не может следить за двумя голосами, которые говорят ему, что делать. Если врач говорит «открой рот», а вы одновременно — «давай, солнышко, быстренько», ребёнок замирает.",
        },
      },
      {
        kind: "p",
        text: {
          ro: "Și încă ceva: dacă ție îți e frică de dentist, spune-ne asta la ușă. Copiii citesc tensiunea din umerii părintelui înainte să vadă instrumentele.",
          ru: "И ещё: если вы сами боитесь стоматолога, скажите нам об этом на входе. Дети считывают напряжение в плечах родителя раньше, чем видят инструменты.",
        },
      },
      { kind: "h", text: { ro: "Când e prea devreme", ru: "Когда слишком рано" } },
      {
        kind: "p",
        text: {
          ro: "Niciodată. Prima verificare se face la un an de la apariția primului dinte, chiar dacă durează două minute și copilul stă în brațele tale. Nu tratăm nimic atunci — ne uităm, îți arătăm cum se periază și fixăm obiceiul de a veni. Costă zero și scutește mult.",
          ru: "Никогда. Первая проверка делается через год после появления первого зуба, даже если она длится две минуты и ребёнок сидит у вас на руках. Мы тогда ничего не лечим — смотрим, показываем, как чистить, и закрепляем привычку приходить. Стоит ноль и экономит многое.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "albire-ce-functioneaza",
    cover: "/img/smile-2.jpg",
    date: "2026-04-22",
    minutes: 6,
    author: "ana-cebotari",
    tag: { ro: "Estetică", ru: "Эстетика" },
    title: {
      ro: "Albire: ce funcționează, ce nu, și ce îți strică smalțul",
      ru: "Отбеливание: что работает, что нет и что портит эмаль",
    },
    excerpt: {
      ro: "Benzi de pe internet, cărbune activ, pastă albitoare, ședință în cabinet. Doar una dintre ele schimbă culoarea reală a dintelui.",
      ru: "Полоски из интернета, активированный уголь, отбеливающая паста, кабинетный приём. Только одно из этого меняет реальный цвет зуба.",
    },
    service: "estetica",
    body: [
      {
        kind: "p",
        text: {
          ro: "Dintele are două straturi care contează la culoare: smalțul, transparent, și dentina de dedesubt, care e galbenă prin natura ei. Cu vârsta smalțul se subțiază și dentina se vede mai mult. De asta dinții se închid la culoare fără ca tu să fi făcut nimic greșit.",
          ru: "У зуба два слоя, важных для цвета: эмаль — прозрачная, и дентин под ней — жёлтый по своей природе. С возрастом эмаль истончается, и дентин виден сильнее. Поэтому зубы темнеют, даже если вы ничего не делали неправильно.",
        },
      },
      { kind: "h", text: { ro: "Ce nu albește nimic", ru: "Что не отбеливает ничего" } },
      {
        kind: "ul",
        items: [
          {
            ro: "Pastele albitoare. Sunt abrazive: rad pigmentul de la suprafață. Rezultatul e real, dar e curățare, nu albire, și dacă sunt prea abrazive subțiază smalțul.",
            ru: "Отбеливающие пасты. Они абразивны: стирают поверхностный пигмент. Результат реален, но это очистка, а не отбеливание, и при высокой абразивности эмаль истончается.",
          },
          {
            ro: "Cărbunele activ. Aceeași poveste, dar mai agresiv și fără niciun control al granulației.",
            ru: "Активированный уголь. То же самое, но агрессивнее и без всякого контроля размера частиц.",
          },
          {
            ro: "Bicarbonatul de acasă și lămâia. Lămâia demineralizează smalțul. Nu o pune pe dinți, niciodată.",
            ru: "Домашняя сода и лимон. Лимон деминерализует эмаль. Не наносите его на зубы никогда.",
          },
        ],
      },
      { kind: "h", text: { ro: "Ce albește cu adevărat", ru: "Что отбеливает по-настоящему" } },
      {
        kind: "p",
        text: {
          ro: "Peroxidul. Molecula lui intră în smalț și descompune pigmentul din interiorul dintelui. Asta e singura albire adevărată și există în două forme: concentrație mare, în cabinet, o ședință de 60 de minute; sau concentrație mică, în gutiere, purtate acasă două-trei săptămâni.",
          ru: "Пероксид. Его молекула проникает в эмаль и разрушает пигмент внутри зуба. Это единственное настоящее отбеливание, и оно бывает в двух формах: высокая концентрация в кабинете — один приём 60 минут; или низкая концентрация в каппах, дома, две-три недели.",
        },
      },
      {
        kind: "p",
        text: {
          ro: "Ambele funcționează. Cea din cabinet e mai rapidă și mai controlată, cea de acasă e mai blândă cu sensibilitatea. Diferența de rezultat final, după o lună, e mică.",
          ru: "Оба варианта работают. Кабинетный быстрее и контролируемее, домашний мягче по чувствительности. Разница в итоговом результате через месяц невелика.",
        },
      },
      {
        kind: "quote",
        text: {
          ro: "Benzile comandate online funcționează. Problema nu e gelul, ci că nu ai izolat gingia și nu știi ce obturații ai în față.",
          ru: "Полоски из интернета работают. Проблема не в геле, а в том, что десна не изолирована и вы не знаете, какие у вас пломбы во фронте.",
        },
      },
      { kind: "h", text: { ro: "Două lucruri de verificat înainte", ru: "Две вещи, которые нужно проверить заранее" } },
      {
        kind: "p",
        text: {
          ro: "Primul: obturațiile și fațetele nu se albesc. Dacă ai o obturație pe un incisiv și albești dinții, obturația rămâne la culoarea veche și devine vizibilă. Ordinea corectă e: albești întâi, aștepți două săptămâni ca nuanța să se stabilizeze, apoi schimbi obturațiile ca să se potrivească.",
          ru: "Первое: пломбы и виниры не отбеливаются. Если у вас пломба на резце и вы отбелите зубы, пломба останется прежнего цвета и станет заметной. Правильный порядок: сначала отбеливание, затем две недели, чтобы оттенок стабилизировался, потом замена пломб под новый цвет.",
        },
      },
      {
        kind: "p",
        text: {
          ro: "Al doilea: cariile și gingiile inflamate se tratează înainte. Peroxidul care intră într-o carie ajunge direct la nerv, și atunci nu mai vorbim de sensibilitate, ci de durere adevărată.",
          ru: "Второе: кариес и воспалённые дёсны лечатся до. Пероксид, попавший в кариозную полость, идёт прямо к нерву — и тогда речь уже не о чувствительности, а о настоящей боли.",
        },
      },
      { kind: "h", text: { ro: "Cât ține", ru: "Сколько держится" } },
      {
        kind: "p",
        text: {
          ro: "12–18 luni la un om care bea cafea normal și nu fumează. La fumători, 6–8 luni. Se poate întreține cu o singură gutieră pe an, două nopți la rând, ceea ce costă mult mai puțin decât o ședință nouă.",
          ru: "12–18 месяцев у человека, который пьёт кофе умеренно и не курит. У курильщиков — 6–8 месяцев. Поддерживается одной каппой в год, две ночи подряд, и это стоит намного меньше нового приёма.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "dinte-rupt-ce-faci",
    cover: "/img/clinic-room.jpg",
    date: "2026-03-29",
    minutes: 4,
    author: "victor-grosu",
    tag: { ro: "Urgențe", ru: "Неотложно" },
    title: {
      ro: "Ți s-a rupt un dinte. Ce faci în primele douăzeci de minute",
      ru: "У вас сломался зуб. Что делать в первые двадцать минут",
    },
    excerpt: {
      ro: "La un dinte expulzat complet, ce faci tu în prima oră contează mai mult decât ce facem noi după. Instrucțiuni scurte, de citit acum.",
      ru: "При полностью выбитом зубе то, что вы сделаете в первый час, важнее того, что сделаем мы потом. Короткие инструкции — прочитайте сейчас.",
    },
    service: "urgente",
    body: [
      {
        kind: "p",
        text: {
          ro: "Scrie asta cineva care a primit destui oameni la trei noaptea cu un dinte în șervețel. Șervețelul e greșeala. Iată ordinea corectă.",
          ru: "Это пишет человек, который принял достаточно людей в три часа ночи с зубом в салфетке. Салфетка — это ошибка. Вот правильный порядок.",
        },
      },
      { kind: "h", text: { ro: "Dintele a ieșit complet din os", ru: "Зуб полностью вышел из кости" } },
      {
        kind: "ul",
        items: [
          { ro: "Ridică-l de coroană, adică de partea albă. Nu atinge rădăcina — pe ea sunt celulele care permit replantarea.", ru: "Возьмите его за коронку, то есть за белую часть. Не трогайте корень — на нём клетки, которые делают реплантацию возможной." },
          { ro: "Dacă e murdar, clătește-l 10 secunde în lapte sau ser fiziologic. Nu freca, nu perii, nu folosi apă de la robinet mai mult de câteva secunde.", ru: "Если он грязный, ополосните 10 секунд в молоке или физрастворе. Не трите, не чистите щёткой, не держите под краном дольше нескольких секунд." },
          { ro: "Ideal: pune-l la loc în alveolă și mușcă ușor pe un tifon. Dacă nu poți, ține-l în lapte. Laptele e cea mai bună soluție pe care o are oricine în frigider.", ru: "Идеально: верните его в лунку и слегка прикусите марлю. Если не получается — держите в молоке. Молоко — лучшее, что есть у любого в холодильнике." },
          { ro: "Sună imediat. Ai aproximativ 60 de minute în care replantarea are șanse reale.", ru: "Звоните немедленно. У вас примерно 60 минут, когда реплантация имеет реальные шансы." },
        ],
      },
      {
        kind: "quote",
        text: {
          ro: "Nu în apă și nu în șervețel uscat. În ambele, celulele de pe rădăcină mor în câteva minute.",
          ru: "Не в воду и не в сухую салфетку. И там, и там клетки на корне погибают за считаные минуты.",
        },
      },
      { kind: "h", text: { ro: "S-a rupt doar o bucată", ru: "Откололся только кусочек" } },
      {
        kind: "p",
        text: {
          ro: "Păstrează fragmentul, tot în lapte. În multe cazuri se poate lipi la loc și arată mai bine decât orice reconstrucție. Dacă simți aer rece pe zona ruptă și doare ascuțit, înseamnă că e expusă dentina sau nervul — atunci e urgență, nu poate aștepta până luni.",
          ru: "Сохраните фрагмент, тоже в молоке. Во многих случаях его можно приклеить обратно, и выглядит это лучше любой реставрации. Если вы чувствуете холодный воздух на месте скола и боль резкая — значит, обнажён дентин или нерв, и это неотложно, до понедельника ждать нельзя.",
        },
      },
      { kind: "h", text: { ro: "Dintele s-a mișcat, dar e acolo", ru: "Зуб сместился, но на месте" } },
      {
        kind: "p",
        text: {
          ro: "Nu-l împinge înapoi cu forța și nu-l mișca deloc. Mușcă pe ceva moale ca să-l stabilizezi și vino. Se fixează cu o atelă pentru două-trei săptămâni și de obicei se prinde la loc.",
          ru: "Не вправляйте его силой и вообще не шевелите. Прикусите что-нибудь мягкое, чтобы стабилизировать, и приезжайте. Его фиксируют шиной на две-три недели, и обычно он приживается.",
        },
      },
      { kind: "h", text: { ro: "Ce iei pentru durere", ru: "Что принять от боли" } },
      {
        kind: "p",
        text: {
          ro: "Ibuprofen 400 mg, dacă nu ai contraindicații, și rece pe obraz din exterior, 10 minute la fiecare oră. Nu pune aspirină direct pe dinte sau pe gingie — face o arsură chimică. Și nu încălzi zona umflată: căldura ajută infecția să se răspândească.",
          ru: "Ибупрофен 400 мг, если нет противопоказаний, и холод на щёку снаружи — по 10 минут каждый час. Не кладите аспирин прямо на зуб или десну: будет химический ожог. И не грейте отёк: тепло помогает инфекции распространяться.",
        },
      },
      {
        kind: "p",
        text: {
          ro: "Dacă umflătura crește și urcă spre ochi sau coboară spre gât, nu mai aștepta dimineața. Sună la orice oră — de asta există gardă.",
          ru: "Если отёк растёт и идёт вверх к глазу или вниз к шее — не ждите утра. Звоните в любое время, дежурство существует именно для этого.",
        },
      },
    ],
  },
];

export const BLOG_UI = {
  eyebrow: { ro: "Blog", ru: "Блог" },
  title: { ro: "Răspunsuri", ru: "Ответы" },
  titleEm: { ro: "pe care le dăm oricum, în cabinet", ru: "которые мы всё равно даём в кабинете" },
  lede: {
    ro: "Textele astea le scriu medicii noștri, ca să nu mai repete aceleași lucruri de zece ori pe săptămână. Fără sperieturi și fără sfaturi care se termină cu vino urgent la noi.",
    ru: "Эти тексты пишут наши врачи, чтобы не повторять одно и то же по десять раз в неделю. Без запугивания и без советов, которые заканчиваются словами «срочно приходите к нам».",
  },
  by: { ro: "Scris de", ru: "Автор" },
  more: { ro: "Alte articole", ru: "Другие статьи" },
  toc: { ro: "În articol", ru: "В статье" },
  cta: { ro: "Ai o întrebare care nu e aici?", ru: "Есть вопрос, которого здесь нет?" },
  ctaText: {
    ro: "Consultația e gratuită și nu trebuie să te programezi la tratament după ea.",
    ru: "Консультация бесплатна, и записываться на лечение после неё вы не обязаны.",
  },
} satisfies Record<string, { ro: string; ru: string }>;

const _badWord = [
  "3gp",
  "3some",
  "4some",
  "@$$",
  "adult",
  "ahole",
  "akka",
  "amcik",
  "anal",
  "anal-play",
  "analingus",
  "analplay",
  "androsodomy",
  "andskota",
  "anilingus",
  "anjing",
  "anjrit",
  "anjrot",
  "anus",
  "arschloch",
  "arse",
  "arse",
  "arsehole",
  "ash0le",
  "ash0les",
  "asholes",
  "ass",
  "ass",
  "ass monkey",
  "ass-playauto-eroticism",
  "asses",
  "assface",
  "assh0le",
  "assh0lez",
  "asshole",
  "asshole",
  "assholes",
  "assholz",
  "asslick",
  "assplay",
  "assrammer",
  "asswipe",
  "asu",
  "ashu",
  "washu",
  "wasu",
  "wasuh",
  "autofellatio",
  "autopederasty",
  "ayir",
  "azzhole",
  "badass",
  "b00b",
  "b00b",
  "b00bs",
  "b1tch",
  "b17ch",
  "b!+ch",
  "b!tch",
  "babami",
  "babes",
  "bego",
  "babi",
  "bagudung",
  "bajingan",
  "ball-gag",
  "ballgag",
  "banci",
  "bangla",
  "bangsat",
  "bareback",
  "barebacking",
  "bassterds",
  "bastard",
  "bastards",
  "bastardz",
  "basterds",
  "basterdz",
  "bacot",
  "bloon",
  "bdsm",
  "beastilaity",
  "bejad",
  "bejat",
  "bencong",
  "bestiality",
  "bi7ch",
  "bi+ch",
  "biatch",
  "bikini",
  "birahi",
  "bitch",
  "bitch",
  "bitch",
  "bitches",
  "blow job",
  "blow-job",
  "blowjob",
  "blowjob",
  "blowjobs",
  "bodat",
  "boffing",
  "bogel",
  "boiolas",
  "bokep",
  "bollock",
  "bollock",
  "bondage",
  "boner",
  "boob",
  "boobies",
  "boobs",
  "borjong",
  "breas",
  "breasts",
  "brengsek",
  "buceta",
  "bugger",
  "buggery",
  "bugil",
  "bukake",
  "bukakke",
  "bull-dyke",
  "bull-dykes",
  "bulldyke",
  "bulldykes",
  "bungul",
  "burit",
  "butt",
  "butt-pirate",
  "butt-plug",
  "butt-plugs",
  "butthole",
  "buttplug",
  "buttplugs",
  "butts",
  "buttwipe",
  "c0ck",
  "c0cks",
  "c0k",
  "cabron",
  "cameltoe",
  "cameltoes",
  "carpet muncher",
  "cawk",
  "cawks",
  "cazzo",
  "cerita dewasa",
  "cerita hot",
  "cerita panas",
  "cerita seru",
  "chick",
  "chicks",
  "chink",
  "choda",
  "chraa",
  "chudai",
  "chuj",
  "cipa",
  "cipki",
  "clit",
  "clit",
  "clitoris",
  "clits",
  "cnts",
  "cntz",
  "cock",
  "cock",
  "cock-head",
  "cock-sucker",
  "cockhead",
  "cocks",
  "cocksucker",
  "coli",
  "cok",
  "coprophagy",
  "coprophilia",
  "cornhole",
  "cornholes",
  "corpophilia",
  "corpophilic",
  "crack",
  "crackz",
  "crap",
  "cream-pie",
  "creampie",
  "creamypie",
  "cum",
  "cumming",
  "cumpic",
  "cumshot",
  "cumshots",
  "cunilingus",
  "cunnilingus",
  "cunt",
  "cunt",
  "cunts",
  "cuntz",
  "cukimay",
  "cukimai",
  "d4mn",
  "damn",
  "dancuk",
  "daniel brou",
  "david neil wallace",
  "daygo",
  "deepthroat",
  "defecated",
  "defecating",
  "defecation",
  "dego",
  "desnuda",
  "dick",
  "dick",
  "dick",
  "dicks",
  "dike",
  "dike",
  "dild0",
  "dild0s",
  "dildo",
  "dildoes",
  "dildos",
  "dilld0",
  "dilld0s",
  "dirsa",
  "dnwallace",
  "doggystyle",
  "dominatricks",
  "dominatrics",
  "dominatrix",
  "douche",
  "douches",
  "douching",
  "dupa",
  "dyke",
  "dykes",
  "dziwka",
  "ejackulate",
  "ejakulate",
  "ekrem",
  "ekrem",
  "ekto",
  "ekto",
  "enculer",
  "enema",
  "enemas",
  "erection",
  "erections",
  "erotic",
  "erotica",
  "f u c k",
  "f u c k e r",
  "facesit",
  "facesitting",
  "facial",
  "facials",
  "faen",
  "fag",
  "fag1t",
  "fag",
  "faget",
  "fagg0t",
  "fagg1t",
  "faggit",
  "faggot",
  "fagit",
  "fags",
  "fagz",
  "faig",
  "faigs",
  "fanculo",
  "fanny",
  "fart",
  "farted",
  "farting",
  "fatass",
  "fcuk",
  "feces",
  "feg",
  "felch",
  "felcher",
  "felcher",
  "felching",
  "fellatio",
  "fetish",
  "fetishes",
  "ficken",
  "fisting",
  "fitt",
  "flikker",
  "flikker",
  "flipping the bird",
  "footjob",
  "foreskin",
  "fotze",
  "fotze",
  "foursome",
  "fuck",
  "fuck",
  "fucker",
  "fuckin",
  "fucking",
  "fucking",
  "fucks",
  "fudge packer",
  "fuk",
  "fukah",
  "fuken",
  "fuker",
  "fukin",
  "fukk",
  "fukkah",
  "fukken",
  "fukker",
  "fukkin",
  "futkretzn",
  "fux0r",
  "g00k",
  "g-spot",
  "gag",
  "gang-bang",
  "gangbang",
  "gay",
  "gayboy",
  "gaygirl",
  "gays",
  "gayz",
  "gembel",
  "genital",
  "genitalia",
  "genitals",
  "gila",
  "gigolo",
  "goblok",
  "girl",
  "glory-hole",
  "glory-holes",
  "gloryhole",
  "gloryholes",
  "god-damned",
  "gook",
  "groupsex",
  "gspot",
  "guiena",
  "h0ar",
  "h0r",
  "h0re",
  "h00r",
  "h4x0r",
  "hand-job",
  "handjob",
  "hardcore",
  "hate",
  "heang",
  "hell",
  "hells",
  "helvete",
  "hencet",
  "henceut",
  "hentai",
  "hitler",
  "hoar",
  "hoer",
  "hoer",
  "homosexual",
  "honkey",
  "hoor",
  "hoore",
  "hore",
  "horny",
  "hot girl",
  "hot video",
  "hubungan intim",
  "huevon",
  "huevon",
  "hui",
  "idiot",
  "incest",
  "injun",
  "intercourse",
  "interracial",
  "itil",
  "jablay",
  "jablai",
  "jackass",
  "jackoff",
  "jancuk",
  "jancok",
  "j4ncok",
  "jap",
  "japs",
  "jebanje",
  "jembut",
  "jerk-off",
  "jisim",
  "jism",
  "jiss",
  "jizm",
  "jizz",
  "joanne yiokaris",
  "kacuk",
  "kampang",
  "kampret",
  "kanciang",
  "kanjut",
  "kancut",
  "kanker",
  "kankerkinky",
  "kawk",
  "kelamin",
  "kelentit",
  "keparat",
  "kike",
  "kimak",
  "klimak",
  "klimax",
  "klitoris",
  "klootzak",
  "knob",
  "knobs",
  "knobz",
  "knulle",
  "kolop",
  "kontol",
  "kontol",
  "kraut",
  "kripalu",
  "kuk",
  "kuksuger",
  "kunt",
  "kunts",
  "kuntz",
  "kunyuk",
  "kurac",
  "kurac",
  "kurwa",
  "kusi",
  "kusi",
  "kyrpa",
  "kyrpa",
  "l3i+ch",
  "l3itch",
  "labia",
  "labial",
  "lancap",
  "lau xanh",
  "lesbi",
  "lesbian",
  "lesbians",
  "lesbo",
  "lezzian",
  "lipshits",
  "lipshitz",
  "lolita",
  "lolitas",
  "lonte",
  "lucah",
  "maho",
  "matamu",
  "malam pengantin",
  "malam pertama",
  "mamhoon",
  "maria ozawa",
  "masochism",
  "masochist",
  "masochistic",
  "masokist",
  "massterbait",
  "masstrbait",
  "masstrbate",
  "masterbaiter",
  "masterbat3",
  "masterbat",
  "masterbate",
  "masterbates",
  "masturbat",
  "masturbat",
  "masturbate",
  "masturbation",
  "memek",
  "memek",
  "merd",
  "mesum",
  "mibun",
  "mofo",
  "monkleigh",
  "motha fucker",
  "motha fuker",
  "motha fukkah",
  "motha fukker",
  "mother fucker",
  "mother fukah",
  "mother fuker",
  "mother fukkah",
  "mother fukker",
  "mother-fucker",
  "motherfisher",
  "motherfucker",
  "mouliewop",
  "muff",
  "muie",
  "mujeres",
  "mulkku",
  "muschi",
  "mutha fucker",
  "mutha fukah",
  "mutha fuker",
  "mutha fukkah",
  "mutha fukker",
  "n1gr",
  "naked",
  "nastt",
  "nazi",
  "nazis",
  "necrophilia",
  "nenen",
  "nepesaurio",
  "ngecrot",
  "ngegay",
  "ngentot",
  "ngentot",
  "ngewe",
  "ngocok",
  "ngulum",
  "nigga",
  "nigger",
  "nigger",
  "nigger;",
  "niggers",
  "nigur;",
  "niiger;",
  "niigr;",
  "nipple",
  "nipples",
  "no cd",
  "nocd",
  "nude",
  "nudes",
  "nudity",
  "nutsack",
  "nympho",
  "nymphomania",
  "nymphomaniac",
  "orafis",
  "orgasim;",
  "orgasm",
  "orgasms",
  "orgasum",
  "orgies",
  "orgy",
  "oriface",
  "orifice",
  "orifiss",
  "orospu",
  "p0rn",
  "packi",
  "packie",
  "packy",
  "paki",
  "pakie",
  "paky",
  "pantat",
  "pantek",
  "paska",
  "paska",
  "pecker",
  "pecun",
  "pederast",
  "pederasty",
  "pedophilia",
  "pedophiliac",
  "pee",
  "peeenus",
  "peeenusss",
  "peeing",
  "peenus",
  "peinus",
  "pemerkosaan",
  "pen1s",
  "penas",
  "penetration",
  "penetrations",
  "penis",
  "penis",
  "penis-breath",
  "pentil",
  "penus",
  "penuus",
  "pepek",
  "perek",
  "perse",
  "pervert",
  "perverted",
  "perverts",
  "pg ishazamuddin",
  "phuc",
  "phuck",
  "phuck",
  "phuk",
  "phuker",
  "phukker",
  "picka",
  "pierdol",
  "pierdol",
  "pilat",
  "pillu",
  "pillu",
  "pimmel",
  "pimpis",
  "piss",
  "piss",
  "pizda",
  "polac",
  "polack",
  "polak",
  "poonani",
  "poontsee",
  "poop",
  "porn",
  "pr0n",
  "pr1c",
  "pr1ck",
  "pr1k",
  "precum",
  "preteen",
  "prick",
  "pricks",
  "prostitute",
  "prostituted",
  "prostitutes",
  "prostituting",
  "puki",
  "pukimak",
  "pula",
  "pule",
  "pusse",
  "pussee",
  "pussies",
  "pussy",
  "pussy",
  "pussylips",
  "pussys",
  "puta",
  "puto",
  "puuke",
  "puuker",
  "qahbeh",
  "queef",
  "queef",
  "queer",
  "queers",
  "queerz",
  "qweef",
  "qweers",
  "qweerz",
  "qweir",
  "racist",
  "rape",
  "raped",
  "rapes",
  "rapist",
  "rautenberg",
  "recktum",
  "rectum",
  "retard",
  "rimjob",
  "s.o.b.",
  "sabul",
  "sadism",
  "sadist",
  "sarap",
  "scank",
  "scat",
  "schaffer",
  "scheiss",
  "scheiss",
  "schlampe",
  "schlong",
  "schmuck",
  "school",
  "screw",
  "screwing",
  "scrotum",
  "sekolah menengah shan tao",
  "seks",
  "semen",
  "sempak",
  "senggama",
  "sepong",
  "setan",
  "setubuh",
  "sex",
  "sexy",
  "sh1t",
  "sh1ter",
  "sh1ts",
  "sh1tter",
  "sh1tz",
  "sh!+",
  "sh!t",
  "sh!t",
  "sh!t",
  "sharmuta",
  "sharmute",
  "shemale",
  "shi+",
  "shipal",
  "shit",
  "shits",
  "shitter",
  "shitty",
  "shity",
  "shitz",
  "shiz",
  "shyt",
  "shyte",
  "shytty",
  "shyty",
  "silit",
  "sinting",
  "sixty-nine",
  "sixtynine",
  "skanck",
  "skank",
  "skankee",
  "skankey",
  "skanks",
  "skanky",
  "skribz",
  "skurwysyn",
  "slag",
  "slut",
  "sluts",
  "slutty",
  "slutty",
  "slutz",
  "smut",
  "sodomi",
  "sodomize",
  "sodomy",
  "softcore",
  "son-of-a-bitch",
  "spank",
  "spanked",
  "spanking",
  "sperm",
  "sphencter",
  "spic",
  "spierdalaj",
  "splooge",
  "squirt",
  "squirted",
  "squirting",
  "strap-on",
  "strapon",
  "submissive",
  "suck",
  "suck-off",
  "sucked",
  "sucking",
  "sucks",
  "suicide",
  "suka",
  "taek",
  "tai",
  "tanpa busana",
  "taptei",
  "teets",
  "teez",
  "teho",
  "telanjang",
  "testical",
  "testicle",
  "testicle",
  "testicles",
  "tetek",
  "tetek",
  "threesome",
  "tit",
  "titit",
  "tits",
  "titt",
  "titt",
  "titties",
  "titty",
  "tittys",
  "togel",
  "toket",
  "tolol",
  "topless",
  "totong",
  "tranny",
  "transsexual",
  "transvestite",
  "tukar istri",
  "tukar pasangan",
  "turd",
  "tusbol",
  "twat",
  "twats",
  "twaty",
  "twink",
  "upskirt",
  "urinated",
  "urinating",
  "urination",
  "va1jina",
  "vag1na",
  "vagiina",
  "vagina",
  "vagina",
  "vaginas",
  "vaj1na",
  "vajina",
  "vibrator",
  "vittu",
  "vullva",
  "vulva",
  "w0p",
  "w00se",
  "wank",
  "wank",
  "wanking",
  "warez",
  "watersports",
  "wetback",
  "wh0re",
  "wh00r",
  "whoar",
  "whore",
  "whores",
  "wichser",
  "wop",
  "wtf",
  "x-girl",
  "x-rated",
  "xes",
  "xrated",
  "xxx",
  "yed",
  "zabourah",
  "bangke",
];
String.prototype._replaceAllString = function (s, r) {
  return this.split(s).join(r);
};
function _filterBadWord(str, txt, dt) {
  if (str) {
    var str = str.toLowerCase();
    txt = txt ? txt : "***";
    dt = dt ? dt : _badWord;
    for (var i = 0; i < dt.length; i++) {
      var kk = dt[i].toLowerCase();
      var ii = str.search(kk);
      if (ii != -1) {
        str = str._replaceAllString(kk, txt);
      }
    }
    if (str.includes('***')) return true
    return false;
  } else {
    return false;
  }
}

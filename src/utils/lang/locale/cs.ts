const cs = {
  1: "Uložit",
  2: "Blízko",
  3: "Archiv",
  4: "Otevřete panel úkolů",
  5: "Znovu prohledejte trezor",
  6: "Nebyl nalezen žádný aktivní soubor pro přidání úkolu.",
  7: "Nejsou k dispozici žádné úkoly",
  8: "Upravit úkol",
  9: "Smazat úkol",
  10: "Typ sloupce",
  11: "Nedatovaný",
  12: "Datováno",
  13: "Označeno",
  14: "Neoznačeno",
  15: "Dokončeno",
  16: "Další značky",
  17: "Název sloupce",
  18: "Předložit",
  19: "Zrušit",
  20: "Zadejte název sloupce",
  21: "Upravit úkol",
  22: "Přidat nový úkol",
  23: "Název úkolu",
  24: "Dílčí úkoly",
  25: "Náhled",
  26: "Editor",
  27: "Otevřete soubor",
  28: "Upravte nebo přidejte popis úkolu nebo přidejte další dílčí úkoly.",
  29: "Obsah těla",
  30: "Čas zahájení úlohy",
  31: "Čas ukončení úkolu",
  32: "Termín dokončení úkolu",
  33: "Priorita úkolu",
  34: "Task Tag",
  35: "Nebyla vybrána žádná deska ke smazání.",
  36: "Globální nastavení pluginu",
  37: "Nastavení",
  38: "Název desky",
  39: "Název desky, který se zobrazí jako karta v záhlaví karty uvnitř pluginu.",
  40: "Zobrazit značky pro sloupce typu namedTag",
  41: "Funguje pouze pro sloupce typu NamedTag. Pokud nechcete na kartě vidět štítek pro typ sloupce.",
  42: "Filtrování značek",
  43: "Zadejte značky oddělené čárkou, které chcete vidět na této nástěnce. Zobrazí se pouze úkoly s těmito značkami.",
  44: "Polarita filtru",
  45: "Aktivujte nebo deaktivujte výše uvedené značky filtru uvnitř desek.",
  46: "Aktivovat",
  47: "Deaktivovat",
  48: "Zobrazit filtrované značky",
  49: "Zda zobrazit výše uvedené filtrované značky na kartě položky úkolu.",
  50: "Sloupce",
  51: "Zadejte značku",
  52: "Max položek",
  53: "Z",
  54: "Na",
  55: "Smazat sloupec",
  56: "Přidat sloupec",
  57: "Smazat tuto nástěnku",
  58: "Globální nastavení",
  59: "Přidat desku",
  60: "Potvrďte Smazat",
  61: "Opravdu chcete tento úkol smazat?",
  62: "Ano",
  63: "Žádný",
  64: "Skenování trezoru dokončeno.",
  65: "Skenování úloh z úložiště",
  66: "Tuto funkci spusťte pouze v případě, že vaše úlohy nebyly správně detekovány/naskenovány nebo se deska chová zmateně.",
  67: "Tuto funkci nemusíte spouštět často, plugin automaticky rozpozná nově přidané/upravené úlohy.",
  68: "POZNÁMKA: Pokud spouštíte tuto funkci pro kontrolu nezjištěných úloh, zkontrolujte nejprve filtry skenování souborů v nastavení pluginu.",
  69: "Běh",
  70: "Skrýt shromážděné úkoly",
  71: "Zobrazit shromážděné úkoly",
  72: "Nastavení se nepodařilo načíst.",
  73: "Přečtěte si prosím dokumentaci, abyste mohli plugin efektivně používat:",
  74: "Task Board Docs",
  75: "Filtry pro skenování",
  76: "Skenujte pouze toto",
  77: "Toto neskenujte",
  78: "Zakázat",
  79: "Nastavení uživatelského rozhraní desky",
  80: "Zobrazit záhlaví karty položky úkolu",
  81: "Povolením této možnosti zobrazíte záhlaví na kartě položky úkolu",
  82: "Zobrazit zápatí karty položky úkolu",
  83: "Povolením této možnosti zobrazíte zápatí na kartě položky úkolu",
  84: "Šířka každého sloupce",
  85: "Zadejte hodnotu šířky pro každý sloupec. Výchozí hodnota je 273 pixelů",
  86: "Zobrazit posuvník sloupců",
  87: "Povolte zobrazení posuvníku pro každý sloupec. Tím se zmenší šířka karet úkolů.",
  88: "Označit barvy",
  89: "Vymazat",
  90: "Přidat barvu značky",
  91: "Název značky",
  92: "Nastavení automatizace",
  93: "Skenování v reálném čase",
  94: "Poté, co ztratíte fokus ze souboru, který jste upravili, bude úloha okamžitě obnovena na panelu úloh.\nVypnutím tohoto nastavení budou po nějaké době prohledány upravené soubory.",
  95: "Automatické přidání termínu splnění do úkolů",
  96: "Pokud je tato možnost povolena, přidáte-li úkol pomocí vyskakovacího okna Přidat nový úkol, bude jako datum splatnosti přidáno dnešní datum, pokud hodnota není zadána.",
  97: "Automatické skenování trezoru při spuštění Obsidian",
  98: "Tuto funkci použijte pouze v případě, že vaše úkoly nejsou detekovány. Obvykle budou všechny vaše nově přidané/upravené úkoly detekovány přímo.",
  99: "Pokud váš vault obsahuje mnoho souborů s velkými daty, může to ovlivnit dobu spuštění Obsidian.",
  100: "Nastavení kompatibility",
  101: "kompatibilita pluginu",
  102: "Pokud jste si nainstalovali Day Planner Plugin, tento plugin zadá čas na začátku těla úlohy, místo toho do metadat. Po povolení této funkce se čas zobrazí podle pluginu Day Planner v souborech Markdown, ale v Task Boardu se čas zobrazí v Task Footer.",
  103: "Je-li povoleno, pokud přidáte úkol do souboru Daily Note, který má název souboru jako 'yyyy-MM-DD'. Poté bude toto datum považováno za datum dokončení úkolu.",
  104: "Formát data splatnosti",
  105: "Zadejte formát data, který používáte k pojmenování souborů Daily Notes. Použijte prosím buď 'yyyy-MM-DD' nebo 'DD-MM-yyyy'",
  106: "Formáty data splatnosti a data dokončení",
  107: "Zde se zobrazí náhled",
  108: "Kompatibilní plugin",
  109: "Různé zásuvné moduly mají různý formát pro přiřazení značek Due a Completion v úloze. Vyberte jeden a podívejte se na výše uvedený formát, pokud je kompatibilní s vaším aktuálním nastavením.",
  110: "Výchozí",
  111: "Vzor data a času dokončení úlohy",
  112: "Zadejte vzor Datum-Čas, který chcete zobrazit pro hodnotu Dokončení. Např. yyyy-MM-ddTHH:mm:ss",
  113: "První den v týdnu",
  114: "Nastavte první den v týdnu",
  115: "neděle",
  116: "pondělí",
  117: "úterý",
  118: "středa",
  119: "čtvrtek",
  120: "pátek",
  121: "sobota",
  122: "Dokončení úkolu v místním čase",
  123: "Zda se časy dokončení úkolu zobrazují v místním čase",
  124: "Zobrazit posun UTC pro dokončení úlohy",
  125: "Zda se má zobrazit posun UTC pro časy dokončení úlohy",
  126: "Pokud se vám tento plugin líbí, zvažte podporu mé práce malým příspěvkem pro další zlepšování myšlenky!",
  127: "Jazyk pluginu",
  128: "Vyberte jazyk uživatelského rozhraní pluginu. Chcete-li přispět ke zlepšení aktuálního jazyka nebo přidat svůj vlastní rodný jazyk, podívejte se do dokumentace.",
  129: "Opravdu chcete tuto nástěnku smazat?\nPokud si pamatujete konfiguraci, můžete ji snadno vytvořit zpět.",
  130: "Task Board",
  131: "Přidat nový úkol do aktuálního souboru",
  132: "Otevřete panel úkolů",
  133: "Otevřete panel úkolů v novém okně",
  134: "Aktualizujte úkoly z tohoto souboru",
  135: "Přidejte soubor do filtru `Neskenovat tento soubor`",
  136: "Přidejte soubor do filtru `Pouze skenovat tento soubor`",
  137: "Přidejte složku do filtru `Neskenovat tuto složku`",
  138: "Přidejte složku do filtru `Prohledat pouze tuto složku`",
  139: "Palubní filtry",
  140: "Soubory",
  141: "Složky",
  142: "Tagy",
  143: "Plugin",
  144: "Rodák",
  145: "Tlačítko Konfigurace desky",
  146: "Tlačítko Refresh Board",
  147: "Není otevřen žádný aktivní editor. Umístěte kurzor do Editoru a spusťte tento příkaz.",
};
export default cs;
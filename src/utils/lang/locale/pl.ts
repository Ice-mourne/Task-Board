const pl = {
  1: "Ratować",
  2: "Zamknąć",
  3: "Archiwum",
  4: "Dodaj podzadanie",
  5: "Okno skanowania skarbca",
  6: "Ogólny",
  7: "Brak dostępnych zadań",
  8: "Edytuj zadanie",
  9: "Usuń zadanie",
  10: "Typ kolumny",
  11: "Bez daty",
  12: "Przestarzały",
  13: "Oznaczono",
  14: "Nieoznaczone",
  15: "Zakończony",
  16: "Inne tagi",
  17: "Nazwa kolumny",
  18: "Składać",
  19: "Anulować",
  20: "Wprowadź nazwę kolumny",
  21: "Edytuj zadanie",
  22: "Dodaj nowe zadanie",
  23: "Tytuł zadania",
  24: "Podzadania",
  25: "Zapowiedź",
  26: "Redaktor",
  27: "Otwórz plik",
  28: "Edytuj lub dodaj opis zadania lub dodaj więcej podzadań.",
  29: "Treść ciała",
  30: "Czas rozpoczęcia",
  31: "Czas zakończenia",
  32: "Termin wykonania",
  33: "Priorytet",
  34: "Etykietka",
  35: "Nie wybrano żadnej tablicy do usunięcia.",
  36: "Ustawienia globalne wtyczki",
  37: "tablica",
  38: "Nazwa zarządu",
  39: "Nazwa planszy, która będzie wyświetlana jako zakładka w nagłówku zakładki wewnątrz wtyczki.",
  40: "Pokaż tagi w kolumnach typu „oznaczone”",
  41: "Działa tylko dla kolumn typu 'tagged'. Jeśli nie chcesz widzieć tagu na karcie dla typu kolumny.",
  42: "Filtruj tagi",
  43: "Wprowadź tagi, rozdzielone przecinkami, które chcesz zobaczyć na tej tablicy. Wyświetlane będą tylko zadania z tymi tagami.",
  44: "Polaryzacja filtra",
  45: "Aktywuj lub dezaktywuj powyższe tagi filtrów wewnątrz tablic.",
  46: "Aktywować",
  47: "Dezaktywować",
  48: "Pokaż filtrowane tagi",
  49: "Czy wyświetlić wymienione powyżej filtrowane tagi na karcie zadania.",
  50: "Kolumny",
  51: "Wprowadź tag",
  52: "Maksymalna liczba elementów",
  53: "Z",
  54: "Do",
  55: "Usuń kolumnę",
  56: "Dodaj kolumnę",
  57: "Usuń tę tablicę",
  58: "Ustawienia globalne",
  59: "Dodaj tablicę",
  60: "Potwierdź usunięcie",
  61: "Czy na pewno chcesz usunąć to zadanie?",
  62: "Tak",
  63: "NIE",
  64: "Skanowanie skarbca ukończone.",
  65: "Zadania skanowania z sejfu",
  66: "Uruchom tę funkcję tylko wtedy, gdy zadania nie zostały prawidłowo wykryte/przeskanowane lub tablica zachowuje się dziwnie.",
  67: "Nie musisz często uruchamiać tej funkcji, ponieważ wtyczka automatycznie wykryje nowo dodane/edytowane zadania.",
  68: "UWAGA: Jeśli skanujesz w celu wykrycia niewykrytych zadań, najpierw sprawdź „filtry skanowania” w ustawieniach wtyczki.",
  69: "Uruchomić",
  70: "Ukryj zebrane zadania",
  71: "Pokaż zebrane zadania",
  72: "Nie udało się załadować ustawień.",
  73: "Aby efektywnie wykorzystać tę wtyczkę, przeczytaj dokumentację:",
  74: "Dokumenty tablicy zadań",
  75: "Filtry do skanowania",
  76: "Skanuj tylko to",
  77: "Nie skanuj tego",
  78: "Wyłączyć",
  79: "Interfejs użytkownika tablicy",
  80: "Pokaż nagłówek karty zadania",
  81: "Włącz tę opcję, aby zobaczyć nagłówek na karcie zadania",
  82: "Pokaż stopkę karty zadania",
  83: "Włącz tę opcję, aby zobaczyć stopkę na karcie zadania",
  84: "Szerokość każdej kolumny",
  85: "Wprowadź wartość szerokości dla każdej kolumny. Wartość domyślna to 273px",
  86: "Pokaż pasek przewijania kolumn",
  87: "Włącz, aby zobaczyć pasek przewijania dla każdej kolumny. Spowoduje to zmniejszenie szerokości 'kart zadań'.",
  88: "Kolory tagów",
  89: "Usuwać",
  90: "Dodaj kolor tagu",
  91: "Nazwa tagu",
  92: "Automatyzacja",
  93: "Skanowanie w czasie rzeczywistym",
  94: "Po utracie fokusu z edytowanego pliku zadanie zostanie natychmiast odświeżone na tablicy zadań.\nWyłączenie tego ustawienia spowoduje przeskanowanie zmodyfikowanych plików po pewnym czasie.",
  95: "Automatyczne dodawanie daty wykonania zadań",
  96: "Po włączeniu tej opcji i dodaniu zadania za pomocą okna podręcznego „Dodaj nowe zadanie” jako termin wykonania zostanie dodana dzisiejsza data, jeśli nie wprowadzono żadnej daty.",
  97: "Automatyczne skanowanie skarbca podczas uruchamiania Obsidian",
  98: "Używaj tej funkcji tylko wtedy, gdy edytujesz pliki vault poza Obsidian. Zazwyczaj wszystkie nowo dodane/edytowane zadania zostaną wykryte automatycznie.",
  99: "Jeśli w Twoim sejfie znajduje się wiele plików zawierających ogromne ilości danych, może to mieć wpływ na czas uruchamiania Obsidian.",
  100: "Zgodne wtyczki",
  101: "zgodność wtyczek",
  102: "Jeśli zainstalowałeś 'wtyczkę day planner', włącz ją, aby zobaczyć czas na początku tytułu zadania, zamiast w metadanych. Po włączeniu tej funkcji czas będzie wyświetlany zgodnie z wtyczką day planner w plikach Markdown, ale na karcie zadania czas będzie wyświetlany w stopce jak zwykle.",
  103: "Gdy włączone, jeśli dodasz zadanie w pliku z notatkami dziennymi, którego nazwa pliku ma format „yyyy-MM-DD”. Wtedy ta data będzie uważana za termin wykonania zadania.",
  104: "Format daty końcowej",
  105: "Wprowadź format daty, którego używasz do nazywania plików daily-nots. Użyj formatu 'yyyy-MM-DD' lub 'DD-MM-yyyy'.",
  106: "Formaty",
  107: "Twoje zadanie będzie wyglądać następująco w notatkach",
  108: "Obsługiwane formaty wtyczek",
  109: "Różne wtyczki mają różne formaty, aby nadać zadaniu wartości „due” i „completion”. Wybierz jedną z wartości i sprawdź powyższy format, czy jest zgodny z Twoją bieżącą konfiguracją.",
  110: "Domyślny",
  111: "Wzór daty i godziny ukończenia zadania",
  112: "Wprowadź wzorzec daty i godziny, który chcesz zobaczyć dla wartości ukończenia. Np. yyyy-MM-dd/HH:mm:ss",
  113: "Pierwszy dzień tygodnia",
  114: "Ustaw pierwszy dzień tygodnia",
  115: "Niedziela",
  116: "Poniedziałek",
  117: "Wtorek",
  118: "Środa",
  119: "Czwartek",
  120: "Piątek",
  121: "Sobota",
  122: "Zakończenie zadania w czasie lokalnym",
  123: "Czy data i godzina ukończenia zadania powinna być wyświetlana w czasie lokalnym",
  124: "Pokaż przesunięcie UTC dla ukończenia zadania",
  125: "Czy wyświetlać przesunięcie UTC dla czasów ukończenia zadań",
  126: "Jeśli podoba Ci się ta wtyczka, rozważ wsparcie mojej pracy poprzez niewielką darowiznę, aby móc dalej rozwijać ten pomysł!",
  127: "Język wtyczki",
  128: "Wybierz język interfejsu użytkownika wtyczki. Aby przyczynić się do ulepszenia bieżącego języka lub dodać swój własny język ojczysty, zapoznaj się z dokumentacją.",
  129: "Czy na pewno chcesz usunąć tę tablicę?\nMożesz ją łatwo utworzyć ponownie, jeśli pamiętasz konfigurację.",
  130: "Tablica zadań",
  131: "Dodaj nowe zadanie w bieżącym pliku",
  132: "Otwórz tablicę zadań",
  133: "Otwórz tablicę zadań w nowym oknie",
  134: "Aktualizuj zadania z tego pliku",
  135: "Dodaj plik w filtrze skanowania",
  136: "Dodaj plik w filtrze skanowania",
  137: "Dodaj folder w filtrze skanowania",
  138: "Dodaj folder w filtrze skanowania",
  139: "Filtry płytowe",
  140: "Akta",
  141: "Lornetka składana",
  142: "Tagi",
  143: "Wtyczka",
  144: "Rodzinny",
  145: "Przycisk konfiguracji płyty",
  146: "Przycisk odświeżania tablicy",
  147: "Żaden aktywny edytor nie jest otwarty. Umieść kursor w edytorze, w którym chcesz dodać zadanie i uruchom to polecenie.",
  148: "Naciśnij Enter po wpisaniu tagu",
  149: "Notatki dzienne",
  151: "Tytuł zadania",
  152: "Ta sekcja zawiera ustawienia, które pomogą Ci zastosować filtry i umożliwią Ci kontrolę nad skanowaniem tylko wybranych plików lub usuwaniem niektórych plików ze skanowania. Filtry są wysoce zalecane, jeśli masz wiele plików, które nigdy nie będą zawierać żadnych zadań.",
  153: "Wprowadź nazwy plików, folderu lub tagu zadania, aby kontrolować, które pliki chcesz, aby wtyczka przeskanowała, aby wyodrębnić z nich zadania. Zdecydowanie zaleca się przeczytanie dokumentacji, jeśli używasz wszystkich trzech filtrów jednocześnie.",
  154: "Ta wtyczka została stworzona przez",
  155: "Ta sekcja zawiera ustawienia kontrolujące wygląd planszy. Ustawienia te zostaną zastosowane do wszystkich plansz.",
  156: "Ustaw niestandardowe kolory dla swoich konkretnych tagów.",
  157: "Ta sekcja zawiera ustawienia umożliwiające automatyzację określonych zadań w celu zapewnienia wydajnego przepływu pracy. Dzięki temu możesz poświęcić projektowi więcej czasu niż na zarządzanie zadaniami.",
  158: "Notatka",
  159: "W tej sekcji znajdują się ustawienia umożliwiające dostosowanie formatów używanych do tworzenia zadań.",
  160: "NIC",
  161: "Najwyższy",
  162: "Wysoki",
  163: "Średni",
  164: "Niski",
  165: "Najniższy",
  166: "Wpisz tutaj...",
  167: "Usuń podzadanie",
  168: "Przytrzymaj przycisk CTRL, aby otworzyć w nowym oknie",
  169: "Nazwa pliku",
  170: "Twoje deski",
  171: "Nie znaleziono pliku w ścieżce:",
  172: "Tryb przycisku edycji",
  173: "Wybierz, jak ma zostać otwarta notatka nadrzędna. Kliknij dwukrotnie kartę, aby otworzyć notatkę.",
  174: "Użyj funkcji edycji okna zadań",
  175: "Otwórz notatkę w nowej karcie",
  176: "Otwórz nutę w prawym podziale",
  177: "Otwórz notatkę w nowym oknie",
  178: "Otwórz notatkę w podglądzie po najechaniu kursorem",
};
export default pl;
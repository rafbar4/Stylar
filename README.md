# 👔 Stylar - Twój Osobisty Stylista

Aplikacja webowa do automatycznego dobierania strojów na podstawie pogody i okazji.

🔗 **Demo na żywo**: `https://twoj-username.github.io/stylar/`

## 🎯 Funkcjonalności

- ☀️ **Integracja z pogodą** - pobiera aktualną temperaturę dla wybranego miasta
- 🎨 **Dobór stroju** - automatycznie dobiera odpowiednie ubrania
- 🎯 **Różne okazje** - casual, formalne, sport, impreza, praca
- 📱 **Responsywny design** - działa na telefonach, tabletach i komputerach
- 🚀 **Bez backendu** - działa w pełni po stronie przeglądarki

## 🚀 Jak uruchomić na GitHub Pages

### Krok 1: Przygotuj zdjęcia

Umieść swoje zdjęcia ubrań w odpowiednich folderach:

```
images/
├── gora-m/         # T-shirty, koszule, bluzy, swetry
├── dol-m/          # Spodnie, jeansy, szorty
├── buty-m/         # Buty sportowe, eleganckie, sneakersy
└── okrycie-m/      # Kurtki, płaszcze, bluzy rozpinane
```

**Nazwy plików** podaj w pliku `js/clothes-data.js` (np. `tshirt-bialy.jpg`)

### Krok 2: Utwórz repozytorium na GitHubie

1. Wejdź na [github.com](https://github.com)
2. Kliknij **"New repository"**
3. Nazwa: `stylar` (lub inna)
4. Zaznacz **"Public"**
5. Kliknij **"Create repository"**

### Krok 3: Wyślij pliki

```bash
# 1. Otwórz terminal w folderze z projektem
cd /sciezka/do/projektu

# 2. Zainicjuj Git
git init

# 3. Dodaj wszystkie pliki
git add .

# 4. Zatwierdź zmiany
git commit -m "Initial commit - Stylar app"

# 5. Połącz z GitHubem
git remote add origin https://github.com/twoj-username/stylar.git

# 6. Wyślij na GitHub
git branch -M main
git push -u origin main
```

### Krok 4: Włącz GitHub Pages

1. Wejdź na swoje repozytorium na GitHubie
2. Kliknij **"Settings"** (Ustawienia)
3. W menu po lewej wybierz **"Pages"**
4. W sekcji **"Source"** wybierz:
   - Branch: `main`
   - Folder: `/ (root)`
5. Kliknij **"Save"**
6. Poczekaj 1-2 minuty
7. Strona będzie dostępna pod adresem: `https://twoj-username.github.io/stylar/`

## 📝 Dostosowywanie

### Zmiana ubrań w bazie danych

Edytuj plik `js/clothes-data.js`:

```javascript
{
    id: 1,
    name: 'Nazwa ubrania',
    category: 'gora',  // lub 'dol', 'buty', 'okrycie'
    image: 'images/gora-m/nazwa-pliku.jpg',
    tags: ['casual', 'sport'],  // okazje
    warmth: 3  // ciepło 1-5 (1=lekkie, 5=najcieplsze)
}
```

### Zmiana kolorów

Edytuj plik `css/style.css` - sekcja z gradientami:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Własny klucz API pogody

Zarejestruj się na [openweathermap.org](https://openweathermap.org) i zmień klucz w `js/config.js`:

```javascript
WEATHER_API_KEY: 'twoj-nowy-klucz-api'
```

## 🗂️ Struktura projektu

```
stylar/
├── index.html              # Strona główna
├── css/
│   └── style.css          # Style
├── js/
│   ├── config.js          # Konfiguracja API
│   ├── clothes-data.js    # Baza danych ubrań
│   └── app.js             # Logika aplikacji
├── images/
│   ├── gora-m/            # Zdjęcia górnych części
│   ├── dol-m/             # Zdjęcia spodni
│   ├── buty-m/            # Zdjęcia butów
│   └── okrycie-m/         # Zdjęcia okryć
└── README.md              # Dokumentacja
```

## 🛠️ Technologie

- **HTML5** - struktura strony
- **CSS3** - style i animacje
- **JavaScript (Vanilla)** - logika aplikacji
- **OpenWeatherMap API** - dane pogodowe
- **GitHub Pages** - hosting

## 📱 Wymagania

- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)
- Połączenie z internetem (dla API pogody)

## 🔧 Rozwiązywanie problemów

### Zdjęcia się nie wyświetlają

1. Sprawdź, czy pliki są w odpowiednich folderach
2. Sprawdź nazwy plików w `js/clothes-data.js`
3. Upewnij się, że nazwy są identyczne (wielkość liter ma znaczenie!)

### Pogoda nie działa

1. Sprawdź klucz API w `js/config.js`
2. Klucz OpenWeatherMap aktywuje się w ciągu 1-2 godzin
3. Sprawdź konsolę przeglądarki (F12) pod kątem błędów

### Strona nie działa na GitHub Pages

1. Upewnij się, że główny plik nazywa się `index.html`
2. Sprawdź, czy GitHub Pages jest włączone
3. Poczekaj 5-10 minut po włączeniu
4. Wyczyść cache przeglądarki (Ctrl+Shift+R)

## 📊 Baza danych ubrań

### Format zdjęć

- **Rozdzielczość**: minimum 300x400px
- **Format**: JPG lub PNG
- **Rozmiar**: do 500KB na zdjęcie
- **Tło**: najlepiej jednolite, jasne

### Kategorie

- **gora** - T-shirty, koszule, bluzy, swetry, polo
- **dol** - Jeansy, spodnie, szorty, dresy, chinos
- **buty** - Sneakersy, eleganckie, sportowe, timberland
- **okrycie** - Kurtki, płaszcze, bluzy rozpinane

### Tagi (okazje)

- `casual` - codzienne
- `formal` - eleganckie
- `sport` - sportowe
- `party` - imprezowe
- `work` - do pracy

## 🎨 Personalizacja wyglądu

### Zmiana głównego koloru

W pliku `css/style.css` znajdź wszystkie wystąpienia:
```css
#667eea  /* niebieski */
#764ba2  /* fioletowy */
```

I zamień na swoje kolory, np.:
```css
#ff6b6b  /* czerwony */
#ee5a6f  /* różowy */
```

### Zmiana czcionki

Dodaj na początku `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

## 📈 Dalszy rozwój

Możliwe rozszerzenia:

- 🤖 Integracja z AI do lepszych rekomendacji
- 📸 Upload własnych zdjęć przez użytkownika
- 💾 Zapisywanie ulubionych zestawów
- 👥 System kont użytkowników
- 📱 Aplikacja mobilna (React Native)
- 🌍 Więcej języków

## 📄 Licencja

MIT License - możesz swobodnie używać i modyfikować ten projekt.

## 👨‍💻 Autor

Projekt studencki UAM - Rafał Bartosik

## 🙏 Podziękowania

- OpenWeatherMap za API pogodowe
- GitHub za darmowy hosting
- UAM za inspirację do projektu

---

**Miłego używania Stylar! 👔✨**

Jeśli masz pytania lub sugestie, otwórz Issue na GitHubie!

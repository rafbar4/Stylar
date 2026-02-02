# 👔 Stylar - Dobór stroju według pogody

Aplikacja webowa do automatycznego dobierania strojów na podstawie pogody i okazji.

## 🚀 Szybki start

1. **Dodaj swoje zdjęcia** do folderów:
   - `images/gora-m/`
   - `images/dol-m/`
   - `images/buty-m/`
   - `images/okrycie-m/`

2. **Wyślij na GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TWOJA-NAZWA/stylar.git
git push -u origin main
```

3. **Włącz GitHub Pages**:
   - Settings → Pages
   - Branch: main
   - Folder: / (root)
   - Save

## 📁 Nazwy plików (zgodne z kodem)

### GÓRA:
- `t-shirt-vneck.png`
- `t-shirt-crewneck.png`
- `polo-m.png`
- `sweter.png`
- `koszula-biznesowa-m.png`
- `koszula-flanelowa.png`
- `longsleeve.png`
- `bluza-kaptur.png`

### DÓŁ:
- `jeansy-regular.png`
- `jeansy-slim.png`
- `chinosy.png`
- `dresy.png`
- `spodnie-garnitur-m.png`
- `szorty-sport.png`
- `szorty-jeans-m.png`

### BUTY:
- `trampki.png`
- `buty-sportowe.png`
- `polbuty-m.png`
- `sztyblety.png`

### OKRYCIE:
- `kurtka-jeans.png`
- `kurtka-puchowa.png`
- `kurtka-skora.png`
- `marynarka-m.png`
- `plaszcz-m.png`

## 🛠️ Technologie

- HTML5
- CSS3
- JavaScript (Vanilla)
- OpenWeatherMap API
- GitHub Pages

## 📝 Funkcje

- ✅ Pobieranie pogody z API
- ✅ Inteligentny dobór stroju według temperatury
- ✅ 5 różnych okazji (casual, formal, sport, party, work)
- ✅ Responsywny design
- ✅ Kolorowe gradienty według temperatury
- ✅ Animacje i efekty hover
- ✅ Wskaźnik "ciepła" ubrania

## ⚙️ Konfiguracja

Jeśli chcesz użyć własnego klucza API OpenWeatherMap, edytuj `js/config.js`:

```javascript
const CONFIG = {
    WEATHER_API_KEY: 'twoj-klucz-api',
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5/weather',
    DEFAULT_CITY: 'Poznań'
};
```

## 🎨 Personalizacja

### Zmiana kolorów
Edytuj `css/style.css` - znajdź i zmień gradienty:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Dodanie własnych ubrań
Edytuj `js/clothes-data.js`:
```javascript
{
    id: 99,
    name: 'Nazwa ubrania',
    category: 'gora',
    image: 'images/gora-m/nazwa-pliku.png',
    tags: ['casual', 'sport'],
    warmth: 3
}
```

## 📱 Testowanie lokalne

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code
# Zainstaluj rozszerzenie "Live Server"
```

Otwórz: http://localhost:8000

## ✅ Checklist przed wdrożeniem

- [ ] Wszystkie zdjęcia są w odpowiednich folderach
- [ ] Nazwy plików są poprawne (małe litery, myślniki)
- [ ] Repozytorium jest publiczne
- [ ] GitHub Pages jest włączone
- [ ] Poczekałem 2-3 minuty po włączeniu

## 🔧 Rozwiązywanie problemów

**Zdjęcia się nie wyświetlają?**
- Sprawdź nazwy plików (wielkość liter ma znaczenie!)
- Upewnij się, że pliki są w odpowiednich folderach
- Otwórz konsolę (F12) i sprawdź błędy

**Pogoda nie działa?**
- Klucz API potrzebuje 1-2h na aktywację
- Sprawdź nazwę miasta (po angielsku działa lepiej)
- Sprawdź konsolę pod kątem błędów

**Strona pokazuje 404?**
- Poczekaj 5-10 minut po włączeniu Pages
- Wyczyść cache: Ctrl+Shift+R
- Sprawdź czy branch to "main"

## 📞 Pomoc

Jeśli masz problemy:
1. Sprawdź konsolę przeglądarki (F12)
2. Sprawdź czy wszystkie pliki są na GitHubie
3. Sprawdź czy GitHub Pages jest włączone

---

**Powodzenia! 🎉**

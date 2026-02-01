# 🚀 Instrukcja wdrożenia na GitHub Pages

## Szybki start w 5 krokach

### 1️⃣ Przygotuj zdjęcia

Umieść swoje zdjęcia ubrań w folderach:
- `images/gora-m/` - górne części (t-shirty, koszule, bluzy)
- `images/dol-m/` - spodnie (jeansy, dresy, szorty)
- `images/buty-m/` - obuwie
- `images/okrycie-m/` - okrycia (kurtki, płaszcze)

**Przykładowe nazwy plików:**
- `tshirt-bialy.jpg`
- `jeansy-granatowe.jpg`
- `sneakersy-biale.jpg`
- `kurtka-skorzana.jpg`

### 2️⃣ Zaktualizuj bazę danych

Otwórz plik `js/clothes-data.js` i zmień nazwy plików na swoje:

```javascript
{
    id: 1,
    name: 'T-shirt biały',
    category: 'gora',
    image: 'images/gora-m/tshirt-bialy.jpg',  // ← Twoja nazwa pliku
    tags: ['casual', 'sport'],
    warmth: 1
}
```

### 3️⃣ Utwórz repozytorium na GitHubie

1. Wejdź na https://github.com
2. Kliknij zielony przycisk **"New"** (góra po lewej)
3. Nazwa repozytorium: `stylar` (lub inna nazwa)
4. **Ważne**: Zaznacz **"Public"** (musi być publiczne dla GitHub Pages)
5. Kliknij **"Create repository"**

### 4️⃣ Wyślij pliki na GitHub

**Opcja A - Przez terminal (zalecane):**

```bash
# Otwórz terminal w folderze z projektem
cd /ścieżka/do/folderu/stylar-github-pages

# Zainicjuj repozytorium Git
git init

# Dodaj wszystkie pliki
git add .

# Zatwierdź zmiany
git commit -m "Pierwszy commit - aplikacja Stylar"

# Połącz z GitHubem (zmień 'twoj-username' na swoją nazwę użytkownika)
git remote add origin https://github.com/twoj-username/stylar.git

# Wyślij pliki
git branch -M main
git push -u origin main
```

**Opcja B - Przez interfejs GitHuba:**

1. Na stronie swojego repozytorium kliknij **"uploading an existing file"**
2. Przeciągnij wszystkie pliki i foldery
3. Kliknij **"Commit changes"**

### 5️⃣ Włącz GitHub Pages

1. Na stronie repozytorium kliknij **"Settings"** (Ustawienia)
2. W menu po lewej stronie znajdź i kliknij **"Pages"**
3. W sekcji **"Build and deployment"**:
   - **Source**: wybierz **"Deploy from a branch"**
   - **Branch**: wybierz **"main"** i **"/ (root)"**
   - Kliknij **"Save"**
4. Odśwież stronę po 1-2 minutach
5. U góry zobaczysz link: **"Your site is live at https://twoj-username.github.io/stylar/"**

### 6️⃣ Gotowe! 🎉

Twoja aplikacja jest teraz dostępna pod adresem:
```
https://twoj-username.github.io/stylar/
```

---

## 📝 Aktualizowanie strony

Gdy chcesz dodać nowe zdjęcia lub zmienić coś w kodzie:

```bash
# 1. Wprowadź zmiany w plikach

# 2. Dodaj zmiany do Git
git add .

# 3. Zatwierdź zmiany
git commit -m "Opis zmian, np: Dodałem nowe zdjęcia"

# 4. Wyślij na GitHub
git push
```

Strona zaktualizuje się automatycznie w ciągu 1-2 minut!

---

## 🔧 Rozwiązywanie problemów

### Problem: Strona pokazuje 404

**Rozwiązanie:**
1. Sprawdź czy plik nazywa się dokładnie `index.html` (małe litery!)
2. W Settings → Pages sprawdź czy branch to `main` i folder to `/ (root)`
3. Poczekaj 5-10 minut po pierwszym wdrożeniu
4. Wyczyść cache przeglądarki: `Ctrl + Shift + R` (Windows) lub `Cmd + Shift + R` (Mac)

### Problem: Zdjęcia się nie wyświetlają

**Rozwiązanie:**
1. Sprawdź czy zdjęcia są w odpowiednich folderach
2. Sprawdź czy nazwy w `js/clothes-data.js` są DOKŁADNIE takie same jak nazwy plików
3. **UWAGA:** Wielkość liter ma znaczenie! `Tshirt.jpg` ≠ `tshirt.jpg`
4. Sprawdź format plików - używaj `.jpg`, `.jpeg` lub `.png`

### Problem: Pogoda nie działa

**Rozwiązanie:**
1. Klucz API w `js/config.js` potrzebuje 1-2 godzin na aktywację
2. Zarejestruj się na https://openweathermap.org/api i pobierz własny klucz
3. Zastąp klucz w pliku `js/config.js`

### Problem: Git pyta o username i hasło

**Rozwiązanie:**
GitHub nie akceptuje już haseł. Użyj Personal Access Token:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Kliknij "Generate new token (classic)"
3. Zaznacz `repo`
4. Skopiuj token i użyj go zamiast hasła

Albo skonfiguruj SSH:
```bash
# Wygeneruj klucz SSH
ssh-keygen -t ed25519 -C "twoj@email.com"

# Dodaj klucz do SSH Agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Skopiuj klucz publiczny
cat ~/.ssh/id_ed25519.pub

# Dodaj na GitHub: Settings → SSH and GPG keys → New SSH key
```

---

## 🎯 Checklist przed wdrożeniem

- [ ] Wszystkie zdjęcia są w odpowiednich folderach
- [ ] Nazwy plików w `clothes-data.js` są poprawne
- [ ] Plik główny nazywa się `index.html`
- [ ] Repozytorium jest **Public**
- [ ] GitHub Pages jest włączone
- [ ] Branch ustawione na `main`, folder na `/ (root)`
- [ ] Poczekałem 2-3 minuty po włączeniu Pages

---

## 📱 Testowanie lokalne (opcjonalne)

Jeśli chcesz przetestować przed wysłaniem na GitHub:

**Opcja 1 - Python (najprostsze):**
```bash
cd /ścieżka/do/projektu
python -m http.server 8000
```
Otwórz: http://localhost:8000

**Opcja 2 - Node.js:**
```bash
npx http-server
```

**Opcja 3 - VS Code:**
Zainstaluj rozszerzenie "Live Server" i kliknij "Go Live"

---

## 🌐 Własna domena (opcjonalnie)

Jeśli masz własną domenę (np. `mojstylar.pl`):

1. W ustawieniach domeny dodaj rekord:
   ```
   Type: CNAME
   Name: www
   Value: twoj-username.github.io
   ```

2. W Settings → Pages → Custom domain wpisz swoją domenę

3. Zaznacz "Enforce HTTPS"

---

## 🚀 Następne kroki

Po wdrożeniu możesz:

1. **Dodać więcej ubrań** - edytuj `js/clothes-data.js`
2. **Zmienić kolory** - edytuj `css/style.css`
3. **Dodać własne logo** - dodaj plik `logo.png` i wstaw w header
4. **Udostępnić znajomym** - skopiuj link i podeślij!

---

## 📞 Potrzebujesz pomocy?

- Przeczytaj główny README.md
- Sprawdź Issues na GitHubie
- Zadaj pytanie na forum UAM

**Powodzenia! 🎉**

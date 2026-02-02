// Elementy DOM
const miastoInput = document.getElementById('miasto');
const okazjaSelect = document.getElementById('okazja');
const dobierzButton = document.getElementById('dobierz-button');
const messageDiv = document.getElementById('message');
const weatherDiv = document.getElementById('weather-info');
const resultsDiv = document.getElementById('outfit-results');

// Event listener na przycisk
dobierzButton.addEventListener('click', dobierzStroj);

// Event listener na Enter
miastoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') dobierzStroj();
});

// Główna funkcja
async function dobierzStroj() {
    const miasto = miastoInput.value.trim();
    const okazja = okazjaSelect.value;

    if (!miasto) {
        showMessage('Proszę podać miasto!', 'error');
        return;
    }

    if (!okazja) {
        showMessage('Proszę wybrać okazję!', 'error');
        return;
    }

    resultsDiv.innerHTML = '';
    weatherDiv.innerHTML = '';
    showMessage('Pobieram pogodę i dobieram strój...', 'loading');
    dobierzButton.disabled = true;

    try {
        const pogoda = await pobierzPogode(miasto);
        wyswietlPogode(pogoda, miasto);
        const outfit = dobierzUbrania(okazja, pogoda.temperatura);
        wyswietlPropozycje(outfit);
        showMessage('Oto moja propozycja! 🎉', 'success');
    } catch (error) {
        showMessage(`Błąd: ${error.message}`, 'error');
        console.error(error);
    } finally {
        dobierzButton.disabled = false;
    }
}

// Pobieranie pogody
async function pobierzPogode(miasto) {
    const url = `${CONFIG.WEATHER_API_URL}?q=${miasto}&appid=${CONFIG.WEATHER_API_KEY}&units=metric&lang=pl`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Nie znaleziono miasta. Sprawdź nazwę i spróbuj ponownie.');
    }
    
    const data = await response.json();
    
    return {
        temperatura: Math.round(data.main.temp),
        opis: data.weather[0].description
    };
}

// Dobieranie ubrań
function dobierzUbrania(okazja, temperatura) {
    const outfit = { gora: null, dol: null, buty: null, okrycie: null };
    
    let ubrania = getByOccasion(okazja);
    if (ubrania.length === 0) ubrania = getAllClothes();

    const gory = ubrania.filter(item => item.category === 'gora');
    if (gory.length > 0) {
        if (temperatura < 15) {
            const cieplsze = gory.filter(item => item.warmth >= 3);
            outfit.gora = cieplsze.length > 0 ? losuj(cieplsze) : losuj(gory);
        } else if (temperatura > 25) {
            const lzejsze = gory.filter(item => item.warmth <= 2);
            outfit.gora = lzejsze.length > 0 ? losuj(lzejsze) : losuj(gory);
        } else {
            outfit.gora = losuj(gory);
        }
    }

    const doly = ubrania.filter(item => item.category === 'dol');
    if (doly.length > 0) {
        if (temperatura > 25) {
            const lekkie = doly.filter(item => item.warmth === 1);
            outfit.dol = lekkie.length > 0 ? losuj(lekkie) : losuj(doly);
        } else {
            outfit.dol = losuj(doly);
        }
    }

    const buty = ubrania.filter(item => item.category === 'buty');
    if (buty.length > 0) {
        outfit.buty = losuj(buty);
    }

    if (temperatura < 18) {
        const okrycia = ubrania.filter(item => item.category === 'okrycie');
        if (okrycia.length > 0) {
            if (temperatura < 5) {
                const najcieplejsze = okrycia.filter(item => item.warmth >= 4);
                outfit.okrycie = najcieplejsze.length > 0 ? losuj(najcieplejsze) : losuj(okrycia);
            } else if (temperatura < 12) {
                const cieplsze = okrycia.filter(item => item.warmth >= 3);
                outfit.okrycie = cieplsze.length > 0 ? losuj(cieplsze) : losuj(okrycia);
            } else {
                const lzejsze = okrycia.filter(item => item.warmth <= 3);
                outfit.okrycie = lzejsze.length > 0 ? losuj(lzejsze) : losuj(okrycia);
            }
        }
    }

    return outfit;
}

function losuj(tablica) {
    return tablica[Math.floor(Math.random() * tablica.length)];
}

// Wyświetlanie pogody
function wyswietlPogode(pogoda, miasto) {
    const emoji = getWeatherEmoji(pogoda.temperatura);
    const tempClass = getTempClass(pogoda.temperatura);
    
    weatherDiv.innerHTML = `
        <div class="weather-card ${tempClass}">
            <h3>${emoji} Pogoda w ${miasto}</h3>
            <div class="weather-details">
                <span class="temp">${pogoda.temperatura}°C</span>
                <span class="desc">${pogoda.opis}</span>
            </div>
        </div>
    `;
}

function getWeatherEmoji(temp) {
    if (temp < 0) return '❄️';
    if (temp < 10) return '🥶';
    if (temp < 15) return '🌤️';
    if (temp < 25) return '☀️';
    if (temp < 30) return '🌞';
    return '🔥';
}

function getTempClass(temp) {
    if (temp < 0) return 'weather-freezing';
    if (temp < 10) return 'weather-cold';
    if (temp < 20) return 'weather-cool';
    if (temp < 30) return 'weather-warm';
    return 'weather-hot';
}

// Wyświetlanie propozycji
function wyswietlPropozycje(outfit) {
    resultsDiv.innerHTML = '';

    const kategorie = {
        'gora': 'Góra',
        'dol': 'Dół',
        'okrycie': 'Okrycie',
        'buty': 'Buty'
    };

    for (const [kategoria, nazwa] of Object.entries(kategorie)) {
        const item = outfit[kategoria];
        
        if (item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'outfit-item';
            itemDiv.innerHTML = `
                <h4>${nazwa}</h4>
                <div class="image-container">
                    <img src="${item.image}" alt="${item.name}" onerror="this.classList.add('placeholder-img'); this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dy=%22.3em%22%3EBrak zdjęcia%3C/text%3E%3C/svg%3E';">
                </div>
                <p class="item-name">${item.name}</p>
                <div class="item-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="item-warmth">
                    <span class="warmth-label">Ciepło:</span>
                    ${getWarmthStars(item.warmth)}
                </div>
            `;
            resultsDiv.appendChild(itemDiv);
        }
    }

    if (!outfit.okrycie) {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'outfit-item no-jacket-info';
        infoDiv.innerHTML = `
            <h4>☀️</h4>
            <p class="item-name">Bez okrycia</p>
            <p style="color: #666; font-size: 0.95em;">Na dworze jest wystarczająco ciepło!</p>
        `;
        resultsDiv.appendChild(infoDiv);
    }
}

function getWarmthStars(warmth) {
    const stars = ['🔵', '🔵', '🔵', '🔵', '🔵'];
    for (let i = 0; i < warmth; i++) {
        stars[i] = '🔴';
    }
    return stars.join('');
}

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
}

// Komunikat powitalny
setTimeout(() => {
    showMessage('Witaj! Podaj miasto i wybierz okazję, aby otrzymać rekomendację stroju 👔', 'info');
}, 500);

console.log('=== STYLAR - Załadowano ===');
console.log('Ubrań w bazie:', getAllClothes().length);
console.log('Gotowy do użycia!');

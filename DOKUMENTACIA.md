# Nodyne - Systém monitorovania ospalosti vodiča

## Prehľad projektu

Nodyne je webová aplikácia určená na monitorovanie a upozorňovanie vodiča pri detekcii ospalosti alebo nebezpečného naklonenia hlavy. Aplikácia využíva moderné webové technológie na komunikáciu so zariadením a vizualizáciu dát v reálnom čase.

## Technológie

- **Next.js 16** - React framework s App Router
- **React 19** - UI knižnica
- **TypeScript** - Typová bezpečnosť
- **Three.js** - 3D vizualizácia
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Web Serial API** - Komunikácia so zariadením

## Štruktúra aplikácie

Aplikácia obsahuje **dve hlavné stránky**:

### 1. Domovská stránka (Landing Page)
- Prezentácia produktu
- Prehľad funkcií
- Vizualizácia dát a výsledkov testov
- Sekcia s recenziami
- Kontaktný formulár

### 2. Dashboard (`/dashboard`)
Dashboard poskytuje rozhranie na monitorovanie zariadenia v reálnom čase:

#### Hlavné komponenty:
- **SerialConnectButton** - Pripojenie k zariadeniu cez Web Serial API
- **HeadVisualizer** - 3D vizualizácia hlavy s rotáciou v reálnom čase
- **DeviceStatusCard** - Status pripojenia zariadenia
- **AlertPanel** - Zobrazenie aktívnych upozornení
- **TelemetryPanel** - Telemetrické dáta (roll, pitch)
- **HistoryTable** - História udalostí a upozornení

## Web Serial API

Aplikácia využíva **Web Serial API** na komunikáciu so zariadením:
- Priame pripojenie k sériovému portu v prehliadači
- Čítanie telemetrických dát v reálnom čase
- Detekcia udalostí (Alert, System)
- Konfigurácia: 115200 baud

## 3D Vizualizácia

Využitie **@react-three/fiber** a **@react-three/drei**:
- Načítanie 3D modelu hlavy (GLTF formát)
- Rotácia modelu podľa roll a pitch hodnôt
- Dynamické osvetlenie pri upozorneniach
- Optimalizované pre výkon

## State Management

**Zustand store** obsahuje:
- Pripojenie k zariadeniu
- Roll/Pitch hodnoty
- Stav upozornení (alerting, alertReason)
- História udalostí
- Sériové port referencia

## Deployment

Aplikácia je pripravená na deployment na Vercel:
- Konfigurácia `.npmrc` s `legacy-peer-deps`
- Optimalizovaná production build
- Statické generovanie stránok
- Turbopack pre rýchlejšiu kompiláciu

## Vývoj

```bash
# Inštalácia závislostí
npm install

# Spustenie dev servera
npm run dev

# Build
npm run build

# Start production servera
npm start
```

## Hlavné features

✅ Detekcia ospalosti a nebezpečného naklonenia
✅ 3D vizualizácia v reálnom čase
✅ Web Serial API integrácia
✅ História udalostí
✅ Vizuálne a zvukové upozornenia
✅ Responzívny dizajn
✅ Dark mode podpora

---

*Stay awake. Stay alive.*

# 🏙️ SMARTCITY — Intelligent Urban Monitoring & Control Center

> **Important Note**: This project is built entirely using **HTML5 and CSS3** (No JavaScript, No Frameworks, No External Libraries).

---

## 🎯 Project Objective
**SMARTCITY** is a modern, high-tech, futuristic dashboard designed for urban monitoring and civic infrastructure control. It serves as a visual control center for city administrators to track traffic congestion, power grids, environmental parameters, public transit, emergency alerts, water distribution, and municipal services in real-time.

This project was built to demonstrate advanced HTML5 semantic structuring, modern CSS3 layout techniques (CSS Grid & Flexbox), CSS custom properties (variables), CSS-only state management (Dark Mode toggle & Mobile drawer), and CSS keyframe animations—without writing a single line of JavaScript.

---

## ✨ Features

- 🌙 **CSS-Only Dark Mode**: Seamless toggle between light and dark themes using pure CSS pseudo-selectors (`#theme-toggle:checked ~ .app-container`).
- 📱 **CSS-Only Mobile Navigation Drawer**: Responsive slide-out sidebar menu using checkbox hacks for mobile viewports.
- 🗺️ **CSS Vector City Map**: Stylized fake city map created using pure CSS Grid, dashed borders, location marker pins, and CSS hover popover tooltips.
- 💡 **Smart Street Light Visualizer**: Animated glowing street pole visual built with CSS gradients and keyframe pulsing animations.
- 🚦 **Road Traffic Progress Bars**: Pure HTML/CSS animated progress bars showing live road congestion status (OMR, GST Road, ECR, Anna Salai, Mount Road).
- 🚨 **Emergency Alert Cards**: Distinct status-coded emergency notification cards (`.critical`, `.warning`, `.info`).
- 🔔 **Interactive CSS Notifications Dropdown**: Pure HTML `<details>` and `<summary>` dropdown panel with zero JS dependencies.
- 📊 **8 Comprehensive Monitoring Dashboards**:
  1. `index.html` — Main Overview & Map
  2. `traffic.html` — Traffic Density & Signal Cycles
  3. `energy.html` — Microgrids, Solar Generation & Power Stations Table
  4. `environment.html` — AQI, PM2.5, Humidity, CO2 & Canopy Stats
  5. `water.html` — Reservoir Levels & Pipeline Leakage Alerts
  6. `transport.html` — Bus Fleet, Metro Status & Route Timetables
  7. `emergency.html` — 911 Incident Dispatch & Emergency Logs
  8. `services.html` — Civic Facilities Directory (Hospitals, Police, Fire, etc.)
  9. `login.html` — Clean Administrator Portal

---

## 🛠️ Technologies Used
- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<aside>`, `<article>`, `<section>`, `<table>`, `<details>`, `<summary>`).
- **CSS3**:
  - **Layout**: CSS Grid, Flexbox, Positioning, Box Model.
  - **State Management**: `:checked` selector trick for Dark Mode & Mobile Menu.
  - **Variables**: Dynamic HSL & Hex color system in `:root`.
  - **Animations**: `@keyframes pulse`, `@keyframes progress`, `@keyframes fadeIn`.
  - **Responsive Design**: Mobile-first media queries (`@media (max-width: 1024px)`, `@media (max-width: 768px)`, `@media (max-width: 480px)`).

---

## 📁 Project Structure

```text
SmartCity/
│
├── index.html           # Main Dashboard with CSS City Map & Stat Overview
├── traffic.html         # Traffic Monitoring & Road Progress Bars
├── energy.html          # Power Grid Consumption & Stations Table
├── environment.html     # AQI, Temperature & Ecological Metrics
├── water.html           # Water Management & Reservoir Status
├── transport.html       # Public Transit, Metro Lines & Bus Routes
├── emergency.html       # Emergency Dispatch & Alert Cards
├── services.html        # Civic Facilities Cards (Hospitals, Police, Fire)
├── login.html           # Administrator Portal Login Screen
│
├── css/
│   └── style.css        # Master Stylesheet (CSS Variables, Animations, Dark Mode)
│
└── README.md            # Project Documentation
```

---

## 🚀 How to Open and Run the Project

1. Download or clone this repository.
2. Open the `SmartCity` folder.
3. Double-click `index.html` to open the website directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari).
4. No web server, node module, or npm installation is required!

---

## 🎓 HTML Concepts Learned
1. **Semantic Hierarchy**: Using `<main>`, `<section>`, `<article>`, and `<header>` appropriately for screen reader accessibility and document outline.
2. **Interactive Elements Without JS**: Utilizing `<details>` and `<summary>` for native browser dropdowns.
3. **Form Elements**: Accessible input fields with `<label for="...">`, placeholders, required constraints, and accessible button types.
4. **Data Tabulation**: Clean tabular data structuring with `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>`.

---

## 🎨 CSS Concepts Learned
1. **CSS Custom Properties (Variables)**: Centralizing design tokens in `:root` for effortless color theme overrides.
2. **The Hidden Checkbox State Trick**: Using hidden `<input type="checkbox">` elements coupled with the sibling selector `~` to trigger layout changes (Dark mode & Mobile Drawer) purely with CSS!
3. **CSS Grid & Flexbox Hybrid Layouts**: Creating sticky headers, fixed sidebars, and responsive auto-fitting grid card matrices.
4. **Custom Progress Bars & Badges**: Creating sleek UI components using CSS gradients and `overflow: hidden`.
5. **Keyframe Animations & Micro-Interactions**: Smooth hover effects (`transform: translateY(-4px)`), pulsing glowing markers (`@keyframes pulse`), and card entrance fades (`@keyframes fadeIn`).

---

## 🔮 Future Improvements (When JavaScript is introduced)
- Live API integration for real-world AQI and weather data.
- Interactive Leaflet/OpenStreetMap integration.
- Real-time chart rendering (Chart.js) for historical trend visualization.

---

### 📜 Certification & Compliance
> **"This project is built entirely using HTML5 and CSS3."**

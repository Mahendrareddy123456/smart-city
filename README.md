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
  1. `SmartCity/index.html` — Main Overview & Map
  2. `SmartCity/traffic.html` — Traffic Density & Signal Cycles
  3. `SmartCity/energy.html` — Microgrids, Solar Generation & Power Stations Table
  4. `SmartCity/environment.html` — AQI, PM2.5, Humidity, CO2 & Canopy Stats
  5. `SmartCity/water.html` — Reservoir Levels & Pipeline Leakage Alerts
  6. `SmartCity/transport.html` — Bus Fleet, Metro Status & Route Timetables
  7. `SmartCity/emergency.html` — 911 Incident Dispatch & Emergency Logs
  8. `SmartCity/services.html` — Civic Facilities Directory (Hospitals, Police, Fire, etc.)
  9. `SmartCity/login.html` — Clean Administrator Portal

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

1. Open the `SmartCity` folder.
2. Double-click `index.html` (or `SmartCity/index.html`) to open the website directly in any modern web browser (Chrome, Firefox, Edge, Safari).
3. No web server or npm installation is required!

---

### 📜 Certification & Compliance
> **"This project is built entirely using HTML5 and CSS3."**

<div align="center">
  <br />
    <h1 align="center">MAX Studio 🐾</h1>
  <p align="center">
    <strong>Smart feeding. Intelligent hydration. Optical vision care.</strong>
    <br />
    An engineered multi-node hardware station integrating precision kibble portioning, an ESP32-CAM optical live stream (10.38.133.55), and ultrasonic smart water reservoir automation via Arduino and relay pump control.
  </p>

  <p align="center">
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer-Black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" /></a>
  </p>
</div>

---

## 🌟 Overview

**MAX Studio** is the flagship web interface and architectural dashboard for the MAX Smart Pet Station. Designed with an ultra-sleek, industrial aesthetic, the application provides real-time telemetry, remote actuator triggering, and synchronized surveillance across three hardware nodes:
1. **Smart Kibble Feeder Node** (`http://10.38.133.108`): IR boundary sensor mapping and servo auger dispensing.
2. **ESP32-CAM Vision Node** (`http://10.38.133.55`): OV2640 2MP optical video stream, GPIO 4 flash LED toggle, night vision mode, and snapshot logging.
3. **Smart Hydration Station Node**: HC-SR04 ultrasonic sonar depth measurement, Arduino microcontroller core, and 5V optocoupled relay for automatic water replenishment.

## ✨ Key Features

- **ESP32-CAM Live Portal (`10.38.133.55`)**: Dedicated navigation buttons and interactive video section. Toggle between real-time direct MJPEG stream (`:81/stream`) and AI-assisted surveillance simulation with bounding box tracking, night vision, and snapshot capture.
- **Ultrasonic Water Management**: Continuous depth telemetry via HC-SR04 ultrasonic sensor. Interactive cross-section reservoir visualizer with fluid dynamics and live distance readouts in centimeters.
- **Arduino Relay Pump Trigger**: 5V optical relay energizes a 12V submersible pump with auto-refill triggers when liquid levels drop below 25%.
- **Automated Feeding Engine**: Precision gram-level portion controls directly from the web interface.
- **Interactive System Blueprints**: Full technical CAD-style SVG schematic with interactive pinout callouts for all 3 hardware subsystems.
- **Command Center Dashboard**: Unified terminal with live switching between Feeder, Camera, and Water station nodes.
- **Premium Aesthetics**: Built with Tailwind CSS, deep blacks, warm bronze/orange accents, cybernetic cyan hydration hues, and Framer Motion micro-animations.

## 🛠️ Technology Stack

| Category | Technology |
| --- | --- |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Hardware Core** | ESP32-CAM (OV2640), Arduino MCU, HC-SR04, 5V Relay, Servo Auger |
| **Linting** | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) & TypeScript |

## 🌐 Network Device Architecture

| Node | Hardware | Protocol / Port | Target Address |
| --- | --- | --- | --- |
| **Vision Cam** | ESP32-CAM (AI-Thinker) | HTTP / MJPEG (Port 80/81) | `http://10.38.133.55` |
| **Feeder Controller** | ESP8266 / ESP32 | HTTP REST (Port 8080) | `http://10.38.133.108` |
| **Hydration Controller** | Arduino Nano (ATmega328P) | Digital Pins D8, D9, D10 | Subnet Serial/Mesh |

## 📂 Project Structure

```text
MAX-Studio/
├── public/                 # Static assets, camera captures & vector icons
│   ├── esp32_cam_feed.jpg  # Daytime camera capture asset
│   └── esp32_cam_night.jpg # Night vision capture asset
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation header with direct 10.38.133.55 & 10.38.133.108 links
│   │   ├── Hero.tsx           # Multi-node status landing hero
│   │   ├── ProjectStory.tsx   # Project mission statement
│   │   ├── HowItWorks.tsx     # 6-step hardware & software workflow
│   │   ├── Features.tsx       # Bento grid highlighting Feeder, Camera & Water modules
│   │   ├── CameraSection.tsx  # ESP32-CAM live stream, controls & telemetry (10.38.133.55)
│   │   ├── WaterModule.tsx    # Ultrasonic HC-SR04 depth sensor & Arduino relay station
│   │   ├── LiveControl.tsx    # Multi-node interactive terminal & live switcher
│   │   ├── Blueprint.tsx      # CAD schematic diagram with complete subsystem pinouts
│   │   ├── Team.tsx           # Engineering team roster
│   │   └── Footer.tsx         # Network endpoints and project metadata
│   ├── App.tsx             # Root layout orchestrator
│   └── index.css           # Global tokens & custom styling
└── package.json
```

## 🚀 Quick Start

1. **Clone repository:**
   ```bash
   git clone https://github.com/ShikharCodex/MAX-Studio.git
   cd MAX-Studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---
<p align="center">
  <b>Project Mentor:</b> Akanksha Tripathi Ma'am<br/>
  <i>Engineered by Shikha · Siddhi · Shikhar · Kartik. Crafted for modern pet care.</i>
</p>

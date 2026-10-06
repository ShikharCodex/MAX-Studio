<div align="center">
  <br />
    <h1 align="center">MAX Studio 🐾</h1>
  <p align="center">
    <strong>Smart feeding. Simple care.</strong>
    <br />
    An intelligently designed hardware system interface that completely automates your pet's feeding schedule. Precision engineering meets everyday convenience.
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

**MAX Studio** is the official web interface and architectural showcase for the MAX Smart Pet Feeder. Designed with a premium, glassmorphic aesthetic, the application provides a seamless integration of mechanical engineering and smart software. Watch how raw kibble transforms into a perfectly timed, accurately portioned meal through our beautifully animated UI.

## ✨ Key Features

- **Automated Feeding Engine**: Set precise schedules and gram-level portion controls directly from the web interface.
- **Real-Time Detection**: View live metrics powered by infrared sensors that map food levels continuously.
- **Acoustic Engineering**: Built to dispense silently to eliminate harsh rattling, ensuring a stress-free meal for your pet.
- **Interactive System Blueprints**: Explore how the hardware works through responsive, animated SVG technical diagrams.
- **Cloud Control**: Take command from anywhere. The cloud-synced web app keeps you connected to your pet's habits 24/7.
- **Premium Aesthetics**: Fully responsive UI leveraging Tailwind CSS, featuring deep dark modes, frosted glassmorphism, and buttery smooth Framer Motion animations.

## 🛠️ Technology Stack

| Category | Technology |
| --- | --- |
| **Framework** | [React 18](https://react.dev/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linting** | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) & ESLint |

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShikharCodex/MAX-Studio.git
   cd MAX-Studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
MAX-Studio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and global media
│   ├── components/         # Reusable React components
│   │   ├── FeederVisual.tsx   # Core SVG animations for the feeder
│   │   ├── Hero.tsx           # Premium landing hero section
│   │   ├── HowItWorks.tsx     # Animated zig-zag scrolling layout
│   │   ├── LiveControl.tsx    # Dashboard for active feeder control
│   │   └── ...
│   ├── App.tsx             # Main application layout and routing
│   ├── index.css           # Global Tailwind directives and custom variables
│   └── main.tsx            # React root injection
├── tailwind.config.js      # Tailwind theme configuration
├── vite.config.ts          # Vite build configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

MAX Studio uses a carefully curated color palette tailored for an industrial yet organic aesthetic:
- **Background**: Deep rich blacks (`#0a0a0a`)
- **Accents**: Earthy bronze/gold (`#d97d54`) and muted olive greens (`#4f6c58`)
- **Typography**: Clean, geometric sans-serif fonts optimized for technical readouts and elegant headers.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/ShikharCodex/MAX-Studio/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
<p align="center">
  <i>Crafted with ❤️ for modern pet care.</i>
</p>

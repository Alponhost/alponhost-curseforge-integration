# AlponHost – CurseForge API Integration

This project provides a structured and scalable integration with the official CurseForge API. It is designed to enable efficient discovery and retrieval of Minecraft mods and modpacks within the AlponHost platform.

---

## 🚀 Purpose

To improve the modding experience by allowing users to search, view, and access Minecraft mods and modpacks through a clean, centralized API layer.

---

## 🧱 Architecture

The project follows a layered architecture:

Client → Routes → Services → API Client → CurseForge API → Response

This ensures separation of concerns and maintainability.

---

## 📁 Project Structure
src/
api/         # CurseForge API client
services/    # Business logic layer
routes/      # API endpoints
utils/       # Helpers (cache, etc.)
config/        # Configuration
docs/          # Technical documentation
---

## 🔌 API Endpoints

### Search Mods
Returns a list of mods based on the search query.

---

## ⚙️ Setup

### 1. Install dependencies
npm install

### 2. Environment variables

Create a `.env` file:
CURSEFORGE_API_KEY=your_api_key_here
PORT=3000

---

## ▶️ Run project
node src/app.js

or with nodemon:
npx nodemon src/app.js

---

## Architecture Overview

The system follows a layered architecture:

Client → API Routes → Service Layer → API Client → CurseForge API → Response Formatter

### Layers

- Routes: Handle incoming HTTP requests
- Services: Business logic and data transformation
- API Client: External CurseForge API communication
- Utilities: Optional caching and helpers

This separation ensures scalability and maintainability.

## 🔒 Security & Compliance

- Uses official CurseForge API only
- No redistribution of mod files
- API keys are stored securely via environment variables
- No scraping or unauthorized data access

---

## 🧠 Notes

This project is designed for integration within the AlponHost ecosystem and is structured to be scalable for future features such as caching, pagination, and rate limiting.

---

## 📜 License

MIT

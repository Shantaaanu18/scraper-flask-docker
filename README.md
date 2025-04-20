#Web Scraper 

A friendly tool that automates website data collection for you*

 Why Web Scraper
- **No coding needed** - Works out of the box
- **Handles JavaScript sites** - Unlike simple scrapers
- **Lightweight API** - Get your data in JSON format
- **Docker-ready** - Runs anywhere with one command

## 🛠 Tech Stack

**Core Components**:
- **Docker** (containerization)  
- **Puppeteer** (browser automation)  
- **Chromium** (headless browsing)  
- **Node.js 18** (scraper runtime)  
- **Python 3.10 + Flask** (API server)  

*All dependencies are auto-installed – just Docker required on your machine!*

**Quick Start (60 Seconds!)**

``bash
# 1. Run with Docker (easiest way)
docker run -p 5000:5000 \
  -e SCRAPE_URL="https://example.com" \
  shaaaantanu/web-scraper:latest

# 2. Access your data:
curl http://localhost:5000
# Or open in browser: http://localhost:5000

``To Pull my code
# 1. Pull my ready-to-use image (no building needed)
docker pull shaaaantanu/web-scraper:latest

# 2. Run it with your target website
docker run -p 5000:5000 \
  -e SCRAPE_URL="https://news.ycombinator.com" \
  shaaaantanu/web-scraper:latest

# 3. Access your data
curl http://localhost:5000
# or open http://localhost:5000 in browser

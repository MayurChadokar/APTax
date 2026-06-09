# ApTaxLedger Solution - Premium Corporate Website

A modern, professional corporate website built with **Next.js (App Router)** for accounting, outsourcing, consulting, and IT services. This project was migrated from Vite/React to provide superior SEO, performance, and server-side capabilities.

## ✨ Core Features

- **🚀 Page Architecture**: Fully migrated to Next.js App Router for optimal routing and performance.
- **🎨 Premium UI/UX**: Professional white, black, and deep red color palette with modern typography and animations.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile views.
- **📧 Advanced Lead Gen**: Custom Nodemailer API route with professional HTML email templates for automated responses.
- **🌓 Theme Management**: Persistent light/dark mode support via custom React Context.
- **⚡ SEO Ready**: Optimized metadata and semantic HTML structure for search engine visibility.

## 🛠 Tech Stack

- **Next.js 16** - React Framework for the Web
- **React 18** - UI Component Library
- **Nodemailer** - Enterprise-grade server-side email handling
- **CSS3** - Modern styling with Global & Modular CSS variables
- **Font Awesome 6** - Vector icons (CDN integration)
- **Google Fonts** - Poppins (Headings) and Inter (Body)

## 🚀 Getting Started

### 1. Installation
```bash
git clone <repository-url>
cd Infograins
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:
```env
# Gmail SMTP Configuration
# NOTE: Use a 16-character App Password, not your regular password
SMTP_USER=aptaxledger@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

### 3. Development Server
```bash
npm run dev
```
Access the site at [http://localhost:3000](http://localhost:3000).

### 4. Production Deployment
```bash
npm run build
npm run start
```

## 📂 Project Structure

```
ApTaxLedger/
├── src/
│   ├── app/                # Main Routes & API
│   │   ├── api/contact/    # Nodemailer handler
│   │   ├── about/          # About Us page
│   │   ├── services/       # Services page
│   │   ├── resources/      # Resources page
│   │   ├── contact/        # Contact page
│   │   ├── careers/        # Careers page
│   │   └── layout.js       # Root Layout
│   ├── components/         # Modular Components
│   │   ├── home/           # Hero, WhoWeAre, WhyChooseUs, etc.
│   │   ├── about/          # MissionVision, TeamSection, etc.
│   │   ├── common/         # Navbar, Footer, Topbar
│   │   └── ui/             # Reusable UI (Modals, Carousels)
│   ├── context/            # Global Context (Theme)
│   ├── data/               # Static Data Modules
│   └── styles/             # CSS Global and Theme variables
└── public/                 # Static Assets
```

## �️ Page Breakdown

- **Home Page**: Features a high-impact Hero section, Who We Are summary, and dynamic Industry grids.
- **About Us**: Focuses on company Mission, Vision, and professional Global Presence.
- **Services**: Detailed breakdown of 11+ professional accounting and consulting services.
- **Resources**: Central hub for blog posts, newsletters, and case studies.
- **Contact Us**: Interactive form with real-time validation and Nodemailer integration.
- **Careers**: Vacancy listings with application modal functionality.

## 🎨 Design System

| Variable | HEX Code | Usage |
| --- | --- | --- |
| Primary Red | `#ef4444` | CTAs, Highlights, Headers |
| Dark Red | `#991b1b` | Gradients, Hovers |
| Deep Navy | `#0f172a` | Headers, Dark Theme backgrounds |
| Pure White | `#ffffff` | Primary text and backgrounds |

## 📬 API: Nodemailer Integration
The project features a high-reliability server-side email system located at `src/app/api/contact/route.js`.
- **Automatic User Response**: Sends a beautifully styled HTML "Thank You" email to the user.
- **Owner Notification**: Instantly forwards lead details to `aptaxledger@gmail.com`.
- **Error Handling**: Detailed logging for SMTP authentication and configuration issues.

---

**© 2026 ApTaxLedger Solution. All Rights Reserved.**
*Think Beyond IT.*

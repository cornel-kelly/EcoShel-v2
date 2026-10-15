# Ecoshel — Direct Verified Property Rentals in Greater Accra

Frictionless, verified long-term & monthly home rentals across Greater Accra, Ghana. Direct verified hosts with transparent pricing in GH₵ and zero speculative agent lockups.

---

## Features

- **Direct Verified Rentals**: Browse verified listings in East Legon, Cantonments, Airport Residential, Osu, Labone, Dzorwulu, and across Greater Accra.
- **Transparent Pricing**: All listings display verified monthly rental pricing in GH₵ with advance terms (6 months, 1 year).
- **Interactive Mapping**: Interactive Ghana location picking powered by Leaflet and OpenStreetMap.
- **Owner & Landlord Portal**: Dedicated dashboard for landlords and property managers to track inquiries, manage listings, and view lease statements.
- **Global Auth State**: Role-based access (tenant, owner, agent) managed with React Context (`AuthContext`).
- **File-System Routing**: Native Next.js App Router file-system structure with dedicated pages, parameters, and metadata.
- **Responsive & Accessible**: Clean mobile-first design with responsive drawers, bottom navigation, and dark/light theme switching.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Material Symbols & Google Fonts (Plus Jakarta Sans)
- **Maps**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **CI/CD**: GitHub Actions

---

## Project Structure

```text
Ecoshel-main/
├── app/
│   ├── api/
│   │   └── listings/
│   │       └── route.ts            # REST API route for property listings
│   ├── components/                 # Reusable UI components
│   │   ├── Header.tsx              # Global navigation header & theme switcher
│   │   ├── Footer.tsx              # Site footer with neighborhood links
│   │   ├── MobileNav.tsx           # Mobile bottom navigation bar
│   │   ├── Home.tsx                # Rental search, filter & grid component
│   │   ├── PropertyDetail.tsx      # Comprehensive property details & booking
│   │   ├── ListProperty.tsx        # Multi-step property listing & map pin form
│   │   ├── OwnerDashboard.tsx      # Owner & landlord management portal
│   │   ├── UserSettings.tsx        # Profile, payouts, notification preferences
│   │   ├── Login.tsx               # Auth form dialog & standalone view
│   │   └── MapLocationPicker.tsx   # Interactive Leaflet map picker
│   ├── context/
│   │   └── AuthContext.tsx         # Global auth state provider (useAuth)
│   ├── find-a-rental/page.tsx      # Rental discovery page (/find-a-rental)
│   ├── property-detail/[id]/page.tsx # Dynamic property detail (/property-detail/:id)
│   ├── list-your-property/page.tsx # Add new listing page (/list-your-property)
│   ├── owner-dashboard/page.tsx    # Owner dashboard page (/owner-dashboard)
│   ├── settings/page.tsx           # Account settings page (/settings)
│   ├── login/page.tsx              # Login page (/login)
│   ├── layout.tsx                  # Root layout with fonts, metadata & AuthProvider
│   ├── globals.css                 # Global CSS variables & Tailwind directives
│   └── page.tsx                    # Root redirect to /find-a-rental
├── __tests__/                      # Unit tests
├── __mocks__/                      # Jest style & file mocks
├── .github/workflows/ci.yml        # Continuous integration pipeline
├── package.json
├── tailwind.config.cjs
├── postcss.config.mjs
└── jest.config.cjs
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or later (Node 20 LTS recommended)
- **npm**: v9 or later

### Installation

1. **Clone repository**:
   ```bash
   git clone <repository-url>
   cd Ecoshel-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment**:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `npm run build` | Builds production-optimized Next.js application |
| `npm run start` | Starts Next.js production server |
| `npm run lint` | Runs ESLint over project files |
| `npm test` | Runs Jest unit test suite |

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

---

## License

Proprietary — © 2025 Ecoshel Properties Ghana Ltd. All rights reserved.

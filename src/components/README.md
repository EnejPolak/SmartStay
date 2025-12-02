# Components Structure

Komponente so organizirane v ločene mape glede na to, kje se uporabljajo. To omogoča lažje iskanje in vzdrževanje.

## 📁 Struktura

```
src/components/
├── home/              # Komponente za Home stran (/)
│   ├── HeroSection.tsx
│   ├── WhatIsSmartxStay.tsx
│   ├── ProblemsSection.tsx
│   ├── FeaturesOverviewSection.tsx
│   ├── OurHostsSection.tsx
│   ├── LocalExperienceSection.tsx
│   └── CTAContactSection.tsx
│
├── about/             # Komponente za About stran (/about)
│   └── AboutMap.tsx
│
├── for-hosts/         # Komponente za For Hosts stran (/for-hosts)
│   ├── StandOutSection.tsx
│   ├── HostMeansMoreSection.tsx
│   ├── GiveGuestsEverythingSection.tsx
│   ├── SmartxStayCertifiedSection.tsx
│   ├── CommunitySection.tsx
│   └── FinalCTASection.tsx
│
├── for-guests/        # Komponente za For Guests stran (/for-guests)
│   ├── EverythingYouNeedSection.tsx
│   ├── FindYourStaySection.tsx
│   ├── OurStaysSection.tsx
│   └── SmartxStayMap.tsx
│
├── blog/              # Komponente za Blog (/blog)
│   ├── BlogHero.tsx
│   ├── BlogPostCard.tsx
│   ├── BlogPostContent.tsx
│   └── BlogPostHeader.tsx
│
└── shared/            # Komponente, ki se uporabljajo na več straneh
    ├── Navbar.tsx
    └── Footer.tsx
```

## 📝 Kako uporabljati

### Import iz organiziranih map:

```typescript
// Home komponente
import HeroSection from '@/components/home/HeroSection';

// About komponente
import AboutMap from '@/components/about/AboutMap';

// For Hosts komponente
import StandOutSection from '@/components/for-hosts/StandOutSection';

// For Guests komponente
import FindYourStaySection from '@/components/for-guests/FindYourStaySection';

// Blog komponente
import BlogHero from '@/components/blog/BlogHero';

// Shared komponente
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
```

## 🎯 Kje kaj najti

- **Home stran komponente** → `src/components/home/`
- **About stran komponente** → `src/components/about/`
- **For Hosts stran komponente** → `src/components/for-hosts/`
- **For Guests stran komponente** → `src/components/for-guests/`
- **Blog komponente** → `src/components/blog/`
- **Skupne komponente** (Navbar, Footer) → `src/components/shared/`

## 🔄 Dodajanje novih komponent

Ko dodajate novo komponento:
1. Ugotovite, za katero stran je namenjena
2. Dodajte jo v ustrezno mapo (`home/`, `about/`, `for-hosts/`, `for-guests/`, `blog/`, ali `shared/`)
3. Uporabite absolutni import z `@/components/[mapa]/[Komponenta]`


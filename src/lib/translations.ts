export interface Translation {
  // Demo page
  hero: {
    platform: string;
    title: string;
    titleHighlight: string;
    titleSubtitle: string;
    description: string;
    bookCall: string;
    seeFeatures: string;
  };
  features: Array<{
    id: string;
    title: string;
    desc: string;
    bullets: string[];
  }>;
  finalCTA: {
    title: string;
    description: string;
    bookCall: string;
  };
  
  // Home page
  homeHero: {
    title: string;
    subtitle: string;
    subtitleHighlight: string;
    description: string;
    bookCall: string;
    seeDemo: string;
  };
  
  // Navbar
  navbar: {
    home: string;
    about: string;
    demo: string;
    pricing: string;
    blog: string;
    contact: string;
  };
  
  // Footer
  footer: {
    tagline: string;
    quickLinks: string;
    connectWithUs: string;
    copyright: string;
  };
  
  // Contact page
  contact: {
    title: string;
    subtitle: string;
    pageTitle: string;
    pageDescription: string;
    heroTitle: {
      contact: string;
      us: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    company: {
      name: string;
      tagline: string;
      description: string;
    };
    contactMethods: {
      phone: {
        title: string;
        number: string;
        hours: string;
      };
      email: {
        title: string;
        address: string;
        response: string;
      };
      location: {
        title: string;
        city: string;
        availability: string;
      };
      hours: {
        title: string;
        weekdays: string;
        weekend: string;
      };
    };
    social: {
      title: string;
    };
    formStates: {
      loading: {
        title: string;
        description: string;
      };
      success: {
        title: string;
        description: string;
        timer: string;
      };
      error: {
        title: string;
        description: string;
        retry: string;
      };
    };
    formLabels: {
      subject: string;
      subjectOptions: {
        general: string;
        demo: string;
        pricing: string;
        support: string;
        partnership: string;
        other: string;
      };
    };
    formHeader: {
      title: string;
      description: string;
      subtitle: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
      selectSubject: string;
    };
    submitButton: {
      sending: string;
    };
  };
  
  // Pricing page
  pricing: {
    title: string;
    subtitle: string;
    annual: string;
    monthly: string;
    save: string;
    requestQuote: string;
    trustBadge: string;
    fairPricing: string;
    plans: {
      smartxStart: {
        name: string;
        units: string;
        description: string;
        features: string[];
        setup: string;
      };
      smartxPlus: {
        name: string;
        units: string;
        description: string;
        features: string[];
        setup: string;
        popular: string;
      };
      smartxPro: {
        name: string;
        units: string;
        description: string;
        features: string[];
        setup: string;
      };
      smartxEnterprise: {
        name: string;
        units: string;
        description: string;
        features: string[];
        setup: string;
        custom: string;
        customDescription: string;
      };
    };
    features: {
      title: string;
    };
    trust: {
      title: string;
      description: string;
      consultation: string;
      email: string;
    };
  };
  
  // MadEmotionsSection
  madEmotions: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    painPoints: Array<{
      id: number;
      title: string;
      copy: string;
      stat: string;
      color: string;
    }>;
  };
  
  // SolutionSection
  solution: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
      tagline: string;
    }>;
  };
  
  // DemoFeaturesSection
  demoFeatures: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: Array<{
      title: string;
    }>;
    ctaText: string;
  };
  
  // ReviewsSection
  reviews: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    noReviews: string;
    retryButton: string;
  };
  
  // HowItWorksSection
  howItWorks: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
      time: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  
  // CookieBanner
  cookieBanner: {
    title: string;
    description: string;
    accept: string;
    decline: string;
  };
  
  // ContactForm
  contactForm: {
    thankYou: string;
    responseTime: string;
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
  };
  
  // AboutUs
  aboutUs: {
    title: string;
    subtitle: string;
    founder: string;
    teamMembers: Array<{
      name: string;
      role: string;
      description: string;
    }>;
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  
  // ThankYou
  thankYou: {
    title: string;
    subtitle: string;
    description: string;
    returnHome: string;
    exploreDemo: string;
  };
  
  // Blog
  blog: {
    title: string;
    subtitle: string;
    featuredArticle: string;
    minRead: string;
    teamName: string;
    readMore: string;
    noPosts: string;
    noPostsDescription: string;
    retry: string;
  };
  
  // PreviewBlog
  previewBlog: {
    notFound: string;
    notFoundDescription: string;
    backToBlog: string;
    shareArticle: string;
  };
}

export const translations: Record<string, Translation> = {
  EN: {
    hero: {
      platform: "Smart Stay Platform",
      title: "Clear guest guides.",
      titleHighlight: " Fewer questions.",
      titleSubtitle: "Happier stays.",
      description: "Share everything guests need to know — from Wi‑Fi to local tips — in a beautiful, mobile‑first guide that reduces support requests and improves guest satisfaction.",
      bookCall: "Book a Call",
      seeFeatures: "See Features"
    },
    features: [
      { id: "welcome", title: "Welcome Message", desc: "A warm, personal greeting upon arrival. The perfect first impression without extra effort.", bullets: ["Personalised hello", "Arrival tips", "Instant comfort"] },
      { id: "checkin", title: "Check-in / Check-out & Wi-Fi", desc: "Clear arrival/departure instructions and Wi-Fi details in one place (including copy button).", bullets: ["One-tap Wi‑Fi copy", "Directions & times", "No confusion"] },
      { id: "rules", title: "House Rules & Instructions", desc: "Simple, practical guidelines for a peaceful stay without misunderstandings.", bullets: ["Quiet hours", "Appliance guides", "No guesswork"] },
      { id: "info", title: "Additional Information", desc: "Breakfast, sauna, parking… little details that make a big difference.", bullets: ["Breakfast times", "Parking & sauna", "Small but vital"] },
      { id: "reservations", title: "Reservations & Extras", desc: "Book a massage, bike rental, restaurant table, or purchase local goods – in one click.", bullets: ["One‑click add‑ons", "Upsell ready", "Instant booking"] },
      { id: "food", title: "Local Cuisine & Bars", desc: "Closest and best places with direct links and directions.", bullets: ["Top picks", "Open hours", "Quick directions"] },
      { id: "activities", title: "Activities & Attractions", desc: "Tours, events, landmarks, and parking – all with navigation.", bullets: ["Tours & tickets", "Parking info", "Maps ready"] },
      { id: "routes", title: "Hiking & Cycling Routes", desc: "Google Maps integration; guests always know where and how to get there.", bullets: ["GPX / Maps", "Clear difficulty", "Offline friendly"] },
      { id: "services", title: "Nearby Services", desc: "Bakeries, shops, pharmacies, taxis, emergency contacts – quickly and safely accessible.", bullets: ["Essentials nearby", "Emergency ready", "Trustworthy"] },
      { id: "contact", title: "Contact", desc: "Host just one click away. Call or message without hassle.", bullets: ["One-tap call", "WhatsApp/SMS", "Always reachable"] },
      { id: "reviews", title: "Reviews", desc: "End-of-stay reminder; get more reviews with less effort.", bullets: ["Smart reminder", "Direct links", "More 5★"] }
    ],
    finalCTA: {
      title: "Book a Free Call",
      description: "See how Smart Stay reduces questions and elevates guest experience in minutes.",
      bookCall: "Book a Call"
    },
    homeHero: {
      title: "Smart",
      subtitle: "Transform Guest Experience with",
      subtitleHighlight: "Digital Innovation",
      description: "Stop endless guest questions. Create seamless digital guides with house rules, local recommendations, and instant support.",
      bookCall: "SCHEDULE CALL",
      seeDemo: "Watch 2min Demo"
    },
    navbar: {
      home: "Home",
      about: "About Us",
      demo: "Demo",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact"
    },
    footer: {
      tagline: "Revolutionizing your stay experience with smart technology and premium comfort.",
      quickLinks: "Quick Links",
      connectWithUs: "Connect With Us",
      copyright: "© 2025 SmartStay. All Rights Reserved."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      pageTitle: "Contact - SmartStay",
      pageDescription: "Get in touch with us. We answer your questions about SmartStay solutions for digital hospitality experiences.",
      heroTitle: {
        contact: "Contact",
        us: "Us"
      },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message"
      },
      company: {
        name: "SmartxStay",
        tagline: "Digital Solutions for Rental Properties",
        description: "We help apartment and house rental owners create better guest experiences with smart digital guides. Our mission is to reduce guest questions and make property management effortless for owners."
      },
      contactMethods: {
        phone: {
          title: "Phone",
          number: "+386 69 415 493",
          hours: "Mon-Fri: 9:00 - 17:00"
        },
        email: {
          title: "Email",
          address: "info@qr-space.si",
          response: "Response within 24h"
        },
        location: {
          title: "Location",
          city: "Ljubljana, Slovenia",
          availability: "Available throughout Slovenia"
        },
        hours: {
          title: "Working Hours",
          weekdays: "Mon-Fri: 9:00 - 17:00",
          weekend: "Sat-Sun: By appointment"
        }
      },
      social: {
        title: "Follow Us"
      },
      formStates: {
        loading: {
          title: "Sending your message...",
          description: "Please wait while we process your request."
        },
        success: {
          title: "Message Sent!",
          description: "Thank you! Your message has been sent successfully. We will get back to you as soon as possible.",
          timer: "Form will reappear in a few seconds..."
        },
        error: {
          title: "Oops! Something went wrong",
          description: "Oops! Something went wrong. Please try again or contact us directly.",
          retry: "Try Again"
        }
      },
      formLabels: {
        subject: "Subject *",
        subjectOptions: {
          general: "General Inquiry",
          demo: "Product Demo",
          pricing: "Pricing & Packages",
          support: "Technical Support",
          partnership: "Partnership",
          other: "Other"
        }
      },
      formHeader: {
        title: "Send us a message",
        description: "Fill out the form below and we'll get back to you as soon as possible.",
        subtitle: "Your inquiry is important to us."
      },
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        message: "Describe your question or needs...",
        selectSubject: "Select subject"
      },
      submitButton: {
        sending: "Sending Message..."
      }
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the perfect plan for your property portfolio. Scale effortlessly as you grow.",
      annual: "Annual",
      monthly: "Monthly",
      save: "Save 10%",
      requestQuote: "Request a Quote",
      trustBadge: "Trusted by 120+ Properties Worldwide",
      fairPricing: "💡 Fair & Flexible: All prices are starting points. We customize every solution to fit your exact needs.",
      plans: {
        smartxStart: {
          name: "SmartxStart",
          units: "(1 – 3 units)",
          description: "For small property owners with 1 to 3 units",
          features: [
            "Secure hosting on fast servers",
            "Regular backups & updates",
            "Uninterrupted platform operation without ads",
            "Technical support from our team",
            "Continuous improvements and new features"
          ],
          setup: "from 450€"
        },
        smartxPlus: {
          name: "SmartxPlus",
          units: "(4 – 7 units)",
          description: "Ideal for medium-sized providers with multiple units",
          features: [
            "Everything in SmartxStart",
            "Extended scalability for more guests",
            "More storage and capacity",
            "Customizable features depending on needs",
            "License for up to 7 units"
          ],
          setup: "from 590€",
          popular: "MOST POPULAR"
        },
        smartxPro: {
          name: "SmartxPro",
          units: "(8 – 10 units)",
          description: "For larger property owners with 8 to 10 units",
          features: [
            "Everything in SmartxPlus",
            "Optimized performance for higher usage",
            "Priority support",
            "Advanced management and analytics features",
            "License for up to 10 units"
          ],
          setup: "from 790€"
        },
        smartxEnterprise: {
          name: "SmartxEnterprise",
          units: "(more than 10 units)",
          description: "For hotels and large accommodation providers",
          features: [
            "All benefits of SmartxPro",
            "Tailored integrations",
            "Dedicated account manager",
            "Unlimited scalability",
            "Fully customized licensing and pricing"
          ],
          setup: "custom",
          custom: "custom",
          customDescription: "(based on scope and requirements)"
        }
      },
      features: {
        title: "What's included:"
      },
      trust: {
        title: "Still have questions?",
        description: "Our team is here to help you choose the perfect plan and answer any questions.",
        consultation: "Schedule Free Consultation",
        email: "Email Us Directly"
      }
    },
    reviews: {
      title: "What our",
      titleHighlight: "partners say",
      subtitle: "Real feedback from property owners who transformed their guest experience with SmartStay",
      noReviews: "No reviews available at the moment.",
      retryButton: "Try Again"
    },
    howItWorks: {
      title: "From setup to success",
      titleHighlight: "in under a month",
      subtitle: "Three simple steps. Zero technical knowledge required. Maximum results.",
      steps: [
        {
          title: "Share your property details",
          description: "Tell us about your property in a quick 10-minute call. WiFi passwords, house rules, local favorites—we handle the rest.",
          time: "30 minutes of your time"
        },
        {
          title: "We build your digital guide",
          description: "Our team creates a beautiful, mobile-optimized guide with all your property information. No work required from you.",
          time: "Built in under a month"
        },
        {
          title: "Launch and enjoy the results",
          description: "Your digital guide goes live. Guests get instant answers, you get peace of mind. Start seeing results immediately.",
          time: "Results from day one"
        }
      ],
      ctaTitle: "Ready to transform your guest experience?",
      ctaDescription: "Join hundreds of property owners who've already eliminated guest questions with SmartStay.",
      ctaButton: "Get Started Today"
    },
    cookieBanner: {
      title: "We use cookies to improve your experience",
      description: "We use cookies and similar technologies to help personalize content, provide a better experience, and analyze our traffic. By clicking \"Accept\", you consent to our use of cookies for marketing purposes.",
      accept: "Accept",
      decline: "Decline"
    },
    contactForm: {
      thankYou: "Thank You!",
      responseTime: "We'll get back to you within 24 hours.",
      name: "Name *",
      email: "Email *",
      company: "Company",
      message: "Message *",
      submit: "Send Message",
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        company: "Your company",
        message: "Tell us about your project..."
      }
    },
    aboutUs: {
      title: "Meet the SmartxStay Team",
      subtitle: "The people behind your next-level guest experience!",
      founder: "FOUNDER",
      teamMembers: [
        {
          name: "Hana",
          role: "Co-Founder",
          description: "Visionary leader focused on crafting exceptional guest experiences and shaping the future of hospitality technology."
        },
        {
          name: "Nik",
          role: "Co-Founder",
          description: "Product strategist driving growth and innovation, ensuring SmartStay stays ahead of industry trends and user needs."
        },
        {
          name: "Eva",
          role: "Design & Marketing",
          description: "Creative force behind our brand identity and user experience, with an exceptional eye for aesthetics and compelling communication."
        }
      ],
      cta: {
        title: "Want to work with us?",
        description: "Ready to transform your property into an unforgettable experience? Let's create something amazing together.",
        button: "Get in touch"
      }
    },
    thankYou: {
      title: "Thank You!",
      subtitle: "We've received your demo request and will be in touch shortly.",
      description: "Our team will contact you within 24 hours to schedule your personalized demo and show you how SmartStay can transform your guest experience.",
      returnHome: "Return to Home",
      exploreDemo: "Explore our demo →"
    },
    blog: {
      title: "SmartStay Blog",
      subtitle: "Insights, tips, and stories from the hospitality industry",
      featuredArticle: "Featured Article",
      minRead: "min read",
      teamName: "SmartStay Team",
      readMore: "Read More",
      noPosts: "No posts found",
      noPostsDescription: "We couldn't find any posts matching your criteria. Try adjusting your filters or check back later.",
      retry: "Try Again"
    },
    previewBlog: {
      notFound: "Blog Post Not Found",
      notFoundDescription: "The blog post you're looking for doesn't exist.",
      backToBlog: "Back to Blog",
      shareArticle: "Share this article:"
    },
    madEmotions: {
      title: "Stop losing money on",
      titleHighlight: "endless guest questions",
      subtitle: "Property owners waste 270+ hours per season answering the same questions. SmartStay eliminates this completely.",
      painPoints: [
        {
          id: 1,
          title: '"WiFi password?" at 2AM',
          copy: "Midnight calls for basic information destroy your work-life balance. You shouldn't have to repeat the same answers for every visit.",
          stat: "270+ hours wasted per season",
          color: "#dc2626"
        },
        {
          id: 2,
          title: "Bad reviews = lost revenue",
          copy: "Frustrated guests leave bad reviews when they can't find information. One 1-star review can cost you future bookings.",
          stat: "€3,000+ lost per bad review",
          color: "#ea580c"
        },
        {
          id: 3,
          title: "Always on, never off",
          copy: "Being available 24/7 for guest questions creates constant stress. Your property business should be passive, not exhausting.",
          stat: "No work-life balance",
          color: "#d97706"
        },
        {
          id: 4,
          title: "Guests don't read emails",
          copy: "Pre-arrival emails have low open rates. Guests still arrive with the same questions.",
          stat: "Information doesn't reach guests",
          color: "#e11d48"
        },
        {
          id: 5,
          title: "Check-in/check-out confusion",
          copy: "Unclear steps trigger avoidable calls and delays. Clear guidelines reduce friction for everyone.",
          stat: "Avoidable handover delays",
          color: "#b91c1c"
        },
        {
          id: 6,
          title: "Where's parking/trash/AC?",
          copy: "Micro-questions interrupt your day and multiply with every booking. Centralize answers once.",
          stat: "Constant micro-interruptions",
          color: "#c2410c"
        },
        {
          id: 7,
          title: "Local recommendations?",
          copy: "Unstructured advice leads to mediocre experiences and more follow-up questions. Curate what's actually important nearby.",
          stat: "Lower guest satisfaction",
          color: "#b45309"
        },
        {
          id: 8,
          title: "Maintenance and emergencies",
          copy: "Without simple instructions, small problems become urgent calls. Standardize fixes before problems escalate.",
          stat: "Unnecessary support calls",
          color: "#be185d"
        }
      ]
    },
    solution: {
      title: "SmartStay solves this",
      titleHighlight: "automatically",
      subtitle: "One digital guide eliminates 95% of guest questions while you sleep",
      features: [
        {
          title: "Instant answers, 24/7",
          description: "Guests find WiFi passwords, house rules, and local recommendations instantly. No more 2AM interruptions to your family time.",
          tagline: "Get your life back"
        },
        {
          title: "Focus on what matters",
          description: "Stop answering the same questions repeatedly. Spend time growing your business or enjoying life while guests help themselves.",
          tagline: "Work smarter, not harder"
        },
        {
          title: "Set it and forget it",
          description: "Once set up, SmartStay runs automatically. No maintenance, no updates, no technical headaches. Pure passive income.",
          tagline: "True automation"
        }
      ]
    },
    demoFeatures: {
      badge: "FEATURES",
      title: "Everything guests need",
      titleHighlight: "in one place",
      subtitle: "From WiFi passwords to local recommendations, SmartStay covers every aspect of the guest experience.",
      features: [
        {
          title: "Welcome Message"
        },
        {
          title: "Check-in / Check-out & Wi-Fi"
        },
        {
          title: "House Rules & Instructions"
        },
        {
          title: "Additional Information"
        },
        {
          title: "Reservations & Extras"
        },
        {
          title: "Local Cuisine & Bars"
        },
        {
          title: "Activities & Attractions"
        },
        {
          title: "Hiking & Cycling Routes"
        },
        {
          title: "Nearby Services"
        },
        {
          title: "Contact"
        },
        {
          title: "Reviews"
        }
      ],
      ctaText: "Book a Call"
    }
  },
  SL: {
    hero: {
      platform: "Smart Stay Platform",
      title: "Jasni vodiči za goste.",
      titleHighlight: " Manj vprašanj.",
      titleSubtitle: "Srečnejši obiski.",
      description: "Delite vse, kar gostje potrebujejo vedeti — od Wi-Fi do lokalnih nasvetov — v lepem, mobilno prilagojenem vodiču, ki zmanjšuje zahteve za podporo in izboljšuje zadovoljstvo gostov.",
      bookCall: "Naroči klic",
      seeFeatures: "Oglej si funkcije"
    },
    features: [
      { id: "welcome", title: "Pozdravno sporočilo", desc: "Topel, oseben pozdrav ob prihodu. Popoln prvi vtis brez dodatnega truda.", bullets: ["Osebni pozdrav", "Nasveti za prihod", "Takojšnja udobnost"] },
      { id: "checkin", title: "Prijava / Odjava & Wi-Fi", desc: "Jasne navodila za prihod/odhod in podrobnosti Wi-Fi na enem mestu (vključno s kopiranjem).", bullets: ["Kopiranje Wi-Fi z enim dotikom", "Navodila in časi", "Brez zmede"] },
      { id: "rules", title: "Hišni pravilnik & Navodila", desc: "Preproste, praktične smernice za miren obisk brez nesporazumov.", bullets: ["Ure tišine", "Navodila za naprave", "Brez ugibanja"] },
      { id: "info", title: "Dodatne informacije", desc: "Zajtrk, sauna, parkiranje… majhne podrobnosti, ki pomenijo veliko.", bullets: ["Časi zajtrka", "Parkiranje in sauna", "Majhno, a ključno"] },
      { id: "reservations", title: "Rezervacije & Dodatki", desc: "Naročite masažo, najem koles, rezervacijo restavracije ali nakup lokalnih izdelkov – z enim klikom.", bullets: ["Dodatki z enim klikom", "Pripravljeno za upselling", "Takojšnje naročanje"] },
      { id: "food", title: "Lokalna kuhinja & Bari", desc: "Najbližji in najboljši kraji z neposrednimi povezavami in navodili.", bullets: ["Najboljši izbor", "Odpiralni časi", "Hitra navodila"] },
      { id: "activities", title: "Aktivnosti & Znamenitosti", desc: "Ture, dogodki, znamenitosti in parkiranje – vse z navigacijo.", bullets: ["Ture in vstopnice", "Informacije o parkiranju", "Pripravljeno za zemljevide"] },
      { id: "routes", title: "Pohodne & Kolesarske poti", desc: "Integracija Google Maps; gostje vedno vedo, kje in kako priti.", bullets: ["GPX / Zemljevidi", "Jasna zahtevnost", "Pripravljeno za offline"] },
      { id: "services", title: "Blizu storitve", desc: "Pekarne, trgovine, lekarne, taksiji, nujni kontakti – hitro in varno dostopno.", bullets: ["Osnovne potrebščine blizu", "Pripravljeno za nujne primere", "Vredno zaupanja"] },
      { id: "contact", title: "Kontakt", desc: "Gostitelj samo en klik stran. Pokličite ali sporočite brez težav.", bullets: ["Klic z enim dotikom", "WhatsApp/SMS", "Vedno dosegljiv"] },
      { id: "reviews", title: "Ocene", desc: "Opomnik ob koncu obiska; pridobite več ocen z manj truda.", bullets: ["Pameten opomnik", "Neposredne povezave", "Več 5★"] }
    ],
    finalCTA: {
      title: "Naroči brezplačen klic",
      description: "Oglejte si, kako Smart Stay zmanjšuje vprašanja in izboljšuje izkušnjo gostov v minutah.",
      bookCall: "Naroči klic"
    },
    homeHero: {
      title: "Smart",
      subtitle: "Transformirajte izkušnjo gostov z",
      subtitleHighlight: "Digitalno inovacijo",
      description: "Ustavite neskončna vprašanja gostov. Ustvarite brezhibne digitalne vodiče s hišnim pravilnikom, lokalnimi priporočili in takojšnjo podporo.",
      bookCall: "NAROČI KLIC",
      seeDemo: "Oglej si 2min demo"
    },
    navbar: {
      home: "Domov",
      about: "O nas",
      demo: "Demo",
      pricing: "Cenik",
      blog: "Blog",
      contact: "Kontakt"
    },
    footer: {
      tagline: "Revolucionarizacija vaše izkušnje bivanja s pametno tehnologijo in vrhunskim udobjem.",
      quickLinks: "Hitre povezave",
      connectWithUs: "Povežite se z nami",
      copyright: "© 2025 SmartStay. Vse pravice pridržane."
    },
    contact: {
      title: "Stopite v stik",
      subtitle: "Radi bi slišali od vas. Pošljite nam sporočilo in odgovorili bomo čim prej.",
      pageTitle: "Kontaktirajte nas - SmartStay",
      pageDescription: "Stopite v stik z nami. Odgovarjamo na vaša vprašanja o SmartStay rešitvah za digitalne gostinske izkušnje.",
      heroTitle: {
        contact: "Kontaktirajte",
        us: "nas"
      },
      form: {
        name: "Ime",
        email: "E-pošta",
        message: "Sporočilo",
        submit: "Pošlji sporočilo"
      },
      company: {
        name: "SmartxStay",
        tagline: "Digitalne rešitve za najem nepremičnin",
        description: "Pomagamo lastnikom stanovanj in hiš ustvariti boljše izkušnje gostov s pametnimi digitalnimi vodiči. Naša misija je zmanjšati vprašanja gostov in narediti upravljanje nepremičnin brez napora za lastnike."
      },
      contactMethods: {
        phone: {
          title: "Telefon",
          number: "+386 69 415 493",
          hours: "Pon-Pet: 9:00 - 17:00"
        },
        email: {
          title: "E-pošta",
          address: "info@qr-space.si",
          response: "Odgovor v 24 urah"
        },
        location: {
          title: "Lokacija",
          city: "Ljubljana, Slovenija",
          availability: "Na voljo po vsej Sloveniji"
        },
        hours: {
          title: "Delovni čas",
          weekdays: "Pon-Pet: 9:00 - 17:00",
          weekend: "Sob-Ned: Po dogovoru"
        }
      },
      social: {
        title: "Sledite nam"
      },
      formStates: {
        loading: {
          title: "Pošiljanje vašega sporočila...",
          description: "Prosimo počakajte, medtem ko obdelujemo vašo zahtevo."
        },
        success: {
          title: "Sporočilo poslano!",
          description: "Hvala! Vaše sporočilo je bilo uspešno poslano. Odgovorili bomo čim prej.",
          timer: "Obrazec se bo ponovno prikazal v nekaj sekundah..."
        },
        error: {
          title: "Ups! Nekaj je šlo narobe",
          description: "Ups! Nekaj je šlo narobe. Poskusite znova ali nas kontaktirajte neposredno.",
          retry: "Poskusite znova"
        }
      },
      formLabels: {
        subject: "Zadeva *",
        subjectOptions: {
          general: "Splošno vprašanje",
          demo: "Demo izdelka",
          pricing: "Cenik in paketi",
          support: "Tehnična podpora",
          partnership: "Partnerstvo",
          other: "Drugo"
        }
      },
      formHeader: {
        title: "Pošljite nam sporočilo",
        description: "Izpolnite spodnji obrazec in odgovorili bomo čim prej.",
        subtitle: "Vaše vprašanje je za nas pomembno."
      },
      placeholders: {
        name: "Vaše ime",
        email: "vas@email.com",
        message: "Opišite vaše vprašanje ali potrebe...",
        selectSubject: "Izberite zadevo"
      },
      submitButton: {
        sending: "Pošiljanje sporočila..."
      }
    },
    pricing: {
      title: "Preprost, pregleden cenik",
      subtitle: "Izberite popoln načrt za vašo nepremičninsko portfelj. Rastite brez napora.",
      annual: "Letno",
      monthly: "Mesečno",
      save: "Prihrani 10%",
      requestQuote: "Zahtevaj ponudbo",
      trustBadge: "Zaupa nam 120+ nepremičnin po vsem svetu",
      fairPricing: "💡 Pošteno in fleksibilno: Vse cene so izhodiščne točke. Prilagodimo vsako rešitev vašim natančnim potrebam.",
      plans: {
        smartxStart: {
          name: "SmartxStart",
          units: "(1 – 3 enote)",
          description: "Za majhne lastnike nepremičnin z 1 do 3 enotami",
          features: [
            "Varno gostovanje na hitrih strežnikih",
            "Redne varnostne kopije in posodobitve",
            "Neprekinjeno delovanje platforme brez oglasov",
            "Tehnična podpora naše ekipe",
            "Neprekinjene izboljšave in nove funkcije"
          ],
          setup: "od 450€"
        },
        smartxPlus: {
          name: "SmartxPlus",
          units: "(4 – 7 enot)",
          description: "Idealno za srednje velike ponudnike z več enotami",
          features: [
            "Vse iz SmartxStart",
            "Razširjena skalabilnost za več gostov",
            "Več prostora in zmogljivosti",
            "Prilagodljive funkcije glede na potrebe",
            "Licenca za do 7 enot"
          ],
          setup: "od 590€",
          popular: "NAJPOPULARNIŠI"
        },
        smartxPro: {
          name: "SmartxPro",
          units: "(8 – 10 enot)",
          description: "Za večje lastnike nepremičnin z 8 do 10 enotami",
          features: [
            "Vse iz SmartxPlus",
            "Optimizirana zmogljivost za večjo uporabo",
            "Prioritetna podpora",
            "Napredne funkcije upravljanja in analitike",
            "Licenca za do 10 enot"
          ],
          setup: "od 790€"
        },
        smartxEnterprise: {
          name: "SmartxEnterprise",
          units: "(več kot 10 enot)",
          description: "Za hotele in velike ponudnike nastanitev",
          features: [
            "Vse prednosti SmartxPro",
            "Prilagojene integracije",
            "Dedicated account manager",
            "Neomejena skalabilnost",
            "Popolnoma prilagojene licence in cene"
          ],
          setup: "po meri",
          custom: "po meri",
          customDescription: "(glede na obseg in zahteve)"
        }
      },
      features: {
        title: "Kaj je vključeno:"
      },
      trust: {
        title: "Še vedno imate vprašanja?",
        description: "Naša ekipa je tu, da vam pomaga izbrati popoln načrt in odgovori na vsa vprašanja.",
        consultation: "Naročite brezplačno posvetovanje",
        email: "Pišite nam neposredno"
      }
    },
    madEmotions: {
      title: "Nehajte izgubljati denar za",
      titleHighlight: "neskončna vprašanja gostov",
      subtitle: "Lastniki nepremičnin zapravijo 270+ ur na sezono z odgovarjanjem na ista vprašanja. SmartStay to popolnoma odpravlja.",
      painPoints: [
        {
          id: 1,
          title: '"Geslo za WiFi?" ob 2h zjutraj',
          copy: "Polnočni klici za osnovne informacije uničujejo vašo ravnovesje med delom in življenjem. Ne bi smeli ponavljati istih odgovorov pri vsakem obisku.",
          stat: "270+ ur zapravljenih na sezono",
          color: "#dc2626"
        },
        {
          id: 2,
          title: "Slabe ocene = izgubljen dohodek",
          copy: "Frustrirani gostje pustijo slabe ocene, ko ne morejo najti informacij. Ena 1-zvezdica vas lahko stane prihodnje rezervacije.",
          stat: "€3.000+ izgubljenih na slabo oceno",
          color: "#ea580c"
        },
        {
          id: 3,
          title: "Vedno vklopljen, nikoli izklopljen",
          copy: "Biti na voljo 24/7 za vprašanja gostov ustvarja stalen stres. Vaše nepremičninsko podjetje bi moralo biti pasivno, ne izčrpavajoče.",
          stat: "Nič ravnovesja med delom in življenjem",
          color: "#d97706"
        },
        {
          id: 4,
          title: "Gostje ne berejo e-pošte",
          copy: "E-pošta pred prihodom ima nizko stopnjo odpiranja. Gostje še vedno prispodijo z istimi vprašanji.",
          stat: "Informacije ne dosežejo gostov",
          color: "#e11d48"
        },
        {
          id: 5,
          title: "Zmeda pri prijavi / odjavi",
          copy: "Nejasni koraki sprožijo izogibne klici in zamude. Jasne smernice zmanjšujejo trenja za vse.",
          stat: "Izogibne zamude pri predaji",
          color: "#b91c1c"
        },
        {
          id: 6,
          title: "Kje je parkiranje / smeti / klima?",
          copy: "Mikro-vprašanja prekinejo vaš dan in se množijo z vsako rezervacijo. Centralizirajte odgovore enkrat.",
          stat: "Stalne mikro-prekinitev",
          color: "#c2410c"
        },
        {
          id: 7,
          title: "Lokalna priporočila?",
          copy: "Nestrukturirani nasveti vodijo do povprečnih izkušenj in več nadaljnjih vprašanj. Kurirajte, kar je res pomembno v bližini.",
          stat: "Nižja zadovoljstvo gostov",
          color: "#b45309"
        },
        {
          id: 8,
          title: "Vzdrževanje in nujni primeri",
          copy: "Brez preprostih navodil postanejo majhni problemi nujni klici. Standardizirajte popravke, preden se problemi stopnjujejo.",
          stat: "Nepotrebni klici za podporo",
          color: "#be185d"
        }
      ]
    },
    solution: {
      title: "SmartStay to reši",
      titleHighlight: "avtomatsko",
      subtitle: "Eden digitalni vodič odpravlja 95% vprašanj gostov, medtem ko spite",
      features: [
        {
          title: "Takojšnji odgovori, 24/7",
          description: "Gostje takoj najdejo gesla za WiFi, hišna pravila in lokalna priporočila. Ni več prekinitev ob 2h zjutraj vašega družinskega časa.",
          tagline: "Pridobite nazaj svoje življenje"
        },
        {
          title: "Osredotočite se na pomembno",
          description: "Nehajte odgovarjati na ista vprašanja vedno znova. Porabite čas za rast vašega podjetja ali uživanje življenja, medtem ko se gostje sami pomagajo.",
          tagline: "Delajte pametneje, ne težje"
        },
        {
          title: "Nastavite in pozabite",
          description: "Ko je nastavljeno, SmartStay deluje avtomatsko. Brez vzdrževanja, brez posodobitev, brez tehničnih težav. Čisti pasivni dohodek.",
          tagline: "Prava avtomatizacija"
        }
      ]
    },
    demoFeatures: {
      badge: "Revolucionarna tehnologija",
      title: "Prihodnost",
      titleHighlight: "izkušnje gostov",
      subtitle: "Odkrijte, kako SmartStay spreminja tradicionalno gostinstvo z najsodobnejšo avtomatizacijo, inteligentno podporo gostom in brezhibnimi digitalnimi izkušnjami, ki navdušijo goste in vam prihranijo čas.",
      features: [
        { title: "Digitalni vodič za goste" },
        { title: "Takojšnji dostop do informacij" },
        { title: "Lokalna priporočila" }
      ],
      ctaText: "Oglejte si demo"
    },
    reviews: {
      title: "Kaj pravijo naši",
      titleHighlight: "partnerji",
      subtitle: "Resnične povratne informacije lastnikov nepremičnin, ki so preobrazili izkušnjo gostov s SmartStay",
      noReviews: "Trenutno ni na voljo nobenih ocen.",
      retryButton: "Poskusi znova"
    },
    howItWorks: {
      title: "Od nastavitve do uspeha",
      titleHighlight: "v manj kot mesecu",
      subtitle: "Trije preprosti koraki. Nič tehničnega znanja potrebnega. Maksimalni rezultati.",
      steps: [
        {
          title: "Delite podrobnosti o nepremičnini",
          description: "Povejte nam o svoji nepremičnini v hitrem 10-minutnem klicu. Gesla za WiFi, hišna pravila, lokalni favoriti—mi poskrbimo za ostalo.",
          time: "30 minut vašega časa"
        },
        {
          title: "Mi zgradimo vaš digitalni vodič",
          description: "Naša ekipa ustvari lep, mobilno optimiziran vodič z vsemi informacijami o vaši nepremičnini. Od vas ni potrebno nobenega dela.",
          time: "Zgrajeno v manj kot mesecu"
        },
        {
          title: "Lansirajte in uživajte rezultate",
          description: "Vaš digitalni vodič postane aktiven. Gostje dobijo takojšnje odgovore, vi dobite mir. Začnite videti rezultate takoj.",
          time: "Rezultati od prvega dne"
        }
      ],
      ctaTitle: "Pripravljeni za preobrazbo izkušnje gostov?",
      ctaDescription: "Pridružite se stotinam lastnikov nepremičnin, ki so že odpravili vprašanja gostov s SmartStay.",
      ctaButton: "Začnite danes"
    },
    cookieBanner: {
      title: "Uporabljamo piškotke za izboljšanje vaše izkušnje",
      description: "Uporabljamo piškotke in podobne tehnologije za pomoč pri personalizaciji vsebine, zagotavljanju boljše izkušnje in analizi našega prometa. S klikom na \"Sprejmi\" soglašate z našo uporabo piškotkov za marketinške namene.",
      accept: "Sprejmi",
      decline: "Zavrni"
    },
    contactForm: {
      thankYou: "Hvala!",
      responseTime: "Odgovorili bomo v 24 urah.",
      name: "Ime *",
      email: "E-pošta *",
      company: "Podjetje",
      message: "Sporočilo *",
      submit: "Pošlji sporočilo",
      placeholders: {
        name: "Vaše ime",
        email: "vas@email.com",
        company: "Vaše podjetje",
        message: "Povejte nam o vašem projektu..."
      }
    },
    aboutUs: {
      title: "Spoznajte ekipo SmartxStay",
      subtitle: "Ljudje za vašo napredno izkušnjo gostov!",
      founder: "SOUČELOVALEC",
      teamMembers: [
        {
          name: "Hana",
          role: "Součelovalka",
          description: "Vizionarska voditeljica, osredotočena na oblikovanje izjemnih izkušenj gostov in oblikovanje prihodnosti gostinske tehnologije."
        },
        {
          name: "Nik",
          role: "Součelovnik",
          description: "Produktni strateg, ki poganja rast in inovacije, zagotavlja, da SmartStay ostane pred industrijskimi trendi in potrebami uporabnikov."
        },
        {
          name: "Eva",
          role: "Oblikovanje in marketing",
          description: "Kreativna sila za našo blagovno znamko in uporabniško izkušnjo, z izjemnim okusom za estetiko in prepričljivo komunikacijo."
        }
      ],
      cta: {
        title: "Želite sodelovati z nami?",
        description: "Pripravljeni za preobrazbo vaše nepremičnine v nepozabno izkušnjo? Ustvarimo nekaj neverjetnega skupaj.",
        button: "Stopite v stik"
      }
    },
    thankYou: {
      title: "Hvala!",
      subtitle: "Prejeli smo vašo zahtevo za demo in se bomo kmalu oglasili.",
      description: "Naša ekipa vas bo kontaktirala v 24 urah, da dogovori vaš personaliziran demo in vam pokaže, kako SmartStay lahko preobrazimo izkušnjo vaših gostov.",
      returnHome: "Nazaj na domačo stran",
      exploreDemo: "Raziskujte naš demo →"
    },
    blog: {
      title: "SmartStay Blog",
      subtitle: "Vpogledi, nasveti in zgodbe iz gostinske industrije",
      featuredArticle: "Predstavljen članek",
      minRead: "min branja",
      teamName: "SmartStay ekipa",
      readMore: "Preberi več",
      noPosts: "Ni najdenih objav",
      noPostsDescription: "Ni našli nobenih objav, ki bi ustrezale vašim kriterijem. Poskusite prilagoditi filtre ali preverite kasneje.",
      retry: "Poskusi znova"
    },
    previewBlog: {
      notFound: "Blog objava ni najdena",
      notFoundDescription: "Blog objava, ki jo iščete, ne obstaja.",
      backToBlog: "Nazaj na blog",
      shareArticle: "Deli ta članek:"
    }
  },
  HR: {
    hero: {
      platform: "Smart Stay Platform",
      title: "Jasni vodiči za goste.",
      titleHighlight: " Manje pitanja.",
      titleSubtitle: "Sretniji boravci.",
      description: "Podijelite sve što gosti trebaju znati — od Wi-Fi do lokalnih savjeta — u lijepom, mobilno prilagođenom vodiču koji smanjuje zahtjeve za podršku i poboljšava zadovoljstvo gostiju.",
      bookCall: "Naruči poziv",
      seeFeatures: "Pogledaj funkcije"
    },
    features: [
      { id: "welcome", title: "Pozdravna poruka", desc: "Topao, osobni pozdrav po dolasku. Savršen prvi dojam bez dodatnog truda.", bullets: ["Osobni pozdrav", "Savjeti za dolazak", "Trenutna udobnost"] },
      { id: "checkin", title: "Prijava / Odjava & Wi-Fi", desc: "Jasne upute za dolazak/odlazak i detalje Wi-Fi na jednom mjestu (uključujući kopiranje).", bullets: ["Kopiranje Wi-Fi jednim dodirom", "Upute i vremena", "Bez zabune"] },
      { id: "rules", title: "Kućni red & Upute", desc: "Jednostavne, praktične smjernice za miran boravak bez nesporazuma.", bullets: ["Sati tišine", "Upute za uređaje", "Bez nagađanja"] },
      { id: "info", title: "Dodatne informacije", desc: "Doručak, sauna, parkiranje… mali detalji koji znače puno.", bullets: ["Vremena doručka", "Parkiranje i sauna", "Malo, ali ključno"] },
      { id: "reservations", title: "Rezervacije & Dodaci", desc: "Naručite masažu, najam bicikala, rezervaciju restorana ili kupnju lokalnih proizvoda – jednim klikom.", bullets: ["Dodaci jednim klikom", "Spremno za upselling", "Trenutno naručivanje"] },
      { id: "food", title: "Lokalna kuhinja & Barovi", desc: "Najbliža i najbolja mjesta s izravnim povezavama i uputama.", bullets: ["Najbolji izbor", "Radno vrijeme", "Brze upute"] },
      { id: "activities", title: "Aktivnosti & Znamenitosti", desc: "Ture, događaji, znamenitosti i parkiranje – sve s navigacijom.", bullets: ["Ture i ulaznice", "Informacije o parkiranju", "Spremno za karte"] },
      { id: "routes", title: "Planinarske & Biciklističke rute", desc: "Integracija Google Maps; gosti uvijek znaju gdje i kako doći.", bullets: ["GPX / Karte", "Jasna zahtjevnost", "Spremno za offline"] },
      { id: "services", title: "U blizini usluge", desc: "Pekare, trgovine, ljekarne, taksiji, hitni kontakti – brzo i sigurno dostupno.", bullets: ["Osnovne potrebe u blizini", "Spremno za hitne slučajeve", "Vrijedno povjerenja"] },
      { id: "contact", title: "Kontakt", desc: "Domaćin samo jedan klik dalje. Nazovite ili pošaljite poruku bez problema.", bullets: ["Poziv jednim dodirom", "WhatsApp/SMS", "Uvijek dostupan"] },
      { id: "reviews", title: "Recenzije", desc: "Podsjetnik na kraju boravka; dobijte više recenzija s manje truda.", bullets: ["Pametan podsjetnik", "Izravne povezave", "Više 5★"] }
    ],
    finalCTA: {
      title: "Naruči besplatan poziv",
      description: "Pogledajte kako Smart Stay smanjuje pitanja i podiže iskustvo gostiju u minutama.",
      bookCall: "Naruči poziv"
    },
    homeHero: {
      title: "Smart",
      subtitle: "Transformirajte iskustvo gostiju s",
      subtitleHighlight: "Digitalnom inovacijom",
      description: "Zaustavite beskonačna pitanja gostiju. Stvorite besprijekorne digitalne vodiče s kućnim redom, lokalnim preporukama i trenutnom podrškom.",
      bookCall: "NARUČI POZIV",
      seeDemo: "Pogledaj 2min demo"
    },
    navbar: {
      home: "Početna",
      about: "O nama",
      demo: "Demo",
      pricing: "Cjenik",
      blog: "Blog",
      contact: "Kontakt"
    },
    footer: {
      tagline: "Revolucionarizacija vašeg iskustva boravka s pametnom tehnologijom i vrhunskim udobnostima.",
      quickLinks: "Brze poveznice",
      connectWithUs: "Povežite se s nama",
      copyright: "© 2025 SmartStay. Sva prava pridržana."
    },
    contact: {
      title: "Javite nam se",
      subtitle: "Voljeli bismo čuti od vas. Pošaljite nam poruku i odgovorit ćemo što prije.",
      pageTitle: "Kontaktirajte nas - SmartStay",
      pageDescription: "Javite nam se. Odgovaramo na vaša pitanja o SmartStay rješenjima za digitalna ugostiteljska iskustva.",
      heroTitle: {
        contact: "Kontaktirajte",
        us: "nas"
      },
      form: {
        name: "Ime",
        email: "E-pošta",
        message: "Poruka",
        submit: "Pošalji poruku"
      },
      company: {
        name: "SmartxStay",
        tagline: "Digitalna rješenja za najam nekretnina",
        description: "Pomažemo vlasnicima stanova i kuća stvoriti bolja iskustva gostiju s pametnim digitalnim vodičima. Naša misija je smanjiti pitanja gostiju i učiniti upravljanje nekretninama bez napora za vlasnike."
      },
      contactMethods: {
        phone: {
          title: "Telefon",
          number: "00385957728882",
          hours: "Pon-Pet: 9:00 - 17:00"
        },
        email: {
          title: "E-pošta",
          address: "info@qr-space.si",
          response: "Odgovor u 24 sata"
        },
        location: {
          title: "Lokacija",
          city: "Pavićini, Duga Uvala",
          availability: "Pavićini Marčana"
        },
        hours: {
          title: "Radno vrijeme",
          weekdays: "Pon-Pet: 9:00 - 17:00",
          weekend: "Sub-Ned: Po dogovoru"
        }
      },
      social: {
        title: "Pratite nas"
      },
      formStates: {
        loading: {
          title: "Slanje vaše poruke...",
          description: "Molimo pričekajte dok obrađujemo vaš zahtjev."
        },
        success: {
          title: "Poruka poslana!",
          description: "Hvala! Vaša poruka je uspješno poslana. Odgovorit ćemo što prije.",
          timer: "Obrazac će se ponovno pojaviti za nekoliko sekundi..."
        },
        error: {
          title: "Ups! Nešto je pošlo po krivu",
          description: "Ups! Nešto je pošlo po krivu. Pokušajte ponovno ili nas kontaktirajte izravno.",
          retry: "Pokušajte ponovno"
        }
      },
      formLabels: {
        subject: "Predmet *",
        subjectOptions: {
          general: "Opće pitanje",
          demo: "Demo proizvoda",
          pricing: "Cjenik i paketi",
          support: "Tehnička podrška",
          partnership: "Partnerstvo",
          other: "Ostalo"
        }
      },
      formHeader: {
        title: "Pošaljite nam poruku",
        description: "Ispunite obrazac u nastavku i odgovorit ćemo što prije.",
        subtitle: "Vaš upit nam je važan."
      },
      placeholders: {
        name: "Vaše ime",
        email: "vas@email.com",
        message: "Opišite vaše pitanje ili potrebe...",
        selectSubject: "Odaberite predmet"
      },
      submitButton: {
        sending: "Slanje poruke..."
      }
    },
    pricing: {
      title: "Jednostavan, transparentan cjenik",
      subtitle: "Odaberite savršen plan za vašu nekretninsku portfelj. Rastite bez napora.",
      annual: "Godišnje",
      monthly: "Mjesečno",
      save: "Uštedi 10%",
      requestQuote: "Zatraži ponudu",
      trustBadge: "Vjeruje nam 120+ nekretnina širom svijeta",
      fairPricing: "💡 Pošteno i fleksibilno: Sve cijene su početne točke. Prilagođavamo svako rješenje vašim točnim potrebama.",
      plans: {
        smartxStart: {
          name: "SmartxStart",
          units: "(1 – 3 jedinice)",
          description: "Za male vlasnike nekretnina s 1 do 3 jedinice",
          features: [
            "Sigurno hostanje na brzim serverima",
            "Redne sigurnosne kopije i ažuriranja",
            "Neprekidno djelovanje platforme bez oglasa",
            "Tehnička podrška našeg tima",
            "Neprekidna poboljšanja i nove funkcije"
          ],
          setup: "od 450€"
        },
        smartxPlus: {
          name: "SmartxPlus",
          units: "(4 – 7 jedinica)",
          description: "Idealno za srednje ponuditelje s više jedinica",
          features: [
            "Sve iz SmartxStart",
            "Proširena skalabilnost za više gostiju",
            "Više prostora i kapaciteta",
            "Prilagodljive funkcije ovisno o potrebama",
            "Licenca za do 7 jedinica"
          ],
          setup: "od 590€",
          popular: "NAJPOPULARNIJI"
        },
        smartxPro: {
          name: "SmartxPro",
          units: "(8 – 10 jedinica)",
          description: "Za veće vlasnike nekretnina s 8 do 10 jedinica",
          features: [
            "Sve iz SmartxPlus",
            "Optimizirana izvedba za veću upotrebu",
            "Prioritetna podrška",
            "Napredne funkcije upravljanja i analitike",
            "Licenca za do 10 jedinica"
          ],
          setup: "od 790€"
        },
        smartxEnterprise: {
          name: "SmartxEnterprise",
          units: "(više od 10 jedinica)",
          description: "Za hotele i velike ponuditelje smještaja",
          features: [
            "Sve prednosti SmartxPro",
            "Prilagođene integracije",
            "Posvećeni account manager",
            "Neograničena skalabilnost",
            "Potpuno prilagođene licence i cijene"
          ],
          setup: "po mjeri",
          custom: "po mjeri",
          customDescription: "(ovisno o opsegu i zahtjevima)"
        }
      },
      features: {
        title: "Što je uključeno:"
      },
      trust: {
        title: "Još uvijek imate pitanja?",
        description: "Naš tim je ovdje da vam pomogne odabrati savršen plan i odgovori na sva pitanja.",
        consultation: "Zakažite besplatno savjetovanje",
        email: "Pišite nam izravno"
      }
    },
    madEmotions: {
      title: "Prestanite gubiti novac za",
      titleHighlight: "beskonačna pitanja gostiju",
      subtitle: "Vlasnici nekretnina gube 270+ sati po sezoni odgovarajući na ista pitanja. SmartStay to potpuno otklanja.",
      painPoints: [
        {
          id: 1,
          title: '"Lozinka za WiFi?" u 2h ujutro',
          copy: "Ponoćni pozivi za osnovne informacije uništavaju vašu ravnotežu između posla i života. Ne biste trebali ponavljati iste odgovore pri svakom boravku.",
          stat: "270+ sati potrošenih po sezoni",
          color: "#dc2626"
        },
        {
          id: 2,
          title: "Loše recenzije = izgubljen prihod",
          copy: "Frustrirani gosti ostavljaju loše recenzije kada ne mogu pronaći informacije. Jedna 1-zvjezdica vas može koštati budućih rezervacija.",
          stat: "€3.000+ izgubljeno po lošoj recenziji",
          color: "#ea580c"
        },
        {
          id: 3,
          title: "Uvijek uključen, nikad isključen",
          copy: "Biti dostupan 24/7 za pitanja gostiju stvara stalan stres. Vaše nekretninsko poslovanje trebalo bi biti pasivno, ne iscrpljujuće.",
          stat: "Nula ravnoteže između posla i života",
          color: "#d97706"
        },
        {
          id: 4,
          title: "Gosti ne čitaju e-poštu",
          copy: "E-pošta prije dolaska ima nisku stopnju otvaranja. Gosti i dalje dolaze s istim pitanjima.",
          stat: "Informacije ne dosežu goste",
          color: "#e11d48"
        },
        {
          id: 5,
          title: "Zbrka pri prijavi / odjavi",
          copy: "Nejasni koraci pokreću izbježne pozive i kašnjenja. Jasne smjernice smanjuju trenja za sve.",
          stat: "Izbježna kašnjenja pri predaji",
          color: "#b91c1c"
        },
        {
          id: 6,
          title: "Gdje je parkiranje / smeće / klima?",
          copy: "Mikro-pitanja prekidaju vaš dan i množe se sa svakom rezervacijom. Centralizirajte odgovore jednom.",
          stat: "Stalne mikro-prekidi",
          color: "#c2410c"
        },
        {
          id: 7,
          title: "Lokalne preporuke?",
          copy: "Nestrukturirani savjeti vode do osrednjih iskustava i više naknadnih pitanja. Kurirajte ono što je stvarno važno u blizini.",
          stat: "Niže zadovoljstvo gostiju",
          color: "#b45309"
        },
        {
          id: 8,
          title: "Održavanje i hitni slučajevi",
          copy: "Bez jednostavnih uputa mali problemi postaju hitni pozivi. Standardizirajte popravke prije nego što se problemi eskaliraju.",
          stat: "Nepotrebni pozivi za podršku",
          color: "#be185d"
        }
      ]
    },
    solution: {
      title: "SmartStay to rješava",
      titleHighlight: "automatski",
      subtitle: "Jedan digitalni vodič otklanja 95% pitanja gostiju dok vi spavate",
      features: [
        {
          title: "Trenutni odgovori, 24/7",
          description: "Gosti trenutno pronalaze lozinke za WiFi, kućna pravila i lokalne preporuke. Nema više prekida u 2h ujutro vašeg obiteljskog vremena.",
          tagline: "Vratite svoj život"
        },
        {
          title: "Fokusirajte se na ono što je važno",
          description: "Prestanite odgovarati na ista pitanja iznova. Provodite vrijeme rasteći svoj posao ili uživajući život dok se gosti sami pomažu.",
          tagline: "Radite pametnije, ne teže"
        },
        {
          title: "Postavite i zaboravite",
          description: "Jednom postavljeno, SmartStay radi automatski. Bez održavanja, bez ažuriranja, bez tehničkih glavobolja. Čisti pasivni prihod.",
          tagline: "Prava automatizacija"
        }
      ]
    },
    demoFeatures: {
      badge: "Revolucionarna tehnologija",
      title: "Budućnost",
      titleHighlight: "iskustva gostiju",
      subtitle: "Otkrijte kako SmartStay transformira tradicionalno ugostiteljstvo s najnovijom automatizacijom, inteligentnom podrškom gostima i besprijekornim digitalnim iskustvima koja oduševljavaju goste dok vam štede vrijeme.",
      features: [
        { title: "Digitalni vodič za goste" },
        { title: "Trenutni pristup informacijama" },
        { title: "Lokalne preporuke" }
      ],
      ctaText: "Pogledajte demo"
    },
    reviews: {
      title: "Što kažu naši",
      titleHighlight: "partneri",
      subtitle: "Pravi povratni odgovori vlasnika nekretnina koji su transformirali iskustvo gostiju sa SmartStay",
      noReviews: "Trenutno nema dostupnih recenzija.",
      retryButton: "Pokušaj ponovo"
    },
    howItWorks: {
      title: "Od postavljanja do uspjeha",
      titleHighlight: "za manje od mjeseca",
      subtitle: "Tri jednostavna koraka. Nula tehničkog znanja potrebno. Maksimalni rezultati.",
      steps: [
        {
          title: "Podijelite detalje o nekretnini",
          description: "Recite nam o svojoj nekretnini u brzom 10-minutnom pozivu. Lozinke za WiFi, kućna pravila, lokalni favoriti—mi se brinemo za ostalo.",
          time: "30 minuta vašeg vremena"
        },
        {
          title: "Mi gradimo vaš digitalni vodič",
          description: "Naš tim stvara lijep, mobilno optimiziran vodič sa svim informacijama o vašoj nekretnini. Od vas nije potreban nikakav rad.",
          time: "Izgrađeno za manje od mjeseca"
        },
        {
          title: "Lansirajte i uživajte rezultate",
          description: "Vaš digitalni vodič postaje aktivan. Gosti dobivaju trenutne odgovore, vi dobivate mir. Počnite vidjeti rezultate odmah.",
          time: "Rezultati od prvog dana"
        }
      ],
      ctaTitle: "Spremni za transformaciju iskustva gostiju?",
      ctaDescription: "Pridružite se stotinama vlasnika nekretnina koji su već eliminirali pitanja gostiju sa SmartStay.",
      ctaButton: "Započnite danas"
    },
    cookieBanner: {
      title: "Koristimo kolačiće za poboljšanje vašeg iskustva",
      description: "Koristimo kolačiće i slične tehnologije za pomoć u personalizaciji sadržaja, pružanju boljeg iskustva i analizi našeg prometa. Klikom na \"Prihvati\" pristajete na našu upotrebu kolačića u marketinške svrhe.",
      accept: "Prihvati",
      decline: "Odbij"
    },
    contactForm: {
      thankYou: "Hvala!",
      responseTime: "Odgovorit ćemo u roku od 24 sata.",
      name: "Ime *",
      email: "E-pošta *",
      company: "Tvrtka",
      message: "Poruka *",
      submit: "Pošalji poruku",
      placeholders: {
        name: "Vaše ime",
        email: "vas@email.com",
        company: "Vaša tvrtka",
        message: "Recite nam o vašem projektu..."
      }
    },
    aboutUs: {
      title: "Upoznajte SmartxStay tim",
      subtitle: "Ljudi iza vašeg naprednog iskustva gostiju!",
      founder: "SUOSNIVAČ",
      teamMembers: [
        {
          name: "Hana",
          role: "Suosnivačica",
          description: "Vizionarska vođa fokusirana na stvaranje izvanrednih iskustava gostiju i oblikovanje budućnosti ugostiteljske tehnologije."
        },
        {
          name: "Nik",
          role: "Suosnivač",
          description: "Produktni strateg koji pokreće rast i inovacije, osiguravajući da SmartStay ostane ispred industrijskih trendova i korisničkih potreba."
        },
        {
          name: "Eva",
          role: "Dizajn i marketing",
          description: "Kreativna sila iza našeg brend identiteta i korisničkog iskustva, s izvanrednim okom za estetiku i uvjerljivu komunikaciju."
        }
      ],
      cta: {
        title: "Želite raditi s nama?",
        description: "Spremni za transformaciju vašeg objekta u nezaboravno iskustvo? Stvorimo nešto nevjerojatno zajedno.",
        button: "Javite nam se"
      }
    },
    thankYou: {
      title: "Hvala!",
      subtitle: "Primili smo vaš zahtjev za demo i uskoro ćemo vas kontaktirati.",
      description: "Naš tim će vas kontaktirati u roku od 24 sata da zakazemo vaš personalizirani demo i pokažemo vam kako SmartStay može transformirati iskustvo vaših gostiju.",
      returnHome: "Povratak na početnu",
      exploreDemo: "Istražite naš demo →"
    },
    blog: {
      title: "SmartStay Blog",
      subtitle: "Uvidi, savjeti i priče iz ugostiteljske industrije",
      featuredArticle: "Istaknuti članak",
      minRead: "min čitanja",
      teamName: "SmartStay tim",
      readMore: "Pročitaj više",
      noPosts: "Nema pronađenih objava",
      noPostsDescription: "Nismo pronašli objave koje odgovaraju vašim kriterijima. Pokušajte prilagoditi filtere ili provjerite kasnije.",
      retry: "Pokušaj ponovo"
    },
    previewBlog: {
      notFound: "Blog objava nije pronađena",
      notFoundDescription: "Blog objava koju tražite ne postoji.",
      backToBlog: "Natrag na blog",
      shareArticle: "Podijeli ovaj članak:"
    }
  }
};

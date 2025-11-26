'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const OurHostsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasScrolled]);

  const translations = {
    en: {
      title: 'Our hosts. Our pride.',
      subtitle: 'Hear directly from the heart of the community.',
      readMore: 'Read more',
      readLess: 'Read less',
      testimonials: [
    {
      id: 1,
          name: 'Kamp Savinja',
          role: 'Camp',
      rating: 5,
          text: "We had excellent collaboration with SmartxStay in implementing the QR code, which allows our guests quick and easy access to all important information about our camp and its surroundings. The service was executed quickly, professionally, and in line with our wishes. The QR code has become an indispensable part of our communication with guests – through it they can find information about the camp, a map, local attractions, restaurant recommendations, and activities nearby. This has improved the user experience and enabled guests to have a more pleasant stay. We appreciate the professional and responsive approach of the SmartxStay team and gladly recommend them to everyone who wants to digitally upgrade their offering and improve contact with their guests.",
          image: '/images/hosts/kamp-savinja.jpg'
    },
    {
      id: 2,
          name: 'Apartments Irena',
          role: 'Apartments',
      rating: 5,
          text: "Really super simple and practical. Through a video call, everything was nicely explained and arranged in a short time and without complications. Hana and Nik are really friendly and arranged everything as we agreed. If you have apartments, this is really a must-have thing. I recommend!",
          image: '/images/hosts/apartments-irena.jpg'
    },
    {
      id: 3,
          name: 'Rok Veznaver',
          role: 'Apartmaji Vila Cvetka Bled',
          rating: 5,
          text: "Dear Sir/Madam, based on guest feedback, SmartxStay is an excellent product that simplifies daily work with guests. A great advantage of this product is SmartxStay's support, as the team of employees listens to even the most impossible wishes of the provider and implements them in a very short time. Another advantage of this product is its personalization. Basically, they have a great product that we personally upgraded and thus achieved that through it, the guest reaches everything we want to tell each guest individually, for which we would need an hour or more. Another emphasis of this product is that it is not only in Slovenian and English, like comparable products, but the product is in multiple languages, which is invaluable for all our guests. We are talking about the product being supported by other languages as well, such as Asian countries... which would add one additional value and a leading position in this area of services that SmartxStay offers.",
          image: '/images/hosts/rok-veznaver.jpg'
        },
        {
          id: 4,
          name: 'Lucija',
          role: 'Škantar apartments',
          rating: 5,
          text: "QR Space company offers an excellent solution for everyone who rents accommodations. Their e-guide, prepared completely individually, saves a lot of time, as guests quickly find all important information in one place – from arrival instructions to trip recommendations. Fewer questions, more satisfied guests, and simpler communication. Really super service! I warmly recommend!",
          image: '/images/hosts/lucija.jpg'
        },
        {
          id: 5,
          name: 'Ksenija',
          role: 'Apartma Bled',
          rating: 5,
          text: "SmartxStay has really made my daily apartment management easier. Guests receive all necessary information on time, without me having to worry about every detail separately. The team's support is always quick and friendly – I really feel like I'm not alone. I am very grateful for this collaboration!",
          image: '/images/hosts/ksenija.jpg'
        },
        {
          id: 6,
          name: 'Počitniška hiša Koča Dobnik',
          role: 'Holiday House',
          rating: 5,
          text: "Collaboration with QR Space company in designing our presentation for Smart Stay was excellent and very pleasant. They took care of everything promptly and professionally. I recommend to everyone involved in tourism.",
          image: '/images/hosts/koca-dobnik.jpg'
        },
        {
          id: 7,
          name: 'Farm holidays Povsin',
          role: 'Farm Holidays',
          rating: 5,
          text: "Top thing. Before, we kept explaining to guests where this or that restaurant is, activities... Since we have Smart Stay, no one asks about restaurants and activities nearby anymore.",
          image: '/images/hosts/povsin.jpg'
        },
        {
          id: 8,
          name: 'Panorama B&B',
          role: 'Bed & Breakfast',
          rating: 5,
          text: "Good, fast, and quality.",
          image: '/images/hosts/panorama.jpg'
        },
        {
          id: 9,
          name: 'Apartma pri Ajheci',
          role: 'Apartment',
          rating: 5,
          text: "Super useful thing, which makes my work easier and gives the guest all the information they need.",
          image: '/images/hosts/ajheca.jpg'
        },
        {
          id: 10,
          name: 'Maravida',
          role: 'Accommodation',
          rating: 5,
          text: "Top",
          image: '/images/hosts/maravida.jpg'
        },
        {
          id: 11,
          name: 'IPSIMA I.P.D.O.O.',
          role: 'HIŠA ANČKA BOUTIQUE HOTEL',
          rating: 5,
          text: "WORKS WELL.",
          image: '/images/hosts/ipsima.jpg'
        }
      ]
    },
    sl: {
      title: 'Kaj Naše Stranke Pravijo O Nas',
      subtitle: 'Poslušajte neposredno iz srca skupnosti.',
      readMore: 'Več',
      readLess: 'Manj',
      testimonials: [
        {
          id: 1,
          name: 'Kamp Savinja',
          role: 'Kamp',
          rating: 5,
          text: "Z organizacijo SmartxStay smo odlično sodelovali pri uvedbi QR kode, ki našim gostom omogoča hiter in enostaven dostop do vseh pomembnih informacij o našem kampu in njegovi okolici. Storitev je bila izvedena hitro, profesionalno in v skladu z našimi željami. QR koda je postala nepogrešljiv del naše komunikacije z gosti – preko nje lahko najdejo informacije o kampu, zemljevid, lokalne znamenitosti, priporočila za restavracije in aktivnosti v bližini. S tem smo izboljšali uporabniško izkušnjo in gostom omogočili bolj prijetno bivanje. Cenimo strokoven in odziven pristop ekipe SmartxStay ter jih z veseljem priporočamo vsem, ki si želijo digitalno nadgraditi svojo ponudbo in izboljšati stik s svojimi gosti.",
          image: '/images/hosts/kamp-savinja.jpg'
        },
        {
          id: 2,
          name: 'Apartments Irena',
          role: 'Apartmaji',
          rating: 5,
          text: "Res super enostavno in praktično. Preko videoklica vse lepo razložili in uredili v kratkem času in brez komplikacij. Hana in Nik sta rees prijazna in sta uredila vse, kot smo se zmenili. Če imate apartmaje je to res must-have zadeva. Priporočam!",
          image: '/images/hosts/apartments-irena.jpg'
        },
        {
          id: 3,
          name: 'Rok Veznaver',
          role: 'Apartmaji Vila Cvetka Bled',
          rating: 5,
          text: "Spoštovani, glede na odziv gostov, je SmartxStay vrhunski produkt, ki oljaša vsakodnevno delo z gosti. Velika prednost tega produkta, je podpora SmartxStay-a, kajti team zaposlenih prisluhne še tako nemogočim željam ponudnika in jih realizira v res kratkem času. Druga prednost tega produkta je personalizacija le tega. V osnovi imajo krasen produkt, ki smo ga mi osebno dograjevali in s tem dosegli, da preko njega gost  doseže vse kar mi želimo povedati vsakemu gostu posebaj, pa bi le za to potrebovali uro ali več. Še en poudarek tega produkta pa je, da ni samo v Slovenskem in Angleškem jeziku, kot so naprimer primerljivi produkti, ampak je produkt v več jezikih, kar je za vse naše goste neprecenljivo, pogovarjamo pa se, da bi bil produkt podprt tudi z drugimi jeziki, kot naprimer Azijske države..kar bi na vse kar Trenutno ponujajo, dodalo eno dodatno vrednost in vodilni položaj na tem področju storitev, ki jih ponuja SmartxStay.",
          image: '/images/hosts/rok-veznaver.jpg'
        },
        {
          id: 4,
          name: 'Lucija',
          role: 'Škantar apartments',
          rating: 5,
          text: "Podjetje QR Space ponuja odlično rešitev za vse, ki oddajajo nastanitve. Njihov e-vodnik, pripravljen povsem individualno, prihrani ogromno časa, saj gostje na enem mestu hitro najdejo vse pomembne informacije-od navodil za prihod do priporočil za izlete. Manj vprašanj, več zadovoljnih gostov in enostavnejša komunikacija. Res super storitev! Toplo priporočam!",
          image: '/images/hosts/lucija.jpg'
        },
        {
          id: 5,
          name: 'Ksenija',
          role: 'Apartma Bled',
          rating: 5,
          text: "SmartxStay mi je res olajšal vsakodnevno upravljanje z apartmaji. Gostje prejmejo vse potrebne informacije pravočasno, brez da bi morala skrbeti za vsak detajl posebej. Podpora ekipe je vedno hitra in prijazna – res imam občutek, da nisem sama. Zelo sem hvaležna za to sodelovanje!",
          image: '/images/hosts/ksenija.jpg'
        },
        {
          id: 6,
          name: 'Počitniška hiša Koča Dobnik',
          role: 'Počitniška hiša',
          rating: 5,
          text: "Sodelovanje s podjetjem QR space pri snovanju naše predstavitve za Smart Stay je bilo odlično in zelo prijetno. Za vse so poskrbeli ažurno in profesionalno. Priporočam vsem, ki se ukvarjajo s turizmom.",
          image: '/images/hosts/koca-dobnik.jpg'
        },
        {
          id: 7,
          name: 'Farm holidays Povsin',
          role: 'Farm Holidays',
          rating: 5,
          text: "Top zadeva. Prej smo skoz razlagal gostom pa kje je kakšna restavracija, aktivnostih.. . Odkar mamo smart stay nobeden več ne vpraša po restavracijah in aktivnostih v bližini.",
          image: '/images/hosts/povsin.jpg'
        },
        {
          id: 8,
          name: 'Panorama B&B',
          role: 'Bed & Breakfast',
          rating: 5,
          text: "Dobro, hitro in kvalitetno.",
          image: '/images/hosts/panorama.jpg'
        },
        {
          id: 9,
          name: 'Apartma pri Ajheci',
          role: 'Apartma',
          rating: 5,
          text: "Super uporabna zadeva, katera meni olajša delo in gostu poda vse informacije ki jih potrebuje.",
          image: '/images/hosts/ajheca.jpg'
        },
        {
          id: 10,
          name: 'Maravida',
          role: 'Nastanitev',
          rating: 5,
          text: "Top",
          image: '/images/hosts/maravida.jpg'
        },
        {
          id: 11,
          name: 'IPSIMA I.P.D.O.O.',
          role: 'HIŠA ANČKA BOUTIQUE HOTEL',
          rating: 5,
          text: "DELUJE DOBRO.",
          image: '/images/hosts/ipsima.jpg'
    }
      ]
    }
  };

  const t = translations[language];
  const testimonials = t.testimonials;

  // Calculate how many slides we can show (3 at a time)
  // If we have 11 testimonials, we can show: 0-2, 1-3, 2-4, ..., 8-10 (9 possible starting positions)
  const maxSlides = Math.max(0, testimonials.length - 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    return testimonials.slice(currentSlide, currentSlide + 3);
  };

  // Check if text is too long (more than 200 characters)
  const isTextLong = (text: string) => {
    return text.length > 200;
  };

  // Toggle expand/collapse for a specific card
  const toggleExpand = (testimonialId: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(testimonialId)) {
        newSet.delete(testimonialId);
      } else {
        newSet.add(testimonialId);
      }
      return newSet;
    });
  };

  // Check if card is expanded
  const isExpanded = (testimonialId: number) => {
    return expandedCards.has(testimonialId);
  };

  const renderStars = (rating: number) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={index < rating ? '#a898d8' : 'none'}
            stroke={index < rating ? '#a898d8' : '#d1d5db'}
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="our-hosts"
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        padding: '60px 20px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 80px' }}>
        {/* Title */}
        <h2
          className="section-title"
          style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 800,
            color: '#0f0f0f',
            lineHeight: '1.2',
            marginBottom: '16px'
          }}
        >
          {language === 'en' ? (
            <span className="title-en">{t.title}</span>
          ) : (
            <>
              <span className="title-sl-line1">Kaj Naše Stranke</span>
              <span className="title-sl-line2">Pravijo O Nas</span>
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p
          className="section-subtitle"
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            lineHeight: '1.6',
            marginBottom: '48px'
          }}
        >
          {t.subtitle}
        </p>

        {/* Testimonial Slider */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible', width: '100%' }}>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="nav-button"
            disabled={currentSlide === 0}
            style={{
              position: 'absolute',
              left: '-90px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: '2px solid rgba(162, 158, 255, 0.3)',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              padding: '0',
              zIndex: 10,
              transition: 'all 0.3s ease',
              opacity: currentSlide === 0 ? 0.4 : 1,
              boxShadow: currentSlide === 0 ? 'none' : '0 4px 12px rgba(162, 158, 255, 0.2)'
            }}
            aria-label="Previous testimonial"
            onMouseEnter={(e) => {
              if (currentSlide > 0) {
                e.currentTarget.style.background = 'rgba(162, 158, 255, 0.1)';
                e.currentTarget.style.borderColor = '#a898d8';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentSlide > 0) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke={currentSlide === 0 ? '#d1d5db' : '#a898d8'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards Container */}
          <div
            className="testimonials-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              width: '100%',
              maxWidth: '1120px',
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            {getVisibleTestimonials().map((testimonial) => {
              const expanded = isExpanded(testimonial.id);
              const textIsLong = isTextLong(testimonial.text);
              const displayText = expanded || !textIsLong 
                ? testimonial.text 
                : testimonial.text.substring(0, 200) + '...';
              
              return (
              <div
                key={testimonial.id}
                className="testimonial-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(25px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                  borderRadius: '20px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                  padding: '24px 28px',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  opacity: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: expanded ? 'auto' : '280px',
                  minHeight: expanded ? 'auto' : '280px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Profile Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  {/* Profile Image Placeholder */}
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#a898d8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '20px'
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Name and Role */}
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 700, color: '#0f0f0f', fontSize: '16px' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#4a4a4a' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div style={{ marginBottom: '12px' }}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <div style={{ 
                  position: 'relative', 
                  flex: 1, 
                  overflow: 'hidden',
                  marginBottom: textIsLong && !expanded ? '40px' : '0'
                }}>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#4a4a4a',
                    fontStyle: 'italic',
                    margin: 0
                  }}
                >
                    &ldquo;{displayText}&rdquo;
                  </p>
                  {/* Gradient overlay when text is truncated */}
                  {!expanded && textIsLong && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40px',
                        background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5))',
                        pointerEvents: 'none'
                      }}
                    />
                  )}
                </div>

                {/* Read More/Less Button - Always visible at bottom */}
                {textIsLong && (
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    style={{
                      marginTop: expanded ? '12px' : '0',
                      padding: '10px 20px',
                      background: expanded ? 'rgba(162, 158, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                      border: '2px solid rgba(162, 158, 255, 0.5)',
                      borderRadius: '8px',
                      color: '#a898d8',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      alignSelf: 'flex-start',
                      fontFamily: 'Inter, sans-serif',
                      position: expanded ? 'relative' : 'absolute',
                      bottom: expanded ? 'auto' : '16px',
                      left: expanded ? 'auto' : '28px',
                      zIndex: 10,
                      boxShadow: expanded ? 'none' : '0 2px 8px rgba(162, 158, 255, 0.3)',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(162, 158, 255, 0.2)';
                      e.currentTarget.style.borderColor = '#a898d8';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = expanded ? 'rgba(162, 158, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.5)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {expanded ? t.readLess : t.readMore}
                  </button>
                )}
              </div>
            )})}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="nav-button"
            disabled={currentSlide >= maxSlides}
            style={{
              position: 'absolute',
              right: '-90px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: '2px solid rgba(162, 158, 255, 0.3)',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlide >= maxSlides ? 'not-allowed' : 'pointer',
              padding: '0',
              zIndex: 10,
              transition: 'all 0.3s ease',
              opacity: currentSlide >= maxSlides ? 0.4 : 1,
              boxShadow: currentSlide >= maxSlides ? 'none' : '0 4px 12px rgba(162, 158, 255, 0.2)'
            }}
            aria-label="Next testimonial"
            onMouseEnter={(e) => {
              if (currentSlide < maxSlides) {
                e.currentTarget.style.background = 'rgba(162, 158, 255, 0.1)';
                e.currentTarget.style.borderColor = '#a898d8';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentSlide < maxSlides) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke={currentSlide >= maxSlides ? '#d1d5db' : '#a898d8'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(162, 158, 255, 0.15) !important;
          background-color: rgba(255, 255, 255, 0.35) !important;
        }

        .nav-button:hover {
          transform: scale(1.15);
        }

        .nav-button:hover svg path {
          stroke: #9383ee;
        }

        @media (max-width: 1200px) {
          .page-content > section > div {
            padding: 0 20px !important;
          }
        }

        @media (max-width: 968px) {
          .nav-button {
            left: 10px !important;
            right: 10px !important;
            width: 48px !important;
            height: 48px !important;
          }
          
          .nav-button:first-of-type {
            left: 10px !important;
          }
          
          .nav-button:last-of-type {
            right: 10px !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 8px !important;
          }

          section > div {
            padding: 0 8px !important;
          }
          
          .section-title {
            font-size: clamp(28px, 6vw, 40px) !important;
            margin-bottom: 12px !important;
          }

          .title-en {
            white-space: nowrap;
            display: block;
          }

          .title-sl-line1,
          .title-sl-line2 {
            display: block;
          }

          .section-subtitle {
            font-size: clamp(14px, 3vw, 16px) !important;
            margin-bottom: 32px !important;
          }

          .testimonials-container {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            max-width: 100% !important;
            padding: 0 !important;
          }
          
          .testimonial-card {
            padding: 24px 28px !important;
            width: 100% !important;
          }

          .nav-button {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 48px 4px !important;
          }

          section > div {
            padding: 0 4px !important;
          }
          
          .section-title {
            font-size: clamp(24px, 7vw, 32px) !important;
          }
          
          .testimonial-card {
            padding: 20px 24px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurHostsSection;


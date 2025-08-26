"use client";

import { useState, useEffect } from 'react';

interface CountryData {
  country_code: string;
  country_name: string;
}

export function useCountryDetection() {
  const [country, setCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Try to get country from IP geolocation
        const response = await fetch('https://api.ipapi.com/api/check?access_key=free');
        const data: CountryData = await response.json();
        
        if (data.country_code) {
          setCountry(data.country_code.toUpperCase());
        }
      } catch (error) {
        console.log('Country detection failed, using fallback');
        // Fallback: try to detect from browser language
        const language = navigator.language || navigator.languages?.[0] || '';
        if (language.includes('hr') || language.includes('hr-HR')) {
          setCountry('HR');
        } else if (language.includes('sl') || language.includes('sl-SI')) {
          setCountry('SI');
        }
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  const getBookingLink = () => {
    if (isLoading) return '#';
    
    switch (country) {
      case 'HR':
        return 'https://hanakucej-qr-space.zohobookings.eu/#/242002000000057014';
      case 'SI':
        return 'https://hanakucej-qr-space.zohobookings.eu/#/242002000000052012';
      default:
        // Default to Croatian link for other countries
        return 'https://hanakucej-qr-space.zohobookings.eu/#/242002000000052012';
    }
  };

  return {
    country,
    isLoading,
    getBookingLink
  };
}

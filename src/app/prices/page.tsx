'use client';

import React, { useState, useRef } from 'react';
import PricesHero from '@/components/prices/PricesHero';
import PricingCards from '@/components/prices/PricingCards';
import AdditionalModules from '@/components/prices/AdditionalModules';
import PricesContactForm from '@/components/prices/PricesContactForm';

export default function PricesPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    packageName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handlePackageSelect = (packageName: string) => {
    setFormData(prev => ({ ...prev, packageName }));
    setShowContactForm(true);
    setTimeout(() => {
      contactFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <main>
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      <div className="page-content">
        <PricesHero />
        <PricingCards onPackageSelect={handlePackageSelect} />
        <AdditionalModules />
        {showContactForm && (
          <PricesContactForm
            ref={contactFormRef}
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            submitStatus={submitStatus}
            setSubmitStatus={setSubmitStatus}
            onClose={() => {
              setShowContactForm(false);
              setSubmitStatus('idle');
            }}
          />
        )}
      </div>
    </main>
  );
}

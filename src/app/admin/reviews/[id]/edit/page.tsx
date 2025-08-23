"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DashboardLayout from '../../../dashboard/DashboardLayout';
import ReviewForm from '../../../dashboard/components/ReviewForm';

interface Review {
  id: string;
  name: string;
  surname: string;
  profile_picture?: string;
  company: string;
  rating: number;
  description: string;
  status: 'visible' | 'hidden';
}

export default function EditReviewPage() {
  const params = useParams() as Record<string, string> | null;
  const reviewId = (params?.id ?? '') as string;
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`/api/admin/reviews/${reviewId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch review');
        }

        const data = await response.json();
        setReview(data.review);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (reviewId) {
      fetchReview();
    }
  }, [reviewId]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (error || !review) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <div className="text-center py-12">
            <p className="text-red-600">{error || 'Review not found'}</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <ReviewForm 
        initialData={review}
        reviewId={reviewId}
      />
    </DashboardLayout>
  );
}

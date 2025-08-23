"use client";

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Upload, X, User, Loader2, Eye, EyeOff } from 'lucide-react';
import StarRating from './StarRating';

const ReviewFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(60, 'Name must be at most 60 characters'),
  surname: z.string().trim().min(2, 'Surname must be at least 2 characters').max(60, 'Surname must be at most 60 characters'),
  profile_picture: z.string().url('Must be a valid URL').optional().nullable(),
  company: z.string().trim().min(2, 'Company must be at least 2 characters').max(100, 'Company must be at most 100 characters'),
  rating: z.number().int().min(0, 'Rating must be at least 0').max(5, 'Rating must be at most 5'),
  description: z.string().trim().min(10, 'Description must be at least 10 characters').max(1000, 'Description must be at most 1000 characters'),
  status: z.enum(['visible', 'hidden']).default('visible'),
});

type ReviewFormData = z.infer<typeof ReviewFormSchema>;

interface ReviewFormProps {
  initialData?: Partial<ReviewFormData>;
  reviewId?: string;
  onSuccess?: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ initialData, reviewId, onSuccess }) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.profile_picture || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ReviewFormData>({
    // Cast to any to avoid resolver generic mismatch across RHF/Zod versions during build
    resolver: zodResolver(ReviewFormSchema) as any,
    defaultValues: {
      name: initialData?.name || '',
      surname: initialData?.surname || '',
      profile_picture: initialData?.profile_picture || '',
      company: initialData?.company || '',
      rating: initialData?.rating || 0,
      description: initialData?.description || '',
      status: initialData?.status || 'visible',
    }
  });

  const watchedDescription = watch('description');
  const watchedRating = watch('rating');
  const watchedStatus = watch('status');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('Please select a JPG, PNG, or WebP image');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be smaller than 5MB');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setImagePreview(dataUrl);
      setValue('profile_picture', dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrlChange = (url: string) => {
    if (url) {
      setImagePreview(url);
      setValue('profile_picture', url);
    } else {
      setImagePreview(null);
      setValue('profile_picture', '');
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setValue('profile_picture', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const url = reviewId 
        ? `/api/admin/reviews/${reviewId}`
        : '/api/admin/reviews';
      
      const method = reviewId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save review');
      }

      // Show success toast (you can integrate your toast system here)
      if (typeof window !== 'undefined') {
        alert(reviewId ? 'Review updated successfully!' : 'Review created successfully!');
      }

      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/admin/reviews');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push('/admin/reviews');
  };



  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-sm border border-white/10 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          {reviewId ? 'Edit Review' : 'Create New Review'}
        </h2>

        {submitError && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-md">
            <p className="text-sm text-red-400">{submitError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Profile Picture
            </label>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Profile preview"
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-zinc-600 flex items-center justify-center">
                    <User className="w-8 h-8 text-zinc-400" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 space-y-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center space-x-2 px-3 py-2 border border-zinc-600 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 bg-zinc-900"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Image</span>
                </button>
                <div className="text-sm text-zinc-400">
                  Or paste image URL:
                </div>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  onChange={(e) => handleImageUrlChange(e.target.value)}
                  className="w-full px-3 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-zinc-800 text-white placeholder-zinc-400"
                />
                <p className="text-xs text-zinc-400">
                  JPG, PNG, or WebP. Max 5MB.
                </p>
              </div>
            </div>
            {errors.profile_picture && (
              <p className="mt-1 text-sm text-red-400">{errors.profile_picture.message}</p>
            )}
          </div>

          {/* Name and Surname */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-zinc-800 text-white placeholder-zinc-400"
                placeholder="John"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-zinc-300 mb-2">
                Surname *
              </label>
              <input
                {...register('surname')}
                type="text"
                id="surname"
                className="w-full px-3 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-zinc-800 text-white placeholder-zinc-400"
                placeholder="Doe"
              />
              {errors.surname && (
                <p className="mt-1 text-sm text-red-400">{errors.surname.message}</p>
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
              Company *
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="w-full px-3 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-zinc-800 text-white placeholder-zinc-400"
              placeholder="Acme Inc."
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Rating *
            </label>
            <StarRating
              value={watchedRating}
              onChange={(rating) => setValue('rating', rating)}
              disabled={isSubmitting}
            />
            {errors.rating && (
              <p className="mt-1 text-sm text-red-400">{errors.rating.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Status *
            </label>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setValue('status', 'visible')}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors
                  ${watchedStatus === 'visible'
                    ? 'bg-green-500/10 text-green-400 border-green-500/30'
                    : 'bg-zinc-800 text-zinc-400 border-zinc-600 hover:bg-zinc-700'
                  }
                `}
              >
                <Eye className="w-4 h-4" />
                <span>Visible</span>
              </button>
              <button
                type="button"
                onClick={() => setValue('status', 'hidden')}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors
                  ${watchedStatus === 'hidden'
                    ? 'bg-gray-500/10 text-gray-400 border-gray-500/30'
                    : 'bg-zinc-800 text-zinc-400 border-zinc-600 hover:bg-zinc-700'
                  }
                `}
              >
                <EyeOff className="w-4 h-4" />
                <span>Hidden</span>
              </button>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Visible reviews will be shown to public, hidden reviews will only be visible in admin panel
            </p>
            {errors.status && (
              <p className="mt-1 text-sm text-red-400">{errors.status.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-2">
              Description *
            </label>
            <textarea
              {...register('description')}
              id="description"
              rows={6}
              className="w-full px-3 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none bg-zinc-800 text-white placeholder-zinc-400"
              placeholder="Share your experience..."
            />
            <div className="mt-1 flex justify-between">
              <div>
                {errors.description && (
                  <p className="text-sm text-red-400">{errors.description.message}</p>
                )}
              </div>
              <p className="text-sm text-zinc-400">
                {watchedDescription?.length || 0}/1000
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-zinc-600">
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="px-4 py-2 border border-zinc-600 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white rounded-md text-sm font-medium hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{reviewId ? 'Update Review' : 'Create Review'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;

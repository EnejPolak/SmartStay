"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Plus, Edit, Trash2, Star, ChevronLeft, ChevronRight, SortAsc, SortDesc, Eye, EyeOff } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';

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

interface ReviewsResponse {
  reviews: Review[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const ReviewsList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filters and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'visible' | 'hidden'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [sortField, setSortField] = useState<'name' | 'rating' | 'company' | 'status'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        q: debouncedSearchQuery,
        page: currentPage.toString(),
        limit: '10',
        sort: sortField,
        order: sortOrder,
        status: statusFilter,
      });

      const response = await fetch(`/api/admin/reviews?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }

      const data: ReviewsResponse = await response.json();
      setReviews(data.reviews);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchQuery, currentPage, sortField, sortOrder, statusFilter]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchQuery]);

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleDelete = async (id: string, name: string, surname: string) => {
    if (!confirm(`Are you sure you want to delete the review by ${name} ${surname}?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/reviews/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete review');
      }

      alert('Review deleted successfully');
      fetchReviews();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete review');
    }
  };

  const handleStatusToggle = async (id: string, currentStatus: 'visible' | 'hidden', name: string, surname: string) => {
    const newStatus = currentStatus === 'visible' ? 'hidden' : 'visible';
    
    // Find the review to get all its data
    const review = reviews.find(r => r.id === id);
    if (!review) return;
    
    try {
      const response = await fetch(`/api/admin/reviews/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...review,
          status: newStatus
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update review status');
      }

      alert(`Review by ${name} ${surname} is now ${newStatus}`);
      fetchReviews();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update review status');
    }
  };

  const getInitials = (name: string, surname: string) => {
    return `${name.charAt(0)}${surname.charAt(0)}`.toUpperCase();
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-zinc-300">{rating}</span>
      </div>
    );
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const SortButton: React.FC<{ field: typeof sortField; children: React.ReactNode }> = ({ field, children }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center space-x-1 hover:bg-white/5 px-2 py-1 rounded transition-colors"
    >
      <span>{children}</span>
      {sortField === field && (
        sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
      )}
    </button>
  );

  if (loading && reviews.length === 0) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">Reviews</h1>
          <Link
            href="/admin/reviews/new"
            className="flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Review</span>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, surname, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-zinc-800 text-white placeholder-zinc-400"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'all' | 'visible' | 'hidden')}
            className="px-3 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-zinc-800 text-white"
          >
            <option value="all">All Status</option>
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-md">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && reviews.length === 0 && !debouncedSearchQuery && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
            <Star className="w-12 h-12 text-zinc-400" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No reviews yet</h3>
          <p className="text-zinc-400 mb-6">Get started by adding your first review.</p>
          <Link
            href="/admin/reviews/new"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Review</span>
          </Link>
        </div>
      )}

      {/* No Search Results */}
      {!loading && reviews.length === 0 && debouncedSearchQuery && (
        <div className="text-center py-12">
          <p className="text-zinc-400">No reviews found for &ldquo;{debouncedSearchQuery}&rdquo;</p>
        </div>
      )}

      {/* Reviews Table */}
      {reviews.length > 0 && (
        <>
          <div className="bg-white/5 backdrop-blur-sm shadow-sm border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-zinc-800/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    <SortButton field="name">Reviewer</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    <SortButton field="company">Company</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    <SortButton field="rating">Rating</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    <SortButton field="status">Status</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-transparent divide-y divide-white/10">
                {reviews.map((review) => (
                  <tr key={review.id} className="hover:bg-white/5">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {review.profile_picture ? (
                            <img
                              src={review.profile_picture}
                              alt={`${review.name} ${review.surname}`}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center">
                              <span className="text-sm font-medium text-zinc-300">
                                {getInitials(review.name, review.surname)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">
                            {review.name} {review.surname}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-zinc-300">{review.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {renderStars(review.rating)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleStatusToggle(review.id, review.status, review.name, review.surname)}
                        className={`
                          flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-colors
                          ${review.status === 'visible' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20' 
                            : 'bg-gray-500/10 text-gray-400 border border-gray-500/20 hover:bg-gray-500/20'
                          }
                        `}
                      >
                        {review.status === 'visible' ? (
                          <>
                            <Eye className="w-3 h-3" />
                            <span>Visible</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3" />
                            <span>Hidden</span>
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-300 max-w-xs">
                        {truncateText(review.description)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/admin/reviews/${review.id}/edit`}
                          className="text-violet-400 hover:text-violet-300 p-1 rounded hover:bg-violet-500/10 transition-colors"
                          title="Edit review"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(review.id, review.name, review.surname)}
                          className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-500/10 transition-colors"
                          title="Delete review"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-zinc-300">
                Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, total)} of {total} results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center px-3 py-2 border border-zinc-600 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>
                <span className="px-3 py-2 text-sm text-zinc-300">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center px-3 py-2 border border-zinc-600 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReviewsList;

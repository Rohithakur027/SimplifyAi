"use client";

import { useState, useEffect } from "react";
import NewsPage from "@/components/news/news-page";
import TopNavigation from "@/components/news/top-navigation";
import CategorySelection from "@/components/news/category-selection";
type DashboardTab = "home" | "calendar" | "twitter" | "news" | "email";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("home");
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Always show category selection when switching to news tab
    if (activeTab === "news") {
      setShowCategorySelection(true);
    }
  }, [activeTab]);

  const handleTabChange = (tab: DashboardTab) => {
    setActiveTab(tab);
  };

  const handleCategorySubmit = (
    selectedCategories: Record<string, string[]>
  ) => {
    setIsSubmitting(true);

    // Simulate API call - but don't store in cookies
    setTimeout(() => {
      setShowCategorySelection(false);
      setIsSubmitting(false);
      // We'll pass the selected categories to the NewsPage component in the future if needed
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="container mx-auto px-4 py-6">
        {activeTab === "home" && (
          <div className="bg-white rounded-lg p-6 shadow">
            <h1 className="text-2xl font-bold mb-4">
              Welcome to your dashboard
            </h1>
            <p className="text-gray-600">
              Select an option from the navigation menu to get started. Try
              clicking on "News" to see the latest articles.
            </p>
          </div>
        )}

        {activeTab === "calendar" && (
          <div className="bg-white rounded-lg p-6 shadow">
            <h1 className="text-2xl font-bold mb-4">Calendar</h1>
            <p className="text-gray-600">Your calendar would appear here.</p>
          </div>
        )}

        {activeTab === "twitter" && (
          <div className="bg-white rounded-lg p-6 shadow">
            <h1 className="text-2xl font-bold mb-4">Twitter Feed</h1>
            <p className="text-gray-600">
              Your Twitter feed would appear here.
            </p>
          </div>
        )}

        {activeTab === "news" && (
          <>
            {showCategorySelection ? (
              <div className="bg-white rounded-lg p-6 shadow">
                <h1 className="text-2xl font-bold mb-6">
                  Select Your News Interests
                </h1>
                <p className="text-gray-600 mb-8">
                  Choose the topics you're interested in to personalize your
                  news feed.
                </p>
                <CategorySelection
                  onSubmit={handleCategorySubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
            ) : (
              <NewsPage />
            )}
          </>
        )}

        {activeTab === "email" && (
          <div className="bg-white rounded-lg p-6 shadow">
            <h1 className="text-2xl font-bold mb-4">Email</h1>
            <p className="text-gray-600">Your emails would appear here.</p>
          </div>
        )}
      </main>
    </div>
  );
}

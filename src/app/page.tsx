'use client';

import { useState } from 'react';
import { apps, categories, AppCategory } from '@/data/apps';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | 'all'>('all');
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filteredApps = apps.filter((app) => {
    if (selectedCategory !== 'all' && !app.categories.includes(selectedCategory)) {
      return false;
    }
    if (showFreeOnly && !app.free && !app.hasFreeTier) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-800">
            🧠 ADHD Apps Directory
          </h1>
          <p className="text-slate-600 mt-2">
            Curated apps that actually work for ADHD brains. No fluff, just tools that help.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Apps
            </button>
            {(Object.entries(categories) as [AppCategory, { label: string; emoji: string }][]).map(
              ([key, { label, emoji }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {emoji} {label}
                </button>
              )
            )}
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={showFreeOnly}
              onChange={(e) => setShowFreeOnly(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            Show only free / free tier apps
          </label>
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-500 mb-4">
          Showing {filteredApps.length} app{filteredApps.length !== 1 ? 's' : ''}
        </p>

        {/* App Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredApps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {app.name}
                </h2>
                <div className="flex gap-1">
                  {app.free && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                      Free
                    </span>
                  )}
                  {!app.free && app.hasFreeTier && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      Free tier
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-slate-600 text-sm mb-3">{app.description}</p>
              
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mb-3">
                <p className="text-sm text-amber-800">
                  <span className="font-medium">Why it works for ADHD:</span> {app.whyADHD}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {app.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                  >
                    {categories[cat].emoji} {categories[cat].label}
                  </span>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex gap-2">
                {app.platforms.map((platform) => (
                  <span key={platform} className="text-xs text-slate-400 uppercase">
                    {platform}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No apps match your filters. Try adjusting them!
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-slate-500">
          <p>
            Built with 🧠 by someone who gets it.
          </p>
          <p className="mt-2">
            Know an app that should be here?{' '}
            <a href="mailto:hello@example.com" className="text-indigo-600 hover:underline">
              Suggest it
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

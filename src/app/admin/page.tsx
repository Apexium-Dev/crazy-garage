"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const GITHUB_REPO = "Apexium-Dev/crazy-garage";

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    titleEn: "",
    titleMk: "",
    titleSq: "",
    descriptionEn: "",
    descriptionMk: "",
    descriptionSq: "",
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create GitHub Issue URL with form data
    const issueBody = encodeURIComponent(`### Title (English)
${formData.titleEn}

### Title (Macedonian)
${formData.titleMk}

### Title (Albanian)
${formData.titleSq}

### Description (English)
${formData.descriptionEn}

### Description (Macedonian)
${formData.descriptionMk}

### Description (Albanian)
${formData.descriptionSq}

### 📷 Drag & Drop Images Here
Please drag and drop your before/after images here!`);

    const labels = encodeURIComponent("gallery");
    const issueUrl = `https://github.com/${GITHUB_REPO}/issues/new?template=gallery-item.yml&labels=${labels}&body=${issueBody}`;

    window.open(issueUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-[var(--secondary)] py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Add Gallery Item
          </h1>
          <p className="text-[var(--text-muted)]">
            Fill out the form below. You&apos;ll be redirected to GitHub where
            you can attach your images.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Titles */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Titles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  English
                </label>
                <input
                  type="text"
                  value={formData.titleEn}
                  onChange={(e) =>
                    setFormData({ ...formData, titleEn: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Macedonian
                </label>
                <input
                  type="text"
                  value={formData.titleMk}
                  onChange={(e) =>
                    setFormData({ ...formData, titleMk: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Albanian
                </label>
                <input
                  type="text"
                  value={formData.titleSq}
                  onChange={(e) =>
                    setFormData({ ...formData, titleSq: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Descriptions */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Descriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  English
                </label>
                <textarea
                  value={formData.descriptionEn}
                  onChange={(e) =>
                    setFormData({ ...formData, descriptionEn: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)]"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Macedonian
                </label>
                <textarea
                  value={formData.descriptionMk}
                  onChange={(e) =>
                    setFormData({ ...formData, descriptionMk: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)]"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Albanian
                </label>
                <textarea
                  value={formData.descriptionSq}
                  onChange={(e) =>
                    setFormData({ ...formData, descriptionSq: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)]"
                  rows={4}
                  required
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-lg p-4">
            <p className="text-sm text-white">
              <strong>Note:</strong> After clicking submit, you&apos;ll be
              redirected to GitHub where you can drag & drop your before/after
              images. GitHub will host them automatically!
            </p>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full btn btn-primary text-lg py-4">
            🚀 Submit to GitHub
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push("/")}
            className="btn btn-secondary"
          >
            ← Back to Site
          </button>
        </div>
      </div>
    </div>
  );
}

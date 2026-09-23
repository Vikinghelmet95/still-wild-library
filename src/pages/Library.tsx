import { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import type { Collection } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

function Library() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await fetch(
          `${API_URL}/api/collections`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch collections");
        }

        const data = await response.json();

        setCollections(data);
      } catch {
        setError("Could not load collections.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollections();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#faf9f6]">
        <div className="mx-auto max-w-6xl px-4 py-10">
          {/* Header skeleton */}
          <div className="mb-10">
            <div className="h-4 w-40 animate-pulse rounded bg-stone-200" />

            <div className="mt-4 h-10 w-72 animate-pulse rounded bg-stone-200" />

            <div className="mt-4 h-5 w-full max-w-xl animate-pulse rounded bg-stone-200" />

            <div className="mt-2 h-5 w-4/5 max-w-lg animate-pulse rounded bg-stone-200" />
          </div>

          <div className="mb-5 h-7 w-48 animate-pulse rounded bg-stone-200" />

          {/* Collection skeletons */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
              >
                <div className="aspect-[2/3] animate-pulse bg-stone-200" />

                <div className="p-5">
                  <div className="h-6 w-3/4 animate-pulse rounded bg-stone-200" />

                  <div className="mt-3 h-4 w-full animate-pulse rounded bg-stone-200" />

                  <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-stone-200" />

                  <div className="mt-5 h-9 w-32 animate-pulse rounded-lg bg-stone-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#faf9f6]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-lg rounded-2xl border border-stone-200 bg-white p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Still & Wild Library
            </p>

            <h1 className="mt-3 text-2xl font-semibold text-stone-900">
              We couldn&apos;t load the library
            </h1>

            <p className="mt-3 leading-7 text-stone-600">
              The collection service may still be starting. Please try again
              in a moment.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-xl bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
            >
              Try again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Intro */}
        <section className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            Still & Wild Children
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Story Card Library
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            Explore gentle educational collections designed to inspire
            curiosity, conversation and discovery.
          </p>
        </section>

        {/* Collections */}
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Explore collections
              </h2>

              <p className="mt-1 text-sm text-stone-500">
                Choose a collection and begin exploring.
              </p>
            </div>

            <p className="text-sm text-stone-500">
              {collections.length}{" "}
              {collections.length === 1
                ? "collection"
                : "collections"}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Library;
import { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import type { Collection } from "../types";

function Library() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

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
      } catch (error) {
        setError("Could not load collections.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollections();
  }, []);

  if (isLoading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p>Loading collections...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-red-600">{error}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900">
          Story Card Library
        </h1>

        <p className="mt-2 text-zinc-600">
          Explore gentle learning collections for curious young minds.
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
    </main>
  );
}

export default Library;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Collection } from "../types";

function CollectionPage() {
  const { id } = useParams();

  const [collection, setCollection] = useState<Collection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCollection() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/collections/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch collection");
        }

        const data = await response.json();

        setCollection(data);
      } catch (error) {
        setError("Could not load collection.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollection();
  }, [id]);

  if (isLoading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p>Loading collection...</p>
      </main>
    );
  }

  if (error || !collection) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Collection not found
        </h1>

        <Link
          to="/library"
          className="mt-4 inline-block text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          ← Back to library
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link
        to="/library"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
      >
        ← Back to library
      </Link>

      <section className="mt-6">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Story Card Collection
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
          {collection.title}
        </h1>

        <p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-600">
          {collection.description}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-semibold text-zinc-900">
          Story Cards
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collection.cards.map((card) => (
            <Link
              key={card.id}
              to={`/collection/${collection.id}/card/${card.id}`}
              className="block"
            >
              <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <img
                  src={card.frontImage}
                  alt={card.title}
                  className="aspect-square w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {card.subtitle}
                  </p>

                  <p className="mt-4 text-sm font-medium text-zinc-700">
                    Open story card →
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CollectionPage;
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Collection } from "../types";

function StoryCardPage() {
  const { collectionId, cardId } = useParams();

  const navigate = useNavigate();

  const [collection, setCollection] = useState<Collection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchCollection() {
      try {
        const response = await fetch(
          `${API_URL}/api/collections/${collectionId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch collection");
        }

        const data = await response.json();

        setCollection(data);
      } catch {
        setError("Could not load story card.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollection();
  }, [collectionId, API_URL]);

  const currentCardIndex = collection
    ? collection.cards.findIndex(
        (card) => card.id === Number(cardId)
      )
    : -1;

  const card =
    collection && currentCardIndex >= 0
      ? collection.cards[currentCardIndex]
      : undefined;

  const previousCard =
    collection && currentCardIndex > 0
      ? collection.cards[currentCardIndex - 1]
      : undefined;

  const nextCard =
    collection && currentCardIndex >= 0
      ? collection.cards[currentCardIndex + 1]
      : undefined;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!collection) return;

      if (event.key === "ArrowRight" && nextCard) {
        setIsFlipped(false);

        navigate(
          `/collection/${collection.id}/card/${nextCard.id}`
        );
      }

      if (event.key === "ArrowLeft" && previousCard) {
        setIsFlipped(false);

        navigate(
          `/collection/${collection.id}/card/${previousCard.id}`
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, collection, previousCard, nextCard]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#faf9f6] px-4 py-10">
        <div className="mx-auto max-w-xl">
          <div className="mb-6 h-4 w-52 animate-pulse rounded bg-stone-200" />

          <div className="aspect-[148/210] w-full animate-pulse rounded-3xl bg-stone-200" />

          <div className="mx-auto mt-6 h-4 w-32 animate-pulse rounded bg-stone-200" />
        </div>
      </main>
    );
  }

  if (error || !collection) {
    return (
      <main className="min-h-screen bg-[#faf9f6] px-4 py-10">
        <div className="mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-8">
          <h1 className="text-2xl font-semibold text-stone-900">
            We couldn&apos;t load this story card
          </h1>

          <p className="mt-3 text-stone-600">
            The collection service may still be starting. Please try again.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-xl bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
            >
              Try again
            </button>

            <Link
              to="/"
              className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Back to library
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!card) {
    return (
      <main className="min-h-screen bg-[#faf9f6] px-4 py-10">
        <div className="mx-auto max-w-xl">
          <h1 className="text-2xl font-semibold text-stone-900">
            Story card not found
          </h1>

          <Link
            to={`/collection/${collection.id}`}
            className="mt-4 inline-block text-sm font-medium text-stone-500 hover:text-stone-900"
          >
            ← Back to collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-8 sm:py-10">
      {/* Back to collection */}
      <div className="mx-auto max-w-xl">
        <Link
          to={`/collection/${collection.id}`}
          className="text-sm font-medium text-stone-500 transition hover:text-stone-900"
        >
          ← Back to {collection.title}
        </Link>
      </div>

      {/* Card reader */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setIsFlipped((prev) => !prev)}
          className="
            w-full
            max-w-xl
            cursor-pointer
            text-left
            [perspective:1400px]
            focus:outline-none
          "
          aria-label={
            isFlipped
              ? `Show front of ${card.title}`
              : `Show back of ${card.title}`
          }
        >
          <div
            className={`
              relative
              aspect-[148/210]
              w-full
              transition-transform
              duration-700
              ease-in-out
              [transform-style:preserve-3d]
              ${
                isFlipped
                  ? "[transform:rotateY(180deg)]"
                  : ""
              }
            `}
          >
            {/* FRONT */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-3xl
                border
                border-stone-200
                bg-white
                shadow-xl
                [backface-visibility:hidden]
              "
            >
              <div className="flex h-full flex-col">
                <div className="min-h-0 flex-1">
                  <img
                    src={card.frontImage}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="shrink-0 border-t border-stone-100 bg-white px-6 py-5 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                    {card.title}
                  </h1>

                  <p className="mt-1 text-sm text-stone-500 sm:text-base">
                    {card.subtitle}
                  </p>

                  <p className="mt-3 text-xs font-medium uppercase tracking-widest text-stone-400">
                    Tap to flip
                  </p>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-3xl
                border
                border-stone-200
                bg-[#faf8f3]
                shadow-xl
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]
              "
            >
              <div className="flex h-full flex-col p-6 sm:p-7">
                
                {/* Title */}
                <div className="mt-3 shrink-0 text-center">
                  <h1 className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
                    {card.title}
                  </h1>

                  <p className="mt-1 text-sm text-stone-500">
                    {card.subtitle}
                  </p>
                </div>

                {/* Small image */}
                <div className="shrink-0">
                  <img
                    src={card.frontImage}
                    alt={card.title}
                    className="
                      mx-auto
                      aspect-square
                      w-32
                      rounded-xl
                      object-cover
                      shadow-sm
                      sm:w-36
                      mt-5
                    "
                  />
                </div>

                {/* Scrollable content */}
                <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-2">
                  <section>
                    <h2 className="text-base font-semibold text-stone-900 sm:text-lg">
                      Story Time
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-stone-700 sm:text-base sm:leading-7">
                      {card.storyTime}
                    </p>
                  </section>

                  <section className="mt-5">
                    <h2 className="text-base font-semibold text-stone-900 sm:text-lg">
                      Let&apos;s Wonder Together
                    </h2>

                    <ul className="mt-2 space-y-2 text-sm leading-6 text-stone-700 sm:text-base">
                      {card.wonderQuestions.map((question) => (
                        <li key={question} className="flex gap-2">
                          <span>•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-5">
                    <h2 className="text-base font-semibold text-stone-900 sm:text-lg">
                      Mini Facts
                    </h2>

                    <ul className="mt-2 space-y-2 text-sm leading-6 text-stone-700 sm:text-base">
                      {card.miniFacts.map((fact) => (
                        <li key={fact} className="flex gap-2">
                          <span>•</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="shrink-0 pt-4 text-center">
                  <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
                    Tap to flip back
                  </p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-6 flex max-w-xl items-center justify-between gap-4">
        <div className="w-28">
          {previousCard ? (
            <Link
              to={`/collection/${collection.id}/card/${previousCard.id}`}
              onClick={() => setIsFlipped(false)}
              className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
            >
              ← Previous
            </Link>
          ) : (
            <span />
          )}
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-stone-600">
            Card {currentCardIndex + 1} of {collection.cards.length}
          </p>

          <p className="mt-1 text-xs text-stone-400">
            Use ← and → to browse
          </p>
        </div>

        <div className="w-28 text-right">
          {nextCard ? (
            <Link
              to={`/collection/${collection.id}/card/${nextCard.id}`}
              onClick={() => setIsFlipped(false)}
              className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
            >
              Next →
            </Link>
          ) : (
            <Link
              to={`/collection/${collection.id}`}
              className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
            >
              Finish
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

export default StoryCardPage;
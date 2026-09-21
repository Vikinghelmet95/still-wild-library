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

  useEffect(() => {
    async function fetchCollection() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/collections/${collectionId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch collection");
        }

        const data = await response.json();

        setCollection(data);
      } catch (error) {
        setError("Could not load story card.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollection();
  }, [collectionId]);

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
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p>Loading story card...</p>
      </main>
    );
  }

  if (error || !collection) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
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

  if (!card) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Story card not found
        </h1>

        <Link
          to={`/collection/${collection.id}`}
          className="mt-4 inline-block text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          ← Back to collection
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      {/* Back to collection */}
      <div className="mx-auto max-w-md">
        <Link
          to={`/collection/${collection.id}`}
          className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
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
            max-w-md
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
                border-zinc-200
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

                <div className="shrink-0 border-t border-zinc-100 bg-white px-6 py-5 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {card.title}
                  </h1>

                  <p className="mt-1 text-sm text-zinc-500">
                    {card.subtitle}
                  </p>

                  <p className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-400">
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
                border-zinc-200
                bg-[#faf8f3]
                shadow-xl
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]
              "
            >
              <div className="flex h-full flex-col p-5">
                <div className="shrink-0">
                  <img
                    src={card.frontImage}
                    alt={card.title}
                    className="
                      mx-auto
                      aspect-square
                      w-28
                      rounded-xl
                      object-cover
                      shadow-sm
                    "
                  />
                </div>

                <div className="mt-3 shrink-0 text-center">
                  <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
                    {card.title}
                  </h1>

                  <p className="mt-1 text-sm text-zinc-500">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-2">
                  <section>
                    <h2 className="text-base font-semibold text-zinc-900">
                      Story Time
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                      {card.storyTime}
                    </p>
                  </section>

                  <section className="mt-5">
                    <h2 className="text-base font-semibold text-zinc-900">
                      Let&apos;s Wonder Together
                    </h2>

                    <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-700">
                      {card.wonderQuestions.map((question) => (
                        <li
                          key={question}
                          className="flex gap-2"
                        >
                          <span>•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-5">
                    <h2 className="text-base font-semibold text-zinc-900">
                      Mini Facts
                    </h2>

                    <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-700">
                      {card.miniFacts.map((fact) => (
                        <li
                          key={fact}
                          className="flex gap-2"
                        >
                          <span>•</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="shrink-0 pt-3 text-center">
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                    Tap to flip back
                  </p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Card counter */}
      <div className="mx-auto mt-5 max-w-md text-center">
        <p className="text-sm text-zinc-500">
          Card {currentCardIndex + 1} of{" "}
          {collection.cards.length}
        </p>

        <p className="mt-1 text-xs text-zinc-400">
          Use ← and → to browse
        </p>
      </div>

      {/* Previous / Next */}
      <div className="mx-auto mt-5 flex max-w-md items-center justify-between gap-4">
        {previousCard ? (
          <Link
            to={`/collection/${collection.id}/card/${previousCard.id}`}
            onClick={() => setIsFlipped(false)}
            className="
              rounded-xl
              border
              border-zinc-200
              bg-white
              px-4
              py-3
              text-sm
              font-medium
              text-zinc-700
              transition
              hover:bg-zinc-50
            "
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {nextCard ? (
          <Link
            to={`/collection/${collection.id}/card/${nextCard.id}`}
            onClick={() => setIsFlipped(false)}
            className="
              rounded-xl
              bg-zinc-900
              px-4
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:bg-zinc-700
            "
          >
            Next →
          </Link>
        ) : (
          <Link
            to={`/collection/${collection.id}`}
            className="
              rounded-xl
              bg-zinc-900
              px-4
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:bg-zinc-700
            "
          >
            Finish collection
          </Link>
        )}
      </div>
    </main>
  );
}

export default StoryCardPage;
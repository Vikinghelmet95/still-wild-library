import { Link } from "react-router-dom";
import type { Collection } from "../types";

interface CollectionCardProps {
  collection: Collection;
}

function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <article className="max-w-sm overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-sm">
      <img
        src={collection.coverImage}
        alt={collection.title}
        className="aspect-[2/3] w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-white">
          {collection.title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-300">
          {collection.description}
        </p>

        <Link
          to={`/collection/${collection.id}`}
          className="mt-5 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          Open collection
        </Link>
      </div>
    </article>
  );
}

export default CollectionCard;
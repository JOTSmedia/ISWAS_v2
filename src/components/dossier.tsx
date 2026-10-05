import { useEffect } from "react";
import type { Star } from "@/content";

export function Dossier({ star, onClose }: { star: Star | null; onClose: () => void }) {
  useEffect(() => {
    if (!star) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [star, onClose]);

  if (!star) return null;

  return (
    <div className="veil" role="presentation" onClick={onClose}>
      <article
        className="dossier"
        role="dialog"
        aria-modal="true"
        aria-labelledby="star-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close uc" type="button" onClick={onClose}>
          Close
        </button>
        <p className="kicker uc">Star</p>
        <h3 id="star-title" className="uc">
          {star.name}
        </h3>
        <p className="meta uc">{star.origin}</p>
        <img className="shot" src={star.image} alt={star.name} />
        <p className="dossier-copy caps">{star.body}</p>
      </article>
    </div>
  );
}

import { Star } from "lucide-react";

export function Rating({ reviews }: { reviews: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Note 4,5 sur 5, ${reviews} avis`}>
      <span className="flex gap-0.5">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill={index < 4 ? "currentColor" : "none"} strokeWidth={1.7} />)}</span>
      <span className="text-xs">({reviews})</span>
    </div>
  );
}

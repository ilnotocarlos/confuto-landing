import { cn } from "@/lib/utils";

const colorMap = {
  forest: "#1B3A2D",
  mint: "#C8E6D0",
  blush: "#F5C1B5",
  butter: "#F6E8A0",
};

interface PatternBackgroundProps {
  variant: "dots" | "blobs" | "waves";
  color?: keyof typeof colorMap;
  opacity?: number;
  className?: string;
}

function DotsPattern({ color }: { color: string }) {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

function BlobsPattern({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="120" cy="100" r="140" fill={color} />
      <circle cx="650" cy="450" r="180" fill={color} />
      <ellipse cx="400" cy="280" rx="120" ry="90" fill={color} />
      <circle cx="750" cy="80" r="80" fill={color} />
      <ellipse cx="200" cy="500" rx="100" ry="70" fill={color} />
    </svg>
  );
}

function WavesPattern({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M0,200 C200,300 400,100 600,200 C800,300 1000,100 1200,200 L1200,600 L0,600 Z"
        fill={color}
      />
      <path
        d="M0,350 C150,420 350,280 600,350 C850,420 1050,280 1200,350 L1200,600 L0,600 Z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
}

export function PatternBackground({
  variant,
  color = "forest",
  opacity = 0.1,
  className,
}: PatternBackgroundProps) {
  const hex = colorMap[color];

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      style={{ opacity }}
    >
      {variant === "dots" && <DotsPattern color={hex} />}
      {variant === "blobs" && <BlobsPattern color={hex} />}
      {variant === "waves" && <WavesPattern color={hex} />}
    </div>
  );
}

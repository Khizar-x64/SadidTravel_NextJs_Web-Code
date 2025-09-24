import { cn } from "@/lib/utils";

export const Icons = {
  Logo: ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="40"
        fontFamily="var(--font-playfair-display), serif"
        fontSize="40"
        fontWeight="bold"
        className="fill-primary dark:fill-primary-foreground"
      >
        Sadid
      </text>
      <text
        x="105"
        y="40"
        fontFamily="var(--font-pt-sans), sans-serif"
        fontSize="40"
        fontWeight="normal"
        className="fill-foreground"
      >
        Travels
      </text>
      <path
        d="M100 5 Q 105 0, 110 5"
        stroke="url(#gold-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M95 10 Q 105 0, 115 10"
        stroke="url(#gold-gradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="2 2"
      />
    </svg>
  ),
};

import { cn } from "@/lib/utils";

export const Icons = {
  Logo: ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 50"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <text
        x="0"
        y="40"
        fontFamily="var(--font-playfair-display)"
        fontSize="40"
        fontWeight="bold"
        className="fill-primary dark:fill-primary-foreground"
      >
        Sadid
      </text>
      <text
        x="105"
        y="40"
        fontFamily="var(--font-pt-sans)"
        fontSize="40"
        fontWeight="normal"
        className="fill-foreground"
      >
        Travels
      </text>
    </svg>
  ),
};

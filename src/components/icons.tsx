
import { cn } from "@/lib/utils";
import Image from "next/image";

const SadidLogoIcon = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    className={cn("h-12 w-12", className)}
    {...props}
  >
    <rect width="50" height="50" rx="10" fill="hsl(var(--primary))" />
    <path
      d="M25 10C16.716 10 10 16.716 10 25C10 33.284 16.716 40 25 40C33.284 40 40 33.284 40 25"
      stroke="hsl(var(--accent))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M25 10C29.142 10 32.5 13.358 32.5 17.5"
      stroke="hsl(var(--accent))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);


export const Icons = {
  Logo: ({ className, ...props }: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className={cn("h-10 w-auto", className)}
      {...props}
    >
      <text x="10" y="35" fontFamily="var(--font-playfair-display), serif" fontSize="30" fontWeight="bold" fill="currentColor">
        Sadid Travels
      </text>
    </svg>
  ),
  LogoIcon: SadidLogoIcon,
};

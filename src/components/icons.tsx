
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  LogoIcon: ({ className, src, ...props }: React.ComponentProps<typeof Image>) => (
    <Image
      src={src || "/logos/logo.svg"}
      alt="Sadid Travels Icon"
      width={50}
      height={50}
      className={cn("h-12 w-12", className)}
      priority
      {...props}
    />
  ),
};

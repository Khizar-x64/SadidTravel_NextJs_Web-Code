import { cn } from "@/lib/utils";
import Image from "next/image";

export const Icons = {
  Logo: ({ className, ...props }: React.ComponentProps<typeof Image>) => (
    <Image
      src="/logo.svg"
      alt="Sadid Travels Logo"
      width={120}
      height={32}
      className={cn("h-8 w-auto", className)}
      priority
      {...props}
    />
  ),
};

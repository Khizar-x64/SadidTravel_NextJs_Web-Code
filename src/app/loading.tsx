import { Icons } from "@/components/icons";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-24 w-24">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                 <Icons.Logo className="h-10 animate-pulse" />
            </div>
        </div>
        <p className="text-lg font-headline text-primary animate-pulse">
            Loading your spiritual journey...
        </p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.1-.5.1-.2 0-.9-.3-1.8-1.1-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4-.1-.1-1.5-3.6-1.7-4-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.3c.1.1 1.5 2.3 3.7 3.2.5.2.9.4 1.2.5.5.2.9.1 1.2-.1.4-.2.6-.7.8-.9.1-.1.1-.3 0-.4 0-.1-.1-.1-.2-.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    </svg>
);


export default function WhatsAppFAB() {
    const [isVibrating, setIsVibrating] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVibrating(true);
            const stopVibration = setTimeout(() => setIsVibrating(false), 300); // Vibrate for 300ms
            return () => clearTimeout(stopVibration);
        }, 1000); // Start vibrating after 1 second

        return () => clearTimeout(timer);
    }, []);

    const fabClasses = `fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 z-50 ${isVibrating ? 'animate-vibrate' : ''}`;

    return (
        <Link href="https://wa.me/12242241652" target="_blank" rel="noopener noreferrer" className={fabClasses} aria-label="Chat on WhatsApp">
            <WhatsappIcon className="h-9 w-9" />
        </Link>
    );
}

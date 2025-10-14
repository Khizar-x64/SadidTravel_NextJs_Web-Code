
"use client";

import Link from "next/link";

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
        <rect width="48" height="48" rx="24" fill="hsl(var(--primary))"></rect>
        <path d="M32.9998 30.719C31.5998 30.719 30.2398 30.559 28.9598 30.239C28.5598 30.119 28.1198 30.239 27.8398 30.559L25.8398 32.959C22.6398 31.439 19.7598 28.559 18.2398 25.359L20.6398 23.359C20.9598 23.039 21.0798 22.599 20.9598 22.199C20.6398 20.919 20.4798 19.559 20.4798 18.159C20.4798 17.639 20.0398 17.199 19.5198 17.199H17.4398C16.9198 17.199 16.4798 17.639 16.4798 18.159C16.4798 25.999 22.1998 32.719 29.9998 32.719C30.5198 32.719 30.9598 32.279 30.9598 31.759V29.679C30.9598 29.159 30.5198 28.719 29.9998 28.719C29.9998 28.719 29.9998 30.719 32.9998 30.719Z" fill="white"/>
    </svg>
);


export default function PhoneFAB() {
    return (
        <Link
            href="tel:+17543992498"
            className="text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-wave"
            aria-label="Call Us"
            style={{ animationDelay: '0.2s' }}
        >
            <PhoneIcon className="h-16 w-16" />
        </Link>
    );
}

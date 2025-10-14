
"use client";

import Link from "next/link";

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FC3F7"/>
            <stop offset="100%" stopColor="#1976D2"/>
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#blueGradient)" />
        <path fill="#FFFFFF" d="M31.6,30.2c-1.1,0-2.2-0.2-3.2-0.6c-0.5-0.2-1.1-0.1-1.5,0.3l-2.2,2.2c-4.1-2.2-7.4-5.5-9.6-9.6l2.2-2.2
            c0.4-0.4,0.5-1,0.3-1.5c-0.4-1-0.6-2.1-0.6-3.2c0-0.8-0.7-1.5-1.5-1.5h-5C10.7,14.1,10,14.8,10,15.6c0,10.5,8.5,19,19,19
            c0.8,0,1.5-0.7,1.5-1.5v-5C33.1,30.9,32.4,30.2,31.6,30.2z"/>
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


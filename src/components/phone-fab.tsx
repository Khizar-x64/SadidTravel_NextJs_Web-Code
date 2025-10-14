
"use client";

import Link from "next/link";

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
        <rect width="48" height="48" rx="24" fill="hsl(var(--primary))"></rect>
        <path d="M31.5,22.5c-0.1-0.2-0.2-0.4-0.4-0.5c-1.2-0.8-2.5-1.5-3.8-2.1c-0.5-0.2-1.1-0.2-1.6,0.1c-0.4,0.3-0.8,0.7-1,1.2
	c-0.3,0.5-0.2,1.1,0.1,1.6c0.5,0.8,1.2,1.5,1.9,2.2c1.4,1.4,2.9,2.9,4.3,4.3c0.3,0.3,0.7,0.5,1.1,0.5c0.5,0,1-0.2,1.3-0.6
	c0.5-0.6,0.5-1.5-0.1-2.1c-0.8-0.9-1.6-1.8-2.4-2.7c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.2,0-0.2-0.1c1.2-1.6,2.5-3.2,3.7-4.8
	C32,23.6,31.8,22.9,31.5,22.5z M23.5,16.5c-4.4,0-8,3.6-8,8c0,0.8,0.1,1.5,0.3,2.2c-2.6,0.8-4.5,3.1-4.5,5.9c0,3.4,2.8,6.2,6.2,6.2
	c2.8,0,5.2-1.9,5.9-4.5c0.7,0.2,1.5,0.3,2.2,0.3c4.4,0,8-3.6,8-8S27.9,16.5,23.5,16.5z" fill="#fff"/>
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


"use client"

import { useEffect, useState } from "react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";
import { ArrowRight } from "lucide-react";

export default function Payment() {
    const [paddle, setPaddle] = useState<Paddle>();
    useEffect(() => {
        initializePaddle({
            environment: 'sandbox',
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
        }).then((paddle) => {
            setPaddle(paddle);
        });
    }, [])

    const handleCheckout = () => {
        if (!paddle) return alert('Paddle not initialized');
        paddle?.Checkout.open({
            items: [{
                priceId: 'pri_01jkdwnt00f074y5sjmw92kf5c',
                quantity: 1,
            }],
            settings: {
                displayMode: 'overlay',
                theme: 'light',
                successUrl: 'http://localhost:3000/success'
            }
        });
    }


    return (
        <div>
            <button className="mt-8 w-full flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-150" onClick={handleCheckout}>
            Start Trial
            <ArrowRight className="ml-2 w-5 h-5" />
            </button>
        </div>
    )
}


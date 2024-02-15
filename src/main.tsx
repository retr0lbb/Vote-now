import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Analytics } from '@vercel/analytics/react';
import './index.css'
import React from 'react'
import { Toaster } from "@/components/ui/sonner.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <Toaster />
        <Analytics/>
    </React.StrictMode>
)

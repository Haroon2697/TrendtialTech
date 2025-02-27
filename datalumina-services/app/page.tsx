"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import App with no SSR
const App = dynamic(() => import('../src/pages/App'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    )
}
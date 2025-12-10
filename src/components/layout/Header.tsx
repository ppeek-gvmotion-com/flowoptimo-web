"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.flowoptimo.com";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-primary-600">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-normal text-white">FLOW</span>
          <span className="text-xl font-bold text-white">OPTIMO</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/features"
            className="text-white/90 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-white/90 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <a
            href={`${APP_URL}/login`}
            className="text-white/90 hover:text-white transition-colors"
          >
            Log in
          </a>
          <Link href="/pricing">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-600 border-t border-primary-500 px-4 py-4 space-y-4">
          <Link
            href="/features"
            className="block text-white/90 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block text-white/90 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <a
            href={`${APP_URL}/login`}
            className="block text-white/90 hover:text-white"
          >
            Log in
          </a>
          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" size="sm" className="w-full">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

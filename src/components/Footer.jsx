import React from "react";

export default function Footer() {
  return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 py-6">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Vyone Louis. All rights reserved.
            </p>
          </div>
        </footer>
        );
}

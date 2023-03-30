import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mx-auto" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="px-4 py-12 mx-auto">
          <div className="flex flex-wrap items-baseline justify-center">
            <span className="mt-2 text-sm font-light">
              <text className="text-gray-500">Contact: </text>
              <a className="text-blue-800" href="linkedin.com/in/ivy-hw-lee"> &middot; in/ivy-hw-lee</a>
              <a className="text-blue-800" href="github.com/hlee443"> &middot; github/hlee443</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

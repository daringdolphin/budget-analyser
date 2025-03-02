import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Singapore FY25 Budget Navigator</h3>
            <p className="text-sm text-slate-400">
              This tool provides guidance on Singapore's FY25 Budget initiatives based on your profession. All
              information is for reference only.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Official Budget Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ministry of Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Budget Highlights
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tax Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-slate-400 mb-2">For inquiries about the budget, please contact:</p>
            <p className="text-sm">
              <a href="mailto:budget@gov.sg" className="hover:text-white transition-colors">
                budget@gov.sg
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Singapore Budget Navigator. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Last updated: February 28, 2025</p>
        </div>
      </div>
    </footer>
  )
}


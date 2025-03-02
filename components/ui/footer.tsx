import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Singapore FY25 Budget Navigator</h3>
            <p className="text-sm text-slate-400">
              This tool provides guidance on Singapore&apos;s FY25 Budget initiatives based on your profession. All
              information is for reference only.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.mof.gov.sg/singaporebudget"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Official Budget Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.mof.gov.sg/singaporebudget/budget-2024/budget-statement"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Budget Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
              <p className="mt-4 text-sm text-gray-100">
                © {new Date().getFullYear()} D&O Infra B.V. Alle rechten voorbehouden.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navigatie</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/" className="text-gray-100 hover:text-white font-medium">Home</a></li>
                  <li><a href="/over-ons" className="text-gray-100 hover:text-white font-medium">Over ons</a></li>
                  <li><a href="/diensten" className="text-gray-100 hover:text-white font-medium">Onze diensten</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Informatie</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/blog" className="text-gray-100 hover:text-white font-medium">Blog</a></li>
                  <li><a href="/portfolio" className="text-gray-100 hover:text-white font-medium">Portfolio</a></li>
                  <li><a href="/vacatures" className="text-gray-100 hover:text-white font-medium">Vacatures</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/contact" className="text-gray-100 hover:text-white font-medium">Contact</a></li>
                  <li><span className="text-gray-100 font-medium">info@doinfra.nl</span></li>
                  <li><span className="text-gray-100 font-medium">+31 (0)6 12345678</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
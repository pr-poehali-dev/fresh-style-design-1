import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import DeliveryPage from '@/pages/DeliveryPage';
import AboutPage from '@/pages/AboutPage';
import ReviewsPage from '@/pages/ReviewsPage';
import ContactsPage from '@/pages/ContactsPage';
import ProfilePage from '@/pages/ProfilePage';
import BrandPage from '@/pages/BrandPage';

const VALID_PAGES = ['home', 'catalog', 'delivery', 'about', 'reviews', 'contacts', 'profile', 'brand'];

function getPageFromHash(): string {
  const hash = window.location.hash.replace('#', '');
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const page = getPageFromHash();
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'catalog': return <CatalogPage />;
      case 'delivery': return <DeliveryPage />;
      case 'about': return <AboutPage />;
      case 'reviews': return <ReviewsPage />;
      case 'contacts': return <ContactsPage />;
      case 'profile': return <ProfilePage />;
      case 'brand': return <BrandPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar activePage={activePage} onNavigate={navigate} onCartOpen={() => setCartOpen(true)} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
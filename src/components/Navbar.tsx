import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { cartStore } from '@/store/cartStore';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onCartOpen: () => void;
}

export default function Navbar({ activePage, onNavigate, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const unsub = cartStore.subscribe(() => setTotalItems(cartStore.getTotalItems()));
    setTotalItems(cartStore.getTotalItems());
    return unsub;
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'delivery', label: 'Доставка' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'about', label: 'О нас' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-brand-green to-brand-green-light rounded-xl flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform">
              🥦
            </div>
            <span className="font-unbounded text-xl font-bold text-brand-green">
              Свежо<span className="text-brand-orange">!</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activePage === link.id
                    ? 'text-brand-green bg-accent'
                    : 'text-foreground/70 hover:text-brand-green hover:bg-accent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('profile')}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-brand-green hover:bg-accent transition-all"
            >
              <Icon name="User" size={16} />
              Профиль
            </button>

            <button
              onClick={onCartOpen}
              className="relative flex items-center gap-2 px-3 py-2 bg-brand-green text-white rounded-xl font-medium text-sm btn-bounce shadow-md hover:bg-brand-green-light"
            >
              <Icon name="ShoppingCart" size={18} />
              <span className="hidden sm:inline">Корзина</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-orange text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border py-3 animate-fade-in">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMobileOpen(false); }}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  activePage === link.id ? 'text-brand-green bg-accent' : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('profile'); setMobileOpen(false); }}
              className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              Профиль
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

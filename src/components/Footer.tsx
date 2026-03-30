import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-green to-brand-green-light rounded-xl flex items-center justify-center text-lg">
                🥦
              </div>
              <span className="font-unbounded text-xl font-bold">
                Свежо<span className="text-brand-orange">!</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Свежие овощи, фрукты и зелень с доставкой на дом. Работаем с 2018 года.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Магазин</h4>
            <ul className="space-y-2">
              {[
                { id: 'catalog', label: 'Каталог' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'reviews', label: 'Отзывы' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Компания</h4>
            <ul className="space-y-2">
              {[
                { id: 'about', label: 'О нас' },
                { id: 'contacts', label: 'Контакты' },
                { id: 'profile', label: 'Профиль' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Контакты</h4>
            <div className="space-y-2">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Icon name="Phone" size={14} /> +7 (495) 123-45-67
              </a>
              <a href="mailto:hello@svezho.ru" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Icon name="Mail" size={14} /> hello@svezho.ru
              </a>
              <p className="flex items-center gap-2 text-white/60 text-sm">
                <Icon name="Clock" size={14} /> Пн–Вс, 8:00 – 22:00
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2026 Свежо! Все права защищены.</p>
          <div className="flex items-center gap-1 text-white/40 text-xs">
            <span className="text-green-400">🌱</span> Эко-доставка · Натуральные продукты
          </div>
        </div>
      </div>
    </footer>
  );
}

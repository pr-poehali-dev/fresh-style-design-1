import { useState } from 'react';
import Icon from '@/components/ui/icon';

const mockOrders = [
  { id: '#3401', date: '28 марта 2026', status: 'Доставлен', items: ['Томаты черри', 'Брокколи', 'Базилик'], total: 387 },
  { id: '#3387', date: '21 марта 2026', status: 'Доставлен', items: ['Манго', 'Авокадо', 'Виноград'], total: 597 },
  { id: '#3312', date: '14 марта 2026', status: 'Доставлен', items: ['Огурцы', 'Морковь', 'Петрушка'], total: 197 },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'settings'>('orders');

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Profile header */}
        <div className="bg-gradient-to-br from-brand-green to-brand-green-light rounded-3xl p-8 mb-6 text-white relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-8xl opacity-20 select-none">🌿</div>
          <div className="relative z-10 flex items-center gap-5">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h1 className="text-2xl font-black">Иван Петров</h1>
              <p className="text-white/80 text-sm">ivan@example.com</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-white/20 text-white text-xs px-2.5 py-0.5 rounded-full font-medium">🌱 Постоянный клиент</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-3 gap-4 mt-6">
            {[
              { value: '12', label: 'Заказов' },
              { value: '2 380 ₽', label: 'Сэкономлено' },
              { value: '4.9★', label: 'Рейтинг' },
            ].map(stat => (
              <div key={stat.label} className="text-center bg-white/10 rounded-2xl py-3">
                <p className="text-lg font-black">{stat.value}</p>
                <p className="text-xs text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 rounded-2xl font-semibold text-sm transition-all ${
              activeTab === 'orders' ? 'bg-brand-green text-white shadow-md' : 'bg-white border border-border text-foreground hover:bg-muted'
            }`}
          >
            История заказов
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-3 rounded-2xl font-semibold text-sm transition-all ${
              activeTab === 'settings' ? 'bg-brand-green text-white shadow-md' : 'bg-white border border-border text-foreground hover:bg-muted'
            }`}
          >
            Настройки
          </button>
        </div>

        {activeTab === 'orders' ? (
          <div className="space-y-3">
            {mockOrders.map(order => (
              <div key={order.id} className="bg-white rounded-3xl border border-border/60 p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-foreground">{order.id}</p>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <span className="bg-accent text-brand-green text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="CheckCircle" size={12} /> {order.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {order.items.map(item => (
                    <span key={item} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">{item}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">Итого</span>
                  <span className="font-bold text-brand-green">{order.total} ₽</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Имя</label>
              <input defaultValue="Иван Петров" className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input defaultValue="ivan@example.com" className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Телефон</label>
              <input defaultValue="+7 (999) 123-45-67" className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Адрес доставки</label>
              <input defaultValue="Москва, ул. Садовая, д. 5, кв. 12" className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30" />
            </div>
            <button className="w-full py-3 bg-brand-green text-white rounded-xl font-bold btn-bounce">
              Сохранить изменения
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

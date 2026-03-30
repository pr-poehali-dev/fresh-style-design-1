import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', message: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-black mb-3">
            <span className="text-gradient">Контакты</span>
          </h1>
          <p className="text-muted-foreground text-lg">Всегда рады помочь</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', sub: 'Пн–Вс, 8:00 – 22:00', color: 'text-brand-green', bg: 'bg-accent' },
              { icon: 'Mail', title: 'Email', value: 'hello@svezho.ru', sub: 'Ответим в течение часа', color: 'text-blue-500', bg: 'bg-blue-50' },
              { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Фермерская, 12', sub: 'Самовывоз с 9:00 до 20:00', color: 'text-brand-orange', bg: 'bg-orange-50' },
              { icon: 'MessageCircle', title: 'Telegram', value: '@svezho_shop', sub: 'Быстрые ответы', color: 'text-sky-500', bg: 'bg-sky-50' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.bg}`}>
                  <Icon name={item.icon} size={22} className={item.color} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.title}</p>
                  <p className="font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h2 className="font-black text-xl text-foreground mb-6">Написать нам</h2>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="text-5xl mb-3">✅</div>
                <p className="font-bold text-brand-green text-xl">Сообщение отправлено!</p>
                <p className="text-sm text-muted-foreground mt-1">Мы ответим вам в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Ваше имя</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Телефон</label>
                  <input
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Ваш вопрос или пожелание..."
                    className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30 resize-none"
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-brand-green to-brand-green-light text-white rounded-2xl font-bold btn-bounce shadow-lg">
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import Icon from '@/components/ui/icon';

export default function DeliveryPage() {
  const zones = [
    { zone: 'Центр города', time: '60–90 минут', price: 'от 199 ₽', free: 'от 1200 ₽' },
    { zone: 'В пределах МКАД', time: '90–120 минут', price: 'от 299 ₽', free: 'от 1500 ₽' },
    { zone: 'За МКАД (до 15 км)', time: '2–3 часа', price: 'от 399 ₽', free: 'от 2500 ₽' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-black mb-3">
            <span className="text-gradient">Доставка</span>
          </h1>
          <p className="text-muted-foreground text-lg">Свежие продукты прямо к вашей двери</p>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-3xl border border-border/60 p-8 mb-8 shadow-sm">
          <h2 className="font-black text-2xl text-foreground mb-6">Как это работает</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '1', icon: '🛒', title: 'Выберите товары', desc: 'Добавьте в корзину из каталога' },
              { step: '2', icon: '📍', title: 'Укажите адрес', desc: 'Введите адрес доставки' },
              { step: '3', icon: '💳', title: 'Оплатите', desc: 'Картой или наличными' },
              { step: '4', icon: '🚚', title: 'Получите заказ', desc: 'Курьер привезёт за 90 минут' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-green text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zones */}
        <div className="bg-white rounded-3xl border border-border/60 p-8 mb-8 shadow-sm">
          <h2 className="font-black text-2xl text-foreground mb-6">Зоны и стоимость</h2>
          <div className="space-y-3">
            {zones.map((zone, i) => (
              <div key={i} className="flex flex-wrap items-center justify-between p-4 bg-muted/50 rounded-2xl gap-2">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={18} className="text-brand-green" />
                  <div>
                    <p className="font-semibold text-foreground">{zone.zone}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={11} /> {zone.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-brand-green">{zone.price}</p>
                  <p className="text-xs text-muted-foreground">Бесплатно {zone.free}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info blocks */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-accent rounded-3xl p-6 border border-brand-green/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⏰</span>
              <div>
                <h3 className="font-bold text-foreground mb-2">Время работы</h3>
                <p className="text-sm text-muted-foreground">Пн–Пт: 8:00 – 22:00</p>
                <p className="text-sm text-muted-foreground">Сб–Вс: 9:00 – 21:00</p>
                <p className="text-xs text-brand-green font-medium mt-2">Принимаем заказы круглосуточно</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📦</span>
              <div>
                <h3 className="font-bold text-foreground mb-2">Упаковка</h3>
                <p className="text-sm text-muted-foreground">Используем эко-упаковку из картона и биоразлагаемых материалов. Хрупкие товары упакованы отдельно.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/0434d8f9-6743-4a59-811e-aa0ec7e48ce8/files/13f9d93a-2bd4-436b-b405-8ce8455f56fc.jpg';
const VEGGIES_IMAGE = 'https://cdn.poehali.dev/projects/0434d8f9-6743-4a59-811e-aa0ec7e48ce8/files/a80ed4fd-beb7-47ef-ba1f-b0530082f8c4.jpg';
const FRUITS_IMAGE = 'https://cdn.poehali.dev/projects/0434d8f9-6743-4a59-811e-aa0ec7e48ce8/files/999b1071-071c-4c02-95b0-3657727c4bdf.jpg';

const reviews = [
  { name: 'Анна К.', text: 'Заказываю каждую неделю! Овощи всегда свежие, доставка быстрая. Очень довольна!', rating: 5, avatar: '👩' },
  { name: 'Михаил Р.', text: 'Отличный выбор фруктов, особенно манго — просто объедение. Буду заказывать ещё.', rating: 5, avatar: '👨' },
  { name: 'Светлана Д.', text: 'Нашла свежую рукколу в ноябре! Качество на высоте, упаковка аккуратная.', rating: 5, avatar: '👩‍🦱' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-pattern">
        {/* Background blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #4caf50, transparent)' }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #f57c00, transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-accent border border-brand-green/20 text-brand-green font-medium text-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
                <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse-green inline-block" />
                Доставка сегодня от 90 минут
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-[0.95] mb-6 animate-fade-up animate-fade-up-delay-1">
                <span className="text-gradient">Свежо</span>
                <span className="text-brand-orange">!</span>
                <br />
                <span className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold">
                  Овощи и фрукты
                </span>
                <br />
                <span className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold">
                  прямо к столу
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed animate-fade-up animate-fade-up-delay-2">
                Свежие овощи, фрукты и зелень от местных фермеров и лучших мировых производителей. Без химии, с заботой о вашем здоровье.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 animate-fade-up animate-fade-up-delay-3">
                <button
                  onClick={() => onNavigate('catalog')}
                  className="flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-green to-brand-green-light text-white rounded-2xl font-bold text-base btn-bounce shadow-lg"
                >
                  <span>🛒</span> Перейти в каталог
                </button>
                <button
                  onClick={() => onNavigate('delivery')}
                  className="flex items-center gap-2 px-7 py-4 bg-white border-2 border-border text-foreground rounded-2xl font-semibold text-base btn-bounce hover:border-brand-green hover:text-brand-green transition-colors"
                >
                  <Icon name="Truck" size={18} /> Условия доставки
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-6 animate-fade-up animate-fade-up-delay-4">
                {[
                  { value: '200+', label: 'Товаров' },
                  { value: '4.9★', label: 'Рейтинг' },
                  { value: '2000+', label: 'Клиентов' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-brand-green">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative animate-fade-up animate-fade-up-delay-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img src={HERO_IMAGE} alt="Свежие овощи и фрукты" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-1/3 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 animate-float">
                <span className="text-2xl">🥦</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Брокколи</p>
                  <p className="text-xs text-brand-green font-semibold">129 ₽</p>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/3 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 animate-float-delay">
                <span className="text-2xl">🍅</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Томаты черри</p>
                  <p className="text-xs text-brand-green font-semibold">189 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌱', title: 'Только свежее', desc: 'Ежедневная поставка от фермеров' },
              { icon: '🚚', title: 'Быстрая доставка', desc: 'От 90 минут до вашей двери' },
              { icon: '✅', title: 'Контроль качества', desc: 'Каждая партия проходит проверку' },
              { icon: '♻️', title: 'Эко-упаковка', desc: 'Картон и биоразлагаемые пакеты' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl bg-muted/50 hover:bg-accent transition-colors group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories showcase */}
      <section className="py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-black mb-3">
              <span className="text-gradient">Наш ассортимент</span>
            </h2>
            <p className="text-muted-foreground text-lg">Три категории свежести</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🥦', title: 'Овощи', desc: 'Свежие с грядки каждое утро', color: 'from-green-400 to-emerald-600', image: VEGGIES_IMAGE, cat: 'vegetables' },
              { emoji: '🍊', title: 'Фрукты', desc: 'Сезонные и экзотические', color: 'from-orange-400 to-amber-500', image: FRUITS_IMAGE, cat: 'fruits' },
              { emoji: '🌿', title: 'Зелень', desc: 'Ароматная и свежесрезанная', color: 'from-lime-400 to-green-500', image: VEGGIES_IMAGE, cat: 'greens' },
            ].map((cat) => (
              <button
                key={cat.cat}
                onClick={() => onNavigate('catalog')}
                className="group relative rounded-3xl overflow-hidden h-56 card-hover text-left"
              >
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-70`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-4xl mb-2">{cat.emoji}</span>
                  <h3 className="text-2xl font-black text-white">{cat.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{cat.desc}</p>
                  <div className="flex items-center gap-1 text-white/90 text-sm font-medium mt-2">
                    Смотреть всё <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-black mb-3">
              Отзывы <span className="text-gradient">покупателей</span>
            </h2>
            <p className="text-muted-foreground">Более 2000 довольных клиентов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-muted/50 rounded-3xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{review.name}</p>
                    <p className="text-yellow-500 text-xs">{'★'.repeat(review.rating)}</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-brand-green to-brand-green-light rounded-3xl p-10 overflow-hidden text-center">
            <div className="absolute -top-8 -right-8 text-[120px] opacity-20 select-none rotate-12">🥬</div>
            <div className="absolute -bottom-8 -left-8 text-[120px] opacity-20 select-none -rotate-12">🍅</div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Первый заказ — скидка 10%!
              </h2>
              <p className="text-white/80 mb-6 text-lg">Промокод при регистрации. Доставка от 1500 ₽ — бесплатно.</p>
              <button
                onClick={() => onNavigate('catalog')}
                className="px-8 py-4 bg-white text-brand-green font-bold text-base rounded-2xl btn-bounce shadow-lg hover:shadow-xl"
              >
                Начать покупки 🛒
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

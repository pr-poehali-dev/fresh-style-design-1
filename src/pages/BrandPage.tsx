export default function BrandPage() {
  const colors = [
    { name: 'Фирменный зелёный', hex: '#2d7a3a', var: '--brand-green', desc: 'Основной. Логотип, кнопки, акценты', text: 'white' },
    { name: 'Светлый зелёный', hex: '#4caf50', var: '--brand-green-light', desc: 'Градиенты, hover-состояния', text: 'white' },
    { name: 'Фирменный оранжевый', hex: '#f57c00', var: '--brand-orange', desc: 'Акценты, значки «!», бейджи', text: 'white' },
    { name: 'Светлый оранжевый', hex: '#ff9800', var: '--brand-orange-light', desc: 'Иконки, подсветка', text: 'white' },
    { name: 'Жёлтый', hex: '#fbc02d', var: '--brand-yellow', desc: 'Скидки, рейтинги, звёзды', text: 'white' },
    { name: 'Кремовый', hex: '#faf8f2', var: '--brand-cream', desc: 'Фоновые секции, карточки', text: '#1a2e1c' },
    { name: 'Тёмный', hex: '#1a2e1c', var: '--brand-dark', desc: 'Футер, тексты на светлом', text: 'white' },
    { name: 'Мuted', hex: '#f0ede4', var: 'muted', desc: 'Фоны полей, теги, подложки', text: '#1a2e1c' },
  ];

  const fonts = [
    {
      name: 'Unbounded',
      role: 'Дисплейный / Логотип',
      usage: 'Название бренда, hero-заголовки, крупные акценты',
      sample: 'Свежо!',
      weights: ['700', '900'],
      class: 'font-unbounded',
      color: 'text-brand-green',
    },
    {
      name: 'Golos Text',
      role: 'Основной',
      usage: 'Все тексты сайта: заголовки разделов, описания, кнопки, навигация',
      sample: 'Овощи и фрукты прямо к столу',
      weights: ['400', '500', '600', '700'],
      class: 'font-golos',
      color: 'text-foreground',
    },
  ];

  const logos = [
    {
      label: 'Основной (светлый фон)',
      bg: 'bg-[#faf8f2]',
      border: 'border border-border',
      content: (
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-2xl flex items-center justify-center text-3xl shadow-lg">🥦</div>
          <div>
            <div className="font-unbounded text-3xl font-black text-[#2d7a3a] leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
            <div className="font-golos text-xs text-[#2d7a3a]/60 tracking-widest uppercase mt-0.5">овощи · фрукты · зелень</div>
          </div>
        </div>
      ),
    },
    {
      label: 'Инвертированный (тёмный фон)',
      bg: 'bg-[#1a2e1c]',
      border: '',
      content: (
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-3xl">🥦</div>
          <div>
            <div className="font-unbounded text-3xl font-black text-white leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
            <div className="font-golos text-xs text-white/50 tracking-widest uppercase mt-0.5">овощи · фрукты · зелень</div>
          </div>
        </div>
      ),
    },
    {
      label: 'Иконка (аватар / favicon)',
      bg: 'bg-[#faf8f2]',
      border: 'border border-border',
      content: (
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-3xl flex items-center justify-center text-4xl shadow-xl">🥦</div>
          <div className="w-20 h-20 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-full flex items-center justify-center text-4xl shadow-xl">🥦</div>
          <div className="w-20 h-20 bg-[#1a2e1c] rounded-3xl flex items-center justify-center">
            <span className="font-unbounded text-2xl font-black text-white">С<span className="text-[#f57c00]">!</span></span>
          </div>
        </div>
      ),
    },
    {
      label: 'Монохромный (ч/б)',
      bg: 'bg-white',
      border: 'border border-border',
      content: (
        <div className="flex items-center gap-3" style={{ filter: 'grayscale(1)' }}>
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-3xl">🥦</div>
          <div>
            <div className="font-unbounded text-3xl font-black text-black leading-none">Свежо!</div>
            <div className="font-golos text-xs text-black/50 tracking-widest uppercase mt-0.5">овощи · фрукты · зелень</div>
          </div>
        </div>
      ),
    },
  ];

  const doRules = [
    { icon: '✅', text: 'Используй логотип на контрастных фонах — белом, кремовом, тёмно-зелёном' },
    { icon: '✅', text: 'Сохраняй пропорции при масштабировании' },
    { icon: '✅', text: 'Оставляй защитную зону вокруг логотипа (≥ высота буквы «С»)' },
    { icon: '✅', text: 'На фото-фоне используй белую или тёмную версию' },
    { icon: '✅', text: 'Монохромная версия допустима для тиснения, штампов, факсов' },
  ];

  const dontRules = [
    { icon: '❌', text: 'Не растягивай и не сжимай логотип непропорционально' },
    { icon: '❌', text: 'Не меняй фирменные цвета на произвольные' },
    { icon: '❌', text: 'Не размещай на пёстром фоне без подложки' },
    { icon: '❌', text: 'Не добавляй тени, обводки и 3D-эффекты' },
    { icon: '❌', text: 'Не меняй шрифт в логотипе' },
    { icon: '❌', text: 'Не переставляй элементы (иконка всегда слева)' },
  ];

  const patterns = [
    { emoji: '🥦', label: 'Брокколи' },
    { emoji: '🍅', label: 'Томат' },
    { emoji: '🥕', label: 'Морковь' },
    { emoji: '🍋', label: 'Лимон' },
    { emoji: '🌿', label: 'Зелень' },
    { emoji: '🍊', label: 'Апельсин' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#faf8f2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-3xl p-10 mb-12 overflow-hidden text-white">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute right-8 top-4 text-8xl opacity-10 select-none rotate-12">🥬</div>
          <div className="absolute left-4 bottom-4 text-7xl opacity-10 select-none -rotate-6">🍊</div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Фирменный стиль
            </div>
            <h1 className="font-unbounded text-5xl font-black mb-2">
              Свежо<span className="text-[#f57c00]">!</span>
            </h1>
            <p className="text-white/70 text-lg font-golos max-w-lg">
              Брендбук — документ с правилами использования фирменного стиля. Версия 1.0 · 2026
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['Логотип', 'Цвета', 'Типографика', 'Паттерны', 'Правила'].map(tag => (
                <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── ЛОГОТИП ── */}
        <section className="mb-14">
          <SectionTitle number="01" title="Логотип" />
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-2xl">
            Логотип состоит из иконки (эмодзи брокколи в скруглённом квадрате) и текстовой части. Восклицательный знак всегда оранжевый — это фирменный акцент, символизирующий свежесть и энергию.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {logos.map((logo, i) => (
              <div key={i} className={`rounded-3xl ${logo.bg} ${logo.border} p-8 flex flex-col gap-4`}>
                <div className="flex items-center justify-center min-h-[80px]">
                  {logo.content}
                </div>
                <p className="text-xs text-center text-muted-foreground font-medium">{logo.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ЦВЕТА ── */}
        <section className="mb-14">
          <SectionTitle number="02" title="Цветовая палитра" />
          <p className="text-muted-foreground mb-6 text-sm max-w-2xl">
            Палитра построена на натуральных оттенках. Зелёный — доверие и свежесть, оранжевый — энергия и аппетит, кремовый — тепло и натуральность.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {colors.map((color) => (
              <div key={color.hex} className="rounded-2xl overflow-hidden border border-border/40 shadow-sm group">
                <div
                  className="h-20 w-full flex items-end p-3 transition-transform group-hover:scale-105 duration-300"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className="font-mono text-xs font-bold opacity-80"
                    style={{ color: color.text }}
                  >{color.hex}</span>
                </div>
                <div className="bg-white p-3">
                  <p className="font-bold text-xs text-foreground leading-tight">{color.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ТИПОГРАФИКА ── */}
        <section className="mb-14">
          <SectionTitle number="03" title="Типографика" />
          <div className="space-y-4">
            {fonts.map((font) => (
              <div key={font.name} className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block bg-accent text-brand-green text-xs font-bold px-3 py-1 rounded-full mb-2">{font.role}</span>
                    <h3 className="text-xl font-bold text-foreground">{font.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-sm">{font.usage}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {font.weights.map(w => (
                      <span key={w} className="px-3 py-1 bg-muted rounded-lg text-xs font-mono text-muted-foreground">
                        weight {w}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`${font.class} ${font.color}`}>
                  <p className="text-5xl font-black mb-2 leading-tight">{font.sample}</p>
                  <p className="text-2xl font-bold mb-1">АБВГДЕЁЖЗИЙКЛМН</p>
                  <p className="text-2xl font-bold mb-1">ОПРСТУФХЦЧШЩЪЫЬЭЮЯ</p>
                  <p className="text-xl font-normal text-muted-foreground">абвгдеёжзийклмнопрстуфхцчшщъыьэюя</p>
                  <p className="text-base font-normal text-muted-foreground mt-1">0123456789 !@#$%^&*()</p>
                </div>
              </div>
            ))}
          </div>

          {/* Font scale */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mt-4">
            <h4 className="font-bold text-foreground mb-5">Шкала размеров</h4>
            <div className="space-y-3">
              {[
                { label: 'Hero / Display', size: 'text-6xl', weight: 'font-black', cls: 'font-unbounded', sample: 'Свежо!' },
                { label: 'H1 — Заголовок страницы', size: 'text-4xl', weight: 'font-bold', cls: '', sample: 'Каталог товаров' },
                { label: 'H2 — Заголовок секции', size: 'text-2xl', weight: 'font-bold', cls: '', sample: 'Наши преимущества' },
                { label: 'H3 — Подзаголовок', size: 'text-xl', weight: 'font-semibold', cls: '', sample: 'Быстрая доставка' },
                { label: 'Body — Основной текст', size: 'text-base', weight: 'font-normal', cls: '', sample: 'Свежие овощи и фрукты с доставкой на дом. Работаем с 2018 года.' },
                { label: 'Small — Подписи, теги', size: 'text-sm', weight: 'font-medium', cls: '', sample: 'Доставка от 90 минут · Эко-упаковка' },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-4 py-2 border-b border-border/40 last:border-0">
                  <span className="text-xs text-muted-foreground w-40 shrink-0">{item.label}</span>
                  <span className={`${item.size} ${item.weight} ${item.cls} text-foreground leading-tight`}>{item.sample}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ПАТТЕРН ── */}
        <section className="mb-14">
          <SectionTitle number="04" title="Фирменный паттерн" />
          <p className="text-muted-foreground mb-6 text-sm max-w-2xl">
            Паттерн строится из фирменных эмодзи-иллюстраций на кремовом или зелёном фоне. Используется на упаковке, пакетах, фонах сайта.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Light pattern */}
            <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm">
              <div className="h-48 bg-[#faf8f2] flex items-center justify-center relative overflow-hidden">
                <div className="grid grid-cols-6 gap-5 absolute inset-0 p-4 opacity-40 rotate-12 scale-125">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <span key={i} className="text-2xl select-none">{patterns[i % patterns.length].emoji}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-xs font-medium text-muted-foreground">Светлый паттерн — упаковка, фоны сайта</p>
              </div>
            </div>
            {/* Dark pattern */}
            <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm">
              <div className="h-48 bg-[#1a2e1c] flex items-center justify-center relative overflow-hidden">
                <div className="grid grid-cols-6 gap-5 absolute inset-0 p-4 opacity-20 rotate-12 scale-125">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <span key={i} className="text-2xl select-none">{patterns[i % patterns.length].emoji}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-xs font-medium text-muted-foreground">Тёмный паттерн — пакеты, фирменная бумага</p>
              </div>
            </div>
          </div>

          {/* Icon set */}
          <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm mt-4">
            <h4 className="font-bold text-foreground mb-4">Иконки бренда</h4>
            <div className="flex flex-wrap gap-3">
              {patterns.concat([
                { emoji: '🥒', label: 'Огурец' },
                { emoji: '🍆', label: 'Баклажан' },
                { emoji: '🥑', label: 'Авокадо' },
                { emoji: '🍓', label: 'Клубника' },
                { emoji: '🌱', label: 'Росток' },
                { emoji: '🍇', label: 'Виноград' },
              ]).map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1 w-14">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-default">
                    {item.emoji}
                  </div>
                  <span className="text-[10px] text-muted-foreground text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UI КОМПОНЕНТЫ ── */}
        <section className="mb-14">
          <SectionTitle number="05" title="UI-элементы" />
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <div className="space-y-8">
              {/* Buttons */}
              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Кнопки</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-[#2d7a3a] to-[#4caf50] text-white rounded-2xl font-bold text-sm shadow-md">
                    Основная кнопка
                  </button>
                  <button className="px-6 py-3 bg-white border-2 border-[#2d7a3a] text-[#2d7a3a] rounded-2xl font-semibold text-sm">
                    Вторичная
                  </button>
                  <button className="px-6 py-3 bg-[#f57c00] text-white rounded-2xl font-bold text-sm shadow-md">
                    Акцентная
                  </button>
                  <button className="px-6 py-3 bg-muted text-muted-foreground rounded-2xl font-medium text-sm">
                    Неактивная
                  </button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Бейджи и теги</h4>
                <div className="flex flex-wrap gap-2 items-center">
                  {[
                    { label: 'Хит', bg: 'bg-red-500' },
                    { label: 'Свежее', bg: 'bg-[#2d7a3a]' },
                    { label: 'Эко', bg: 'bg-emerald-600' },
                    { label: 'Сезон', bg: 'bg-pink-500' },
                    { label: 'Экзот', bg: 'bg-orange-500' },
                    { label: '−10%', bg: 'bg-[#f57c00]' },
                  ].map(b => (
                    <span key={b.label} className={`${b.bg} text-white text-xs font-bold px-3 py-1 rounded-full`}>{b.label}</span>
                  ))}
                  <span className="bg-accent text-[#2d7a3a] text-xs font-semibold px-3 py-1 rounded-full border border-[#2d7a3a]/20">Постоянный клиент</span>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Карточка товара</h4>
                <div className="max-w-[180px]">
                  <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm">
                    <div className="h-32 bg-gradient-to-br from-accent to-muted flex items-center justify-center text-5xl relative">
                      🍅
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Хит</span>
                    </div>
                    <div className="p-3">
                      <p className="font-bold text-sm text-foreground">Томаты черри</p>
                      <p className="text-[11px] text-muted-foreground mb-2">Россия · 500г</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#2d7a3a] text-sm">189 ₽</span>
                        <span className="bg-[#2d7a3a] text-white text-[10px] font-bold px-2.5 py-1 rounded-xl">+ В корзину</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ПРАВИЛА ── */}
        <section className="mb-14">
          <SectionTitle number="06" title="Правила использования" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Допустимо
              </h3>
              <ul className="space-y-3">
                {doRules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 shrink-0">{rule.icon}</span>
                    {rule.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl border border-red-100 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">❌</span> Недопустимо
              </h3>
              <ul className="space-y-3">
                {dontRules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 shrink-0">{rule.icon}</span>
                    {rule.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── КОНТАКТЫ БРЕНДА ── */}
        <section>
          <div className="bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-3xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
            <div className="relative z-10">
              <p className="text-white/60 text-sm mb-2">Брендбук</p>
              <div className="font-unbounded text-4xl font-black mb-1">Свежо<span className="text-[#f57c00]">!</span></div>
              <p className="text-white/60 text-sm">Версия 1.0 · Март 2026</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-xs">
                <span>🌱</span> Все права защищены · Свежо! Family Business
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-unbounded text-xs font-black text-[#2d7a3a]/40 tracking-widest">{number}</span>
      <h2 className="text-2xl font-black text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

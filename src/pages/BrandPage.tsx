export default function BrandPage() {
  const colors = [
    { name: 'Фирменный зелёный', hex: '#2d7a3a', rgb: '45 · 122 · 58', cmyk: '63 · 0 · 52 · 52', pantone: 'PMS 363 C', desc: 'Основной. Логотип, кнопки, акценты', text: 'white' },
    { name: 'Светлый зелёный', hex: '#4caf50', rgb: '76 · 175 · 80', cmyk: '57 · 0 · 54 · 31', pantone: 'PMS 361 C', desc: 'Градиенты, hover-состояния', text: 'white' },
    { name: 'Фирменный оранжевый', hex: '#f57c00', rgb: '245 · 124 · 0', cmyk: '0 · 49 · 100 · 4', pantone: 'PMS 1505 C', desc: 'Акценты, «!», бейджи, выделение', text: 'white' },
    { name: 'Светлый оранжевый', hex: '#ff9800', rgb: '255 · 152 · 0', cmyk: '0 · 40 · 100 · 0', pantone: 'PMS 137 C', desc: 'Иконки, подсветка', text: 'white' },
    { name: 'Солнечный жёлтый', hex: '#fbc02d', rgb: '251 · 192 · 45', cmyk: '0 · 24 · 82 · 2', pantone: 'PMS 116 C', desc: 'Скидки, рейтинги, звёзды', text: '#1a2e1c' },
    { name: 'Кремовый', hex: '#faf8f2', rgb: '250 · 248 · 242', cmyk: '0 · 1 · 3 · 2', pantone: 'PMS 9183 C', desc: 'Фоновые секции, карточки', text: '#1a2e1c' },
    { name: 'Тёмный лес', hex: '#1a2e1c', rgb: '26 · 46 · 28', cmyk: '43 · 0 · 39 · 82', pantone: 'PMS 350 C', desc: 'Футер, тексты, тёмный фон', text: 'white' },
    { name: 'Тёплый серый', hex: '#f0ede4', rgb: '240 · 237 · 228', cmyk: '0 · 1 · 5 · 6', pantone: 'PMS 9183 C', desc: 'Фоны полей, теги, подложки', text: '#1a2e1c' },
  ];

  const patterns = [
    { emoji: '🥦', label: 'Брокколи' },
    { emoji: '🍅', label: 'Томат' },
    { emoji: '🥕', label: 'Морковь' },
    { emoji: '🍋', label: 'Лимон' },
    { emoji: '🌿', label: 'Зелень' },
    { emoji: '🍊', label: 'Апельсин' },
    { emoji: '🥒', label: 'Огурец' },
    { emoji: '🍆', label: 'Баклажан' },
    { emoji: '🥑', label: 'Авокадо' },
    { emoji: '🍓', label: 'Клубника' },
    { emoji: '🌱', label: 'Росток' },
    { emoji: '🍇', label: 'Виноград' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#faf8f2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ── HERO ── */}
        <div className="relative bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-3xl p-10 mb-4 overflow-hidden text-white">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute right-6 top-4 text-[120px] opacity-[0.07] select-none rotate-12 leading-none">🥬</div>
          <div className="absolute left-2 bottom-2 text-[100px] opacity-[0.07] select-none -rotate-6 leading-none">🍊</div>
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-[11px] font-medium px-3 py-1.5 rounded-full mb-5 tracking-[0.15em] uppercase">
                Фирменный стиль · Identity Guidelines
              </div>
              <h1 className="font-unbounded text-6xl font-black leading-none mb-3">
                Свежо<span className="text-[#f57c00]">!</span>
              </h1>
              <p className="text-white/60 font-golos text-base max-w-lg leading-relaxed">
                Брендбук описывает визуальный язык бренда: логотип, цвета, типографику и правила их применения на всех носителях.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-white/30 text-xs font-mono">Версия 2.0</p>
              <p className="text-white/30 text-xs font-mono">Март 2026</p>
            </div>
          </div>
          {/* Contents */}
          <div className="relative z-10 flex flex-wrap gap-2 mt-7 pt-7 border-t border-white/10">
            {['00 Эволюция', '01 Логотип', '02 Анатомия', '03 Варианты', '04 Защитная зона', '05 Размеры', '06 Запреты', '07 Цвета', '08 Типографика', '09 Паттерн', '10 UI', '11 Иконки соцсетей', '12 Носители', '13 Миссия', '14 Визуальная идентичность', '15 Основные / доп. / запрещённые цвета', '16 Шрифт и применение', '17 Применение стиля', '18 Вывески и магазин', '19 Упаковка', '20 Цифровые носители', '21 Руководство'].map(tag => (
              <span key={tag} className="bg-white/[0.08] text-white/70 text-xs px-3 py-1 rounded-full font-mono">{tag}</span>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mb-12">Прокрути вниз для изучения всех разделов</p>

        {/* ── 01 ЛОГОТИП ── */}
        <section className="mb-14">
          <SectionTitle number="01" title="Логотип" />
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-2xl">
            Логотип «Свежо!» — комбинированный знак: фирменная иконка (брокколи в скруглённом квадрате с градиентом) и текстовая часть. Восклицательный знак всегда оранжевого цвета #f57c00 — главный характер бренда.
          </p>

          {/* Main logo showcase */}
          <div className="bg-white rounded-3xl border border-border/60 p-12 mb-4 flex items-center justify-center shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-3xl flex items-center justify-center text-5xl shadow-xl">🥦</div>
              <div>
                <div className="font-unbounded text-5xl font-black text-[#2d7a3a] leading-none tracking-tight">
                  Свежо<span className="text-[#f57c00]">!</span>
                </div>
                <div className="font-golos text-sm text-[#2d7a3a]/50 tracking-[0.25em] uppercase mt-1.5">
                  овощи · фрукты · зелень
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mb-8">Основной логотип — горизонтальная версия на светлом фоне</p>
        </section>

        {/* ── 02 АНАТОМИЯ ── */}
        <section className="mb-14">
          <SectionTitle number="02" title="Анатомия логотипа" />
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Visual */}
              <div className="shrink-0 relative flex items-center gap-5 p-8 border-2 border-dashed border-[#2d7a3a]/20 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-3xl flex items-center justify-center text-5xl shadow-xl relative" id="logo-icon">
                  🥦
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="w-px h-5 bg-[#2d7a3a]/30 mx-auto" />
                    <span className="text-[10px] text-[#2d7a3a] font-mono bg-[#2d7a3a]/10 px-2 py-0.5 rounded">A — иконка</span>
                  </div>
                </div>
                <div>
                  <div className="font-unbounded text-4xl font-black text-[#2d7a3a] leading-none tracking-tight relative">
                    Свежо
                    <span className="text-[#f57c00] relative">
                      !
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="w-px h-5 bg-[#f57c00]/40 mx-auto" />
                        <span className="text-[10px] text-[#f57c00] font-mono bg-[#f57c00]/10 px-2 py-0.5 rounded">C — акцент</span>
                      </div>
                    </span>
                    <div className="absolute -bottom-7 left-0 whitespace-nowrap">
                      <span className="text-[10px] text-[#2d7a3a] font-mono bg-[#2d7a3a]/10 px-2 py-0.5 rounded">B — логотайп</span>
                      <div className="w-px h-5 bg-[#2d7a3a]/30 mx-auto" />
                    </div>
                  </div>
                  <div className="font-golos text-sm text-[#2d7a3a]/50 tracking-[0.25em] uppercase mt-4 relative">
                    овощи · фрукты · зелень
                    <div className="absolute -bottom-7 left-0 whitespace-nowrap">
                      <span className="text-[10px] text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">D — дескриптор</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-4 mt-4 lg:mt-0">
                {[
                  { letter: 'A', title: 'Иконка (знак)', color: 'bg-[#2d7a3a]', desc: 'Брокколи в скруглённом квадрате с зелёным градиентом. Может использоваться самостоятельно как App-иконка или аватар. Радиус скругления — 30% от размера.' },
                  { letter: 'B', title: 'Логотайп', color: 'bg-[#2d7a3a]', desc: 'Шрифт Unbounded, weight 900. Кернинг −20, трекинг −10. Написание строго как «Свежо» — с заглавной буквы, без изменений.' },
                  { letter: 'C', title: 'Акцентный знак «!»', color: 'bg-[#f57c00]', desc: 'Восклицательный знак цвета #f57c00. Это сердце фирменного стиля — символизирует свежесть, импульс и энергию. Цвет не меняется никогда.' },
                  { letter: 'D', title: 'Дескриптор', color: 'bg-[#6b7280]', desc: 'Golos Text, weight 500, tracking +250. Все буквы строчные, разделитель «·» (middle dot). Используется в основной и горизонтальной версиях.' },
                ].map(item => (
                  <div key={item.letter} className="flex gap-4 items-start">
                    <div className={`w-7 h-7 ${item.color} text-white rounded-lg flex items-center justify-center text-xs font-black shrink-0 mt-0.5`}>{item.letter}</div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 ВАРИАНТЫ ── */}
        <section className="mb-14">
          <SectionTitle number="03" title="Варианты логотипа" />
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* Light */}
            <div className="rounded-3xl bg-[#faf8f2] border border-border p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center justify-center min-h-[90px]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-2xl flex items-center justify-center text-4xl shadow-lg">🥦</div>
                  <div>
                    <div className="font-unbounded text-4xl font-black text-[#2d7a3a] leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                    <div className="font-golos text-[11px] text-[#2d7a3a]/50 tracking-[0.2em] uppercase mt-1">овощи · фрукты · зелень</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-4 space-y-1">
                <p className="text-xs font-bold text-foreground">Основной · светлый фон</p>
                <p className="text-xs text-muted-foreground">Применение: сайт, упаковка, печатная реклама, визитки</p>
                <p className="text-xs font-mono text-muted-foreground">Фон: #faf8f2, #ffffff или любой светлый</p>
              </div>
            </div>
            {/* Dark */}
            <div className="rounded-3xl bg-[#1a2e1c] border-0 p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center justify-center min-h-[90px]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center text-4xl">🥦</div>
                  <div>
                    <div className="font-unbounded text-4xl font-black text-white leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                    <div className="font-golos text-[11px] text-white/40 tracking-[0.2em] uppercase mt-1">овощи · фрукты · зелень</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 space-y-1">
                <p className="text-xs font-bold text-white">Инвертированный · тёмный фон</p>
                <p className="text-xs text-white/50">Применение: футер, ночная тема, тёмная упаковка</p>
                <p className="text-xs font-mono text-white/30">Фон: #1a2e1c или #000000</p>
              </div>
            </div>
            {/* Compact */}
            <div className="rounded-3xl bg-white border border-border p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center justify-center min-h-[90px] gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-2xl flex items-center justify-center text-4xl shadow-lg">🥦</div>
                  <div className="font-unbounded text-xl font-black text-[#2d7a3a] leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                </div>
                <div className="text-muted-foreground text-sm">vs</div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-2xl shadow">🥦</div>
                  <div className="font-unbounded text-2xl font-black text-[#2d7a3a] leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                </div>
              </div>
              <div className="border-t border-border pt-4 space-y-1">
                <p className="text-xs font-bold text-foreground">Вертикальный + горизонтальный компакт</p>
                <p className="text-xs text-muted-foreground">Применение: соцсети, аватары, навигация, бейджи</p>
              </div>
            </div>
            {/* Monochrome */}
            <div className="rounded-3xl bg-white border border-border p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center justify-center min-h-[90px] gap-8">
                <div className="flex items-center gap-3" style={{ filter: 'grayscale(1)' }}>
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-3xl">🥦</div>
                  <div>
                    <div className="font-unbounded text-3xl font-black text-black leading-none">Свежо!</div>
                    <div className="font-golos text-[11px] text-black/40 tracking-[0.2em] uppercase mt-1">овощи · фрукты · зелень</div>
                  </div>
                </div>
                <div className="flex items-center gap-3" style={{ filter: 'grayscale(1) invert(1)' }}>
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-3xl">🥦</div>
                  <div>
                    <div className="font-unbounded text-3xl font-black text-black leading-none">Свежо!</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-4 space-y-1">
                <p className="text-xs font-bold text-foreground">Монохромный (чёрный и белый)</p>
                <p className="text-xs text-muted-foreground">Применение: тиснение, штампы, факс, газетная печать</p>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-2">Иконка / App Icon</h3>
            <p className="text-xs text-muted-foreground mb-6">Используется самостоятельно при минимальном размере или в квадратных форматах (соцсети, App Store, favicon)</p>
            <div className="flex flex-wrap items-end gap-6">
              {[
                { size: 'w-24 h-24', r: 'rounded-3xl', label: '96 × 96', sub: 'App Store / Play' },
                { size: 'w-16 h-16', r: 'rounded-2xl', label: '64 × 64', sub: 'Соцсети' },
                { size: 'w-12 h-12', r: 'rounded-xl', label: '48 × 48', sub: 'Аватар' },
                { size: 'w-9 h-9', r: 'rounded-xl', label: '36 × 36', sub: 'Навигация' },
                { size: 'w-6 h-6', r: 'rounded-lg', label: '24 × 24', sub: 'Favicon' },
              ].map(icon => (
                <div key={icon.label} className="flex flex-col items-center gap-2">
                  <div className={`${icon.size} ${icon.r} bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] flex items-center justify-center shadow-lg`}
                    style={{ fontSize: `calc(${parseInt(icon.size.split('w-')[1]) * 0.5}px)` }}>
                    🥦
                  </div>
                  <p className="text-[11px] font-mono text-foreground text-center">{icon.label}</p>
                  <p className="text-[10px] text-muted-foreground text-center">{icon.sub}</p>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] flex items-center justify-center text-5xl shadow-lg">🥦</div>
                <p className="text-[11px] font-mono text-foreground text-center">Round</p>
                <p className="text-[10px] text-muted-foreground text-center">VK / TG / WA</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-3xl bg-[#1a2e1c] flex items-center justify-center shadow-lg">
                  <span className="font-unbounded text-4xl font-black text-white">С<span className="text-[#f57c00]">!</span></span>
                </div>
                <p className="text-[11px] font-mono text-foreground text-center">Монограмма</p>
                <p className="text-[10px] text-muted-foreground text-center">Тёмная версия</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 ЗАЩИТНАЯ ЗОНА ── */}
        <section className="mb-14">
          <SectionTitle number="04" title="Защитная зона" />
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-2xl">
            Вокруг логотипа всегда должно оставаться пустое пространство. Минимальный отступ — X, где X равен высоте заглавной буквы «С» логотипа.
          </p>
          <div className="bg-white rounded-3xl border border-border/60 p-10 shadow-sm flex items-center justify-center">
            <div className="relative p-10 border-2 border-dashed border-[#2d7a3a]/30 rounded-2xl">
              {/* Corner markers */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-[#2d7a3a]/50">X</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-[#2d7a3a]/50">X</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#2d7a3a]/50">X</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#2d7a3a]/50">X</div>
              {/* Arrows */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-10 bg-[#2d7a3a]/20" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-10 bg-[#2d7a3a]/20" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-2xl flex items-center justify-center text-4xl shadow-lg">🥦</div>
                <div>
                  <div className="font-unbounded text-4xl font-black text-[#2d7a3a] leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                  <div className="font-golos text-[11px] text-[#2d7a3a]/50 tracking-[0.2em] uppercase mt-1">овощи · фрукты · зелень</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            {[
              { label: 'Веб / экраны', value: 'X = 24px', sub: 'Минимум вокруг логотипа' },
              { label: 'Печать A4–A3', value: 'X = 8мм', sub: 'Листовки, брошюры' },
              { label: 'Наружная реклама', value: 'X = 50мм', sub: 'Вывески, баннеры' },
            ].map(item => (
              <div key={item.label} className="bg-white rounded-2xl border border-border/60 p-4 text-center shadow-sm">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-bold text-[#2d7a3a] font-mono">{item.value}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 05 МИНИМАЛЬНЫЕ РАЗМЕРЫ ── */}
        <section className="mb-14">
          <SectionTitle number="05" title="Минимальные размеры" />
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl">Ниже этих размеров логотип теряет читаемость. В таких случаях используй только иконку или монограмму «С!».</p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Цифровые носители</p>
                <div className="space-y-4">
                  {[
                    { label: 'Горизонтальный', min: '180px', icon: '✅' },
                    { label: 'Вертикальный', min: '120px', icon: '✅' },
                    { label: 'Только иконка', min: '24px', icon: '✅' },
                    { label: 'Запрещено', min: '< 120px (горизонт.)', icon: '❌' },
                  ].map(r => (
                    <div key={r.label} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                      <div className="flex items-center gap-2">
                        <span>{r.icon}</span>
                        <span className="text-sm text-foreground">{r.label}</span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{r.min}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Печатные носители</p>
                <div className="space-y-4">
                  {[
                    { label: 'Горизонтальный', min: '40мм', icon: '✅' },
                    { label: 'Вертикальный', min: '25мм', icon: '✅' },
                    { label: 'Только иконка', min: '8мм', icon: '✅' },
                    { label: 'Запрещено', min: '< 25мм (горизонт.)', icon: '❌' },
                  ].map(r => (
                    <div key={r.label} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                      <div className="flex items-center gap-2">
                        <span>{r.icon}</span>
                        <span className="text-sm text-foreground">{r.label}</span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{r.min}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 ЗАПРЕТЫ ── */}
        <section className="mb-14">
          <SectionTitle number="06" title="Запрещённые варианты" />
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: 'Растяжка', bad: true,
                content: <div className="flex items-center gap-2" style={{ transform: 'scaleX(1.5)', transformOrigin: 'center' }}>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-xl">🥦</div>
                  <div className="font-unbounded text-xl font-black text-[#2d7a3a]">Свежо<span className="text-[#f57c00]">!</span></div>
                </div>
              },
              {
                label: 'Чужой цвет «!»', bad: true,
                content: <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-xl">🥦</div>
                  <div className="font-unbounded text-xl font-black text-[#2d7a3a]">Свежо<span className="text-blue-500">!</span></div>
                </div>
              },
              {
                label: 'Тень', bad: true,
                content: <div className="flex items-center gap-2" style={{ filter: 'drop-shadow(4px 4px 6px rgba(0,0,0,0.5))' }}>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-xl">🥦</div>
                  <div className="font-unbounded text-xl font-black text-[#2d7a3a]">Свежо<span className="text-[#f57c00]">!</span></div>
                </div>
              },
              {
                label: 'Чужой шрифт', bad: true,
                content: <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-xl">🥦</div>
                  <div className="font-golos text-xl font-black text-[#2d7a3a] italic">Свежо<span className="text-[#f57c00]">!</span></div>
                </div>
              },
              {
                label: 'На пёстром фоне', bad: true,
                content: <div className="w-full h-full flex items-center justify-center rounded-xl" style={{ background: 'linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff)' }}>
                  <div className="font-unbounded text-lg font-black text-white">Свежо!</div>
                </div>
              },
              {
                label: 'Обводка', bad: true,
                content: <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border-2 border-[#2d7a3a]">🥦</div>
                  <div className="font-unbounded text-xl font-black" style={{ WebkitTextStroke: '1px #2d7a3a', color: 'transparent' }}>Свежо!</div>
                </div>
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-red-100 overflow-hidden shadow-sm">
                <div className="h-28 flex items-center justify-center bg-[#faf8f2] relative p-4">
                  {item.content}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-black">✕</div>
                </div>
                <div className="p-3 bg-red-50">
                  <p className="text-xs font-bold text-red-600">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 07 ЦВЕТА ── */}
        <section className="mb-14">
          <SectionTitle number="07" title="Цветовая палитра" />
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-2xl">
            Палитра построена на натуральных оттенках природы. Зелёный — доверие и жизнь, оранжевый — энергия и аппетит, кремовый — тепло и натуральность. Указаны значения для всех цветовых моделей.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {colors.map((color) => (
              <div key={color.hex} className="rounded-2xl overflow-hidden border border-border/40 shadow-sm group">
                <div className="h-24 w-full flex items-end p-3 relative" style={{ backgroundColor: color.hex }}>
                  <span className="font-mono text-xs font-bold opacity-90" style={{ color: color.text }}>{color.hex}</span>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black/20 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded font-mono" style={{ color: color.text }}>copy</span>
                  </div>
                </div>
                <div className="bg-white p-3 space-y-1.5">
                  <p className="font-bold text-xs text-foreground leading-tight">{color.name}</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">{color.desc}</p>
                  <div className="pt-1.5 border-t border-border/40 space-y-0.5">
                    <p className="font-mono text-[10px] text-muted-foreground">RGB: {color.rgb}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">CMYK: {color.cmyk}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{color.pantone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Color combinations */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-2">Допустимые сочетания</h3>
            <p className="text-xs text-muted-foreground mb-5">Используй только проверенные пары — они обеспечивают необходимый контраст и читаемость</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { bg: '#2d7a3a', text: '#ffffff', label: 'Зелёный + Белый', ratio: '7.2:1 ✅' },
                { bg: '#ffffff', text: '#2d7a3a', label: 'Белый + Зелёный', ratio: '7.2:1 ✅' },
                { bg: '#1a2e1c', text: '#ffffff', label: 'Тёмный + Белый', ratio: '14:1 ✅' },
                { bg: '#faf8f2', text: '#1a2e1c', label: 'Кремовый + Тёмный', ratio: '12:1 ✅' },
                { bg: '#f57c00', text: '#ffffff', label: 'Оранжевый + Белый', ratio: '3.1:1 ⚠️' },
                { bg: '#faf8f2', text: '#2d7a3a', label: 'Кремовый + Зелёный', ratio: '6.8:1 ✅' },
                { bg: '#2d7a3a', text: '#fbc02d', label: 'Зелёный + Жёлтый', ratio: '4.2:1 ✅' },
                { bg: '#1a2e1c', text: '#4caf50', label: 'Тёмный + Св.зелёный', ratio: '5.1:1 ✅' },
              ].map(combo => (
                <div key={combo.label} className="rounded-2xl overflow-hidden border border-border/40">
                  <div className="h-14 flex items-center justify-center px-3" style={{ backgroundColor: combo.bg }}>
                    <span className="text-sm font-bold" style={{ color: combo.text }}>Свежо!</span>
                  </div>
                  <div className="p-2.5 bg-muted/30">
                    <p className="text-[11px] font-medium text-foreground">{combo.label}</p>
                    <p className="text-[10px] font-mono text-muted-foreground">{combo.ratio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08 ТИПОГРАФИКА ── */}
        <section className="mb-14">
          <SectionTitle number="08" title="Типографика" />

          {/* Font 1 — Unbounded */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mb-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-[#2d7a3a] text-white text-xs font-bold px-3 py-1 rounded-full">Дисплейный · Логотип</span>
                  <span className="text-xs text-muted-foreground font-mono">Google Fonts</span>
                </div>
                <h3 className="font-unbounded text-3xl font-black text-foreground">Unbounded</h3>
                <p className="text-sm text-muted-foreground mt-1.5 max-w-sm leading-relaxed">
                  Геометрическая гротеска без засечек с широкими пропорциями. Создаёт ощущение силы, уверенности и современности. Применяется исключительно для логотипа и hero-заголовков.
                </p>
              </div>
              <div className="shrink-0 space-y-2">
                {[
                  { w: '700', name: 'Bold' },
                  { w: '900', name: 'Black' },
                ].map(wt => (
                  <div key={wt.w} className="flex items-center gap-3 p-2.5 bg-muted/50 rounded-xl">
                    <span className="font-mono text-xs text-muted-foreground w-8">{wt.w}</span>
                    <span className="font-unbounded font-black text-sm text-foreground">{wt.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alphabet */}
            <div className="font-unbounded border-t border-border pt-6 space-y-3">
              <p className="text-5xl font-black text-foreground leading-tight">Свежо!</p>
              <p className="text-2xl font-black text-[#2d7a3a]">АБВГДЕЁЖЗИЙ КЛМНОПРСТ</p>
              <p className="text-2xl font-black text-muted-foreground">УФХЦЧШЩЪЫЬЭЮЯ</p>
              <p className="text-xl font-black text-muted-foreground/60">абвгдеёжзийклмнопрстуфхцчшщъыьэюя</p>
              <p className="text-lg font-black text-muted-foreground/50">0123456789 !@#%&*()+-=</p>
              <p className="text-base font-bold text-muted-foreground/40">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            </div>

            {/* Specs */}
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Кернинг', value: '−20' },
                { label: 'Трекинг', value: '−10' },
                { label: 'Межстрочный', value: '0.95 × size' },
                { label: 'Трансформ', value: 'none (строчные)' },
              ].map(spec => (
                <div key={spec.label} className="text-center p-3 bg-muted/40 rounded-xl">
                  <p className="font-mono text-sm font-bold text-foreground">{spec.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{spec.label}</p>
                </div>
              ))}
            </div>

            {/* Usage */}
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200/70 rounded-2xl flex items-start gap-3">
              <span className="text-lg">⚠️</span>
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Только для логотипа и hero-заголовков.</strong> Не использовать для основного текста, кнопок или навигации. Минимальный размер применения — 28px.
              </p>
            </div>
          </div>

          {/* Font 2 — Golos Text */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mb-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-[#f57c00] text-white text-xs font-bold px-3 py-1 rounded-full">Основной</span>
                  <span className="text-xs text-muted-foreground font-mono">Google Fonts · Кириллица</span>
                </div>
                <h3 className="font-golos text-3xl font-bold text-foreground">Golos Text</h3>
                <p className="text-sm text-muted-foreground mt-1.5 max-w-sm leading-relaxed">
                  Современная гуманистическая гротеска с отличной читаемостью на экранах. Разработана специально для кириллических текстов. Дружелюбная, тёплая и натуральная — как сам бренд.
                </p>
              </div>
              <div className="shrink-0 space-y-2">
                {[
                  { w: '400', name: 'Regular' },
                  { w: '500', name: 'Medium' },
                  { w: '600', name: 'SemiBold' },
                  { w: '700', name: 'Bold' },
                  { w: '900', name: 'Black' },
                ].map(wt => (
                  <div key={wt.w} className="flex items-center gap-3 p-2 bg-muted/50 rounded-xl">
                    <span className="font-mono text-xs text-muted-foreground w-8">{wt.w}</span>
                    <span className="font-golos text-sm text-foreground" style={{ fontWeight: wt.w }}>Гд {wt.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alphabet */}
            <div className="font-golos border-t border-border pt-6 space-y-3">
              <p className="text-5xl font-bold text-foreground leading-tight">Овощи и фрукты</p>
              <p className="text-2xl font-bold text-[#2d7a3a]">АБВГДЕЁЖЗИЙ КЛМНОПРСТ</p>
              <p className="text-2xl font-bold text-muted-foreground">УФХЦЧШЩЪЫЬЭЮЯ</p>
              <p className="text-xl font-normal text-muted-foreground">абвгдеёжзийклмнопрстуфхцчшщъыьэюя</p>
              <p className="text-base font-normal text-muted-foreground/70">0123456789 !?.,;:«»—–…@#%&*()</p>
              <p className="text-base font-normal text-muted-foreground/50">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz</p>
            </div>

            {/* Specs */}
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Кернинг', value: 'Auto / 0' },
                { label: 'Трекинг', value: '0 — +20' },
                { label: 'Межстрочный', value: '1.5 × size' },
                { label: 'Параграф', value: '1.2em margin' },
              ].map(spec => (
                <div key={spec.label} className="text-center p-3 bg-muted/40 rounded-xl">
                  <p className="font-mono text-sm font-bold text-foreground">{spec.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{spec.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Type scale */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mb-4">
            <h3 className="font-bold text-foreground mb-5">Иерархия и шкала размеров</h3>
            <div className="space-y-1">
              {[
                { tag: 'Display', size: 'text-6xl', weight: 'font-black', cls: 'font-unbounded', color: 'text-[#2d7a3a]', spec: '60px / 900 / Unbounded / lh 0.95', sample: 'Свежо!' },
                { tag: 'H1', size: 'text-5xl', weight: 'font-bold', cls: 'font-golos', color: 'text-foreground', spec: '48px / 700 / Golos / lh 1.1', sample: 'Каталог товаров' },
                { tag: 'H2', size: 'text-4xl', weight: 'font-bold', cls: 'font-golos', color: 'text-foreground', spec: '36px / 700 / Golos / lh 1.2', sample: 'Наши преимущества' },
                { tag: 'H3', size: 'text-2xl', weight: 'font-semibold', cls: 'font-golos', color: 'text-foreground', spec: '24px / 600 / Golos / lh 1.3', sample: 'Быстрая доставка' },
                { tag: 'H4', size: 'text-xl', weight: 'font-semibold', cls: 'font-golos', color: 'text-foreground', spec: '20px / 600 / Golos / lh 1.4', sample: 'Томаты черри' },
                { tag: 'Body L', size: 'text-lg', weight: 'font-normal', cls: 'font-golos', color: 'text-foreground', spec: '18px / 400 / Golos / lh 1.6', sample: 'Свежие овощи и фрукты с доставкой прямо к вашей двери.' },
                { tag: 'Body', size: 'text-base', weight: 'font-normal', cls: 'font-golos', color: 'text-foreground', spec: '16px / 400 / Golos / lh 1.6', sample: 'Работаем с 2018 года. Натуральные продукты от фермеров.' },
                { tag: 'Small', size: 'text-sm', weight: 'font-medium', cls: 'font-golos', color: 'text-muted-foreground', spec: '14px / 500 / Golos / lh 1.5', sample: 'Доставка от 90 минут · Эко-упаковка · Фермерские продукты' },
                { tag: 'Caption', size: 'text-xs', weight: 'font-medium', cls: 'font-golos', color: 'text-muted-foreground', spec: '12px / 500 / Golos / lh 1.4', sample: 'ОВОЩИ · ФРУКТЫ · ЗЕЛЕНЬ' },
              ].map((item) => (
                <div key={item.tag} className="grid grid-cols-[60px_1fr_auto] gap-4 items-baseline py-3 border-b border-border/30 last:border-0">
                  <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">{item.tag}</span>
                  <span className={`${item.size} ${item.weight} ${item.cls} ${item.color} leading-tight`}>{item.sample}</span>
                  <span className="font-mono text-[10px] text-muted-foreground/50 text-right shrink-0 hidden sm:block">{item.spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Do/Don't typography */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-5">Правила набора текста</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-xs font-bold text-[#2d7a3a] uppercase tracking-wider">✅ Правильно</p>
                {[
                  { label: 'Кавычки «елочки»', ex: '«Свежие продукты»' },
                  { label: 'Длинное тире', ex: 'Доставка — 90 минут' },
                  { label: 'Неразрывный пробел', ex: '189\u00a0₽ / кг' },
                  { label: 'Правильный апостроф', ex: 'Д\u2019Артаньян' },
                ].map(r => (
                  <div key={r.label} className="p-3 bg-accent rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">{r.label}</p>
                    <p className="font-golos text-sm font-semibold text-[#2d7a3a]">{r.ex}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider">❌ Неправильно</p>
                {[
                  { label: 'Компьютерные кавычки', ex: '"Свежие продукты"' },
                  { label: 'Дефис вместо тире', ex: 'Доставка - 90 минут' },
                  { label: 'Пробел перед знаком', ex: '189 ₽ / кг' },
                  { label: 'Caps Lock для акцента', ex: 'ДОСТАВКА БЕСПЛАТНО' },
                ].map(r => (
                  <div key={r.label} className="p-3 bg-red-50 rounded-xl border border-red-100">
                    <p className="text-xs text-muted-foreground mb-1">{r.label}</p>
                    <p className="font-golos text-sm font-semibold text-red-500 line-through">{r.ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 ПАТТЕРН ── */}
        <section className="mb-14">
          <SectionTitle number="09" title="Фирменный паттерн и иконки" />
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm">
              <div className="h-52 bg-[#faf8f2] relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 gap-4 p-3 opacity-35 rotate-[10deg] scale-125 translate-x-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <span key={i} className="text-2xl select-none">{patterns[i % patterns.length].emoji}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-xs font-bold text-foreground">Светлый паттерн</p>
                <p className="text-xs text-muted-foreground mt-0.5">Упаковка, фоны сайта, брендированная бумага</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm">
              <div className="h-52 bg-[#1a2e1c] relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 gap-4 p-3 opacity-15 rotate-[10deg] scale-125 translate-x-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <span key={i} className="text-2xl select-none">{patterns[i % patterns.length].emoji}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-xs font-bold text-foreground">Тёмный паттерн</p>
                <p className="text-xs text-muted-foreground mt-0.5">Пакеты, ночная тема, сувениры</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
            <h4 className="font-bold text-foreground mb-4">Библиотека иконок бренда</h4>
            <p className="text-xs text-muted-foreground mb-5">12 иконок, образующих фирменный паттерн. Используются на упаковке, в соцсетях и рекламных материалах.</p>
            <div className="flex flex-wrap gap-3">
              {patterns.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-3xl hover:scale-110 transition-transform cursor-default hover:bg-[#2d7a3a]/10">
                    {item.emoji}
                  </div>
                  <span className="text-[10px] text-muted-foreground text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10 UI ── */}
        <section className="mb-14">
          <SectionTitle number="10" title="UI-компоненты" />
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm space-y-8">
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Кнопки</p>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#2d7a3a] to-[#4caf50] text-white rounded-2xl font-bold text-sm shadow-md font-golos">Основная</button>
                <button className="px-6 py-3 bg-white border-2 border-[#2d7a3a] text-[#2d7a3a] rounded-2xl font-semibold text-sm font-golos">Вторичная</button>
                <button className="px-6 py-3 bg-[#f57c00] text-white rounded-2xl font-bold text-sm shadow-md font-golos">Акцентная</button>
                <button className="px-6 py-3 bg-[#faf8f2] text-muted-foreground rounded-2xl font-medium text-sm font-golos border border-border">Неактивная</button>
                <button className="px-6 py-3 bg-[#1a2e1c] text-white rounded-2xl font-bold text-sm shadow-md font-golos">Тёмная</button>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Бейджи и теги</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: 'Хит продаж', bg: 'bg-red-500' }, { l: 'Свежие', bg: 'bg-[#2d7a3a]' }, { l: 'Эко', bg: 'bg-emerald-600' },
                  { l: 'Сезонное', bg: 'bg-pink-500' }, { l: 'Экзотика', bg: 'bg-orange-500' }, { l: '−10%', bg: 'bg-[#f57c00]' },
                  { l: 'Постоянный клиент', bg: 'bg-accent text-[#2d7a3a] border border-[#2d7a3a]/20', light: true },
                  { l: '4.9 ★', bg: 'bg-[#fbc02d] text-[#1a2e1c]', dark: true },
                ].map(b => (
                  <span key={b.l} className={`${b.bg} ${b.light || b.dark ? '' : 'text-white'} text-xs font-bold px-3 py-1 rounded-full font-golos`}>{b.l}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Карточка товара</p>
              <div className="flex gap-4 flex-wrap">
                <div className="w-44 rounded-3xl overflow-hidden border border-border/60 shadow-sm">
                  <div className="h-36 bg-gradient-to-br from-[#f0ede4] to-[#faf8f2] flex items-center justify-center text-6xl relative">
                    🍅
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Хит</span>
                  </div>
                  <div className="p-3">
                    <p className="font-golos font-bold text-sm text-foreground">Томаты черри</p>
                    <p className="font-golos text-[11px] text-muted-foreground">Россия · 500г</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-golos font-bold text-[#2d7a3a] text-sm">189 ₽</span>
                      <span className="bg-[#2d7a3a] text-white text-[10px] font-bold px-2.5 py-1 rounded-xl">+ В корзину</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-2 text-xs text-muted-foreground max-w-[200px]">
                  <p className="font-bold text-foreground text-sm">Стандарты карточки</p>
                  {[
                    'Радиус: 24px (rounded-3xl)',
                    'Тень: shadow-sm при покое',
                    'Тень: shadow-lg при hover',
                    'Бейдж: абсолютно, top-2 left-2',
                    'Цена: всегда #2d7a3a Bold',
                    'Кнопка: всегда зелёная',
                  ].map(s => <p key={s}>· {s}</p>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 00 ЭВОЛЮЦИЯ ЛОГОТИПА ── */}
        <section className="mb-14">
          <SectionTitle number="00" title="Эволюция логотипа" />
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-2xl">
            От первого наброска до финального варианта — путь логотипа «Свежо!». Каждая итерация решала конкретную проблему: читаемость, уникальность, масштабируемость.
          </p>

          {/* Evolution timeline */}
          <div className="space-y-4 mb-8">
            {/* V1 */}
            <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground text-[11px] font-mono font-bold px-3 py-1 rounded-full mb-3">
                    Версия 1.0 · Набросок
                  </div>
                  <div className="w-full sm:w-64 h-32 bg-[#f5f5f5] rounded-2xl border border-border flex items-center justify-center relative overflow-hidden">
                    {/* Sketch imitation */}
                    <div className="flex items-center gap-2 opacity-60" style={{ filter: 'grayscale(1)' }}>
                      <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-2xl">🥬</div>
                      <div>
                        <div style={{ fontFamily: 'serif' }} className="text-2xl font-bold text-gray-600">Свежо!</div>
                        <div className="text-[9px] text-gray-400 tracking-widest">МАГАЗИН ОВОЩЕЙ</div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 text-[10px] text-red-400 font-mono bg-red-50 px-1.5 py-0.5 rounded">черновик</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">Первый набросок — «просто текст»</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Serif-шрифт, листок вместо иконки, серая гамма. Выглядело как советский магазин — не отражало ни свежести, ни современности.</p>
                  <div className="flex flex-wrap gap-2">
                    {['❌ Serif не читается мелко', '❌ Нет фирменного цвета', '❌ Слабая иконка', '❌ Нет характера'].map(p => (
                      <span key={p} className="text-[11px] bg-red-50 text-red-500 px-2.5 py-1 rounded-full border border-red-100">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* V2 */}
            <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-[11px] font-mono font-bold px-3 py-1 rounded-full mb-3">
                    Версия 2.0 · Проба цвета
                  </div>
                  <div className="w-full sm:w-64 h-32 bg-[#e8f5e9] rounded-2xl border border-green-200 flex items-center justify-center relative overflow-hidden">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-2xl">🌿</div>
                      <div>
                        <div className="font-golos text-2xl font-black text-green-700">Свежо!</div>
                        <div className="text-[9px] text-green-500 tracking-widest uppercase">овощи и фрукты</div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 text-[10px] text-amber-600 font-mono bg-amber-50 px-1.5 py-0.5 rounded">доработка</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">Проба цвета — «уже теплее»</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Добавили зелёный цвет и сменили шрифт на sans-serif. Иконка — листик вместо овоща. Стало живее, но всё ещё обычно и без акцента.</p>
                  <div className="flex flex-wrap gap-2">
                    {['✅ Есть фирменный цвет', '✅ Читаемый шрифт', '❌ Слабая иконка', '❌ Нет акцента', '❌ Скучная пунктуация'].map(p => (
                      <span key={p} className={`text-[11px] px-2.5 py-1 rounded-full border ${p.startsWith('✅') ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-500 border-red-100'}`}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* V3 */}
            <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-[11px] font-mono font-bold px-3 py-1 rounded-full mb-3">
                    Версия 3.0 · Прорыв
                  </div>
                  <div className="w-full sm:w-64 h-32 bg-[#faf8f2] rounded-2xl border border-amber-200 flex items-center justify-center relative overflow-hidden">
                    <div className="flex items-center gap-2.5">
                      <div className="w-12 h-12 bg-[#2d7a3a] rounded-2xl flex items-center justify-center text-3xl">🥦</div>
                      <div>
                        <div className="font-unbounded text-2xl font-black text-[#2d7a3a]">Свежо<span className="text-[#f57c00]">!</span></div>
                        <div className="font-golos text-[10px] text-[#2d7a3a]/50 tracking-widest uppercase mt-0.5">овощи · фрукты · зелень</div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 text-[10px] text-orange-600 font-mono bg-orange-50 px-1.5 py-0.5 rounded">почти финал</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">Прорыв — «нашли характер»</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Шрифт Unbounded дал вес и современность. Брокколи вместо листика — конкретный продукт. Оранжевый «!» стал изюминкой. Но иконка была плоской, без глубины.</p>
                  <div className="flex flex-wrap gap-2">
                    {['✅ Характерный шрифт', '✅ Яркий акцент', '✅ Верная иконка', '❌ Иконка без объёма', '❌ Нет дескриптора'].map(p => (
                      <span key={p} className={`text-[11px] px-2.5 py-1 rounded-full border ${p.startsWith('✅') ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-500 border-red-100'}`}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* V4 FINAL */}
            <div className="bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute right-4 top-4 text-6xl opacity-10 select-none">🥬</div>
              <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full mb-3">
                    ✦ Версия 4.0 · Финал
                  </div>
                  <div className="w-full sm:w-64 h-32 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-2xl flex items-center justify-center text-4xl shadow-xl ring-2 ring-white/20">🥦</div>
                      <div>
                        <div className="font-unbounded text-3xl font-black text-white leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                        <div className="font-golos text-[10px] text-white/50 tracking-[0.2em] uppercase mt-1">овощи · фрукты · зелень</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg mb-1">Финальная версия — «готово в производство»</h4>
                  <p className="text-sm text-white/70 leading-relaxed mb-3">Градиент на иконке дал глубину. Добавлен дескриптор с трекингом. Кольцо вокруг иконки объединило знак и текст. Работает от 24px до 5 метров.</p>
                  <div className="flex flex-wrap gap-2">
                    {['✅ Градиентная иконка', '✅ Оранжевый акцент', '✅ Дескриптор', '✅ Масштабируется', '✅ Работает ч/б', '✅ Кириллица'].map(p => (
                      <span key={p} className="text-[11px] bg-white/15 text-white px-2.5 py-1 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before / After */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-6 text-center">До и после — итоговое сравнение</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-center mb-4">Было · v1.0</p>
                <div className="h-40 bg-[#f5f5f5] rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center relative">
                  <div className="flex items-center gap-2 opacity-50" style={{ filter: 'grayscale(1)' }}>
                    <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-2xl">🥬</div>
                    <div style={{ fontFamily: 'serif' }} className="text-3xl font-bold text-gray-600">Свежо!</div>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {['Serif', 'Серый', 'Скучно', 'Слабо'].map(t => (
                      <span key={t} className="text-[10px] bg-red-100 text-red-500 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#2d7a3a] uppercase tracking-wider text-center mb-4">Стало · v4.0</p>
                <div className="h-40 bg-[#faf8f2] rounded-2xl border-2 border-[#2d7a3a]/20 flex items-center justify-center relative">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-2xl flex items-center justify-center text-4xl shadow-lg">🥦</div>
                    <div>
                      <div className="font-unbounded text-3xl font-black text-[#2d7a3a] leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                      <div className="font-golos text-[10px] text-[#2d7a3a]/50 tracking-[0.2em] uppercase mt-1">овощи · фрукты · зелень</div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {['Unbounded', 'Зелёный', 'Акцент', 'Масштаб'].map(t => (
                      <span key={t} className="text-[10px] bg-green-100 text-[#2d7a3a] px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11 ИКОНКИ ДЛЯ СОЦСЕТЕЙ ── */}
        <section className="mb-14">
          <SectionTitle number="11" title="Иконки для социальных сетей" />
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-2xl">
            Адаптированные версии иконки для каждой платформы. Учитывают форму маски (круг/квадрат), требования к контрасту и читаемость на тёмном и светлом фоне.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                platform: 'ВКонтакте', handle: '@svezho_shop', shape: 'rounded-2xl', mask: 'square',
                variants: [
                  { bg: 'from-[#2d7a3a] to-[#4caf50]', label: 'Основная', dark: false },
                  { bg: 'bg-[#1a2e1c]', label: 'Тёмная', dark: true },
                ],
              },
              {
                platform: 'Instagram', handle: '@svezho.shop', shape: 'rounded-[28%]', mask: 'squircle',
                variants: [
                  { bg: 'from-[#2d7a3a] to-[#4caf50]', label: 'Основная', dark: false },
                  { bg: 'from-[#f57c00] to-[#fbc02d]', label: 'Акцентная', dark: false },
                ],
              },
              {
                platform: 'Telegram', handle: '@svezho_official', shape: 'rounded-[28%]', mask: 'squircle',
                variants: [
                  { bg: 'from-[#2d7a3a] to-[#4caf50]', label: 'Основная', dark: false },
                  { bg: 'bg-[#1a2e1c]', label: 'Тёмная', dark: true },
                ],
              },
              {
                platform: 'WhatsApp', handle: '+7 495 123-45-67', shape: 'rounded-full', mask: 'circle',
                variants: [
                  { bg: 'from-[#2d7a3a] to-[#4caf50]', label: 'Стандарт', dark: false },
                  { bg: 'bg-white border-2 border-[#2d7a3a]', label: 'Светлая', dark: false, textGreen: true },
                ],
              },
              {
                platform: 'YouTube', handle: 'Свежо! Магазин', shape: 'rounded-2xl', mask: 'square',
                variants: [
                  { bg: 'from-[#2d7a3a] to-[#4caf50]', label: 'Основная', dark: false },
                  { bg: 'from-[#1a2e1c] to-[#2d7a3a]', label: 'Тёмная', dark: false },
                ],
              },
              {
                platform: 'Яндекс Карты', handle: 'Свежо! · 4.9 ★', shape: 'rounded-2xl', mask: 'square',
                variants: [
                  { bg: 'from-[#2d7a3a] to-[#4caf50]', label: 'Основная', dark: false },
                  { bg: 'bg-[#fbc02d]', label: 'Жёлтая', dark: false, textDark: true },
                ],
              },
            ].map((social) => (
              <div key={social.platform} className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="font-bold text-foreground">{social.platform}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{social.handle}</p>
                  </div>
                  <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-mono">{social.mask}</span>
                </div>
                <div className="flex gap-4 items-end">
                  {social.variants.map((v, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className={`w-16 h-16 ${social.shape} flex items-center justify-center text-3xl shadow-lg overflow-hidden ${v.bg.startsWith('from') ? `bg-gradient-to-br ${v.bg}` : v.bg}`}>
                        {v.textGreen ? (
                          <span className="font-unbounded text-xl font-black text-[#2d7a3a]">С<span className="text-[#f57c00]">!</span></span>
                        ) : v.textDark ? (
                          <span className="font-unbounded text-xl font-black text-[#1a2e1c]">С<span className="text-[#2d7a3a]">!</span></span>
                        ) : (
                          <span className="text-3xl">🥦</span>
                        )}
                      </div>
                      <p className="text-[10px] text-muted-foreground text-center">{v.label}</p>
                    </div>
                  ))}
                  {/* Size preview */}
                  <div className="ml-auto flex flex-col items-center gap-1.5">
                    <div className={`w-10 h-10 ${social.shape} bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] flex items-center justify-center text-xl shadow overflow-hidden`}>🥦</div>
                    <div className={`w-6 h-6 ${social.shape} bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] flex items-center justify-center text-xs shadow overflow-hidden`}>🥦</div>
                    <p className="text-[9px] text-muted-foreground">масштаб</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social sizes reference */}
          <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
            <h4 className="font-bold text-foreground mb-4">Технические размеры для загрузки</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Платформа</th>
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Аватар</th>
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Обложка</th>
                    <th className="text-left py-2 font-bold text-foreground">Пост</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { p: 'ВКонтакте', av: '200×200 px', cover: '1590×400 px', post: '1280×720 px' },
                    { p: 'Instagram', av: '320×320 px', cover: '1080×566 px', post: '1080×1080 px' },
                    { p: 'Telegram', av: '640×640 px', cover: '—', post: '1280×720 px' },
                    { p: 'YouTube', av: '800×800 px', cover: '2560×1440 px', post: '1280×720 px' },
                  ].map(row => (
                    <tr key={row.p}>
                      <td className="py-2.5 pr-4 font-semibold text-foreground">{row.p}</td>
                      <td className="py-2.5 pr-4 font-mono text-muted-foreground">{row.av}</td>
                      <td className="py-2.5 pr-4 font-mono text-muted-foreground">{row.cover}</td>
                      <td className="py-2.5 font-mono text-muted-foreground">{row.post}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 12 НОСИТЕЛИ ── */}
        <section className="mb-14">
          <SectionTitle number="12" title="Применение на носителях" />
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-2xl">
            Как фирменный стиль выглядит в реальной жизни — от бумажного пакета до билборда на улице.
          </p>

          {/* Визитная карточка */}
          <div className="mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Визитная карточка · 90×50 мм</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Front */}
              <div>
                <p className="text-[11px] text-muted-foreground mb-2 text-center">Лицевая сторона</p>
                <div className="aspect-[9/5] bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-6xl opacity-10 select-none rotate-12">🥬</div>
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: 'radial-gradient(circle at 20px 20px, white 1.5px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-lg">🥦</div>
                      <span className="font-unbounded text-lg font-black text-white">Свежо<span className="text-[#f57c00]">!</span></span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className="font-golos font-bold text-white text-base">Алексей Фермеров</p>
                    <p className="font-golos text-white/60 text-xs mt-0.5">Основатель · Генеральный директор</p>
                  </div>
                </div>
              </div>
              {/* Back */}
              <div>
                <p className="text-[11px] text-muted-foreground mb-2 text-center">Обратная сторона</p>
                <div className="aspect-[9/5] bg-[#faf8f2] rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-border relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.07]" style={{
                    backgroundImage: 'radial-gradient(circle at 20px 20px, #2d7a3a 1.5px, transparent 0)',
                    backgroundSize: '28px 28px'
                  }} />
                  <div className="relative z-10 flex flex-col gap-1.5 text-xs font-golos text-[#1a2e1c]/70">
                    <span className="flex items-center gap-2">📞 +7 (495) 123-45-67</span>
                    <span className="flex items-center gap-2">✉️ alexey@svezho.ru</span>
                    <span className="flex items-center gap-2">🌐 svezho.ru</span>
                    <span className="flex items-center gap-2">📍 Москва, ул. Фермерская, 12</span>
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <p className="text-[10px] text-[#2d7a3a]/50 font-golos tracking-widest uppercase">овощи · фрукты · зелень</p>
                    <div className="text-lg">🌱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Пакет */}
          <div className="mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Бумажный пакет · фирменная упаковка</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Малый */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-44 bg-[#faf8f2] border border-[#2d7a3a]/20 rounded-b-lg shadow-lg flex flex-col items-center justify-between py-4 overflow-hidden">
                  {/* Pattern bg */}
                  <div className="absolute inset-0 grid grid-cols-4 gap-2 p-2 opacity-10 rotate-6 scale-110">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className="text-lg select-none">{'🥦🍅🥕🍋🌿🍊🥒🍆'.split('')[i % 8]}</span>
                    ))}
                  </div>
                  {/* Handles */}
                  <div className="flex gap-4 z-10">
                    <div className="w-5 h-6 border-b-2 border-[#2d7a3a] rounded-b-full" />
                    <div className="w-5 h-6 border-b-2 border-[#2d7a3a] rounded-b-full" />
                  </div>
                  <div className="z-10 text-center">
                    <div className="text-2xl mb-1">🥦</div>
                    <div className="font-unbounded text-sm font-black text-[#2d7a3a]">Свежо<span className="text-[#f57c00]">!</span></div>
                  </div>
                  <p className="z-10 text-[9px] text-[#2d7a3a]/40 tracking-widest uppercase font-golos">эко-упаковка</p>
                </div>
                <p className="text-[11px] text-muted-foreground">Малый · 180×250мм</p>
              </div>
              {/* Средний */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-40 h-52 bg-[#1a2e1c] rounded-b-lg shadow-xl flex flex-col items-center justify-between py-4 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-4 gap-2 p-2 opacity-10 rotate-6 scale-110">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className="text-lg select-none">{'🥦🍅🥕🍋🌿🍊🥒🍆'.split('')[i % 8]}</span>
                    ))}
                  </div>
                  <div className="flex gap-5 z-10">
                    <div className="w-5 h-7 border-b-2 border-white/40 rounded-b-full" />
                    <div className="w-5 h-7 border-b-2 border-white/40 rounded-b-full" />
                  </div>
                  <div className="z-10 text-center">
                    <div className="text-3xl mb-1">🥦</div>
                    <div className="font-unbounded text-base font-black text-white">Свежо<span className="text-[#f57c00]">!</span></div>
                    <div className="font-golos text-[9px] text-white/40 tracking-widest uppercase mt-0.5">овощи · фрукты</div>
                  </div>
                  <p className="z-10 text-[9px] text-white/30 tracking-widest uppercase font-golos">svezho.ru</p>
                </div>
                <p className="text-[11px] text-muted-foreground">Средний · 240×320мм</p>
              </div>
              {/* Большой */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-44 h-56 rounded-b-lg shadow-xl flex flex-col items-center justify-between py-4 overflow-hidden" style={{ background: 'linear-gradient(160deg, #2d7a3a 0%, #4caf50 100%)' }}>
                  <div className="absolute inset-0 grid grid-cols-5 gap-1.5 p-2 opacity-10 rotate-6 scale-110">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span key={i} className="text-base select-none">{'🥦🍅🥕🍋🌿🍊🥒🍆🥑🍓'.split('')[i % 10]}</span>
                    ))}
                  </div>
                  <div className="flex gap-5 z-10">
                    <div className="w-6 h-7 border-b-2 border-white/50 rounded-b-full" />
                    <div className="w-6 h-7 border-b-2 border-white/50 rounded-b-full" />
                  </div>
                  <div className="z-10 text-center">
                    <div className="text-4xl mb-1">🥦</div>
                    <div className="font-unbounded text-xl font-black text-white">Свежо<span className="text-[#fbc02d]">!</span></div>
                    <div className="font-golos text-[10px] text-white/60 tracking-widest uppercase mt-1">овощи · фрукты · зелень</div>
                  </div>
                  <p className="z-10 text-[9px] text-white/50 tracking-widest uppercase font-golos">эко · натурально</p>
                </div>
                <p className="text-[11px] text-muted-foreground">Большой · 320×420мм</p>
              </div>
            </div>
          </div>

          {/* Вывеска */}
          <div className="mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Вывеска магазина · фасад</p>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border/60">
              {/* Signage */}
              <div className="bg-[#1a2e1c] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden min-h-[140px]">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                  backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
                  backgroundSize: '50px 50px'
                }} />
                <div className="absolute right-8 text-[120px] opacity-[0.06] select-none rotate-12 leading-none">🥬</div>
                <div className="relative z-10 flex items-center gap-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-3xl flex items-center justify-center text-5xl shadow-2xl">🥦</div>
                  <div>
                    <div className="font-unbounded text-5xl font-black text-white leading-none">Свежо<span className="text-[#f57c00]">!</span></div>
                    <div className="font-golos text-sm text-white/50 tracking-[0.3em] uppercase mt-1.5">овощи · фрукты · зелень</div>
                  </div>
                </div>
                <div className="relative z-10 text-right">
                  <div className="bg-[#f57c00] text-white font-golos font-bold text-sm px-5 py-2.5 rounded-2xl shadow-lg">Открыто 8–22 🕗</div>
                  <p className="font-golos text-white/40 text-xs mt-2">ул. Фермерская, 12</p>
                </div>
              </div>
              <div className="bg-white p-4 flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Световая вывеска · материал: алюминиевый профиль + LED-подсветка</p>
                <p className="text-xs font-mono text-muted-foreground">2400 × 600 мм</p>
              </div>
            </div>
          </div>

          {/* Наружная реклама */}
          <div className="mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Наружная реклама · билборд 3×6м</p>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <div className="aspect-[2/1] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2e1c 0%, #2d7a3a 60%, #4caf50 100%)' }}>
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: 'radial-gradient(circle at 30px 30px, white 2px, transparent 0)',
                  backgroundSize: '60px 60px'
                }} />
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15">
                  <div className="grid grid-cols-4 gap-3 p-4 h-full rotate-6 scale-110">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span key={i} className="text-3xl select-none">{'🥦🍅🥕🍋🌿🍊🥒🍆🥑🍓🌱🍇'.split('')[i % 12]}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">🥦</div>
                    <span className="font-unbounded text-2xl font-black text-white">Свежо<span className="text-[#f57c00]">!</span></span>
                  </div>
                  <div>
                    <p className="font-unbounded text-4xl sm:text-5xl font-black text-white leading-tight mb-3">
                      Свежее —<br />прямо к столу
                    </p>
                    <p className="font-golos text-white/70 text-base mb-4">Доставка за 90 минут · Эко-упаковка</p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <div className="bg-[#f57c00] text-white font-golos font-black text-lg px-6 py-2.5 rounded-2xl shadow-lg">svezho.ru</div>
                      <div className="bg-white/15 backdrop-blur-sm text-white font-golos text-sm px-4 py-2.5 rounded-2xl">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Билборд / Суперсайт · Печать на баннерной ткани 440г/м²</p>
                <p className="text-xs font-mono text-muted-foreground">3000 × 6000 мм · 300 dpi</p>
              </div>
            </div>
          </div>

          {/* Соцсети — посты */}
          <div className="mb-4">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Шаблоны для социальных сетей</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Пост — квадрат */}
              <div className="flex flex-col gap-2">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative" style={{ background: 'linear-gradient(145deg, #1a2e1c, #2d7a3a)' }}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-2 p-3 rotate-12 scale-125">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <span key={i} className="text-2xl select-none">{'🥦🍅🥕🍊🌿🍋🥒🍆'.split('')[i % 8]}</span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center text-sm">🥦</div>
                      <span className="font-unbounded text-xs font-black text-white">Свежо<span className="text-[#f57c00]">!</span></span>
                    </div>
                    <div>
                      <span className="bg-[#f57c00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full font-golos">Хит недели</span>
                      <p className="font-unbounded text-2xl font-black text-white mt-2 leading-tight">Томаты черри<br/>189 ₽ / 500г</p>
                      <p className="font-golos text-white/60 text-xs mt-1.5">Краснодарский край · Свежие</p>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground text-center">Пост · 1080×1080 px</p>
              </div>

              {/* Story */}
              <div className="flex flex-col gap-2">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg relative max-h-72" style={{ background: 'linear-gradient(180deg, #faf8f2 0%, #e8f5e9 100%)' }}>
                  <div className="absolute inset-0 opacity-[0.08]" style={{
                    backgroundImage: 'radial-gradient(circle at 20px 20px, #2d7a3a 1.5px, transparent 0)',
                    backgroundSize: '28px 28px'
                  }} />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-lg flex items-center justify-center text-sm">🥦</div>
                      <span className="font-unbounded text-xs font-black text-[#2d7a3a]">Свежо<span className="text-[#f57c00]">!</span></span>
                    </div>
                    <div>
                      <div className="text-5xl text-center mb-2">🥑</div>
                      <div className="bg-[#2d7a3a] rounded-2xl p-3 text-center">
                        <p className="font-unbounded text-base font-black text-white leading-tight">Авокадо спелое</p>
                        <p className="font-golos text-white/70 text-xs mt-1">149 ₽ / шт · Мексика</p>
                        <div className="bg-[#f57c00] text-white text-xs font-bold px-4 py-1.5 rounded-xl mt-2 font-golos inline-block">Добавить в корзину</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground text-center">Stories · 1080×1920 px</p>
              </div>

              {/* Горизонтальный */}
              <div className="flex flex-col gap-2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg relative" style={{ background: 'linear-gradient(135deg, #fbc02d 0%, #f57c00 100%)' }}>
                  <div className="absolute right-0 top-0 bottom-0 opacity-20">
                    <div className="flex flex-col justify-center h-full p-3 gap-1">
                      {['🥦', '🍅', '🥕', '🍋'].map((e, i) => (
                        <span key={i} className="text-3xl block">{e}</span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center text-xs">🥦</div>
                      <span className="font-unbounded text-xs font-black text-white">Свежо<span className="text-white/60">!</span></span>
                    </div>
                    <div>
                      <p className="font-unbounded text-lg font-black text-white leading-tight">Скидка 10%<br/>на первый заказ</p>
                      <p className="font-golos text-white/80 text-[11px] mt-1">Промокод при регистрации</p>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground text-center">Баннер · 1280×720 px</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13 МИССИЯ И ЦЕННОСТИ ── */}
        <section className="mb-14">
          <SectionTitle number="13" title="Миссия и ценности бренда" />

          {/* Mission statement */}
          <div className="relative bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-3xl p-10 mb-6 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)', backgroundSize: '50px 50px' }} />
            <div className="absolute right-6 top-6 text-8xl opacity-10 select-none rotate-12">🌍</div>
            <div className="relative z-10 max-w-2xl">
              <p className="text-white/50 text-xs font-mono uppercase tracking-[0.2em] mb-4">Миссия бренда</p>
              <p className="font-unbounded text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                Делать свежие и натуральные продукты доступными каждой семье
              </p>
              <p className="font-golos text-white/70 text-base leading-relaxed">
                Мы верим: качественная еда не должна быть привилегией. Свежие овощи и фрукты — это основа здоровья, энергии и хорошего настроения. Наша задача — доставить их к вашему столу быстро, честно и с заботой о природе.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Видение</p>
            <p className="font-golos text-xl font-semibold text-foreground leading-relaxed">
              «Стать самым любимым и доверенным продуктовым магазином в каждом городе России — тем, где всегда знают вас по имени»
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🌱', title: 'Натуральность', color: 'bg-emerald-50 border-emerald-200', accent: 'text-emerald-700', desc: 'Никаких ГМО, ускорителей роста и искусственных добавок. Каждый продукт — такой, каким он должен быть в природе.' },
              { icon: '🤝', title: 'Честность', color: 'bg-blue-50 border-blue-200', accent: 'text-blue-700', desc: 'Реальные фото, точный вес, прозрачные цены. Мы не прячем происхождение продукта и не завышаем сроки годности.' },
              { icon: '🌍', title: 'Экология', color: 'bg-green-50 border-green-200', accent: 'text-green-700', desc: 'Эко-упаковка из переработанного картона, минимум пластика, электрокурьеры. Каждый заказ — вклад в чистую планету.' },
              { icon: '💛', title: 'Забота', color: 'bg-yellow-50 border-yellow-200', accent: 'text-yellow-700', desc: 'Мы семейный бизнес и относимся к каждому клиенту как к гостю в нашем доме. Ваше здоровье и довольство — наш приоритет.' },
              { icon: '⚡', title: 'Скорость', color: 'bg-orange-50 border-orange-200', accent: 'text-orange-700', desc: 'Доставка за 90 минут — не просто обещание, а стандарт. Свежие продукты должны быть свежими, когда попадают к вам.' },
              { icon: '🏡', title: 'Местность', color: 'bg-lime-50 border-lime-200', accent: 'text-lime-700', desc: 'Поддерживаем фермеров Подмосковья и Краснодарского края. Покупая у нас, вы помогаете развитию местного сельского хозяйства.' },
            ].map(v => (
              <div key={v.title} className={`rounded-3xl border p-6 ${v.color}`}>
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className={`font-bold text-base mb-2 ${v.accent}`}>{v.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Brand personality */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-6">Характер и тон бренда</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-[#2d7a3a] uppercase tracking-wider mb-4">Бренд говорит как...</p>
                <div className="space-y-3">
                  {[
                    { trait: 'Дружелюбный сосед', desc: 'Просто, тепло, без пафоса' },
                    { trait: 'Эксперт-фермер', desc: 'Знает откуда каждый продукт' },
                    { trait: 'Заботливый родитель', desc: 'Думает о здоровье семьи' },
                    { trait: 'Эко-активист', desc: 'Ненавязчиво продвигает экологию' },
                  ].map(t => (
                    <div key={t.trait} className="flex items-center gap-3 p-3 bg-accent rounded-xl">
                      <span className="w-2 h-2 bg-[#2d7a3a] rounded-full shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-foreground">{t.trait}</p>
                        <p className="text-xs text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-4">Бренд НЕ говорит как...</p>
                <div className="space-y-3">
                  {[
                    { trait: 'Корпоративный менеджер', desc: 'Никакого бюрократического языка' },
                    { trait: 'Агрессивный продавец', desc: 'Без давления и манипуляций' },
                    { trait: 'Премиум-бутик', desc: 'Мы доступны, не элитарны' },
                    { trait: 'Технократ', desc: 'Никаких сложных терминов' },
                  ].map(t => (
                    <div key={t.trait} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                      <span className="w-2 h-2 bg-red-400 rounded-full shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-foreground">{t.trait}</p>
                        <p className="text-xs text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14 ВИЗУАЛЬНАЯ ИДЕНТИЧНОСТЬ ── */}
        <section className="mb-14">
          <SectionTitle number="14" title="Визуальная идентичность" />
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-2xl">
            Визуальный язык бренда строится на 5 принципах. Каждый элемент — от скругления кнопки до выбора фото — должен им соответствовать.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                num: '1', title: 'Органичность форм',
                desc: 'Скруглённые углы везде: кнопки, карточки, иконки. Радиус 16–32px. Острых углов нет — они противоречат природному характеру бренда.',
                demo: <div className="flex gap-2 items-center justify-center p-4">
                  <div className="w-12 h-12 bg-[#2d7a3a] rounded-3xl flex items-center justify-center text-2xl">🥦</div>
                  <div className="w-12 h-12 bg-[#f57c00] rounded-2xl flex items-center justify-center text-2xl">🍊</div>
                  <div className="w-12 h-12 bg-[#fbc02d] rounded-full flex items-center justify-center text-2xl">🌿</div>
                </div>
              },
              {
                num: '2', title: 'Натуральные текстуры',
                desc: 'Точечные паттерны имитируют бумагу. Градиенты — как переход цвета в природе. Никаких металлических и глянцевых эффектов.',
                demo: <div className="p-4 rounded-2xl" style={{ backgroundImage: 'radial-gradient(circle at 18px 18px, #2d7a3a22 2px, transparent 0)', backgroundSize: '30px 30px' }}>
                  <div className="text-center text-xs text-muted-foreground">текстура · паттерн</div>
                </div>
              },
              {
                num: '3', title: 'Живые фотографии',
                desc: 'Реальные овощи и фрукты, естественный свет. Никаких студийных белых фонов — только натура, дерево, лён, зелень.',
                demo: <div className="p-3 rounded-2xl bg-amber-50 text-center text-xs text-amber-700 font-medium">📸 Натуральный свет<br/>Деревянные поверхности<br/>Живые цвета</div>
              },
              {
                num: '4', title: 'Воздух и пространство',
                desc: 'Щедрые отступы между элементами. Страница должна «дышать». Перегруженный макет противоречит свежести.',
                demo: <div className="p-4 flex flex-col gap-2">
                  <div className="h-2 bg-[#2d7a3a]/20 rounded-full w-3/4" />
                  <div className="h-2 bg-[#2d7a3a]/10 rounded-full w-1/2" />
                  <div className="h-2 bg-[#2d7a3a]/20 rounded-full w-2/3" />
                </div>
              },
              {
                num: '5', title: 'Цветовой акцент',
                desc: 'На каждом экране — один яркий акцент (оранжевый или жёлтый). Остальное — зелень и нейтраль. Никогда два ярких цвета рядом.',
                demo: <div className="flex gap-2 p-3 items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-[#2d7a3a]" />
                  <div className="w-8 h-8 rounded-lg bg-[#4caf50]" />
                  <div className="w-8 h-8 rounded-lg bg-[#faf8f2] border border-border" />
                  <div className="w-8 h-8 rounded-lg bg-[#f57c00]" />
                  <span className="text-xs text-muted-foreground">← 1 акцент</span>
                </div>
              },
              {
                num: '6', title: 'Иерархия через размер',
                desc: 'Важное — большое. Акцент достигается масштабом, а не количеством цветов. Цена всегда крупнее названия.',
                demo: <div className="p-3 text-center font-golos">
                  <div className="text-2xl font-black text-[#2d7a3a]">189 ₽</div>
                  <div className="text-sm font-semibold text-foreground">Томаты черри</div>
                  <div className="text-xs text-muted-foreground">500г · Россия</div>
                </div>
              },
            ].map(p => (
              <div key={p.num} className="bg-white rounded-3xl border border-border/60 shadow-sm overflow-hidden">
                <div className="bg-muted/40 min-h-[90px] flex items-center justify-center">{p.demo}</div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 bg-[#2d7a3a] text-white rounded-lg flex items-center justify-center text-[10px] font-black">{p.num}</span>
                    <h4 className="font-bold text-sm text-foreground">{p.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo style guide */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-5">Стиль фотографий</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: '✅ Используй', items: ['Естественный боковой свет', 'Деревянные поверхности', 'Льняные и хлопковые ткани', 'Глиняная посуда', 'Живая зелень в кадре', 'Вид сверху и 45°'], bg: 'bg-green-50 border-green-200' },
                { label: '❌ Избегай', items: ['Студийный белый фон', 'Резкие тени от вспышки', 'Пластиковая посуда', 'Слишком насыщенные фильтры', 'Идеально отфотошопленные кадры', 'Фото с watermark'], bg: 'bg-red-50 border-red-200' },
                { label: '⚙️ Обработка', items: ['Тёплый баланс белого +200K', 'Лёгкое осветление теней', 'Снизить насыщенность −10', 'Поднять зелёный канал +5', 'Зерно 5–10% для органики', 'Хроматическое виньетирование'], bg: 'bg-blue-50 border-blue-200' },
              ].map(col => (
                <div key={col.label} className={`rounded-2xl border p-5 ${col.bg}`}>
                  <p className="font-bold text-sm text-foreground mb-3">{col.label}</p>
                  <ul className="space-y-1.5">
                    {col.items.map(i => <li key={i} className="text-xs text-foreground/70 flex items-start gap-1.5"><span className="mt-0.5">·</span>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 15 ОСНОВНЫЕ И ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА ── */}
        <section className="mb-14">
          <SectionTitle number="15" title="Цвета: основные, дополнительные и запрещённые" />

          {/* Primary */}
          <div className="mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Основная палитра — обязательные цвета бренда</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Primary Green', hex: '#2d7a3a', role: 'Логотип, кнопки CTA, заголовки', must: true },
                { name: 'Light Green', hex: '#4caf50', role: 'Градиенты, иконки, hover', must: true },
                { name: 'Accent Orange', hex: '#f57c00', role: 'Знак «!», бейджи, акценты', must: true },
                { name: 'Brand Dark', hex: '#1a2e1c', role: 'Футер, тёмный фон, заголовки', must: true },
              ].map(c => (
                <div key={c.hex} className="rounded-2xl overflow-hidden border-2 border-[#2d7a3a]/20 shadow-sm">
                  <div className="h-20 flex items-end p-3 relative" style={{ background: c.hex }}>
                    <span className="font-mono text-xs font-bold text-white/90">{c.hex}</span>
                    <div className="absolute top-2 right-2 bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">ОСНОВНОЙ</div>
                  </div>
                  <div className="bg-white p-3">
                    <p className="font-bold text-xs text-foreground">{c.name}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div className="mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Дополнительная палитра — вспомогательные цвета</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Sunny Yellow', hex: '#fbc02d', role: 'Скидки, звёзды, промо', note: 'только как акцент' },
                { name: 'Cream', hex: '#faf8f2', role: 'Фоны страниц, карточки', note: 'основной фон' },
                { name: 'Warm Gray', hex: '#f0ede4', role: 'Поля форм, теги', note: 'нейтральный фон' },
                { name: 'Light Accent', hex: '#e8f5e9', role: 'Зелёные подложки, hover', note: 'бледный акцент' },
              ].map(c => (
                <div key={c.hex} className="rounded-2xl overflow-hidden border border-border shadow-sm">
                  <div className="h-16 flex items-end p-3 relative" style={{ background: c.hex }}>
                    <span className="font-mono text-xs font-bold" style={{ color: c.hex === '#faf8f2' || c.hex === '#f0ede4' || c.hex === '#fbc02d' || c.hex === '#e8f5e9' ? '#1a2e1c99' : '#fff' }}>{c.hex}</span>
                    <div className="absolute top-2 right-2 bg-black/10 text-black/50 text-[9px] px-1.5 py-0.5 rounded">ДОП.</div>
                  </div>
                  <div className="bg-white p-3">
                    <p className="font-bold text-xs text-foreground">{c.name}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{c.role}</p>
                    <p className="text-[10px] text-[#2d7a3a] mt-0.5 italic">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Forbidden colors */}
          <div className="bg-white rounded-3xl border border-red-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center text-white font-black text-sm">✕</div>
              <h3 className="font-bold text-foreground">Запрещённые цвета</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Следующие цвета и оттенки <strong>категорически запрещены</strong> в любых материалах бренда — они противоречат ценностям натуральности и доверия.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {[
                { hex: '#ff00ff', name: 'Кислотный пурпур', reason: 'Агрессия, синтетика' },
                { hex: '#00ffff', name: 'Неоновый голубой', reason: 'Холод, химия' },
                { hex: '#ff0000', name: 'Ярко-красный', reason: 'Тревога, опасность' },
                { hex: '#8b00ff', name: 'Фиолетовый', reason: 'Не связан с природой' },
                { hex: '#c0c0c0', name: 'Серебристый', reason: 'Металл, не органика' },
                { hex: '#000080', name: 'Тёмно-синий', reason: 'Противоречит палитре' },
              ].map(c => (
                <div key={c.hex} className="rounded-2xl overflow-hidden border-2 border-red-100">
                  <div className="h-14 relative" style={{ background: c.hex }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-red-500 font-black text-lg">✕</div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-2.5">
                    <p className="font-bold text-[11px] text-red-600">{c.name}</p>
                    <p className="text-[10px] text-red-400 mt-0.5">{c.reason}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Запрещены также:', items: ['Любые флуоресцентные и неоновые цвета', 'Градиенты с несовместимыми цветами (синий + зелёный)', 'Цвета конкурентов — сверяйся с их брендбуками', 'Все оттенки серого как основной цвет текста (только #1a2e1c или muted)'] },
                { title: 'Исключения:', items: ['Красный допустим только для статусов ошибок и отмены заказа', 'Синий допустим только для ссылок (underline + #2563eb)', 'Серый (#94a3b8) допустим только для second-level текста', 'Белый (#ffffff) допустим только как фон, никогда как цвет текста на белом'] },
              ].map(block => (
                <div key={block.title} className="p-4 bg-muted/40 rounded-2xl">
                  <p className="font-bold text-xs text-foreground mb-2">{block.title}</p>
                  <ul className="space-y-1.5">
                    {block.items.map(i => <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5"><span className="mt-0.5 shrink-0">·</span>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 16 ОСНОВНОЙ ШРИФТ И ЕГО ПРИМЕНЕНИЕ ── */}
        <section className="mb-14">
          <SectionTitle number="16" title="Основной шрифт и его применение" />

          {/* Application matrix */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mb-4">
            <h3 className="font-bold text-foreground mb-6">Матрица применения шрифтов</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 rounded-l-xl font-bold text-foreground">Элемент</th>
                    <th className="text-left p-3 font-bold text-foreground">Шрифт</th>
                    <th className="text-left p-3 font-bold text-foreground">Размер</th>
                    <th className="text-left p-3 font-bold text-foreground">Вес</th>
                    <th className="text-left p-3 rounded-r-xl font-bold text-foreground">Цвет</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    { el: 'Название бренда / Логотип', font: 'Unbounded', size: '24–60px', weight: '900', color: '#2d7a3a' },
                    { el: 'Hero-заголовок', font: 'Unbounded', size: '40–72px', weight: '900', color: '#1a2e1c' },
                    { el: 'H1 — заголовок страницы', font: 'Golos Text', size: '36–48px', weight: '700', color: '#1a2e1c' },
                    { el: 'H2 — заголовок раздела', font: 'Golos Text', size: '28–36px', weight: '700', color: '#1a2e1c' },
                    { el: 'H3 — подзаголовок', font: 'Golos Text', size: '20–24px', weight: '600', color: '#1a2e1c' },
                    { el: 'Основной текст', font: 'Golos Text', size: '16px', weight: '400', color: '#1a2e1c' },
                    { el: 'Подписи, теги', font: 'Golos Text', size: '12–14px', weight: '500', color: '#6b7280' },
                    { el: 'Кнопки', font: 'Golos Text', size: '14–16px', weight: '700', color: '#ffffff' },
                    { el: 'Навигация', font: 'Golos Text', size: '14px', weight: '500', color: '#1a2e1c' },
                    { el: 'Цена товара', font: 'Golos Text', size: '18–24px', weight: '700', color: '#2d7a3a' },
                    { el: 'Дескриптор логотипа', font: 'Golos Text', size: '11–12px', weight: '500', color: '#2d7a3a' },
                    { el: 'Технические данные', font: 'monospace (system)', size: '11–12px', weight: '400', color: '#9ca3af' },
                  ].map((row, i) => (
                    <tr key={row.el} className={i % 2 === 0 ? '' : 'bg-muted/20'}>
                      <td className="p-3 font-medium text-foreground">{row.el}</td>
                      <td className="p-3 font-mono text-muted-foreground">{row.font}</td>
                      <td className="p-3 font-mono text-muted-foreground">{row.size}</td>
                      <td className="p-3 font-mono text-muted-foreground">{row.weight}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full border border-border shrink-0" style={{ background: row.color }} />
                          <span className="font-mono text-muted-foreground">{row.color}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Font in context */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mb-4">
            <h3 className="font-bold text-foreground mb-6">Шрифт в контексте: примеры применения</h3>
            <div className="space-y-6">
              {/* Email header */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Email-рассылка — шапка</p>
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div className="bg-[#1a2e1c] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-lg flex items-center justify-center text-base">🥦</div>
                      <span className="font-unbounded text-base font-black text-white">Свежо<span className="text-[#f57c00]">!</span></span>
                    </div>
                    <span className="font-golos text-white/40 text-xs">Еженедельная рассылка</span>
                  </div>
                  <div className="bg-[#faf8f2] px-6 py-5">
                    <p className="font-unbounded text-xl font-black text-[#1a2e1c] mb-1">Хит этой недели 🍓</p>
                    <p className="font-golos text-sm text-muted-foreground">Клубника из Краснодарского края — 349 ₽ / 500г. Осталось совсем немного!</p>
                  </div>
                </div>
              </div>
              {/* Price tag */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Ценник на прилавке</p>
                <div className="inline-flex items-center gap-4 bg-white rounded-2xl border-2 border-[#2d7a3a]/20 px-6 py-4 shadow-sm">
                  <span className="text-4xl">🥦</span>
                  <div>
                    <p className="font-golos font-bold text-lg text-foreground">Брокколи свежая</p>
                    <p className="font-golos text-sm text-muted-foreground">Италия · ~600г</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-golos font-black text-3xl text-[#2d7a3a]">129 ₽</p>
                    <p className="font-golos text-xs text-muted-foreground">за штуку</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fallback fonts */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Резервные шрифты</h4>
                <p className="text-sm text-amber-800 mb-3">Если Google Fonts недоступны (оффлайн, корпоративные ограничения):</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-amber-700">
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="font-bold mb-1">Unbounded →</p>
                    <p>Montserrat Black → Arial Bold</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="font-bold mb-1">Golos Text →</p>
                    <p>Roboto → Helvetica Neue → Arial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 17 ПРИМЕНЕНИЕ ФИРМЕННОГО СТИЛЯ ── */}
        <section className="mb-14">
          <SectionTitle number="17" title="Применение фирменного стиля" />

          {/* Checklist */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm mb-6">
            <h3 className="font-bold text-foreground mb-6">Чеклист перед публикацией любого материала</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Логотип', icon: '🎯',
                  items: ['Использована актуальная версия v4.0', 'Соблюдена защитная зона', 'Логотип читаем на фоне', 'Не искажены пропорции', 'Оранжевый «!» присутствует'],
                },
                {
                  title: 'Цвета', icon: '🎨',
                  items: ['Только из основной или доп. палитры', 'Нет запрещённых цветов', 'Контраст текста ≥ 4.5:1', 'Один акцентный цвет на экран', 'Фон из кремовой/белой гаммы'],
                },
                {
                  title: 'Шрифты', icon: '✍️',
                  items: ['Golos Text для текста', 'Unbounded только для героя/лого', 'Нет смешивания с чужими шрифтами', 'Кавычки-ёлочки «»', 'Длинное тире —, не дефис'],
                },
                {
                  title: 'Общее', icon: '✅',
                  items: ['Фото в натуральном стиле', 'Достаточно воздуха на макете', 'Иконки из фирменного набора', 'Нет орфографических ошибок', 'Адаптация под носитель сделана'],
                },
              ].map(cl => (
                <div key={cl.title} className="p-5 bg-muted/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{cl.icon}</span>
                    <h4 className="font-bold text-foreground">{cl.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {cl.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                        <div className="w-4 h-4 rounded border-2 border-[#2d7a3a]/30 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 bg-[#2d7a3a] rounded-sm" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Context rules */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { ctx: '🌐 Веб / приложение', rules: ['Минимальный размер кнопки 44px', 'Радиус карточек 16–24px', 'Анимации не быстрее 200ms', 'Логотип в хедере всегда кликабелен', 'Мобильная версия обязательна'] },
              { ctx: '🖨️ Печать', rules: ['Цвета в CMYK (не RGB)', 'Разрешение ≥ 300 dpi', 'Отступы от края ≥ 5мм', 'Блид 3мм для обрезки', 'Шрифт не мельче 7pt'] },
              { ctx: '📱 Социальные сети', rules: ['Логотип виден в превью', 'Текст занимает <20% постера', 'Хэштег #свежо в постах', 'Единый стиль stories и постов', 'Формат видео 9:16 для stories'] },
            ].map(ctx => (
              <div key={ctx.ctx} className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
                <p className="font-bold text-sm text-foreground mb-3">{ctx.ctx}</p>
                <ul className="space-y-2">
                  {ctx.rules.map(r => (
                    <li key={r} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-[#2d7a3a] shrink-0 mt-0.5">→</span>{r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 18 ДИЗАЙН ВЫВЕСОК И МАГАЗИНА ── */}
        <section className="mb-14">
          <SectionTitle number="18" title="Дизайн вывесок и магазина" />
          <p className="text-muted-foreground mb-8 text-sm max-w-2xl">Фирменный стиль в физическом пространстве — от входа до прилавка.</p>

          <div className="space-y-6">
            {/* Фасад */}
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Фасад магазина</p>
              <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
                <div className="relative min-h-[220px] bg-[#e8e0d0]">
                  {/* Sky */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sky-200 to-sky-100" />
                  {/* Building */}
                  <div className="absolute inset-x-4 sm:inset-x-16 bottom-0 top-12 bg-[#f5f0e8] rounded-t-2xl border border-[#d4c9b8] border-b-0">
                    {/* Signage strip */}
                    <div className="absolute top-0 inset-x-0 bg-[#1a2e1c] rounded-t-2xl py-4 px-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-2xl shadow-lg">🥦</div>
                        <div>
                          <div className="font-unbounded text-2xl font-black text-white">Свежо<span className="text-[#f57c00]">!</span></div>
                          <div className="font-golos text-[10px] text-white/40 tracking-widest uppercase">овощи · фрукты · зелень</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-[#f57c00] text-white font-golos text-xs font-bold px-3 py-1.5 rounded-xl">Открыто</div>
                        <p className="font-golos text-white/40 text-[10px] mt-1">8:00 – 22:00</p>
                      </div>
                    </div>
                    {/* Window */}
                    <div className="absolute bottom-0 left-4 right-4 h-20 bg-[#d0e8d4]/40 border border-[#2d7a3a]/20 rounded-t-lg flex items-center justify-center">
                      <div className="flex gap-4 text-3xl opacity-60">🥦 🍅 🥕 🍊</div>
                    </div>
                  </div>
                  {/* Door */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-14 bg-[#1a2e1c] rounded-t-xl border-2 border-[#2d7a3a]" />
                </div>
                <div className="bg-white p-4 flex justify-between">
                  <p className="text-xs text-muted-foreground">Оформление фасада: световая вывеска + декоративные элементы</p>
                  <p className="text-xs font-mono text-muted-foreground">Концепт</p>
                </div>
              </div>
            </div>

            {/* Интерьер */}
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Интерьер и навигация</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Навигационный указатель */}
                <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
                  <p className="text-xs text-muted-foreground mb-4">Навигационный указатель</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Овощи', emoji: '🥦', dir: '→' },
                      { label: 'Фрукты', emoji: '🍊', dir: '→' },
                      { label: 'Зелень', emoji: '🌿', dir: '↓' },
                      { label: 'Касса', emoji: '💳', dir: '←' },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between bg-[#1a2e1c] rounded-xl px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.emoji}</span>
                          <span className="font-unbounded text-sm font-black text-white">{item.label}</span>
                        </div>
                        <span className="font-unbounded text-xl font-black text-[#f57c00]">{item.dir}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ценник */}
                <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
                  <p className="text-xs text-muted-foreground mb-4">Фирменный ценник</p>
                  <div className="space-y-3">
                    <div className="rounded-2xl overflow-hidden border border-[#2d7a3a]/20 shadow-sm inline-block w-full">
                      <div className="bg-[#2d7a3a] px-4 py-2 flex items-center justify-between">
                        <span className="font-golos text-white text-xs font-bold uppercase tracking-wider">Свежо!</span>
                        <span className="text-white/60 text-xs">🌱 эко</span>
                      </div>
                      <div className="bg-white px-4 py-3 flex items-center justify-between">
                        <div>
                          <p className="font-golos font-bold text-foreground">Томаты черри</p>
                          <p className="font-golos text-xs text-muted-foreground">Краснодар · 500г</p>
                        </div>
                        <div className="text-right">
                          <p className="font-golos font-black text-2xl text-[#2d7a3a]">189 ₽</p>
                          <p className="font-golos text-[10px] text-muted-foreground">за 500г</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#f57c00]/30 shadow-sm inline-block w-full">
                      <div className="bg-[#f57c00] px-4 py-2 flex items-center justify-between">
                        <span className="font-golos text-white text-xs font-bold">ХИТ НЕДЕЛИ</span>
                        <span className="text-white/80 text-xs">−15%</span>
                      </div>
                      <div className="bg-white px-4 py-3 flex items-center justify-between">
                        <div>
                          <p className="font-golos font-bold text-foreground">Брокколи</p>
                          <p className="font-golos text-xs text-muted-foreground">Италия · ~600г</p>
                        </div>
                        <div className="text-right">
                          <p className="font-golos font-black text-2xl text-[#f57c00]">109 ₽</p>
                          <p className="font-golos text-[10px] line-through text-muted-foreground">129 ₽</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticker / наклейка */}
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Фирменные наклейки на упаковку</p>
              <div className="flex flex-wrap gap-4 items-end">
                {[
                  { bg: 'bg-gradient-to-br from-[#2d7a3a] to-[#4caf50]', size: 'w-28 h-28', shape: 'rounded-full', content: <div className="text-center"><div className="text-3xl">🥦</div><div className="font-unbounded text-xs font-black text-white mt-1">Свежо<span className="text-[#fbc02d]">!</span></div></div> },
                  { bg: 'bg-[#f57c00]', size: 'w-20 h-20', shape: 'rounded-full', content: <div className="text-center"><div className="font-unbounded text-[10px] font-black text-white leading-tight">ЭКО<br/>УПАК.</div></div> },
                  { bg: 'bg-[#1a2e1c]', size: 'w-24 h-12', shape: 'rounded-full', content: <div className="font-golos text-xs font-bold text-white text-center tracking-wider">svezho.ru</div> },
                  { bg: 'bg-[#fbc02d]', size: 'w-16 h-16', shape: 'rounded-2xl', content: <div className="text-center"><div className="font-unbounded text-xs font-black text-[#1a2e1c]">ХИТ!</div></div> },
                ].map((s, i) => (
                  <div key={i} className={`${s.size} ${s.shape} ${s.bg} flex items-center justify-center shadow-lg`}>
                    {s.content}
                  </div>
                ))}
                <p className="text-xs text-muted-foreground self-center ml-2">Круглые и овальные наклейки на пакеты и стрейч-плёнку</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 19 УПАКОВКА И ПРОДУКЦИЯ ── */}
        <section className="mb-14">
          <SectionTitle number="19" title="Упаковка и продукция" />

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Фирменная лента */}
            <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Фирменная лента</p>
              <div className="space-y-2">
                <div className="h-10 rounded-xl flex items-center px-4 overflow-hidden" style={{ background: 'repeating-linear-gradient(90deg, #2d7a3a 0px, #2d7a3a 80px, #4caf50 80px, #4caf50 160px)' }}>
                  <div className="flex gap-16 whitespace-nowrap">
                    {[0,1,2,3].map(i => <span key={i} className="font-unbounded text-xs font-black text-white">Свежо! 🥦</span>)}
                  </div>
                </div>
                <div className="h-8 rounded-xl flex items-center px-4 overflow-hidden" style={{ background: 'repeating-linear-gradient(90deg, #f57c00 0px, #f57c00 100px, #fbc02d 100px, #fbc02d 200px)' }}>
                  <div className="flex gap-16 whitespace-nowrap">
                    {[0,1,2,3].map(i => <span key={i} className="font-golos text-xs font-bold text-white">svezho.ru ·</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Стаканчик */}
            <div className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Фирменный стакан / бутылка</p>
              <div className="flex items-end gap-6 justify-center">
                {[
                  { h: 'h-32', w: 'w-16', label: '0.3л' },
                  { h: 'h-40', w: 'w-16', label: '0.5л' },
                ].map(cup => (
                  <div key={cup.label} className="flex flex-col items-center gap-2">
                    <div className={`${cup.w} ${cup.h} rounded-b-2xl rounded-t-xl overflow-hidden relative shadow-lg border border-border`} style={{ background: 'linear-gradient(160deg, #1a2e1c 0%, #2d7a3a 50%, #4caf50 100%)' }}>
                      <div className="absolute inset-0 opacity-10">
                        {[0,1,2,3,4,5,6,7].map(i => (
                          <div key={i} className="text-lg select-none" style={{ position: 'absolute', top: `${(i * 14) % 90}%`, left: `${(i * 23) % 80}%` }}>🥦</div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-2xl">🥦</div>
                        <div className="font-unbounded text-xs font-black text-white mt-1">Свежо<span className="text-[#f57c00]">!</span></div>
                      </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground">{cup.label}</p>
                  </div>
                ))}
                <div className="text-xs text-muted-foreground max-w-[140px] self-center">
                  <p>· Бумажный стакан для смузи</p>
                  <p className="mt-1">· Фирменный паттерн на внешней стороне</p>
                  <p className="mt-1">· Логотип в центре</p>
                </div>
              </div>
            </div>
          </div>

          {/* Продуктовые наклейки */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-5">Наклейки на продукты (PLU-лейблы)</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Томаты черри', origin: 'Краснодар', weight: '500г', price: '189 ₽', bg: '#2d7a3a', accent: '#f57c00' },
                { name: 'Брокколи', origin: 'Италия', weight: '~600г', price: '129 ₽', bg: '#1a2e1c', accent: '#4caf50' },
                { name: 'Манго Кент', origin: 'Пакистан', weight: '~350г', price: '249 ₽', bg: '#f57c00', accent: '#fbc02d' },
              ].map(label => (
                <div key={label.name} className="rounded-2xl overflow-hidden shadow-md w-40">
                  <div className="px-3 py-2 flex items-center justify-between" style={{ background: label.bg }}>
                    <span className="font-unbounded text-[10px] font-black text-white">Свежо<span style={{ color: label.accent }}>!</span></span>
                    <span className="text-white/50 text-[9px]">🌱</span>
                  </div>
                  <div className="bg-white px-3 py-2.5">
                    <p className="font-golos font-bold text-xs text-foreground">{label.name}</p>
                    <p className="font-golos text-[10px] text-muted-foreground">{label.origin} · {label.weight}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="font-golos font-black text-sm" style={{ color: label.bg }}>{label.price}</p>
                      <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                        <div className="space-y-0.5">
                          {[0,1,2].map(i => <div key={i} className="h-px bg-foreground/20 w-8" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 20 ЦИФРОВЫЕ НОСИТЕЛИ ── */}
        <section className="mb-14">
          <SectionTitle number="20" title="Цифровые носители" />

          <div className="space-y-6">
            {/* Email */}
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Email-рассылка</p>
              <div className="max-w-md rounded-3xl overflow-hidden border border-border shadow-lg">
                <div className="bg-[#1a2e1c] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-lg flex items-center justify-center text-sm">🥦</div>
                    <span className="font-unbounded text-sm font-black text-white">Свежо<span className="text-[#f57c00]">!</span></span>
                  </div>
                  <span className="font-golos text-white/30 text-[11px]">Отписаться</span>
                </div>
                <div className="bg-[#faf8f2] px-6 py-6">
                  <p className="font-unbounded text-xl font-black text-[#1a2e1c] mb-2">Хиты этой недели 🍓</p>
                  <p className="font-golos text-sm text-muted-foreground mb-4">Отобрали 5 лучших позиций — только свежее и вкусное</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['🍓', '🥑', '🥦'].map(e => (
                      <div key={e} className="bg-white rounded-2xl p-3 text-center border border-border/60">
                        <div className="text-2xl">{e}</div>
                        <div className="font-golos text-[10px] font-semibold text-[#2d7a3a] mt-1">149 ₽</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#2d7a3a] text-white font-golos font-bold text-sm px-5 py-3 rounded-2xl text-center">
                    Перейти в каталог →
                  </div>
                </div>
                <div className="bg-[#1a2e1c] px-6 py-3 text-center">
                  <p className="font-golos text-white/30 text-[10px]">svezho.ru · Москва · Отписаться</p>
                </div>
              </div>
            </div>

            {/* Push + App */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Push */}
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Push-уведомление</p>
                <div className="bg-white rounded-3xl border border-border/60 p-5 shadow-sm">
                  <div className="flex items-start gap-3 p-4 bg-muted/40 rounded-2xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-xl shrink-0">🥦</div>
                    <div>
                      <p className="font-golos font-bold text-sm text-foreground">Свежо!</p>
                      <p className="font-golos text-xs text-muted-foreground mt-0.5">🎉 Ваш заказ готов! Курьер выехал, ожидайте через 20 минут</p>
                      <p className="font-golos text-[10px] text-muted-foreground mt-1">сейчас</p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="bg-muted/40 rounded-2xl p-3 flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-xl flex items-center justify-center text-base shrink-0">🥦</div>
                      <div>
                        <p className="font-golos font-bold text-xs text-foreground">Скидка дня 🍊</p>
                        <p className="font-golos text-[10px] text-muted-foreground">Апельсины −20%</p>
                      </div>
                    </div>
                    <div className="bg-muted/40 rounded-2xl p-3 flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#f57c00] rounded-xl flex items-center justify-center text-base shrink-0">🚚</div>
                      <div>
                        <p className="font-golos font-bold text-xs text-foreground">Доставка</p>
                        <p className="font-golos text-[10px] text-muted-foreground">Курьер едет</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR + Реклама */}
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">QR-код и реклама в поиске</p>
                <div className="bg-white rounded-3xl border border-border/60 p-5 shadow-sm space-y-4">
                  {/* QR */}
                  <div className="flex items-center gap-4 p-4 bg-[#faf8f2] rounded-2xl border border-border/60">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-border flex items-center justify-center shrink-0">
                      <div className="grid grid-cols-5 gap-0.5 p-1">
                        {[1,1,1,1,1, 1,0,0,0,1, 1,0,1,0,1, 1,0,0,0,1, 1,1,1,1,1].map((b, i) => (
                          <div key={i} className={`w-2 h-2 ${b ? 'bg-[#1a2e1c]' : 'bg-white'}`} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-golos font-bold text-sm text-foreground">svezho.ru</p>
                      <p className="font-golos text-xs text-muted-foreground">Сканируй для заказа</p>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-3 h-3 bg-gradient-to-br from-[#2d7a3a] to-[#4caf50] rounded-sm" />
                        <span className="font-unbounded text-[10px] font-black text-[#2d7a3a]">Свежо<span className="text-[#f57c00]">!</span></span>
                      </div>
                    </div>
                  </div>
                  {/* Search ad */}
                  <div className="p-4 bg-muted/40 rounded-2xl">
                    <p className="text-[10px] font-mono text-muted-foreground mb-2">Реклама в Яндексе</p>
                    <p className="text-xs font-bold text-blue-600 underline">Свежо! — доставка овощей и фруктов</p>
                    <p className="text-[11px] text-green-700 font-mono">svezho.ru</p>
                    <p className="text-xs text-muted-foreground">Свежие овощи от 89 ₽/кг. Доставка за 90 мин. Эко-упаковка.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 21 РУКОВОДСТВО ПО ИСПОЛЬЗОВАНИЮ ── */}
        <section className="mb-14">
          <SectionTitle number="21" title="Руководство по использованию" />

          <div className="bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-3xl p-8 mb-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)', backgroundSize: '50px 50px' }} />
            <div className="relative z-10">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3 font-mono">Кто может использовать материалы</p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { role: 'Сотрудники', icon: '👥', can: ['Соцсети компании', 'Подписи в email', 'Презентации'], cant: ['Менять цвета', 'Создавать новые шрифты'] },
                  { role: 'Партнёры', icon: '🤝', can: ['Совместные посты', 'Кобрендинг-материалы'], cant: ['Менять логотип', 'Использовать без согласования'] },
                  { role: 'Поставщики', icon: '🚛', can: ['Упоминать в портфолио'], cant: ['Использовать логотип без договора', 'Подражать стилю'] },
                ].map(r => (
                  <div key={r.role} className="bg-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{r.icon}</span>
                      <p className="font-bold text-white">{r.role}</p>
                    </div>
                    <p className="text-[11px] text-white/60 mb-1">✅ Может:</p>
                    {r.can.map(c => <p key={c} className="text-xs text-white/80 mb-0.5">· {c}</p>)}
                    <p className="text-[11px] text-white/40 mt-2 mb-1">❌ Не может:</p>
                    {r.cant.map(c => <p key={c} className="text-xs text-white/50 mb-0.5">· {c}</p>)}
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/50 text-xs">По вопросам использования фирменного стиля: <span className="text-white/80">brand@svezho.ru</span></p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '🔄 Обновление брендбука', items: ['Версия 1.0 — базовый брендбук', 'Версия 2.0 — расширенная типографика', 'Версия 3.0 (плановая) — мобильное приложение', 'При обновлении — письмо всем сотрудникам', 'Архивные версии хранятся на drive.svezho.ru'] },
              { title: '📂 Файлы и форматы', items: ['Логотип .SVG — для веба и масштабирования', 'Логотип .EPS — для полиграфии и печати', 'Логотип .PNG (300dpi) — для документов', 'Цвета .ASE/.ACO — библиотека Photoshop/Illustrator', 'Шрифты — Google Fonts (бесплатно, без лицензии)'] },
              { title: '📋 Согласование', items: ['Нестандартные материалы согласуй с маркетингом', 'Срок согласования — 3 рабочих дня', 'Правки дизайнер вносит за 1–2 дня', 'Финальное утверждение — у основателя', 'Документация хранится в Notion-базе бренда'] },
              { title: '📞 Контакты бренда', items: ['Маркетинг: marketing@svezho.ru', 'Дизайн: design@svezho.ru', 'Пресс: pr@svezho.ru', 'Telegram: @svezho_brand', 'Брендбук онлайн: brand.svezho.ru'] },
            ].map(block => (
              <div key={block.title} className="bg-white rounded-3xl border border-border/60 p-6 shadow-sm">
                <h4 className="font-bold text-foreground mb-4">{block.title}</h4>
                <ul className="space-y-2">
                  {block.items.map(i => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-[#2d7a3a] rounded-full mt-1.5 shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="relative bg-gradient-to-br from-[#1a2e1c] to-[#2d7a3a] rounded-3xl p-8 text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
          <div className="relative z-10">
            <div className="font-unbounded text-4xl font-black mb-1">Свежо<span className="text-[#f57c00]">!</span></div>
            <p className="text-white/50 text-sm font-golos">Identity Guidelines · Версия 2.0 · Март 2026</p>
            <div className="mt-4 flex items-center justify-center gap-2 text-white/30 text-xs font-golos">
              <span>🌱</span> Все права защищены · Свежо! Family Business
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-unbounded text-xs font-black text-[#2d7a3a]/30 tracking-widest shrink-0">{number}</span>
      <h2 className="text-2xl font-black text-foreground shrink-0">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
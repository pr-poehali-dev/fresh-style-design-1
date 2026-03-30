import Icon from '@/components/ui/icon';

const VEGGIES_IMAGE = 'https://cdn.poehali.dev/projects/0434d8f9-6743-4a59-811e-aa0ec7e48ce8/files/a80ed4fd-beb7-47ef-ba1f-b0530082f8c4.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-black mb-3">
            О нас
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Семейный магазин свежих овощей и фруктов с 2018 года
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-foreground mb-4">
              Почему <span className="text-gradient">Свежо!</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Мы начинали как небольшой семейный бизнес с тремя поставщиками и корзиной для велосипеда. Сегодня — это команда из 15 человек и более 200 позиций в каталоге.</p>
              <p>Наш принцип простой: ни один продукт не попадёт к клиенту, если мы сами не попробовали его и не остались довольны. Буквально каждое утро.</p>
              <p>Работаем с местными фермерами Подмосковья и Краснодарского края, а экзотику привозим напрямую от проверенных импортёров.</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
            <img src={VEGGIES_IMAGE} alt="Наш магазин" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '🌱', title: 'Натуральность', desc: 'Никаких ГМО и искусственных ускорителей роста' },
            { icon: '🤝', title: 'Честность', desc: 'Реальные фото, точный вес, прозрачные цены' },
            { icon: '🌍', title: 'Экология', desc: 'Эко-упаковка, минимум пластика, электрокурьеры' },
          ].map((val, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-3xl border border-border/60 shadow-sm">
              <span className="text-4xl mb-3 block">{val.icon}</span>
              <h3 className="font-bold text-foreground mb-2">{val.title}</h3>
              <p className="text-sm text-muted-foreground">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="bg-accent rounded-3xl p-8 border border-brand-green/20">
          <h2 className="font-black text-2xl text-foreground mb-6 text-center">Наша команда</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Алексей', role: 'Основатель', emoji: '👨‍🌾' },
              { name: 'Мария', role: 'Контроль качества', emoji: '👩‍🔬' },
              { name: 'Дмитрий', role: 'Логистика', emoji: '👨‍💼' },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-3">
                  {member.emoji}
                </div>
                <p className="font-bold text-foreground">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

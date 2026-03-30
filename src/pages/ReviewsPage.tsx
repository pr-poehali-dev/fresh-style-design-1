import { useState } from 'react';
import Icon from '@/components/ui/icon';

const allReviews = [
  { name: 'Анна К.', text: 'Заказываю каждую неделю! Овощи всегда свежие, доставка быстрая. Очень довольна!', rating: 5, avatar: '👩', date: '28 марта 2026', product: 'Томаты черри' },
  { name: 'Михаил Р.', text: 'Отличный выбор фруктов, особенно манго — просто объедение. Буду заказывать ещё.', rating: 5, avatar: '👨', date: '25 марта 2026', product: 'Манго Кент' },
  { name: 'Светлана Д.', text: 'Нашла свежую рукколу в ноябре! Качество на высоте, упаковка аккуратная.', rating: 5, avatar: '👩‍🦱', date: '20 марта 2026', product: 'Руккола' },
  { name: 'Игорь В.', text: 'Быстро, вкусно, честно. Виноград без косточек был особенно хорош!', rating: 5, avatar: '🧔', date: '18 марта 2026', product: 'Виноград Кишмиш' },
  { name: 'Наталья Б.', text: 'Болгарский перец такого качества я не видела даже на рынке. Сочный, яркий, ароматный!', rating: 5, avatar: '👩‍🦳', date: '15 марта 2026', product: 'Болгарский перец' },
  { name: 'Артём С.', text: 'Курьер приехал раньше срока, всё было в отличном состоянии. Рекомендую!', rating: 5, avatar: '🧑', date: '10 марта 2026', product: 'Микс овощей' },
];

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setShowForm(false); setNewReview({ name: '', text: '', rating: 5 }); }, 2000);
  };

  const avgRating = (allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length).toFixed(1);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-black mb-3">
            Отзывы <span className="text-gradient">покупателей</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1 text-yellow-400 text-2xl">{'★'.repeat(5)}</div>
            <span className="text-3xl font-black text-foreground">{avgRating}</span>
            <span className="text-muted-foreground text-sm">из {allReviews.length} отзывов</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {allReviews.map((review, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-border/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm">{'★'.repeat(review.rating)}</div>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-2">"{review.text}"</p>
              <div className="flex items-center gap-1 text-xs text-brand-green">
                <Icon name="Package" size={11} />
                {review.product}
              </div>
            </div>
          ))}
        </div>

        {/* Leave review button */}
        {!showForm ? (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-brand-green to-brand-green-light text-white rounded-2xl font-bold btn-bounce shadow-lg"
            >
              Оставить отзыв ✍️
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-border/60 p-8 shadow-sm animate-scale-in">
            <h3 className="font-black text-xl text-foreground mb-6">Ваш отзыв</h3>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">🎉</div>
                <p className="font-bold text-brand-green text-xl">Спасибо за отзыв!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Ваше имя"
                  value={newReview.name}
                  onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30"
                />
                <textarea
                  required
                  placeholder="Расскажите о вашем заказе..."
                  rows={4}
                  value={newReview.text}
                  onChange={e => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 ring-brand-green/30 resize-none"
                />
                <div className="flex gap-3">
                  <button type="submit" className="flex-1 py-3 bg-brand-green text-white rounded-xl font-bold btn-bounce">
                    Отправить
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 border border-border rounded-xl font-medium hover:bg-muted transition-colors">
                    Отмена
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export interface Product {
  id: number;
  name: string;
  category: 'vegetables' | 'fruits' | 'greens';
  price: number;
  unit: string;
  emoji: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  origin: string;
  weight: string;
}

export const products: Product[] = [
  { id: 1, name: 'Томаты черри', category: 'vegetables', price: 189, unit: '500г', emoji: '🍅', badge: 'Хит', badgeColor: 'bg-red-500', description: 'Сладкие черри из Краснодарского края', origin: 'Россия', weight: '500г' },
  { id: 2, name: 'Огурцы свежие', category: 'vegetables', price: 89, unit: 'кг', emoji: '🥒', badge: 'Свежие', badgeColor: 'bg-green-600', description: 'Хрустящие парниковые огурцы', origin: 'Россия', weight: 'кг' },
  { id: 3, name: 'Болгарский перец', category: 'vegetables', price: 149, unit: 'кг', emoji: '🌶️', description: 'Сочный разноцветный перец', origin: 'Испания', weight: 'кг' },
  { id: 4, name: 'Брокколи', category: 'vegetables', price: 129, unit: 'шт', emoji: '🥦', badge: 'Эко', badgeColor: 'bg-emerald-600', description: 'Свежая органическая брокколи', origin: 'Италия', weight: '~600г' },
  { id: 5, name: 'Морковь', category: 'vegetables', price: 59, unit: 'кг', emoji: '🥕', description: 'Сладкая фермерская морковь', origin: 'Россия', weight: 'кг' },
  { id: 6, name: 'Баклажан', category: 'vegetables', price: 119, unit: 'кг', emoji: '🍆', description: 'Нежный молодой баклажан', origin: 'Узбекистан', weight: 'кг' },
  { id: 7, name: 'Картофель', category: 'vegetables', price: 49, unit: 'кг', emoji: '🥔', badge: '1+1', badgeColor: 'bg-amber-500', description: 'Рассыпчатый фермерский картофель', origin: 'Россия', weight: 'кг' },
  { id: 8, name: 'Тыква хоккайдо', category: 'vegetables', price: 99, unit: 'кг', emoji: '🎃', description: 'Маленькая сладкая тыква', origin: 'Россия', weight: 'кг' },

  { id: 9, name: 'Яблоки Фуджи', category: 'fruits', price: 129, unit: 'кг', emoji: '🍎', badge: 'Хит', badgeColor: 'bg-red-500', description: 'Сочные хрустящие яблоки', origin: 'Китай', weight: 'кг' },
  { id: 10, name: 'Бананы', category: 'fruits', price: 89, unit: 'кг', emoji: '🍌', description: 'Спелые бананы из Эквадора', origin: 'Эквадор', weight: 'кг' },
  { id: 11, name: 'Манго Кент', category: 'fruits', price: 249, unit: 'шт', emoji: '🥭', badge: 'Экзот', badgeColor: 'bg-orange-500', description: 'Сочное спелое манго', origin: 'Пакистан', weight: '~350г' },
  { id: 12, name: 'Клубника', category: 'fruits', price: 349, unit: '500г', emoji: '🍓', badge: 'Сезон', badgeColor: 'bg-pink-500', description: 'Ароматная садовая клубника', origin: 'Россия', weight: '500г' },
  { id: 13, name: 'Виноград Кишмиш', category: 'fruits', price: 199, unit: 'кг', emoji: '🍇', description: 'Сладкий виноград без косточек', origin: 'Узбекистан', weight: 'кг' },
  { id: 14, name: 'Авокадо', category: 'fruits', price: 149, unit: 'шт', emoji: '🥑', badge: 'Спелое', badgeColor: 'bg-green-600', description: 'Готовое к употреблению авокадо', origin: 'Мексика', weight: '~200г' },
  { id: 15, name: 'Апельсины', category: 'fruits', price: 109, unit: 'кг', emoji: '🍊', description: 'Сочные испанские апельсины', origin: 'Испания', weight: 'кг' },
  { id: 16, name: 'Лимоны', category: 'fruits', price: 89, unit: 'кг', emoji: '🍋', description: 'Ароматные лимоны с тонкой кожей', origin: 'Турция', weight: 'кг' },

  { id: 17, name: 'Базилик', category: 'greens', price: 69, unit: 'пучок', emoji: '🌿', badge: 'Свежий', badgeColor: 'bg-green-600', description: 'Душистый зелёный базилик', origin: 'Россия', weight: '50г' },
  { id: 18, name: 'Петрушка', category: 'greens', price: 49, unit: 'пучок', emoji: '🌾', description: 'Свежая кудрявая петрушка', origin: 'Россия', weight: '100г' },
  { id: 19, name: 'Руккола', category: 'greens', price: 89, unit: 'пучок', emoji: '🥗', badge: 'Эко', badgeColor: 'bg-emerald-600', description: 'Пикантная молодая руккола', origin: 'Италия', weight: '100г' },
  { id: 20, name: 'Шпинат', category: 'greens', price: 79, unit: 'пучок', emoji: '🌱', description: 'Нежный молодой шпинат', origin: 'Россия', weight: '200г' },
];

export const categories = [
  { id: 'all', label: 'Всё', emoji: '🛒' },
  { id: 'vegetables', label: 'Овощи', emoji: '🥦' },
  { id: 'fruits', label: 'Фрукты', emoji: '🍊' },
  { id: 'greens', label: 'Зелень', emoji: '🌿' },
];
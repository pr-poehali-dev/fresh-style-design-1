import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Product } from '@/data/products';
import { cartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    cartStore.addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className={`card-hover bg-white rounded-3xl overflow-hidden border border-border/60 shadow-sm animate-fade-up`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Image / Emoji area */}
      <div className="relative h-40 bg-gradient-to-br from-accent to-muted flex items-center justify-center overflow-hidden">
        <span className="text-7xl select-none transition-transform duration-300 hover:scale-110">
          {product.emoji}
        </span>

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow`}>
            {product.badge}
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <Icon
            name={liked ? 'Heart' : 'Heart'}
            size={14}
            className={liked ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}
          />
        </button>

        {/* Origin */}
        <div className="absolute bottom-2 right-3 text-xs text-muted-foreground bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
          {product.origin}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-foreground mb-0.5 truncate">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{product.description}</p>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xl font-bold text-brand-green">{product.price} ₽</span>
            <span className="text-xs text-muted-foreground ml-1">/ {product.unit}</span>
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
              added
                ? 'bg-brand-green text-white scale-95'
                : 'bg-brand-green text-white btn-bounce hover:bg-brand-green-light'
            }`}
          >
            {added ? (
              <>
                <Icon name="Check" size={14} />
                Добавлено
              </>
            ) : (
              <>
                <Icon name="Plus" size={14} />
                В корзину
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

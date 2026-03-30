import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { cartStore, CartItem } from '@/store/cartStore';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const unsub = cartStore.subscribe(() => setItems([...cartStore.getItems()]));
    setItems([...cartStore.getItems()]);
    return unsub;
  }, []);

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const handleOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      cartStore.clear();
      setOrderPlaced(false);
      onClose();
    }, 2500);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-350 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <Icon name="ShoppingCart" size={20} className="text-brand-green" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">Корзина</h2>
              <p className="text-xs text-muted-foreground">
                {items.length === 0 ? 'Пусто' : `${items.reduce((s, i) => s + i.quantity, 0)} товара`}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="text-6xl animate-float">🛒</div>
              <div>
                <p className="font-semibold text-foreground">Корзина пуста</p>
                <p className="text-sm text-muted-foreground mt-1">Добавьте свежие продукты из каталога</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.product.id} className="flex items-center gap-3 p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="text-3xl w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    {item.product.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">{item.product.price} ₽ / {item.product.unit}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => cartStore.updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-colors"
                    >
                      <Icon name="Minus" size={12} />
                    </button>
                    <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => cartStore.updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-light transition-colors"
                    >
                      <Icon name="Plus" size={12} />
                    </button>
                  </div>
                  <div className="text-right shrink-0 w-16">
                    <p className="font-bold text-sm text-brand-green">{item.product.price * item.quantity} ₽</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-white">
            <div className="flex items-center justify-between mb-1">
              <span className="text-muted-foreground text-sm">Сумма заказа</span>
              <span className="font-bold text-lg text-foreground">{total} ₽</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm">Доставка</span>
              <span className="text-brand-green font-semibold text-sm">
                {total >= 1500 ? 'Бесплатно 🎉' : `${299} ₽`}
              </span>
            </div>
            {total < 1500 && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700">
                До бесплатной доставки осталось <strong>{1500 - total} ₽</strong>
              </div>
            )}

            {orderPlaced ? (
              <div className="w-full py-4 bg-brand-green text-white rounded-2xl font-semibold text-center flex items-center justify-center gap-2 animate-scale-in">
                <span className="text-xl">✅</span> Заказ оформлен!
              </div>
            ) : (
              <button
                onClick={handleOrder}
                className="w-full py-4 bg-gradient-to-r from-brand-green to-brand-green-light text-white rounded-2xl font-bold text-base btn-bounce shadow-lg hover:shadow-xl"
              >
                Оформить заказ · {total + (total >= 1500 ? 0 : 299)} ₽
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

import { useState } from 'react';
import {
  Bell,
  CirclePlus,
  CircleUserRoundIcon,
  HomeIcon,
  NotepadText,
} from 'lucide-react';

import { categories } from '@app/mocks/categories';
import { products } from '@app/mocks/products';

import { cn } from '@app/lib/utils';
import { formatCurrency } from '@app/lib/utils';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectedCategory(categoryId: string): void {
    setSelectedCategory((prevState) =>
      prevState === categoryId ? '' : categoryId,
    );
  }

  return (
    <div className="flex flex-col h-dvh">
      <header className="h-20 flex justify-between items-center px-6">
        <div className="text-stone-800">
          <span className="text-xs opacity-80">Bem-vindo(a) ao</span>
          <h1 className="text-lg font-bold leading-5">
            WAITER
            <span className="font-normal opacity-80">APP</span>
          </h1>
        </div>
        <div className="p-3 rounded-full shadow-lg">
          <Bell size={16} strokeWidth={1.5} />
        </div>
      </header>

      <div className="h-[72px] flex px-2 gap-2 items-center overflow-x-scroll mb-4">
        {categories.map((category) => {
          const isSelectedCategory = category._id === selectedCategory;

          return (
            <button
              key={category._id}
              type="button"
              className={cn(
                'flex flex-col gap-2 items-center min-w-[74px]',
                !!selectedCategory && !isSelectedCategory && 'opacity-40',
              )}
              onClick={() => handleSelectedCategory(category._id)}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm">{category.icon}</span>
              </div>
              <span className="font-medium text-xs text-stone-800">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-y-scroll pb-4">
        {products.map((product) => (
          <div key={product._id} className="h-24 px-4 flex gap-4">
            <div className="overflow-hidden rounded-md min-w-32 h-full">
              <img
                src={product.imagePath}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between text-stone-800">
              <strong className="text-sm font-medium">{product.name}</strong>
              <p className="line-clamp-3 leading-tight opacity-80 text-xs">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">
                  {formatCurrency(product.price)}
                </span>
                <CirclePlus
                  size={22}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-20 flex justify-between px-6">
        <div className="flex flex-col gap-1 justify-center items-center">
          <HomeIcon size={20} strokeWidth={1.5} />
          <span className="text-xs">Home</span>
          <div className="w-6 h-[1px] bg-primary"></div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <NotepadText size={20} strokeWidth={1.5} />
          <span className="text-xs">Pedidos</span>
          <div className="w-6 h-[1px] bg-primary"></div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <CircleUserRoundIcon size={20} strokeWidth={1.5} />
          <span className="text-xs">Meu perfil</span>
          <div className="w-6 h-[1px] bg-primary"></div>
        </div>
      </div>
    </div>
  );
}

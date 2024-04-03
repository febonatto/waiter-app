import { useState } from 'react';
import { CirclePlus } from 'lucide-react';

import { Product } from '@app/entities/Product';

import { categories } from '@app/mocks/categories';
import { products } from '@app/mocks/products';

import { cn } from '@app/lib/utils';
import { formatCurrency } from '@app/lib/utils';

import { Menu } from '@views/components/Menu';

import { TableModal } from './components/TableModal';
import { Header } from './components/Header';

export function Home() {
  const [isTableModalOpen, setIsTableModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  function handleOpenTableModal(): void {
    setIsTableModalOpen(true);
  }

  function handleSelectedCategory(categoryId: string): void {
    setSelectedCategory((prevState) =>
      prevState === categoryId ? '' : categoryId,
    );
  }

  function handleStartOrder(table: number): void {
    setSelectedTable(table);
    setIsTableModalOpen(false);
  }

  function handleCancelOrder(): void {
    setSelectedTable(null);
  }

  function handleAddToCart(product: Product): void {
    if (!selectedTable) {
      handleOpenTableModal();
    }

    console.log(product);
  }

  return (
    <div className="flex flex-col h-dvh">
      <TableModal
        isTableModalOpen={isTableModalOpen}
        handleStartOrder={handleStartOrder}
        handleCloseTableModal={() => setIsTableModalOpen(false)}
      />

      <Header
        selectedTable={selectedTable}
        handleOpenTableModal={handleOpenTableModal}
        handleCancelOrder={handleCancelOrder}
      />

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
              <strong className="text-sm font-bold">{product.name}</strong>
              <p className="line-clamp-3 leading-tight opacity-40 text-xs">
                {product.description}
              </p>
              <button
                type="button"
                className="flex justify-between items-center"
                onClick={() => handleAddToCart(product)}
              >
                <span className="font-medium text-sm">
                  {formatCurrency(product.price)}
                </span>
                <CirclePlus
                  size={22}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Menu />
    </div>
  );
}

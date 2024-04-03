import { Product } from '@app/entities/Product';
import { formatCurrency } from '@app/lib/utils';
import { Button } from '@views/components/Button';
import { Drawer, DrawerContent } from '@views/components/ui/drawer';

interface IProductModal {
  isProductModalOpen: boolean;
  selectedProduct: Product | null;
  handleCloseProductModal(): void;
}
export function ProductModal({
  isProductModalOpen,
  selectedProduct,
  handleCloseProductModal,
}: IProductModal) {
  if (!selectedProduct) {
    return null;
  }

  return (
    <Drawer open={isProductModalOpen} onClose={handleCloseProductModal}>
      <DrawerContent className="h-[92.5%] flex flex-col">
        <div className="relative">
          <div className="h-40">
            <div className="w-20 h-[6px] bg-black/50 absolute top-2 left-1/2 -translate-x-1/2 rounded-full"></div>
            <img
              src={selectedProduct.imagePath}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-6 flex-1 text-stone-800 overflow-scroll">
          <strong className="mb-1 block text-lg">{selectedProduct.name}</strong>
          <p className="opacity-40 text-sm mb-6">
            {selectedProduct.description}
          </p>
          {selectedProduct.ingredients.length > 0 && (
            <>
              <span className="font-medium opacity-80 mb-2 block">
                Ingredientes
              </span>
              <div className="space-y-2">
                {selectedProduct.ingredients.map((ingredient) => (
                  <div className="flex gap-4 border rounded-sm p-4 items-center">
                    <span>{ingredient.icon}</span>
                    <span className="text-sm opacity-40">
                      {ingredient.name}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="px-6 h-20 flex items-center justify-between">
          <div>
            <span className="block text-xs text-stone-800/40">Preço</span>
            <strong className="font-medium">
              {formatCurrency(selectedProduct.price)}
            </strong>
          </div>
          <Button type="button">Adicionar ao pedido</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

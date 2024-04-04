import { Ban, Bell, Play } from 'lucide-react';

import { Button } from '@views/components/Button';

interface IHeader {
  selectedTable: number | null;
  handleOpenTableModal(): void;
  handleCancelOrder(): void;
}
export function Header({ selectedTable, handleOpenTableModal, handleCancelOrder }: IHeader) {
  return (
    <header className="h-24 px-6">
      {!selectedTable ? (
        <div className="h-full flex justify-between items-center text-stone-600">
          <div>
            <span className="text-xs opacity-60">Bem-vindo(a) ao</span>
            <h1 className="text-xl font-bold leading-tight">
              WAITER
              <span className="font-medium opacity-60">APP</span>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button type="button" className="p-3 rounded-full shadow-lg" onClick={handleOpenTableModal}>
              <Play size={16} strokeWidth={1.5} />
            </Button>
            <Button type="button" typeOf="ghost" className="p-3 rounded-full shadow-lg">
              <Bell size={16} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col justify-center gap-1 text-stone-600">
          <strong className="font-medium text-sm">Pedido em andamento</strong>
          <div className="flex items-center gap-4">
            <span className="border rounded-sm px-2 py-3 text-xs opacity-60 flex-1">Mesa {selectedTable}</span>
            <Button type="button" className="p-3 rounded-full shadow-lg" onClick={handleCancelOrder}>
              <Ban size={16} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

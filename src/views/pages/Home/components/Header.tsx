import { Bell } from 'lucide-react';

interface IHeader {
  selectedTable: number | null;
  handleOpenTableModal(): void;
  handleCancelOrder(): void;
}
export function Header({
  selectedTable,
  handleOpenTableModal,
  handleCancelOrder,
}: IHeader) {
  return (
    <header className="h-24 px-6">
      {!selectedTable ? (
        <div className="h-full flex justify-between items-center">
          <div className="text-stone-800">
            <span className="text-xs opacity-40 mb-1 block">
              Bem-vindo(a) ao
            </span>
            <h1 className="text-lg font-bold">
              WAITER
              <span className="font-normal opacity-40">APP</span>
            </h1>
            <button
              type="button"
              className="text-primary text-sm"
              onClick={handleOpenTableModal}
            >
              Iniciar um pedido
            </button>
          </div>
          <div className="p-3 rounded-full shadow-lg">
            <Bell size={16} strokeWidth={1.5} />
          </div>
        </div>
      ) : (
        <div className="h-full flex justify-center items-center flex-col gap-2">
          <div className="w-full flex justify-between">
            <span className="font-medium text-lg">Pedido</span>
            <button
              type="button"
              className="text-sm text-primary"
              onClick={handleCancelOrder}
            >
              Cancelar pedido
            </button>
          </div>
          <span className="border rounded-sm px-2 py-3 text-xs w-full text-stone-800/60">
            Mesa {selectedTable}
          </span>
        </div>
      )}
    </header>
  );
}

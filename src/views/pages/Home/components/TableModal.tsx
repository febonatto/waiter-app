import { ChangeEvent, useState } from 'react';
import { X } from 'lucide-react';

import { Dialog, DialogContent } from '@views/components/ui/dialog';

interface ITableModal {
  isTableModalOpen: boolean;
  handleStartOrder(table: number): void;
  handleCloseTableModal(): void;
}
export function TableModal({
  isTableModalOpen,
  handleStartOrder,
  handleCloseTableModal,
}: ITableModal) {
  const [table, setTable] = useState<number | null>(null);

  function handleChangeTable(event: ChangeEvent<HTMLInputElement>): void {
    const { value: table } = event.target;
    setTable(parseInt(table));
  }

  function handleSave(): void {
    if (!table) {
      return;
    }

    handleStartOrder(table);
  }

  if (!isTableModalOpen) {
    return null;
  }

  return (
    <Dialog open={isTableModalOpen}>
      <DialogContent>
        <header className="flex justify-between items-center mb-4">
          <span className="text-sm">Informar a mesa</span>
          <button type="button" onClick={handleCloseTableModal}>
            <X size={16} strokeWidth={1.5} />
          </button>
        </header>
        <input
          type="number"
          placeholder="Número da mesa"
          className="border rounded-sm px-2 py-3 text-xs"
          onChange={handleChangeTable}
        />
        <button
          type="button"
          className="bg-primary rounded-md py-2 text-white text-sm"
          onClick={handleSave}
        >
          Salvar
        </button>
      </DialogContent>
    </Dialog>
  );
}

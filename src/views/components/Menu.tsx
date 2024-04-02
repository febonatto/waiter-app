import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircleUserRound, Home, NotepadText } from 'lucide-react';

import { cn } from '@app/lib/utils';

export function Menu() {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const { pathname: path } = location;
    setCurrentPath(path);
  }, [location]);

  return (
    <div className="h-[72px] flex justify-between px-6">
      <button type="button">
        <Link
          to="/"
          className="flex flex-col gap-1 justify-center items-center"
        >
          <Home
            size={20}
            strokeWidth={1.5}
            className={cn(currentPath === '/' && 'text-primary')}
          />
          <span
            className={cn('text-xs', currentPath === '/' && 'text-primary')}
          >
            Home
          </span>
          <div
            className={cn(
              'w-6 h-[1px] bg-transparent',
              currentPath === '/' && ' bg-primary',
            )}
          ></div>
        </Link>
      </button>
      <button type="button">
        <Link
          to="/orders"
          className="flex flex-col gap-1 justify-center items-center"
        >
          <NotepadText
            size={20}
            strokeWidth={1.5}
            className={cn(currentPath === '/orders' && 'text-primary')}
          />
          <span
            className={cn(
              'text-xs',
              currentPath === '/orders' && 'text-primary',
            )}
          >
            Pedidos
          </span>
          <div
            className={cn(
              'w-6 h-[1px] bg-transparent',
              currentPath === '/orders' && ' bg-primary',
            )}
          ></div>
        </Link>
      </button>
      <button
        type="button"
        className="flex flex-col gap-1 justify-center items-center"
      >
        <Link
          to="/me"
          className="flex flex-col gap-1 justify-center items-center"
        >
          <CircleUserRound
            size={20}
            strokeWidth={1.5}
            className={cn(currentPath === '/me' && 'text-primary')}
          />
          <span
            className={cn('text-xs', currentPath === '/me' && 'text-primary')}
          >
            Meu perfil
          </span>
          <div
            className={cn(
              'w-6 h-[1px] bg-transparent',
              currentPath === '/me' && ' bg-primary',
            )}
          ></div>
        </Link>
      </button>
    </div>
  );
}

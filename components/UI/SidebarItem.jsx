// SidebarItem.js
import { classNames } from '../utils/helpers';

export default function SidebarItem({ item }) {
  return (
    <li>
      <a
        href={item.href}
        className={classNames(
          item.current
            ? 'bg-red-50 text-indigo-600'
            : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
        )}
      >
        {item.icon && (
          <item.icon
            aria-hidden="true"
            className={classNames(
              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
              'size-6 shrink-0'
            )}
          />
        )}
        {item.name}
      </a>
    </li>
  );
}

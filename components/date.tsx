import { parseISO, format } from 'date-fns';

export default function Date({ children }) {
  const parsedDate = parseISO(children);
  return <time dateTime={children}>{format(parsedDate, 'LLLL d, yyyy')}</time>;
}

import { isToday, formatDistanceToNow } from 'date-fns';

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'NGN' }).format(
    value
  );

export function capitalizeFirstLetter(str) {
  const stringArray = str.split(' ');

  if (stringArray.length >= 2) {
    const newArray = stringArray.map(
      (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    );
    return newArray.join(' ');
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatDateDistance(date) {
  const dateObj = new Date(Date.parse(date));

  if (isToday(dateObj)) {
    return 'Today';
  } else {
    return formatDistanceToNow(dateObj, { addSuffix: true }).replace(
      'about',
      ''
    );
  }
}

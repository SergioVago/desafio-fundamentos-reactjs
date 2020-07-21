import { format, zonedTimeToUtc } from 'date-fns-tz';

const formatDate = (date: Date): string => {
  const znDate = zonedTimeToUtc(date, 'America/Sao_Paulo');

  return format(znDate, 'dd/MM/yyyy', {
    timeZone: 'America/Sao_Paulo',
  });
};

export default formatDate;

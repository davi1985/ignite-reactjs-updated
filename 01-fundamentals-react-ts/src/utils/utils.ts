import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const publishedDateFormatted = (date) =>
  format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

export const publishedDateRelativeToNow = (date) =>
  formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

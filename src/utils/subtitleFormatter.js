import { formatDate } from "./dateUtils";

const subtitleFormatter = (from, to, entity) => {
  const formatFrom = formatDate(from);
  const formatTo = formatDate(to);
  return `${entity} de entre el ${formatFrom} al ${formatTo}`;
};

export default subtitleFormatter;

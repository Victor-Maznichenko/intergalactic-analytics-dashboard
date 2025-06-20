interface FormatCurrencyOptions {
  isCurrencyBefore?: boolean;
  useGrouping?: boolean;
}

export const formatCurrency = (price: number, options: FormatCurrencyOptions = {}) => {
  const { isCurrencyBefore = false, useGrouping = true } = options;
  const formattedPrice = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 })
    .format(price)
    .replace(/\u00A0/g, ' ');
  const raw = useGrouping ? formattedPrice : price.toString();

  return isCurrencyBefore ? `₽ ${raw}` : `${raw} ₽`;
};

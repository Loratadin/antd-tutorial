import * as currencyFormatter from "currency-formatter";

const currencyFormat = { code: "USD", decimalDigits: 0, precision: 0 };
export function formatCurrency(amount) {
    const rounded = !isNaN(parseInt(amount, 10)) ? Math.ceil(amount) : amount;
    return currencyFormatter.format(rounded, currencyFormat);
}

export const sufficientArray  = array => {
    return Array.isArray(array) && array.length > 0;
  };
export const getProfit = (buyPrice = 0, sellPrice = 0) => {
	const profit = sellPrice * 0.9 - buyPrice;
	return profit;
};

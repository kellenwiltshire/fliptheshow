export const getProfit = (buyPrice = 0, sellPrice = 0) => {
	const profit = sellPrice * 0.9 - buyPrice;
	return profit;
};

export const removeZeroItems = (items) => {
	let zeroItems = [];
	items.map((item) => {
		if (item.best_buy_price > 0) {
			zeroItems.push(item);
		}
	});
	return zeroItems;
};

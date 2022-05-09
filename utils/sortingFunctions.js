//TODO rework filtering functions to minimize - Like in Puzzle

export const sortByName = (items) => {
	const sortedList = items.sort((a, b) => {
		return a.listing_name.localeCompare(b.listing_name);
	});

	return sortedList;
};

export const sortByOverall = (items) => {
	const sortedList = items.sort((a, b) => {
		return a.item.ovr - b.item.ovr;
	});

	return sortedList;
};

export const sortBySeries = (items) => {
	const sortedList = items.sort((a, b) => {
		return a.item.series.localeCompare(b.item.series);
	});

	return sortedList;
};

export const sortByBestBuy = (items) => {
	const sortedList = items.sort((a, b) => {
		return a.best_buy_price - b.best_buy_price;
	});

	return sortedList;
};

export const sortByBestSell = (items) => {
	const sortedList = items.sort((a, b) => {
		return a.best_sell_price - b.best_sell_price;
	});
	return sortedList;
};

export const sortByProfit = (items) => {
	const sortedList = items.sort((a, b) => {
		return a.profit - b.profit;
	});
	return sortedList;
};

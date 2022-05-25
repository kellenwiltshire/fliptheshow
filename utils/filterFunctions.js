export const filterByPrice = (items, minBuyPrice, minSellPrice, maxBuyPrice, maxSellPrice) => {
	return items.filter((item) => {
		return (
			item.best_buy_price >= minBuyPrice &&
			item.best_buy_price <= maxBuyPrice &&
			item.best_sell_price >= minSellPrice &&
			item.best_sell_price <= maxSellPrice
		);
	});
};

export const filterItems = (items, type, selected = '') => {
	if (type === selected || selected === '') {
		return items;
	}
	return items.filter((item) => item.item[type].toLowerCase() === selected);
};

export const filterByText = (items, text) => {
	if (!text || text === '') {
		return items;
	}

	return items.filter((item) => item.listing_name.toLowerCase().includes(text.toLowerCase()));
};

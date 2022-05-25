export const filterByPrice = (items, minBuyPrice, minSellPrice, maxBuyPrice, maxSellPrice) => {
	const filteredItems = items.filter((item) => {
		return (
			item.best_buy_price >= minBuyPrice &&
			item.best_buy_price <= maxBuyPrice &&
			item.best_sell_price >= minSellPrice &&
			item.best_sell_price <= maxSellPrice
		);
	});

	return filteredItems;
};

export const filterItems = (items, type, selected = '') => {
	if (type === selected || selected === '') {
		return items;
	}
	return items.filter((item) => item.item[type].toLowerCase() === selected);
};

export const filterByText = (items, text) => {
	if (text) {
		const filteredItems = items.filter((item) => {
			const name = item.listing_name.toLowerCase();
			return name.includes(text.toLowerCase());
		});
		return filteredItems;
	} else {
		return items;
	}
};

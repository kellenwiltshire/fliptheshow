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

export const filterItems = (items, type, selected) => {
	if (selected === undefined || type === selected.toLowerCase()) {
		return items;
	}
	const filteredItems = items.filter((item) => {
		console.log('item: ', item.item[type]);
		return item.item[type.toLowerCase()] === selected.toLowerCase();
	});

	return filteredItems;
};

export const filterByRarity = (items, rarity) => {
	const filteredItems = items.filter((item) => {
		if (rarity === '' || rarity === 'Rarity') {
			return item;
		} else {
			return item.item.rarity === rarity;
		}
	});

	return filteredItems;
};

export const filterByTeam = (items, team) => {
	const filteredItems = items.filter((item) => {
		if (team === '' || team === 'Team') {
			return item;
		} else {
			return item.item.team === team;
		}
	});

	return filteredItems;
};

export const filterBySeries = (items, series) => {
	const filteredItems = items.filter((item) => {
		if (series === '' || series === 'Series') {
			return item;
		} else {
			return item.item.series === series;
		}
	});

	return filteredItems;
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

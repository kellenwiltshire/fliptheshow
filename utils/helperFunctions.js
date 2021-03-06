import { filterByPrice, filterByRarity, filterByTeam, filterByText, filterItems } from './filterFunctions';

export const getProfit = (buyPrice = 0, sellPrice = 0) => {
	const profit = sellPrice * 0.9 - buyPrice;
	return profit;
};

export const removeZeroItems = (items) => {
	return items.filter((item) => item.best_buy_price > 0);
};

export const refilterItems = (
	items,
	minBuyPrice,
	minSellPrice,
	maxBuyPrice,
	maxSellPrice,
	rarity,
	team,
	textFilter,
	series = '',
) => {
	let filteredList = filterByPrice(items, minBuyPrice, minSellPrice, maxBuyPrice, maxSellPrice);
	filteredList = filterItems(filteredList, 'rarity', rarity.toLowerCase());
	filteredList = filterItems(filteredList, 'team', team.toLowerCase());
	filteredList = filterItems(filteredList, 'series', series.toLowerCase());

	filteredList = filterByText(filteredList, textFilter);

	return filteredList;
};

export const getProfitPerMin = async (item) => {
	const uuid = item.item.uuid;

	const request = await fetch(`https://mlb22.theshow.com/apis/listing.json?uuid=${uuid}`);
	const response = await request.json();

	const completedOrders = response.completed_orders;

	const oldestOrder = completedOrders[completedOrders.length - 1];
	if (oldestOrder) {
		const currDate = new Date();
		const orderDate = new Date(oldestOrder.date);

		const timeSinceOldestOrder = (currDate.getTime() - orderDate.getTime()) / 60000; //Get Time in Minutes

		const salesPerMin = timeSinceOldestOrder / completedOrders.length;

		const profitPerMin = parseFloat((salesPerMin * item.profit).toFixed(2));

		return profitPerMin;
	}

	return 0;
};

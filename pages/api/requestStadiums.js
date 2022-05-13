import Cors from 'cors';
import { getProfit, getProfitPerMin, removeZeroItems } from '../../utils/helperFunctions';

const cors = Cors({
	methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

const recursiveGetData = async (page = 1) => {
	const res = await fetch(`https://mlb22.theshow.com/apis/listings.json?type=stadium&page=${page}`);
	const data = await res.json();
	const listings = data.listings;
	if (data.total_pages > page) {
		return listings.concat(await recursiveGetData(page + 1));
	} else {
		return listings;
	}
};

const getItems = async (req, res) => {
	console.log('SWR Called');

	let data = await recursiveGetData();

	if (data.length) {
		for (let i = 0; i < data.length; i++) {
			data[i].profit = Math.floor(getProfit(data[i].best_buy_price, data[i].best_sell_price));
			data[i].profit_per_min = await getProfitPerMin(data[i]);
		}
	}

	data = removeZeroItems(data);

	res.status(200).json(data);
};

export default getItems;

import Cors from 'cors';

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
	const res = await fetch(
		`https://mlb22.theshow.com/apis/listings.json?page=${page}`,
	);
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

	const data = await recursiveGetData();

	res.status(200).json(data);
};

export default getItems;

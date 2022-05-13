export const sortByString = (items, id) => {
	if (id === 'rarity' || id === 'series' || id === 'team') {
		const sortedList = items.sort((a, b) => {
			return a.item[id].localeCompare(b.item[id]);
		});

		return sortedList;
	}
	const sortedList = items.sort((a, b) => {
		return a[id].localeCompare(b[id]);
	});

	return sortedList;
};

export const sortByNumber = (items, id) => {
	const sortedList = items.sort((a, b) => {
		return a[id] - b[id];
	});

	return sortedList;
};

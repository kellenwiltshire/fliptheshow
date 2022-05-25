export const sortByString = (items, id) => {
	if (id === 'rarity' || id === 'series' || id === 'team') {
		return items.sort((a, b) => a.item[id].localeCompare(b.item[id]));
	}
	return items.sort((a, b) => a[id].localeCompare(b[id]));
};

export const sortByNumber = (items, id) => {
	return items.sort((a, b) => a[id] - b[id]);
};

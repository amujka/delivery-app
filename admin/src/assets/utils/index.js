export const slugify = (string) => {
	const slug = string.trim().replaceAll(' ', '-').toLowerCase();
	return slug;
};

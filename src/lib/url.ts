// Builds an internal link that works under the GitHub Pages project path
// (for example /Personal_website_Sonam_Eyden/work/toursync/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}/${path.replace(/^\//, '')}`;

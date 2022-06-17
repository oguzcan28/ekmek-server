export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","favicon2.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-d49d82b0.js","js":["start-d49d82b0.js","chunks/index-ead4fb47.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

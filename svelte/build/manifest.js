export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","favicon2.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-f9f145f3.js","js":["start-f9f145f3.js","chunks/index-ead4fb47.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js')
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

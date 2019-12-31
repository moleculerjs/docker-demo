"use strict";

module.exports = {
	name: "calc",

	actions: {
		factor: {
			params: {
				num: { type: "number", optional: true }
			},
			handler(ctx) {
				let num = ctx.params.num != null ? ctx.params.num : 100;
				if (num === 0 || num === 1)
					return 1;

				for (let i = num - 1; i >= 1; i--) {
					num *= i;
				}
				return num;
			}
		},

		pi: {
			params: {
				count: { type: "number", optional: true }
			},
			handler(ctx) {
				let count = ctx.params.count != null ? ctx.params.count : 100000000;			

				let pi = 0;
				let n = 1;
				for (let i = 0; i <= count; i++)
				{
					pi = pi + (4 / n) - (4 / (n + 2));
					n = n + 4;
				}

				return pi;
			}
		}
	}
};
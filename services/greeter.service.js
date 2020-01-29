"use strict";

module.exports = {
	name: "greeter",

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello: {
			rest: "/hello",
			async handler(ctx) {
				ctx.meta.$responseHeaders = {
					"X-NodeID": this.broker.nodeID
				};
				return `Hello Moleculer from node '${this.broker.nodeID}'`;
			}
		},

		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",			
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	}
};
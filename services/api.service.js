"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			],

			autoAliases: true,

			aliases: {
				"GET /hello": "greeter.hello",
				"REST /products": "products",
				"GET /pi": "calc.pi",

				// For K8s healthcheck test
				"GET /stop": function(req, res) {
					req.$service.broker.stop();
					res.writeHead(200);
					res.end("OK");
				},
				"GET /kill": function(req, res) {
					res.writeHead(200);
					res.end("OK");
					process.exit(1);
				}
			},

			mappingPolicy: "all",

			onAfterCall(ctx, route, req, res, data) {
				res.setHeader("X-ApiGateway", this.broker.nodeID);
				return data;
			}
		}],

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};

"use strict";

const DbMixin = require("../mixins/db.mixin");

module.exports = {
	name: "products",

	mixins: [DbMixin("products")],

	/**
	 * Service settings
	 */
	settings: {

	}
};
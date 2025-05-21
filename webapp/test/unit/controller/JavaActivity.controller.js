/*global QUnit*/

sap.ui.define([
	"sapui5javaactivity/controller/JavaActivity.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JavaActivity Controller");

	QUnit.test("I should test the JavaActivity controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

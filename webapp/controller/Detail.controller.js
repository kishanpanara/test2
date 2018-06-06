sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.total.demoHelloWorld.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
			onInit: function() {
				var oModel = new JSONModel({
					TraineeList:[
						{FName: 'Akbar', LName: 'Shaik', EmpId:'12345' },
						{FName: 'Kishan', LName: 'Panara', EmpId:'12346' },
						{FName: 'Rajat', LName: 'Chaurasia', EmpId:'12347' },
						{FName: 'Anant', LName: 'Pai', EmpId:'12348' }
						],
					InputValue:"Anant",
					InputValue1:"Anant1"
						
				});
				//this.getView().setModel(oModel,"ViewModel");
				this.getView().setModel(oModel);
			},
			
			onPressButton: function(){
				var oRadBtn = this.getView().byId("RadioBtnGrp");
				alert(oRadBtn.getSelectedIndex());
			},
			
			onGetInfo: function(){
				alert(1);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
		//	onExit: function() {
		//
		//	}
			onSubmit: function(){
				var oModel = new JSONModel({});
			}
	});

});
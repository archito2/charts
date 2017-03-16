sap.ui.jsview("myappzcharts.view.Chart1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Chart1
	 */
	getControllerName: function() {
		return "myappzcharts.controller.Chart1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Chart1
	 */
	createContent: function(oController) {
				  
		var dept = {
			"Company" :[
				
	{Dept:"Sales",Q1: "1000",Q2: "1200",Q3: "1400",Q4: "1600"},
		{Dept:"Accounts",Q1: "1100",Q2: "1150",Q3: "1300",Q4: "1350"},
		{Dept:"IT",Q1: "900",Q2: "500",Q3: "700",Q4: "1000"}
   
		]		
			
		};
	
		var model = new sap.ui.model.json.JSONModel(dept);
		console.log(model);
		var barchart = new sap.viz.ui5.controls.VizFrame({
			vizType: "column",
			height: "80%",
			width: "80%",
		//	legendVisible:false,

			dataset:[
			
						new sap.viz.ui5.data.FlattenedDataset({
								dimensions:[
									new sap.viz.ui5.data.DimensionDefinition({
										name: "Dept",
										value:"{Dept}"
										}),
									// new sap.viz.ui5.data.DimensionDefinition({
									// 	name: "Line of business2",
									// 	value:"{location}"
									// 	}),
									// new sap.viz.ui5.data.DimensionDefinition({
									// 	name: "Line of business3",
									// 	value:"{lastname}"
									// 	})	
										
								],
								measures:[
									new sap.viz.ui5.data.MeasureDefinition({
										name: "Quarter 1",
										value:"{Q1}"
									}),
									new sap.viz.ui5.data.MeasureDefinition({
										name: "Quarter 2",
										value:"{Q2}"
									}),
										new sap.viz.ui5.data.MeasureDefinition({
										name: "Quarter 3",
										value:"{Q3}"
									}),
									new sap.viz.ui5.data.MeasureDefinition({
										name: "Quarter 4",
										value:"{Q4}"
									}),
								
									],
								data:{
									'path':"/Company"
								}
					})
			
				],
									
								feeds:[
										new sap.viz.ui5.controls.common.feeds.FeedItem({
									//	uid: "categoryAxis",
										uid:"axisLabels",
										type:"Dimension",
								
										values:["Dept"]
									}),
								
									new sap.viz.ui5.controls.common.feeds.FeedItem({
										 uid:"valueAxis",
										//	uid:"primaryValues",
										type:"Measure",
									values:["Quarter 1","Quarter 2","Quarter 3","Quarter 4"]
										// values:sap.viz.ui5.controls.common.feeds.FeedItem.Revenue
									})
									
									]
									
				
		});
		barchart.setModel(model);
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [barchart]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});
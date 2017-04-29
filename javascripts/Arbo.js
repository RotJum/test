 var interndashboard = (function() { 
 	
 	var g_Data,
	canvas,
	    g_Container;

	// var _DEBUG = false;
	var _CSS = "#demo-div {background: #eaeaea; padding: 5px;} #data-summary {line-height: 50px; border-radius: 6px; background: #313B44; color: #f5f5f5; font-size: 14px; margin-bottom: 20px;}"; // You can enter your CSS here
	var	MSG_PREFIX = "DASHBOARD | ";

	// Date from CSV needs to be parsed before usable as a timescale
	parseDate = d3.time.format("%d/%m/%Y").parse;
	
	  setTimeout(init, 1);

		function init() {
		   var URL_TO_DATA = "data/Book1.csv";
		// var URL_TO_DATA = _DEBUG ? "wellness_data.csv" : "https://ams.ausport.gov.au/asc/spotfire?smartabaseuser=" + userId + "&smartabasetoken=" + token + "&formName=AMS%20Training%20Log";

		// Create dashboard container
		g_Container = d3.select(divTargetId).append("div")
			.attr("id", "dashboard-container")
			.attr("class", "print-this");

		// Insert CSS
		g_Container.append("style").text(_CSS);

		// Load data
		console.info(MSG_PREFIX + "Loading data from: " + URL_TO_DATA);
		d3.csv(URL_TO_DATA, function(error, data) {
				if (error) { console.error(MSG_PREFIX + error); return; };

						g_Data = data;//csv data
						
		// Example of nesting data using d3
						nested_data = d3.nest()// sorted by About
					    .key(function(d) { return d.About+d.Date})//picking only about column i.e about Athlete 19 count as 1 etc
					    .sortKeys(d3.ascending)   
					    .entries(g_Data);

			console.log(g_Data);
			console.log(MSG_PREFIX + "Data loaded successfully.");
			dashboardReady = true;
			makeDemoDivAndChart(g_Data);
		});
		}
	}) 
 ();	

 function makeDemoDivAndChart(g_Data) {
		// Demo of d3 - appending a new div with attributes and styling
		var dashboardDiv = d3.select("#dashboard-container").append("div");
		dashboardDiv
		.attr("id","demo-div")
		.style("margin","auto")
		.style("width", "870px")
		.style("color", "#404040");

		dashboardDiv
		.append("div")
		.attr("id","data-summary")//386 rows of data loaded on 13 athletes.
		//Timi's code goes here
		d3.select("body").selectAll("p").append("svg")
		
		
.append("rect")
.attr("height",1000)
.attr("width",500)		
.data(g_Data)
.enter()
.append("p")

.text(function(d) { return d['Node']+ "||"+" "+d.Date + " || "+ "  "+d['Battery Voltage'] +" || " + "  "+d['Temperature (C) at 10 cm'] +" || " +"  "+ d['VWC (%) at 10 cm']+" || " + "  "+d['VWC (%) at 55 cm'];

//newFunct();

 });
 

//.text("New paragraph!"+g_Data.About  )
		//.text(Object.keys(g_Data).length + " rows of data loaded on " + Object.keys(nested_data).length + " athletes.");

		dashboardDiv
		.append("h3")
		.attr("class", "module-header")
		.text("Demo Chart");

	    // Example call of c3 Chart
	    // Copied from http://c3js.org/samples/chart_bar.html
	    var chartContainer = dashboardDiv.append("div")
		    .attr("id","chart") // By default c3 binds data to #chart unless specified
			
			.attr("class", "chart-container");
			
		var chart = c3.generate({
    	data: {
        columns: [
            ['Demo1', 30, 200, 100, 400, 150, 250],
            ['Demo2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    	},
    	bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    	}
});
	}
	
	
	

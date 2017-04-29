// JavaScript Document
function parseData(createGraph){
	//Papa.parse("data/spanish-silver.csv", {
		Papa.parse("data/Book1.csv", {
download: true,
complete: function(results){
console.log(results.data);
createGraph(results.data);
}
});
}


	function createGraph(data){
		
	
	            var Date=["Dates"];
                  var Temperature=["Temperature"];
				  //New
				  var BatteryVoltage=["Battery Voltage"];
				  var VWC=["VWC (%) at 10 cm"];
				  var VWC2=[" VWC (%) at 55 cm"];
				  var Node=["Node"];
           for(i=1;i<data.length;i++)
           {
           Date.push(data[i][0]);
              Temperature.push(data[i][2]);
			  VWC.push(data[i][3]);
			  VWC2.push(data[i][4]);
			  Node.push(data[i][5]);
			  //New
			  BatteryVoltage.push(data[i][1]);

              }
            console.log(Date);
            console.log(Temperature);
			 console.log(BatteryVoltage);
			 var  d1= 20;
			 var d2=40;
			 var d3=60;
			 var d4= 80;
			 var d5=100;
			 var d6= 120;
	
/*	
var chart = c3.generate({
	bindto:'#chart',
    data: {
        columns: [
		         Date // Temperature 
		]
    },
    axis: {
        x: {
            type: 'category',
            categories:     Temperature // Date
        }
    }
})
;	
*/


/*
var chart = c3.generate({
    data: {
        columns: [
            [Date, 30, 200, 100, 400, 150, 250],
            [Temperature, 130, 100, 140, 200, 150, 50]
			//[BatteryVoltage, 130, 100, 140, 200, 150, 50]
        ],
        type: 'spline'
    }
});
*/



var chart = c3.generate({
    data: {
        columns: [
          //  [Date, Date[1],Date[2],Date[3],Date[4],Date[5],Date[6],Date[7] ],
            [Temperature, 200, 130, 90, 240, 130, 220],
            [BatteryVoltage, 300, 200, 160, 400, 250, 250],
            [VWC, 200, 130, 90, 240, 130, 220],
            [VWC2, 130, 120, 150, 140, 160, 150],
           // [Node, 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
            BatteryVoltage: 'spline',
            VWC: 'line',
            Node: 'area',
        },
        groups: [
            [Date,Temperature]
        ]
    }
});


setTimeout(function () {
    chart.transform('spline');
}, 10);







}

parseData(createGraph);//this how we start everything





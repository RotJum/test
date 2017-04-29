// JavaScript Document// JavaScript Document
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



var chart = c3.generate({
    data: {
        columns: [
            [VWC, VWC[1], VWC[2], VWC[3], VWC[4], VWC[5], VWC[6],VWC[7],VWC[8],VWC[9],VWC[10],VWC[11],VWC[12]],
			[VWC2, VWC2[1],VWC2[2],VWC2[3],VWC2[4],VWC2[5],VWC2[6],VWC2[7],VWC2[8],VWC2[9],VWC2[10],VWC2[11],VWC2[12]],
            [Temperature, Temperature[1],Temperature[2],Temperature[3],Temperature[4],Temperature[5],Temperature[6],Temperature[7],Temperature[8],Temperature[9],Temperature[10],Temperature[11],Temperature[12]]
			//[BatteryVoltage, 130, 100, 140, 200, 150, 50]
        ],
        type: 'spline'
    }
});



/*
var chart = c3.generate({
    data: {
        columns: [
            [Date, 30, 20, 50, 40, 60, 50],
            [Temperature, 200, 130, 90, 240, 130, 220],
            [BatteryVoltage, 300, 200, 160, 400, 250, 250],
            [VWC, 200, 130, 90, 240, 130, 220],
            [VWC2, 130, 120, 150, 140, 160, 150],
            [Node, 90, 70, 20, 50, 60, 120],
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
*/

setTimeout(function () {
    chart.transform('spline', 'data1');
}, 100);







}

parseData(createGraph);//this how we start everything





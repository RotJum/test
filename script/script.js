// JavaScript Document
$("#filename").change(function(e) {
var ext = $("input#filename").val().split(".").pop().toLowerCase();

if($.inArray(ext, ["csv"]) == -1) {
alert('Upload CSV');
return false;
}
    
if (e.target.files != undefined) {
var reader = new FileReader();
reader.onload = function(e) {
var csvval=e.target.result.split("\n");
var csvvalue=csvval[0].split(",");
var inputrad="";
for(var i=0;i<csvvalue.length;i++)
{
var temp=csvvalue[i];
var inputrad=inputrad+" "+temp;
}
$("#csvimporthint").html(inputrad);
$("#csvimporthinttitle").show();
};
reader.readAsText(e.target.files.item(0));

}

return false;

});
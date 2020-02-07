const fs = require('fs');

var file = fs.readFileSync("main.json", "utf8");
var obj = JSON.parse(file);
console.log("\n=== Account info ===")
console.log("account created at : " + obj.user.created_at);
console.log("last plugin : " + obj.user.last_plugin_name);
console.log("lest project : " + obj.user.last_project);

console.log("\n=== Days info ===")
console.log("number of days with info : " + obj.days.length)

var totalSecs = 0
console.log(obj.days[5])
fs.writeFileSync("day.json",JSON.stringify(obj.days[10]))
obj.days.forEach( element => {
    totalSecs += element.grand_total.total_seconds;
});

console.log("total time : " + parseInt(totalSecs) +" seconds")
//console.log(obj.days[0].dependencies);

//vars
var filecontent = undefined;
var stats = {
    days =[],
    totalDays =[],
    hours =[],
    totalHours =[],
    minutes =[],
    totalMinutes =[],
    seconds =[],
    totalSeconds =[]
}

function readFile() {
    console.info("reading file");
    var file = document.getElementById("fileForUpload").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            console.info("Parsiong File")
            var parsedJSON = JSON.parse(evt.target.result);
            filecontent = parsedJSON;
            console.info(parsedJSON);

            console.info("Extracting data");
            parsedJSON.days.forEach(element => {
                days.push(element.date);
                hours.push(element.grand_total.hours);
                minutes.push(element.grand_total.hours * 60 + element.grand_total.minutes)
                seconds.push(element.grand_total.total_seconds)
            });

            document.getElementById("totaldays").innerHTML =
                "File is valid ! " + parsedJSON.days.length + " days found " +
                "<button type=\"button\" onclick=\"getStats();\">get stats</button>"
            console.info("File parsed & data extracted");
        }
        reader.onerror = function (evt) {
            document.getElementById("fileContents").innerHTML = "error reading file";
        }
    }
}

function getStats() {
    calcAverage(minutes);
    totalDays = this.total(days);
    totalHours = this.total(hours);
    totalMinutes = this.total(minutes);
    totalSeconds = this.total(seconds);
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns:
                [minutes]
        }
    });
}

function calcAverage(numbers) {
    var sum = numbers.reduce((partial_sum, a) => partial_sum + a, 0);
    return (sum / sum.numbers);
}


function mostCoded(alldays) {
    //    Math.max.apply(Math, alldays.map(function (o) { return o.grand_total.total_seconds; }))
}

function total(numbers) {
    var tmp;
    numbers.forEach(element => {
        tmp += element
    });
    return tmp;
}
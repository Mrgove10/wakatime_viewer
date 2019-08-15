function main() {
    console.info("Lanched process");

    var file = document.getElementById("fileForUpload").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            var rawJSON = evt.target.result;
            var parsedJSON = JSON.parse(evt.target.result);
            console.info(parsedJSON);
            // document.getElementById("fileContents").innerHTML = evt.target.result;
            document.getElementById("totaldays").innerText = parsedJSON.days.length + " days found"
            extractData(parsedJSON);
        }
        reader.onerror = function (evt) {
            document.getElementById("fileContents").innerHTML = "error reading file";
        }
    }
}

function extractData(myJSON) {
    console.info("Extracting data");
    var days = []
    var hours = [];
    var minutes = [];
    mostCoded(myJSON);
    myJSON.days.forEach(element => {
        days.push(element.date);
        hours.push(element.grand_total.hours);
        minutes.push(element.grand_total.hours * 60 + element.grand_total.minutes)
    });
    console.log(hours);
    console.log(minutes);

    console.log("average minutes : "+calcAverage(minutes));
   
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns:
                [minutes]
        }
    });
}

function calcAverage(numbers){
    var sum = numbers.reduce((partial_sum, a) => partial_sum + a,0); 
    return (sum / sum.numbers);
}

function mostCoded(numbers){
    var sum = numbers.reduce((partial_sum, a) => partial_sum + a,0); 
    return (sum / sum.numbers);
}
var json;
var list = [];
list[0] = "";


/*
function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                try {
                    
                    loadchart();
                } catch (ex) {
                    alert('ex when trying to parse json = ' + ex);
                }
            }
        })(f);
        reader.readAsText(f);
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
*/

/**
 * Loads all the varriables
 * @param {*} rawfile 
 */
function LoadInfo(rawfile){
            obj = JSON.parse(rawfile);
                    obj.days.forEach(element => {
                        list.push(element.grand_total.total_seconds)
                    });
}
/**
 * Loads all the chartes
 */
function loadchart() {
    c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                list, //list of all the seconds
            ],
            type: 'spline'
        },
        subchart: {
            show: true
        },
        zoom: {
            enabled: true
        }
    });
}

/**
 * Gets he total number of seconds coded
 * @param {*} rootObj 
 */
function getTotalSeconds(rootObj) {
    var totalSecs = 0
    rootObj.days.forEach(element => {
        totalSecs += element.grand_total.total_seconds;
    });
    return totalSecs;
}

/**
 * gets the number of days
 * @param {*} rootObj 
 */
function getNumberOfDays(rootObj) {
    return rootObj.days.length;
}

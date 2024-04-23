var alarmsArray = [
    { id: 1,  title: "Controller[0].0 - Alarm: Emergency not Ok", value: 1 },
    { id: 2, title: "Controller[0].1 - Alarm: Pallet Limit Left Engaged", value: 1 },
    { id: 3, title: "Controller[0].2 - Alarm: Pallet Limit Right Engaged", value: 1 },
    { id: 4, title: "Controller[0].3 - Alarm: Satellite Limit Left Engaged", value: 1 },
    { id: 5, title: "Controller[0].4 - Alarm: Satellite Limit Right Engaged", value: 1 },
    { id: 6, title: "Controller[1].0 - Warning: Selection Maintenace WifI Controller activeted", value: 1 },
    { id: 7, title: "Controller[1].1 - Warning: Communication with WMS lost", value: 1 },
    { id: 8, title: "Carrier[0].0 - Alarm: Drive Fault", value: 1 },
    { id: 9, title: "Carrier[0].1 - Alarm: Position sensor in fault", value: 1 },
    { id: 10, title: "Carrier[0].2 - Alarm: Out of Tollerance Position", value: 1 },
    { id: 11, title: "Carrier[0].3 - Alarm: Timeout positioning", value: 1 },
    { id: 12, title: "Carrier[0].4 - Alarm: Limit Switch Forward", value: 1 },
    { id: 13, title: "Carrier[0].5 - Alarm: Limit Switch Backward", value: 1 }
];

function createTable(array) {
    var list = document.getElementById("alarmList");
    list.innerHTML = ''; 

    let html = '<table class="table table-dark table-striped">';
    html += '<thead><tr><th scope="col">#</th><th scope="col">Description</th></thead>';
    html += '<tbody>';

    array.forEach(function(item, index) {
        if (item.value == 1) {
            html += '<tr>';
            html += '<th scope="row">' + (index + 1) + '</th>';
            html += '<td>' + item.title + '</td>';
            html += '</tr>';
        }
    });

    html += '</tbody></table>';
    list.innerHTML = html;
}


var countCircle = document.getElementById('countCircle');

function updateCountCircle() {
    var count = alarmsArray.reduce(function(acc, curr) {
        return acc + (curr.value == 1 ? 1 : 0);
    }, 0);
    countCircle.textContent = count;
    if (count > 0) {
        countCircle.style.display = 'block';
    } else {
        countCircle.style.display = 'none';
    }
}



    // Function to update the list every second
    function updateList() {
        // Update values in myArray
        alarmsArray[0].value = Alarm_Controller_000;
        alarmsArray[1].value = Alarm_Controller_001;
        alarmsArray[2].value = Alarm_Controller_002;
        alarmsArray[3].value = Alarm_Controller_003;
        alarmsArray[4].value = Alarm_Controller_004;
        alarmsArray[5].value = Alarm_Controller_100;
        alarmsArray[6].value = Alarm_Controller_101;
        alarmsArray[7].value = Alarm_Carrier_000;
        alarmsArray[8].value = Alarm_Carrier_001;
        alarmsArray[9].value = Alarm_Carrier_002;
        alarmsArray[10].value = Alarm_Carrier_003;
        alarmsArray[11].value = Alarm_Carrier_004;
        alarmsArray[12].value = Alarm_Carrier_005;

        // Create HTML list after updating values
        createTable(alarmsArray);
        updateCountCircle();
    }

    // Call the updateList function every second
    setInterval(updateList, 1000);
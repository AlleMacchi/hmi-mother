function updateLogicalStringSection_2(){
    
    var RowString = generateString3nummbers(StatusCarrierActPositon_logicalRow);
    var ColString = generateString2nummbers(StatusCarrierActPositon_logicalCol);
    var DirectionString 

    if (Number(StatusCarrierActPositon_logicalDir)==0) {
        DirectionString = 'A';
    } else {
        DirectionString = 'B'; 
    }
    var StringaTitolo = 'A-L01R' + RowString + DirectionString + ColString;
    $('#current-logical-position').text(StringaTitolo);
}

function updateStatusSector2(){
    
    $('#current-position').text(CarrierActPosition_mm);
    $('#current-speed').text(CarrierActSpeed);
    $('#physical-pos-shuttle').text(CarrierActPosition_mm);

    // Sensors
    if (BabyOnBoard) {
        document.getElementById("BabyOnBoard").classList.add("green");
    } else {
        document.getElementById("BabyOnBoard").classList.remove("green");
    }

    if (BabyLimitLeft) {
        document.getElementById("BabyLimitLeft").classList.add("green");
    } else {
        document.getElementById("BabyLimitLeft").classList.remove("green");
    }

    if (BabyLimitRight) {
        document.getElementById("BabyLimitRight").classList.add("green");
    } else {
        document.getElementById("BabyLimitRight").classList.remove("green");
    }

    if (ModeSwitch) {
        document.getElementById("ModeSwitch").classList.add("green");
    } else {
        document.getElementById("ModeSwitch").classList.remove("green");
    }

    if (PalletStopLeft) {
        document.getElementById("PalletStopLeft").classList.add("green");
    } else {
        document.getElementById("PalletStopLeft").classList.remove("green");
    }

    if (PalletStopRight) {
        document.getElementById("PalletStopRight").classList.add("green");
    } else {
        document.getElementById("PalletStopRight").classList.remove("green");
    }

    if (PalletLimitLeft) {
        document.getElementById("PalletLimitLeft").classList.add("green");
    } else {
        document.getElementById("PalletLimitLeft").classList.remove("green");
    }

    if (PalletLimitRight) {
        document.getElementById("PalletLimitRight").classList.add("green");
    } else {
        document.getElementById("PalletLimitRight").classList.remove("green");
    }

}


function updateStatusPosition(){    
    if (CarrierInPosition) {
        document.getElementById("status-position").textContent('IN POSITION');
    }else if (CarrierIsMoving){
        document.getElementById("status-position").textContent('IS MOVING');
    } else if (CarrierIsFault){
        document.getElementById("status-position").textContent('IN FAULT');
    } else {
        document.getElementById("status-position").textContent('UNKNOWN');
    }
}

let bit = 0;

function toggleBit() {
  bit ^= 1; // XOR operation to toggle the bit
  console.log("Bit toggled to:", bit);
}



function updateSection2Data(){
    updateStatusSector2();
    updateLogicalStringSection_2();  
    updateStatusPosition();
    toggleBit();
}

setInterval(updateSection2Data, 1000);
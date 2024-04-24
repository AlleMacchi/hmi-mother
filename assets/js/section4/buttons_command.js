// =========================
//  BUTTON SET Minimum Battery Level Start Charging
// =========================

document
  .getElementById("btn-minimum-level")
  .addEventListener("mousedown", onTouchSetMinBatteryLvlStartCharging);
document
  .getElementById("btn-minimum-level")
  .addEventListener("touchstart", onTouchSetMinBatteryLvlStartCharging);

function onTouchSetMinBatteryLvlStartCharging(event) {
  url = "IOWriteMinimumBatteryLevelStartCharging.html";
  name = '"HMI_PLC".FromHMI.Setting.Battery.minLevelToStartCharge';
  val = $("input[id=Minimum-level-input]").val();
  sdata = escape(name) + "=" + val;
  if (val < 0 || val > 100) {
    alert("Value must be between 0 and 100");
    document.getElementById("Minimum-level-input").value = "";
  } else {
    $.post(url, sdata, function (result) {});

    // console.log(url, sdata, val);
    // console.log($.post(url, sdata, function (result) {}));
  }
}

// =========================
//  BUTTON SET Maximum Battery Level Stop Charging
// =========================

document
  .getElementById("btn-maximum-level")
  .addEventListener("mousedown", onTouchSetMaxBatteryLvlStopCharging);
document
  .getElementById("btn-maximum-level")
  .addEventListener("touchstart", onTouchSetMaxBatteryLvlStopCharging);

function onTouchSetMaxBatteryLvlStopCharging(event) {
  url = "IOWriteMaximumBatteryLevelStopCharging.html";
  name = '"HMI_PLC".FromHMI.Setting.Battery.maxLevelToStopCharge';
  val = $("input[id=Maximum-level-input]").val();
  sdata = escape(name) + "=" + val;
  if (val < 1 || val > 100) {
    alert("Value must be between 0 and 100");
    document.getElementById("Maximum-level-input").value = "";
  } else {
    $.post(url, sdata, function (result) {});
    // console.log(url, sdata, val);
    // console.log($.post(url, sdata, function (result) {}));
  }
}


// =========================
// Update Battery Level Read
// =========================

function UpdateBatteryLevelRead() {
  document.getElementById("Minimum-level-value").innerHTML = MinBatteryLevel + "%";
  document.getElementById("Maximum-level-value").innerHTML = MaxBatteryLevel + "%";
}

setInterval(UpdateBatteryLevelRead, 1000);

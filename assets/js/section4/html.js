document.getElementById("section4").innerHTML = `
<div class="container-view container-fluid">
<h1 id="title">Settings</h1>
<div id="setting-section" class="container-go-position">
  
  <div class="min_container">
  <h4 id="setting-label">Minimum battery level to start charging</h4>
  <h4 id="Minimum-level-value">%</h4>
    <form id="setting-form" class="form">
        <input 
            id="Minimum-level-input"
            class="form_input"
            type="number"
            min="0" 
            max="100"
            placeholder="Set Minimum"
        />
    </form>          
    <button 
        id="btn-minimum-level"
        class="btn_form btn_form_custom"
        type="submit">
        Confirm
    </button>          
  </div>
  <div class="max_container">
  <h4 id="setting-label">
  Maximum battery level to stop charging</h4>
  <h4 id="Maximum-level-value">%</h4>
    <form id="setting-form" class="form">
        <input 
            id="Maximum-level-input"
            class="form_input"
            type="number"
            min="0" 
            max="100"
            placeholder="Set Maximum"
        />
    </form>          
    <button 
        id="btn-maximum-level"
        class="btn_form btn_form_custom"
        type="submit">
        Confirm
    </button>          
  </div>

  </div>
</div>
`;

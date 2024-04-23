document.getElementById("section2").innerHTML = `
<div class="container-view container-fluid"> 
<div class="flex-container">
  <div class="flex-item-left">
    <div class="container-machine-img">
      <div class="machine-img">
        <img class="shuttle-img" src="assets/icons/agv-Mother.webp">
        <div class="sensor green" id="BabyOnBoard">A</div>
        <div class="sensor" id="BabyLimitLeft">B</div>
        <div class="sensor" id="BabyLimitRight">C</div>
        <div class="sensor" id="ModeSwitch">D</div>
        <div class="sensor" id="PalletStopLeft">E</div>
        <div class="sensor" id="PalletStopRight">F</div>
        <div class="sensor" id="PalletLimitLeft">G</div>
        <div class="sensor" id="PalletLimitRight">H</div>
        <button id="btn_Charger" class="button selection-btn">
          Charger
      </button>
      </div>


      <div class="container-machine-info">
        
        <div>
          <div class="status-no-frame status-no-frame-custom">Current Speed</div>
          <div class="text-info" id="current-speed">100<span>&nbsp%</span></div>
        </div>
        
        <div>                        
          <div class="status-no-frame status-no-frame-custom">Current Position</div>
          <div class="text-info" id="current-position">1234 <span>&nbspmm</span></div>
        </div>
        
        <div>                        
          <div class="status-no-frame status-no-frame-custom">Current Logical Position</div>
          <div class="text-info" id="current-logical-position">A-L01R001A05</div>
        </div>

        <div>                        
          <div class="status-no-frame status-no-frame-custom">Status Position</div>
          <div class="text-info" id="status-position">in position</div>
        </div>

      </div>
    </div>                    
  </div>
  <div class="flex-item-right">
    A: Baby On Board <br>
    B: Baby Limit Left <br>
    C: Baby Limit Right <br>
    D: WiFi Control Activated <br>
    E: Pallet Stop Left <br>
    F: Pallet Stop Right <br>
    G: Pallet Limit Left <br>
    H: Pallet Limit Right <br>
  </div>
  </div>


<div class="container-go-position">

  <div class="container-sector-go container-sector-go-custom">
    
    <div class="form_container">
      <form class="form">
          <input 
              id="setCarrierSpeed"
              class="form_input"
              type="number"
              min="1" 
              max="10"
              placeholder="Set speed"
          />
      </form>          
      <button 
          id="btn-setCarrierSpeed"
          class="btn_form btn_form_custom"
          type="submit">
          Confirm
      </button>          
    </div>
    <h4>CARRIER SPEED</h4>
    <div class="form_container">
      <form class="form">
          <input 
              id="setLifterSpeed"
              class="form_input"
              type="number"
              min="1" 
              max="100"
              placeholder="Set speed"
          />
      </form>          
      <button 
          id="btn-setLifterSpeed"
          class="btn_form btn_form_custom"
          type="submit">
          Confirm
      </button>          
    </div>
    <h4>LIFTER SPEED</h4>
  </div>
  

  <div class="container-sector-go">
    <div class="Parameters">    
    
      <button id="btn_Logical" class="button selection-btn">
          Logical
      </button>

      <div class="form_container">
          <form class="form">
              <input 
                  id="setPositionLogical"
                  class="form_input"
                  type="number"
                  min="1" 
                  max="38"
                  placeholder="Set row"
              />
          </form>   
          <div class="dropdown" id="dropdown_Section2">
            <button 
              id="setDirLogicalPosition_Section2"
              class="dropdown-toggle dropdown-position-logic" 
              type="button">
              A
            </button>
            <div class="dropdown-menu" id="dropdown-menu_Section2">
              <a class="dropdown-item" href="#" data-value="A">A</a>
              <a class="dropdown-item" href="#" data-value="B">B</a>
            </div>
          </div>  
          <button 
              id="btn-setPosition_logical"
              class="btn_form btn_form_custom"
              type="submit">
              Confirm
          </button>                 
      </div>
      <br>
      <div id="set-logial-position"></div> 
    </div>

  </div>

  <div class="container-sector-go">
    <div class="Parameters">    
    
      <button id="btn_Physical" class="button selection-btn selected">
          Physical
      </button>

      <div class="form_container">
          <form class="form">
              <input 
                  id="setPosition_mm"
                  class="form_input"
                  type="number"
                  placeholder="Set position"
              />
          </form>          
          <button 
              id="btn-setPosition_mm"
              class="btn_form_custom btn_form "
              type="submit">
              Confirm
          </button>          
      </div>
      <br>
      <div id="set-position">0 <span>&nbspmm</span></div> 
    </div>
  </div>

  <div class="container-sector-go ">
    <div class="btn_cmd_container btn_cmd_container-custom">
      <div id="btn_circle_out_GO"  class="btn_circle_outlet" >
          <div class="btn_circle_inlet ">
              <button id="btn_GO" class="btn_cmd">
                  GO
              </button>
          </div>
      </div>
      </div>
  </div>



</div>
</div>

`;
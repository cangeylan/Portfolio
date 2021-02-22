var steps = -1;
var estimatedCost;
var bedSelected = ' ';
var utilityPicked = ' ';
var selectedKitchen = 'Regular';
var selectedBathroom = 'Classic';
var minimumBed=0;
var squareMeter = 0
var bedroomAmount=0
var kitchenPrice=0
var kitchenResultImg = kitchen[0].imgUrl
var bathroomResultImg = bathroom[0].imgUrl
var bathroomPrice=0;
var utilityCost = 0;
var stepNames = ['Start','Square Meter','Bedrooms','Extra Utility','Kitchen','Bathroom','Result']


function calculatePrice(){
  estimatedCost = 250000+(squareMeter*300) + (bedroomAmount*500) + utilityCost + kitchenPrice + bathroomPrice; 
  last3digt = estimatedCost.toString().substr(-3)
  restOfNumber = estimatedCost.toString().slice(estimatedCost.length,-3)
  estimatedCost = restOfNumber+`.`+last3digt
  }


function nextStep(){
  steps++
  const timeline = gsap.timeline ()
  //Square Meter
  if(steps==1){
    for(let i=0; i<7;i++){
      document.getElementById('steps').innerHTML += `
      <li class='stepList' id='stepSign${i}'><button class='stepNames' id=step${i} onclick="pickStep(${i})">${stepNames[i]}
        <p id='${i}'></p> 
      </button></li>`
    }
    square_Meter_Range();
    next_step_animations(steps)
   
  }
  //Bedroom
  if(steps==2){
    if(squareMeter<=90){
      steps=4
    } else{
      for (let index = 0; index < maxBedroom; index++) {
        if( minimumBed==2 && index<minimumBed ){
          document.getElementById("bedroomIcons").innerHTML += `<img id="bed${index+1}" class='bedPng' onmouseover="hoveredBed(2)" onmouseout="hoveredBed('0')" onclick="selectBed(2)" src="https://i.ibb.co/FWCksxv/bed-white.png">`;
        } else{
          document.getElementById("bedroomIcons").innerHTML += `<img id="bed${index+1}"  class='bedPng' onmouseover="hoveredBed(${index+1})" onmouseout="hoveredBed('0')" onclick="selectBed(${index+1})" src="https://i.ibb.co/FWCksxv/bed-white.png">`;
        }
      }      
      next_step_animations(steps)
    }  
    document.getElementById('1').innerHTML = squareMeter+'㎡'
  } 

  //Utilities
  if(steps==3){
    document.getElementById('2').innerHTML = bedroomAmount

    if(houseType=='small'){
      steps=4
    } else{
      next_step_animations(steps)
    }
  }
  
  //Kitchen
  if(steps==4){
    document.getElementById('3').innerHTML = utilityPicked
    next_step_animations(steps)
  }

  //Bathroom
  if(steps==5){
    document.getElementById('4').innerHTML = selectedKitchen
    next_step_animations(steps)
  }

  // Result
  if(steps==6){
    document.getElementById('5').innerHTML = selectedBathroom
    
    if(houseType=='big'){
      for(let i = 0; i<bigHouse.length; i++){
        if(bedroomAmount==bigHouse[i].bedroom && utilityPicked==bigHouse[i].extra){
          resultImg = bigHouse[i].imgUrl;        }
      } 
    }else if(houseType=='small'){
      for(let i=0; i<smallHouse.length;i++){
        if(bedroomAmount==smallHouse[i].bedroom){
          resultImg = smallHouse[i].imgUrl;
        }
      }
    }
    
    if (bedroomAmount==1){
      bedroomText = `<strong>${bedroomAmount} extra bedroom </strong>`
    } else{
      bedroomText = `<strong>${bedroomAmount} extra bedrooms </strong>`
    }

    if(utilityPicked==' '){
      utilityText = ''
    } else{
      utilityText = `and <strong>${utilityPicked.toLowerCase()} </strong>`
    }
    
    document.getElementById('resultText').innerHTML = `
    You can have your <strong>${squareMeter} square meter
    </strong> penthouse with `+ bedroomText + utilityText + 
    `for just only <strong>${estimatedCost}</strong> euros. 
    <br><br><a>Click here</a> and start your process.`
    
    next_step_animations(steps)
  }

  if(steps>1){
    progressBarAnimation()
  }

}      


 // SQUARE METER INPUT
 function square_Meter_Range(){

  document.getElementById("slider").ontouchend = dragged;
  function dragged(){
    setBubble();
  }

  const allRanges = document.querySelectorAll("#range-wrap");
  allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector("#userSquareMeter");
    
  range.addEventListener("input", () => {
    setBubble(range, bubble);
    });
    setBubble(range, bubble);
  });
}; 

function setBubble(range, bubble) {
  squareMeter = range.value;
  bubble.innerHTML = squareMeter;

  if(squareMeter>=190){
    houseType = "big";
     maxBedroom = 4;
     minimumBed = 2;
     utilities = ["Hot Tub","Pool","Terrace"]
     document.getElementById('smallPlan').src= `${bigPlanImg[1]}`;
     document.getElementById('smallPlan').style.opacity= `1`;
     document.getElementById('smallPlan').style.visibility= `visible`;
     document.getElementById('bigPlan').style.visibility= `hidden`;

  }
  if (squareMeter>150 && squareMeter<190){
     houseType = "big";
     maxBedroom = 4;
     minimumBed = 1;
     utilities = ["Hot Tub","Pool","Terrace"]
     document.getElementById('bigPlan').src= `${bigPlanImg[0]}`;
     document.getElementById('bigPlan').style.opacity= `1`;
     document.getElementById('bigPlan').style.visibility= `visible`;
     document.getElementById('smallPlan').style.visibility= `hidden`;
  } 
  if(squareMeter<=150){
    document.getElementById('smallPlan').src= `${smallPlanImg[0]}`;
    document.getElementById('bigPlan').style.visibility= `hidden`;
    document.getElementById('smallPlan').style.visibility= `visible`;
    document.getElementById('smallPlan').style.opacity= `1`;

    utilities = undefined
    houseType = "small";
    maxBedroom = 4;
    minimumBed = 1
  } 
  
  if (squareMeter<=150 && squareMeter>=130) {
     maxBedroom = 3;}

  if(squareMeter<130 && squareMeter>=100){
     maxBedroom = 2;}

  if(squareMeter<100){
    maxBedroom = 1;
  }
  bedroomAmount=minimumBed
  calculatePrice()
}

//BEDROOM INPUT
function hoveredBed (x){
  if(bedSelected!==true){
    //unhovered
    if(x==0){
      bedroomAmount = minimumBed
      calculatePrice()
      for (let i = 0; i <maxBedroom; i++) {  
        document.getElementById(`bed${i+1}`).style.opacity = "0.5";
      }
      if(houseType=='big' && bedroomAmount==2){
        document.getElementById('bigPlan').src = `${bigPlanImg[1]}`
        document.getElementById('bigPlan').style.opacity = '1'
      }
      if(houseType=="big" && bedroomAmount==1){
        document.getElementById('bigPlan').src = `${bigPlanImg[0]}`
        document.getElementById('bigPlan').style.opacity = '1'
      }
      if(houseType=='small'){
        document.getElementById('smallPlan').src = `${smallPlanImg[0]}`
        document.getElementById('smallPlan').style.opacity = '1'
      }
      document.getElementById('configuredImg').style.opacity = '0'
    } 
    //hovered
    if(x>0){
      bedroomAmount = x;
      calculatePrice()
    for (let i = 1; i <= x; i++) {  
      document.getElementById(`bed${i}`).style.opacity = "1"
      if(houseType=='big'&& i>1 ){
        document.getElementById('configuredImg').src = `${bigPlanImg[i-1]}`
        document.getElementById('configuredImg').style.opacity = '1'
        document.getElementById('bigPlan').style.opacity = '0'
      }
      if(houseType=='small'){
        document.getElementById('configuredImg').src = `${smallPlanImg[i-1]}`
        document.getElementById('configuredImg').style.opacity = '1'
        document.getElementById('smallPlan').style.opacity = '0'
      } 
    }    
    if(minimumBed==2&& x==1 && houseType=='big'){
      document.getElementById(`bed2`).style.opacity = '1'
    }
  }
  }
}

function selectBed(x){
  hoveredBed(x)
  bedSelected = true
  nextStep()
}

// UTILITIES INPUT 
function utilityHover (x){
  if (utilityPicked == ' '){
    for(let i = 0; i < bigHouse.length; i++){
      if(bedroomAmount==bigHouse[i].bedroom && x==bigHouse[i].extra){
        document.getElementById('configuredImg').src = bigHouse[i].planningUrl;
      } 
    }    
    document.getElementById('configuredImg').style.opacity = '1'  
  
    for(let i =0; i<utilitiesPrice.length; i++){
      if(x==utilitiesPrice[i].utilityName){
        utilityCost = utilitiesPrice[i].price
        calculatePrice()
      }
    }
  }
}

function utilityPick(x){
  utilityPicked =x
  for(let i =0; i<utilitiesPrice.length; i++){
    if(utilityPicked==utilitiesPrice[i].utilityName){
      utilityCost = utilitiesPrice[i].price
      calculatePrice()
    }
  }
  nextStep()
}

//KITCHEN INPUT
function kitchenPick(x){  
  for(i=0;i<3;i++){
    if(x==kitchen[i].name){
      kitchenResultImg = kitchen[i].imgUrl
      document.getElementById('kitchenImg1').style.backgroundImage = `url(${kitchenResultImg})` 
      document.getElementById(`kitchen${i+1}`).style.opacity = '1'

      kitchenPrice = kitchen[i].price
    } else{
      document.getElementById(`kitchen${i+1}`).style.opacity = '0.5'
      kitchenPrice=0;
    }
  }
  selectedKitchen = x;
  calculatePrice()
}


//BATHROOM INPUT
function bathroomPick(x){
  for(i=0;i<3;i++){
    if(x==bathroom[i].name){
      bathroomResultImg = bathroom[i].imgUrl
      bathroomPrice = bathroom[i].price
      
      document.getElementById('bathroomImg').style.backgroundImage = `url(${bathroomResultImg})` 
      document.getElementById(`bathroom${i+1}`).style.opacity = '1'
    } else{
      document.getElementById(`bathroom${i+1}`).style.opacity = '0.5'
      bathroomPrice =0;
    }
  }
  selectedBathroom = x;
  calculatePrice()
}



//////////// NAVIGATION WITH SIDE BAR /////////////////
function pickStep(x){
  
  //Start
  if(x==0){
    document.getElementById('steps').innerHTML=''

    nav_animations(x)
  
    steps = -1;
    bedSelected = ' ';
    utilityPicked = ' ';
    selectedKitchen = 'Regular';
    selectedBathroom = 'Classic';
    minimumBed = 0
    squareMeter = 0
    bedroomAmount = 0
    kitchenPrice = 0
    bathroomPrice = 0
    utilityCost = 0
    document.getElementById('slider').value = '160'
    calculatePrice()
    nextStep()
  }
  //Square Meter
  if(x==1){
    nav_animations(x)

    steps = 1;
    bedSelected = ' ';
    utilityPicked = ' ';
    selectedKitchen = 'Regular';
    selectedBathroom = 'Classic';
    minimumBed=0;
    bedroomAmount=0
    kitchenPrice=0
    bathroomPrice=0;
    utilityCost = 0;
    document.getElementById('2').innerHTML=''
    document.getElementById('3').innerHTML=''
    document.getElementById('4').innerHTML=''
    calculatePrice()
    square_Meter_Range()
  }
  //Bedroom
  if(x==2){
    nav_animations(x)
    steps = 2;
    square_Meter_Range()
    utilityPicked = ' ';
    bedSelected = ' ';
    selectedKitchen = 'Regular';
    selectedBathroom = 'Classic';
    kitchenPrice=0;
    bathroomPrice=0;
    utilityCost = 0;
    document.getElementById('3').innerHTML=''
    document.getElementById('4').innerHTML=''
    calculatePrice()
  }
  //Utilities
  if(x==3){
    nav_animations(x)

    steps = 3;
    utilityPicked = ' ';
    selectedKitchen = 'Regular';
    selectedBathroom = 'Classic';
    kitchenPrice=0
    bathroomPrice=0;
    utilityCost = 0;
    document.getElementById('4').innerHTML=''
    calculatePrice()
  }
  //Kitchen
  if(x==4){
    nav_animations(x)
    steps = 4;
    selectedKitchen = 'Regular';
    selectedBathroom = 'Classic';
    kitchenPrice=0
    bathroomPrice=0;
    calculatePrice()
  }

  //Bathroom
  if(x==5){
    steps = 5;
    selectedBathroom = 'Classic';
    bathroomPrice=0;
    calculatePrice()
  }
  if(x!==0 || switchButton%2 == 0){
    progressBarAnimation()
  }

}




const submitBtn = document.getElementById('submitBtn');
const header = document.getElementById('header');

const validInput =(numFloors,numLifts)=>{
if(numLifts > numFloors){
      alert("No of lifts cannot be greater than number of floors");
      return false;
  }
  else if(numLifts>20 || numFloors>20){
      alert("Enter value less than or equal to 20");
      return false;
  }
  else{
    return true;
  } 
} 

submitBtn.addEventListener('click',()=>{
  const numFloors = document.getElementById("numFloors").value;
  const numLifts = document.getElementById("numLifts").value;
  const isValid = validInput(numFloors,numLifts);
  if(isValid) {

    const container = document.getElementById("container");
    container.innerHTML = ""; 


  for (let floor = numFloors; floor >= 1; floor--) {
    let floorContainer = document.createElement("div");
    floorContainer.classList.add("floor-container");
    floorContainer.innerText = "Floor " + floor;
    floorContainer.setAttribute("id", `floor-${floor}`);
    container.appendChild(floorContainer);

    let floorButtonUp = document.createElement("button");
    floorButtonUp.classList.add("button-up");
    floorButtonUp.setAttribute("id", `buttonUp-${floor}`);

    let floorButtonDown = document.createElement("button");
    floorButtonDown.classList.add("button-down");
    floorButtonDown.setAttribute("id", `buttonDown-${floor}`);
  }


  for (let lift = 1; lift <= numLifts; lift++) {
    let liftContainer = document.createElement("div");
    liftContainer.classList.add("lift-container");
    liftContainer.className = "lift";
    liftContainer.innerText = "Lift " + lift;
    container.appendChild(liftContainer);

    let leftDoor = document.createElement("div");
    leftDoor.classList.add("left-door");

    let rightDoor = document.createElement("div");
    rightDoor.classList.add("right-door");

    liftContainer.appendChild(leftDoor);
    liftContainer.appendChild(rightDoor);

  }

 header.innerHTML=""
 }

})


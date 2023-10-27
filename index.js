const submitBtn = document.getElementById('submitBtn');
const header = document.getElementById('header');

let lifts = [];

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
    // floorContainer.innerText = "Floor " + floor;
    floorContainer.setAttribute("id", `floor${floor}`);
    container.appendChild(floorContainer);

    let floorButtonUp = document.createElement("button");
    floorButtonUp.classList.add("button-up");
    floorButtonUp.setAttribute("id", `buttonUp-${floor}`);
    floorButtonUp.innerText = "UP"
    floorContainer.appendChild(floorButtonUp);

    floorButtonUp.addEventListener('click',()=>{
      moveLift(floor)
    })

    let floorButtonDown = document.createElement("button");
    floorButtonDown.classList.add("button-down");
    floorButtonDown.setAttribute("id", `buttonDown-${floor}`);
    floorButtonDown.innerText = "DOWN"
    floorContainer.appendChild(floorButtonDown);

    floorButtonDown.addEventListener('click',()=>{
      moveLift(floor);
    })
  }

  let firstFloor = document.querySelector("#floor1");
  let liftsContainer = document.createElement("div");
  liftsContainer.classList.add("lifts");

  for (let lift = 1; lift <= numLifts; lift++) {
    let liftContainer = document.createElement("div");
    liftContainer.className = "lift";
    liftContainer.classList.add("lift-container");
    liftContainer.setAttribute("id", `lift${lift}`);

    let leftDoor = document.createElement("div");
    leftDoor.classList.add("left-door");

    let rightDoor = document.createElement("div");
    rightDoor.classList.add("right-door");

    liftContainer.appendChild(leftDoor);
    liftContainer.appendChild(rightDoor);

    liftsContainer.appendChild(liftContainer);

    lifts.push({
      element: liftContainer,
      currentFloor: 1
  });
  }
  firstFloor.appendChild(liftsContainer);

 header.innerHTML=" ";
 }
 
})





function moveLift(floor) {

  const lifts = document.querySelectorAll(".lift")

  let time = 2500
  const elevator = lifts[0];
  const currentFloor = document.getElementById("")
  console.log(currentFloor)
  elevator.style.transition = `all ${time}ms ease-in-out`;
  elevator.style.transform = `translateY(${-Math.abs(
    (floor - currentFloor -1) * 130)}px)`;
  lift.currentFloor = floor;
  // elevator.classList("busy")

  setTimeout(()=>{
    openDoors(lift);
    setTimeout(()=>{
      closeDoors(lift)
    },2500);
  },2500 + time);


}

function openDoors(lift) {
  let liftContainer = document.querySelector(`#lift-${lift.id}`);
  let leftDoor = liftContainer.querySelector(".left-door");
  let rightDoor = liftContainer.querySelector(".right-door");

  leftDoor.style.transform = "translateX(-100%)";
  rightDoor.style.transform = "translateX(100%)";
}

function closeDoors(lift) {
  let liftContainer = document.querySelector(`#lift-${lift.id}`);
  let leftDoor = liftContainer.querySelector(".left-door");
  let rightDoor = liftContainer.querySelector(".right-door");

  leftDoor.style.transform = "translateX(0)";
  rightDoor.style.transform = "translateX(0)";
}







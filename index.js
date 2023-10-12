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
    floorContainer.innerText = "Floor " + floor;
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
      console.log(floor);
      console.log(liftContainer);
      moveLift(floor);
    })
  }

  let firstFloor = document.querySelector("#floor1");

  for (let lift = 1; lift <= numLifts; lift++) {
    let liftContainer = document.createElement("div");
    liftContainer.className = "lift";
    liftContainer.classList.add("lift-container");
    liftContainer.innerText = "Lift " + lift;
    liftContainer.setAttribute("id", `lift${lift}`);

    let leftDoor = document.createElement("div");
    leftDoor.classList.add("left-door");

    let rightDoor = document.createElement("div");
    rightDoor.classList.add("right-door");

    liftContainer.appendChild(leftDoor);
    liftContainer.appendChild(rightDoor);

    firstFloor.appendChild(liftContainer);

    lifts.push({
      element: liftContainer,
      currentFloor: 1
  });
  }

 header.innerHTML=" ";
 }
})

// To move the lift
// function moveLift(floor) {
//   lifts.forEach((lift, index) => {
//       setTimeout(() => {
//           const liftContainer = lift.element;
//           const currentFloor = lift.currentFloor;
//           liftContainer.style.transition = "all 10ms ease-in-out";
//           liftContainer.style.transform = `translateY(${(floor - currentFloor) * 100}px)`;
//           lift.currentFloor = floor;
//       }, index * 500);
//     }
// }



// function openDoors(){

//   let leftDoor = document.querySelector(".left-door");
//   let rightDoor = document.querySelector(".right-door");

//   leftDoor.style.transform = "translateX(-100%)"
//   rightDoor.style.transform = "translateX(100%)"

// }

// function closeDoors(){

//   let leftDoor = document.querySelector(".left-door");
//   let rightDoor = document.querySelector(".right-door");

//   leftDoor.style.transform = "translateX(0px)"
//   rightDoor.style.transform = "translateX(0px)"

// }



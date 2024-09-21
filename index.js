const submitBtn = document.getElementById('submitBtn');
const header = document.getElementById('header');

let lifts = [];
let floorRequestQueue = [];

const validInput = (numFloors, numLifts) => {
  numFloors = parseInt(numFloors);
  numLifts = parseInt(numLifts);
  if (numLifts > numFloors) {
    alert("Number of lifts cannot be greater than number of floors");
    return false;
  } else if (numLifts > 20 || numFloors > 20) {
    alert("Enter value less than or equal to 20");
    return false;
  } else {
    return true;
  }
};

submitBtn.addEventListener('click', () => {
  const numFloors = document.getElementById("numFloors").value;
  const numLifts = document.getElementById("numLifts").value;
  const isValid = validInput(numFloors, numLifts);
  
  if (isValid) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    for (let floor = numFloors; floor >= 1; floor--) {
      let floorContainer = document.createElement("div");
      floorContainer.classList.add("floor-container");
      floorContainer.setAttribute("id", `floor${floor}`);
      container.appendChild(floorContainer);

      let floorButtonUp = document.createElement("button");
      floorButtonUp.classList.add("button-up");
      floorButtonUp.setAttribute("id", `buttonUp-${floor}`);
      floorButtonUp.innerText = "UP";
      floorContainer.appendChild(floorButtonUp);

      floorButtonUp.addEventListener('click', () => {
        requestLift(floor);
      });

      let floorButtonDown = document.createElement("button");
      floorButtonDown.classList.add("button-down");
      floorButtonDown.setAttribute("id", `buttonDown-${floor}`);
      floorButtonDown.innerText = "DOWN";
      floorContainer.appendChild(floorButtonDown);

      floorButtonDown.addEventListener('click', () => {
        requestLift(floor);
      });
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
        currentFloor: 1,
        isBusy: false
      });
    }
    firstFloor.appendChild(liftsContainer);

    header.innerHTML = " ";
  }
});

function requestLift(floor) {
  let nearestLift = null;
  let minDistance = Infinity;

  lifts.forEach(lift => {
    if (!lift.isBusy) {
      let distance = Math.abs(lift.currentFloor - floor);
      if (distance < minDistance) {
        minDistance = distance;
        nearestLift = lift;
      }
    }
  });

  if (nearestLift) {
    moveLift(nearestLift, floor);
  } else {
    console.log(`All lifts are busy. Adding request for floor ${floor} to the queue.`);
    floorRequestQueue.push(floor);
  }
}

function moveLift(lift, targetFloor) {
  lift.isBusy = true;

  const liftElement = lift.element;
  const distance = Math.abs(targetFloor - lift.currentFloor);
  const travelTime = distance * 1000;

  liftElement.style.transition = `transform ${travelTime}ms ease-in-out`;
  liftElement.style.transform = `translateY(${-130 * (targetFloor - 1)}px)`;

  setTimeout(() => {
    lift.currentFloor = targetFloor;
    openDoors(lift);

    setTimeout(() => {
      closeDoors(lift);
      lift.isBusy = false;

      if (floorRequestQueue.length > 0) {
        let nextFloor = floorRequestQueue.shift();
        console.log(`Lift is now free. Moving to requested floor ${nextFloor}.`);
        moveLift(lift, nextFloor);
      }
    }, 2500);
  }, travelTime);
}

function openDoors(lift) {
  const liftElement = lift.element;
  let leftDoor = liftElement.querySelector(".left-door");
  let rightDoor = liftElement.querySelector(".right-door");

  leftDoor.style.transform = "translateX(-100%)";
  rightDoor.style.transform = "translateX(100%)";
}

function closeDoors(lift) {
  const liftElement = lift.element;
  let leftDoor = liftElement.querySelector(".left-door");
  let rightDoor = liftElement.querySelector(".right-door");

  leftDoor.style.transform = "translateX(0)";
  rightDoor.style.transform = "translateX(0)";
}
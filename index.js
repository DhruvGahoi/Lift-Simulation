

document.getElementById("submitBtn").addEventListener("click", function() {
    const numFloors = parseInt(document.getElementById("numFloors").value);
    const numLifts = parseInt(document.getElementById("numLifts").value);
      
    const liftContainer = document.getElementById("liftContainer");
    liftContainer.innerHTML = "";

    const sect = document.getElementById("header");
      sect.innerHTML = "";

      
    // Generate the lifts
    const liftRow = document.createElement("div");
    liftRow.className = "lift-container";
    for (let i = 1; i <= numLifts; i++) {
      const lift = document.createElement("div");
      lift.className = "lift";
      lift.innerText = "Lift " + i;
      liftRow.appendChild(lift);
    }
    liftContainer.appendChild(liftRow);
      
    // Generate the floors
    for (let j = numFloors; j >= 1; j--) {
      const floor = document.createElement("div");
      floor.className = "floor";
      floor.innerText = "Floor " + j;
      liftContainer.appendChild(floor);
    }
});

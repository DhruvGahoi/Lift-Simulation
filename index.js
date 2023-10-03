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
  console.log(numFloors)
  console.log(numLifts)
  console.log("Coming inside Function");
  const numfloors = document.getElementById("numFloors");
  console.log(numfloors)
  console.log("clicked");
  const isValid = validInput(numFloors,numLifts);
  console.log(isValid)
  if(isValid) {
    const liftContainer = document.getElementById("liftContainer");
    liftContainer.innerHTML = ""; 
    
    // Generate the lifts
    console.log(numLifts)
    for (let i = 1; i <= numLifts; i++) {
    const lift = document.createElement("div");
    lift.className = "lift";
    lift.innerText = "Lift " + i;
    liftContainer.appendChild(lift);

  }

  // Generate the floors
  for (let j = numFloors; j >= 1; j--) {
    const floor = document.createElement("div");
    floor.className = "floor";
    floor.innerText = "Floor " + j;
    liftContainer.appendChild(floor);
  }
 }
 header.innerHTML="";
})


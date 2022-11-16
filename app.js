// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = [];
const colorsBallons = ['green', 'red', 'yellow', 'blue'];

for (let i = 0; i < 20; i++) {
    ballonsMap.push(colorsBallons[Math.floor(Math.random()*3)]);
}

//console.log(ballonsMap)


// poping a balloon is basically turning his color to null (no color)
const popBalloon = (id) => {
    // set the color to null on the balloon position
    console.log(id);
    ballonsMap[id] = null;
    render();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        let noneShadow = ""
        if(color==null){
            noneShadow = "box-shadow: none !important;"
        }
        return `<div class="balloon active" style="background-color:${color} ; ${noneShadow}" id="${position}"  onclick="popBalloon(id)"></div>`;
    });

    document.querySelector("#balloon-count").innerHTML = ballonsMap.filter(b => b !== null).length; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM
    
    let activeBalloons = ballonsMap.filter(b => b !== null).length;

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left

}

// this makes the "render" function trigger when the website starts existing
window.onload = render(); 
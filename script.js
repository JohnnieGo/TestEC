function myFunction() {
  var x = document.getElementById("ListaKom");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block') {
    e.style.display = 'none'
  } else {
    document.querySelectorAll('.div').forEach(function(div) {
       div.style.display = 'none'; 
    })
    e.style.display = 'block';
  }
}

let zoomArr = [0.01,0.2,0.5,0.75,0.85,0.9,1,1.2,1.5,2.0,3.0,5.0];


var element = document.querySelector('.maindiv');
let value = element.getBoundingClientRect().width / element.offsetWidth;

let indexofArr = 6;
handleChange = ()=>{
  let val = document.querySelector('#sel').value; 
  val = Number(val)
  console.log('handle change selected value ',val);
  indexofArr = zoomArr.indexOf(val);
 console.log('Handle changes',indexofArr)
  element.style['transform'] = `scale(${val})`
}



document.querySelector('.zoomin').addEventListener('click',()=>{
  console.log('value of index zoomin is',value++)
  if(indexofArr < zoomArr.length-1){
    indexofArr += 1;
    value = zoomArr[indexofArr];
    document.querySelector('#sel').value = value
    // console.log('current value is',value)
    // console.log('scale value is',value)
    element.style['transform'] = `scale(${value})`
  }
})

document.querySelector('.zoomout').addEventListener('click',()=>{
 console.log('value of index  zoom out is',indexofArr)
  if(indexofArr >0){
     indexofArr -= 1;
     value = zoomArr[indexofArr];
     document.querySelector('#sel').value = value
  // console.log('scale value is',value)
  element.style['transform'] = `scale(${value})`
  }
})



// // ***
// // ***
// // ***

document.addEventListener('DOMContentLoaded', function () {
                const ele = document.getElementById('container');
                ele.style.cursor = 'grab';

                let pos = { top:0, left:0, x:0, y:0 };

                const mouseDownHandler = function (e) {
                    ele.style.cursor = 'grabbing';
                    ele.style.userSelect = 'none';

                    pos = {
                        left: ele.scrollLeft,
                        top: ele.scrollTop,
                        // Get the current mouse position
                        x: e.clientX,
                        y: e.clientY,
                    };

                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                };

                const mouseMoveHandler = function (e) {
                    // How far the mouse has been moved
                    const dx = e.clientX - pos.x;
                    const dy = e.clientY - pos.y;

                    // Scroll the element
                    ele.scrollTop = pos.top - dy;
                    ele.scrollLeft = pos.left - dx;
                };

                const mouseUpHandler = function () {
                    ele.style.cursor = 'grab';
                    ele.style.removeProperty('user-select');

                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mouseup', mouseUpHandler);
                };

                // Attach the handler
                ele.addEventListener('mousedown', mouseDownHandler);
            });

            
// ***
// ***
// ***

function showHideText() {
    var x = document.getElementById("overflowText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//   ***
//   ***
//   ***

let buttons = document.querySelector('#textSizeButtons');
let btn = buttons.querySelectorAll('.btn');
for (var i = 0; i <btn.length; i++){
  btn[i].addEventListener('click', function(){
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  })
};


// ***
let cube0 = document.getElementById('Z0TS')
let container0 = document.getElementById('Z0TL')

cube0.addEventListener('mouseover', () => container0.style.color = "#00539E")
cube0.addEventListener('mouseleave', () => container0.style.color = "black"
)
let cube00 = document.getElementById('Z00TS')
let container00 = document.getElementById('Z00TL')

cube00.addEventListener('mouseover', () => container00.style.color = "#00539E")
cube00.addEventListener('mouseleave', () => container00.style.color = "black")


let cube = document.getElementById('Z1TS')
let container = document.getElementById('Z1TL')

cube.addEventListener('mouseover', () => container.style.color = "#00539E")
cube.addEventListener('mouseleave', () => container.style.color = "black")

const cube2 = document.getElementById('Z2TS')
const container2 = document.getElementById('Z2TL')

cube2.addEventListener('mouseover', () => container2.style.color = "#00539E")
cube2.addEventListener('mouseleave', () => container2.style.color = "black")

let cube3 = document.getElementById('Z3TS')
let container3 = document.getElementById('Z3TL')

cube3.addEventListener('mouseover', () => container3.style.color = "#00539E")
cube3.addEventListener('mouseleave', () => container3.style.color = "black")

let cube4 = document.getElementById('Z4TS')
let container4 = document.getElementById('Z4TL')

cube4.addEventListener('mouseover', () => container4.style.color = "#00539E")
cube4.addEventListener('mouseleave', () => container4.style.color = "black")

let cube5 = document.getElementById('Z5TS')
let container5 = document.getElementById('Z5TL')

cube5.addEventListener('mouseover', () => container5.style.color = "#00539E")
cube5.addEventListener('mouseleave', () => container5.style.color = "black")

let cube6 = document.getElementById('Z6TS')
let container6 = document.getElementById('Z6TL')

cube6.addEventListener('mouseover', () => container6.style.color = "#00539E")
cube6.addEventListener('mouseleave', () => container6.style.color = "black")

let cube7 = document.getElementById('Z7TS')
let container7 = document.getElementById('Z7TL')

cube7.addEventListener('mouseover', () => container7.style.color = "#00539E")
cube7.addEventListener('mouseleave', () => container7.style.color = "black")

let cube8 = document.getElementById('Z8TS')
let container8 = document.getElementById('Z8TL')

cube8.addEventListener('mouseover', () => container8.style.color = "#00539E")
cube8.addEventListener('mouseleave', () => container8.style.color = "black")

let cube9 = document.getElementById('Z9TS')
let container9 = document.getElementById('Z9TL')

cube9.addEventListener('mouseover', () => container9.style.color = "#00539E")
cube9.addEventListener('mouseleave', () => container9.style.color = "black")

let cube10 = document.getElementById('Z10TS')
let container10 = document.getElementById('Z10TL')

cube10.addEventListener('mouseover', () => container10.style.color = "#00539E")
cube10.addEventListener('mouseleave', () => container10.style.color = "black")

let cube11 = document.getElementById('Z11TS')
let container11 = document.getElementById('Z11TL')

cube11.addEventListener('mouseover', () => container11.style.color = "#00539E")
cube11.addEventListener('mouseleave', () => container11.style.color = "black")

let cube12 = document.getElementById('Z12TS')
let container12 = document.getElementById('Z12TL')

cube12.addEventListener('mouseover', () => container12.style.color = "#00539E")
cube12.addEventListener('mouseleave', () => container12.style.color = "black")

let cube13 = document.getElementById('Z13TS')
let container13 = document.getElementById('Z13TL')

cube13.addEventListener('mouseover', () => container13.style.color = "#00539E")
cube13.addEventListener('mouseleave', () => container13.style.color = "black")

let cube14 = document.getElementById('Z14TS')
let container14 = document.getElementById('Z14TL')

cube14.addEventListener('mouseover', () => container14.style.color = "#00539E")
cube14.addEventListener('mouseleave', () => container14.style.color = "black")

let cube15 = document.getElementById('Z15TS')
let container15 = document.getElementById('Z15TL')

cube15.addEventListener('mouseover', () => container15.style.color = "#00539E")
cube15.addEventListener('mouseleave', () => container15.style.color = "black")

let cube16 = document.getElementById('Z16TS')
let container16 = document.getElementById('Z16TL')

cube16.addEventListener('mouseover', () => container16.style.color = "#00539E")
cube16.addEventListener('mouseleave', () => container16.style.color = "black")

let cube17 = document.getElementById('Z17TS')
let container17 = document.getElementById('Z17TL')

cube17.addEventListener('mouseover', () => container17.style.color = "#00539E")
cube17.addEventListener('mouseleave', () => container17.style.color = "black")

let cube18 = document.getElementById('Z18TS')
let container18 = document.getElementById('Z18TL')

cube18.addEventListener('mouseover', () => container18.style.color = "#00539E")
cube18.addEventListener('mouseleave', () => container18.style.color = "black")

let cube19 = document.getElementById('Z19TS')
let container19 = document.getElementById('Z19TL')

cube19.addEventListener('mouseover', () => container19.style.color = "#00539E")
cube19.addEventListener('mouseleave', () => container19.style.color = "black")

let cube20 = document.getElementById('Z20TS')
let container20 = document.getElementById('Z20TL')

cube20.addEventListener('mouseover', () => container20.style.color = "#00539E")
cube20.addEventListener('mouseleave', () => container20.style.color = "black")

let cube21 = document.getElementById('Z21TS')
let container21 = document.getElementById('Z21TL')

cube21.addEventListener('mouseover', () => container21.style.color = "#00539E")
cube21.addEventListener('mouseleave', () => container21.style.color = "black")

let cube22 = document.getElementById('Z22TS')
let container22 = document.getElementById('Z22TL')

cube22.addEventListener('mouseover', () => container22.style.color = "#00539E")
cube22.addEventListener('mouseleave', () => container22.style.color = "black")

let cube23 = document.getElementById('Z23TS')
let container23 = document.getElementById('Z23TL')

cube23.addEventListener('mouseover', () => container23.style.color = "#00539E")
cube23.addEventListener('mouseleave', () => container23.style.color = "black")

let cube24 = document.getElementById('Z24TS')
let container24 = document.getElementById('Z24TL')

cube24.addEventListener('mouseover', () => container24.style.color = "#00539E")
cube24.addEventListener('mouseleave', () => container24.style.color = "black")

let cube25 = document.getElementById('Z25TS')
let container25 = document.getElementById('Z25TL')

cube25.addEventListener('mouseover', () => container25.style.color = "#00539E")
cube25.addEventListener('mouseleave', () => container25.style.color = "black")

let cube26 = document.getElementById('Z26TS')
let container26 = document.getElementById('Z26TL')

cube26.addEventListener('mouseover', () => container26.style.color = "#00539E")
cube26.addEventListener('mouseleave', () => container26.style.color = "black")

// ***
// ***
// ***

const btn2 = document.getElementById('toggleOverFlowText');

btn2.addEventListener('click', function handleClick() {
  const initialText = 'Pokaż transliterację';

  if (btn2.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn2.textContent = 'Ukryj transliterację';
  } else {
    btn2.textContent = initialText;
  }
});

// ***
// ***
// ***


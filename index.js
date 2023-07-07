
var moverSpeed=20;
let x;
let y;
let a;
let r;
var robo = document.querySelector(".robot");
var vida = 4;












document.addEventListener( "keydown" , function (event ){
    x=event.key;
    if (x === "ArrowRight") {
        moverSpeed++;
        var leftPosition = parseInt(robo.style.left) || 0;
        robo.style.left = leftPosition + moverSpeed + "px";
      }
      


});

document.addEventListener("keydown", function(event) {
    y = event.key;
    if (y === "ArrowLeft") {
      moverSpeed--;
      var leftPosition = parseInt(robo.style.left) || 0;
      robo.style.left = leftPosition - moverSpeed + "px";
    }
  });
  
  document.addEventListener("keyup", function(event) {
    a = event.key;
    if (a=== "ArrowUp") {
      moverSpeed++;
      var topPosition = parseInt(robo.style.top) || 0;
      robo.style.top = topPosition - moverSpeed + "px";
    }

    
  });


  document.addEventListener("keydown", function(event) {
    a = event.key;
    if (a=== "ArrowDown") {
      moverSpeed--;
      var topPosition = parseInt(robo.style.top) || 0;
      robo.style.top = topPosition + moverSpeed + "px";
    }

    
  });


  




  var box = document.querySelectorAll(".caja");
var box1 = document.querySelectorAll(".caja1");

box.forEach(caja => {
  caja.addEventListener('click', () => {
    caja.style.backgroundColor = 'red';
   
    if (caja === box1[0]) {
      swal("¡ Caja Correcta!" , 'win');
    }
    
    else {
      swal("¡ Caja Falsa !"   )
    
      
      
      vida--;
      caja.style.backgroundColor = 'red';
    }
    if(vida<=0){
        swal("¡Perdiste todas las vidas!" ,'Perdedor');
        vida=4;
        reiniciar();
    
    }
    document.querySelector(".score").innerHTML="vidas:" + vida;

  
  });
});


box1.forEach(caja1 => {
  caja1.addEventListener('click', () => {
    swal("Ganaste pasa al siguiente nivel hay se definirá todo");



    caja1.style.backgroundColor = 'black';
  });
});

    

    
    

    
     


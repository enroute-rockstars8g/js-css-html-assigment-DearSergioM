function fibonacci(){
	var i = 0;
  if(document.getElementById('numeroF').value < 0){
    document.getElementById("resultado").innerHTML ="No te pases de listo D:";
  }
  else{
    var valor = document.getElementById('numeroF').value;
    var serie = [];
    valor = parseInt(valor);
    for (i; i<valor; i++){
      if(i==0){
        serie.push(0);
      }
      else if(i==1){
        serie.push(1);
      }
      else{
        serie.push(serie[i-1]+serie[i-2]);
      }
    }
    document.getElementById("resultado").innerHTML ="<h3>"+serie+"</h3>";
  }
}




function factorial() {
  var fact = document.getElementById('numeroFactorial').value;
  var resultado2 = isNaN(fact);
  
  if (!resultado2) {
      document.getElementById('numeroEvaluado').innerHTML = fact;
      var final = 1;
      
      while(fact >= 1) {
          final = final * fact;
          fact--;
      }
      
      document.getElementById('resultado2').innerHTML = final;
  }
}
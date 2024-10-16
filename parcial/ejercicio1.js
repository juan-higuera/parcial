let a,b,c,resultado,resultado2;

function pepe(){
       a=Number(document.getElementById("a").value);
       b=Number(document.getElementById("b").value);
       if (a<0 || b<0){alert("NO se aceptan numeros negativos"); window.reload()}
        resultado= a+b
       resultado2= a*b

      document.write("<br>")
       document.write("a= ",a," b = ",b )
      document.write("<br>")
       document.write("Resultado= ", resultado)
      document.write("<br>")
      document.write("Multiplicacion= ",resultado2 )
       document.write("<br>")
}

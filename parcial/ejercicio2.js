let a,b,c,resultado,resultado2,resultado3;

    function pepe(){
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
    c=Number(document.getElementById("c").value);
    if (a<0 || b<0){alert("NO se aceptan numeros negativos"); window.reload()}

    /* suma */
    resultado= a+b+c
    /* resta */
    resultado2= a-b-c
    /* multiplicacion */
    resultado3= a*b*c

    document.write("<br>")
    document.write("a= ",a," b = ",b," c = ",c)
    document.write("<br>")
    document.write("Suma= ", resultado)
    document.write("<br>")
    document.write("Resta= ",resultado2 )
    document.write("<br>")
    document.write("Multiplicacion= ",resultado3 )
    document.write("<br>")
    }
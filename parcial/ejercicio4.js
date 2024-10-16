let a,b,c,descuento,Resultado,descuento2;

    function pepe(){
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);

    if (a<0 || b<0){alert("NO se aceptan numeros negativos"); window.reload()}

    descuento= b/100
    descuento2= descuento*a
    resultado= a-descuento2

    document.write("<br>")
    document.write("Tu monto es:   ",a,"  Tu descuento es de:  ",b,"%")
    document.write("<br>")
    document.write("Tu monto descontado es de:   ", descuento2 )
    document.write("<br>")
    document.write("Tu Valor final es de:  ",resultado )
    document.write("<br>")
    }
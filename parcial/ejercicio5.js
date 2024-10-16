let a,b,c,descuento,resultado,descuento2,descuento3,moto;

    function pepe(){
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
    c=(document.getElementById("c").value);

    if (c =="Susuki"){moto=(a*0.10)};
    if (c =="Yamaha"){moto=(a*0.08)};
    if (c =="Honda"){moto=(a*0.05)};
    if (c =="otra"){moto=(a*0.02)};
    if (a<0 || b<0){alert("NO se aceptan numeros negativos"); window.reload()};

   
    descuento= b/100;
    descuento2= descuento*a;
    descuento3= a-moto;
    resultado= (a-descuento2-moto);

    document.write("<br>");
    document.write("Tu monto es:   ",a,"  Tu descuento es de:  ",b,"%");
    document.write("<br>");
    document.write("Tu monto descontado es de:   ", descuento2 ," + ", moto);
    document.write("<br>");
    document.write("Tu Valor final es de:  ",resultado );
    document.write("<br>");
    };
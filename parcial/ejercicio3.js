let fechaNacimiento;    
function pepe(){
     fechaNacimiento = new Date(document.getElementById("a").value);
            let hoy = new Date();
            let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
            let meses = hoy.getMonth() - fechaNacimiento.getMonth();
            let dias = hoy.getDate() - fechaNacimiento.getDate();
            
            if (dias < 0) {
                meses -= 1;
                dias += 30;
            };

            if (meses < 0) {
                años -= 1;
                meses += 12;
            };

        document.write("Tienes ",años," años")
        document.write(" ",meses," meses")
        document.write(" y",dias," dias vividos")
}

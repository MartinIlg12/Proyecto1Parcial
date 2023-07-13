let menu="Peluquerías Javier Tulcan \n Elija el servicio que desea\n";
menu+="1. Alisados\n";
menu+="2. Peinados\n";
menu+="3. Maquillaje\n";
menu+="4. Manicure\n";
menu+="5. Pedicure\n";
menu+="6. Corte de caballero\n";
menu+="7. Extenciones\n";
menu+="8. Pestañas y cejas\n";
menu+="9. Masaje\n";
menu+="10. Salir\n";

let cod=0;
do{
    cod=parseInt(prompt(menu));

    switch(cod){
        case 1: 
            document.writeln(`El servicio que usted eligio fue Alisados<br>`);
        break;
        case 2: 
        document.writeln(`El servicio que usted eligio fue Peinados<br>`);
        break;
        case 3: 
        document.writeln(`El servicio que usted eligio fue Maquillaje<br>`);
        break;
        case 4: 
        document.writeln(`El servicio que usted eligio fue Manicure<br>`);
        break;
        case 5: 
        document.writeln(`El servicio que usted eligio fue Pedicure<br>`);
        break;
        case 6: 
        document.writeln(`El servicio que usted eligio fue Corte de caballero<br>`);
        break;
        case 7: 
        document.writeln(`El servicio que usted eligio fue Extenciones<br>`);
        break;
        case 8: 
        document.writeln(`El servicio que usted eligio fue Pestañas y cejas<br>`);
        break;
        case 9: 
        document.writeln(`El servicio que usted eligio fue Masajes<br>`);
        break;
        case 10:
            document.writeln(`Gracias por preferirnos <br>`);
        break;
        default:


    }
}while(cod!=10);
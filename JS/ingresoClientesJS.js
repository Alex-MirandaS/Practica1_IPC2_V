console.log('Iniciando ingresoClientesJS.js');


let ingresoClientes = ()=>{
    console.log('Verificando datos ingresados');
    verificarInformacion();
};


let verificarInformacion = ()=>{
    const nombre= document.getElementById('nombre').value;
    const apellido= document.getElementById('apellido').value;
    const cui= document.getElementById('cui').value;
    const departamento= document.getElementById('departamento').value;
if(nombre === "" || apellido === "" || cui === "" ||departamento === ""){
    console.log('ERROR: Hay campos vacios');
}else if(!isNaN(cui)){
    console.log('Cliente creado con Ëxito');
    console.log('Nombre:'+nombre);
    console.log('Apellido:'+apellido);
    console.log('CUI:'+cui);
    console.log('Departamento:'+departamento);
}else{
    console.log('ERROR: El CUI se ha ingresado con caracteres erroneos');
}
    

    //ultimaOperacion.innerHTML = `  ${mensaje}`;
};
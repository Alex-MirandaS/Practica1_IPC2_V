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
if(!isNaN(cui)){
    console.log('Cliente creado con Ëxito');
    console.log('Nombre:'+nombre);
    console.log('Apellido:'+apellido);
    console.log('CUI:'+cui);
    console.log('Departamento:'+departamento);
}else{
    console.log('ERROR: el CUI se ha ingresado con datos erroneos');
}
    

    //ultimaOperacion.innerHTML = `  ${mensaje}`;
};
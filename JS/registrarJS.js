console.log('Iniciando registrarJS.js');


let registrar = ()=>{
    console.log('Verificando datos ingresados');
    verificarDatos();
};


let verificarDatos = ()=>{
    const usuario= document.getElementById('usuario').value;
    const password= document.getElementById('password').value;
    const passwordConfirm= document.getElementById('passwordConfirm').value;

if(password == passwordConfirm){
    console.log('Usuario Creado con Ëxito');
    console.log('Usuario:'+usuario);
    console.log('Password:'+password);
}else{
    console.log('ERROR: La contraseña no coincide con la confirmación');
    const passwordConfirm1= document.getElementById('passwordConfirm');
    passwordConfirm1.innerHTML = '<input type="password" id="passwordConfirm" name="contrasenaConfirm" class="form-control " placeholder="Confirmar Contraseña"  />';
}

    //ultimaOperacion.innerHTML = `  ${mensaje}`;
};

/*
let Actualizar = ()=>{
  const historico = document.getElementById('historico');
  historico.innerHTML+="<p>Actualizando</p>";
};*/
console.log('Iniciando loginJS.js');


let login = ()=>{
    console.log('Verificando usuario ingresado');
    verificarLogin();
};


let verificarLogin = ()=>{

  const usuario= document.getElementById('usuario').value;
  const password= document.getElementById('password').value;
  if(usuario === "" || password === ""){
    console.log('ERROR: Hay campos vacios');
}else{
  console.log('Usuario:' +usuario);
  console.log('Password: ' + password);
}


    //ultimaOperacion.innerHTML = `  ${mensaje}`;
};

/*
let Actualizar = ()=>{
  const historico = document.getElementById('historico');
  historico.innerHTML+="<p>Actualizando</p>";
};*/
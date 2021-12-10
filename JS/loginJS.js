console.log('Iniciando loginJS.js');


let login = ()=>{
    console.log('Verificando usuario ingresado');
    verificarLogin();
};


let verificarLogin = ()=>{
    const usuario= document.getElementById('usuario').value;
    const password= document.getElementById('password').value;
    console.log('Usuario:' +usuario +' Password: ' + password);
    //ultimaOperacion.innerHTML = `  ${mensaje}`;
};

/*
let Actualizar = ()=>{
  const historico = document.getElementById('historico');
  historico.innerHTML+="<p>Actualizando</p>";
};*/
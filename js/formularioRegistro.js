//(function (){
	var formulario = document.getElementById('formulario')
		, nombre = formulario.nombre
		, correo = formulario.correo
		, sexo = formulario.sexo
		, terminos = formulario.terminos
		, error  = document.getElementById('error')
		;
	function validarNombre(e){
		if(nombre.value == '' || nombre.value == null){
			error.innerHTML = '<li>Ingrese su nombre</li>';
			error.style.display = 'block';
			e.preventDefault();
		}
	}
	function validadMail(e){
		if(correo.value == '' || correo.value == null){
			error.innerHTML += '<li>Ingrese su correo</li>';
			error.style.display = 'block';
			e.preventDefault();
		}	
	}
	function validadSexo(e){
		if(sexo.value == '' || sexo.value == null){
			error.innerHTML += '<li>Seleccione sexo</li>';
			error.style.display = 'block';
			e.preventDefault();
		}	
	}
	function validadTerminos(e){
		if(! terminos.checked){
			error.innerHTML += '<li>Acepte termino y condiciones</li>';
			error.style.display = 'block';
			e.preventDefault();
		}	
	}

	function validar(e){
		error.style.display = 'none';
		error.innerHTML = "";
		validarNombre(e);
		validadMail(e);
		validadSexo(e);
		validadTerminos(e);
		//alert("Gracias por su registro!");
	}
	formulario.addEventListener('submit',validar);
//}())
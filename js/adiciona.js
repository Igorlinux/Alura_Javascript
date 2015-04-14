var btn_adicionar = document.getElementById('add-paciente');

btn_adicionar.addEventListener('click', function() {

	var ipt_nome = document.getElementById('campo-nome');
	var ipt_peso = document.getElementById('campo-peso');
	var ipt_altura = document.getElementById('campo-altura');

	if(ipt_nome === '' || ipt_peso === '' || ipt_altura === '') {

		alert("Preencha todos os campos");

	}
	else {
		



		var pacienteNovo = "<tr class='paciente'>" +
							"<td class='info-nome'>"+ ipt_nome.value +"</td>" +
							"<td class='info-peso'>"+ ipt_peso.value +"</td>" +
							"<td class='info-altura'>"+ ipt_altura.value +"</td>" +
							"<td class='info-imc'></td>"
						"</tr>"

		var tabela = document.querySelector('table');

		tabela.innerHTML = tabela.innerHTML + pacienteNovo;
	}

	ipt_nome.value = "";
	ipt_peso.value = "";
	ipt_altura.value = "";

});


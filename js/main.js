// VARIÁVEL PARA PEGAR OS PACIENTES QUE ESTÃO NOS TR'S DO HTML
var trPaciente = document.getElementsByClassName('paciente');

// LOOP PARA PASSAR POR TODOS OS PACIENTES
for(var contador = 0; contador <= trPaciente.length; contador++) {

	// VARIÁVEL PARA PEGAR O PACIENTE SELECIONADO PELA ARRAY
	var pacientes = trPaciente[contador];

	// VARIÁVEIS PARA PEGAR OS VALORES DOS TD'S DO PACIENTE SELECIONADO PELA ARRAY
	var tdNome = pacientes.getElementsByClassName('info-nome')[0];
	var tdPeso = pacientes.getElementsByClassName('info-peso')[0];
	var tdAltura = pacientes.getElementsByClassName('info-altura')[0];
	var tdImc = pacientes.getElementsByClassName('info-imc')[0];

	// OBJETO QUE CONTÉM AS INFORMAÇÕES DO PACIENTE
	var paciente = {
		nome: tdNome.textContent,
		peso: tdPeso.textContent,
		altura: tdAltura.textContent
	}

	// PEGAR O VALOR DO IMC DO PACIENTE SELECIONADO E GUARDAR
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	
	// ATRIBUIR O IMC CALCULADO AO CAMPO DO HTML
	tdImc.textContent = imc;
}
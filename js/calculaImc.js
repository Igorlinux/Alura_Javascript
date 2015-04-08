var TrsPaciente = document.getElementsByClassName('paciente');

for (var contador = 0; contador < TrsPaciente.length; contador++) {

	var pacienteTr = TrsPaciente[contador];

	var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
	var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
	var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];
	var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];

	var paciente = {
		nome : tdNome.textContent,
		peso : tdPeso.textContent,
		altura : tdAltura.textContent,
		pegaImc : function() {
			var imc = this.peso / (this.altura * this.altura);
			return imc;
		}
	}

	tdImc.textContent = paciente.pegaImc();
	console.log(paciente.nome);
	console.log(paciente.pegaImc());
}
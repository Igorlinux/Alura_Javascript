var trsPaciente = document.getElementsByClassName('paciente');

percorreArray(trsPaciente, function(pacienteTr) {

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
	console.log(paciente.nome);
});

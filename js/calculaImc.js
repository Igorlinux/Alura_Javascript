var btn_calcular = document.getElementById('calcular-imc');

btn_calcular.addEventListener('click', function() {

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
			pegarImc : function() {
				var imc = (this.peso / (this.altura * this.altura)).toFixed(2);
				return imc;
			}
		}

		tdImc.textContent = paciente.pegarImc();
		console.log(paciente.pegarImc());
	});

});
function percorreArray(trsPaciente, comportamento) {

	for (var contador = 0; contador < trsPaciente.length; contador++) {

		var pacienteTr = trsPaciente[contador];

		comportamento(pacienteTr);
		//executar algo
	}

}
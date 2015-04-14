function Paciente(nome, peso, altura, imc) {

	this.nome = nome.textContent;
	this.peso = peso.textContent;
	this.altura = altura.textContent;
	function pegarImc() {
		var imc = peso / (altura * altura);
		return imc;
	}
}

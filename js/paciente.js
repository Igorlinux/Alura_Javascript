function Paciente(nome, peso, altura, imc) {

	this.nome = nome.textContent;
	this.peso = peso.textContent;
	this.altura = altura.textContent;
	var imc = this.peso / (this.altura * this.altura);
}

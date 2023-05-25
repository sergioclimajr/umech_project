export class Profissional {
  id?: string;
  nome?: string;
  especialidade?: string;
  bairro?: string;
  cidade?: string;
  email?: string;
  senha?: string;


  constructor(id: string ='', profissional: Profissional = {}) {
    this.id = id;
    this.especialidade = profissional.especialidade;
    this.bairro = profissional.bairro;
    this.cidade = profissional.cidade;
    this.email = profissional.email;
    this.senha = profissional.senha;

  }
}

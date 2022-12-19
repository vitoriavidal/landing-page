import api from '@http/api';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'accept':'application/json'
  },
};

export interface IRequestCreatePessoa {
  pessoa: {
    nome: string;
    cpfcnpj: string;
    email: string;
    telefone: string;
  };
  doacao: {
    valor: number;
    cartao: boolean;
    boleto: boolean;
    pix: boolean;
    recorrente: boolean;
  };
  endereco: {
    descricao: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    cep: string;
    uf: string;
  };
  entidade?: {
    nome: string;
  };
  campanha?:{
    descricao: string;
  };
}

class PageCadastroPessoaServices {

  public async CreatePessoa(pessoa: IRequestCreatePessoa) {
    return await api
      .post('', pessoa)
      .then(response => {

        return {
          error: false,
          response: response.data,
        };
      })
      .catch(error => {
        return {
          error: true,
          response: [],
        };
      });
  }



}


export default PageCadastroPessoaServices;

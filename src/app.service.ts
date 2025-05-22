import { Injectable } from '@nestjs/common';
import { Produto } from './MODELO/produto';


@Injectable()
export class AppService {
  
  private listaProdutos:Array<Produto> = [];

  constructor(){
    const prod1 = new Produto(1, 'arroz', 'ABC', 10.33);
    const prod2 = new Produto(2, 'feijão', 'XYZ', 5.20);
    const prod3 = new Produto(3, 'FARINHA', 'VFT', 2.49);

    this.listaProdutos.push(prod1, prod2, prod3);

    console.log(this.listaProdutos);
  }

  public listarTodos():Array<Produto>{
    return this.listaProdutos;
  }

  public buscarPorId(id: number): Produto {
    return this.listaProdutos.find( 
      produto => produto.id == id);
    }
  
  public salvar(produto:Produto): Produto{

      const incluirProduto = new Produto(
        this.obterProximoId(),
        produto.nome,
        produto.marca,
        produto.preco
      );

      this.listaProdutos.push(incluirProduto);
      return incluirProduto;

  }

  public obterProximoId(): number{
    if(this.listaProdutos.length == 0){
      return 1;
    }else{
      let ultimoRegistro = this.listaProdutos[
          this.listaProdutos.length - 1
      ];

      return ultimoRegistro.id +1;
    }
    }

 

}

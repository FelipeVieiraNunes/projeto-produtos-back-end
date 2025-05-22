import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Produto } from './MODELO/produto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  
  getstatus(): string {
    return "O node está rodando:" + new Date();
  }

   @Get("/produto")
  listarTodosProdutos(): Array<Produto> {
    console.log("Entrou no método: listarTodosProdutos");

    return this.appService.listarTodos();
  }

  @Get("/produtos")
  public buscarPorId(@Query('id') id:number): Produto {
    console.log("Entrou no método: buscarPorId");

    return this.appService.buscarPorId(id);
  }

  @Post()
  public salvar(@Body() produto: Produto): Produto {
    console.log("Entrou no método: salvar");

    return this.appService.salvar(produto);
  }

}


import { Page } from '@playwright/test';

export class CadastroUsuarioPage {
  constructor(private page: Page) {}

  async acessarCadastro() {
    await this.page.goto('/cadastrarusuarios');
  }

  async preencherFormulario(nome: string, email: string, senha: string) {
    await this.page.getByPlaceholder('Digite seu nome').fill(nome);
    await this.page.getByPlaceholder('Digite seu email').fill(email);
    await this.page.getByPlaceholder('Digite sua senha').fill(senha);
  }

  async marcarAdministrador() {
    await this.page.getByLabel('Cadastrar como administrador?').check();
  }

  async clicarCadastrar() {
    await this.page.getByRole('button', { name: 'Cadastrar' }).click();
  }

  async obterMensagemErro() {
    return this.page.locator('.alert');
  }
}

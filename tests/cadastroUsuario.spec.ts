
import { test, expect } from '@playwright/test';
import { CadastroUsuarioPage } from '../pages/CadastroUsuarioPage';
import { gerarUsuario } from '../utils/dataFactory';

test.describe('Cadastro de Usuário', () => {

  test('Deve cadastrar usuário comum com sucesso', async ({ page }) => {
    const usuario = gerarUsuario();
    const cadastro = new CadastroUsuarioPage(page);

    await cadastro.acessarCadastro();
    await cadastro.preencherFormulario(usuario.nome, usuario.email, usuario.senha);
    await cadastro.clicarCadastrar();

    await expect(page.getByText('Serverest Store')).toBeVisible();;
  });

  test('Deve cadastrar usuário administrador com sucesso', async ({ page }) => {
    const usuario = gerarUsuario();
    const cadastro = new CadastroUsuarioPage(page);

    await cadastro.acessarCadastro();
    await cadastro.preencherFormulario(usuario.nome, usuario.email, usuario.senha);
    await cadastro.marcarAdministrador();
    await cadastro.clicarCadastrar();

    await expect(page.getByText('Este é seu sistema para administrar seu ecommerce.')).toBeVisible();;
  });

  test('Não deve permitir cadastro com email duplicado', async ({ browser }) => {
    const usuario = gerarUsuario();

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const cadastro1 = new CadastroUsuarioPage(page1);

    await cadastro1.acessarCadastro();
    await cadastro1.preencherFormulario(usuario.nome, usuario.email, usuario.senha);
    await cadastro1.clicarCadastrar();

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    const cadastro2 = new CadastroUsuarioPage(page2);

    await cadastro2.acessarCadastro();
    await cadastro2.preencherFormulario(usuario.nome, usuario.email, usuario.senha);
    await cadastro2.clicarCadastrar();

    await expect(page2.locator('.alert')).toBeVisible();
  });

});

# Ficha de indicação weNutri

Site estático. Publica na Vercel sem build, sem servidor, sem banco.

## Arquivos

- index.html: a ficha inteira, com o catálogo e as posologias
- manifest.webmanifest: dados do aplicativo (nome, cores, ícones)
- sw.js: faz a ficha abrir mesmo sem internet
- icone-192.png e icone-512.png: ícone que aparece na tela do celular. Os nomes precisam ter o hífen, exatamente assim. Com o nome trocado, o ícone some e a ficha para de funcionar sem internet
- vercel.json: controle de cache na Vercel
- netlify.toml: controle de cache na Netlify, caso publique por lá

## Publicar pelo site da Vercel

1. Crie um repositório novo no GitHub, por exemplo ficha-wenutri
2. Envie estes arquivos para a raiz do repositório
3. Em vercel.com, clique em Add New, Project, e importe o repositório
4. Framework Preset: Other. Root Directory: raiz. Build Command: vazio. Output Directory: vazio
5. Clique em Deploy

## Publicar pelo terminal

```
npm i -g vercel
cd ficha-wenutri
vercel
vercel --prod
```

## Publicar na Netlify, do mesmo jeito que você fez o app

1. Abra a pasta ficha-wenutri no computador
2. Selecione tudo que está dentro dela, com Ctrl+A, e arraste os arquivos para a área de deploy
3. Arraste os arquivos, nunca a pasta. O index.html precisa ficar na raiz do site
4. Em Domain management, aponte o subdomínio

Se preferir manter a ficha dentro do site que já existe, crie uma pasta ficha na raiz e coloque estes arquivos lá. Os caminhos são todos relativos, então funciona em subpasta, no endereço seudominio.com/ficha. Nesse caso não substitua o index.html do site principal.

## Domínio próprio

1. No projeto da Vercel, abra Settings, Domains
2. Adicione ficha.wenutrimilena.com
3. No painel do seu domínio, crie um registro CNAME apontando ficha para cname.vercel-dns.com
4. Aguarde a propagação. A Vercel emite o certificado sozinha

## Como a nutricionista instala

Ao abrir o link, aparece um aviso no topo com o botão Instalar.

- Android e computador: o botão instala na hora, com um clique
- iPhone: o botão abre as instruções, porque a Apple não permite instalação automática. São três toques, compartilhar, Adicionar à Tela de Início, Adicionar
- O link como faço mostra o passo a passo dos três sistemas
- Depois de instalada, a ficha abre em tela cheia, com o ícone weNutri, e funciona sem internet

No computador o atalho vai para a área de trabalho e para o menu iniciar. Funciona no Chrome e no Edge. O Safari do Mac não instala, mas abre normal pelo navegador.

## Atualizar produtos, preços ou posologias

1. Abra o index.html e edite o bloco CATALOGO, no início do script
2. Abra o sw.js e troque o número da versão do cache. Esta entrega está em ficha-wenutri-v6, então a próxima é v7, depois v8, e assim por diante
3. Envie a alteração para o GitHub. A Vercel publica sozinha
4. As nutricionistas recebem a versão nova na próxima abertura com internet

Sem o passo 2 o celular pode continuar mostrando a versão antiga.

## Observações

- A ficha não guarda dados. Cada preenchimento vira PDF ou mensagem de WhatsApp na hora
- Para receber as indicações em uma planilha, é preciso acrescentar um envio para um serviço externo. Isso muda o projeto de site estático para site com integração

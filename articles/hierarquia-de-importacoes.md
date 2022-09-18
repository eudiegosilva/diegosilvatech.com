---
title: Hierarquia de importações
description: Deixando os seus imports mais elegantes e organizados | Parte II
image: /assets/images/articles/hierarquia-de-importacoes.jpg
date: "2020-08-23"
---

Hoje continuaremos falando sobre como deixar os nossos imports mais elegantes e organizados. Para isso, precisamos falar sobre **hierarquia de importações**.

## O que é hierarquia de importações?

Como o próprio nome já esclarece, hierarquia de importações é a ordem de prioridade das dependências importadas no nosso código.

É muito comum que os nossos arquivos `.js` e `.jsx` importem muitas bibliotecas, componentes, páginas, controllers, services, helpers, estilos, ou seja, uma infinidades de tipos de arquivos e dados distintos.

O exemplo abaixo é muito comum no cotidiano de um desenvolvedor front end:

```jsx
import React, { useState, useEffect } from 'react';
import Button from '~/components/Button';
import { Container } from './styles.js';
import Card from '~/components/Card';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import Main from '~/pages/Main';
import Dashboard from '~/components/Dashboard';
import Home from '~/pages/Home';
import Routes from '~/routes';

function ExampleComponent() { ...
```

Olhando para o código acima você pode se questionar: "Não vejo nenhum problema nesse código".

E de fato, não há. As dependências necessárias foram importadas e estão prontas para serem utilizadas.

> Mas, se podemos deixar mais organizado, **por quê não?**

Abaixo eu mostro o **mesmo exemplo**, só que mais **organizado**:

```jsx
import React, { useState, useEffect } from 'react';
import { combineReducers } from 'redux';

import PropTypes from 'prop-types';

import Home from '~/pages/Home';
import Main from '~/pages/Main';

import Button from '~/components/Button';
import Card from '~/components/Card';
import Dashboard from '~/components/Dashboard';

import Routes from '~/routes';

import { Container } from './styles.js';

function ExampleComponent() { ...
```

No exemplo acima, eu ordenei as importações da seguinte forma:

- em primeiro lugar: todas as dependências que eu considero as mais **importantes** da minha aplicação. Por exemplo, todas as que iniciam com 'react' e 'redux'
- em seguida, todas as outras bibliotecas e **módulos instalados no package.json**. Por exemplo, Prop Types, Storybook, Unform, entre outros
- depois, todos os arquivos internos, que iniciam com o alias `~/` ou `@`. Por exemplo, `~/components`, `~/pages`, `~/styles`, `@controllers`, `@models`, entre outros. No post [Import paths personalizados e como isso pode te ajudar](https://coderamos.vercel.app/import-paths-personalizados-como-isso-pode-te-ajudar/) eu mostro como podemos criar e configurar import paths personalizados para facilitar as importações da nossa aplicação
- então, as **rotas** da minha aplicação
- e por último, os meus **estilos**. Nesse caso, arquivos com o nome `.styled.js`

```jsx
// primeiro, tudo que começa com 'react' e 'redux'
import React, { useState, useEffect } from 'react';
import { combineReducers } from 'redux';

// depois, todos os módulos e bibliotecas importadas
import PropTypes from 'prop-types';

// depois, tudo o que inicia com um alias '~/pages' ou '@pages'
import Home from '~/pages/Home';
import Main from '~/pages/Main';

// depois, tudo o que inicia com um alias '~/components' ou '@components'
import Button from '~/components/Button';
import Card from '~/components/Card';
import Dashboard from '~/components/Dashboard';

// então, as minhas rotas
import Routes from '~/routes';

// e por último, os meus estilos
import { Container } from './styles.js';

function ExampleComponent() { ...
```

É claro que manter essa hierarquia para todo o nosso código gasta muito tempo, atenção e cuidado.

Mas ainda bem que podemos automatizar essa tarefa, não é mesmo?

![inteligente, não?!](https://media.giphy.com/media/W3a0zO282fuBpsqqyD/giphy.gif)

## Conhecendo o [eslint-plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)

O **eslint-plugin-import-helpers** é um pacote que foi criado pelo [Will Honey](https://twitter.com/Tibfib), e tem como objetivo complementar o [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import). Ele trás um caso de uso muito importante que ainda falta no eslint-plugin-import: **a ordem das importações**.

## Sobre o `order-imports` e como ele funciona

O **eslint-plugin-import-helpers** trás (até a data desse post) apenas o plugin **order-imports**. Esse plugin permite que seja possível configurar uma hierarquia de importações com apenas uma simples configuração arquivo `.eslintrc.js`.

## Fazendo acontecer

Antes de tudo, você precisará ter no seu projeto o **ESLint** e o **Prettier** configurados. Se por acaso você ainda não configurou, sugiro que siga esse turorial:

<div align="center">
  <iframe width="200" height="400" src="https://www.youtube.com/embed/TI4v4Y8yRjw" frameborder="0" allowfullscreen></iframe>
</div>

Após a instalação e configuração do ESLint e Prettier, podemos seguir com os próximos passos.

#### Instalando e configurando o `eslint-plugin-import-helpers`

Na raíz do nosso projeto **react**, vamos instalar o puglin:

```bash
yarn add -D eslint-plugin-import-helpers
```

Agora, vamos configurar a regra **import-helpers/order-imports** no arquivo `.eslintrc.js`:

```js
// .eslintrc.js
rules: {
  'import-helpers/order-imports': [
    'warn', // exibe um alerta no editor
    {
      newlinesBetween: 'always', // insere uma linha em branco após cada grupo de prioridade
      groups: [
        ['/^react/', '/^redux/'], // primeiro grupo: tudo que inicia com 'react' e 'redux'
        '/styled-components/', // segundo grupo: tudo o que for importado diretamente da biblioteca styled-components. Isso é para garantir que a primeira importação nos arquivos styles.js seja sempre a do styled-components.
        'module', // terceiro grupo: tudo que é um módulo (qualquer biblioteca listada no arquivo package.json)
        '/prop-types/', // quarto grupo: a importação do prop-types
        '/^~/pages/', // quinto grupo: todas as minhas páginas
        '/^~/components/', // sexto grupo: todas os meus componentes
        ['parent', 'sibling', 'index'], // sétimo grupo: qualquer arquivo pai, irmão ou filho do arquivo atual
        '/routes/', // oitavo grupo: as minhas rotas
        '/^~/', // nono grupo: todos os outros arquivos importados pelo alias configurado
        '/styles/', // último grupo: os meus estilos
      ],
      alphabetize: { order: 'asc', ignoreCase: true }, // configura as importações por ordem alfabética (crescente), ignorando maiúsculas e minúsculas
    },
  ],
}
```

Tudo pronto!

Se você configou o prettier para corrigir automaticamente sugestões de melhorias do ESLint, sempre que essa hierarquia não for respeitada, o VSCODE irá reoganizar os imports automaticamente assim que o arquivo for salvo.

---

Se quiser ver esse exemplo na prática, você pode dar uma olhadinha no template que eu criei para projetos React clicando [aqui](https://github.com/coderamos/template-reactjs).

Lá eu já configurei o ESLint, Prettier e outras coisas para facilitar a estrutura inicial do seu projeto.

Comenta ai o que achou :)
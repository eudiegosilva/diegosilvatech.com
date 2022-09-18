---
title: Styled Components e seus benefícios
description: As principais vantagens de utilizar CSS no JavaScript
image: /assets/images/articles/styled-components-e-seus-beneficios.png
date: "2020-08-17"
---

## CSS, o cara legal

> CSS é muito difícil. Se te dizem o contrário, é porque só querem te deixar feliz

Eu me lembro de quando vi essa frase em um dos cursos do [Willian Justen](https://twitter.com/Willian_justen). Devo ter parado por cinco minutos enquanto refletia sobre o quão verdadeira ela é.

Não me leve a mal. É bem legal trabalhar com CSS e muitas vezes temos muito prazer em conseguir criar nossos ~~desenhos~~ componentes e páginas com essa tecnologia, mas o CSS também tem vários problemas.

Se não nos preocuparmos em minimizar os problemas de CSS e não fizermos o trabalho de prevenção contra más práticas no nosso código, a media que a aplicação cresce, os problemas e as más práticas crescem junto.

> Manter padrões é chato, demorado e custa caro, mas só se você fizer da forma errada

É muito difícil que um único programador conheça todos os componentes de uma aplicação, principalmente quando esses sofrem atualizações constantes. Agora imagine um repositório que é mantido por cinco equipes, cada equipe pelo menos quatro desenvolvedores, cada desenvolvedor com práticas e senioridades diferentes.

Ainda bem que existem ferramentas incríveis para facilitar a padronização de código dos nossos projetos, como o ESLint, Prettier e EditorConfig. Essas ferramentas alinhadas a rotinas de `pre-commit` e `pre-push`, facilitam muito a padronização de código e o processo de **code review**. Mas isso é assunto para outro post.

> CSS **não está** a frente do seu tempo

O CSS, está evoluindo. Já temos funcionalidades bem legais, como por exemplo a possibilidade de utilizarmos variáveis dentro do CSS, mas mesmo com algumas funcionalidades novas, ainda temos alguns problemas.

![amazing gif](https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif)

> **No começo**: vou arrumar aqui, e... ops quebrou ali..., hummm é só arrumar aqui e ali...
>
> **No fim**: parece que estou no começo

## Problemas conhecidos

Alguns dos principais problemas de CSS são:

- **COLISÃO DE ESTILOS**

Como o CSS não é definido por componente ou por página, ele é carregado para o nosso site e o estilo é aplicado sobre todo o HTML visível. Quando precisamos importar alguma biblioteca, pode acontecer que essa biblioteca possua as mesmas classes ou possua uma especificidade maior que acaba colidindo com o nosso código, gerando alguns problemas no estilo da nossa aplicação.

- **CÓDIGO NÃO UTILIZADO**

Muitas vezes escrevemos o CSS pensando em várias formas de representar um componente, como por exemplo, botões de diferentes formas. Precisamos carregar o CSS de todos os estilos, mas não necessariamente precisamos utilizar todos os estilos em na mesma página. Com isso, acabamos carregando todos os estilos de botões que não serão utilizados ali. Isso trás mais problemas para o _client_ que acaba gastando mais banda sem necessidade.

- **DIFICULDADE NA MANUTENÇÃO**

Muitas vezes quando precisamos atualizar um estilo, acabamos quebrando outro estilo em outra parte do código que não tem nada a ver com o primeiro estilo. Isso faz com que a manutenção seja muito mais custosa do que deveria ser e precisamos ficar "cavando" muito código para não corremos o risco de quebrar algo que não deveria ser quebrado.

> Less, Sass, Stylus. Como vivem? O que comem?

Os pré-processadores estão aí e ajudam muito, principalmente com a possibilidade de utilizar variáveis no CSS (recurso que antes não existia no css, mas agora existe) e com a facilidade em trabalhar com aninhamento de estilos (cascatas), mas continuaram com os problemas clássicos, além de abrir margem para **péssimas práticas**, como por exemplo o aninhamento excessivo:

```scss
// aninhado
section {
  nav {
    ul {
      li {
        a {
        }
      }
    }
  }
}

// em linha
nav ul li a { ... }
```

Quem nunca viu um código `scss` com todo esse aninhamento, não é mesmo?

![deselegante](https://media.giphy.com/media/dCB56ll26OPsdTg7ou/giphy.gif)

Esse aninhamento não é uma boa prática, porque você acaba criando uma especificidade enorme para esse componente, e consequentemente se quisermos alterar esse estilo em algum outro lugar, precisaremos deixar esse código ainda mais específico, muitas vezes precisando inserir um `id` ou mais um `seletor`, ou até mesmo um `!important`, o que não é nada legal.

![!important is wrong](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEre0SNjz-tMDNBR7PeGEeqc2B6htOB6-MKA&usqp=CAU)

## STYLED-COMPONENTS, seu amiguinho

Styled Components é uma biblioteca que, através de um conjunto de práticas, resolve problemas complexos do CSS.

As principais vantagens na utilização do **styled-components** são:

- **CRITICAL CSS AUTOMÁTICO**

O styled-components monitora quais componentes são renderizados em uma página e só injeta os estilos desses componentes, de forma totalmente automática. Isso significa que o _client_ carrega a menor quantidade de código necessária para a renderização.

- **SEM BUGS COM NOMES DE CLASSES**

O styled-components gera nome de classes únicas para cada estilo. Mesmo que elementos possuam a mesma classe, não sofrerão coesão de estilos. Por exemplo:

```jsx
  // button/index.js
  <Button className="primary" />

  // public/index.html
  <button class="sc-fznLPX jckqBg primary" />
```

- **REMOÇÃO DE CSS NÃO UTILIZADO**

É responsabilidade do componente criar ou importar o seu estilo do arquivo de estilos. Se o componente não for utilizado, nada do seu CSS será carregado na página.

Todo o componente deletado da página também terá o seu CSS deletado.

- **ESTILOS DINÂMICOS**

É possível alterar o estilo dos componentes através das `propriedades` e `temas` recebidos.

Exemplo:

Passando a propriedade `outlined` para o componente Button:

```jsx
// button/index.js
<Button outlined>Edit profile</Button>
```

Alterando o estilo o componente Button através da propriedade passada:

```jsx
// button/styles.js
export const Button = styled.button`
  background-color: ${props =>
    props.outlined ? 'transparent' : `${props.theme.colors.primary}`};
`
```

Como podemos observar, estou verificando se o componente Button possui a propriedade `outlined`. Se sim, então aplico o `background-color` como transparente. Se não possuir, aplico no `background-color` o valor da propriedade `colors.primary`, definida no arquivo `theme.js`.

Ainda vou escrever como configurar um tema utilizando styled-components e colocaquei o link aqui.

- **VENDOR PREFIXING AUTOMÁTICO**

Propriedades como `-webkit`, `-moz-`, `-ms` e `-o-` não precisam ser mais inseridas, pois o `styled-components` faz esse trabalho de forma automática.

```jsx
/* com styled-components */
export const Container = styled.section`
  transition: all 2s linear;
`
```

```css
/* sem styled-components */
.container {
  -moz-transition: all 2s linear;
  -ms-transition: all 2s linear;
  -o-transition: all 2s linear;
  -webkit-transition: all 2s linear;
  transition: all 2s linear;
}
```

![wonderful](https://media.giphy.com/media/dycoeyAvTEkaKgvcWT/giphy.gif)

- **MANUTENÇÃO SIMPLIFICADA E SEM DOR**

O estilo que está sendo alterado corresponde somente ao componente que o importa.

---

Styled Components é incrível, não é mesmo?

[Nesse repositório](https://github.com/coderamos/template-reactjs) você pode observar como eu utilizei `styled-components` de forma bem simples.

Comenta aí se você já utiliza `styled-components`.

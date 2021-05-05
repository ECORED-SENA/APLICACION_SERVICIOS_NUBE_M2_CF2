<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Uso de identificadores y palabras reservadas
    .row
      .col-lg-4
        figure
          img(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        p En la elaboración de diagramas de flujo o algoritmos muchas veces se necesitan datos auxiliares, a continuación, se definen algunos de estos tipos de datos auxiliares.
          br
          br
          |Los identificadores son nombres que se dan a los elementos utilizados para resolver un problema y poder diferenciar unos de otros. De acuerdo con López (2009), al asignar nombres (identificadores) a variables, constantes y procedimientos se deben tener en cuenta algunas reglas, a saber:
    .tarjeta--cian.p-5.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-chart-pie
          | Pueden estar formados por una combinación de letras y números (saldoMes, salario, fecha2, etc.).
        li 
          i.fas.fa-chart-pie
          | El primer carácter de un nombre debe ser una letra.
        li 
          i.fas.fa-chart-pie
          | La mayoría de los lenguajes de programación diferencian las mayúsculas de las minúsculas.
        li 
          i.fas.fa-chart-pie
          | Los nombres deben ser nemotécnicos, con solo leerlos se puede entender lo que contienen. 
        li 
          i.fas.fa-chart-pie
          | Deben ser muy descriptivos; no utilizar abreviaturas, a menos que se justifique.
        li 
          i.fas.fa-chart-pie
          | Es conveniente utilizar una sola palabra para nombrar páginas, controles, variables, etc.
        li 
          i.fas.fa-chart-pie
          | No utilizar caracteres reservados (%, +, /, >, etc.) tampoco letras acentuadas (á, é, í, ó, ú).
        li 
          i.fas.fa-chart-pie
          | No utilizar palabras reservadas por los lenguajes de programación.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 Ejemplo: listar los identificadores usados en los algoritmos previos.
    p.my-5 
      span.etiqueta--amarilla 
        b  Solución:
      | &nbsp en el algoritmo de imprimir un número entero usando el identificador de 
      b entrada 
      b-none para representar el número digitado.
      br
      br
      |En el algoritmo de imprimir el cuadrado y el cubo de un número entero empleando el identificador de 
      b entrada 
      b-none para representar el número digitado, el identificador cuadrado para representar el valor del cuadrado de entrada y el identificador 
      b cubo 
      b-none para almacenar el cubo entrada.
      br
      br
      |Todos los lenguajes de programación tienen unas palabras para nombrar sus comandos, instrucciones y funciones; estas palabras no se pueden usar como indicadores.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="a. Variables")
        p.px-5.mb-5 Para los algoritmos con diversos conjuntos de datos iniciales, se debe determinar una independencia entre los datos iniciales de un problema y la estructura de su solución. Esto se hace mediante la utilización de variables (cantidades que se suelen emplear y que durante la ejecución del algoritmo pueden tomar cualquier valor de un intervalo de valores posibles).
          br
          br
          |Las variables son espacios de trabajo (contenedores) dispuestos para almacenar datos (valores). El valor de una variable puede ir cambiando en   algún paso del algoritmo o permanecer sin cambios; por lo tanto, el valor de una variable es el del último valor o dato asignado a esta. En la  figura 6, las variables eran los indicadores 
          b cuadrados 
          b-none y 
          b cubo.
      .row(titulo="b. Constantes")
        p.px-5.mb-5 Las constantes se crean de la misma forma que las variables, a diferencia que se procura su definición o creación a inicio del algoritmo. Las constantes consisten en datos que, luego de ser asignados, no cambian en ninguna instrucción del algoritmo; pueden contener constantes matemáticas (pi).
      .row(titulo="c. Contadores")
        p.px-5.mb-5 Un contador es una variable que está en ambos lados de una asignación (a la derecha y a la izquierda) interna, a la que se le suma un valor constante. Es necesario haberla iniciado al principio del algoritmo, ya que va a ser leído su contenido.
        .cajon--azul.p-4.mb-5
          .row.mx-auto
            .col-1
              figure.d-none.d-xl-block.d-xxl-block
                img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
            .col-auto.my-auto
              .h5 Ejemplo: definir un contador llamado contador que se incremente en uno cada vez tres veces.
        figure.mb-3
          img(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen' style='width: 80%').m-auto
          figcaption.mt-3 Figura 8. Contador en un algoritmo
        p.px-5.mb-5 Como se puede ver en el algoritmo, tres veces se incremente en 1 (uno) el valor del contador y al final de la ejecución su valor es de 3. Es importante notar que contador inicia con un valor, el valor 0, si esta asignación inicial no se hace el computador pondría un valor aleatorio y el valor al final del algoritmo sería indeterminado.

  
      .row(titulo="d. Acumuladores")
        p.px-5.mb-5 Los acumuladores son una versión ampliada de contadores, tienen las mismas características que un contador excepto el valor que se va incrementando no es una constante sino una que es un valor variable.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

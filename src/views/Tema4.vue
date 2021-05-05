<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Operadores y jerarquía en los operadores
    figure.my-5
      img(src='@/assets/curso/img32.jpg', alt='Texto que describa la imagen')
    p Los operadores son símbolos que sirven para manipular datos. Y en un algoritmo es necesario dejar un espacio en blanco a cada lado del signo aritmético. Los operadores y las funciones que realizan se clasifican como se indica a continuación:
    .contenedor-listas.my-5.mx-auto
      ul.lista-ul--separador
        li 
          i.fas.fa-circle
          p
            b  Aritméticos: 
            b-none  permiten realizar operaciones entre datos de tipo numérico y dan como resultado otro valor de tipo numérico. Ejemplo: producto o multiplicación (*); división (/); suma (+); resta (-); asignación (=).
        li 
          i.fas.fa-circle
          p
            b  Alfanuméricos: 
            b-none  permiten operar con datos de tipo carácter (letras) o cadenas de texto. La mayoría de los lenguajes de programación admiten el operador + para realizar la concatenación (unión) de caracteres o cadenas.
        li 
          i.fas.fa-circle
          p
            b Relacionales:
            b-none  permiten la comparación entre datos del mismo tipo de dato y dan como resultado dos valores posibles: verdadero o falso. Ejemplo: igual a (=); menor que (<); mayor que (>,) mayor e igual que (>=).
        li 
          i.fas.fa-circle
          p
            b  Lógicos: 
            b-none  posibilitan la evaluación lógica de dos expresiones de tipo lógico. Dan como resultado uno de dos valores posibles: verdadero o falso. Ejemplo: negación (no); conjunción (y); disyunción(o).
    .h5 A. Jerarquía en los operadores
    p Las computadoras ejecutan los operadores en un orden establecido y el siguiente es el orden (jerarquía) para ejecutar operadores:
    .contenedor-listas.my-5.mx-auto
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Paréntesis (se ejecutan primero los más internos).
        li 
          .lista-ol--cuadro__vineta
            span 2
          | Signo (-2), si un valor es positivo o negativo.
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Potencias (^) y Raíces (sqrt); Productos y Divisiones (* y /), en este mismo orden.
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Sumas y Restas (+ y -).
        li 
          .lista-ol--cuadro__vineta
            span 5
          | Concatenación (+).
        li 
          .lista-ol--cuadro__vineta
            span 6
          | Relaciónales (=, <, >).
        li 
          .lista-ol--cuadro__vineta
            span 7
          | Negación (no).
        li 
          .lista-ol--cuadro__vineta
            span 8
          | Conjunción (y).
        li 
          .lista-ol--cuadro__vineta
            span 9
          | Disyunción (o).
    P El siguiente ejemplo permite comprender mejor la jerarquía de operadores: 
    .tabla-b.my-5
      
      table
        thead.encabezado-tabla
          tr
            th Orden
            th Operación
            th Explicación y expresión resultante
        tbody
          tr
            th 1
            td 7 + 8
            td Primero que todo lo que más valor tiene en la jerarquía son los paréntesis de manera que y en particular los más interiores de esta forma el computador se interesará en resolver primero el contenido de 
              b (7 + 8). 
              b-none Y el resultado será 
              b 15.
              b-none
              br 
              br
              |De esta forma, la expresión queda reducida a:
              br
              b (2 + 15 * 16 + 3^2) /4 +5
          tr
            th 2
            td 3^2
            td De la expresión resultante luego de la operación 
              b 1, 
              b-none se observa que nuevamente hay un paréntesis por reducir, de manera que la computadora intentará resolver su contenido primero, como dentro del paréntesis está la expresión de elevar al cuadrado el número 
              b 3 (3^2) 
              b-none que tiene como resultado 9, la expresión resultante sería:
              br 
              b (2 + 15 * 16 + 9) /4 +5
          tr
            th 3
            td 15 * 16
            td De los paréntesis de la expresión resultante la operación de más jerarquía es la multiplicación 
              b 15 * 16 
              b-none que tiene como resultado 
              b 240, 
              b-none la expresión resultante sería:
              br 
              b (2 + 240 + 9) /4 +5
          tr
            th 4
            td 2+24+9
            td De la expresión resultante el que tiene mayor precedencia es el paréntesis por lo tanto la suma aritmética de su contenido data como expresión resultante:
                br
                b 251/4 +5
          tr
            th 5
            td 251/4
            td De la expresión resultante el operador de mayor jerarquía es la división y da como resultado 
              b 62.75 
              b-none que en la siguiente operación se le sumará el valor de 
              b 5 
              b-none la expresión resultante será:
                br
                b 62,75 +5
          tr
            th 6
            td 62,75 +5
            td 67,75
        caption Tabla 1  - Orden de ejecución de una expresión matemática
    p A continuación, se revisan dos ejemplos:
    TabsB.my-5
      .py-4.py-md-5(titulo="Ejemplo 1" :icono ="require ('@/assets/curso/img33.svg')")
        p Una computadora debe ejecutar las siguientes operaciones, se debe escribir en el orden que la computadora ejecutará las operaciones de la siguiente expresión matemática: 
          b (2 + (7 + 8) * 16 + 3^2) /4 +5.
          br
          br
          |Solución: primero que todo, lo que más valor tiene en la jerarquía son los paréntesis de manera que y en particular los más interiores, de esta forma la computadora se interesará en resolver primero el contenido de 
          b (7 + 8).
      .py-4.py-md-5(titulo="Ejemplo 2" :icono="require('@/assets/curso/img34.svg')")
        p Escribir la siguiente ecuación como una expresión que la computadora pueda interpretar en el orden adecuado. 
        .imagen-texto.m-auto
            img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen' style='width:82px').m-5
            p.my-auto.d-block sqrt (6^2/2 + 7) / 8^2
        

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 7
      .h3 Programación modular
    figure.mb-5
      img(src='@/assets/curso/img59.jpg', alt='Texto que describa la imagen')
    p Existe un área que se denomina ingeniería del software, que se interesa en el proceso de creación o producción de software y concentra sus esfuerzos en aportar herramientas, procedimientos y técnicas para su construcción.
      br
      br
      |La ingeniería del software propone que la construcción de software esté pensada en la descomposición de un problema en un conjunto de subproblemas independientes entre sí, más sencillos de analizar y resolver; estos subproblemas pueden ser tratados separadamente unos de otros. Lo anterior consiste, básicamente, en la modularidad del software.
      br
      br
      |Debido a la modularidad se pueden probar los subprogramas o módulos de manera independiente, depurando errores antes de su uso en el programa principal y almacenándose para su posterior reutilización cuantas veces se necesite.
      br
      br
      |El enfoque básico de modularidad en un algoritmo puede estar compuesto de otros algoritmos que se especializan en una función determinada. Para saber cómo descomponer un algoritmo en pequeños algoritmos, se listan los aspectos que pueden ayudar a definir la división de algoritmos:
    AcordionA.my-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="a. Según la funcionalidad: ")
        p.px-5.mb-5 Un algoritmo debe realizar una función específica y no ir más allá de sus responsabilidades. Por ejemplo, si se tiene un módulo que calcula la multiplicación de dos números y devuelve el resultado, no sería adecuado que, además, imprima mensajes en pantalla o haga otra cosa diferente de su propósito.
      .row(titulo="b. Según su identificación: ")
        p.px-5.mb-5 Cada módulo tiene un nombre de identificación que permite ejecutarlos y diferenciarlos de otros, es recomendable que al elegir este nombre que sea representativo de la función que realiza, de esa forma resulta intuitivo en el momento de usarlo dentro de un algoritmo.
      .row(titulo="c. Según sus datos de entrada:")
        p.px-5.mb-5 Los módulos comúnmente reciben datos de entrada necesarios para realizar las operaciones requeridas. Se pueden clasificar los módulos de acuerdo con los parámetros que se requieren para obtener los resultados solicitados. Al momento de usar el módulo se tienen que agregar todos los parámetros necesarios, en el orden establecido y deben ser del tipo correcto.
      .row(titulo="d. Parámetro de salida: ")
        p.px-5.mb-5 También se puede emplear los resultados a la salida del algoritmo para clasificar los módulos, ya que en el momento de definir un algoritmo se debe indicar el tipo de dato que devuelve al momento de la ejecución del algoritmo.
      .row(titulo="e. Pruebas de escritorios:")
        p.px-5.mb-5 Como se mencionó antes, las pruebas escritorio sirven para depurar y probar que un algoritmo solucione el problema, en esta sesión se mencionarán los objetivos principales y se ejecutará una prueba a un algoritmo de mejor complejidad para su comprensión.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 Ejemplo: realizar un algoritmo que solicite dos números e imprima cuál es el mayor de ambos, si son iguales, mostrar cualquiera.
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        
          ul.lista-ul
            li 
              i.fas.fa-circle
              p
                b  Formular el problema:
                b-none  es un algoritmo que solita y compara dos números para mostrar el mayor.
            li 
              i.fas.fa-circle
              p
                b  Resultados esperados:
                b-none    el número que es mayor de ambos.
            li 
              i.fas.fa-circle
              p
                b  Datos disponibles:
                b-none   2 números ingresados por el usuario
            li 
              i.fas.fa-circle
              p
                b  Datos adicionales:
                b-none     ninguno.
            li 
              i.fas.fa-circle
              p
                b  Restricciones:
                b-none   validar cuál número es mayor para saber cuál mostrar.
            li 
              i.fas.fa-circle
              p
                b  Procesos necesarios: 
                b-none  se requiere definir los datos a recibir, pedirle que al usuario que digite los números, comparar para saber cuál es el mayor y mostrarlo. 
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img60.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img61.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 20. Estructura  Algoritmo el mayor de dos números
        p.mb-5
          b Diseño de prueba 1
          br
          | Selección de datos: se usarán para la prueba los números 34 y 16.
          br
          |Salida esperada: debe mostrar el número 34.

        figure.mb-5
              img(src='@/assets/curso/img62.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 21. Prueba de escritorio de algoritmo el mayor de dos números
    p Una prueba de escritorio no es determinante en este ejercicio, es necesario hacerla para los dos casos faltantes, en caso que el segundo número es mayor que el primero y el caso en que ambos números ingresados son iguales. Se propone que use el ejemplo de la figura 18 para realizar el desarrollo final del ejemplo.
    

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

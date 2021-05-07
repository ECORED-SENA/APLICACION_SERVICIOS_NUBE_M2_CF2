<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 5
      .h3 Estructuras de control secuencial
    p Una estructura es definida como un esquema con determinada distribución y orden que permite representar una idea de forma simplificada. La estructura de control secuencial es la más sencilla y es conocida como estructura lineal. Se compone de instrucciones que deben ejecutarse en forma consecutiva, una tras otra, siguiendo una línea de flujo. Los problemas más sencillos pueden resolverse haciendo uso únicamente de esta estructura. Por lo general, la estructura secuencial forma parte de soluciones a problemas complejos, en las que se la utilizan otras estructuras iterativas (repetir varias veces un conjunto de instrucciones) y condicionales (López, 2009).
      br
      br
      |La siguiente figura muestra la estructura general del algoritmo más básico.
    figure.my-5
      img(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen' style='width:550px').m-auto
      figcaption.mt-3.w-50.p-3.m-auto Figura 9. Modelo de estructura secuencial
    #t_5_1
    .titulo-segundo.mt-5
      .h4 5.1. Ejemplo estructura de control secuencial
    p Escribir un algoritmo para calcular el área de cualquier triángulo rectángulo, en él se debe pedir al usuario que ingrese los valores de la altura y la base del triángulo
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        
          ul.lista-ul
            li 
              i.fas.fa-circle
              p  <b>Formular el problema:</b> 
                |está claramente planteado y consiste en calcular el área de un rectángulo.
            li 
              i.fas.fa-circle
              p <b>Resultados esperados:</b> 
                | se espera que el algoritmo sea capaz de calcular el área del rectángulo y mostrar en la pantalla el resultado de ese cálculo.
            li 
              i.fas.fa-circle
              p <b>Datos disponibles:</b> 
                |dos datos números que son la base y la altura del triángulo (se deben solicitar al usuario). El aprendiz debe preguntarse si sus conocimientos actuales de matemáticas le permiten resolver este problema, de no ser así, tendrá que plantear una estrategia para obtener los conocimientos requeridos. Para este ejemplo recordar que un triángulo rectángulo es aquel que uno de sus lados tiene un ángulo recto (90 grados).
            li 
              i.fas.fa-circle
              p <b>Restricciones: </b>
                | los valores de base y altura son variables y se deben solicitar al usuario.
            li 
              i.fas.fa-circle
              p <b>Procesos necesarios: </b>
                | definir variables; asignar el valor 2 a la constante usando para dividir (divisor); solicitar al usuario el valor de la altura del triángulo; solicitar al usuario el valor de la base; aplicar la fórmula de área; mostrar el resultado.
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        p El algoritmo resultado del análisis se puede ver en la figura 8, en la que están representados tanto el diagrama de flujo como en pseudocódigo, mientras se está aprendiendo a diseñarlos, es importante hacerlos algoritmos en diagrama de flujo y en la medida que se va adquiriendo experticia con la representación de pseudocódigo es más conveniente hacer esta representación en razón de la velocidad a la hora de diseñarlo.
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img38.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 10. Diagrama al área de un triángulo
    hr.mb-5
    p Del diagrama de flujo y el pseudocódigo se puede notar lo siguiente: el identificador de área no tiene tilde por la razón antes mencionada, el tipo de dato REAL hace referencia a que es un número que no solamente puede contener un número entero, sino también un valor con cifras decimales.
    #t_5_2
    .titulo-segundo.mt-5
      .h4 5.2. Estructura condicional
    .row
      .col-lg-4
        figure
          img(src='@/assets/curso/img39.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        p Es importante prestar atención a las estructuras que utilizan para resolver problemas y poderlas reconocer para lograr mayor control sobre la solución planteada. 
          br
          br
          |La estructura condicional se emplea para indicarle al computador que debe evaluar una condición y, según el resultado, ejecutar el bloque de instrucciones. La forma más común está compuesta por una condición que se evalúa y dos bloques de instrucciones que se ejecutan: uno cuando la condición es verdadera y otro cuando la condición es falsa.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 Ejemplo: un aprendiz aprueba un examen cuando la calificación de este es mayor o igual a 3. Elaborar un algoritmo que pida al usuario una calificación, aplicar el criterio de aprobación e imprimir “Aprobado” o “Reprobado”, según sea el caso.
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        
          ul.lista-ul
            li 
              i.fas.fa-circle
              p  
                b Formular el problema: 
                b-none  es un problema sencillo de condición con dos operaciones o condición doble.
            li 
              i.fas.fa-circle
              p
                b  Resultados esperados:
                b-none  un aviso que reporte si el estudiante obtiene “Aprobado” o “Reprobado” el examen.
            li 
              i.fas.fa-circle
              p
                b  Datos disponibles:
                b-none    la calificación ingresada por el usuario. Para aprobar, la nota debe ser mayor o igual a 3.
            li 
              i.fas.fa-circle
              p
                b  Restricciones:
                b-none    aplicar el criterio de aprobación (calificación mayor o igual a 3).
            li 
              i.fas.fa-circle
              p
                b  Procesos necesarios: 
                b-none   solicitar al usuario que ingrese la calificación. Evaluar si la calificación es igual o superior a 3; en caso de ser verdadero, reportar “Aprobado”; en caso contrario, reportar “Reprobado”.
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        p  • Diseño:  en anterior análisis se contemplaron los datos de entrada, datos auxiliares (variable) operaciones (impresión en pantalla, lectura de datos e impresión en pantalla de resultados). Pero son muchas las palabras usadas en el análisis por lo tanto lo abreviamos con el siguiente código 	que, posteriormente, se explicará.
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img41.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 11. Estructura condicional doble
    hr.mb-5
    p En la figura 11 se observa cómo se introduce la calificación por teclado, tanto en el diagrama de flujo (con la representación de trapecio) o el pseudocódigo con la preposición 
      b LEER, 
      b-none luego este valor se compara en un condicional, en el diagrama de flujo con la representación de un rombo, mientras que en el pseudocódigo se una la preposición SI, seguido de las preposiciones que se han de ejecutar en caso de que la condición sea verdadera (note que está escrita más a la derecha). También se usa la preposición 
      b SI NO 
      b-none para identificar el inicio de bloque de instrucciones a ejecutar si no se cumple la condición y la preposición 
      b FINSI 
      b-none para indicar que no hay más intrusiones que ejecutar si se cumple o no la condición.
    br
    br
    |Como la condición evalúa dos condiciones si se cumple o no, y en cada caso existe un bloque de instrucciones (o alimenta una instrucción) a seguir se llama: ESTRUCTURA CONDICIONAL SIMPLE, la figura 9 corresponde a una de estas condicionales dobles, ya que si la condición se cumple escribe algo y si no se cumple también hace otra operación.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 Ejemplo: escribir un algoritmo en donde se pida la edad del usuario; si es mayor de edad debe aparecer un mensaje indicándolo.
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        
          ul.lista-ul
            li 
              i.fas.fa-circle
              b  Formular el problema:
              b-none es un problema sencillo solo consiste en usar una sentencia de repetición.
            li 
              i.fas.fa-circle
              b  Resultados esperados:
              b-none   el mensaje “Esto es un algoritmo” 7 veces impreso en pantalla.
            li 
              i.fas.fa-circle
              b  Datos disponibles:
              b-none   constante con el número de repeticiones (7).
            li 
              i.fas.fa-circle
              b  Restricciones:
              b-none   ninguna.
            li 
              i.fas.fa-circle
              b  Procesos necesarios: 
              b-none  necesarios: hacer que se imprima en pantalla el mensaje 7 veces
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img43.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img44.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 12. Estructura condicional simple
    hr.mb-5
    p Como observa en la figura 12, no se ejecuta nada en caso de que NO se cumpla la condición. Este tipo de estructura condicional se denomina ESTRUCTURA CONDICIONAL SIMPLE; además, todo el proceso (pedir la edad, comprobar la condición, mostrar o no el mensaje) se realiza una única vez y finaliza la ejecución del algoritmo, si se deseara que el programa repitiera estas mismas operaciones más de una vez, se tendría que usar una estructura de iteración como se verá a continuación.
    #t_5_3
    .titulo-segundo.mt-5
      .h4 5.3. Estructuras de iteración o repetitivas
    .row.my-5
      .col-lg-4
        figure
          img(src='@/assets/curso/img42.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        p Las estructuras iterativas o de repetición permiten ejecutar una o varias instrucciones, un número determinado de veces o indefinidamente hasta que se cumpla una condición. Esta estructura ayuda a simplificar los algoritmos.
        br
        br
        |En programación existen, como mínimo, dos tipos de estructuras repetitivas las cuales tienen variantes en los diferentes lenguajes de programación.
        br
        br
        |La característica común es que ambos tipos permiten ejecutar una o varias instrucciones:
        .cajon--azul2.p-4.my-5.mb-lg-0
          ul.lista-ul
            li.text-center
              i.fas.fa-circle
              b Un número conocido de veces (Estructura PARA o FOR en inglés).
            li.text-center
              i.fas.fa-circle
              b Mientras se cumpla una condición (Estructura MIENTRAS o WHILE).
    .h5 5.3.1. Estructura PARA (FOR)
    p Esta estructura se usa cuando se sabe el número de veces que se debe ejecutar un conjunto de operaciones.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 EJEMPLO: escribir un procedimiento que muestre siete (7) veces en pantalla la frase “Esto es un algoritmo”. Mostrar en pantalla la salida del en el computador.
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        
          ul.lista-ul
            li 
              i.fas.fa-circle
              p
                b  Formular el problema:
                b-none  es un problema sencillo solo consiste en usar una sentencia de repetición.
            li 
              i.fas.fa-circle
              p
                b  Resultados esperados:
                b-none   el mensaje “Esto es un algoritmo” 7 veces impreso en pantalla.
            li 
              i.fas.fa-circle
              p
                b  Datos disponibles:
                b-none   constante con el número de repeticiones (7).
            li 
              i.fas.fa-circle
              p
                b  Restricciones:
                b-none   ninguna.
            li 
              i.fas.fa-circle
              p
                b  Procesos necesarios: 
                b-none  hacer que se imprima en pantalla el mensaje 7 veces
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img45.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img46.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 13. Estructura de repetición FOR
    hr.mb-5
    .row
      .col-lg-2
        p La salida en pantalla sería:
      .col-lg-10
        .tr-blue.p-5
          p
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
    p.mt-5 Como se puede ver en el algoritmo de la figura 13, existe una variable i tendrá el valor 1, 2, 3 ... hasta 7, esta variable, se puede usar dentro del el bloque 
      b PARA 
      b-none hasta 
      b FINPARA.
      br
      br
      |Ahora se presenta un ejemplo un poco más elaborado.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 Ejemplo: se necesita elaborar un algoritmo que solicite al usuario un número entero y sume todos los números naturales que hay hasta ese número. Por ejemplo, si el usuario digita 3, el programa debe sumar: 1 + 2 + 3, si el usuario digita 5 el programa debe sumar 1+2+3+4+5. Al finalizar debe imprimir el resultado.
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        
          ul.lista-ul
            li 
              i.fas.fa-circle
              b  Formular el problema:
              b-none necesita la sumatoria de los números en secuencia natural.
            li 
              i.fas.fa-circle
              b  Resultados esperados:
              b-none   la suma de los números en sucesivos de uno hasta el número digitado por el usuario.
            li 
              i.fas.fa-circle
              b  Datos disponibles:
              b-none   el dato entero que digita el usuario es la entrada.
            li 
              i.fas.fa-circle
              b  Datos adicionales:
              b-none    se necesita un acumulador donde ir guardando el valor de las sumas sucesivas.
            li 
              i.fas.fa-circle
              b  Restricciones:
              b-none   ninguna.
            li 
              i.fas.fa-circle
              b  Procesos necesarios: 
              b-none  definir un acumulador con valor inicial cero, imprimir para que el usuario sepa que debe digitar un número (“Escriba el número”), Leer del teclado el número del usuario, sumar cada vez el dato que se va incrementando de uno en uno al valor digitado por el usuario.  
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img47.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img48.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 14. Estructura de repetición FOR acumulador suma
    hr.mb-5
    p.mb-5 En la anterior figura se muestra el algoritmo en sus dos representaciones más comunes, se propone en secciones posteriores hacer una prueba de escritorio a este problema. 
    .h5 5.3.2. Estructura MIENTRAS (WHILE)
    p La instrucción "Mientras", puede impedir la ejecución de un conjunto de instrucciones, si la evaluación de una condición lógica es falsa. Esto significa que es repetitiva únicamente cuando la evaluación de la condición es verdadera.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 Ejemplo: realice un programa que permita obtener la factorial de un número dado por el usuario.
    p.my-5
      span.etiqueta--amarilla  
        b • Análisis: 
      br 
      b Formular el problema: 
      b-none la factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n.
      br
      br
      |Ejemplo: ¡Matemáticamente 5! = 5*4*3*2*1 o a la inversa: 5! = 1*2*3*4*5.
      br
      br
      b Resultados esperados: 
      b-none la factorial del número digitado por el usuario.
    figure
              img(src='@/assets/curso/img49.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 15 - Proceso de factorial
    p.my-5 En la anterior figura se observa que es preciso ir incrementando el valor en 1 (valor constante - contador -) hasta que llegue al número 5 (datos suministrados por el usuario); es decir, 1*2 = 2, este resultado se multiplica por 3 (2 * 3 = 6), 6 se multiplica por 4 (6 * 4 = 24), finalmente también 24 se multiplica por 5 y se obtiene la factorial (24 * 5 = 120), de esta forma, los resultados de las multiplicaciones se van acumulando hasta obtener la factorial. 
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        
          ul.lista-ul
            li 
              i.fas.fa-circle
              b  Datos disponibles:
              b-none    el dato entero que digita el usuario es la entrada.
            li 
              i.fas.fa-circle
              b  Datos adicionales:
              b-none    se requiere de un acumulador donde ir guardando el valor de las multiplicaciones sucesivas, también un contador para ir contando el número secuencial (como lo hace el número i en el ciclo PARA).
            li 
              i.fas.fa-circle
              b  Restricciones:
              b-none   la repetición se detiene cuando
            li 
              i.fas.fa-circle
              b  Procesos necesarios: 
              b-none  definir un acumulador con valor inicial cero, imprimir para que el usuario sepa que debe digitar un número (“Por favor el número”), leer del teclado el número del usuario, multiplicar cada vez el dato que se va incrementando de uno en uno al valor digitado por el usuario. 
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img50.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img51.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 16. Algoritmo factorial ciclo mientras
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Metodología de algoritmos
    .row
      .col-lg-4
        figure
          img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        p De manera implícita, en las distintas áreas productivas de la sociedad se usan algoritmos y un par de ejemplos pueden ser que, en la construcción de una casa, el ingeniero o el arquitecto analiza el terreno, diseña unos planos, realiza maquetas y así continúan siguiendo una secuencia lógica de procesos, para la resolución del problema; o un abogado que antes de defender a un cliente analiza las pruebas, elabora un plan, practica sus argumentos y sigue un método para lograr la defensa de su cliente. Se puede concluir, entonces, que una solución a la medida de un problema requiere una metodología que lleve a la solución final.
          br
          br
          b En el proceso de desarrollo de programas informáticos, aparte de conocer esta metodología, se necesita conocer las funciones que puede realizar un computador y la representación de las mismas. 
          br
          br
          |En general, existen tres (3) fases secuenciales para la elaboración de un algoritmo representadas en la siguiente figura y de las cuales se abordarán las dos primeras:
    figure.my-5
      img(src='@/assets/curso/img2.svg', alt='Texto que describa la imagen')
      figcaption.mt-3 Figura 1. Metodología de creación de algoritmos
    #t_1_1
    .titulo-segundo
      .h4 1.1. Análisis
    .row
      .col-md-1
        figure.d-none.d-xl-block.d-xxl-block
          img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen' style='width: 80px')
      .col-md-11
        p Como se percibió en componentes anteriores, la fase de análisis trata de responder a la pregunta: 
          b ¿Qué es lo que se debe hacer?, 
          b-none y esto es necesario para entender el problema. Por ello, es preciso relacionar los datos de entrada, salida o resultados con los procesos a ejecutar con esta información y los datos auxiliares que se puedan requerir en las tareas.
    .row.my-5
      .col-lg-7
        p Hasta este punto parece que esas son las actividades propias del análisis, sin embargo, el éxito de un algoritmo consiste en reducir a cero la brecha de lo que el cliente necesita y los resultados que el algoritmo entrega. Para lograrlo en su totalidad, 
          b es importante indagar otros aspectos que corresponden a la naturaleza del problema, 
          b-none las siguientes preguntas modeladoras son de referencia casi obligante a tener en cuenta:
      .col-lg-5
        .cajon--azul.p-4.mb-5.mb-lg-0
          .h5.text-center ¿Qué es?
          .h5.text-center ¿Quiénes intervienen?
          .h5.text-center ¿Cómo interviene o se comporta?
          .h5.text-center ¿Cuándo?
          .h5.text-center ¿Cómo lo hace?
          .h5.text-center ¿Por qué? y 
          .h5.text-center ¿Para qué?
    #t_1_2
    .titulo-segundo
      .h4 1.2. Diseño 
    .row
      .col-1
        figure.d-none.d-xl-block.d-xxl-block
          img(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen' style='width: 80px')
      .col-11
        p En esta etapa se responde, básicamente, a la pregunta 
          b ¿Cómo se va a hacer?, 
          b-none refiriéndose a la manera en la que el sistema va a realizar la tarea solicitada. Lo importante en este punto, es que debe quedar bien definido el problema, sin dar espacio a más de una interpretación de la acción o acciones que debe hacer el sistema.
    p En el proceso de desarrollo del algoritmo, las siguientes actividades son obligatorias, sobre todo si se está empezado en el diseño de soluciones basadas en algoritmos y no se cuenta con mucha experiencia:
    figure.my-5
          img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen' style='width: 496px').m-auto
    p.mb-5 Para la verificación del algoritmo, se aplica una técnica denominada   
      span.etiqueta--morada
        b pruebas de escritorio o trazas, que trata de la validación y verificación del algoritmo mediante la ejecución de las sentencias u operaciones que lo componen (proceso),
      |y así determinar sus resultados de salida a partir de una base determinada de elementos en la entrada del proceso.
      br
      br
      |Como el resultado del proceso de diseño es un algoritmo, es obligatorio saber representarlo de alguna manera, y se empleará inicialmente con la notación de pseudocódigo para hacer este tipo de representaciones.
    .h5 1.2.1. Notación de diseño: pseudocódigo
    .row.mb-3
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/img6.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        p Para expresar el contenido de un programa de computadora, se necesita de un lenguaje de programación que las computadoras pueden interpretar. Sin embargo, se puede expresar ese mismo contenido en el lenguaje natural lengua materna (español), empleando expresiones sencillas que lo simplifican y abrevian. Cuando se emplea esta técnica, se dice que está escrito en pseudocódigo.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11
          .h5 Ejemplo: el cliente pide que se desarrolle un programa de computadora que le solicite al usuario un número, luego el sistema debe mostrar en pantalla el número digitado.
    p.mt-5 
      b A continuación, se aplica la metodología vista:
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        p
          span.etiqueta--amarilla 
            b Análisis:
          | &nbsp el dato de entrada debe ser un número ingresado por el usuario, pero antes de eso el sistema debe solicitarle al usuario que lo ingrese (digite) al programa, si no, ¿de qué otra manera el usuario sabría que el programa está esperando el ingreso de ese dato? Por lo tanto, una posible operación inicial dentro del algoritmo sería escribir en pantalla que “por favor se ingrese un número”. 
          br
          br
          |La segunda operación es la de recibir ese número desde el teclado, para ingresarlo al programa, pero esto implica que se debe definir un dato intermedio donde se guardará ese valor y el cual identificará el valor ingresado (a este dato se denomina variable porque puede tener cualquier valor entero según digite el usuario). Ya ocurre el primer problema: para guardar el dato (variable) se debe definir dónde se almacenará o como podría referirse al dato ingresado dentro del programa, por lo tanto, antes de empezar el algoritmo se debe indicar al computador que reserve un espacio para guardar un número entero.
          br
          br
          |Una vez definida la variable, es posible referirse a ella, leer desde el teclado el número entero y almacenarlo en dicha variable.
          br
          br
          p Por último, el sistema debe imprimir el contenido de la variable (dato de salida), con lo cual se puede dar final al programa.
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        p
          span.etiqueta--amarilla 
            b Diseño:
          | &nbsp en anterior análisis se contemplaron los datos de entrada, datos auxiliares (variable) operaciones (impresión en pantalla, lectura de datos e impresión en pantalla de resultados). Pero son muchas las palabras usadas en el análisis por lo tanto lo abreviamos con el siguiente código 	que, posteriormente, se explicará.
        figure.my-5
          img(src='@/assets/curso/img9.png', alt='Texto que describa la imagen' style='width:600px').m-auto
          figcaption.mt-3 Figura 2. pseudocódigo imprimir un número
    p.mb-5 En   
      span.etiqueta--morada ALGORITMO 
      | se indica el nombre del algoritmo, y después se declaran las variables que serán usadas en él (con VAR) indicando su tipo de dato (un valor de tipo  
      span.etiqueta--morada ENTERO 
      |, para este ejemplo). 
      br
      br
      | Entre   
      span.etiqueta--morada INICIO   
      |y   
      span.etiqueta--morada FIN   
      | se escriben las diferentes acciones que realizará el algoritmo y usamos   
      span.etiqueta--morada ESCRIBIR()
      |para indicar con esta palabra que se mostrará un mensaje por pantalla (el texto que se va a mostrar 'tal cual' debe ir entre paréntesis dobles), 
      span.etiqueta--morada y LEER()   
      | para recibir el dato desde el teclado.
      br
      br
      | Se debe tener en cuenta que cada línea termina en punto y coma (excepto   
      span.etiqueta--morada INICIO   
      | y   
      span.etiqueta--morada FIN  
      | ), el punto y coma indica que lo que se ejecuta es una sentencia que hace una única operación, mientras que lo que está entre   
      span.etiqueta--morada INICIO  
      | y   
      span.etiqueta--morada FIN   
      | agrupa varias sentencias que se ejecutan en un orden determinado.
    .h5 1.2.2. Pruebas de escritorio o trazas
    .tarjeta.tarjeta--gris.p-4.p-md-5.mt-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/componentes/ej-01.png")
        .col-md.col-lg-6
          .titulo-segundo
            .h2 Pruebas de escritorio o trazas
          p.mb-4 Las pruebas de escritorio son las simulaciones de ejecución de un algoritmo que permite determinar la validez o efectividad del mismo. Se trata de escribir en una tabla con tantas columnas como variables tiene el algoritmo y seguir las instrucciones poniendo los valores correspondientes.

          a.boton.boton--a(:href="obtenerLink('/downloads/Infografia_Prueba_de_Escritorio.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.mt-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11
          .h5 Ejemplo: escribir un algoritmo que calcule el cuadrado y el cubo de un número introducido por teclado y mostrar los resultados para el cubo y el cuadrado.
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img7.svg')")
        p
          span.etiqueta--amarilla 
            b Análisis:
          | &nbsp nuevamente el dato de entrada debe ser un número ingresado por el usuario, y al igual que en el ejemplo anterior se debe solicitar al usuario que lo digite. 
          br
          br
          |Antes de realizar las operaciones de elevar al cuadrado y al cubo, se necesita definir las dos variables que recibirán estos datos (el cuadrado, y el cubo), por lo tanto, el algoritmo debe definirlas antes de realizar las operaciones y asignarles a ellas los resultados.
          br
          br
          |Una vez realizadas las operaciones el algoritmo debe mostrar en pantalla el contenido de estas variables, con un mensaje texto que indique si es el resultado del cuadrado o del cubo.
          
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img8.svg')")
        p
          span.etiqueta--amarilla Diseño:
          | &nbsp la siguiente figura tiene la representación del resultado al análisis anterior.
        figure.my-5
          img(src='@/assets/curso/img11.png', alt='Texto que describa la imagen' style='width:600px').m-auto
          figcaption.mt-3 Figura 3. Metodología de creación de algoritmos
    hr.mb-5
    p Las pruebas de escritorio permiten verificar que el pseudocódigo realice lo que se espera al resolver el problema. Sin embargo, por ahora es importante que a todos los pseudocódigos se les aplique, al menos, una de prueba de escritorio o las que se consideren necesarias. 
      br
      br
      b La mayoría de las pruebas de escritorio se representan en una tabla, donde en cada columna se anotan las variables y condiciones si las hay, 
      b-none en el   orden en que aparecen en el algoritmo, 
      b para entenderlo se tiene que recorrer línea a línea el pseudocódigo y así identificar tanto las variables  como condiciones 
      b-none e ir anotándolas en la tabla de la prueba de escritorio. 
      br
      br
      |Es importante que en la tabla no aparezcan variables o condiciones repetidas y en la última columna se pueden anotar los datos de salida para  entonces también anotar 
      b “Salida”.
      br
      br
      |Ejecutando línea a línea el algoritmo de la figura 3 y se va llenando la tabla como muestra la siguiente figura: 
    figure.my-5
          img(src='@/assets/curso/img12.svg', alt='Texto que describa la imagen' style='width:100%').m-auto
          figcaption.mt-3 Figura 4- Tablas de traza del algoritmo
    p También es posible realizar pruebas de escritorio a otras representaciones de algoritmos, como los diagramas de flujo, expuestos a continuación, y que se representan con algoritmos recomendando que a cada ejemplo presentado se le realice la prueba de escritorio correspondiente.
    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

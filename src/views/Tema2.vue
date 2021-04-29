<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Diagramas de flujo
    p Una forma común de presentar los algoritmos es con diagramas de flujo, que consiste en una representación por medio de un gráfico. Mientras en seudocódigo las sentencias se representaban con preposiciones en diagramas de flujo la preposición es reemplazada por una figura.
      br
      br
      |La representación del algoritmo de la figura 4 sería:
    figure.my-5
      img(src='@/assets/curso/img13.png', alt='Texto que describa la imagen')
      figcaption.mt-3 Figura 5. Diagrama de flujo imprimir un entero
    p.mb-5 Es ideal revisar el siguiente vídeo sobre la representación gráfica de un algoritmo a través del diagrama de flujo: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UA2JCB7He8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video de muestra (Material no elaborado)
    p.mb-5 La representación del algoritmo de la figura 3 (algoritmo que calcule el cuadrado y el cubo de un número introducido por teclado y mostrar los resultados el cubo y el cuadrado) es:
    figure.my-5
      img(src='@/assets/curso/img14.png', alt='Texto que describa la imagen')
      figcaption.mt-3 Figura 6. Diagrama de flujo imprimir el cuadrado y el cubo de un entero
    p.mb-3 La Organización Internacional para la Estandarización (ISO, por su sigla en inglés) y el Instituto Nacional Americano de Estandarización (ANSI, por su sigla en inglés), estandarizaron los símbolos que han sido mayor mente aceptados en 1985. Con el fin de evitar la utilización de símbolos diferentes para representar procesos iguales (López, 2009). 
      br
      br
      |Los siguientes son los principales símbolos para crear diagramas de flujo:
    .tarjetas_container.mb-5
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen' style='width:312px')
        .h4.mt-2.text-center Inicio/Final
        p.text-center Se utiliza para indicar el inicio y el final de un diagrama; del Inicio solo puede salir una línea de flujo y al Final solo debe llegar una línea (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Decisión  
        p.text-center Indica la comparación de dos datos y dependiendo del resultado lógico (falso o verdadero) se toma la decisión de seguir un camino del diagrama u otro (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Entrada General
        p.text-center Entrada/Salida de datos en General (en esta guía, solo se usará para la Entrada) (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img18.svg', alt='Texto que describa la imagen' style='width:312px')
        .h4.mt-2.text-center Iteración
        p.text-center Indica que una instrucción o grupo de instrucciones deben ejecutarse varias veces (López, 2009). 
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Entrada por teclado 
        p.text-center Instrucción de entrada de datos por teclado. Indica que el computador debe esperar a que el usuario teclee un dato que se guardará en una variable o constante (López, 2009). 
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Salida Impresa
        p.text-center Indica la presentación de uno o varios resultados en forma impresa (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen' style='width:312px')
        .h4.mt-2.text-center Llamada a subrutina 
        p.text-center Indica la llamada a una subrutina o procedimiento determinado (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Salida en Pantalla  
        p.text-center Instrucción de presentación de mensajes o resultados en pantalla (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Acción/Proceso General
        p.text-center Indica una acción o instrucción general que debe realizar el computador (cambios de valores de variables, asignaciones, operaciones aritméticas, etc.) (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen' style='width:312px')
        .h4.mt-2.text-center Conector
        p.text-center Indica el enlace de dos partes de un diagrama dentro de la misma página (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Flujo 
        p.text-center Indica el seguimiento lógico del diagrama. También indica el sentido de ejecución de las operaciones (López, 2009). 
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen' style='width:312px').m-auto
        .h4.mt-2.text-center Conector
        p.text-center Indica el enlace de dos partes de un diagrama en páginas diferentes (López, 2009)
    #t_2_1
    .titulo-segundo.mt-5
      .h4 2.1 Elaborar diagramas de flujo
    p Cuando el algoritmo se desea representar como diagrama de flujo, se deben tener en cuenta algunos principios para su elaboración (Rojas y Ñacato, 1980):

    //todo PENDIENTE POR AGREGAR INFOGRAFIA 

    .tarjeta.tarjeta--amarilla.p-3.my-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/img27.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Diagramas de flujo
              p.text-small Infografía. Elaborar diagramas de flujo 
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    #t_2_2
    .titulo-segundo
      .h4 2.2. Herramientas digitales para creación y prueba de algoritmos       
    P Para aprender a reconocer los elementos que componen los diagramas de flujo se puede hacer uso de la herramienta denominada Draw.io a través del enlace 
    b https://app.diagrams.net/ 
    b-none con la que puede usar una cuenta de correo de Google, o misena.edu.co para acceder y crear un nuevo diagrama.
      br
      br
      |Es ideal ingresar y seleccionar los diagramas que se muestran en la siguiente figura.
    figure.my-5
      img(src='@/assets/curso/img28.png', alt='Texto que describa la imagen')
      figcaption.mt-3 Figura 7 Seleccionar formas. Nota. Tomada de https://app.diagrams.net/
    p.mb-5 En caso de contar con intermitencia de internet se puede realizar el ejercicio propuesto a través del programa de libre distribución disponible en 
      b http://dia-installer.de/ 
      b-none o puede acceder a la versión de escritorio de Draw.io disponible en 
      b https://app.diagrams.net/.
    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=encz3h8TLWA" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Enlace web. 
            b-none Instituto de Informática Uach. (08 de septiembre de 2020). Cómo descargar draw io 2 para dibujar diagramas de flujo. [Video].  
    p.mt-5 El programa de mayor uso para el diseño y depuración de algoritmos en seudocódigo es PSeInt disponible en http://pseint.sourceforge.net/.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

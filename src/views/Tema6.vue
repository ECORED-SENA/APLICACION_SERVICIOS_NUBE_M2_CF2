<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 6
      .h3 Estructura de datos
    figure.mb-5
      img(src='@/assets/curso/img52.jpg', alt='Texto que describa la imagen')
    p.mb-5 Es importante conocer el concepto de arreglos e identificar cuándo usarlos en la aplicación en los algoritmos. Así mismo, ser capaz de resolver problemas básicos mediante diagramas de flujo y pseudocódigo. De otra parte, existen varios tipos de arreglos y de estos los más comunes son los vectores y las matrices. 
    #t_6_1
    .titulo-segundo
      .h4 6.1.  Vectores
    p Los arreglos o array, en inglés, (matriz, arreglo o vector) se definen como un conjunto finito y ordenado de elementos del mismo tipo. La propiedad “ordenado” quiere decir que el elemento primero, segundo, tercero, …, enésimo de un array puede ser identificado y accedido. Cuando se dice que los elementos de un arreglo son homogéneos, significa que son del mismo tipo de datos. Un arreglo puede estar compuesto de todos sus elementos de tipo letras, otro puede tener todos sus elementos de tipo entero, etc. Los arreglos se conocen como matrices en matemáticas, y tablas en temas financieros (Vázquez, 2012).
    br
    br
    |Según sus dimensiones, los arreglos se clasifican en:
    .contenedor-tarjetas
        .tarjeta-Avatar.mb-5
          img(src='@/assets/curso/img53.svg' alt='AvatarTop' style='width: 136px')
          .tarjeta.tarjeta--amarilla
            p.text-center.m-auto
              b Unidimensionales: 
              b-none de una dimensión, comparables con una lista de elementos.
        .tarjeta-Avatar.mb-5
          img(src='@/assets/curso/img54.svg' alt='AvatarTop' style='width: 136px')
          .tarjeta.tarjeta--amarilla
            p.text-center.m-auto
              b Multidimensionales: 
              b-none son arreglos de varias dimensiones o los más comunes son bidimensionales (dos dimensiones o tablas) o arreglos multidimensionales (tridimensionales, por ejemplo). 
    figure.mb-5
              img(src='@/assets/curso/img55.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 17 -  Matriz unidimensional con 10 elementos
    p Cada vector está compuesto de un número de elementos ya definidos, esto hace que sea una estructura estática (no puede aumentarse ni reducirse). Cada elemento está referenciado por la posición que ocupa dentro del vector. Estas posiciones son llamadas índices; nótese que empieza a contar desde 0 como muestra la figura 15.
    br
    br
    |Para referirse un vector se usa un identificador como se hace con las variables o constantes, pero queda entre corchetes [ ], por ejemplo si el vector se llama lista, y se quiere acceder al quinto elemento del vector de la figura 17, se debe hacer así lista[4], es de notar que la quinta posición se accede con el índice 4, porque se empezó a contar desde 0. 
    br
    br
    |Para realizar las operaciones de asignación, lectura/escritura sobre un vector, se recomienda usar las estructuras repetitivas para, a través de ellas, manipular los índices correspondientes a las posiciones del arreglo.
    .cajon--azul.p-4.mb-5.mb-lg-0.mx-5.my-5
      .row
        .col-1
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
        .col-11.my-auto
          .h5 Ejemplo: hacer un programa que pida 5 números enteros al usuario y los guarde en un arreglo de números en un arreglo, luego que imprima los números mayores de 100.
    p.my-5 A continuación, se revisan dos ejemplos: 
    TabsB.my-5
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/img33.svg')")
        ul.lista-ul
            li 
              i.fas.fa-circle
              p
                b  Formular el problema:
                b-none  pedirle al usuario 5 números enteros almacenarlos en un arreglo y luego recorrer el arreglo para buscar los números mayores a 100.
            li 
              i.fas.fa-circle
              p
                b  Resultados esperados:
                b-none   imprimir en pantalla de los 5 números ingresados por el usuario solamente los mayores a 100.
            li 
              i.fas.fa-circle
              p
                b  Datos disponibles:
                b-none   5 números ingresados por el usuario.
            li 
              i.fas.fa-circle
              p
                b  Datos adicionales:
                b-none    por cada uno de esos números validar si son mayores que 100 y mostrar los que lo sean en la pantalla. 
            li 
              i.fas.fa-circle
              p
                b  Restricciones:
                b-none   ninguna.
            li 
              i.fas.fa-circle
              p
                b  Procesos necesarios: 
                b-none  se requiere definir un arreglo de tamaño 5, se necesita pedir 5 veces un entero y almacenarlos en el vector. Luego se debe recorrer las 5 posiciones del vector para comparar en cada uno de los datos si es mayor que 100, si el número comparador es lo que se debe imprimir. Como 5 es un número invariante, el programa lo define como una constante de nombre tamano (no se usa la ñ porque no permite ni acentos latinos ni tildes), se debe usar la sentencia repetitiva PARA porque se sabe el número de veces que se debe repetir cada acción.   
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/img34.svg')")
        .row
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img56.svg', alt='Texto que describa la imagen' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/img57.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 18 - Vector de 5 elementos
    hr.mb-5
    #t_6_2.titulo-segundo
      .h4 6.2. Matrices
    p.mb-5 Las matrices son arreglos de más de una dimensión, en la siguiente figura se presenta un ejemplo de una matriz de 2 dimensiones que son 4x5 (correspondiente a 4 columnas y 5 filas). 
    .row
      .col-lg-6
        figure
              img(src='@/assets/curso/img58.svg', alt='Texto que describa la imagen' )
              figcaption.mt-3 Figura 19 - Matriz de 4 x 5

      .col-lg-6
        p Lo anterior cuando se quiere acceder a un elemento del vector si el identificador usa el corchete doble. Por ejemplo, cuando para acceder al último elemento de la figura 19, usado es matriz seria matriz[4][3];
        br
        br
        |Para recorrer estas estructuras de datos se requieren ciclos anidados; estas técnicas se abordarán más adelante.        

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

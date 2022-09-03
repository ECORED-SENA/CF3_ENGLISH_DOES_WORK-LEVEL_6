<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic In order to express desires, regrets and other hypothetical situations, things that we wish would happen or things that we wish had not happened, we use the second and third conditional clauses. These conditional clauses have particular structures that we must study since they make use of the modal verb “would” and the past perfect tense, topics that we must learn in order to handle thoroughly as well. Likewise, we must learn to use past tense expressions, so that, when we use the third conditional, we can locate when things happened, what we wish had not happened, and we will also learn vocabulary about leisure activities, news, lifestyles and trends, which is useful to talk about desires, dreams, etc. Based on the above, we welcome you to the study of this formative component and, to begin, you are invited to explore the video below:
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p 
              span.r-5 Para poder expresar deseos, arrepentimientos y demás situaciones hipotéticas de cosas que ojalá pasaran o que ojalá no hubieran pasado, hacemos uso de los llamados “segundo condicional” y “tercer condicional”. Estas cláusulas condicionales tienen unas estructuras particulares, que debemos estudiar, ya que en ellas se hace uso del verbo modal “would” y del tiempo pasado perfecto, temáticas que debemos aprender a manejar a cabalidad también. Asimismo, debemos aprender a emplear expresiones de tiempo del pasado, para cuando usemos el tercer condicional, ubicar cuándo sucedieron cosas que desearíamos que no hubieran sucedido, y, además, aprenderemos vocabulario sobre actividades de ocio, noticias, estilos de vida y tendencias, que es útil para hablar de deseos, sueños, etc. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:


          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
      .col-lg-5: img(src='@/assets/curso/temas/0.jpg', alt='')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/dhoOuZbQ2FY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    ocultarEsp: true,
  }),
}
</script>

<style lang="sass"></style>

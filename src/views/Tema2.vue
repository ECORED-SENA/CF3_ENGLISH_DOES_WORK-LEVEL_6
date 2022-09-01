<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Third conditional </em> / (Tercer condicional)     
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic The third conditional 
              span.r-1 is used to talk about situations of the past that did not occur, but we fantasize about what could have happened. 
              | In order to do that, it is necessary to use two elements as in all the conditionals: the condition, in this case we need the past perfect, and to show the result, we use the expression “would have” plus the verb in past participle.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            //todo! Añadir traduccion 
            p 
              span.r-5 

          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
      .col-lg-5: img(src='@/assets/curso/temas/tema2/1.png')
    .row.justify-content-center.mb-5
      .col-lg-3: img.mb-3(src='@/assets/curso/temas/tema2/2.png', alt='')
      .col-lg-9
        .contenedor-traductor.mb-4
          .contenedor-traductor__eng
            p.fst-italic The past perfect is a tense that helps you show events that occurred before another event in the past. The Past Perfect uses “HAD” as an auxiliary verb. There isn’t a different auxiliary verb for the third person (he, she, it), all of the pronouns use the same auxiliary verb (HAD):
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p 
              span.r-5 El pretérito perfecto es un tiempo verbal que ayuda a mostrar eventos que ocurrieron antes de otro evento en el pasado. El pasado perfecto utiliza “HAD” como verbo auxiliar. No hay un verbo auxiliar diferente para la tercera persona (he, she, it), todos los pronombres utilizan el mismo verbo auxiliar (HAD): 

          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
        .titulo-sexto.color-primario(data-aos='fade-right')
          h5 Figura 2 
          span #[i Past perfect structure] / Estructura pasado perfecto
        img.mb-3(src='@/assets/curso/temas/tema2/3.svg', alt='')
        .row.justify-content-center.mb-5
          .col-lg-5
            TarjetaAudio.color-primario.bg-white.mb-3(
              texto="My 'sister <span class='f-2'>had</span> <span class='r-3'>been</span> to Miami for her birthday."
              :audio="require('@/assets/audios/tema2/3.mp3')"
              )
            
          .col-lg-5
            p Mi hermana había estado en Miami para su cumpleaños.
    p.fw-bold.text-center #[i For example] / Por ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-3.col-8.mb-lg-0.mb-3
        img.mb-3(src='@/assets/curso/temas/tema2/4.svg', alt='')
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="Event 1: I finished my homework."
          :audio="require('@/assets/audios/tema2/3.mp3')"
          )
        p.ms-3 Evento 1: Terminé mi tarea.
      .col-lg-3.col-8.mb-lg-0.mb-3
        img.mb-3(src='@/assets/curso/temas/tema2/5.svg', alt='')
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="Event 2: My best friend called me."
          :audio="require('@/assets/audios/tema2/3.mp3')"
          )
        p.ms-3 Evento 2: Mi mejor amigo me llamó 
      .col-lg-6
        .tarjeta.p-4(style='background-color: #FFDFE0')
          img.mb-3.m-auto.d-block(src='@/assets/curso/temas/tema2/6.svg', alt='' style='width: 348px')
          TarjetaAudio.color-primario.bg-white.mb-3(
          texto=" I had finished my homework when my best friend called me."
          :audio="require('@/assets/audios/tema2/3.mp3')"
          )
          p.ms-3 Yo había terminado mi tarea cuando mi mejor amigo me llamó.  
    p.mb-5(data-aos='fade-right') 
      span.r-3.fw-normal.fst-italic In the example, we have two events in the past. Only the first part of the sentence uses past perfect because that is the event that happened first. Therefore, past perfect allows us to place an event in the past before another event in the past without using any other type of time markers or expressions. 
      span.text-gray / En el ejemplo, tenemos dos acontecimientos en el pasado. Solo la primera parte de la frase utiliza el pretérito perfecto, porque es el acontecimiento que ocurrió primero. Por lo tanto, el pretérito perfecto nos permite ubicar un acontecimiento en el pasado antes de otro acontecimiento en el pasado, sin utilizar ningún otro tipo de marcadores de tiempo o expresiones.
      br
      br
      span.r-3.fw-normal Next, we will see more examples:  
      span.text-gray / A continuación, veremos más ejemplos:
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/tema2/7.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Bruno 
                span.r-4 had done 
                | his homework before noon.

              br 
              | Bruno había hecho su tarea antes del mediodía.
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/tema2/8.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic They 
                span.r-4 hadn’t eaten 
                | sashimi before.
              br 
              | Ellos no habían comido sashimi antes. 
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/tema2/9.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic I 
                span.r-4 had called 
                | you many times before you picked up.

              br 
              | Te había llamado muchas veces antes que contestaras.
    Separador
    


    












    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Completa la conversación
      template(#descripcion-actividad)
      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ocultarEsp: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Tom',
          img: require('@/assets/curso/temas/tom.svg'),
        },
        {
          nombre: 'Maria',
          img: require('@/assets/curso/temas/maria.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Tom',
          textoIng: 'Maria, how did you spend your weekend?',
          textoEsp: 'Pendiente traduccion',
          audio: require('@/assets/audios/a2/1.mp3'),
        },
        {
          personaje: 'Maria',
          textoIng:
            'Well, I went to my aunt’s house, but it rained ***  I entered the house.',
          textoEsp: '',
          audio: require('@/assets/audios/a2/2.wav'),
          palabra: 'before',
        },
        {
          personaje: 'Tom',
          textoIng: 'No! really?',
          textoEsp: '',
          audio: require('@/assets/audios/a2/3.mp3'),
        },
        {
          personaje: 'Maria',
          textoIng:
            'Yes. *** , it got really cold and I didn’t have clothes to change there.',
          textoEsp: '',
          audio: require('@/assets/audios/a2/4.wav'),
          palabra: 'After that',
        },
        {
          personaje: 'Tom',
          textoIng: 'No way! What did you do then?',
          textoEsp: '',
          audio: require('@/assets/audios/a2/5.mp3'),
        },
        {
          personaje: 'Maria',
          textoIng:
            'First, I drank a cup of hot tea, then I bought some medicine, and *** I went to bed.',
          textoEsp: '',
          audio: require('@/assets/audios/a2/6.wav'),
          palabra: 'finally',
        },
        {
          personaje: 'Tom',
          textoIng: 'So, did you get sick?',
          textoEsp: '',
          audio: require('@/assets/audios/a2/7.mp3'),
        },
        {
          personaje: 'Maria',
          textoIng: 'Not really, but I don’t feel that good.',
          textoEsp: '',
          audio: require('@/assets/audios/a2/8.wav'),
        },
      ],
    },
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta-3
  background-color: #a6bbff
</style>

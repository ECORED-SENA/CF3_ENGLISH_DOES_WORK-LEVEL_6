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
    #t_2_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.2  #[i Use of “would have”] (Uso del “would have”)
    p.mb-5
      span.r-3.fw-normal.fst-italic “Would have” is just an expression that helps you show something you would have liked to do. There is only one important rule: the verb after “would have” has to be written in past participle. 
      span.text-gray / #[i “Would have”] es solo una expresión que le ayuda a mostrar algo que le hubiera gustado hacer. Solo hay una regla importante: el verbo que sigue a “would have” tiene que escribirse en participio pasado.
    .titulo-sexto.color-primario(data-aos='fade-right')
      h5 Figura 3 
      span.fst-italic Use of “would have”
    .row.justify-content-center.mb-5
      .col-lg-8: img(src='@/assets/curso/temas/tema2/10.svg', alt='')
      .col-lg-4
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto=" I would have <span class='f-2'>eaten</span> <span class='r-3'> if</span> I hadn’t eaten before.."
          :audio="require('@/assets/audios/tema2/3.mp3')"
          )
    p.text-center.mb-5 
      span.r-3.fw-normal Now, we will check some examples: 
      span.text-gray / A continuación, veremos más ejemplos: 
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/tema2/11.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic She 
                span.r-4 would have earned
                | a lot of money, but she didn’t get the job.
              br 
              |   Ella habría ganado mucho dinero, pero no obtuvo el trabajo. 
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/tema2/12.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic I 
                span.r-4 would have gone
                | o the party, but I was tired.
              br 
              | Habría ido a la fiesta, pero estaba cansa
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/tema2/13.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Daniel 
                span.r-4 ould have traveled 
                | f he had enough money.
              br 
              |   Daniel habría viajado si hubiese tenido suficiente dinero. 
    p.text-center.mb-5 
      span.r-3.fw-normal Finally, we will see the third conditional structure: 
      span.text-gray / Para finalizar, veamos la estructura del tercer condicional:
    .tarjeta.rounded-0.margin-n.p-5(style='background-color: #F3F9FF').mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          img(src='@/assets/curso/temas/tema2/14.svg', alt='')
        .col-lg-4
          TarjetaAudio.color-primario.bg-white.mb-5(
          texto="<span class='r-3'>If</span> you had called before, <span class='r-4'>I would have made some tea.</span>"
          :audio="require('@/assets/audios/tema2/3.mp3')"
          )
          TarjetaAudio.color-primario.bg-white(
          texto="<span class='r-4'>I would have made some tea</span> <span class='r-3'>if</span> you had called before."
          :audio="require('@/assets/audios/tema2/3.mp3')"
          )
    .row.justify-content-center.mb-5
      .col-lg-7
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic The third conditional There isn’t a specific way of writing conditional sentences, and the third conditional is not an exception. Both ways, starting with the conditional word or the result are ok, it only depends on the intention or the emphasis of the sentence.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p 
              span.r-5 No hay una forma específica de escribir oraciones condicionales, y el tercer condicional no es una excepción. De ambas formas, empezando por la frase condicional o el resultado, está bien, solo depende de la intención o el énfasis de la oración.

          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
      .col-lg-5 
        SlyderF.mb-5(columnas="col-lg-12 ")
          .tarjeta.bg-background.p-5.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/15.jpg')})`}" style='height: 440px')
            .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
              Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')" ).m-auto.mb-2
              p.text-center
                span.r-1.fst-italic If I 
                  span.r-4 had studied 
                  | more, I 
                  span.r-4 would have passed 
                  | the exam.
                br
                | Si hubiese estudiado más, habría pasado el examen. 
          .tarjeta.bg-background.p-5.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/16.jpg')})`}" style='height: 440px')
            .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
              Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')" ).m-auto.mb-2
              p.text-center
                span.r-1.fst-italic She 
                  span.r-4 would have paid 
                  | less if she 
                  span.r-4 had bought it then.
                br
                | Ella habría pagado menos si lo hubiese comprado en ese momento.
          .tarjeta.bg-background.p-5.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/17.jpg')})`}" style='height: 440px')
            .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
              Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')" ).m-auto.mb-2
              p.text-center
                span.r-1.fst-italic If you 
                  span.r-4 had gotten 
                  | that job, you 
                  span.r-4 would have had 
                  | a terrible life.
                br
                | Si (usted) hubiese Martinado ese trabajo, (usted) habría tenido una vida terrible. 
    












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
          nombre: 'Martin',
          img: require('@/assets/curso/temas/tema2/martin.svg'),
        },
        {
          nombre: 'Jimmy',
          img: require('@/assets/curso/temas/tema2/jimmy.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Martin',
          textoIng: 'I can’t believe that!',
          textoEsp: 'Pendiente traduccion',
          audio: require('@/assets/audios/a2/1.mp3'),
        },
        {
          personaje: 'Jimmy',
          textoIng: 'What happened dude?',
          textoEsp: '',
          audio: require('@/assets/audios/a2/2.wav'),
        },
        {
          personaje: 'Martin',
          textoIng: 'I failed the test!',
          textoEsp: '',
          audio: require('@/assets/audios/a2/3.mp3'),
        },
        {
          personaje: 'Jimmy',
          textoIng: 'But you studied a lot! How is it possible?',
          textoEsp: '',
          audio: require('@/assets/audios/a2/4.wav'),
        },
        {
          personaje: 'Martin',
          textoIng:
            'Man, if I *** learned the irregular verbs, I would have completed the sentences correctly!',
          textoEsp: '',
          audio: require('@/assets/audios/a2/5.mp3'),
          palabra: 'had',
        },
        {
          personaje: 'Jimmy',
          textoIng:
            'If you had *** to my house, we would have studied them together.  ',
          textoEsp: '',
          audio: require('@/assets/audios/a2/6.wav'),
          palabra: 'come',
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

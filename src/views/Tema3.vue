<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[i Time expressions] / Expresiones de tiempo
    .row.justify-content-center.mb-5
      .col-lg-5: img(src='@/assets/curso/temas/tema3/1.jpg')
      .col-lg-7.mb-lg-0.mb-3
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic We use the past tenses (we are not only talking about the simple past tense, but as in the case of the third conditional we use another past tense: the past perfect) to talk about things that happened before the present tense; and to better reference the time in which they occurred, certain words or temporary expressions called adverbs of time can be added to the complement of the sentence. The ones most often used in the past are:
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp1}")
            p 
              span.r-5 Usamos los tiempos pasados (no solo hablamos del tiempo pasado simple, sino, como en el caso del tercer condicional, usamos otro tiempo pasado: el pasado perfecto) para hablar de cosas que ocurrieron antes del tiempo presente; y para referenciar mejor el tiempo en el que ocurrieron, se puede agregar al complemento de la oración ciertas palabras o expresiones temporales llamadas adverbios de tiempo. Los que se usan con más frecuencia en el pasado son:
          a.boton-traduccion(@click='ocultarEsp1 = !ocultarEsp1') Ver traducción
    h3.mb-4
      span.f-3.px-4.fst-italic.fw-bold Last
    p
      span.r-3.fst-italic.fw-normal We use “last” + “time reference" to refer to the particular moment we are pointing to, whichever is most recent or close to the present. 
      span.text-gray / Usamos #[i “last”] + “referencia temporal” para referirnos al momento en particular que estamos señalando, ya sea el más reciente o cercano al presente.
    .row.justify-content-center.mb-5
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/2.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Night"
          :audio="require('@/assets/audios/tema3/1.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/3.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Weekend"
          :audio="require('@/assets/audios/tema3/2.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/4.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Year"
          :audio="require('@/assets/audios/tema3/3.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/5.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Wednesday"
          :audio="require('@/assets/audios/tema3/4.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/6.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Christmas"
          :audio="require('@/assets/audios/tema3/5.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/7.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Month"
          :audio="require('@/assets/audios/tema3/6.mp3')"
          )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p.text-center.fw-bold For example: 
        img.mb-3(src='@/assets/curso/temas/tema3/8.png', alt='')
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="I wouldn’t have been tired for the test if I had gone to bed earlier <span class='r-3'>last</span> night. "
          :audio="require('@/assets/audios/tema3/7.mp3')"
          )
        p.ms-3 Yo no habría estado cansado para el examen si me hubiera ido a la cama más temprano #[b anoche.]
      .col-lg-7
        .tarjeta.p-4.h-100(style='background-color: #ACADE1')
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/tema3/9.png', alt='')
            .col-lg-9
              .contenedor-traductor
                .contenedor-traductor__eng
                  p.fst-italic In Spanish, we say “#[b el] verano pasado”, “#[b la] semana pasada”, “#[b el] año pasado”; but in English we do not use the definite article “u the”, we say “last summer”, “last week”, “last year”, we do NOT say “#[del the] last summer”, “#[del the] last week”, “#[del the] last year”.
                .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp1}")
                  p 
                    span.r-5 En español, decimos “el verano pasado”, “la semana pasada”, “el año pasado”; pero en inglés no usamos el artículo definido #[i “the”], se dice #[i “last summer”], #[i “last week”], #[i “last year”], NO se dice #[i “#[del the] last summer”], #[i “#[del the] last week”], #[i “#[del the] last year”].
                a.boton-traduccion(@click='ocultarEsp1 = !ocultarEsp1') Ver traducción
    .tarjeta.rounded-0.margin-n.p-5.mb-5(style='background-color: #F0F4FF')
      h3.mb-4
        span.f-3.px-4.fst-italic.fw-bold Ago
      p
        span.r-3.fst-italic.fw-normal We use “time reference” + “ago” to show how far back in the past or how long ago something happened. 
        span.text-gray / Usamos “referencia temporal” + #[i “ago”] para mostrar qué tan atrás en el pasado o hace cuánto sucedió algo.
      .row.justify-content-center.mb-5
        .col-lg-2 
          .tarjeta.hbg--4.p-2(style='background-color: #FFDFE0')
            img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/10.svg', alt='' style='width: 88px')
            TarjetaAudio.color-primario.bg-white(
            texto="5 minutes"
            :audio="require('@/assets/audios/tema3/8.mp3')"
            )
        .col-lg-2 
          .tarjeta.hbg--4.p-2(style='background-color: #FFDFE0')
            img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/11.svg', alt='' style='width: 88px')
            TarjetaAudio.color-primario.bg-white(
            texto="An hour"
            :audio="require('@/assets/audios/tema3/9.mp3')"
            )
        .col-lg-2 
          .tarjeta.hbg--4.p-2(style='background-color: #FFDFE0')
            img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/12.svg', alt='' style='width: 88px')
            TarjetaAudio.color-primario.bg-white(
            texto="A week"
            :audio="require('@/assets/audios/tema3/10.mp3')"
            )
        .col-lg-2 
          .tarjeta.hbg--4.p-2(style='background-color: #FFDFE0')
            img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/13.svg', alt='' style='width: 88px')
            TarjetaAudio.color-primario.bg-white(
            texto="A month"
            :audio="require('@/assets/audios/tema3/11.mp3')"
            )
        .col-lg-2 
          .tarjeta.hbg--4.p-2(style='background-color: #FFDFE0')
            img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/14.svg', alt='' style='width: 88px')
            TarjetaAudio.color-primario.bg-white(
            texto="A year"
            :audio="require('@/assets/audios/tema3/12.mp3')"
            )
        .col-lg-2 
          .tarjeta.hbg--4.p-2(style='background-color: #FFDFE0')
            img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/15.svg', alt='' style='width: 88px')
            TarjetaAudio.color-primario.bg-white(
            texto="A long time"
            :audio="require('@/assets/audios/tema3/13.mp3')"
            )
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/tema3/16.png', alt='')
        .col-lg-7
          p.fst-italic.fw-bold For example: 
          TarjetaAudio.color-primario.bg-white(
            texto="If we hadn’t gone to that restaurant <span class='r-4'>two days ago</span>, we wouldn’t have had that stomach ache."
            :audio="require('@/assets/audios/tema3/14.mp3')"
            )
          p.ms-3 Si no hubiéramos ido a ese restaurante #[b hace dos días], no habríamos tenido ese dolor de estómago.
    h3.mb-4
      span.f-3.px-4.fst-italic.fw-bold Yesterday
    p
      span.r-4.fst-italic.fw-normal We use #[b “yesterday” or “yesterday + morning / at noon / afternoon / evening”]  to talk about the moments of the day before today. 
      span.text-gray / Usamos #[i “yesterday”] o #[i “yesterday + morning] (en la mañana) /#[i at noon] (al mediodía)  / #[i afternoon] (en la tarde) / #[i evening] (en la tarde-noche*)” para hablar de los momentos del día antes de hoy.

    .row.justify-content-center.mb-5
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/17.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Yesterday"
          :audio="require('@/assets/audios/tema3/15.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/18.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Morning"
          :audio="require('@/assets/audios/tema3/16.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/19.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="At noon"
          :audio="require('@/assets/audios/tema3/17.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/20.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Afternoon"
          :audio="require('@/assets/audios/tema3/18.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/21.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="Evening"
          :audio="require('@/assets/audios/tema3/19.mp3')"
          )
      .col-lg-2 
        .tarjeta.hbg--4.p-2(style='background-color: #D5D6F0')
          img.m-auto.mb-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/tema3/22.svg', alt='' style='width: 88px')
          TarjetaAudio.color-primario.bg-white(
          texto="The day before yesterday"
          :audio="require('@/assets/audios/tema3/20.mp3')"
          )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p.text-center.fw-bold For example: 
        img.mb-3(src='@/assets/curso/temas/tema3/23.png', alt='')
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="f we had taken a taxi <span class='r-4'>yesterday morning</span>, we wouldn’t have missed the plane."
          :audio="require('@/assets/audios/tema3/21.mp3')"
          )
        p.ms-3 Si hubiéramos tomado un taxi #[b ayer por la mañana], no habríamos perdido el avión.
      .col-lg-7
        .tarjeta.p-4.h-100(style='background-color: #ACADE1')
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/tema3/9.png', alt='')
            .col-lg-9
              .contenedor-traductor
                .contenedor-traductor__eng
                  p.fst-italic “Evening” is the part of the day between the end of the afternoon and the night, and there is no exact word for this in Spanish; instead “night” can be interpreted directly as “noche”.
                    br
                    br
                    | Knowing this, with “evening” we use #[b “yesterday”]. With “night” instead, we say #[b “last] night”, #[b NOT “yesterday night”.]
                    br
                    br
                    | We also use the expression “the day before #[b yesterday”] to refer to “two days ago”, or in Spanish “anteayer”.
                .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp1}")
                  p 
                    span.r-5 #[i “Evening”] es la parte del día entre el final de la tarde y la noche, y no hay una palabra exacta para esto en español; en cambio “night” sí puede interpretarse directamente como “noche”.
                      br
                      |Sabiendo esto, con #[i “evening”] sí usamos #[i “yesterday”]. Con #[i “night”], en cambio, decimos #[i “last night”], NO #[i yesterday night”.]
                      br
                      |También usamos la expresión #[i “the day before yesterday”] para referirnos a “hace dos días”, o, en español, “anteayer”.
                a.boton-traduccion(@click='ocultarEsp1 = !ocultarEsp1') Ver traducción
    p Finalmente, de acuerdo con la temática explicada, escuche el siguiente diálogo y responda de acuerdo con las palabras faltantes:

    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Completa la conversación
      template(#descripcion-actividad)        
        
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    ocultarEsp1: true,
    ocultarEsp2: true,
    ocultarEsp3: true,
    ocultarEsp4: true,
    ocultarEsp5: true,
    ocultarEsp6: true,
    ocultarEsp7: true,
    ocultarEsp8: true,
    ocultarEsp9: true,
    dialogo: {
      personajes: [
        {
          nombre: 'David',
          img: require('@/assets/curso/temas/tema3/david.svg'),
        },
        {
          nombre: 'Clara',
          img: require('@/assets/curso/temas/tema3/clara.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'David',
          textoIng: 'What would you have done if you had won the lotto ***?',
          textoEsp: '',
          audio: require('@/assets/audios/a3/1.wav'),
          palabra: 'yesterday',
        },
        {
          personaje: 'Clara',
          textoIng: 'Well, I would have thrown a huge party first!',
          textoEsp: '',
          audio: require('@/assets/audios/a3/2.wav'),
        },
        {
          personaje: 'David',
          textoIng:
            'Sure! Like the one you threw *** year for your graduation! ',
          textoEsp: '',
          audio: require('@/assets/audios/a3/3.wav'),
          palabra: 'last',
        },
        {
          personaje: 'Clara',
          textoIng:
            'That’s right! I would have enjoyed this one more for sure!',
          textoEsp: '',
          audio: require('@/assets/audios/a3/4.wav'),
        },
        {
          personaje: 'David',
          textoIng: 'It’s a pity you didn’t win.',
          textoEsp: '',
          audio: require('@/assets/audios/a3/5.wav'),
        },
        {
          personaje: 'Clara',
          textoIng:
            'I know, I bought that ticket a week *** and I was sure I was going to win.',
          textoEsp: '',
          audio: require('@/assets/audios/a3/6.wav'),
          palabra: 'ago',
        },
      ],
    },
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
.bg-card
  background-image: url(../assets/curso/temas/bg-card.svg)
  background-repeat: repeat
  background-size: cover
.tarjeta-4
  background-color: #a6bbff
.bg-card
  background-image: url(../assets/curso/temas/bg-card-1.svg)
  background-repeat: repeat
  background-size: cover
  background-position: center
</style>

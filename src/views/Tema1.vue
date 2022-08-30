<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[i Second conditional] / (Segundo condicional)
    .row.justify-content-center.mb-5
      .col-lg-5: img(src='@/assets/curso/temas/1.jpg')
      .col-lg-7.mb-lg-0.mb-3
        p
          span.r-3.fw-normal.fst-italic The second conditional #[b is used to contemplate hypothetical scenarios], in which a non-real situation, shown by using the past tense, is considered as the condition, and a result to that hypothetical situation is shown by using the auxiliary verb would.
          br
          br
          span.text-gray El segundo condicional es utilizado para contemplar escenarios hipotéticos, en los que se considera como condición una situación no real, mostrada mediante el uso del tiempo pasado, y se muestra un resultado a esa situación hipotética mediante el uso del verbo auxiliar would. 
    #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.1  #[i Past perfect] / (Pasado perfecto)
    .row.justify-content-center.mb-5
      .col-lg-9
        p
          span.r-3.fw-normal.fst-italic In this expression, you can tell the expression “If I were” looks unfamiliar, it is because the verb “to be” in the past is conjugated as “was” with the pronoun “I”; however, in second conditional, the verb “to be” is always conjugated as “were”:
          br
          br
          span.text-center En esta expresión, puede notar que la expresión #[i “If I were”] no parece familiar, es porque el verbo #[i “to be”] en el pasado se conjuga como #[i “was”] con el pronombre #[i “I”] ; sin embargo, en el second conditional, el verbo to be siempre se conjuga como #[i “were”]:
      .col-lg-3: img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/2.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4
        .titulo-sexto.color-primario(data-aos='fade-right')
          h5 Tabla 1
          span.fst-italic Past tense vs. second conditional
        img(src='@/assets/curso/temas/t1.svg', alt='')
    p 
      span.r-3.fst-italic.fw-normal It is important to remark that the use of the verb “to be” in the past as WERE with all the subjects is exclusive to the second conditional. Therefore, in other situations, it has to be conjugated. 
      span.text-gray / Es importante señalar que el uso del verbo #[i “to be”] en el pasado como #[i WERE] con todos los sujetos es exclusivo del segundo condicional. Por lo tanto, en otras situaciones, tiene que ser conjugado. 
    p
      span.r-3.fst-italic.fw-normal For example: 
      span.text-gray  / Por ejemplo: 
    .tarjeta.rounded-0.p-5.margin-n(style='background-color: #FFF0F1').mb-5
      .titulo-sexto.color-primario(data-aos='fade-right')
        h5 Tabla 2 
        span.fst-italic Example Second Conditional
      p.text-center.fw-bold.mb-5 #[i Past Tense] / Tiempo pasado
      .row.justify-content-center.mb-5
        .col-lg-3
          img.mb-2(src='@/assets/curso/temas/3.svg', alt='')
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Sara was hungry."
            :audio="require('@/assets/audios/tema1/1.wav')"
            )
          p.ms-3 Sara tenía hambre.
        .col-lg-3
          img.mb-2(src='@/assets/curso/temas/4.svg', alt='')
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="I was rich."
            :audio="require('@/assets/audios/tema1/1.wav')"
            )
          p.ms-3 Yo era rico.
        .col-lg-3
          img.mb-2(src='@/assets/curso/temas/5.svg', alt='')
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="He was fat."
            :audio="require('@/assets/audios/tema1/1.wav')"
            )
          p.ms-3 Él era gordo.
        
      p.text-center.fw-bold.mb-5 #[i Second conditional] / Segundo condicional 
      .row.justify-content-center.mb-5
        .col-lg-3
          img.mb-2(src='@/assets/curso/temas/6.svg', alt='')
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="If Sara were hungry, she would cook some food."
            :audio="require('@/assets/audios/tema1/1.wav')"
            )
          p.ms-3 Si Sara tuviera hambre, ella cocinaría comida.
        .col-lg-3
          img.mb-2(src='@/assets/curso/temas/7.svg', alt='')
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="If I were rich, I would buy a Ferrari. "
            :audio="require('@/assets/audios/tema1/1.wav')"
            )
          p.ms-3 Si yo fuera rico, yo compraría un Ferrari.
        .col-lg-3
          img.mb-2(src='@/assets/curso/temas/8.svg', alt='')
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="If he were fat, he would do exercise."
            :audio="require('@/assets/audios/tema1/1.wav')"
            )
          p.ms-3 Si él fuera gordo, él haría ejercicio.
    Separador 
    #t_1_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.2  #[i Use of “would”] / (Uso de “would”)
    .row.justify-content-center.mb-5
      .col-lg-2
        img(src='@/assets/curso/temas/9.svg', alt='')  
      .col-lg-10 
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic The use of “would” is really important in English because it is necessary when talking about hypothetical situations. Would is an auxiliary verb that modifies the verb, so you don’t have to conjugate the verb. Let’s see how to use it in different grammatical structures:
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p 
              span.r-5 
              //todo! AGREGAR TRADUCCION 

          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/10.png', alt='')
      .col-lg-9
        AcordionA.audios-colores.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-3")
          div(titulo="<em>Affirmative structure</em> / Estructura afirmativa").p-5
            .tarjeta.bg-white.p-4
              p.text-center
              img.mb-4(src='@/assets/curso/temas/11.svg', alt='')
              .row.justify-content-center.mb-3
                .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.svg', alt='')
                .col-lg-6
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="<span class='f-1'>Sam </span><span class='f-2'>would </span><span class='f-3'>travel to </span><span class='f-4 text-white'>China. </span>"
                    :audio="require('@/assets/audios/tema1/1.wav')"
                    )
          div(titulo="<em>Negative structure</em> / Estructura negativa").p-5
            .tarjeta.bg-white.p-4
              p.text-center
              img.mb-4(src='@/assets/curso/temas/13.svg', alt='')
              .row.justify-content-center.mb-3
                .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/14.svg', alt='')
                .col-lg-6
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="<span class='f-1'>Sam </span><span class='f-2'>would not   </span><span class='f-3'>travel to  </span><span class='f-4 text-white'>China. </span>"
                    :audio="require('@/assets/audios/tema1/1.wav')"
                    )
                  p.ms-3 Sam no viajaría a China.
          div(titulo="<em>Interrogative structures</em> / Estructuras interrogativas").p-5
            .tarjeta.bg-white.p-4
              p.text-center
              img.mb-4(src='@/assets/curso/temas/15.svg', alt='')
              .row.justify-content-center.mb-3
                .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.svg', alt='')
                .col-lg-6
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="<span class='f-2'>would </span><span class='f-1'>Sam </span><span class='f-3'>travel to </span><span class='f-4 text-white'>China? </span>"
                    :audio="require('@/assets/audios/tema1/1.wav')"
                    )
                  p.ms-3 ¿Viajaría Sam a China?
          div(titulo="<em>Informative questions</em> / Preguntas informativas").p-5
            .tarjeta.bg-white.p-4
              p.text-center
              img.mb-4(src='@/assets/curso/temas/17.svg', alt='')
              .row.justify-content-center.mb-3
                .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/18.svg', alt='')
                .col-lg-6
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="<span class='f-5'>When </span><span class='f-2'>would</span><span class='f-1'>Sam </span><span class='f-3 '>travel to </span><span class='f-4 text-white'>China? </span>"
                    :audio="require('@/assets/audios/tema1/1.wav')"
                    )
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic The structures are not different from most of the grammar tenses based on auxiliary verbs. In the affirmative sentences, “would” is placed before the verb and this last one is always in base form. For the negative form, a “not” is placed between “would” and the verb; the contraction of “would not” is “wouldn’t”, in case you want the sentences shorter. In interrogative forms, we just place the “would” at the beginning. 
              br
              | Next, we will see the second conditional structure:
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p 
              span.r-5 
              //todo! AGREGAR TRADUCCION 

          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción

      .col-lg-5
        img(src='@/assets/curso/temas/19.jpg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-7
        .titulo-sexto.color-primario(data-aos='fade-right')
          h5 Figura 1
          span #[i Second Conditional Structures]  / (Estructuras del segundo condicional)
        img(src='@/assets/curso/temas/20.svg', alt='')
    p 
      span.fst-italic.fw-normal.r-3 The second conditional refers to speculative situations. They are not directly connected to reality; they are just a supposition of what the person would do or what would happen under those situations. 
      span.text-gray / El segundo condicional se refiere a situaciones especulativas. No están directamente conectadas con la realidad; son solo una suposición de lo que la persona haría o lo que sucedería bajo esas situaciones.
      br
      br
      span.fst-italic.fw-normal.r-3 For example: 
      | / Por ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/21.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
                p.text-center
                  span.r-1.fst-italic If I had a million dollars, I would buy a big house.

                  br 
                  | Si yo tuviera un millón de dólares, compraría una casa grande.
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/22.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
                p.text-center
                  span.r-1.fst-italic I would become a basketball player if I were taller.
                  br 
                  | Me convertiría en jugador de baloncesto si yo fuera más alto.
      .col-lg-4
        .tarjeta.color-acento-contenido.p-4.hbg--4.h-100
          img.mb-3(src='@/assets/curso/temas/23.png', alt='')
          .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/1.wav')").m-auto.mb-2
                p.text-center
                  span.r-1.fst-italic If I did more exercise, I would be in shape.
                  br 
                  | Si yo hiciera más ejercicio, yo estaría en forma.
    p Finalmente, de acuerdo con la temática explicada, escuche el siguiente diálogo y complete las palabras faltantes:

    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y soltar
      template(#titulo-actividad) Completa la conversación
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    ocultarEsp: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Carlo',
          img: require('@/assets/curso/temas/carlo.svg'),
        },
        {
          nombre: 'Dave',
          img: require('@/assets/curso/temas/dave.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Carlo',
          textoIng: 'Hey Dave! Where would you *** if you had an airplane?',
          textoEsp: 'Pendiente traduccion',
          audio: require('@/assets/audios/a1/1.wav'),
          palabra: 'have you been',
        },
        {
          personaje: 'Dave',
          textoIng: ' I think I *** fly around Europe.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/2.wav'),
        },
        {
          personaje: 'Carlo',
          textoIng: 'Wow! I wouldn’t do that; I am not into flying much.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/3.wav'),
        },
        {
          personaje: 'Dave',
          textoIng: 'So, what would you do if you had a million dollars?',
          textoEsp: '',
          audio: require('@/assets/audios/a1/4.wav'),
        },
        {
          personaje: 'Carlo',
          textoIng:
            'Well, if I *** a millionaire, I *** pay my debts and then I would *** a few houses to rent.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/5.wav'),
          palabra: 'I went',
        },
        {
          personaje: 'Dave',
          textoIng: 'You are such a businessman!',
          textoEsp: '',
          audio: require('@/assets/audios/a1/6.wav'),
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
.tarjeta-titulo-up
  position: relative

  &__titulo
      position: inherit
      width: 100%
      display: flex
      justify-content: center
      left: 0
      top: 0
      transform: translateY(-60%)
.lista-ol--cuadro__vineta
  background-color: $color-primario
  span
    font-weight: bold
.lista-ol--cuadro__vineta.azul
  background-color: $color-acento-contenido
  span
    font-weight: bold
    color: #12263f

span.text-gray
  color: #777777
</style>

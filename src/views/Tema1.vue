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
        

















    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Completa la conversación
      template(#descripcion-actividad)
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
          nombre: 'Ana',
          img: require('@/assets/curso/temas/ana.svg'),
        },
        {
          nombre: 'Luisa',
          img: require('@/assets/curso/temas/luisa.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Ana',
          textoIng: 'Hi! How ***?',
          textoEsp: 'Pendiente traduccion',
          audio: require('@/assets/audios/a1/1.wav'),
          palabra: 'have you been',
        },
        {
          personaje: 'Luisa',
          textoIng: 'Hey! Awesome! How about you?',
          textoEsp: '',
          audio: require('@/assets/audios/a1/2.wav'),
        },
        {
          personaje: 'Ana',
          textoIng: 'I’m great! *** from my trip yesterday',
          textoEsp: '',
          audio: require('@/assets/audios/a1/3.wav'),
          palabra: 'I arrived',
        },
        {
          personaje: 'Luisa',
          textoIng: 'Really? Where did you go?',
          textoEsp: '',
          audio: require('@/assets/audios/a1/4.wav'),
        },
        {
          personaje: 'Ana',
          textoIng:
            '*** to Italy. I have been there many times, but I love it.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/5.wav'),
          palabra: 'I went',
        },
        {
          personaje: 'Luisa',
          textoIng:
            'Wow! *** there for the first time 2 years ago and I loved it too.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/6.wav'),
          palabra: 'I traveled',
        },
        {
          personaje: 'Ana',
          textoIng: 'Sure! Have you already planned your next trip?',
          textoEsp: '',
          audio: require('@/assets/audios/a1/7.wav'),
        },
        {
          personaje: 'Luisa',
          textoIng: 'I haven’t, but *** many options this time.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/8.wav'),
          palabra: 'I have seen',
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

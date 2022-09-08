<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[i If we hadn’t been busy, we would have gone to the fashion show] / Si no hubiéramos estado ocupados, habríamos ido al desfile de moda
    .row.justify-content-center.mb-5
      .col-lg-5: img(src='@/assets/curso/temas/tema4/1.jpg')
      .col-lg-7.mb-lg-0.mb-3
        p
          span.r-4.fst-italic.fw-normal To talk about our daily life, the desires we yearn for and hypothetical situations, it is important to know and manage vocabulary about leisure activities, news, lifestyles, and trends. Some terms to keep in mind are:
          br
          br
          span.text-gray Para hablar de nuestra vida cotidiana, de los deseos que anhelamos y de situaciones hipotéticas, es importante conocer y manejar vocabulario sobre actividades de ocio, noticias, estilos de vida y tendencias. Algunos términos para tener en cuenta son:

    .margin-n.p-5(style='background-color: #D5D6F0').mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          img.mb-4(src='@/assets/curso/temas/tema4/2.svg', alt='')
          .tarjeta.bg-white.p-4.adornos
            SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/3.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Online videos
                  br
                  span.text-gray Videos en línea
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/2.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic I would watch online videos if I had a computer.
                    br
                    | Yo vería videos en línea si tuviera un computador.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/4.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Social media
                  br
                  span.text-gray Redes sociales
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/4.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I had opened my social media, I would have become famous by now.
                    br
                    | Si hubiera abierto mis redes sociales, para este momento ya sería famoso.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/5.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Chatting (to chat)
                  br
                  span.text-gray  Chatear, charlar (en línea)
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/6.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I chatted more often, I would have more friends.
                    br
                    | Si yo chateara más seguido, tendría más amigos.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic To surf the Internet
                  br
                  span.text-gray Navegar en Internet
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/8.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I hadn’t surfed the Internet yesterday, I would have finished my duties.
                    br
                    | Si no hubiera navegado en Internet ayer, habría terminado mis deberes.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/7.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Smartphone
                  br
                  span.text-gray Teléfono inteligente
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/10.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I had a good smartphone, I would become an influencer.
                    br
                    | Si tuviera un buen teléfono inteligente, me convertiría en un influencer.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/8.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Online news
                  br
                  span.text-gray  Noticias en línea
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/12.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic  I would read the online news if they weren’t that sensationalist.
                    br
                    | Leería las noticias en línea si no fueran tan sensacionalistas. 
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/9.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Weather report
                  br
                  span.text-gray Informe meteorológico, pronóstico del tiempo
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/14.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I had checked the weather report, I wouldn’t have gotten wet this morning.
                    br
                    | Si hubiera revisado el pronóstico del tiempo, no me habría mojado esta mañana.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/10.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Tabloids
                  br
                  span.text-gray Tabloides, periódicos sensacionalistas, revistas de chismes
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/16.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If there weren’t any tabloids, famous people would be happier.
                    br
                    | Si no hubiera tabloides, los famosos serían más felices.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/11.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Breaking news
                  br
                  span.text-gray Noticias de última hora
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/18.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If we had seen the breaking news, we would have known about the tornado before.
                    br
                    | Si hubiésemos visto las noticias de última hora, habríamos sabido del tornado antes.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/12.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Advertising
                  br
                  span.text-gray Publicidad, anuncios, propaganda
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/20.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I paid more advertising for my webpage, I would have more clients.
                    br
                    | Si pagara más publicidad para mi página web, tendría más clientes.
            SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/13.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Trendy (fashionable)
                  br
                  span.text-gray De moda, vanguardista 
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/22.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I had more money, I would buy trendy clothes.
                    br
                    | Si yo tuviera más dinero, compraría ropa de moda.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/14.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Designer label
                  br
                  span.text-gray Marca de diseñador
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/24.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If she had been a model, she would have worn designer label pieces of clothes.
                    br
                    | Si ella hubiera sido modelo, habría usado prendas de marca de diseñador.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/15.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Catwalk
                  br
                  span.text-gray Pasarela
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/26.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If we had arrived earlier, we would have been able to see the models walk down the catwalk.
                    br
                    | Sí nosotros hubiéramos llegado más temprano, habríamos podido ver a las modelos desfilar por la pasarela.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/16.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Wardrobe
                  br
                  span.text-gray Vestuario, guardarropa
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/28.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If I lived in a country with seasons, I would invest in a fashionable winter wardrobe.
                    br
                    | Si viviera en un país con estaciones, invertiría en un vestuario de invierno a la moda.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/17.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Street market
                  br
                  span.text-gray Mercado callejero, mercadillo
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/30.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If they had gone to the street market, they would have gotten better discounts.
                    br
                    | Si ellos hubieran ido al mercadillo, habrían conseguido mejores descuentos.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/18.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Farmers market
                  br
                  span.text-gray Mercado campesino, mercado de productores (al aire libre)
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/32.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If she wanted to take care of her health, she would buy more organic vegetables at the farmers market.
                    br
                    | Si ella quisiera cuidar su salud, compraría más verduras orgánicas en el mercado campesino.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/19.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Lifestyle
                  br
                  span.text-gray Estilo de vida
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/34.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If he had had a healthier lifestyle, he would not have gotten sick.
                    br
                    | Si él hubiera tenido un estilo de vida más saludable, no se habría enfermado.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/20.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Balanced diet
                  br
                  span.text-gray Dieta equilibrada, alimentación balanceada
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/36.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If you ate a balanced diet, you would be slimmer.
                    br
                    | Si ustedes comieran una dieta balanceada, serían más delgados.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/21.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Snack
                  br
                  span.text-gray Bocadillo, refrigerio, merienda
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/38.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If we hadn’t prepared more snacks, the children would have been hungry.
                    br
                    | Si no hubiéramos preparado más bocadillos, los niños habrían tenido hambre.
              .tarjeta.color-acento-contenido.hbg--4.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/tema4/22.svg' alt='AvatarTop')
                p.text-center
                  span.fw-bold.fst-italic Processed food
                  br
                  span.text-gray Alimentos procesados
                .tarjeta.bg-white.border-1.p-3.d-flex.flex-column.justify-content-center
                  Audio.color-primario.d-block(:audio="require('@/assets/audios/tema4/40.mp3')").m-auto.mb-2
                  p.text-center
                    span.r-1.fst-italic If processed foods were healthier, I would eat them more often.
                    br
                    | Si los alimentos procesados fueran más saludables, yo los comería más seguido.

    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Completa la conversación
      template(#descripcion-actividad)        
        
</template>

<script>
export default {
  name: 'Tema4',
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
          nombre: 'Ana',
          img: require('@/assets/curso/temas/tema4/ana.svg'),
        },
        {
          nombre: 'Maria',
          img: require('@/assets/curso/temas/tema4/maria.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Ana',
          textoIng:
            'María, what would you do if you were a famous *** influencer?',
          textoEsp: 'Pendiente traduccion',
          audio: require('@/assets/audios/a4/1.wav'),
          palabra: 'social media',
        },
        {
          personaje: 'Maria',
          textoIng:
            'Good question! If I were that popular, I would record videos for my YouTube channel and also wear the trendiest outfits like *** clothes and stuff like that. ',
          textoEsp: '',
          audio: require('@/assets/audios/a4/2.wav'),
          palabra: 'designer label ',
        },
        {
          personaje: 'Ana',
          textoIng: ' So, you would be like a celebrity.',
          textoEsp: '',
          audio: require('@/assets/audios/a4/3.wav'),
        },
        {
          personaje: 'Maria',
          textoIng: 'For sure! What about you?',
          textoEsp: '',
          audio: require('@/assets/audios/a4/4.wav'),
        },
        {
          personaje: 'Ana',
          textoIng:
            'Well, if I were a famous social media influencer, I would also be a celebrity, but I would also model on all the *** of the most famous fashion weeks in the world.',
          textoEsp: '',
          audio: require('@/assets/audios/a4/5.wav'),
          palabra: 'catwalks',
        },
        {
          personaje: 'Maria',
          textoIng:
            'That’s good! Because famous influencers are doing very well with fashion content creation these days!',
          textoEsp: '',
          audio: require('@/assets/audios/a4/6.wav'),
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

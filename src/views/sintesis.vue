<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .tarjeta(style='background-color: #f0f4ff ').p-4.mb-5
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-4: img(src='@/assets/curso/temas/00.jpg', alt='')
        .col-lg-8 
          p 
            span.r-4.fst-italic.fw-normal Up to this point, we have been able to appreciate everything that has to do with conditional sentences, how the second and third conditionals are structured and used, as well as time expressions and general vocabulary useful to complement this topic. For this reason, you are invited to take a look at the following conceptual scheme that summarizes the subject matter:
            br
            br
            span.text-gray Hasta este punto, hemos podido apreciar todo lo que tiene que ver con las oraciones condicionales, cómo se estructuran y se usan el segundo y el tercer condicional, además de expresiones temporales y vocabulario general útiles para complementar este tema. Por ello, se le invita a que observe el siguiente esquema conceptual que resume la temática tratada:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
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

<style lang="sass"></style>

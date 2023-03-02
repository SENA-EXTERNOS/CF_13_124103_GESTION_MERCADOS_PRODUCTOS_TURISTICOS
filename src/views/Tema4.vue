<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Patrones de conducta

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 #[strong Casanova Ríspoli (2009)] afirma que desde el área de la psicología lo importante es observar cuál es el comportamiento habitual de un individuo. Pueden existir comportamientos positivos y negativos, pero, es necesario asociarlos a un contexto específico que justifique las reacciones.

    .row.justify-content-center.my-5
      .col-lg-9.mt-5
        p Desde la psicología, un patrón de conducta se define como un grupo de normas que ayudan a identificar el carácter de forma correcta. Son modelos diferentes que guían y orientan a un individuo a actuar de manera específica según sea la circunstancia.
        P Algunas particularidades de los patrones de conducta son: 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Patrones de conducta")
            p Los patrones tienden a ser repetidos y a perpetuarse en el tiempo; se crean de acuerdo a las experiencias diarias de la vida. Incluso, pueden existir patrones que son el resultado de una copia o un aprendizaje de otros individuos con quienes se haya interactuado antes. 

          .row(titulo="Identificación de patrones de conducta")
            p Para los psicólogos es vital la identificación de los patrones propios de cada persona porque determinan sus deseos y reacciones. Esencialmente un patrón de comportamiento se constituye de 4 componentes básicos: creencias o pensamientos; sentimientos y emociones, comportamientos y, finalmente, reacciones corporales.

      .col-lg-3.mt-5
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Texto que describa la imagen')       

    h3.my-5 Características

    .row.justify-content-center.my-5
      .col-lg-8
        p.my-4 Los patrones de conducta manifiestan modelos particulares que se integran según sean las características de la personalidad, donde se pueden incluir creencias y actitudes que emergen en momentos específicos y comportamientos sociales, por lo general dependen de una comunicación interpersonal.
        .cajon.color-acento-contenido.p-3
          p Para ampliar la información revise el <i>Anexo 8. Patrones de conducta</i>, en la sección de características, en dicho documento.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-8_patrones_de_conducta.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 8.] Patrones de conducta

      .col-lg-4     
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen') 


    .row.justify-content-center.my-5
      .col-lg-4     
        figure
          img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen') 

      .col-lg-8
        h3 Clasificación de los patrones de comportamiento
        p.my-4 Hay diferentes tipos de patrones de comportamiento, por tanto, las clasificaciones realizadas son distintas, se encuentran por ejemplo patrones relacionados con la conducta social, la conducta asocial, la conducta parasocial y la conducta antisocial. 
        .cajon.color-acento-contenido.p-3
          p Para ampliar la información de las diferentes clasificaciones, revise el <i>Anexo 8. Patrones de conducta</i>, en la sección clasificación, en la cual se describen aspectos relacionados con estas conductas y las generaciones conocidas como Baby Boomers, Generación X, Y los Millennials y Z o Centennials.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-8_patrones_de_conducta.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 8.] Patrones de conducta

    h3.my-5 Herramientas para medir el comportamiento
    p En la actualidad, con el exceso de competencia a nivel de marketing, es necesario conocer y hacer uso correcto de las diferentes herramientas disponibles para medir el comportamiento de los usuarios y consumidores y así poder destacar frente a los competidores, veamos algunas características con relación a esto:
    .row.justify-content-center.my-5
      .col-lg-5.my-3
        .tarjeta.tarjeta-slide.arriba.color-verde(@mouseover="indicadorTarjetaSlide = false").tarjeta-animada2
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-4
              p #[strong Formas de impactar:] Casanova Ríspoli (2009) menciona que en la actualidad hay una saturación publicitaria y todos los días nacen más formas de impactar al público objetivo en la web. Esta situación no le ayuda a la publicidad como tal porque el cliente se ve sometido a un exceso de información.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img5.png')})`}")

      .col-lg-5.my-3
        .tarjeta.tarjeta-slide.arriba.color-verde(@mouseover="indicadorTarjetaSlide = false").tarjeta-animada2
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-4
              p #[strong Patrones de Conducta:] dicha saturación se traduce como un problema para las marcas que tienen como fin el impacto de su público objetivo. Por esta razón se han creado unas herramientas que permiten conocer los patrones de conducta del cliente y así poder brindar una mejor experiencia de navegación y de impacto visual publicitario.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img6.png')})`}")

    .row.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3.my-5
          p Para ampliar la información revise el <i>Anexo 9</i>. Herramientas para medir el comportamiento, en la sección de herramientas para medir el comportamiento, donde encontrará información detallada sobre estas. 
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-9_herramientas_medir_comportamiento.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 9.] Herramientas para medir el comportamiento

      p.my-5 Estimado aprendiz, ha llegado al final de este componente formativo, recuerde explorar los demás recursos que se encuentran disponibles, para esto diríjase al menú principal en donde encontrará la síntesis, la actividad didáctica, material complementario, entre otros.




</template>

<script>
export default {
  name: 'Tema4',
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

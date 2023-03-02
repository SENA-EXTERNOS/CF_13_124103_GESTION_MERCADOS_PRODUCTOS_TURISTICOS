<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.my-5
      .col-lg-5.mb-3
        figure
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")
      .col-lg-7
        p Estimado aprendiz, bienvenido a este recurso educativo, con el cual aprenderá sobre la importancia de los perfiles de audiencia y las comunidades virtuales, el recurso describe la tipología y las diversas técnicas que se utilizan para la identificación de audiencias en relación con la cultura de las masas y la gestión de clientes, adicionalmente presenta aspectos que caracterizan una comunidad virtual y la etiqueta a utilizar. Describe técnicas, herramientas y estrategias de <i>marketing</i> digital, patrones de conducta y herramientas para medir el comportamiento. 
        p En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo.

    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

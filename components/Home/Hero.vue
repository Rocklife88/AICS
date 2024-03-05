<template>
  <div
    class="flex-reverse items-center md:flex justify-center md:min-h-screen min-h-full mb-44 md:mb-0 w-full mx-auto white md:pt-2 md:mt-0 bg-white"
  >
    <!-- Container flessibile per la hero section -->
    <div
      class="container relative gap-1 items-center mx-auto flex flex-col md:flex-row"
    >
      <!-- Blocco sinistro con testo e pulsante -->
      <div class="w-full md:w-1/2">
        <div class="text-left">
          <img class="w-1/3" src="/assets/images/logo_aicslucca.png" alt="" />
          <h1 class="text-4xl md:text-5xl font-bold text-primaryDarker">
            IL TUO SPORT<br />
            SEMPRE CON TE
          </h1>
          <p class="mt-4 text-xl text-primary">
            Entra nel mondo AICS e diventi protagonista del tuo sport! Contenuti
            sempre aggiornati e un app dedicata per darti il massimo
          </p>
        </div>
      </div>
      <!-- Blocco destro con immagine -->
      <div class="md:block md:w-2/3 md:mt-0">
        <img
          src="/assets/images/hero.png"
          alt="Immagine squadra calcio"
          class="w-full h-90 object-cover"
        />
      </div>
    </div>
  </div>
</template>

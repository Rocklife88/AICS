<template>
    <div class="relative">
      <!-- Video Hero -->
      <video class="w-full h-screen object-cover" autoplay muted loop>
        <source src="/assets/video/calcioHero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- Overlay per consentire l'accesso al menu -->
      <div class="absolute top-0 left-0 w-full h-full bg-primary opacity-20"></div>
      <!-- Header Content -->
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div class="container relative gap-1 items-center mx-auto flex flex-col md:flex-row p-6">
          <!-- Blocco sinistro con testo e pulsante -->
          <div class="w-full md:w-1/2">
            <div class="text-left">
              <img class="w-1/3" src="/assets/images/logo_aicslucca.png" alt="" />
              <h1 class="text-3xl md:text-4xl font-bold text-white">
                IL TUO SPORT<br />
                SEMPRE CON TE
              </h1>
              <p class="mt-4 text-lg md:text-xl text-white">
                Entra nel mondo AICS e diventi protagonista del tuo sport! Contenuti
                sempre aggiornati e un'app dedicata per darti il massimo.
              </p>
            </div>
          </div>
          <!-- Blocco destro con immagine -->
          <div class="md:block md:w-2/3 md:mt-0">
            <!-- <img
              src="/assets/images/hero.png"
              alt="Immagine squadra calcio"
              class="w-full h-90 object-cover"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
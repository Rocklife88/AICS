<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <!-- Video in background -->
    <video class="absolute top-0 left-0 z-0 w-full h-full object-cover" autoplay muted loop>
      <source src="/assets/video/calcio.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Overlay con opacità -->
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    <!-- Container per il contenuto -->
    <div class="relative z-10 flex items-center justify-center min-h-screen py-6 md:pb-60">
      <div class="container mx-auto flex flex-col md:flex-row gap-1 items-center p-6 text-white text-left">
        <!-- Blocco sinistro con testo e pulsante -->
        <div class="w-full md:w-1/2">
          <div>
            <img class="w-1/3" src="/assets/images/logo_aicslucca.png" alt="" />
            <h1 class="text-3xl md:text-4xl font-bold">
              IL TUO SPORT<br />
              SEMPRE CON TE
            </h1>
            <p class="mt-4 text-lg md:text-xl">
              Entra nel mondo AICS e diventi protagonista del tuo sport! Contenuti
              sempre aggiornati e un'app dedicata per darti il massimo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

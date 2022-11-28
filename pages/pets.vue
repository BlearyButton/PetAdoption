<template>
  <div class="bg-gray-200 h-screen">
    <!-- header -->
    <div
      class="relativew-full shadow-sm z-20 flex flex-row justify-between py-6 pl-12 md:pl-24 lg:pl-48 relative"
    >
      <a href="#"
        ><div
          class="flex flex-row font-poppins text-md text-mediumpurple font-extrabold"
        >
          Adopt
          <p class="ml-1 text-mediumorange">Today</p>
        </div></a
      >
      <div
        class="flex flex-row font-poppins text-md text-darkblue font-bold mr-24"
      >
        <a href="quizstart"
          ><div class="mx-4 lg:mx-8 xl:mx-12">The quiz</div></a
        >
        <a href="pets"
          ><div class="underline underline-offset-2 mx-4 lg:mx-8 xl:mx-12">
            Our pets
          </div></a
        >
        <a href="#"><div class="mx-4 lg:mx-8 xl:mx-12">The process</div></a>
        <a href="#"><div class="mx-4 lg:mx-8 xl:mx-12">Categories</div></a>
        <a href="#"><div class="mx-4 lg:mx-8 xl:mx-12">Contact</div></a>
      </div>
    </div>

    <!-- all our pets -->
    <div class="flex justify-center text-center mt-12">
      <div class="mt-24 font-poppins">
        <h3 class="text-mediumpurple font-extrabold">Our pets</h3>
        <h1 class="mt-4 text-4xl text-darkblue font-extrabold">
          All our pets up for adoption
        </h1>
      </div>
    </div>

    <!-- pet categories -->
    <div class="mt-12 flex flex-row justify-center">
      <div
        class="mx-2 bg-white flex flex-row rounded-lg outline outline-1 font-poppins font-extrabold px-8 py-2"
      >
        Cats
      </div>
      <div
        class="mx-2 bg-white flex flex-row rounded-lg outline outline-1 font-poppins font-extrabold px-8 py-2"
      >
        Dogs
      </div>
      <div
        class="mx-2 bg-white flex flex-row rounded-lg outline outline-1 font-poppins font-extrabold px-8 py-2"
      >
        Birds
      </div>
      <div
        class="mx-2 bg-white flex flex-row rounded-lg outline outline-1 font-poppins font-extrabold px-8 py-2"
      >
        Rabbits
      </div>
      <div
        class="mx-2 bg-white flex flex-row rounded-lg outline outline-1 font-poppins font-extrabold px-8 py-2"
      >
        Fishes
      </div>
      <div
        class="mx-2 bg-white flex flex-row rounded-lg outline outline-1 font-poppins font-extrabold px-8 py-2"
      >
        Reptiles
      </div>
    </div>

    <!-- pet overview -->
    <div class="mt-24 flex justify-center flex-row">
      <div
        class="mx-6 pb-12 flex flex-col bg-white w-1/5 h-96 drop-shadow-xl rounded-lg"
      >
        <div
          class="bg-mediumpurple basis-4/6 rounded-b-none rounded-t-lg flex justify-center items-center"
        >
          <img src="../assets/images/adopt/cusco.png" class="w-3/6 -mb-20" />
        </div>
        <div class="flex flex-col ml-8">
          <div class="flex flex-row basis-2/6">
            <div class="mt-16 flex flex-center">
              <div class="font-poppins text-xl font-extrabold">Cusco</div>
              <img src="../assets/images/adopt/iconmale.png" class="ml-2 h-4" />
            </div>
          </div>
          <div class="font-poppins text-sm text-mediumgray font-extrabold">
            6 months, 5 kg
          </div>
          <div class="mt-4 flex flex-col md:flex-row">
            <div
              class="mr-2 font-poppins text-sm bg-lightblue text-mediumblue rounded-lg pl-2 pr-2 pt-1 pb-1"
            >
              smart
            </div>
            <div
              class="font-poppins text-sm bg-lightorange text-mediumorange rounded-lg pl-2 pr-2 pt-1 pb-1"
            >
              friendly
            </div>
          </div>
          <div class="mt-4 flex flex-row items-center">
            <div
              class="font-extrabold text-xs font-poppins text-darkblue underline underline-offset-2"
            >
              Read more
            </div>
            <img
              src="../assets/images/adopt/arrowrightdarkblue.png"
              class="h-2 ml-1"
            />
          </div>
        </div>
      </div>
      <div
        class="mx-6 pb-12 flex flex-col bg-white w-1/5 h-96 drop-shadow-xl rounded-lg"
      >
        <div
          class="bg-mediumorange basis-4/6 rounded-b-none rounded-t-lg flex justify-center items-center"
        >
          <img src="../assets/images/adopt/lola.png" class="w-4/6 -mb-32" />
        </div>
        <div class="flex flex-col ml-8">
          <div class="flex flex-row basis-2/6">
            <div class="mt-10 flex flex-center">
              <div class="font-poppins text-xl font-extrabold">Lola</div>
              <img src="../assets/images/adopt/iconmale.png" class="ml-2 h-4" />
            </div>
          </div>
          <div class="font-poppins text-sm text-mediumgray font-extrabold">
            11 months, 13 kg
          </div>
          <div class="mt-4 flex flex-row">
            <div
              class="mr-2 font-poppins text-sm bg-lightorange text-mediumorange rounded-lg pl-2 pr-2 pt-1 pb-1"
            >
              kind
            </div>
            <div
              class="mr-2 font-poppins text-sm bg-lightpurple text-mediumpurple rounded-lg pl-2 pr-2 pt-1 pb-1"
            >
              fun
            </div>
            <div
              class="font-poppins text-sm bg-lightblue text-mediumblue rounded-lg pl-2 pr-2 pt-1 pb-1"
            >
              smart
            </div>
          </div>
          <div class="mt-4 flex flex-row items-center">
            <div
              class="font-extrabold text-xs font-poppins text-darkblue underline underline-offset-2"
            >
              Read more
            </div>
            <img
              src="../assets/images/adopt/arrowrightdarkblue.png"
              class="h-2 ml-1"
            />
          </div>
        </div>
      </div>
      <div
        class="mx-6 pb-12 flex flex-col bg-white w-1/5 h-96 drop-shadow-xl rounded-lg"
      >
        <div
          class="bg-mediumblue basis-4/6 rounded-b-none rounded-t-lg flex justify-center items-center"
        >
          <img src="../assets/images/adopt/luccy.png" class="w-4/6 -mb-20" />
        </div>
        <div class="flex flex-col ml-8">
          <div class="flex flex-row basis-2/6">
            <div class="mt-10 flex flex-center items-center">
              <div class="font-poppins text-xl font-extrabold">Luccy</div>
              <img
                src="../assets/images/adopt/iconfemale.png"
                class="ml-2 h-4"
              />
            </div>
          </div>
          <div class="font-poppins text-sm text-mediumgray font-extrabold">
            6 months, 5 kg
          </div>
          <div class="mt-4 flex flex-row">
            <div
              class="mr-2 font-poppins text-sm bg-lightorange text-mediumorange rounded-lg pl-2 pr-2 pt-1 pb-1"
            >
              kind
            </div>
            <div
              class="font-poppins text-sm bg-lightblue text-mediumblue rounded-lg pl-2 pr-2 pt-1 pb-1"
            >
              smart
            </div>
          </div>
          <div class="mt-4 flex flex-row items-center">
            <div
              class="font-extrabold text-xs font-poppins text-darkblue underline underline-offset-2"
            >
              Read more
            </div>
            <img
              src="../assets/images/adopt/arrowrightdarkblue.png"
              class="h-2 ml-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

import React from 'react'

function PageRealisation() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 pt-40">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nos projets</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Apprenez-en plus sur notre travail et nos diverses expériences à travers le monde</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

            <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium rounded-full bg-blue-200  text-gray-900 focus:outline-none border   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg class="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
              </svg>

            </a>
          </div>
        </div>
      </section>

      <aside aria-label="Related articles" class="py-8 lg:py-24  dark:bg-gray-800">
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white"></h2>
          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article class="max-w-xs">
              <a href="#">
                <img src={require("../images/image1.jpg")}  class="mb-5 rounded-lg" alt="Image 1" />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Notre centre de formation</a>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">
                Au fil des années, notre institut a évolué pour offrir des formations de qualité en économie et en gestion financière. Après des mois de préparation, nous avons élargi notre offre pour répondre aux besoins du marché.
              </p>
              <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Lire en 2 minutes
              </a>

            </article>
            <article class="max-w-xs">
              <a href="#">
                <img src={require("../images/image2.jpg")} class="mb-5 rounded-lg" alt="Image 2" />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Conseils pour la conception d'entreprise</a>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">
                Au cours de l'année écoulée, notre centre a évolué pour proposer des stratégies innovantes en création et gestion d'entreprise. Après des mois de préparation, nous avons optimisé nos formations pour un impact maximal.
              </p>
              <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Lire en 12 minutes
              </a>

            </article>
            <article class="max-w-xs">
              <a href="#">
                <img src={require("../images/image3.jpg")} class="mb-5 rounded-lg" alt="Image 3" />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Nous avons collaboré avec Google</a>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">
                Cette année, notre centre de formation a franchi une nouvelle étape en s'associant à Google pour proposer des programmes innovants en entrepreneuriat et économie numérique. Après des mois de préparation, nous sommes prêts à offrir des opportunités uniques à nos apprenants.
              </p>
              <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Lire en 8 minutes
              </a>

            </article>
            <article class="max-w-xs">
              <a href="#">
                <img src={require("../images/image8.jpg")} class="mb-5 rounded-lg" alt="Image 4" />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Notre premier projet en finance numérique</a>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">
                Cette année, notre centre de formation a lancé son premier projet en finance numérique. Après des mois de préparation, nous avons conçu un programme innovant pour aider les entrepreneurs et les professionnels à maîtriser les outils financiers modernes.
              </p>
              <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Lire en 4 minutes
              </a>

            </article>
          </div>
        </div>
      </aside>


      <section>
        <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
          </div>
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contactez notre équipe</h2>
            <p class="mt-2 text-lg/8 text-gray-600">Nous sommes à votre disposition pour répondre à vos besoins et vous accompagner dans vos projets.</p>

          </div>
          <form action="#" method="POST" class="mx-auto mt-16 max-w-3xl sm:mt-20">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Nom</label>
                <div class="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Prenom</label>
                <div class="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
                </div>
              </div>
              <div class="flex gap-x-4 sm:col-span-2">
                <div class="flex h-6 items-center">
                  <button type="button" class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                    <span class="sr-only">Accepter les politiques</span>
                    <span aria-hidden="true" class="size-4 translate-x-0 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out"></span>
                  </button>
                </div>
                <label class="text-sm/6 text-gray-600" id="switch-1-label">
                  En sélectionnant cette option, vous acceptez notre
                  <a href="#" class="font-semibold text-indigo-600">politique&nbsp;de confidentialité</a>.
                </label>
              </div>

            </div>
            <div class="mt-10">
              <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Discutons-en
              </button>
            </div>

          </form>
        </div>

      </section>
    </div>
  )
}

export default PageRealisation
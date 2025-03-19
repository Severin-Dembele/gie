import React from 'react'

function PagePublication() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 pt-40">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Médias et publications de PI</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"> Apprenez-en davantage sur la recherche sur la formation PI et la construction de PI, et écoutez ce
            que les autres ont à dire sur le programme</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

            <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium rounded-full bg-blue-200  text-gray-900 focus:outline-none border   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg class="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
              </svg>

            </a>
          </div>
        </div>
      </section>
      <section class="mx-auto p-6 bg-white dark:bg-gray-900 ">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Formation PI dans les médias</h2>

        <ul class="space-y-4">
          <li class=" dark:border-gray-700 pb-4">
            <div class="flex items-center space-x-4">
            <img src={require("../images/pub.avif")} alt="Media Image" class="w-20 h-20 rounded-lg"/>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">La psychologie surpasse la formation commerciale en matière d'entrepreneuriat</h3>
                  <p class="text-gray-500 dark:text-gray-400">The Economist, 21 septembre 2017</p>
                </div>
            </div>
          </li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Recherches documentées</h2>

        <div class="grid gap-6">
          <div class="flex items-center p-4 dark:border-gray-700 rounded-lg space-x-4">
          <img src={require("../images/pub.avif")} alt="Research Image" class="w-20 h-20 rounded-lg"/>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">L’enseignement de l’initiative personnelle</h3>
                <p class="text-gray-500 dark:text-gray-400">Campos, F., Frese, M., Goldstein, M., Iacovone, L., Johnson, H., McKenzie, D., Mensmann, M. (2017). <i>Sciences, 357, 1287-1290.</i></p>
              </div>
          </div>

          <div class="flex items-center p-4 dark:border-gray-700 rounded-lg space-x-4">
          <img src={require("../images/pub.avif")} alt="Research Image" class="w-20 h-20 rounded-lg"/>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Formation psychologique pour les entrepreneurs</h3>
                <p class="text-gray-500 dark:text-gray-400">Frese, M., Gielnik, MM, & Mensmann, M. (2016). <i>Orientations actuelles en sciences psychologiques, 25(3), 196-202.</i></p>
              </div>
          </div>

          <div class="flex items-center p-4 dark:border-gray-700 rounded-lg space-x-4">
          <img src={require("../images/pub.avif")} alt="Research Image" class="w-20 h-20 rounded-lg"/>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">L’augmentation de l’initiative personnelle</h3>
                <p class="text-gray-500 dark:text-gray-400">Glaub, M., Frese, M., Fischer, S., Hoppe, M. (2014). <i>Académie de formation et d'éducation en gestion, 13, 354-379.</i></p>
              </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Autres publications sur les aspects de l'IP</h2>

        <div class="grid gap-6">
          <div class="flex items-center p-4 dark:border-gray-700 rounded-lg space-x-4">
          <img src={require("../images/pub.avif")} alt="Research Image" class="w-20 h-20 rounded-lg"/>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">L’innovation ne suffit pas</h3>
                <p class="text-gray-500 dark:text-gray-400">Baer, M. et Frese, M. (2003). <i>Journal of Organizational Behavior, 24, 45-68.</i></p>
              </div>
          </div>

          <div class="flex items-center p-4 dark:border-gray-700 rounded-lg space-x-4">
          <img src={require("../images/pub.avif")} alt="Research Image" class="w-20 h-20 rounded-lg"/>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Les objectifs nécessitent des intentions de mise en œuvre</h3>
                <p class="text-gray-500 dark:text-gray-400">Brandstaetter, V., Heimbeck, D., Malzacher, JT, & Frese, M. (2003). <i>Revue européenne de psychologie du travail et des organisations, 12, 37-59.</i></p>
              </div>
          </div>

          <div class="flex items-center p-4 dark:border-gray-700 rounded-lg space-x-4">
          <img src={require("../images/pub.avif")}  alt="Research Image" class="w-20 h-20 rounded-lg"/>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Climat d'initiative personnelle et d'innovation</h3>
                <p class="text-gray-500 dark:text-gray-400">Fischer, S., Frese, M., Mertins, JC, Hardt, JV, Flock, T., Schauder, J. et al. (2014). <i>Journal de la culture entrepreneuriale, 22, 91-109.</i></p>
              </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PagePublication
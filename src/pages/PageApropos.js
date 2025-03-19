import React from 'react'

function PageApropos() {
  return (
    <div>  <section class="bg-white dark:bg-gray-900 pt-40">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ce que nous faisons</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">En savoir plus sur GIE et les services que nous proposons.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

          <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium rounded-full bg-blue-200  text-gray-900 focus:outline-none border   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <svg class="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
            </svg>

          </a>
        </div>
      </div>
    </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mr-auto  ">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Ce que nous faisons<br /></h1>
            <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Nous promouvons l'entrepreneuriat en élaborant, en mettant en œuvre et en
              évaluant des interventions et des programmes de formation qui favorisent la
              pensée et le comportement entrepreneuriaux. Dans nos programmes de
              formation, nous utilisons des contenus de formation fondés sur des données
              probantes et appliquons des approches de formation orientées vers l'action. Des
              recherches ont montré que les approches orientées vers l'action, dans lesquelles
              les participants apprennent en faisant, sont plus performantes que les autres
              cours de formation (plus conventionnels et basés sur des cours magistraux). Bien
              que nos programmes de formation soient basés sur des preuves scientifiques et
              aient été évalués selon les normes empiriques les plus élevées, nous sommes
              conscients qu'aucune intervention n'est jamais parfaite. C'est pourquoi nous
              réévaluons continuellement nos programmes de formation afin d'approfondir
              davantage la compréhension théorique et pratique de la manière dont nos
              programmes peuvent être les plus efficaces pour bénéficier aux participants, aux
              sociétés et à l'environnement. À cette fin, nous investissons dans la création de
              nouveaux modèles et formats de formation conformes aux ODD des Nations
              Unies.
            </p>
          </div>

        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 flex justify-center ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Nos services
        </h1>
      </section>

      <section class="bg-white dark:bg-gray-900 mx-auto max-w-screen-xl my-10 ">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={require("../images/img1.avif")} alt="" />
            <p class="text-center text-black text-xl my-3 font-bold dark:text-gray-400">Développement de
              nouvelles formations</p>

          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={require("../images/img2.avif")} alt="" />
            <p class="text-center text-black text-xl my-3 font-bold dark:text-gray-400">Adaptations des
              programmes de formation</p>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={require("../images/img3.avif")} alt="" />
            <p class="text-center text-black text-xl my-3 font-bold dark:text-gray-400">Mises en œuvre de la
              formation</p>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={require("../images/img4.avif")} alt="" />
            <p class="text-center text-black text-xl my-3 font-bold dark:text-gray-400">Des évaluations
              d’impact rigoureuses</p>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={require("../images/img5.avif")} alt="" />
            <p class="text-center text-black text-xl my-3 font-bold dark:text-gray-400">Gestion de projet </p>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={require("../images/img6.avif")} alt="" />
            <p class="text-center text-black text-xl my-3 font-bold dark:text-gray-400">Coaching et
              mentorat</p>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={require("../images/img7.avif")} alt="" />
            <p class="text-center text-black text-xl my-3 font-bold dark:text-gray-400">Renforcement des capacités
              de nos partenaires
              mondiaux</p>
          </div>

        </div>

      </section>

      <section className="bg-white dark:bg-gray-900 flex justify-center ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">

        </h1>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl  lg:px-6">
          <div className="mr-auto  ">
            <h1 className=" text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"> Programmes de formation<br /></h1>
            <p className="font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
              Nos deux principaux programmes de formation, la formation à l'initiative
              personnelle (PI) et la formation des étudiants à la promotion entrepreneuriale
              (STEP), sont des interventions de formation à l'entrepreneuriat orientées vers
              l'action et fondées sur des données probantes, qui ont été développées par une
              équipe de recherche sous la direction des professeurs Michael Frese et Michael
              Gielnik. Découvrez-en plus sur les différents groupes cibles et sur les projets et
              résultats antérieurs !
              Unies.
            </p>
          </div>

        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 ">
        <div className='px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <h2 className=" text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">Groupes cibles</h2>
          <p>Nous restons fidèles à nos principes et travaillons toujours de manière méthodologique, en
            nous basant sur des données probantes et en étant orientés vers l'action. Nous pouvons (et
            sommes convaincus que nous devons) également inclure des facteurs et des contenus
            spécifiques au groupe cible et au contexte. Dans le passé, nous avons proposé avec succès des
            programmes destinés à des groupes cibles divers.</p>
          <ul class="space-y-4 text-gray-900 dark:text-white">
            <li class="border-l-4 border-indigo-600 pl-4">
              <h3 class="text-lg font-semibold">Agripreneurs</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Programmes de formation à l'agripreneuriat pour favoriser une croissance durable dans les zones rurales.
              </p>
            </li>

            <li class="border-l-4 border-green-600 pl-4">
              <h3 class="text-lg font-semibold">Entrepreneurs durables / sociaux</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Des programmes de formation qui favorisent l'entrepreneuriat durable pour promouvoir des idées et des mises en œuvre commerciales ayant un impact positif sur la société et l'environnement.
              </p>
            </li>

            <li class="border-l-4 border-yellow-600 pl-4">
              <h3 class="text-lg font-semibold">Ouvriers</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Programmes de formation pour les travailleurs afin de promouvoir l'emploi salarié et des conditions de travail décentes.
              </p>
            </li>

            <li class="border-l-4 border-blue-600 pl-4">
              <h3 class="text-lg font-semibold">Étudiants universitaires, EFTP et lycéens</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Programmes de formation pour étudiants pouvant être mis en œuvre dans les établissements d'enseignement (à différents niveaux).
              </p>
            </li>

            <li class="border-l-4 border-pink-600 pl-4">
              <h3 class="text-lg font-semibold">Femmes entrepreneures</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Programmes de formation axés sur le renforcement de l'entrepreneuriat féminin et l'autonomisation des femmes en affaires.
              </p>
            </li>

            <li class="border-l-4 border-red-600 pl-4">
              <h3 class="text-lg font-semibold">Stagiaires analphabètes</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Adaptations des supports de formation aux groupes cibles défavorisés ayant un accès limité ou inexistant à l'enseignement supérieur.
              </p>
            </li>

            <li class="border-l-4 border-purple-600 pl-4">
              <h3 class="text-lg font-semibold">Les adolescentes et les jeunes femmes</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Adaptations des supports de formation aux groupes cibles défavorisés ayant un accès limité ou inexistant à l'enseignement supérieur.
              </p>
            </li>
          </ul>

        </div>

      </section>
    </div>
  )
}

export default PageApropos
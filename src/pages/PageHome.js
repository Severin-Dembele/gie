
import React from 'react';
import { Link } from 'react-router-dom';

function PageHome() {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900 pt-40">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bienvenue à GIE</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Nous sommes un groupe de formateus passionnés formés à l'approche IP (Initiative Personnelle) par l'Université de Leuphana. Nous entendons à travers notre GIE changer le Mindset des entrepreneurs Africains au profit d'entreprises performantes et pérennes.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to="/gie/about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            En savoir plus
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>

                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Ce que nous faisons<br /></h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Nous promouvons l'entrepreneuriat en élaborant, en mettant en œuvre et en évaluant des
                            interventions et des programmes de formation qui favorisent la pensée et le comportement
                            entrepreneuriaux. Dans nos programmes de formation, nous utilisons des contenus de
                            formation fondés sur des données probantes et appliquons des approches de formation
                            orientées vers l'action.
                        </p>

                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={require("../images/image5.jpg")} alt="hero image" />
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900 flex justify-center ">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Nos Programmes de formation
                </h1>
            </section>

            <section class="bg-white dark:bg-gray-800">
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                    <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Formation PI</h2>
                            <p class="mb-8 font-light lg:text-xl">La formation à l'initiative personnelle (IP) est un programme psychologique destiné aux
                                entrepreneurs ayant déjà une entreprise. Il a été développé au sein du groupe Frese et mis en
                                œuvre dans le cadre de plusieurs projets de recherche financés à l'échelle internationale en
                                Afrique, en Asie, en Amérique latine et dans les Caraïbes. Les recherches ont montré qu'il peut
                                être plus efficace que les programmes de formation commerciale traditionnels..</p>
                            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Facilitation des activités économiques</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Collaboration entre membres</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Objectifs communs</span>
                                </li>
                            </ul>
                            <p class="mb-8 font-light lg:text-xl">Le GIE est une solution idéale pour les entreprises cherchant à maximiser leurs ressources et à atteindre des résultats significatifs.</p>
                        </div>
                        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={require("../images/image6.png")} alt="dashboard feature image" />
                    </div>

                    <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={require("../images/image4.png")} alt="feature image 2" />
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Formation STEP</h2>
                            <p class="mb-8 font-light lg:text-xl">STEP (Student Training for Entrepreneurial Promotion) est un programme de formation à
                                l'entrepreneuriat destiné en particulier aux jeunes adultes ayant peu ou pas d'expérience
                                entrepreneuriale. Il a été fondé par le groupe Frese en 2008 et a depuis été mis en œuvre en
                                partenariat avec plus d'une vingtaine d'institutions dans les pays à revenu faible et
                                intermédiaire du monde entier.</p>
                            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Rapports et tableaux de bord dynamiques</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Templates pour tous</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Automatisation des processus</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Gestion des connaissances</span>
                                </li>
                            </ul>
                            <p class="font-light lg:text-xl">Le GIE est une solution idéale pour les entreprises cherchant à maximiser leurs ressources et à atteindre des résultats significatifs. En collaborant étroitement, les membres peuvent partager des connaissances, des compétences et des ressources pour surmonter les défis communs et saisir de nouvelles opportunités.</p>
                        </div>
                    </div>


                </div>
            </section>

            <section className="bg-white dark:bg-gray-900 flex justify-center ">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Nos projets
                </h1>
            </section>

            <section className="bg-white dark:bg-gray-900 flex justify-center ">
                <img src={require("../images/world.avif")} alt="Carte image" className='w-full object-contain' />

            </section>

            <section className="bg-white dark:bg-gray-900 flex justify-center ">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Nos Clients et Partenaires - Secteur public
                </h1>
            </section>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-10 text-center p-10 justify-center">
                <div class="flex items-center justify-center h-60 w-64 rounded-full  bg-gray-100 hovere">
                    <span class="font-bold text-blue-500 text-center hovere">International  Finance  Corporation <br /> (SFI)</span>
                </div>
                <div class="flex items-center justify-center h-60 w-64 rounded-full  bg-gray-100 hovere">
                    <span class="font-bold text-blue-500 text-center hovere">La Banque mondiale <br />Genre en Afrique</span>
                </div>
                <div class="flex items-center justify-center h-60 w-64 rounded-full  bg-gray-100 hovere">
                    <span class="font-bold text-blue-500 text-center hovere">Programme alimentaire <br /> mondial (PAM)</span>
                </div>
                <div class="flex items-center justify-center h-60 w-64 rounded-full  bg-gray-100 hovere">
                    <span class="font-bold text-blue-500 text-center hovere">International Finance Corporation (SFI)</span>
                </div>


                <div class="flex items-center justify-center h-60 w-64 rounded-full  bg-gray-100 hovere">
                    <span class="font-bold text-blue-500 text-center hovere">International Finance Corporation (SFI)</span>
                </div>

                <div class="flex items-center justify-center h-60 w-64 rounded-full  bg-gray-100 hovere">
                    <span class="font-bold text-blue-500 text-center hovere">International Finance Corporation (SFI)</span>
                </div>
            </div>

            <section className="bg-white dark:bg-gray-900 flex justify-center ">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Notre équipe
                </h1>
            </section>



            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"></h2>
                        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Vous souhaitez en savoir plus sur les esprits et les cœurs qui se cachent derrière
                            l'organisation à but non lucratif GIE ? Rencontrez notre équipe et apprenez-en
                            plus sur notre vision, notre mission et nos valeurs.</p>
                    </div>
                    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="w-48 rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("../images/administrateur.jpeg")} alt="Bonnie Avatar" />
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">KONKOBO Soulamane</a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Administrateur</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    L'administrateur du GIE est chargé de la gestion et de l'administration de l'organisation.
                                </p>

                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <img class="w-48 rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("../images/user.png")}  alt="Jese Avatar" />
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">SAWADOGO Jacob</a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Chargé du développement des affaires (CDA)</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    Le  CDA contribue à la croissance du GIE en identifiant des opportunités de partenariat et en développant des relations avec des partenaires potentiels.
                                </p>

                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <img class="w-48 rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("../images/user.png")} alt="Michael Avatar" />
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">TIENDREBEOGO Salifou </a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Chargé des partenariats et du fundraising</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                Le Chargé des partenariats et du fundraising a plusieurs fonctions importantes qui contribuent au succès et à la croissance de l'organisation.
                                </p>

                              
                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <img class="w-48 rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("../images/user.png")} alt="Sofia Avatar" />
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">CONGO Massy</a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Chargé du marketing et de l’organisation</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                Contribue à la mise en œuvre de la stratégie marketing et en assurant une organisation efficace des activités du GIE. 
                                </p>

                               
                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#" className=''>
                            <img class="w-48 rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("../images/user.png")} alt="Michael Avatar" />
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">ZONG-NABA Florentin</a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Chargé de l’innovation des programmes de formation et du développement</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                Le Chargé de l'innovation des programmes de formation et du développement a plusieurs fonctions importantes qui contribuent au développement et à l'amélioration de l’approche IP training. 
                                </p>

                              
                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <img class="w-48 rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("../images/user.png")} alt="Michael Avatar" />
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Mme ILBOUDO/OUEDRAOGO Alizèta  </a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Chargé de l’administration et des finances</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                Le Chargé de l'administration et des finances est responsable de plusieurs fonctions importantes liées à la gestion des ressources financières et administratives de l'organisation. 
                                </p>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
    );
}

export default PageHome;

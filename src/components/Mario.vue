<style>
.custom-shadow {box-shadow: 0 20px 75px 10px rgb(0 0 0 / 0.40);}
</style>

<template>
    <div class="bg-slate-900 h-full">
        <div class="lg:container mx-auto px-0 custom-shadow TIREI UM AZUL DAQUI">
            <nav class="fixed top-0 left-0 w-full backdrop-blur-lg z-50 shadow-xl bg-blue-900 opacity-90">
                <div class="container m-auto flex justify-between items-center text-cyan-100 z-50"> 
                     <a class="" href="">
                        <img src="../image/mariov.svg" alt="" className=" md:h-16 md:w-16 w-24 md:-p-4 pl-4 md:px-0 py-3">
                     </a>
                
                    <ul class="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="#home">Home</a>
                        </li>

                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="#sobre">Sobre</a>
                        </li>

                        <li class="hover:bg-blue-800py-4 px-6">
                                <a href="#missao">Missão</a>
                        </li>

                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="#footer">Contato</a>
                        </li>
                    </ul>


                

                    <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-blue-800 group">
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200"></div>
                        <div class="absolute top-0 -right-full h-screen w-8/12 backdrop-blur-xl bg-blue-900 border-none opacity-0
                        group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                            <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#home">Home</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#sobre">Sobre</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#missao">Missão</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#footer">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>
       

            <section id="home" class="pt-28 lg:pb-0 px-4 lg:px-16 md:grid flex flex-col-reverse lg:grid-cols-2 gap-4 bg-[url('../image/background2.png')] h-full w-full bg-cover bg-{opacity-50}">
                <div>
                    <picture class="flex lg:justify-end md:justify-center md:h-[650px] px-16">
                        <img src="../image/mario.png" alt="foto do Mário Seto">
                    </picture>
                </div>
                <div class="flex justify-center place-items-center mb-8">
                    <h1 class="text-2xl text-center lg:text-left lg:text-5xl md:text-5xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Força e Esperança para a Saúde Mental do Paraná</h1>
                </div>
            </section>

            <section id="sobre"
            class="pt-24 flex flex-col-reverse md:grid lg:grid-cols-2 md:grid-cols-2 gap-10 p-5">
                
                <div  class="px-4 lg:px-16 justify-center">
                    <h2 class="text-gray-400 text-2xl align-baseline font-sans font-medium pt-1 pb-1">Quem é Mário Seto?</h2>
                    <p class="text-lg text-gray-600">Meu nome é Mário Seto, sou pai, psicólogo clínico, cuido de pessoas, trabalho no SUS há 10 anos lutando pela Saúde Mental, comecei em Sarandi, fui chefe na Saúde na Regional de Londrina com 21 municípios e coordenei a Saúde Mental da Regional de Maringá com 30 municípios.</p>
                </div>

                <div  class="px-4 lg:px-16">
                    <picture>
                        <img class="max-h-40 sm:h-28 md:h-36 lg:h-44 flex m-auto" src="../image/mario-com-familia.png" alt="foto do Mário">
                    </picture>
                </div>

            </section>

            <section id="missao"
            class="pt-24 flex flex-col-reverse md:grid lg:grid-cols-2 md:grid-cols-2 gap-10 p-5">

                
                <div  class="px-4 lg:px-16 justify-center">
                    <h2 class="text-gray-400 text-2xl align-baseline font-sans font-medium pt-1 pb-1">Nossa Missão</h2>
                    <p class="text-lg text-gray-600 py-2">Muitos paranaenses precisam de ajuda psicológica e outros tratamentos especializados, seja para o autismo, a depressão, ansiedade, tdah, esquizofrenia. As taxas de suicidio aumentaram e cerca de 86% dos brasileiros têm problemas com saúde mental depois da pandemia.</p>
                    <p class="text-lg text-gray-600 py-2">Meu medo é que não estamos vendo soluções preventivas e interventivas, não temos investimentos em Saúde Mental no Estado. Em casa, na rua e no trabalho não estamos falando e muito menos cuidando da saúde mental das pessoas, às vezes nem de quem amamos, são muitas brigas em vão, todo dia.</p>
                    <p class="text-lg text-gray-600 py-2">Brigar é muito feito, precisamos lutar e lutar pelo certo e com Respeito! Devemos lutar pela Saúde Mental, cuidar do nosso cérebro e coração, pois boas cabeças farão bons amigos e serão bons trabalhadores. E mais que isso, vou continuar cobrando os nossos direitos no poder legislativo, pessoas mais conscientes já sabem que o dinheiro dos impostos que pagamos é o suficiente para fazer projetos incríveis na Saúde Mental do nosso Paraná!</p>
                    <p class="text-lg text-gray-600 py-2">Venha com a gente, discutir de forma madura ações de saúde mental para o estado.</p>
                </div>

            </section>

            <section  class="px-4 lg:px-16 p-16 pt-24">
                <div class="m-auto text-center flex-col w-full">
                    <h2 class="text-gray-400 text-2xl align-baseline font-sans font-medium">Me acompanhe nas redes sociais</h2>
                    <div class="w-full flex justify-around text-white pt-14">
                        
                        <a href="https://www.instagram.com/marioseto23/" target="_black" class="hover:text-gray-300 place-items-center">
                            <font-awesome-icon :icon="instagram" class="h-12 w-12 hover:text-blue-900" />
                        </a>
                        
                        <a href="https://www.facebook.com/MarioSeto23" target="_black" class="hover:text-gray-300">
                             <font-awesome-icon :icon="facebook" class="h-12 w-12 hover:text-blue-900" />
                        </a>
                        <a href="https://www.youtube.com/MarioSa%C3%BAdeMental" target="_black" class="hover:text-gray-300">
                            <font-awesome-icon :icon="youtube" class="h-12 w-12 hover:text-blue-500"/>
                        </a>
                        <a href="" class="hover:text-gray-300">
                            <font-awesome-icon :icon="whatsapp" class="h-12 w-12 hover:text-green-400"/>
                        </a>
                            
                    </div>

                </div>
            </section>

            <section>
                <div class="grid lg:grid-cols-2 gap-10 p-16 pt-24 justify-center bg-gray-300">
                    <div>
                        <h2 class="flex justify-center md:justify-start text-2xl align-baseline font-sans font-medium pt-1 pb-1 text-slate-900">Apoie nossa causa!</h2>
                        <p class="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sed. Aspernatur incidunt provident cumque corporis deserunt sint fuga, enim atque magni minima, voluptas repellat voluptatum, adipisci qui! Ut, numquam quas?</p>
                    </div>

                    <button class="bg-gradient-to-r from-blue-800 to-blue-600 hover:to-blue-900 px-6 py-4 text-3xl leading-6 rounded-full font-semibold text-white max-h-16 md:mx-36 my-auto shadow-gray-500 shadow-2xl"
                    type="button">
                        Quero ajudar
                    </button>
                </div>
            </section>

            <footer id="footer" class="lg:p-24 p-16 pt-24 bg-zinc-900 ">
                <div>
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 w-auto items-center m-auto text-gray-500">
                        <div class="col-span-1 w-auto flex">

                            <div class="">
                                <p class="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/marker.png" class="w-3 h-3">136, Mário José de F. Ferraz, Maringá, Paraná</p>
                                <p class="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/phone.png" class="w-3 h-3"> 44 998181367</p>
                                <p class="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/mail.png" class="w-3 h-3">marioseto@gmail.com</p>
                            </div>
                        </div>

                        <div class="col-span-1 w-auto lg:mt-0 md:mt-0 mt-6 md:ml-auto">
                                <ul class="flex lg:gap-16 md:gap-12 gap-6">
                                    <li class="my-1 hover:text-gray-700"><a href="#Home">Home</a></li>
                                    <li class="my-1 hover:text-gray-700"><a href="#sobre">Sobre</a></li>
                                    <li class="my-1 hover:text-gray-700"><a href="#">Missão</a></li>
                                </ul>
                        </div>
                    </div>
                </div>

                <div class="w-auto lg:flex md:flex table justify-between pt-6 lg:pt-16 md:pt-16 text-gray-700
                ">
                    <div id="footer-logo-section">
                            <p>Mário Seto</p>
                    </div>
                    <div id="copyright-text">
                            &copy; Topo da praça corporations. 2022. All rights reserved.
                    </div>
                    <div class="flex justify-around gap-8 w-auto mt-8 md:mt-0 lg:mt-0">
                            <a href="https://www.instagram.com/marioseto23/" target="_black">
                                <font-awesome-icon :icon="instagram" class="h-6 w-6 hover:text-blue-900"/>
                            </a>
                            <a href="https://www.facebook.com/MarioSetoTakeguma" target="_black">
                                 <font-awesome-icon :icon="facebook" class="h-6 w-6 hover:text-blue-900" />
                            </a>
                            <a href="https://www.youtube.com/MarioSa%C3%BAdeMental" target="_black">
                                <font-awesome-icon :icon="youtube" class="h-6 w-6 hover:text-blue-500"/>
                            </a>
                            <font-awesome-icon :icon="whatsapp" class="h-6 w-6 hover:text-green-400"/>
                    </div>
                </div>

            </footer>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default {
    name: 'Mario',
    components: {FontAwesomeIcon},
    data () {
        return {
            instagram: faInstagram,
            facebook: faFacebook,
            linkedin: faLinkedin,
            whatsapp: faWhatsapp,
            youtube: faYoutube

            
        }
    }
}

</script>

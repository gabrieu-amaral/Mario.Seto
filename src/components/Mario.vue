<style>
.custom-shadow {box-shadow: 0 20px 75px 10px rgb(0 0 0 / 0.30);}
</style>

<template>
    <div class="bg-gradient-to-b from-gray-100 to-[#7bb4e2] h-full">
        <div class="lg:container mx-auto px-0 bg-gray-100 custom-shadow overflow-hidden">
            <nav class="fixed top-0 left-0 w-full backdrop-blur-lg z-50 shadow-xl
            bg-gradient-to-r from-[#053664] to-[#0b63a9]">
                <div class="container m-auto flex justify-between items-center text-cyan-100 z-50"> 
                     <a class="" href="">
                        <img src="../image/mariov.svg" alt="logo Mário Seto" className=" md:h-16 md:w-16 w-24 md:-p-4 pl-4 md:px-0 py-3">
                     </a>
                
                    <ul class="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                        <li class="">
                                <a href="#home" class="hover:bg-[#0f3558] py-4 px-6">Home</a>
                        </li>

                        <li >
                                <a href="#sobre" class="hover:bg-[#0f3558] py-4 px-6">Sobre</a>
                        </li>

                        <li >
                                <a href="#missao" class="hover:bg-[#0f3558] py-4 px-6">Missão</a>
                        </li>

                        <li >
                                <a href="#footer" class="hover:bg-[#0f3558] py-4 px-6">Contato</a>
                        </li>
                    </ul>


                

                    <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-[#0f3558] group" @click="MobileMenu">
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200"></div>

                        <div class="absolute top-0 -right-full h-screen w-8/12 backdrop-blur-xl bg-[#0f3558] border-none opacity-0 transition-all duration-300" :class="conditionalCalss">
                            <ul class="flex flex-col items-center w-full text-base cursor-pointer">
                                <li class="my-5 mt-16">
                                        <a href="#home" class="hover:bg-[#0f3558] py-4 px-24 scroll-smooth">Home</a>
                                </li >

                                <li class="my-5">
                                        <a href="#sobre" class="hover:bg-[#0f3558] py-4 px-24">Sobre</a>
                                </li>

                                <li class="my-5">
                                        <a href="#missao" class="hover:bg-[#0f3558] py-4 px-24">Missão</a>
                                </li>

                                <li class="my-5">
                                        <a href="#footer" class="hover:bg-[#0f3558] py-4 px-24 scroll-smooth">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>
       

            <section id="home" class="pt-28 lg:pb-0 px-4 lg:px-16 lg:grid flex flex-col-reverse lg:grid-cols-2 gap-4 bg-[url('../image/background.png')] h-full w-full bg-cover bg-{opacity-50}">
                <div class="relative z-30">
                    <picture class="flex lg:justify-end md:justify-center md:h-[38rem] px-16">
                        <img src="../image/mario.png" alt="foto do Mário Seto" class="lg:max-w-none pl-6 md:pl-0">
                    </picture>
                </div>
                <div class="table justify-center place-items-center my-auto overflow-clip">

                    <h2 class="lg:text-3xl text-lg text-gray-200 font-extralight text-center lg:text-left uppercase">por mais <strong>saúde mental</strong> no <strong>paraná</strong></h2>

                    <div class="bg-gradient-to-r to-gray-100 from-gray-200 lg:h-32 h-16 w-screen z-10 lg:-ml-96 mt-6 lg:mt-2 lg:-mb-36 -ml-4 -mb-20 md:mx-0"></div>
                    <h2 class="lg:text-9xl text-6xl mt-4 font-sans font-extrabold text-center lg:text-left z-20 relative text-transparent bg-clip-text bg-gradient-to-r from-[#185fa1] to-[#18518a]">23456</h2>
                    
                    <h1 class="text-5xl text-center lg:text-left lg:text-7xl md:text-5xl font-sans font-extrabold text-gray-200
                    tracking-wide leading-normal lg:leading-relaxed uppercase md:mt-3">Mário Seto</h1>
                    <h2 class="uppercase text-gray-300 lg:text-2xl text-lg text-center lg:text-left ">deputado estaudal</h2>
                
                </div>
            </section>

            <section id="sobre"
            class="pt-24 flex flex-col-reverse md:grid lg:grid-cols-2 md:grid-cols-2 gap-10 p-5">
                
                <div  class="px-4 lg:px-16 justify-center grid my-auto">
                    <h2 class="text-slate-700 text-2xl font-sans font-medium pt-1 pb-1">Quem é Mário Seto?</h2>
                    <p class="text-lg text-gray-600">Meu nome é Mário Seto, sou pai, psicólogo clínico, cuido de pessoas, trabalho no SUS há 10 anos lutando pela Saúde Mental, comecei em Sarandi, fui chefe na Saúde na Regional de Londrina com 21 municípios e coordenei a Saúde Mental da Regional de Maringá com 30 municípios.</p>
                </div>

                <div  class="px-4 lg:px-10">
                    <picture>
                        <img class="max-h-64 h-44 sm:h-56 md:h-56 lg:h-56 flex m-auto shadow-2xl custom-shadow rounded-full" src="../image/mario-com-familia.png" alt="foto do Mário com sua família">
                    </picture>
                </div>

            </section>

            <section id="missao"
            class="pt-24 flex flex-col-reverse md:grid lg:grid-cols-2 md:grid-cols-2 gap-10 p-5">

                
                <div  class="px-4 lg:px-16 justify-center">
                    <h2 class="text-slate-700 text-2xl align-baseline font-sans font-medium pt-1 pb-1">Nossa Missão</h2>
                    <p class="text-lg text-gray-600 py-2">Muitos paranaenses precisam de ajuda psicológica e outros tratamentos especializados, seja para o autismo, a depressão, ansiedade, tdah, esquizofrenia. <strong>As taxas de suicidio aumentaram e cerca de 86% dos brasileiros têm problemas com saúde mental depois da pandemia</strong>.</p>
                    <p class="text-lg text-gray-600 py-2">Meu medo é que não estamos vendo soluções preventivas e interventivas, <strong>não temos investimentos em Saúde Mental no Estado</strong>. Em casa, na rua e no trabalho não estamos falando e muito menos cuidando da saúde mental das pessoas, às vezes nem de quem amamos, são muitas brigas em vão, todo dia.</p>
                    <p class="text-lg text-gray-600 py-2">Brigar é muito feio, precisamos lutar e lutar pelo certo e com Respeito! Devemos lutar pela Saúde Mental, cuidar do nosso cérebro e coração, pois boas cabeças farão bons amigos e serão bons trabalhadores. E mais que isso, vou continuar cobrando os nossos direitos no poder legislativo, pessoas mais conscientes já sabem que <strong>o dinheiro dos impostos que pagamos é o suficiente para fazer projetos incríveis na Saúde Mental do nosso Paraná!</strong></p>
                    <p class="text-lg text-gray-600 py-2">Venha com a gente, <strong>discutir de forma madura ações de saúde mental para o estado</strong>.</p>
                    <p class="text-lg text-gray-600 py-2">Me ajude a salvar vidas e cuidar da mente da nossa gente!</p>
                    <div class="flex mt-2">
                        <p class="font-extrabold text-[#0b63a9] text-3xl mr-4">vote:</p>
                        
                        <p class="rounded-lg bg-[#0b63a9] font-extrabold w-8 h-10 text-center text bg-clip-text text-transparent align-middle pt-2 mr-4 border-sky-700 border-2">2</p>
                        <p class="rounded-lg bg-[#0d538c] font-extrabold w-8 h-10 text-center text bg-clip-text text-transparent align-middle pt-2 mr-4 border-sky-700 border-2">3</p>
                        <p class="rounded-lg bg-[#0d4878] font-extrabold w-8 h-10 text-center text bg-clip-text text-transparent align-middle pt-2 mr-4 border-sky-700 border-2">4</p>
                        <p class="rounded-lg bg-[#10406d] font-extrabold w-8 h-10 text-center text bg-clip-text text-transparent align-middle pt-2 mr-4 border-sky-700 border-2">5</p>
                        <p class="rounded-lg bg-[#134471] font-extrabold w-8 h-10 text-center text bg-clip-text text-transparent align-middle pt-2 mr-4 border-sky-700 border-2">6</p>
                    </div>
                </div>

                <div>
                    <h2 class="text-slate-700 text-2xl align-baseline font-sans font-medium pt-1 pb-3 ml-4">Nossas bandeiras</h2>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 content-end lg:pr-16">
                        <div class="grid items-stretch p-6 rounded-lg 
                        bg-gradient-to-r from-gray-200 to-slate-200 hover:to-slate-200">
                            <h3 class="text-blue-500 text-xl align-baseline font-sans font-medium pt-1 pb-1">Saúde Mental e Psicoeducação</h3>
                            <p class="text-lg text-gray-600 py-2 lg:py-6">Psicoeducação nas escolas e apoio psicológico para professores, pais e alunos</p>
                            
                            <div class="mt-auto self-end">
                                <img src="/psychology.png"
                                class="h-24 w-24" 
                                alt="icone saúde e educação">
                            </div>
                        </div>

                        <div class="grid items-stretch p-6 rounded-lg 
                        bg-gradient-to-r from-gray-200 to-slate-200 hover:to-slate-100">
                            <h3 class="text-blue-500 text-xl align-baseline font-sans font-medium pt-1 pb-1">Incentivo a Saúde Mental</h3>
                            <p class="text-lg text-gray-600 py-2">Programas de incentivo à praticas de saúde mental em empresas</p>
                            
                            <div class="mt-auto self-end">
                                <img src="/empresa.svg"
                                class="h-24 w-24" 
                                alt="icone acessibilidade">
                            </div>
                        </div>

                        <div class="grid items-stretch  p-6 rounded-lg 
                        bg-gradient-to-r from-gray-200 to-slate-200 hover:to-slate-100">
                            <h3 class="text-blue-500 text-xl align-baseline font-sans font-medium pt-1 pb-1">Melhoria da Saúde Pública</h3>
                            <p class="text-lg text-gray-600 py-2 lg:py-6">Contratar mais profissionais qualificados e oferecer mais tratamentos multidisciplinares
                            </p>
                            
                            <div class="mt-auto self-end">
                                <img src="/sus.svg"
                                class="h-24 w-24" 
                                alt="icone sus">
                            </div>
                        </div>

                        <div class="grid items-stretch p-6 rounded-lg 
                        bg-gradient-to-r from-gray-200 to-slate-200 hover:to-slate-100">
                            <h3 class="text-blue-500 text-xl align-baseline font-sans font-medium pt-1 pb-1">Tratamentos e Serviços Modernos</h3>
                            <p class="text-lg text-gray-600 py-2">Disponibilizar tratamentos modernos e novos serviços de saúde mental dentro do SUS</p>
                            
                            <div class="mt-auto self-end">
                                <img src="/ciencia.svg"
                                class="h-24 w-24" 
                                alt="icone modernidade">
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section  class="px-4 lg:px-16 p-16 pt-24">
                <div class="m-auto text-center flex-col w-full">
                    <h2 class="text-slate-700 text-2xl align-baseline font-sans font-medium">Me acompanhe nas redes sociais</h2>
                    <div class="w-full flex justify-around text-white pt-14">
                        
                        <a href="https://www.instagram.com/marioseto23/" target="_black" class="hover:text-slate-300 place-items-center">
                            <font-awesome-icon :icon="instagram" class="h-12 w-12 hover:text-blue-900 text-slate-600" />
                        </a>
                        
                        <a href="https://www.facebook.com/MarioSeto23" target="_black" class="hover:text-gray-300">
                             <font-awesome-icon :icon="facebook" class="h-12 w-12 hover:text-blue-900 text-slate-600" />
                        </a>
                        <a href="https://www.youtube.com/MarioSa%C3%BAdeMental" target="_black" class="hover:text-red-300">
                            <font-awesome-icon :icon="youtube" class="h-12 w-12 hover:text-red-500 text-slate-600"/>
                        </a>
                        <a href="https://web.whatsapp.com/send?phone=554491122022" class="hover:text-gray-300" target="_black">
                            <font-awesome-icon :icon="whatsapp" class="h-12 w-12 hover:text-green-400 text-slate-600"/>
                        </a>
                            
                    </div>

                </div>
            </section>

            <section>
                <div class="grid lg:grid-cols-2 gap-10 p-16 pt-24 justify-center bg-slate-300">
                    <div>
                        <h2 class="flex justify-start text-2xl align-baseline font-sans font-medium pt-1 pb-1 text-slate-900">Apoie a causa!</h2>
                        <p class="text-slate-700">Quer saber mais sobre minhas propostas, ou sugerir novas ações para melhorar a Saúde Mental no Paraná? Ou deseja fazer parte da nossa equipe e levar a mensagem da Saúde Mental para mais pessoas? Clique no botão ao lado e vamos conversar!</p>
                    </div>

                    <a href="https://web.whatsapp.com/send?phone=554491122022" target="_black" class="m-auto">
                        <button class="bg-gradient-to-r from-[#0b63a9] to-[#053664] hover:to-blue-900 px-8 py-4 text-2xl md:text-3xl leading-6 rounded-full font-semibold text-white max-h-24 md:mx-24 my-auto shadow-gray-500 shadow-2xl"
                        type="button">
                            Falar com o Mário
                        </button>
                    </a>
                </div>
            </section>

            <footer id="footer" class="lg:p-24 p-16 pt-24 bg-[#1a2e40] ">
                <div>
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 w-auto items-center m-auto text-slate-400">
                        <div class="col-span-1 w-auto flex">

                            <div class="">
                                <p class="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/phone.png" class="w-3 h-3"> 44 991122022</p>
                                <p class="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/mail.png" class="w-3 h-3">mariosaudemental@gmail.com</p>
                            </div>
                        </div>

                        <div class="col-span-1 w-auto lg:mt-0 md:mt-0 mt-6 md:ml-auto mb-8 md:mb-0">
                                <ul class="flex lg:gap-16 md:gap-12 gap-6">
                                    <li class="my-1 hover:text-gray-700 text-slate-400"><a href="#Home">Home</a></li>
                                    <li class="my-1 hover:text-gray-700 text-slate-400"><a href="#sobre">Sobre</a></li>
                                    <li class="my-1 hover:text-gray-700 text-slate-400"><a href="#missao">Missão</a></li>
                                </ul>
                        </div>
                    </div>
                </div>

                <div class="w-auto lg:flex md:flex table justify-between pt-2 lg:pt-16 md:pt-16 text-gray-700
                ">
                    <div id="footer-logo-section">
                             <a class="opacity-20 py-10" href="#Home">
                                <img src="../image/mariov.svg" alt="logo Mário Seto" className="h-10 w-16 md:-p-4 md:px-0">
                            </a>
                    </div>
                    <div id="copyright-text" class="mt-auto pt-8 md:pt-0 text-slate-500">
                            &copy; Todos os direitos reservados. 2022.
                            <p class="m-auto text-center">CNPJ:47.474.712/0001-06</p>
                            
                    </div>
                    <div class="flex justify-between gap-8 w-auto mt-8 md:mt-0 lg:mt-auto">
                            <a href="https://www.instagram.com/marioseto23/" target="_black" class="mt-auto">
                                <font-awesome-icon :icon="instagram" class="h-6 w-6 hover:text-blue-900 text-slate-400"/>
                            </a>
                            <a href="https://www.facebook.com/MarioSeto23" target="_black" class="mt-auto">
                                 <font-awesome-icon :icon="facebook" class="h-6 w-6 hover:text-blue-900 text-slate-400" />
                            </a>
                            <a href="https://www.youtube.com/MarioSa%C3%BAdeMental" target="_black" class="mt-auto">
                                <font-awesome-icon :icon="youtube" class="h-6 w-6 hover:text-blue-500 text-slate-400"/>
                            </a>
                            <a href="https://web.whatsapp.com/send?phone=554491122022" target="_black" class="mt-auto">
                                <font-awesome-icon :icon="whatsapp" class="h-6 w-6 hover:text-green-400 text-slate-400"/>
                            </a>
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
            youtube: faYoutube,

            conditionalCalss: "",

            classes: "absolute top-0 -right-full h-screen w-8/12 backdrop-blur-xl bg-[#0f3558] border-none opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
            
        }
    },

    methods:{
        MobileMenu(e) {
            this.conditionalCalss = this.conditionalCalss != '' ? '' : 'opacity-100 right-0' 
        }
    }
}

</script>

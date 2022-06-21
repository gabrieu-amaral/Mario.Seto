<style>
.custom-shadow {box-shadow: 0 20px 75px 10px rgb(0 0 0 / 0.40);}
</style>

<template>
    <div class="bg-slate-900 h-screen">
        <div class="lg:container mx-auto px-0 bg-blue-900 custom-shadow">
            <nav class="fixed top-0 left-0 w-full shadow-xl bg-blue-900">
                <div class="container m-auto flex justify-between items-center text-cyan-100"> 
                     <a href="">Mário Seto</a>
                
                    <ul class="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="/">Home</a>
                        </li>

                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="/">Sobre</a>
                        </li>

                        <li class="hover:bg-blue-800py-4 px-6">
                                <a href="/">Missão</a>
                        </li>

                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="/">Contato</a>
                        </li>
                    </ul>


                

                    <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-blue-800 group">
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200"></div>
                        <div class="absolute top-0 -right-full h-screen w-8/12 bg-blue-900 border-none opacity-0
                        group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                            <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="/">Home</a>
                                </li>

                                <li class="hover:bg-blue-800py-4 px-6">
                                        <a href="/">Sobre</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="/">Missão</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="/">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>
       

            <section class="pt-28 px-4 lg:px-16 grid lg:grid-cols-2 gap-10">
                <div>
                    <picture class="flex lg:justify-end">
                        <img src="../image/mario.png" alt="foto do Mário Seto">
                    </picture>
                </div>
                <div class="flex justify-center place-items-center">
                    <h1 class="text-3xl lg:text-5xl font-sans font-bold text-gray-200">Força e Esperança para a Saúde Mental do Paraná</h1>
                </div>
            </section>

            <section>
                
                <div  class="px-4 lg:px-16">
                    <picture>
                        <img src="" alt="foto do Mário">
                    </picture>
                </div>

                <div  class="px-4 lg:px-16">
                    <h2>Quem é Mário Seto?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ab, aut est dolor autem quia non optio accusantium facere aspernatur impedit, ullam natus, eligendi doloribus eius ipsa porro. Nostrum, reiciendis.</p>
                </div>

            </section>

            <section>
                    <div class="px-4 lg:px-16">
                        <h2>Nossa Missão</h2>

                        <div>
                            <h3>Alguma coisa futura aqui</h3>
                        </div>
                    </div>
            </section>

            <section  class="px-4 lg:px-16">
                <div>
                    <h2>Siga nossas redes sociasi</h2>

                </div>
            </section>

            <section>
                <div class="grid lg:grid-cols-2 gap-3 p-5 justify-center bg-white">
                    <h2 class="flex justify-center text-2xl align-baseline font-sans font-medium pt-1 pb-1">Apoie nossa causa!</h2>
                    <button class="bg-sky-500 hover:bg-sky-700 px-6 py-4 text-3xl leading-5 rounded-full font-semibold text-white"
                    type="button">
                        Quero ajudar
                    </button>
                </div>
            </section>

            <footer>
                <div class="w-max flex justify-items-center mx-auto px-0">
                    feito com amor ❤
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Mario'
}
</script>
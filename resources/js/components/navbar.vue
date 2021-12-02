<template>
    <div>
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <div class="row container-fluid">
                    <!--NOMBRE-->
                    <div class="col-md-4">
                        <div class="navbar-brand fredoka textocolor">Trabajo Integral: Hoja de Rutas</div>
                    </div>
                    <!--/NOMBRE-->
            
                    <!--OPCIONES NAVBAR-->
                    <div class="col-md-8 justify-content-end float-right">
                        <div class="collapse navbar-collapse float-right"  id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link lato textocolor" href="#" @click="mostrarHome">Home</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link lato textocolor" href="#" @click="mostrarGrafo" >Hoja de Rutas</a>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar navbar-expand-lg float-right">
                            <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon textocolor"></span>
                            </button>
                        </div>
                    </div>
                    <!--/OPCIONES NAVBAR-->
                </div>
            </div>
        </nav>
        
        <home v-if="controlvista===1"></home>
        <integral v-if="controlvista===2"></integral>
    </div>
</template>

<script>
import eventBus from '../Bus';
export default {
    data() {
        return {
            controlvista: 2,
        }
    },
    created(){
        eventBus.$on('controlvista', data =>{
            this.controlvista=data;
        });
    },
    
    mounted(){
    },
    
    methods:{
        mostrarHome(){
            this.controlvista=1;
        },

        mostrarGrafo(){
            this.controlvista=2;
        }
    }
}
</script>

<style>
    

    #grafito{      
        position: relative;   
    }
</style>
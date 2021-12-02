<template>
    <div class="container mt-5 pt-4">
        <div class="container my-3 mx-3 cardaux">
            <form class="px-3" @submit.prevent="sendTXT" enctype="multipart/form-data">
                <h3 class="fredoka textocolor py-3">Ingresar Archivo de coordenadas</h3>
                <input type="file" class="form-control"  name="archivo" id="file" @change="onFileChange">
                
                <button class="btn btn-success my-3">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>
import eventBus from '../Bus';
export default {
    data(){
        return{
            attachment :{name:null, file:null},
        }
    },
    created(){

    },

    methods:{
        onFileChange(event){
            this.attachment.file= event.target.files[0];
        },

        sendTXT(){
            let fd= new FormData();
            fd.append('name',this.attachment.name);
            fd.append('texto',this.attachment.file);

            axios.post("sendtxt",fd).then(resp =>{
                console.log("entró");
                if(resp.data=='INVALID_FORMAT'){
                    swal("Formato Inválido",{
                        className:"alertas",
                        title:"Error",
                        icon:"error"
                    });
                    return;
                }
                eventBus.$emit('controlvista',1);
                console.log(resp.data);
            });

        },
    }
}
</script>

 

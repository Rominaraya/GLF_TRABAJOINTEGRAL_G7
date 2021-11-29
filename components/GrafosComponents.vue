<template>
    <div class="container mt-5 pt-4">
        <h1 class="textocolor py-3">Nueva Hoja de Rutas</h1>
        <div class="row">
            <div class="col-12">
                <form class="cardaux textocolor p-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">N° de camiones a trabajar:</label> 
                        </div>
                        <input type="number" name="id" min="1" class="form-control"> 
                    </div>

                    <div class="text-center my-3">
                        <button id="btn1" class="btn btn-success btn-sm" type="submit" >Siguiente</button>
                    </div>
                </form>
            </div>
        </div>
        <!--LISTADO DE CAMIONES-->
        <h3 class="fredoka textocolor">Listado de Camiones</h3>
        <div class="row accordion cardaux" >
            <ul class="col-lg-3 col-sm-12 my-2 list-group list-group-flush">
                <li class="list-group-item analisis collapsed info textocolor">
                    Camión N°
                </li>
            </ul>
            <div class="col-lg-7 col-sm-12 my-2">
                <div class="collapse" >
                    <div class="my-3" >
                        <div class="row d-flex justify-content-center">
                            <h4 class="textocolor fredoka">Camión N°</h4>
                        </div>

                    </div>
                </div> 
            </div>
        </div>




    </div>

</template>
<script>
</script>
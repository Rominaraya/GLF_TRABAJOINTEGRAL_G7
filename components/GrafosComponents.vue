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
                        <form class="textocolor p-3" >
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text">Seleccione centro de distribución</label>
                                </div>
                                <select class="custom-select">
                                    <option selected value="0">Selecciona...</option>
                                    <option >Distribuidor</option>
                                </select>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-success btn-sm" type="submit">Asignar Centro</button>
                            </div>
                        </form>
                        <div class="input-group mb-3 p-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text">Centro de distribución</label>
                            </div>
                            <input type="text" :value="'Distribuidor'" disabled class="form-control">
                        </div>
                        <div class="text-center">
                            <button class="btn btn-success">Asignar punto de venta</button>
                        </div>
                        <h4 class="textocolor p-3">Asignar punto de venta destino</h4>
                        <form class="textocolor p-3"> 
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text">Seleccione punto de venta</label>
                                </div>
                                <select class="custom-select">
                                    <option selected :value="0">Selecciona...</option>
                                    
                                    <option >
                                        
                                        Punto Venta 
                                        
                                    </option>
                                    
                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text">Ingrese Cantidad de productos</label>
                                </div>
                                <input type="number" min="0" max="1000" class="form-control">
                            </div>
                            <div class="text-center">
                                <button class="btn btn-success btn-sm" type="submit">Agregar</button>
                            </div>                  
                        </form> 
                    </div>
                </div> 
            </div>
        </div>




    </div>

</template>
<script>
</script>
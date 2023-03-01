
        /****************************************************************
         *  Funcion que muestra en la pagina Web la tabla con los datos *
         *  guardados en la BD                                          *
         ****************************************************************/
        

        function mostrarUsuario(){
            $.get('mostrar_usuario.php',
                function(respuesta, status){
                    $("#txtHint").html(respuesta);
                }
            
            );
        }
       function selects(){
            placa = $('.select-placa')
            serie = $('.select-serie')
            serie.hide();
            $('#select').on('change',function(){
                var selectValor = $(this).val();
        
                if (selectValor == 'placa') {
                    placa.show();
                    serie.hide();
                }else {
                    serie.show();
                    placa.hide();
                }
            });
       }

        function consultaUsuario(num){
            if (num == 1){
                $.get('consulta_usuario.php', 
                {placa:$("#seleccion-placa").val()},
                function(respuesta, status){
                    $("#txtHint").html(respuesta);
                }
                );
            }else{
                $.get('consulta_num_serie.php', 
                {serie:$("#seleccion-serie").val()},
                function(respuesta, status){
                    $("#txtHint").html(respuesta);
                }
                );
            }
            
        }

        /*****************************************************************************
         *        Funcion que borra de la BD el dato seleccionado en el combo        *
         *****************************************************************************/         
         function borrarUsuario2(val) {
            if (val== 1){
                $.post("eliminar_usuarios2.php",
                {placa:$("#seleccion-placa").val()}
            );
            }else{
                $.post("eliminar_usuario_serie.php",
                {serie:$("#seleccion-serie").val()}
            );
            }
            

        }
        

        /******************************************************************
         *        Funcion que borra de la BD el renglon seleccionado         *
         ******************************************************************/         
        
        function borrarUsuario3(val){
            alert("DSASDA")

        }
   
        /*********************************************************************
         *               Funcion que inserta datos en la BD                  *
         *********************************************************************/
        function insertarUsuario(){
            $.post("insertar_usuario.php",
            {placa:$("#placa").val(),
            tipo:$("#tipo").val(),
            marca:$("#marca").val(),
            modelo:$("#modelo").val(),
            version:$("#version").val(),
            serie:$("#serie").val()
            
            });
            
        }      

        /************************************************************************
         *  Funcion que crea un selector en HTML con opciones de una BD y lo    *
         *  agrega en la pagina. Usa Ajax para elegir la posicion del selector  *
         *  en la pagina                                                        *
         ************************************************************************/
        function crearSelector(){
            $.get("crearSelector.php",
                function(respuesta, status){
                $("#lugarSelector").html(respuesta);
           });
           
        }
        function crearSelectorSerie(){
            $.get("crear_selector_serie.php",
                function(respuesta, status){
                $("#lugarSelector2").html(respuesta);
           });
           
        }

        /*************************************************************************
         * Funcion que será llamada por el Selector.                             * 
         *************************************************************************/
        function mifuncion(){
           //No hace nada
        }


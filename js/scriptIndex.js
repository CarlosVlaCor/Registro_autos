
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

        function consultaUsuario(){
            $.get('consulta_usuario.php', 
                {placa:$("#seleccion").val()},
                function(respuesta, status){
                    $("#txtHint").html(respuesta);
                }
            );
        }

        /*****************************************************************************
         *        Funcion que borra de la BD el dato seleccionado en el combo        *
         *****************************************************************************/         
         function borrarUsuario2() {
            $.post("eliminar_usuarios2.php",
                {placa:$("#seleccion").val()}
            );

        }
        

        /******************************************************************
         *        Funcion que borra de la BD el renglon seleccionado         *
         ******************************************************************/         
        

        function borrarUsuario3(valor){
            alert("ASDSAD")
             $.post("eliminar_usuarios3.php",
                 {placa:valor}
             );

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

        /*************************************************************************
         * Funcion que será llamada por el Selector.                             * 
         *************************************************************************/
        function mifuncion(){
           //No hace nada
        }


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
                $.get('consulta_placa.php', 
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
       
         function borrarSeleccionado(val) {
            if (val== 1){
                $.post("eliminar_por_placa.php",
                {placa:$("#seleccion-placa").val()}
            );
            }else{
                $.post("eliminar_por_serie.php",
                {serie:$("#seleccion-serie").val()}
            );
            }
            

        }

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

        function crearSelector(){
            $.get("crear_selector_placa.php",
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


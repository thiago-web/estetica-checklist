// VERIFICAR O CHECKED DAS LUZES TRASEIRAS -- INICIO
    function Luzes(){
        var obs_luzes = document.getElementById("opt_luzes1").checked;
        var hab_textarea = document.getElementById("info_luzes").readOnly;
        if(obs_luzes == true)
        {
            alert("OI;")
            hab_textarea = true;
        }
    }

// VERIFICAR O CHECKED DAS LUZES TRASEIRAS -- FIM


// CHAMA AS FUNÇÕES

Luzes();







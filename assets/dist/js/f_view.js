$('input[name="FlgPontua"]').change(function () {
    if ($('input[name="FlgPontua"]:checked').val() === "Sim") {
        $('.camposExtras').show();
    } else {
        $('.camposExtras').hide();
    }
});

// var option_check;
// var visivel = true;
// option_check = document.querySelector('input[name="op_luzes_freio"]:checked').value;

// if(option_check == "luzes_freio_bom"){
//     visivel = true;
// }
// else{
//     visivel = false
// }

// function mostra(){
//     document.getElementById("conteudo_luzes").style.display = "block";
// }

// function esconde(){
//     document.getElementById('conteudo_luzes').style.display = "none";
// }

// function View(){
//     if(visivel == true){
//         mostra();
//     }
//     if(visivel == false){
//         esconde();
//     }
// }
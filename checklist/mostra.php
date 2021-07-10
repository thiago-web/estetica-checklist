<html>
  <head>Preview Upload</head>
  <body>
    <form id="form1" runat="server">
        <input type='file' id="imgInp" >
        <img id="blah" style=" width: 300px; height: 250px;" src="#" alt="your image" >
    </form>
    <script>
document.getElementById("imgInp").onchange = function () {
  var reader = new FileReader();
  reader.onload = function (e) {
  // Obter dados carregados e renderizar a miniatura.
  document.getElementById("blah").src = e.target.result;
  };
  // Leia o arquivo de imagem como um URL de dados.
  reader.readAsDataURL(this.files[0]);
  };
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});




    </script>
  </body>
</html>
document.addEventListener("DOMContentLoaded", function() {
    var thumbnails = document.querySelectorAll(".thumbnail");
    
    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener("click", function() {
            var carousel = new bootstrap.Carousel(document.getElementById("carouselExampleAutoplaying"));
            carousel.to(index);
        });
    });

    // Obter referência ao carrossel
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'), {
        interval: 3000, // Mudar de imagem a cada 2 segundos
        pause: false,   // Não pausar ao passar o mouse
        wrap: true,     // Continuar a partir do início depois de atingir o último item
    });
});
$(document).ready(function() {
    $('.thumbnail-pagina1').click(function() {
        var index = $(this).index();
        $('#carouselExamplePagina1').carousel(index);
    });
});
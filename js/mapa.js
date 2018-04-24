function c() {
    var source = $("#municipios-rj").html();
    var template = Handlebars.compile(source);
    var myDiv;
    var pathSegundoMapa;
    var html = template(countiesSvgPathRJ2);
    $("#wrap-maprj").html(html);
    $("path").mouseover(function () {
        var carregar_data = $(this).data().namesvg;
        $("#dados_cidade").html(carregar_data);

    });

    $("path").click(function () {
        var carregar_data = $(this).attr('d');
        var fillColor = $(this).attr('fill');
        $('path#idMunicipio').attr('d', carregar_data);
        $('path#idMunicipio').attr('fill', fillColor);
        setViewbox(document.querySelector('#svg'));

    });

document.querySelector('button').addEventListener('click', function () {
    setViewbox(document.querySelector('#svg'));
});



}

function setViewbox(svg) {
    var bB = svg.getBBox();
    svg.setAttribute('viewBox', bB.x + ',' + bB.y + ',' + bB.width + ',' + bB.height);
}


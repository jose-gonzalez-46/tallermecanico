var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function() {
    $("#uname").mouseleave(function() {
        var nombre = $("#uname").val();


        if (nombre == "") {
            $("#mensaje1").fadeIn();
            return false;
        } else {
            $("#mensaje1").fadeOut();

        }

    });
});


$(document).ready(function() {
    $("#email").mouseleave(function() {
        var correo = $("#email").val();


        if (correo == "" || !expr.test(correo)) {
            $("#mensaje2").fadeIn();
            return false;

        } else {
            $("#mensaje2").fadeOut();

        }

    });
});

$(document).ready(function() {
    $("#umensaje").mouseleave(function() {
        var mensaje = $("#umensaje").val();


        if (mensaje == "") {
            $("#mensaje3").fadeIn();
            return false;
        } else {
            $("#mensaje3").fadeOut();

        }

    });
});

$(document).ready(function() {
    $("#bEnviar").submit(function(e) {
        e.preventDefault();

        var data = $(this).serializeArray();
        data.push({ name: 'tag', value: 'login' })

        $.ajax({
                url: 'process.php',
                type: 'post',
                datatype: 'json',
                data: data
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            })
    })
})
$("#frmfull").on('submit',function (e){
    let msgValidaCampos ="";    
    let v_nombre  = $("#p1_nombre").val();
    let v_apellidos  = $("#p2_apellidos").val();
    $("#lbl_nombre").css("color","black");
    $("#lbl_apellidos").css("color","black");
    if (v_nombre == "" && v_apellidos == "") { //ambos campos vacios
        msgValidaCampos = "Los campos Nombre y Apellidos se encuentran vacíos";
        $("#lbl_nombre").css("color","red");
        $("#lbl_apellidos").css("color","red");
        console.log($("#mensajes").text(msgValidaCampos));
        e.preventDefault();
    } else if (v_nombre == "" && v_apellidos != "") { //solo campo Nombre vacio
        msgValidaCampos = "El campo Nombre se encuentra vacío";
        $("#lbl_nombre").css("color","red");
        console.log($("#mensajes").text(msgValidaCampos));
        e.preventDefault();
    } else if (v_nombre != "" && v_apellidos == "") { //solo campo Apellidos vacio
        msgValidaCampos = "El campo Apellidos se encuentra vacío";
        $("#lbl_apellidos").css("color","red");
        console.log($("#mensajes").text(msgValidaCampos));
        e.preventDefault();
    }    
});

$("#p6_list_tampizza").on('change', function() {

    //Se ejecuta cada vez que cambia el selector de tamaño de pizza
    let form = new FormData();
	form.append("p6_list_tampizza", this.value);

	let settings = {
	  "url": "http://localhost:5000/checksize",
	  "method": "POST",
	  "timeout": 0,
	  "processData": false,
	  "mimeType": "multipart/form-data",
	  "contentType": false,
	  "data": form
	};

	$.ajax(settings).done(function (response) {	  
	  $("#resultado_tamano").text(response);
	});
});
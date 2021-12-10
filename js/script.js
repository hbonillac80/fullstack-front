function validaCampo(msg,flag){
    document.getElementById("mensajes").innerHTML = msg;
    document.getElementById('lbl_nombre').style.color = "black";
    document.getElementById('lbl_apellidos').style.color = "black";
    if (flag==2) { //ambos campos vacios
        document.getElementById("lbl_nombre").style.color = "red";
        document.getElementById("lbl_apellidos").style.color = "red";
    } else if (flag==1) { //solo campo Nombre vacio
        document.getElementById("lbl_nombre").style.color = "red";
    } else if (flag==3) { //solo campo Apellidos vacio
        document.getElementById("lbl_apellidos").style.color = "red";
    } 
}

document.getElementById("frmfull").addEventListener("submit", 
    function(event){
        let v_nombre  = document.getElementById("p1_nombre").value;
        let v_apellidos  = document.getElementById("p2_apellidos").value;
        let v_flag = 0;
        if (v_nombre == "" && v_apellidos == "") { //ambos campos vacios
            v_flag = 2;
            validaCampo("Los campos Nombre y Apellidos se encuentran vacíos",v_flag);
            event.preventDefault();
        } else if (v_nombre == "" && v_apellidos != "") { //solo campo Nombre vacio
            v_flag = 1;
            validaCampo("El campo Nombre se encuentra vacío",v_flag);
            event.preventDefault();
        } else if (v_nombre != "" && v_apellidos == "") { //solo campo Apellidos vacio
            v_flag = 3;
            validaCampo("El campo Apellidos se encuentra vacío",v_flag);
            event.preventDefault();
        }
    }
);
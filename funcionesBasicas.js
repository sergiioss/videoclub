const validar = (tipo,contenido) => {

    switch(tipo){

        case "email":

            return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(contenido);

        case "telefono":

        case "dni": 


        default :

        return false;

    }

};

exports.validar = validar;
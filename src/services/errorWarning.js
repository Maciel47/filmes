import Swal from "sweetalert2"

export default function errorWarning(errorValue) {
    return (
        Swal.fire({
            icon: 'error',
            title: 'Ocorreu um erro' + errorValue,
            text: 'Tente novamente'
        })
    )
}
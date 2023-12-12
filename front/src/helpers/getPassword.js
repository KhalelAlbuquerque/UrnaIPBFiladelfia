import swalAlert from "./swalAlert"

const password = 123

export default function getPassword(){
    swalAlert.fire({
      title: 'Coloque a senha de instrutor para continuar',
      icon: 'info',
      input: 'password',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: 'green',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(result=>{
      if(result.value == password){
        swalAlert.fire({
          title: "Senha aprovada",
          icon: 'success',
          text: 'Carregando...',
          timer: 1000,
          showConfirmButton: false,
          timerProgressBar: true,
        })
      }else{
        swalAlert.fire({
          title: 'Senha errada, digite novamente',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result)=>{
          if(result.isConfirmed) getPassword()
        })
      }
    })
  }
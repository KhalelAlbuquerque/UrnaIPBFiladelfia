import swalAlert from "./swalAlert"
import getPassword from "./getPassword"
import api from "./api"

export default function handleMinisterVote({option}){
    swalAlert.fire({
        title: `Deseja confirmar o voto "${option === 'Positive' ? 'SIM' : "NÃO"}"?`,
        text: "Essa ação não poderá ser desfeita",
        icon: 'warning',
        showConfirmButton : true,
        showCancelButton : true,
        confirmButtonText: "Confirmo",
        cancelButtonText: "Não confirmo",
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        reverseButtons: true
      }).then((result)=>{
        if(result.isConfirmed){
          api.post(`minister/compute${option}`).then(()=>{
            swalAlert.fire({
              title: 'Voto computado!',
              text: "Chame um instrutor",
              icon: 'success',
              confirmButtonColor: 'green',
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then(()=>{
              getPassword()
            })
          })
        }
      })
}
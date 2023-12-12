import swalAlert from "./swalAlert"
import getPassword from "./getPassword"
import api from "./api"

export default function handleMinisterVote(option, itemsIdList, setItems){
    console.log(itemsIdList)
    swalAlert.fire({
        title: `Deseja confirmar os seus votos?`,
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
          api.post(`${option}/compute`, {idList: itemsIdList}).then(()=>{
            setItems([])
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
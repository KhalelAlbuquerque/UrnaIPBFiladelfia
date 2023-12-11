import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const swalAlert = withReactContent(Swal)

// swalAlert.fire({
//     title: <p>Hello World</p>,
//     showConfirmButton: true,
//   //   didOpen: () => {
//   //     swalAlert.showLoading()
//   //   },
//   }).then((response) => {
//       if(response.isConfirmed)return swalAlert.fire(<p>Shorthand works too</p>)
//   })

export default swalAlert
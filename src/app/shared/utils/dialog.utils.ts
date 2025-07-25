// import Swal from 'sweetalert2';
//
// export class DialogUtils {
//
//   static sucess(title: string, text: string) {
//     return Swal.fire({
//       title,
//       text,
//       icon: "success"
//     });
//   }
//
//   static delete() {
//     return Swal.fire({
//       title: 'Excluir registro',
//       text: 'Deseja realmente exluir esse registro definitivamente?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       confirmButtonText: 'Sim, desejo excluir!',
//       cancelButtonText: 'Cancelar',
//     });
//   }
//
//   static confirmation(title: string, text?: string, isHtml = false) {
//     let html;
//     if (isHtml) {
//       html = text;
//     }
//     return Swal.fire({
//       title: title,
//       html: html,
//       text: text,
//       icon: 'question',
//       confirmButtonColor: '#fa2963',
//       confirmButtonText: 'Sim, desejo',
//       cancelButtonText: 'Agora não',
//       showCancelButton: true,
//     });
//   }
//
//   static error(title?: string, text?: string, isHtml = false) {
//     if (!text) {
//       title = 'Error';
//       text = 'Ocorreu um erro inesperado';
//     }
//     let html;
//     if (isHtml) {
//       html = text;
//     }
//     Swal.fire({ title: title, html: html, text: text, icon: 'error' });
//   }
//
//   static info(title?: string, text?: string, isHtml = false) {
//     let html;
//     if (isHtml) {
//       html = text;
//     }
//     Swal.fire({ title: title, html: html, text: text, icon: 'info' });
//   }
//
//   static warning(title?: string, text?: string, isHtml = false) {
//     let html;
//     if (isHtml) {
//       html = text;
//     }
//     Swal.fire({ title: title, html: html, text: text, icon: 'warning' });
//   }
// }
//
// // interface IDialogUtils {
// //   dismiss: string;
// //   isConfirmed: boolean;
// //   isDenied: boolean;
// //   isDismissed: boolean;
// //   value: string;
// // }
// //
// // export interface IInputMessageDelete {
// //   title: string;
// //   text: string;
// //   inputPlaceholder: string;
// //   buttonConfirmText: string;
// //   fieldInputName: string;
// // }

import Swal from 'sweetalert2';

export class ToastUtils {
  static readonly toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  static success(title: string) {
    ToastUtils.toast.fire({ icon: 'success', title: title });
  }

  static error(title?: string) {
    if (!title) {
      title = 'Ocorreu um erro inesperado';
    }
    ToastUtils.toast.fire({ icon: 'error', title: title });
  }

  static warning(title: string) {
    ToastUtils.toast.fire({ icon: 'warning', title: title });
  }

  static question(title: string) {
    ToastUtils.toast.fire({ icon: 'question', title: title });
  }

  static info(title: string) {
    ToastUtils.toast.fire({ icon: 'info', title: title });
  }

  static custom(
    title: string,
    icon: 'warning' | 'error' | 'success' | 'question' | 'info',
    timer = 2000,
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: timer,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  }
}

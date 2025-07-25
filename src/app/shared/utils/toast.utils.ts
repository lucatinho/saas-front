import { HotToastService } from '@ngxpert/hot-toast';

export class ToastUtils {
  private static toast: HotToastService;

  static init(toast: HotToastService) {
    ToastUtils.toast = toast;
    ToastUtils.toast.defaultConfig = {
      ...ToastUtils.toast.defaultConfig,
      position: 'top-right',
    };
  }

  static info(message: string) {
    ToastUtils.toast.info(message);
  }

  static success(message: string) {
    ToastUtils.toast.success(message);
  }

  static warning(message: string) {
    ToastUtils.toast.warning(message);
  }

  static error(message: string) {
    ToastUtils.toast.error(message);
  }
}

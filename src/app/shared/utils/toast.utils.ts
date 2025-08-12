import { HotToastService } from '@ngxpert/hot-toast';

export class ToastUtils {
  private static toast: HotToastService;

  static init(toast: HotToastService): void {
    ToastUtils.toast = toast;
    ToastUtils.toast.defaultConfig = {
      ...ToastUtils.toast.defaultConfig,
      position: 'top-right',
    };
  }

  static info(message: string): void {
    ToastUtils.toast.info(message);
  }

  static success(message: string): void {
    ToastUtils.toast.success(message);
  }

  static warning(message: string): void {
    ToastUtils.toast.warning(message);
  }

  static error(message: string): void {
    ToastUtils.toast.error(message);
  }

  static loading(message: string): void {
    ToastUtils.toast.loading(message);
  }
}

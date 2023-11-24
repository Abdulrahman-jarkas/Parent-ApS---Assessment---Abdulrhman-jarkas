import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor() {}

  success(msg: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  error(msg: string = 'Something went wrong!') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: msg,
    });
  }

  confirm(msg: string) {
    return Swal.fire({
      title: msg,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    });
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost:3000/upload', formData).subscribe(response => {
      console.log('Archivo subido', response);
    });
  }
}

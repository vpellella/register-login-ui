import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File = new File([],'');;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
   // On file Select
   onChange(event: any) {
    console.log("change event")
    this.file = event.target.files[0];
    console.log(this.file)
}

  upload() {
    
    var formData = new FormData()
    formData.append("file", this.file, this.file.name)
    console.log(formData)
    this.httpClient.post("http://localhost:8080/uploadfile", formData,{
      responseType: 'text'
    }
    ).subscribe({
      next: (success) => {
        alert(success)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

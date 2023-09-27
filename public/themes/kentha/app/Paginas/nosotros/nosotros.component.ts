import { Component } from '@angular/core';
import { ApiKenthaService } from 'src/app/Services/api-kentha.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  title = 'kentha-web';

  pageData: any;
  pageId: number = 2;

  constructor(private apiService: ApiKenthaService) { }


  ngOnInit(): void {
    // Aquí puedes llamar a métodos del servicio al cargar el componente
    this.getDataPageApi(this.pageId);
  }

  getDataPageApi(page: number): void {
    this.apiService.getDataPage(page).subscribe(
      (res) => {
        // Aquí puedes procesar los datos que has obtenido de la API
        this.pageData = res.page;
        console.log(this.pageData);
      },
      (error) => {
        // Manejo de errores en caso de que la solicitud falle
        console.error(error);
      }
    );
  }


}
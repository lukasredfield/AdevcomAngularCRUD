import { Component, OnInit } from '@angular/core';
import { EscritosModel } from 'src/app/model/escritos-model';
import { EscritosService } from 'src/app/service/escritos.service';

@Component({
  selector: 'app-escritos',
  templateUrl: './escritos.component.html',
  styleUrls: ['./escritos.component.css']
})
export class EscritosComponent implements OnInit {
  listEscritos: EscritosModel[] = [];
  filteredEscritos: EscritosModel[] = [];
  selectAll: boolean = false;
  fechaDesde: string = '';
  fechaHasta: string = '';
  nroEscritos: string = '';
  camposIniciales: {
    fechaDesde: string;
    fechaHasta: string;
    nroEscritos: string;
  } = {
    fechaDesde: '',
    fechaHasta: '',
    nroEscritos: ''
  };

  selectedEscrito: EscritosModel | null = null;
  detailsVisible: boolean = false;
  filtroActivo = false;
  escritosPendientesCount: number = 3;

  constructor(
    private escritosService: EscritosService,
  
  ) {}

  ngOnInit(): void {
    this.list();
    this.camposIniciales = {
      fechaDesde: this.fechaDesde,
      fechaHasta: this.fechaHasta,
      nroEscritos: this.nroEscritos
    };
  }

  list() {
    this.escritosService.getAllEscrito().subscribe((resp) => {
      this.listEscritos = resp.map((escrito) => ({
        ...escrito,
        selected: false,
      }));
      this.filteredEscritos = [...this.listEscritos];
  
      let cuentaFinal = 0;
  
      for (const escrito of this.listEscritos) {
        if (escrito.recepcion === 'PENDIENTE') {
          cuentaFinal++;
        }
      }
  
      this.escritosPendientesCount = cuentaFinal;
    });
  }
  
  
  
  
  
  

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    for (const escrito of this.listEscritos) {
      escrito.selected = this.selectAll;
    }
  }

  buscarEscritos() {
    let filteredList = [...this.listEscritos];

    if (this.fechaDesde && this.fechaHasta) {
      const fechaDesdeTimestamp = new Date(this.fechaDesde).getTime();
      const fechaHastaTimestamp = new Date(this.fechaHasta).getTime();

      filteredList = filteredList.filter((escrito) => {
        const createdAtTimestamp = new Date(escrito.createdAt).getTime();
        return createdAtTimestamp >= fechaDesdeTimestamp && createdAtTimestamp <= fechaHastaTimestamp;
      });
    }

    if (this.nroEscritos) {
      filteredList = filteredList.filter((escrito) => {
        const numeroEscrito = escrito.nroEscritos.toString();
        return numeroEscrito.includes(this.nroEscritos);
      });
    }

    this.filteredEscritos = filteredList;
  }

  limpiarCampos() {
    this.fechaDesde = this.camposIniciales.fechaDesde;
    this.fechaHasta = this.camposIniciales.fechaHasta;
    this.nroEscritos = this.camposIniciales.nroEscritos;
  }

  verEscrito(escrito: EscritosModel) {
    this.selectedEscrito = escrito;
    this.detailsVisible = true;
  }

  cerrarDetalles() {
    this.selectedEscrito = null;
    this.detailsVisible = false;
  }

  exportar() {
    alert('Se ha creado un archivo de exportación.');
  }

  confirmarEliminacion(escrito: EscritosModel) {
    if (confirm('¿Estás seguro de eliminar este escrito?')) {
      this.escritosService.deleteEscrito(escrito.id).subscribe(() => {
        this.list();
      });
    }
  }
}

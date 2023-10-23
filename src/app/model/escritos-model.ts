export class EscritosModel {
    id: number = 0;
    nroEscritos: number = 0;
    tipo: any = {};
    servicio: any = {};
    jurisdiccion: number = 0;
    tribunal: any = {};
    asunto: string = '';
    fecIngreso: string = '';
    nroCausa: number = 0;
    observacion: string = '';
    estado: any = {};
    createdAt: string = '';
    updatedAt: string = '';
    selected: boolean = false;
    recepcion: string = '';
  
    constructor(data?: Partial<EscritosModel>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }
  
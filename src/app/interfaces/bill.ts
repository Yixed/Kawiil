export interface Bill {
  id: number;
  fecha: Date;
  empresa: string;
  estado: string;
  importe: number;
  descripcion?: string;
  nombre: string;
  numero: string;
  // Propiedad opcional
}

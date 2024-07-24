export interface Bill {
  id: number;
  numero: string;
  fecha: Date;
  empresa: string;
  estado: string;
  importe: number;
  descripcion?: string; // Propiedad opcional
}

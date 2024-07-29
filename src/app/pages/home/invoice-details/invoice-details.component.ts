import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../../services/invoice.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [],
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent {
  parametro: string | null = null;
  invoice: Invoice | null = null;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private builder: FormBuilder
  ) {
    // Suscribirse a los parámetros de la ruta para obtener el ID de la factura
    route.paramMap.subscribe((param) => {
      this.parametro = param.get('id');
    });

    if (this.parametro === 'nuevo') {
      this.invoice = {
        _id: '',
        company: '',
        creationDate: '',
        name: '',
        description: '',
        amount: 0,
        file: ''
      };
      this.createForm();
    } else {
      invoiceService.getById(Number(this.parametro)).subscribe({
        next: (response) => {
          this.invoice = response as Invoice;
          this.createForm();
        },
        error: () => {
          // Manejo de error
        }
      });
    }
  }

  // Crear un formulario reactivo
  createForm() {
    this.form = this.builder.group({
      name: [this.invoice?.name || '', Validators.required],
      price: [this.invoice?.amount || 0, [Validators.required, Validators.min(0)]],
      description: [this.invoice?.description || '', Validators.required],
      image: [this.invoice?.file || '', Validators.required],
      review: [0, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  // Función para guardar cambios en la factura
  editarFactura() {
    if (this.form.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const { name, price, description, image, review } = this.form.value;

    const updatedInvoice: Invoice = {
      ...this.invoice,
      name,
      amount: price,
      description,
      file: image,
      review
    };

    // Aquí se podría llamar a un servicio para actualizar la factura en la base de datos
    this.invoiceService.updateInvoice(updatedInvoice).subscribe({
      next: () => {
        alert('Factura actualizada correctamente');
        // Opcionalmente, redirigir a otra página o actualizar la vista
      },
      error: () => {
        alert('Hubo un error al actualizar la factura');
      }
    });
  }

  // Función para descargar la factura como PDF
  descargarFactura() {
    const { name, price, description, image, review } = this.form.value;

    const doc = new jsPDF();

    // Configurar el contenido del PDF
    doc.setFontSize(20);
    doc.text('Factura', 20, 20);
    doc.setFontSize(12);
    doc.text(`Nombre del Producto: ${name}`, 20, 40);
    doc.text(`Precio: $${price}`, 20, 50);
    doc.text(`Descripción: ${description}`, 20, 60);
    doc.text(`Opiniones: ${review} estrellas`, 20, 70);

    // Si hay una imagen, intentar agregarla
    if (image) {
      const img = new Image();
      img.src = image;

      img.onload = () => {
        doc.addImage(img, 'JPEG', 20, 80, 160, 90);
        // Descargar el PDF
        doc.save('factura.pdf');
      };

      img.onerror = () => {
        alert('No se pudo cargar la imagen. Verifica la URL.');
        // Descargar el PDF sin la imagen
        doc.save('factura.pdf');
      };
    } else {
      // Descargar el PDF sin imagen
      doc.save('factura.pdf');
    }
  }
}

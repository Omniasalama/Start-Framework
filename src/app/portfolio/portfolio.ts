import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements AfterViewInit {
  selectedImage: string = '';

  openModal(img: string): void {
    this.selectedImage = img;
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('galleryModal')
    );
    modal.show();
  }

  ngAfterViewInit(): void {
    if (!(window as any).bootstrap?.Modal) {
      console.warn('Bootstrap Modal not found.');
    }
  }
}

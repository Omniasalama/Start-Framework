import { Component, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  @ViewChildren('el') container!:any

  print(){
    console.log(this.container);

    for(let i=0 ; i<this.container._results.length;i++){
      console.log(this.container._results[i]);
      this.container._results[i].nativeElement.classList.add("text-center")
    }
  }
}

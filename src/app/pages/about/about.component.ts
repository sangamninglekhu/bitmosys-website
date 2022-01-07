import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    // Loading js file
    var s = document.createElement("script");
    var s1 = document.createElement("script");
    var s2 = document.createElement("script");
    var s3 = document.createElement("script");
    var s4 = document.createElement("script");

    s2.src = "../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s2);

    s1.src = "../../assets/js/vendor/jquery.js";
    this.elementRef.nativeElement.appendChild(s1);

    s.src = "../../assets/js/vendor/feather.js";
    this.elementRef.nativeElement.appendChild(s);

    s4.src = "https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js";
    this.elementRef.nativeElement.appendChild(s4);

    s3.src = "http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js";
    this.elementRef.nativeElement.appendChild(s3);

  }

}

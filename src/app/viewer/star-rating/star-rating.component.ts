import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number

  main_arr: Array<any>; // = Array(5).fill({})
  

  constructor(
  ) { }

  ngOnInit() {
    
    console.log('rating', this.rating)
    this.calc();
  }

  calc(){
    const t = this;

    const half: number = t.rating / 2
    const floor = Math.floor(half) ;
    t.main_arr = Array(floor).fill({})


  }


}

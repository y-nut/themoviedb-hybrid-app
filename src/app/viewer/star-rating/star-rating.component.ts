import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number

  main_arr: Array<any>; // = Array(5).fill({})
  name: string = '6_5'

  constructor(
  ) { }

  ngOnInit() {
    
    //console.log('rating', this.rating)
    this.calc();
  }

  calc(){
    const t = this;

    const half: number = t.rating / 2
    const floor = Math.floor(half) ;
    t.main_arr = Array(floor).fill({})

    //Extra
    let left = (half - floor) * 100;
    left = Math.round(left)

    const div = left / 5;

    t.name = `${div}_5`

    console.log('left', left)


  }


}

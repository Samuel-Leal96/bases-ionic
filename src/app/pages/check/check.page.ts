import { Component} from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage {

  items:any = [
    { name: 'primary', selected: false },
    { name: 'secondary', selected: true },
    { name: 'tertiary', selected: false },
    { name: 'success', selected: true},
    ];

    onCheckboxChange(item: any) {
      console.log(item);
    }

    verData(){
      console.log(this.items);
    }


}

import {Component, OnInit} from '@angular/core';
import {Cat} from "../../module/cat.entity";
import {CatApiService} from "../../services/cat-api.service";


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  displayedColumns: string[] = ['Name', 'Origin', 'Description', 'Weight'];
  cats: Array<Cat> = [];

  constructor(private catService: CatApiService) {}
  ngOnInit(): void {
    this.catService.getSource().subscribe((data: any) => {
      this.cats = data;
    });
  }


}

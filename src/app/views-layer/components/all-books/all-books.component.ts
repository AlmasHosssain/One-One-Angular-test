import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  constructor() { }
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  titleName1 = "About this course"
  titleName2 = "Early Years"
  titleName3 = "Seeling Record"
  titleName4 = "Marketing Record"
  titleName5 = "Taking Flight"
  titleName6 = "Banking Record"
  titleName7 = "Cash & Expansion"
  titleName8 = "Invasion"
  titleName9 = "Rivatry"
  titleName10 = "Giving Back"

  backGroundColor1 = "#3A2A7E";
  backGroundColor2 = "#074C88";
  backGroundColor3 = "#2A6F41";
  backGroundColor4 = "#DD6902";
  backGroundColor5 = "#9F2727";
  backGroundColor6 = "#8534A8";
  backGroundColor7 = "#39297B";
  backGroundColor8 = "#074C88";
  backGroundColor9 = "#2A6E2A";
  backGroundColor10 = "#DD6902";

  ngOnInit(): void {
  }
  
}

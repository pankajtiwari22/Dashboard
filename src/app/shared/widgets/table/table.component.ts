import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  memberName: string;
  loanPurpose: string;
  Date: string;
  amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {memberName:"PUNJAB NATIONAL BANK",loanPurpose:"Mudra Loans Shishu / Kishor / Tarun", Date: "10/5/2021", amount:"13413.0"},
  {memberName:"PUNJAB NATIONAL BANK",loanPurpose:"Mudra Loans Shishu / Kishor / Tarun", Date: "10/5/2021", amount:"13413.0"},
  {memberName:"PUNJAB NATIONAL BANK",loanPurpose:"Mudra Loans Shishu / Kishor / Tarun", Date: "10/5/2021", amount:"13413.0"},
  {memberName:"PUNJAB NATIONAL BANK",loanPurpose:"Mudra Loans Shishu / Kishor / Tarun", Date: "10/5/2021", amount:"13413.0"}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Member Name', 'Loan Purpose', 'Date', 'Amount', "actions"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  
}


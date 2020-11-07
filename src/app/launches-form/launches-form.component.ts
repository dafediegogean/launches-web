import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LaunchesFormService } from './launches-form.service';

export interface Launche {
  id: string;
  description: string;
  value: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];

@Component({
  selector: 'app-launches-form',
  templateUrl: './launches-form.component.html',
  styleUrls: ['./launches-form.component.scss']
})
export class LaunchesFormComponent implements AfterViewInit, OnInit  {
  
  launches: Launche[];
  displayedColumns: string[] = ['id', 'description', 'value', 'color'];
  dataSource: MatTableDataSource<Launche>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private launcheService: LaunchesFormService) {
   
  }
  
  ngOnInit() {
    this.launcheService.getAll().subscribe((data: Launche[]) => {
      data.forEach(c => {
        c.color = COLORS[Math.round(Math.random() * (COLORS.length - 1))];
      })
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

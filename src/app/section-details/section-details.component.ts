import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { SectionsService } from '../services/sections.service';
import { COLUMNS_SCHEMA, IResponse } from '../types/types';


export interface MouseEvent {
  rowId: number;
  colId: number;
  cellsType: string;
}


@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss']
})
export class SectionDetailsComponent implements OnInit {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  myDataArray:IResponse[] = [];
  label: string = "";
  tableLabel = "";
  tableData = [];
  valid: any = {};
  previousRow = {};
  constructor(
    private sectionsService: SectionsService,
    private router: Router
  ) {
  }

  back=()=>{
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
    this.label = history.state.grade;
    switch (this.label) {
      case "Grade 1":
        this.tableLabel = "First Grade";
        break;
      case "Grade 2":
        this.tableLabel = "Second Grade";
        break;
      case "Grade 3":
        this.tableLabel = "Third Grade";
        break;
    }
    this.sectionsService.getSectionsData().subscribe((res) => {
      this.myDataArray=_.groupBy(res, 'grade')[this.label];
      
    });
  }

  editRow(row: IResponse) {
    row.isEdit = false;
    Object.entries(row).map(([key,value])=>{
      if(['st_age','maths','english','science','social_science'].includes(key))
      row[key]=parseInt(value);
    });
    
    this.sectionsService.updateStudentDetails(row, this.label).subscribe(() => (row.isEdit = false));
  }

  onEditClick(row:IResponse){
    Object.assign(this.previousRow,row);
    row.isEdit = !row.isEdit;
  }

  cancel(row: IResponse){
    Object.assign(row,this.previousRow);
    row.isEdit = false;
  }

  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }

  disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }


}

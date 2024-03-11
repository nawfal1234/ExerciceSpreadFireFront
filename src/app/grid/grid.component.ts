import { Component, Input, OnInit } from '@angular/core';
import {  Grid } from '../model/grid';
import { GridService } from '../service/grid-service';
import { Cell } from '../model/cell';
import { ResultFire } from '../model/resultFire';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
   grid: Grid;
  gridResult: Grid;
  nbCellOnFire : number = 0;
  isCalculated : boolean;

  constructor(private gridService: GridService) { }

  ngOnInit() {
    this.grid = new Grid();
  }


  initMatrix() {
      this.grid.cells = [];
      this.nbCellOnFire =0;
      if(this.isCalculated)  this.isCalculated = false;

      console.log(this.grid.height, ";", this.grid.width)

      for (let i = 0; i < this.grid.height; i++) {
        this.grid.cells[i] = [];
        for (let j = 0; j < this.grid.width; j++) {
            this.grid.cells[i][j] = new Cell(i, j);
        }
    }

    }

  swithCell(cell: Cell) {
      console.log(cell.onFire);
      cell.onFire ? this.nbCellOnFire-- : this.nbCellOnFire++;
      cell.onFire = !cell.onFire;
    }

  calculer() {
      this.gridService.addGrid(this.grid).subscribe(
        (response) => { 
          this.gridResult = response;
          this.isCalculated =true;
          console.log('Données récupérées avec succès :', this.gridResult);
        },
        (error) => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      );
    }
}


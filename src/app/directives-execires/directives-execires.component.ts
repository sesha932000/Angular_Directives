import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-execires',
  imports: [CommonModule,FormsModule],
  templateUrl: './directives-execires.component.html',
  styleUrl: './directives-execires.component.css'
})
export class DirectivesExeciresComponent {

isCleardisable = true;
chooseNum = 0;
 nums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
  ];
calculate(divisibleBy:number){
this.chooseNum =  divisibleBy;

if(divisibleBy === 0){
  this.isCleardisable=true;
}else{
  this.isCleardisable= false;
}
  
}









}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  public apocalypseOptions = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  public apocalypseType = 'horizontalBar';
  // public apocalypseLegend = true;
  public apocalypseData = [
    {data: [32, 0], label: 'Yes'},
    {data: [57, 0], label: 'No'}
  ];

  public toiletPaperOptions = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  public toiletPaperType = 'horizontalBar';
  public toiletPaperLegend = true;
  public toiletPaperData = [
    {data: [57, 0], label: 'Crunch all day!'},
    {data: [35, 0], label: 'Roll it nicely'}
  ];

  public hogwartsOptions = {
    scaleShowVerticalLines: false,
    responsive: true 
  };

  public hogwartsLabels = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin', `Muggle (they don't even go here)`];
  public hogwartsType = 'doughnut';
  public hogwartsLegend = true;
  public hogwartsData = [
    {data: [28, 48, 40, 19, 86]}
  ];

  public clubFlixOptions = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  public clubFlixType = 'horizontalBar';
  public clubFlixLegend = true;
  public clubFlixData = [
    {data: [57, 0], label: 'Club'},
    {data: [35, 0], label: 'Netflix'}
  ];

  public campingResortOptions = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  public campingResortType = 'horizontalBar';
  public campingResortLegend = true;
  public campingResortData = [
    {data: [2, 0], label: 'Camping'},
    {data: [35, 0], label: 'Resort'}
  ];

  public seasonOptions = {
    scaleShowVerticalLines: false,
    responsive: true 
  };

  public seasonLabels = ['Spring', 'Summer', 'Fall', 'Winter'];
  public seasonType = 'doughnut';
  public seasonLegend = true;
  public seasonData = [
    {data: [28, 48, 40, 19]}
  ];


  

  ngOnInit() {
  }

}

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
  public apocalypseLegend = true;
  public apocalypseData = [
    {data: [32, 0], label: '👍'},
    {data: [57, 0], label: 'Definitely not.'}
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
    {data: [35, 0], label: 'Fold it neatly'}
  ];

  public hogwartsOptions = {
    scaleShowVerticalLines: false,
    responsive: true 
  };

  public hogwartsLabels = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
  public hogwartsType = 'doughnut';
  public hogwartsLegend = true;
  public hogwartsData = [
    {data: [28, 48, 40, 19]}
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

  public emailOptions = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  public emailType = 'horizontalBar';
  public emailLegend = true;
  public emailData = [
    {data: [23, 0], label: 'Zero'},
    {data: [88, 0], label: '2,327'}
  ];

  public yellowLightOptions = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  public yellowLightType = 'horizontalBar';
  public yellowLightLegend = true;
  public yellowLightData = [
    {data: [76, 0], label: 'Speed through!'},
    {data: [18, 0], label: '✋ Stop'}
  ];

  public schoolSubjectOptions = {
    scaleShowVerticalLines: false,
    responsive: true 
  };

  public schoolSubjectLabels = ['Science', 'Math', 'Gym', 'History', 'English', 'Arts'];
  public schoolSubjectType = 'doughnut';
  public schoolSubjectLegend = true;
  public schoolSubjectData = [
    {data: [28, 48, 40, 19, 0, 2]}
  ];

  public movieRoleOptions = {
    scaleShowVerticalLines: false,
    responsive: true 
  };

  public movieRoleLabels = ['Drama', 'Sci-Fi', 'Action', 'Comedy', 'Romance', 'Horror'];
  public movieRoleType = 'doughnut';
  public movieRoleLegend = true;
  public movieRoleData = [
    {data: [18, 48, 0, 19, 0, 2]}
  ];

  

  ngOnInit() {
    
  }

}

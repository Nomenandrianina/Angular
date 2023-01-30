import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import ApexCharts from 'apexcharts';
import {ApexAxisChartSeries,ApexChart,ChartComponent,ApexDataLabels,ApexPlotOptions,ApexResponsive,
  ApexXAxis,
  ApexGrid,
  ApexStroke,
  ApexTooltip
} from 'ng-apexcharts';
import { FinancerService } from 'src/app/services/financer.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  colors: string[];
  grid: ApexGrid;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export default class StatistiqueComponent {
  @ViewChild('growthChart') growthChart: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  @ViewChild('bajajchart') bajajchart: ChartComponent;
  chartOptions1: Partial<ChartOptions>;
  monthChart: any;
  yearChart: any;
  colorChart = ['#673ab7'];
  selectedLevel;
  label_month=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  label_day=['lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi','Samedi'];
  data_day=[35, 15, 15, 35, 65, 40];
  data_month=[35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75];
  data = [
      {id: 0, name: "name1"},
      {id: 1, name: "name2"}
  ];

  selected(){
    console.log(this.selectedLevel)
    if(this.selectedLevel=="mensuel"){
      this.chartOptions = {
        series: [
          {
            name: 'Loss',
            data: this.data_month
          },
        ],
        dataLabels: {
          enabled: false
        },
        chart: {
          type: 'bar',
          height: 480,
          stacked: true,
          toolbar: {
            show: true
          }
        },
        colors: ['#90caf9', '#1e88e5', '#673ab7', '#ede7f6'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%'
          }
        },
        xaxis: {
          type: 'category',
          categories: this.label_month
        },
        grid: {
          strokeDashArray: 4
        },
        tooltip: {
          theme: 'dark'
        }
      };
    }
    if(this.selectedLevel=="hebdomadaire"){
      this.chartOptions = {
        series: [
          {
            name: 'Loss',
            data: this.data_day
          },
        ],
        dataLabels: {
          enabled: false
        },
        chart: {
          type: 'bar',
          height: 480,
          stacked: true,
          toolbar: {
            show: true
          }
        },
        colors: ['#90caf9', '#1e88e5', '#673ab7', '#ede7f6'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%'
          }
        },
        xaxis: {
          type: 'category',
          categories: this.label_day
        },
        grid: {
          strokeDashArray: 4
        },
        tooltip: {
          theme: 'dark'
        }
      };

    }
  }
  moyenne:any;

  constructor(private authService: AuthService,private financierservice:FinancerService) {
    // this.authService.isConnected();
  
  }

  get_Moyenne_temps():void{
    const onSuccess = (response: any) => {
      this.moyenne=response.final_moyenne;
      console.log(this.moyenne);
    };
    
    const onError = (response: any) => {
    };

    this.financierservice.getMoyennetemps().subscribe(onSuccess,onError);
  }

  ngOnInit(): void {
    this.selected();
    this.get_Moyenne_temps();
    // setTimeout(() => {
    //   this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
    //   this.monthChart.render();
    // }, 500);

    this.chartOptions = {
      series: [
        {
          name: 'Loss',
          data: this.data_month
        },
      ],
      dataLabels: {
        enabled: false
      },
      chart: {
        type: 'bar',
        height: 480,
        stacked: true,
        toolbar: {
          show: true
        }
      },
      colors: ['#90caf9', '#1e88e5', '#673ab7', '#ede7f6'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%'
        }
      },
      xaxis: {
        type: 'category',
        categories: this.label_month
      },
      grid: {
        strokeDashArray: 4
      },
      tooltip: {
        theme: 'dark'
      }
    };
    this.chartOptions1 = {
      chart: {
        type: 'area',
        height: 95,
        stacked: true,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#673ab7'],
      stroke: {
        curve: 'smooth',
        width: 1
      },

      series: [
        {
          data: [0, 15, 10, 50, 30, 40, 25]
        }
      ]
    };

  }

  // public Method
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      setTimeout(() => {
        this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
        this.monthChart.render();
      }, 200);
    }

    if (changeEvent.nextId === 2) {
      setTimeout(() => {
        this.yearChart = new ApexCharts(document.querySelector('#tab-chart-2'), this.yearOptions);
        this.yearChart.render();
      }, 200);
    }
  }

  ListGroup = [
    {
      name: 'Bajaj Finery',
      profit: '10% Profit',
      invest: '$1839.00',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success'
    },
    {
      name: 'TTML',
      profit: '10% Loss',
      invest: '$100.00',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-chevron-down',
      color: 'text-danger'
    },
    {
      name: 'Reliance',
      profit: '10% Profit',
      invest: '$200.00',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success'
    },
    {
      name: 'ATGL',
      profit: '10% Loss',
      invest: '$189.00',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-chevron-down',
      color: 'text-danger'
    },
    {
      name: 'Stolon',
      profit: '10% Profit',
      invest: '$210.00',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success'
    }
  ];

  monthOptions = {
    chart: {
      type: 'line',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [45, 66, 41, 89, 25, 44, 9, 54]
      }
    ],
    yaxis: {
      min: 5,
      max: 95
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return 'Total Earning';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  yearOptions = {
    chart: {
      type: 'line',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [35, 44, 9, 54, 45, 66, 41, 69]
      }
    ],
    yaxis: {
      min: 5,
      max: 95
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return 'Total Earning';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

}

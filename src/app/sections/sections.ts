import { Component, OnInit } from '@angular/core';
import _ from "lodash";
import { Chart, ArcElement, PieController, BarElement, LinearScale, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip } from 'chart.js';
import { SectionsService } from '../services/sections.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.html',
  styleUrls: ['./sections.scss']
})

export class SectionsComponent implements OnInit {
  chart_data: number[] = [];
  subject_list: string[] = ["english", "maths", "science", "social_science"];
  constructor(private sectionsService: SectionsService, private router: Router) {
    Chart.register(LinearScale, ArcElement, PieController, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
  }

  ngOnInit(): void {
    this.sectionsService.getSectionsData().subscribe((res) => {
      const failed_student_count_arr: number[] = [];
      Object.entries(_.groupBy(res, 'grade')).map(([key, value]) => { 
        var failed_student_count = 0;
        value.forEach((student) => {
          const student_failed=Object.entries(student).some(([key, value]) => {
            return this.subject_list.includes(key) && value < 35;
            
          })
          student_failed && failed_student_count++;

        })
        this.chart_data.push((((value.length - failed_student_count) / value.length) * 100));
        failed_student_count_arr.push(failed_student_count);

      });
      
      this.pieChartBrowser();
    });

  }
  pieChartBrowser() {

    const section = document.getElementById("myChart") as HTMLCanvasElement;
    const myChart = new Chart(section, {
      type: 'pie',
      data: {
        labels: ['Grade 1', 'Grade 2', 'Grade 3'],
        datasets: [{
          data: this.chart_data,
          backgroundColor: [
            'blue',
            'grey',
            'orange'
          ]
        }]
      },
      options: {
        responsive: true,
      }
    });
    const that = this;
    section.onclick = function (evt) {
      const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

      if (points.length) {
        const firstPoint = points[0];
        const label = myChart.data.labels ? myChart.data.labels[firstPoint.index] : null;
        that.router.navigateByUrl('/sectionDetails', { state: { grade: label } });
      }
    };

  }

}

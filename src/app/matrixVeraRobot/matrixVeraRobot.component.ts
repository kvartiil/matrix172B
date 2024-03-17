import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';


import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

import { HostListener } from '@angular/core';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);





@Component({
  selector: 'matrix-verarbt',
  templateUrl: './matrixVeraRobot.component.html',
  styleUrls: ['./matrixVeraRobot.component.css'],
})
export class VeraRobotComponent implements OnInit {


  hovered: boolean;
  setMyStyles() {
    let styles = {
      'background-color': this.hovered ? 'red' : 'blue',
      'font-weight': this.hovered ? 'bold' : 'normal',
      'border-radius': '50%',
      'width': '400px',
      'height': '400px',
      'transform': this.hovered?'perspective(1000px) translateZ(10px)':'perspective(1000px) translateZ(0px)'
      // 'transform':this.hovered? ' perspective(30px) ' +'scale3d(2, 0.7, 0.2)' + 'translateZ(100px)':''
     
    };
    return styles;
  }
  @HostListener('mouseover')
  public onChange(): any {
    this.hovered = !this.hovered;
  }

  arvamus = '';
  robotloome() {
    this.arvamus = 'Värvidena on kasutatud Veera põhivärve.';
    return this.arvamus;
  }
  
  arvamus2 = '';
  robotloome2() {
    this.arvamus2 = 'Nuppude puhul on jälgitud üldjoontes nuppude stiili, pisut kohandatud roboti tujudele.';
    return this.arvamus2;
  }

  arvamus3 = '';
  robotloome3() {
    this.arvamus3 = 'Tekstide puhul on kasutatud õiget fonti, muidu ka enam-vähem.';
    return this.arvamus3;
  }

  arvamus4 = '';
  robotloome4() {
    this.arvamus4 = 'Taustad on võimalikud erinevad, siin on üks nendest.';
    return this.arvamus4;
  }

  arvamus4a = '';
  robotloome4a() {
    this.arvamus4a = 'Robotit peetakse karbitooteks, tegelikult on STATi omatoode.';
    return this.arvamus4a;
  }

  arvamus5 = '';
  robotloome5() {
    //this.probleemike = localStorage.getItem("loodudprobleem");
    this.arvamus5 = 'Värvid õiged, kuid kasutamine pisut vaba.';
    return this.arvamus5;
  }
  
  arvamus6 = '';
  robotloome6() {
   this.arvamus6 = 'Funktsionaalsed osad eraldatakse joontega või muul viisil.';
   return this.arvamus6;
  }

  arvamus7 = '';
  robotloome7() {
   this.arvamus7 = 'Üldiselt põnev disainisüsteem, kuid koostöös vajab veel väljaarendamist.';
   return this.arvamus7;
  }

  public session = [];
  public writing = false;
  public messages = [
    {
      trigger: 'sessionStart',
      response: 'Tere, olen VeraRobot - mõeldud disaini näitamiseks...',
      options: ['Värvid', 'Nupud', 'Tekstid', 'Taust', 'Robot', 'Hover', 'Osad', 'Veel'],
    },
    {
      trigger: 'Värvid',
      response: this.robotloome(),
      options: ['Nupud', 'Tekstid', 'Taust', 'Robot', 'Hover', 'Osad', 'Veel', 'Restart'],
    },
    {
      trigger: 'Nupud',
      response: this.robotloome2(),
      options: ['Värvid', 'Tekstid', 'Taust', 'Robot', 'Hover', 'Osad', 'Veel', 'Restart'],
    },
    {
      trigger: 'Tekstid',
      response: this.robotloome3(),
      options: ['Värvid', 'Nupud', 'Taust', 'Robot', 'Hover',  'Osad', 'Veel', 'Restart'],
    },
    {
      trigger: 'Taust',
      response: this.robotloome4(),
      options: ['Värvid', 'Nupud', 'Tekstid', 'Robot', 'Hover', 'Osad', 'Veel', 'Restart'],
    },
    {
      trigger: 'Robot',
      response: this.robotloome4a(),
      options: ['Värvid', 'Nupud', 'Tekstid', 'Taust', 'Hover', 'Osad', 'Veel', 'Restart'],
    },
    {
      trigger: 'Hover',
      response: this.robotloome5(),
      options: ['Värvid', 'Nupud', 'Tekstid', 'Taust', 'Robot', 'Osad', 'Veel', 'Restart'],
    },
    {
      trigger: 'Osad',
      response: this.robotloome6(),
      options: ['Värvid', 'Nupud', 'Tekstid', 'Taust', 'Robot', 'Hover', 'Veel', 'Restart'],
    },
    {
      trigger: 'Veel',
      response: this.robotloome7(),
      options: ['Värvid', 'Nupud', 'Tekstid', 'Taust', 'Robot', 'Hover', 'Osad', 'Restart'],
    },
    {
      trigger: 'Restart',
      response: 'Tere, olen Bonito Robot de Inteligencia Artificial, valige oma soov!',
      options: ['Värvid', 'Nupud', 'Tekstid', 'Taust', 'Robot', 'Hover', 'Osad', 'Veel'],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.session.push(
      this.formartMsjSession('bot', this.getNextMsg('sessionStart'))
    );
  }

  getNextMsg(trigger: string) {
    let msj = this.messages.find((msj) => msj.trigger == trigger);
    if (msj.trigger == 'Restart') {
      this.session = [];
      this.session.push(
        this.formartMsjSession('bot', this.getNextMsg('sessionStart'))
      );
    }
    return msj;
  }

  onOptionSelected(option: any) {
    this.writing = true;
    setTimeout(() => {
      this.session.push(this.formartMsjSession('user', { response: option }));
      this.session.push(this.formartMsjSession('bot', this.getNextMsg(option)));
      this.writing = false;
    }, 1800);
  }

  formartMsjSession(autor, msg) {
    return {
      autor,
      ...msg,
    };
  }


  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private createChartPie(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
       y: this.getRandomNumber(0, 1000),
      });
    }

        const chart = Highcharts.chart('chart-pie', {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Elujõu komponendid',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Kuupäev: {point.key}</span><br>`,
        pointFormat: '<span>Suurus: {point.y}</span>',
        useHTML: true,
      },
      series: [{
        name: null,
        innerSize: '50%',
        data,
      }],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint({
        name: `Elujõud ${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      }, true, true);
    }, 1500);
  }
  


}

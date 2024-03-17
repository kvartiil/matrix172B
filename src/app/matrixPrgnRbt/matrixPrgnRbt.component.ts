import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';


import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

import { HostListener } from '@angular/core';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);





@Component({
  selector: 'matrix-prgnrbt',
  templateUrl: './matrixPrgnRbt.component.html',
  styleUrls: ['./matrixPrgnRbt.component.css'],
})
export class PrgnRbtComponent implements OnInit {


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
    this.arvamus = 'Kullake, üldprognoosi saad siis, kui masinal on olemas aegrida, praegu ei ole. Tee selgeks endale tehted aegridadega, siis tule uuesti.';
    return this.arvamus;
  }
  
  arvamus2 = '';
  robotloome2() {
    this.arvamus2 = 'Kitsaskoht on see, et ilma hea disainita ei juhtu midagi.';
    return this.arvamus2;
  }

  arvamus3 = '';
  robotloome3() {
    this.arvamus3 = 'Eeldus on see, et täida Miirat, siis saab disainer oma tööd teha...';
    return this.arvamus3;
  }

  arvamus4 = '';
  robotloome4() {
    this.arvamus4 = 'Eksimus on see, kui Miirat valesti täidad.';
    return this.arvamus4;
  }

  arvamus4a = '';
  robotloome4a() {
    this.arvamus4a = 'Ei peaks kartma oma ekspertarvamust avaldada, et rohkem raha on parem kui vähem raha, seda ei pea regressioonanalüüsiga tõestama.';
    return this.arvamus4a;
  }

  arvamus5 = '';
  robotloome5() {
    //this.probleemike = localStorage.getItem("loodudprobleem");
    this.arvamus5 = 'AI on puhkusel, saa ise ka vahelduseks hakkama.';
    return this.arvamus5;
  }
  
  arvamus6 = '';
  robotloome6() {
   this.arvamus6 = 'Liiga palju browni liikumist, ehk mõttetut asjatamist.';
   return this.arvamus6;
  }

  arvamus7 = '';
  robotloome7() {
   this.arvamus7 = 'Ole täitsa, proovi vahelduseks tööd teha. Vähem tühje koosolekuid, rohkem sisulist tööd.';
   return this.arvamus7;
  }

  public session = [];
  public writing = false;
  public messages = [
    {
      trigger: 'sessionStart',
      response: 'Tere, olen Robot InteligenciaArtificial, valige mille kohta soovite infot!',
      options: ['Üldprognoos', 'Kitsaskohad', 'Eeldused', 'Eksimised', 'Tavaanalüütika', 'AI', 'Mis valesti', 'Mida proovida'],
    },
    {
      trigger: 'Üldprognoos',
      response: this.robotloome(),
      options: ['Kitsaskohad', 'Eeldused', 'Eksimised', 'Tavaanalüütika', 'AI', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Kitsaskohad',
      response: this.robotloome2(),
      options: ['Üldprognoos', 'Eeldused', 'Eksimised', 'Tavaanalüütika', 'AI', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Eeldused',
      response: this.robotloome3(),
      options: ['Üldprognoos', 'Kitsaskohad', 'Eksimised', 'Tavaanalüütika', 'AI',  'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Eksimised',
      response: this.robotloome4(),
      options: ['Üldprognoos', 'Kitsaskohad', 'Eeldused', 'Tavaanalüütika', 'AI', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Tavaanalüütika',
      response: this.robotloome4a(),
      options: ['Üldprognoos', 'Kitsaskohad', 'Eeldused', 'Eksimised', 'AI', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'AI',
      response: this.robotloome5(),
      options: ['Üldprognoos', 'Kitsaskohad', 'Eeldused', 'Eksimised', 'Tavaanalüütika', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Mis valesti',
      response: this.robotloome6(),
      options: ['Üldprognoos', 'Kitsaskohad', 'Eeldused', 'Eksimised', 'Tavaanalüütika', 'AI', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Mida proovida',
      response: this.robotloome7(),
      options: ['Üldprognoos', 'Kitsaskohad', 'Eeldused', 'Eksimised', 'Tavaanalüütika', 'AI', 'Mis valesti', 'Restart'],
    },
    {
      trigger: 'Restart',
      response: 'Tere, olen Bonito Robot de Inteligencia Artificial, valige oma soov!',
      options: ['Üldprognoos', 'Kitsaskohad', 'Eeldused', 'Eksimised', 'Tavaanalüütika', 'AI', 'Mis valesti', 'Mida proovida'],
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

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';


import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

import { HostListener } from '@angular/core';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);





@Component({
  selector: 'matrix-clientrobot',
  templateUrl: './matrixClientRobot.component.html',
  styleUrls: ['./matrixClientRobot.component.css'],
})
export class ClientRobotComponent implements OnInit {


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



  numbermks = 7;
  robotmks = '';
  robotloome()
  {  

    this.robotmks = localStorage.getItem("jareldusseisukoht");
    //this.numbermks = environment.modelMaksevoime;


    //if (this.numbermks <= 0.4) {
      //this.muutujaX = 100;
      //this.robotmks = 'Maksevõimega on suht kehvad lood...';
    //}
    //else if (0.4 < this.numbermks) {
      //this.robotmks = 'Maksevõime annab lootust...';
    //  this.robotmks = localStorage.getItem("paiknemine");
      
    //}
    return this.robotmks;
  }

  //numberrnt = 7;
  robotrnt = '';
  robotrnt2 = '';
  robotrnt3 = '';
  robotloome2()
  {  

    this.robotrnt = localStorage.getItem("efektiivsusmallu");
    this.robotrnt2 = localStorage.getItem("rentaablusmallu");
    this.robotrnt3 = this.robotrnt + ' ' + this.robotrnt2;
    //this.numberrnt = environment.modelRent;

    //if (this.numberrnt <= 0.4) {
      //this.muutujaX = 100;
    //  this.robotrnt = 'Rentaablusest pole suurt lõhnagi...';
    //}
   // else if (0.4 < this.numberrnt) {
   //   this.robotrnt = 'Täiesti rentaabel värk...';
      
   // }
    return this.robotrnt3;
  }

  numberefk = 7;
  robotefk = '';
  robotloome3()
  {  
    this.robotefk = localStorage.getItem("ferrypier2");
    
    return this.robotefk;
  }

  robotloome3a()
  {  
    this.robotefk = localStorage.getItem("ferrypier2");
    
    return this.robotefk;
  }

  numberstr = 7;
  robotsts = '';
  robotsts2 = '';
  robotloome4()
  {  
    this.robotsts = localStorage.getItem("stsenaarium");

    if (this.robotsts == 'Stsenaarium 1: isevoolu teed minek') {
      this.robotsts2 = 'Valisite isevoolu teed minemise stsenaariumi. Antud süsteemi kontekstis tähendab see seda, et jätkub see, mis on senimaani toimunud ja olulisi muudatusi ette ei võeta. Ei astuta mingeid samme, mis ettevõtet kohe uputaksid, kuid ei võeta ka ette käike, mis midagi paremaks muudaksid.';

    }

    else if (this.robotsts == 'Stsenaarium 2: agressiivne kasv') {
      this.robotsts2 = 'Valisite agressiivse kasvu stsenaariumi. Antud süsteemi kontekstis tähendab see seda, et ressursid suunatakse maksimaalse kasvu saamisele. Tegemist on olukorraga, mis võib kõige kiiremini tuua kõige suuremate edu, kuid kiirel kasvul on omad riskid. Kiire kasv võib tähendada seda, et kui kõik ei lähe plaanitult, siis võib tulla tagasilööke (näiteks võetakse laene, kuid turg ei tule järgi ja laene ei suudeta teenindada).';

    }

    else if (this.robotsts == 'Stsenaarium 3: kiire allaandmine') {
      this.robotsts2 = 'Valisite kiire allaandmise stsenaariumi. Antud süsteemi kontekstis tähendab see seda, et sisuliselt ei jõua enam lootusetu olukorraga võidelda. Ärilises mõttes ei pruugi see midagi halba olla, tuleb ette võtta ettevõtte restruktureerimine, üks äriplaan muuta teiseks ja minna edasi. Selle kohta öeldakse, et parem õudne lõpp, kui lõputu õudus.';

    }

    else if (this.robotsts == 'Stsenaarium 4: mõõdukas kasv') {
      this.robotsts2 = 'Valisite mõõduka kasvu stsenaariumi. Antud süsteemi kontekstis tähendab see seda, et püütakse leida võimalus ettevõtte kasvule viimiseks ilma, et sellega kaasneksid mingid sisulised ja suuremad riskid. Tegemist on alalehoidliku ja mõistliku võimalusega leidmaks lahendust oma ettevõtte edasisele arengule.';

    }

    else if (this.robotsts == 'Stsenaarium 5: täielik lõhkilaenamine') {
      this.robotsts2 = 'Valisite täieliku lõhkilaenamise stsenaariumi. Antud süsteemi kontekstis tähendab see seda, et võetakse aluseks loogika maksimaalse välise finantseeringu kaasamiseks. Üldiselt on võimalik, et selle tulemusena luuakse olukord, kus maksimaalse laenu toel saavutatakse ka kiire hüpe (paljude positiivsete asjaolude kokkusattumisel), kuid pigem on see veel hädapääsemise katse enne lõpliku kukkumist.';

    }


    
    //this.numberli = environment.modelEfekt;

    //if (this.numberefk <= 0.4) {
      //this.muutujaX = 100;
    //  this.robotefk = 'Hullult ebaefektiivne värk...';
   // }
    //else if (0.4 < this.numberefk) {
    //  this.robotefk = 'Efektiivsust jääb ülegi, võib välja laenata...';
      
    //}
    return this.robotsts2;
  }
  
  robotvarad = '';
  robotvarad2 = '';
  robotloome4a()
  {
    this.robotvarad = localStorage.getItem("varaplaan");
    
    if (this.robotvarad == 'Üldiselt ei ole plaanis varasid torkida.') {
      this.robotvarad2 = 'Seoses varadega valisite hoiaku, et üldiselt ei ole plaanis varasid torkida. See tähendab antud süsteemi kontekstis, et varade seisu ei muudeta. Ehk siis ärilises mõttes ei investeerita ega ka müüda, s.t. ei seota likviidsuset ega ka ei vabastata likviidsust.';

    }    

    else if (this.robotvarad == 'Müün midagi maha, jama jalust ära.') {
      this.robotvarad2 = 'Seoses varadega valisite hoiaku, et midagi tuleks maha müüa. See tähendab antud süsteemi kontekstis, et varade seisu vähendatakse (mõeldud on varasid eelkõige põhivara kontekstis, ehk siis mingeid asju, mis aitavad ettevõtte tegevusele kaasa). Varade müük tähendaks antud juhul likviidsuse juurdetekkimist ja maksevõime paranemist. Samas, kui müüaks ettevõtte tegevuseks vajalikke asju, siis pikemas perspektiivis võib ees oodata käibe vähenemine.';

    } 

    else if (this.robotvarad == 'Investeerin, tänapäeval on iga teismeline investor.') {
      this.robotvarad2 = 'Seoses varadega valisite hoiaku, et millegisse tuleks investeerida. See tähendab antud süsteemi kontekstis, et varade seisu suurendatakse (mõeldud on varasid eelkõige põhivara kontekstis, ehk siis mingeid asju, mis aitavad ettevõtte tegevusele kaasa). Varade omandamine tähendab likviidsuse vähenemist, mis võib negatiivselt mõjutada maksevõimet. Kui on tegemist olukorraga, et likviidsust on niigi vähe, siis on põhivarasse investeerimine ohtlik otsus.';

    }

    return this.robotvarad2;
  }

  probleemike = '';
  probleemike2 = '';
  probleemikekoond = '';
  robotloome5() {
    this.probleemike = localStorage.getItem("loodudprobleem");
    this.probleemike2 = localStorage.getItem("efrentproblem");
    this.probleemikekoond = this.probleemike + this.probleemike2;
    //this.loodudprobleem = "Te ei ole suutnud veel probleemi luua, kui varem ka lõite, seda uuesti ei kuvata."
    if (this.probleemikekoond.length < 10) {
      this.probleemikekoond = "Te ei ole suutnud veel probleemi luua, kui varem ka lõite, seda uuesti ei kuvata.";
    }

    return this.probleemikekoond;
  }

  public session = [];
  public writing = false;
  public messages = [
    {
      trigger: 'sessionStart',
      response: 'Tere, olen Robot InteligenciaArtificial, valige mille kohta soovite infot!',
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Maksevõime', 'Kliendid', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Mida proovida'],
    },
    {
      trigger: 'Kohustuste seis',
      response: this.robotloome(),
      options: ['Rentaablus ja Efektiivsus', 'Maksevõime', 'Kliendid', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Rentaablus ja Efektiivsus',
      response: this.robotloome2(),
      options: ['Kohustuste seis', 'Maksevõime', 'Kliendid', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Maksevõime',
      response: this.robotloome3(),
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Kliendid', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Kliendid',
      response: this.robotloome3a(),
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Maksevõime', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Lahendusvariandid',
      response: this.robotloome4(),
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Maksevõime', 'Kliendid', 'Mis olemas', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Mis olemas',
      response: this.robotloome4a(),
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Maksevõime', 'Kliendid', 'Lahendusvariandid', 'Mis valesti', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Mis valesti',
      response: this.robotloome5(),
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Maksevõime', 'Kliendid', 'Lahendusvariandid', 'Mis olemas', 'Mida proovida', 'Restart'],
    },
    {
      trigger: 'Mida proovida',
      response: this.robotloome5(),
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Maksevõime', 'Kliendid', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Restart'],
    },
    {
      trigger: 'Restart',
      response: 'Tere, olen Bonito Robot de Inteligencia Artificial, valige oma soov!',
      options: ['Kohustuste seis', 'Rentaablus ja Efektiivsus', 'Maksevõime', 'Kliendid', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Mida proovida'],
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

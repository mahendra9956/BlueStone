import { Component } from '@angular/core';


@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent {

  progress=0;

  ngOnInit(){
    const interval=setInterval(() =>{
      this.progress +=10;
      if(this.progress >=50){
        clearInterval(interval);
      }
    },500)
  }


  chartOptions = {
	  animationEnabled: true,
	  data: [{
		type: "pie",
		startAngle: 665,
		indexLabel: "{name}: {x}",
		indexLabelPlacement: "inside",
	  yValueFormatString: "#,###.##'%'",
		dataPoints: [
			{ y: 21.3, name: "Special Discount 500" },
			{ y: 17, name: "100% Discount* 2000" },

			{ y: 27.7, name: "You Pay 20000" },
		
		
		
		]
	  }]
	}	

  
}

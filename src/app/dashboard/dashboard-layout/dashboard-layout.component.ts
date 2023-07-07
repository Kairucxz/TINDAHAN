import { Component } from '@angular/core';

export interface Tile {
  title: string;
  cols: number;
  rows: number;
  color: string;
  amount: number;
  content: string;
  showGraph?: boolean;
}


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  tiles: Tile[] = [
    {
      title: 'Sales Widget',
      cols: 1,
      rows: 1,
      color: 'lightblue',
      amount: 1500,
      content: 'Monthly'
    },
    {
      title: 'Inventory Widget',
      cols: 1,
      rows: 1,
      color: 'lightgreen',
      amount: 1500,
      content: 'Monthly'
    },
    {
      title: 'Credits Widget',
      cols: 1,
      rows: 1,
      color: 'lightpink',
      amount: 1500,
      content: 'Monthly'
    },
    {
      title: 'Cash on Hand Widget',
      cols: 1,
      rows: 1,
      color: '#ec9f79',
      amount: 2000,
      content: 'Monthly'
    },
    {
      title: 'Sales Graph',
      cols: 2,
      rows: 1,
      color: '#ffffcc',
      amount: 0,
      content: 'Total Sales: $100,000',
      showGraph: true
    },
    {
      title: 'Credits Graph',
      cols: 2,
      rows: 1,
      color: '#66d9ff',
      amount: 0,
      content: 'Total Credits: $100,000',
      showGraph: true
    }
  ];  

  chartOptions = {
	  title: {
		  text: "Monthly Sales Data"
	  },
	  theme: "light2",
	  animationEnabled: true,
	  exportEnabled: true,
	  axisY: {
		includeZero: true,
		valueFormatString: "$#,##0k"
	  },
	  data: [{
		type: "column", //change type to bar, line, area, pie, etc
		yValueFormatString: "$#,##0k",
		color: "#01b8aa",
		dataPoints: [
			{ label: "Jan", y: 172 },
			{ label: "Feb", y: 189 },
			{ label: "Mar", y: 201 },
			{ label: "Apr", y: 240 },
			{ label: "May", y: 166 },
			{ label: "Jun", y: 196 },
			{ label: "Jul", y: 218 },
			{ label: "Aug", y: 167 },
			{ label: "Sep", y: 175 },
			{ label: "Oct", y: 152 },
			{ label: "Nov", y: 156 },
			{ label: "Dec", y: 164 }
		]
	  }]
	}
  
}

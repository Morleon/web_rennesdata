import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
	objectKeys = Object.keys;

	donnees;
	circs = [{value: '1', viewValue: '1ère Circonscription'},
		 {value: '2', viewValue: '2ème Circonscription'},
		 {value: '3', viewValue: '3ème Circonscription'},
		 {value: '4', viewValue: '4ème Circonscription'},
		 {value: '5', viewValue: '5ème Circonscription'},
		 {value: '6', viewValue: '6ème Circonscription'},
		 {value: '7', viewValue: '7ème Circonscription'},
		 {value: '8', viewValue: '8ème Circonscription'},
		 {value: '9', viewValue: '9ème Circonscription'},
		 {value: '10', viewValue: '10ème Circonscription'},
	];
	perc_part = [donnees.records[0].fields.pourcentage_participation, donnees.records[1].fields.pourcentage_participation]	

	constructor(private apiService: ApiService) { }

	ngOnInit(): void {
		this.apiService.getInfo().subscribe((data)=>{
			this.donnees = data;
			console.log(this.donnees);
			console.log(this.donnees.records[1].fields);
		});
	}
}

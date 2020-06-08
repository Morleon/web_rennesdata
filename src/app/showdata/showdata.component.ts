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
	circs = [{value: '1', viewValue: "Cité Internationale Paul Ricoeur"},
		 {value: '2', viewValue: "Groupe Scolaire Marcel Pagnol"},
		 {value: '3', viewValue: "Groupe Scolaire des Clôteaux"},
		 {value: '4', viewValue: "Groupe Scolaire Jules Isaac"},
		 {value: '5', viewValue: "Groupe Scolaire Carle Bahon"},
		 {value: '6', viewValue: "Groupe Scolaire des Clôteaux"},
		 {value: '7', viewValue: "Gymnase Lesseps"},
		 {value: '8', viewValue: "Groupe Scolaire de l'Ille"},
		 {value: '9', viewValue: ''},
		 {value: '10', viewValue: "Groupe Scolaire Jean Rostand"},
	];
/*	perc_part = [this.donnees.records[0].fields.pourcentage_participation, this.donnees.records[1].fields.pourcentage_participation];*/

	constructor(private apiService: ApiService) { }

	ngOnInit(): void {
		this.apiService.getInfo().subscribe((data)=>{
			this.donnees = data;
			console.log(this.donnees);
			console.log(this.donnees.records[1].fields);
		});
	}
}

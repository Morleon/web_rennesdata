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

	// permet d'effectuer l'import
	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getInfo().subscribe((data)=>{
			this.donnees = data;
			console.log(this.donnees)
			this.createLists(0)
		});
	}

	createLists(num_circ) {

		if (num_circ == null){
			num_circ = 0
		}

		this.resultats = new Array();
		this.candidats = new Array();

		var candidat = this.donnees.records[num_circ].fields.candidat_1;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_1;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_2;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_2;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_3;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_3;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_4;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_4;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_5;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_5;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_6;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_6;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_7;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_7;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_8;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_8;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_9;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_9;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_10;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_10;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_11;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_11;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_12;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_12;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_13;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_13;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_14;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_14;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_15;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_15;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_16;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_16;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_17;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_17;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_18;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_18;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_19;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_19;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_20;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_20;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_21;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_21;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_22;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_22;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_23;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_23;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_24;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_24;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_25;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_25;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_26;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_26;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_27;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_27;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_28;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_28;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_29;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_29;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_30;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_30;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_31;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_31;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_32;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_32;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_33;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_33;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		var candidat = this.donnees.records[num_circ].fields.candidat_34;
		var resultat = this.donnees.records[num_circ].fields.pourcentage_34;
		this.candidats.push(candidat);
		this.resultats.push(resultat);

		console.log(this.resultats)
		console.log(this.candidats)
	}

}

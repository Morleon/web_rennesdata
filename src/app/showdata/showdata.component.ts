import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

	donnees;

	constructor(private apiService: ApiService) { }

	ngOnInit(): void {
		this.apiService.getInfo().subscribe((data)=>{
			this.donnees = data;
			console.log(this.donnees)
		});
	}
}

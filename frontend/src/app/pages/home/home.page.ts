import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Station} from '../../models/station';
import {BikeService} from '../../services/bike.service';
import {StationService} from '../../services/station.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [BikeService, StationService]
})
export class HomePage implements OnInit {

  stations: Station[];
  public isSearchBarOpened = false;
  searchText = '';

  constructor(private bikeService: BikeService, private router: Router,
              private stationService: StationService) {
  }

  ngOnInit() {
    this.getStations();
  }

  getStations() {
    this.stationService.getStations()
        .subscribe(res => {
          console.log(res);
          this.stations = res as Station[];
        });
  }

  bikeStationDetail(stationId: string) {
    this.stationService.getStationBikeDetail(stationId)
        .subscribe( res => {
                this.isSearchBarOpened = false;
                this.router.navigate(['/stations', stationId]);
            },
            err => {
              console.log(err);
              this.handleError(err);
            });
  }

  private handleError(err: HttpErrorResponse) {
    if ( err.status === 500 ) {
      alert(err.message);
    }
  }

    searchStations(event) {
        this.searchText = event.target.value;
    }
}

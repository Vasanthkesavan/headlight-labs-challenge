import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserSubmitService {
    api_key: string = "xWPxe47w7OiMvzrKECrLFg";
    suspectData = [];

    constructor(private http: HttpClient) { }

    checkSuspect(suspect) {
        this.suspectData.push(suspect);
        let formData = new FormData();
        formData.append("api_key", this.api_key);
        formData.append("image", suspect);
        return this.http.post('https://www.headlightlabs.com/api/gcpd_lookup', formData);
    }

    reportSuspect() {
        let formData = new FormData();
        formData.append("api_key", this.api_key);
        formData.append("image", this.suspectData[0]);

        return this.http.post("https://www.headlightlabs.com/api/gcpd_report", formData);
    }

    saveHunter(hunterDetails) {
        console.log(hunterDetails);
        return this.http.post('http://localhost:3000/api/saveHunter', hunterDetails);
    }

    getRecentSuspects() {
        return this.http.get('http://localhost:3000/api/getRecentSuspects');
    }

    getLeaderboard() {
        return this.http.get('http://localhost:3000/api/leaderboard');
    }
}
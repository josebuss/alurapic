import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU5UEdXlZUIis-bycXGz7kswlh7V_jr5MxiF6P7ZxsRuYViU0f",
      description: "Mago implacavel"
    }, {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSCbHlTR8EXLk2pJ5qtHXPtcBq6dpvPrKwB8xvIINDergkyFSA",
      description: "Mago implacavel 2"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU5UEdXlZUIis-bycXGz7kswlh7V_jr5MxiF6P7ZxsRuYViU0f",
      description: "Mago implacavel"
    }
  ]
}

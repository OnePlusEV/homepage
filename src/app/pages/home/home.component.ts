import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public bookmarks = [
    {
      title: "Local",
      links: [
        {name: "DEV", url: "https://localhost:4202/?customSettingsUrl=http:%2F%2Flocalhost:4202%2Fsettings%2Fcustom.json&env=b2b-dev"},
        {name: "TEST", url: "https://localhost:4202/?customSettingsUrl=http:%2F%2Flocalhost:4202%2Fsettings%2Fcustom.json&env=b2b-test"},
        {name: "LM", url: "https://localhost:4202/?customSettingsUrl=http:%2F%2Flocalhost:4202%2Fsettings%2Fcustom.json&env=b2b-lm"},
      ],
    },
    {
      title: "JRA",
      links: [
        {name: "JRA", url: "http://localhost:4200/jra?customSettingsUrl=http:%2F%2Flocalhost:4200%2Fsettings%2Fcustom.json&env=b2b-dev"},
        {name: "ED", url: "http://localhost:4200/single-doc?customSettingsUrl=http:%2F%2Flocalhost:4200%2Fsettings%2Fcustom.json&env=b2b-dev"},
      ],
    },
    {
      title: "Work",
      links: [
        {name: "Mail", url: "https://mail.bivgroup.ru/"},
        {name: "GitLab Soglasie", url: "https://sglgitlab.soglasie.ru/"},
        {name: "Jira", url: "https://rybinsk.bivgroup.com/jira/junta/secure/Dashboard.jspa"},
      ],
    },
    {
      title: "Enjoy",
      links: [
        { name: "/r/unixporn", url: "https://reddit.com/r/unixporn" },
        { name: "Pikabu", url: "https://pikabu.ru" },
      ],
    },
  ];

}

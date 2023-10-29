import {Component, OnInit} from '@angular/core';
import {SettingsStylesFormService} from "../../services/settings-styles-form.service";
import {CacheService} from "../../services/cache.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public styleForm: SettingsStylesFormService,
              public cache: CacheService) {
  }


  ngOnInit() {
  }

  public card = {
    title: "Work",
    links: [
      {name: "Mail", url: "https://mail.bivgroup.ru/"},
      {name: "GitLab Soglasie", url: "https://sglgitlab.soglasie.ru/"},
      {name: "Jira", url: "https://rybinsk.bivgroup.com/jira/junta/secure/Dashboard.jspa"},
    ],
  };


}

import { Component } from '@angular/core';

import { Profile } from '../profile/profile';
import { Diary } from '../diary/diary';
import { HomePage } from '../home/home';
import { Settings } from '../settings/settings';
import { Statistics } from '../statistics/statistics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Profile;
  tab3Root = Diary;
  tab4Root = Statistics;
  tab5Root = Settings;

  constructor() {

  }
}

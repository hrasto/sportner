import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RhrInfoPage } from '../rhr-info/rhr-info';
import { RhrinfoLowPage } from '../rhrinfo-low/rhrinfo-low';
import { RhrinfoHighPage } from '../rhrinfo-high/rhrinfo-high';
import { RhrinfoMeasurePage } from '../rhrinfo-measure/rhrinfo-measure';


/**
 * Generated class for the RhrinfoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rhrinfo-list',
  templateUrl: 'rhrinfo-list.html',
})
export class RhrinfoListPage {
rhrInfoPage=RhrInfoPage;
rhrinfoLowPage=RhrinfoLowPage;
rhrinfoHighPage=RhrinfoHighPage;
rhrinfoMeasurePage=RhrinfoMeasurePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RhrinfoListPage');
  }

}

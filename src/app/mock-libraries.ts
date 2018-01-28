import { Library } from './library';

export class DashLib {
  id: string;
  currentVersion: string;
}

export const DASHBOARD_LIBRARIES: DashLib[] = [
  { id: 'google-cast-sdk', currentVersion: '3.5.6'},
  { id: 'SwiftyBeaver', currentVersion: '1.4.2'},
  { id: 'SwiftyUserDefaults', currentVersion: '3.0'},
  { id: 'RxCocoa', currentVersion: '3.6'},
  { id: 'RxSwift', currentVersion: '3.6'},
  { id: 'RealmSwift', currentVersion: '2.6'},
  { id: 'JSONCodable', currentVersion: '3.0'},
  { id: 'Alamofire', currentVersion: '4.5'},
  { id: 'AlamofireImage', currentVersion: '3.2'},
  { id: 'Kingfisher', currentVersion: '3.10'},
  { id: 'ATInternet-Apple-SDK/Tracker', currentVersion: '2.6'},
  { id: 'OHAutoNIBi18n', currentVersion: '0.2.1'},
  { id: 'Reusable', currentVersion: '4.0'},
  { id: 'JPSVolumeButtonHandler', currentVersion: '1.0.5'},
  { id: 'Fabric', currentVersion: '1.6'},
  { id: 'Crashlytics', currentVersion: '3.8'},
  { id: 'KTCenterFlowLayout', currentVersion: '1.3'}
  //{ id: 'Accengage-iOS-SDK', currentVersion: '6.1'} This lib is not in cocoapod 
];
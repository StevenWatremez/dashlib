import { Library } from './library';

export class DashLib {
  id: string;
  currentVersion: string;
}

export const DASHBOARD_LIBRARIES: DashLib[] = [
  { id: 'google-cast-sdk', currentVersion: '3.10'},
  { id: 'SwiftyBeaver', currentVersion: '1.4.2'},
  { id: 'SwiftyUserDefaults', currentVersion: '3.0'},
  { id: 'RxCocoa', currentVersion: '3.6'},
  { id: 'RxSwift', currentVersion: '3.6'},
  { id: 'RealmSwift', currentVersion: '2.6'},
  { id: 'JSONCodable', currentVersion: '3.0'},
  { id: 'Alamofire', currentVersion: '4.5'},
  { id: 'AlamofireImage', currentVersion: '3.2'},
  { id: 'Kingfisher', currentVersion: '3.10'} 
];
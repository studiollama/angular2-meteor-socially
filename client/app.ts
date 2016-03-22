import 'reflect-metadata';
import {NgZone, Component } from 'angular2/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap'
import {Parties} from '../collections/parties';

@Component({
    selector: 'app',
    templateUrl: 'client/app.html'
}) 

class App {
    parties: Array<Object>;


    constructor(zone: NgZone) {
        Tracker.autorun(() => zone.run(() => {
            this.parties = Parties.find().fetch();
        }));
    }
}
bootstrap(App);
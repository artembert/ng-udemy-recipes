import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    public loadedFeature: string = 'recipe';

    public onNavigate(feature: string): void {
        this.loadedFeature = feature;
    }

}

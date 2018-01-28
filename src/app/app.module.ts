import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EnterpriseComponent} from './enterprise/enterprise.component';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';
import {ApiFirmService} from './api-firm.service';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {DataTablesModule} from 'angular-datatables';
import {MapComponent} from './map/map.component';
import {RouterModule, Routes} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {ExportComponent} from './export/export.component';
import {FilterLinkService} from './filter-link.service';
import {LoaderComponent} from './loader/loader.component';
import { FilterCodeApeComponent } from './filter-code-ape/filter-code-ape.component';
import { FilterBusinessCategoriesComponent } from './filter-business-categories/filter-business-categories.component';
import { FilterAreaComponent } from './filter-area/filter-area.component';
import { FilterMunicipalityComponent } from './filter-municipality/filter-municipality.component';
import { FilterCreationYearComponent } from './filter-creation-year/filter-creation-year.component';
import { FilterLegalStatusComponent } from './filter-legal-status/filter-legal-status.component';
import { FilterWorkforceComponent } from './filter-workforce/filter-workforce.component';
import { FilterTotalRevenueComponent } from './filter-total-revenue/filter-total-revenue.component';
import { FilterRegionComponent } from './filter-region/filter-region.component';

const appRoutes: Routes = [
    {path: '', component: EnterpriseComponent},
    {path: 'carte', component: MapComponent},
    {path: 'export', component: ExportComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        EnterpriseComponent,
        TopNavbarComponent,
        NavbarComponent,
        MapComponent,
        ExportComponent,
        LoaderComponent,
        FilterCodeApeComponent,
        FilterBusinessCategoriesComponent,
        FilterAreaComponent,
        FilterMunicipalityComponent,
        FilterCreationYearComponent,
        FilterLegalStatusComponent,
        FilterWorkforceComponent,
        FilterTotalRevenueComponent,
        FilterRegionComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DataTablesModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        ),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCZ2D_Hz-63OIhvKl1TbjxToKLJ98jgXbU'
        })
    ],
    providers: [ApiFirmService, FilterLinkService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

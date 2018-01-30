import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-municipality',
    templateUrl: './filter-municipality.component.html',
    styleUrls: ['./filter-municipality.component.css']
})
export class FilterMunicipalityComponent implements OnInit {

    commune = [];
    communeHard = ['Paris','Marseille','Lyon','Toulouse','Nice','Nantes','Strasbourg','Montpellier','Bordeaux','Lille','Rennes','Reims','Le Havre','Saint-Étienne','Toulon','Grenoble','Dijon','Angers','Nîmes','Villeurbanne','Saint-Denis','Le Mans','Clermont-Ferrand','Aix-en-Provence','Brest','Limoges','Tours','Amiens','Perpignan','Metz','Boulogne-Billancourt','Besançon','Orléans','Rouen','Mulhouse','Caen','Nancy','Argenteuil','Saint-Paul','Montreuil','Roubaix','Tourcoing','Dunkerque','Nanterre','Créteil','Avignon','Vitry-sur-Seine','Poitiers','Courbevoie','Fort-de-France','Versailles','Colombes','Asnières-sur-Seine','Aulnay-sous-Bois','Saint-Pierre','Rueil-Malmaison','Pau','Aubervilliers','Champigny-sur-Marne','Le Tampon','Antibes','Saint-Maur-des-Fossés','La Rochelle','Cannes','Béziers','Calais','Saint-Nazaire','Colmar','Drancy','Bourges','Mérignac','Ajaccio','Issy-les-Moulineaux','Levallois-Perret','La Seyne-sur-Mer','Quimper','Noisy-le-Grand','Valence','Villeneuve-d\'Ascq','Neuilly-sur-Seine','Antony','Vénissieux','Cergy','Troyes','Clichy','Pessac','Les Abymes','Ivry-sur-Seine','Chambéry','Lorient','Niort','Sarcelles','Montauban','Villejuif','Saint-Quentin','Hyères','Cayenne','Épinay-sur-Seine','Saint-André','Beauvais','Maisons-Alfort','Cholet','Meaux','Chelles','Pantin','Fontenay-sous-Bois','La Roche-sur-Yon','Bondy','Vannes','Saint-Louis','Fréjus','Arles','Clamart','Évry','Le Blanc-Mesnil','Narbonne','Sartrouville','Grasse','Annecy','Laval','Belfort','Vincennes','Charleville-Mézières','Évreux','Sevran','Albi','Montrouge','Bobigny','Martigues','Saint-Ouen','Brive-la-Gaillarde','Suresnes','Carcassonne','Cagnes-sur-Mer','Corbeil-Essonnes','Saint-Brieuc','Blois','Bayonne','Aubagne','Châlons-en-Champagne','Meudon','Châteauroux','Saint-Malo','Chalon-sur-Saône','Sète','Puteaux','Alfortville','Salon-de-Provence','Massy','Mantes-la-Jolie','Bastia','Vaulx-en-Velin','Saint-Herblain','Le Cannet','Valenciennes','Istres','Gennevilliers','Boulogne-sur-Mer','Livry-Gargan','Saint-Priest','Rosny-sous-Bois','Caluire-et-Cuire','Angoulême','Douai','Tarbes','Wattrelos','Castres','Choisy-le-Roi','Talence','Thionville','Arras','Alès','Garges-lès-Gonesse','Gap','Saint-Laurent-du-Maroni','Melun','Bourg-en-Bresse','Noisy-le-Sec','Compiègne','La Courneuve','Le Lamentin','Marcq-en-Barœul','Saint-Germain-en-Laye','Rezé','Bron','Anglet','Gagny','Chartres','Bagneux','Saint-Martin-d\'Hères','Montluçon','Pontault-Combault','Poissy','Draguignan','Joué-lès-Tours','Savigny-sur-Orge','Cherbourg-Octeville','Saint-Joseph','Le Port','Colomiers','Saint-Martin','Villefranche-sur-Saône','Stains','Saint-Benoît','Échirolles','Villepinte','Roanne','Montélimar','Saint-Chamond','Nevers','Conflans-Sainte-Honorine','Auxerre','Sainte-Geneviève-des-Bois','Châtillon','Bagnolet','Vitrolles','Thonon-les-Bains','Neuilly-sur-Marne','Haguenau','Marignane','Saint-Raphaël','Tremblay-en-France','La Ciotat','Six-Fours-les-Plages','Creil','Agen','Romans-sur-Isère','Montigny-le-Bretonneux','Le Perreux-sur-Marne','Franconville','Annemasse','Villeneuve-Saint-Georges','Saint-Leu','Mâcon','Cambrai','Lens','Houilles','Épinal','Châtenay-Malabry','Schiltigheim','Sainte-Marie','Liévin','Châtellerault','Meyzieu','Goussainville','Viry-Châtillon','Dreux','L\'Haÿ-les-Roses','Plaisir','Mont-de-Marsan','Maubeuge','Nogent-sur-Marne','Les Mureaux','Clichy-sous-Bois','La Possession','Dieppe','Chatou','Vandœuvre-lès-Nancy','Malakoff','Palaiseau','Pontoise','Charenton-le-Pont','Rillieux-la-Pape'];
    displayCommuneForm = false;
    comError = false;
    @Output() outputListArea = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the
    resetAll: boolean;
    // app.componenent.ts
    constructor(private apiFirmService: ApiFirmService) {
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.commune = [];
                this.updateParentMunicipality();
                this.displayCommuneForm = false;
            }
        });
    }

    ngOnInit() {
    }

    /** COMMUNE **/
    addCommune(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.commune);
        if (status === false) {
            this.commune.push(code);
            this.comError = false;
            this.updateParentMunicipality();
        } else {
            this.comError = true;
        }
    }

    deleteCommune(idCode): void {
        console.log(idCode);
        this.commune.splice(idCode, 1);
        this.updateParentMunicipality();
    }

    onSelectCommune(): void {
        if (this.displayCommuneForm) {
            this.displayCommuneForm = false;
        } else {
            this.displayCommuneForm = true;
        }
    }
    /* #SEB  this functon update the value in the app.component.ts */
    updateParentMunicipality() {
        this.outputListArea.emit(this.commune);
    }

}

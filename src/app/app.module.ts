import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { ItemInfoComponent } from './event-list-item/item-info/item-info.component';
import { ItemSkillsComponent } from './event-list-item/item-skills/item-skills.component';
import { HeaderComponent } from './header/header.component';
import { ItemSkillsEditComponent } from './event-list-item/item-skills/item-skills-edit/item-skills-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventListItemComponent,
    ItemInfoComponent,
    ItemSkillsComponent,
    HeaderComponent,
    ItemSkillsEditComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

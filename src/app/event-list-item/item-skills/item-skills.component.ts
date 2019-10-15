import { Component, OnInit } from "@angular/core";
import { Skill } from "../../skill";

@Component({
  selector: "app-item-skills",
  templateUrl: "./item-skills.component.html",
  styleUrls: ["./item-skills.component.scss"]
})
export class ItemSkillsComponent implements OnInit {
  title = "Required Skills: ";
  skills: Skill[] = [
    new Skill( "Master",  'HTML'),
    new Skill("Beginner",  'CSS'),
    new Skill("Master",  'React'),
    new Skill("Master",  'Angular'),
    new Skill("Master",  'C#')
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { SKILLS } from "../../../mock-skills";
import { Skill } from "src/app/skill";
@Component({
  selector: "app-item-skills-edit",
  templateUrl: "./item-skills-edit.component.html",
  styleUrls: ["./item-skills-edit.component.scss"]
})
export class ItemSkillsEditComponent implements OnInit {
  skills = SKILLS;

  skill: Skill = {
    name: "",
    level: ""
  };
  constructor() {}

  ngOnInit() {
    console.log(this.skills);
  }

  addSkill() {
    this.skills.push(this.skill);
  }
}

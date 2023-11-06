import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portrfolio',
  templateUrl: './portrfolio.component.html',
  styleUrls: ['./portrfolio.component.css'],
})
export class PortrfolioComponent implements OnInit {
  projects!: Project[];

  constructor(
    private titleService: Title,
    private ProjectsService: ProjectsService
  ) {
    this.titleService.setTitle('Shathanan Amirthalingam - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.ProjectsService.GetProjects();
  }
}

import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  [x: string]: any;
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalservice: BsModalService) {}

  OpenProjectModal() {
    const ModalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project,
      },
    };

    this.bsModalRef = this.modalservice.show(
      ProjectModalComponent,
      ModalOptions
    );
  }
}

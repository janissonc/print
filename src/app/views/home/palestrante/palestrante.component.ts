import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-palestrante',
  templateUrl: './palestrante.component.html',
  styleUrls: ['./palestrante.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class PalestranteComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }


}

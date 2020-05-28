import { Component, OnInit, ViewChild } from '@angular/core';
import { DownloadService } from './download-service/download.service';

@Component({
  selector: 'app-sds-download',
  templateUrl: './sds-download.component.html',
  styleUrls: ['./sds-download.component.scss'],
  providers: [DownloadService]
})
export class SdsDownloadComponent implements OnInit {

  @ViewChild('resultList', { static: true }) resultList;

  constructor(public service: DownloadService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompteDetail } from '../shared/comptes.model';
import { CompteDetailService } from '../shared/comptes.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {

  constructor(
    public service: CompteDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.refreshList();  
  }

  populateForm(selectedRecord: CompteDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteCompteDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Compte Register');
          },
          err => { console.log(err) }
        )
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.CompteId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCompteDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Compte Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCompteDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Compte Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new CompteDetail();
  }

}

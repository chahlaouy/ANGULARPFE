import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DepRecBan } from '../shared/bancaire/dep-rec-banc.model';
import { RecDepBancaireService } from '../shared/bancaire/rec-dep-bancaire.service';
import { CompteDetailService } from '../shared/comptes.service';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-dep-bancaire',
  templateUrl: './dep-bancaire.component.html',
  styleUrls: ['./dep-bancaire.component.css']
})
export class DepBancaireComponent implements OnInit {

  constructor(
    private depBancServ: RecDepBancaireService,
    private compteService: CompteDetailService,
    private payeurService: PaymentDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.depBancServ.refreshListDepBan();
    this.payeurService.refreshList();
    this.compteService.refreshList();
  }
  populateForm(selectedRecord: DepRecBan) {
    this.depBancServ.depBanc = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.depBancServ.deleteDepBan(id)
        .subscribe(
          res => {
            this.depBancServ.refreshListDepBan();
            this.toastr.error("Deleted successfully", 'Payment Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }


  // form methods


  onSubmit(form: NgForm) {
    if (this.depBancServ.depBanc.DepBanId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.depBancServ.postDepBan().subscribe(
      res => {
        this.resetForm(form);
        this.depBancServ.refreshListDepBan();
        this.toastr.success('Submitted successfully', 'Dep Bancaire Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.depBancServ.putDepBan().subscribe(
      res => {
        this.resetForm(form);
        this.depBancServ.refreshListDepBan();
        this.toastr.info('Updated successfully', 'Dep Bancaire Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.depBancServ.depBanc = new DepRecBan();
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DepRecCaisse } from '../shared/caisse/dep-rec-caisse.model';
import { RecDepCaisseService } from '../shared/caisse/rec-dep-caisse.service';
import { CompteDetailService } from '../shared/comptes.service';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-dep-caisse',
  templateUrl: './dep-caisse.component.html',
  styleUrls: ['./dep-caisse.component.css']
})
export class DepCaisseComponent implements OnInit {

  constructor(
    private depCaisseServ: RecDepCaisseService, 
    private toastr: ToastrService,
    private compteService: CompteDetailService,
    private payeurService: PaymentDetailService,
  ) { }

  ngOnInit(): void {
    this.depCaisseServ.refreshListDepCaisse();
    this.compteService.refreshList();
    this.payeurService.refreshList();
  }
  populateForm(selectedRecord: DepRecCaisse) {
    this.depCaisseServ.depCaisse = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.depCaisseServ.deleteDepCaisse(id)
        .subscribe(
          res => {
            this.depCaisseServ.refreshListDepCaisse();
            this.toastr.error("Deleted successfully", 'Dep Caisse Register');
          },
          err => { console.log(err) }
        )
    }
  }


  // form methods


  onSubmit(form: NgForm) {
    if (this.depCaisseServ.depCaisse.DepBanId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.depCaisseServ.postDepCaisse().subscribe(
      res => {
        this.resetForm(form);
        this.depCaisseServ.refreshListDepCaisse();
        this.toastr.success('Submitted successfully', 'Dep Caisse Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.depCaisseServ.putDepCaisse().subscribe(
      res => {
        this.resetForm(form);
        this.depCaisseServ.refreshListDepCaisse();
        this.toastr.info('Updated successfully', 'Dep Caisse Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.depCaisseServ.depCaisse = new DepRecCaisse();
  }

}

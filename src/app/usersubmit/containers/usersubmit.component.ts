import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSubmitService } from '../usersubmit.service';

@Component({
  selector: 'app-usersubmit',
  templateUrl: './usersubmit.component.html',
  styleUrls: ['./usersubmit.component.css']
})

export class UsersubmitComponent {
  form: FormGroup;
  loading: boolean = false;
  message: string = 'No file selected';

  @Output() beforeClick = new EventEmitter<boolean>();
  @Output() afterClick = new EventEmitter<any>();

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private userSubmitService: UserSubmitService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: [null, Validators.required]
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('avatar').setValue(file);
      this.message = file['name'];
    }
  }

  onSubmit() {
    this.beforeClick.emit(true);
    let suspectLookup;
    console.log(this.form.get('avatar').value)
    this.userSubmitService.checkSuspect(this.form.get('avatar').value)
      .subscribe(
        (data) => {
          suspectLookup = data;
          console.log('Hey this is the suspect lookup: ', data);
          this.afterClick.emit(suspectLookup);
          let hunterDetail = {
            name: this.form.get('name').value,
            images: suspectLookup['location'],
            hunted: suspectLookup['closest_match'],
            totalHunts: 1
          };
            this.userSubmitService.saveHunter(hunterDetail)
              .subscribe(
                (data) => { console.log('Saved Successfully') },
                (error) => { console.log('There is an error: ', error) }
              )
            }, (error) => {
              console.log('Error!')
            }
          );
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.form.get('name').setValue('');
    this.message = '';
    this.beforeClick.emit(false);
  }
}

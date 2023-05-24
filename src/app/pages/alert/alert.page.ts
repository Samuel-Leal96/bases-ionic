import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage{

  constructor(private alertCtrl: AlertController) { }

  //Alert normal
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text:'OK',
          handler: ()=>{
            console.log('Click en ok!');
          }
        },
        {
          text:'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: ()=>{
            console.log('Click en cancelar!');
          }
        }
      ],
    });

    await alert.present();
  }

  //Multiple buttons

  handlerMessage = '';
  roleMessage = '';

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.handlerMessage = 'Alert confirmed';
      },
    },
  ];

  setResult(ev: any) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }

  //Input alert

  public alertInputButtons = [
    {
      text: 'OK',
      handler:(data: any)=>{
        console.log(data);
      }
    }
  ];
  public alertInputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
    },
    {
      id: 'nick-name',
      name: 'nickname',
      type: 'text',
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      id: 'date',
      name: 'date',
      type: 'date',
      min: '01-01-1990',
      max: '01-04-2023'
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      id: 'more-info',
      name: 'moreinfo',
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      attributes: {
        maxLenght: 8,
        inputmode: 'string'
      }
    }

  ];

  async presentInputAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Input Alert',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
        },
        {
          id: 'nick-name',
          name: 'nickname',
          type: 'text',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          id: 'date',
          name: 'date',
          type: 'date',
          min: '01-01-1990',
          max: '01-04-2023'
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          id: 'more-info',
          name: 'moreinfo',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
        {
          id: 'password',
          name: 'password',
          type: 'password',
          placeholder: 'Enter your password',
          attributes: {
            maxLenght: 8,
            inputmode: 'string'
          }
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler:(data: any)=>{
            console.log(data);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            // Manejar los datos ingresados en el input
            console.log('Input value:', data.input1);
          }
        }
      ],
      backdropDismiss: false // Evita que la alerta se cierre al hacer clic en el fondo
    });

    await alert.present();
  }

}

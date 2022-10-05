import { LightningElement } from "lwc";

export default class App extends LightningElement {
  columns = [{
                label: 'Name',
                fieldName: 'Name'
            },
            {
                label: 'Email',
                fieldName: 'Email'
            },
            {
                label: 'Phone',
                fieldName: 'Phone'
            },
            {
                label: 'Title',
                fieldName: 'Title'
            },
        ];

   totalRecords = [
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            {Name : 'Mani',Email:'manikanta@gmail.com',Phone:56565656565,Title:'Mr.'},
            
          ]
    recordsToDisplay = [];
    pageSizeOptions = [15, 20, 45, 100];
    handleRecords(event){
      this.recordsToDisplay = event.detail;
    }

    showTotalCount = true;
    showPageSelection = true;
}

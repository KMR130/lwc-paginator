import { LightningElement, api ,track} from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "";

  @track listofDates = [];
  @track rowData = [];
  @track defaultdate = '2022-10-12';

  get ranNum(){
    return Math.random().toFixed(2)*100
  }

  staticrow = {
      id: 0,
      projectvalue : '',
      task : '',
      day1:'',
      day2:'',
      day3:'',
      day4:'',
      day5:'',
      day6:'',
      day7:'',
    }

  connectedCallback(){
    this.staticrow.id = this.ranNum; 
    this.rowData.push(this.staticrow);
  }



  handleWeekDate(event){
    this.listofDates = [];
    console.log(event.target.value);
    let wDate = new Date(event.target.value);
    let dDay = wDate.getDay() > 0 ? wDate.getDay() : 7;
    let first = wDate.getDate() - dDay + 1;
    let firstDayWeek = new Date(wDate.setDate(first));
    this.listofDates.push(firstDayWeek.toLocaleDateString());
    for(let i=0;i<6;i++){  
      this.listofDates.push(new Date(firstDayWeek.setDate(firstDayWeek.getDate()+1)).toLocaleDateString());
    }
    console.log(this.listofDates);
  }

  handledeleterow(event){
    console.log(event.currentTarget.dataset.index);
    this.rowData.splice(event.currentTarget.dataset.index,1);
  }

  handleaddrow(){
     this.staticrow.id = this.ranNum; 
    this.rowData.push(this.staticrow)
  }
}

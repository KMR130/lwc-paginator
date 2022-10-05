import {LightningElement,api} from 'lwc';

export default class Paginator extends LightningElement {
    
    @api result 
    @api pageSizeOptions = [5, 10, 25, 50, 75, 100];
    @api showTotalCount = false;
    @api showPageSelection = false;
    records = [];
    totalRecords = 0; 
    pageSize;
    totalPages; 
    pageNumber = 1;   
    recordsToDisplay = []; 
    
    get bDisableFirst() {
        return this.pageNumber == 1;
    }
    get bDisableLast() {
        return this.pageNumber == this.totalPages;
    }

    connectedCallback() {      
                if (this.result != null) {
                    this.records = this.result;
                    this.totalRecords = this.result.length; 
                    this.pageSize = this.pageSizeOptions[0]; 
                    this.paginationHelper(); 
               }
    }
    handleRecordsPerPage(event) {
        this.pageSize = event.target.value;
        this.paginationHelper();
    }
    previousPage() {
        this.pageNumber = this.pageNumber - 1;
        this.paginationHelper();
    }
    nextPage() {
        this.pageNumber = this.pageNumber + 1;
        this.paginationHelper();
    }
    firstPage() {
        this.pageNumber = 1;
        this.paginationHelper();
    }
    lastPage() {
        this.pageNumber = this.totalPages;
        this.paginationHelper();
    }
  

    paginationHelper() {
        this.recordsToDisplay = [];
        // calculate total pages
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
        // set page number 
        if (this.pageNumber <= 1) {
            this.pageNumber = 1;
        } else if (this.pageNumber >= this.totalPages) {
            this.pageNumber = this.totalPages;
        }
        // set records to display on current page 
        for (let i = (this.pageNumber - 1) * this.pageSize; i < this.pageNumber * this.pageSize; i++) {
            if (i === this.totalRecords) {
                break;
            }
            this.recordsToDisplay.push(this.records[i]);
        }

        const selectedEvent = new CustomEvent('update', { detail: this.recordsToDisplay });
        this.dispatchEvent(selectedEvent);
    }
}
import { Component, HostListener, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  isMobile = false; 
  orders: any[] = [];
  // displayedColumns: string[] = [
  //   'orderno',
  //   'orderstatus',
  //   'voucherno',
  //   'paidstatus',
  //   'customername',
  //   'customertel',
  //   'customeraddress',
  //   'customeremail',
  //   'customerlocation',
  //   'customeremirate',
  //   'clientname',
  //   'clienttel',
  //   'clientaddress',
  //   'clientlocation',
  //   'clientemirate',
  //   'driverassign',
  //   'createddate',
  //   'modifydate',
  // ];

  displayedColumns: string[] = [
    'rownumber',
    'voucherno',
    'createddate',
    'orderstatus',
    'paidstatus',
    'customername',
    'customertel',
    'customeraddress',
    'customerlocation',
    'customeremirate',
    'driverassign',
  ];
  customermob: string = '';
  voucherno: string = '';
  startDate: string = '';
  endDate: string = '';
  useDateRange: boolean = false;
  searching: boolean = false; // Initialize searching as false

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed
  }

  constructor(private orderService: OrderService,  private datePipe: DatePipe, private router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed  
    this.getOrders();
  }

  getOrders() {
    
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
    this.orderService.getOrders(clientId,this.customermob,this.voucherno,this.startDate,this.endDate).subscribe((data: any) => {
      this.orders = data.map((order: any) => {
        const statusMapping: { [key: string]: string } = {
          'D': 'Delivered',
          'T': 'Transit',
          'R': 'Return',
          'S': 'Scheduled',
          'A': 'Allocated',
          'J': 'Junk',
          'C': 'Cancel'
        };
        const paidStatusMapping: { [key: string]: string } = {
          'I': 'In Process',
          'N': 'Not Paid',
          'P': 'Paid'
        };
      
        // Get the status text based on the code (default to the original code if not found)
        const statusText = statusMapping[order.orderstatus] || order.orderstatus;
        const paidstatusText = paidStatusMapping[order.paidstatus] || order.paidstatus;
        return {
          ...order,
          createddate: this.datePipe.transform(order.createddate, 'MM/dd/yyyy'),
          modifydate: this.datePipe.transform(order.modifydate, 'MM/dd/yyyy'),
          orderstatus: statusText, // Replace the voucher code with the status text
          paidstatus: paidstatusText // Replace the voucher code with the status text
        };
      });
    });
  } else {
    this.router.navigate(['/login']);
  }
  }
  
  searchOrders() {
    this.searching = true;
    // Call the getOrders method to fetch data based on input values
    this.getOrders();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the data received from the modal
        console.log(result);
        // You can now use the data for further processing
        // Create Date objects from the ISO 8601 date strings
        this.voucherno = result.voucherno;
        this.customermob = result.cusmobile;
        const formattedStartDate = new Date(result.startDate);
        const formattedEndDate = new Date(result.endDate);
        const formattedStartDate1 = this.formatDate(formattedStartDate);
        const formattedEndDate1 = this.formatDate(formattedEndDate);

        // Format the dates to yyyy-MM-dd
        if (result.includeStartDate == true) {
          this.startDate = formattedStartDate1;
          this.endDate = formattedEndDate1;
        } else {
          this.startDate = "";
          this.endDate = "";
        }
        this.getOrders();
      }
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


}

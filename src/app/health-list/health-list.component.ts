import { Component, OnInit } from '@angular/core';
import { HealthyModel } from '../models/healthy-model';

@Component({
  selector: 'app-health-list',
  standalone: false,
  templateUrl: './health-list.component.html',
  styleUrls: ['./health-list.component.css'],
})
export class HealthListComponent implements OnInit {
  appointments: HealthyModel[] = [];
  newAppointmentDescription: string = '';
  newAppointmentDate: string = ''; // Changed to string for better ngModel date binding

  ngOnInit(): void {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      this.appointments = JSON.parse(storedAppointments);
    }
  }

  addAppointment(): void {
    if (this.newAppointmentDescription.trim() && this.newAppointmentDate) {
      const newAppointment: HealthyModel = {
        id: this.appointments.length + 1,
        title: this.newAppointmentDescription,
        date: new Date(this.newAppointmentDate),
      };

      this.appointments.push(newAppointment);
      this.saveAppointmentsToStorage();

      // Reset input fields
      this.newAppointmentDescription = '';
      this.newAppointmentDate = '';
    }
  }

  deleteAppointment(index: number): void {
    this.appointments.splice(index, 1);
    this.saveAppointmentsToStorage();
  }

  private saveAppointmentsToStorage(): void {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}

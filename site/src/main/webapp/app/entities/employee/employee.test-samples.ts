import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
  address: 'transmitting',
};

export const sampleWithPartialData: IEmployee = {
  id: 28729,
  firstName: 'Cristián',
  email: 'Andrea.Zelaya@gmail.com',
  phoneNumber: 'e-tailers instalación Travesía',
  hireDate: dayjs('2022-11-24T04:13'),
  salary: 15663,
  fileType: 'configurable Torrente Nacional',
  address: 'Berkshire Representante user-centric',
};

export const sampleWithFullData: IEmployee = {
  id: 63120,
  firstName: 'Manuela',
  lastName: 'Cervantes',
  email: 'Juana_Njera29@yahoo.com',
  phoneNumber: 'Card',
  hireDate: dayjs('2022-11-24T02:24'),
  salary: 40187,
  commissionPct: 12223,
  fileType: 'terciaria India',
  file: '../fake-data/blob/hipster.png',
  fileContentType: 'unknown',
  address: 'payment tolerante',
};

export const sampleWithNewData: NewEmployee = {
  address: 'Mascotas',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

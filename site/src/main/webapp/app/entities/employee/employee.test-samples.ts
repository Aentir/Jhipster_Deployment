import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 56543,
  lastName: 'Luevano',
  email: 'Rubn14@hotmail.com',
  hireDate: dayjs('2022-11-24T00:58'),
  commissionPct: 99523,
  fileType: 'estable vía',
  file: '../fake-data/blob/hipster.png',
  fileContentType: 'unknown',
};

export const sampleWithFullData: IEmployee = {
  id: 52980,
  firstName: 'Alicia',
  lastName: 'Jaime',
  email: 'Ignacio85@hotmail.com',
  phoneNumber: 'paradigma',
  hireDate: dayjs('2022-11-23T14:37'),
  salary: 93513,
  commissionPct: 89015,
  fileType: 'invoice Berkshire',
  file: '../fake-data/blob/hipster.png',
  fileContentType: 'unknown',
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

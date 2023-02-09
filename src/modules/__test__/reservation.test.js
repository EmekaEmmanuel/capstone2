import { describe, expect, test } from '@jest/globals';
import ReservationTotalCount from './__mock__/dummyReservationAPI.js';

describe('Total Reservation', () => {
  test(' is total Reservation equal to ', () => {
    const Totalreservation1 = [
      {
        username: 'zewdu',
        date_start: '2020-12-17',
        date_end: '2020-12-18',
      },
      {
        username: 'Emeka',
        date_start: '2021-1-12',
        date_end: '2021-1-17',
      },
    ];
    const reservations = ReservationTotalCount(Totalreservation1);

    expect(reservations).toBe(2);
  });

  test('Test2', () => {
    const Totalreservation2 = [
      {
        username: 'Jugoslav',
        date_start: '2021-1-12',
        date_end: '2021-1-17',
      },
    ];
    const reservations = ReservationTotalCount(Totalreservation2);

    expect(reservations).toBe(1);
  });
});
import { InvolvementAPI, InvolvementID } from './InvolvementAPI.js';

const sendReservation = async (userReservation) => {
  try {
    const res = await fetch(`${InvolvementAPI + InvolvementID}/reservations/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(userReservation),
    });

    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
export default sendReservation;
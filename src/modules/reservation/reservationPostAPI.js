import { involvementAPI, involvementID } from '../../config.js';

const sendReservation = async (userReservation) => {
  try {
    const res = await fetch(`${involvementAPI + involvementID}/reservations/`, {
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
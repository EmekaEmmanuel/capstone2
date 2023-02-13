import { involvementAPI, involvementID } from '../config.js';

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

    if (!res.ok) throw new Error(`Error fetching item data: ${res.status}`);
    const data = await res;
    return data;
  } catch (error) {
    return false;
  }
};
export default sendReservation;
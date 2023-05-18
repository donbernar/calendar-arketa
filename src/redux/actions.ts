import { nanoid } from 'nanoid';
// action types
export const OPEN_AGENDA = "OPEN_AGENDA";
export const CLOSE_AGENDA = "CLOSE_AGENDA";
export const OPEN_ADD_REMINDER = "OPEN_ADD_REMINDER";
export const CLOSE_ADD_REMINDER = "CLOSE_ADD_REMINDER";
export const ADD_REMINDER = 'ADD_REMINDER';
const NANO_ID_LENGTH = 9;

interface DateObj {
  date: Date;
}

// action creators
export function openAgenda(dateObj: DateObj) {
  return { type: OPEN_AGENDA, dateObj };
}

export function closeAgenda() {
  return { type: CLOSE_AGENDA };
}

export function openAddReminder(reminder?: any) {
  return { type: OPEN_ADD_REMINDER, reminder };
}

export function closeAddReminder() {
  return { type: CLOSE_ADD_REMINDER };
}

interface ReminderDTO {
  title: string;
  color: string;
  start: Date;
  end: Date;
}

export function addReminder(reminder: ReminderDTO) {
  return { type: ADD_REMINDER, reminder: { ...reminder, id: nanoid(NANO_ID_LENGTH) } };
}

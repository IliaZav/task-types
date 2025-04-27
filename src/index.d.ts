// src/index.d.ts

export type Gender = 'male' | 'female';

export interface Person {
  name: string;
  age: number;
  gender: Gender;
}

export interface Employee extends Person {
  company: string;
}

/**
 * Возвращает массив объектов с полями:
 * - name: string
 * - age: number
 * - gender: 'male' | 'female'
 */
export function getPersons(): Person[];

/**
 * Преобразует в строку объекты типа Person или Employee.
 * Person:
 * - name: string
 * - age: number
 * - gender: 'male' | 'female'
 *
 * Employee:
 * - name: string
 * - age: number
 * - gender: 'male' | 'female'
 * - company: string
 */
export function personToString(person: Person | Employee): string;

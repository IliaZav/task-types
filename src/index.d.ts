export function getPersons(): Array<{
    name: string;
    age: number;
    gender: 'male' | 'female';
}>;

export function personToString(
    person:
        | { name: string; age: number; gender: 'male' | 'female' }
        | {
              name: string;
              age: number;
              gender: 'male' | 'female';
              company: string;
          },
): string;

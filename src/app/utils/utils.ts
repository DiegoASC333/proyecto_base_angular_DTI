export function getSemesters() {
  return [
    { number: 1, name: 'Semestre 1' },
    { number: 2, name: 'Semestre 2' },
    { number: 3, name: 'Semestre 3' },
    { number: 4, name: 'Semestre 4' },
    { number: 5, name: 'Semestre 5' },
    { number: 6, name: 'Semestre 6' },
    { number: 7, name: 'Semestre 7' },
    { number: 8, name: 'Semestre 8' },
    { number: 9, name: 'Semestre 9' },
    { number: 10, name: 'Semestre 10' },
    { number: 11, name: 'Semestre 11' },
    { number: 12, name: 'Semestre 12' },
    { number: 13, name: 'Semestre 13' },
  ];
}

export function runFormatter(rutValue: string) {
  if (!rutValue) {
    return '';
  }

  const rut = rutValue.toString().replace(/[^\dk-]/gi, '');
  const splitRut = rut.split('-');
  const dv = splitRut[1];
  const numberPart = splitRut[0];
  const formattedRut = numberPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + dv;
  return formattedRut;
}

export function moneyFormatter(moneyValue: number, moneyCountry: string = 'CLP') {
  const moneyFormatted = moneyValue.toLocaleString('es-CL', {
    style: 'currency',
    currency: moneyCountry,
  });

  return moneyFormatted;
}

export function clearAccent(cadena: string, toUpper: boolean = false) {
  cadena = toUpper ? cadena.toUpperCase() : cadena;
  return cadena
    .replace(/[á]/gi, 'A')
    .replace(/[é]/gi, 'E')
    .replace(/[í]/gi, 'I')
    .replace(/[ó]/gi, 'O')
    .replace(/[ú]/gi, 'U');
}

export function capitalizeProperNames(inputString: string): string {
  if (typeof inputString !== 'string' || inputString.trim().length === 0) {
    return '';
  }
  inputString = inputString.replace(/_/g, ' ');

  const exceptions = ['de', 'del', 'la', 'las', 'el', 'los', 'y', 'e', 'en', 'a', 'con'];
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  return inputString
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index !== 0 && exceptions.includes(word)) {
        return word;
      } else {
        if (romanNumerals.includes(word.toUpperCase())) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join(' ');
}

export function getAnhos(): number[] {
  const currentYear = new Date().getFullYear();
  const anhos: number[] = [];
  // Get the last 10 years, or adjust the range as needed
  for (let i = 0; i < 10; i++) {
    anhos.push(currentYear - i);
  }
  return anhos.sort((a, b) => b - a); // Optional: sort from most recent to oldest
}

export function getMeses(): { numero: number; nombre: string }[] {
  return [
    { numero: 1, nombre: 'Enero' },
    { numero: 2, nombre: 'Febrero' },
    { numero: 3, nombre: 'Marzo' },
    { numero: 4, nombre: 'Abril' },
    { numero: 5, nombre: 'Mayo' },
    { numero: 6, nombre: 'Junio' },
    { numero: 7, nombre: 'Julio' },
    { numero: 8, nombre: 'Agosto' },
    { numero: 9, nombre: 'Septiembre' },
    { numero: 10, nombre: 'Octubre' },
    { numero: 11, nombre: 'Noviembre' },
    { numero: 12, nombre: 'Diciembre' },
  ];
}

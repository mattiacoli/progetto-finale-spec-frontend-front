export type Car = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
  brand: string;
  modelYear: number;
  fuelType: 'Benzina' | 'Diesel' | 'Elettrico' | 'Ibrido';
  horsepower: number;
  transmission: 'Manuale' | 'Automatico';
  colorOptions: string[];
  mileage: number;
};
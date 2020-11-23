import { Pet } from './Pet';

export interface Breed {
    id: number; 
    descricao: string;
    Pets: Pet[];
}

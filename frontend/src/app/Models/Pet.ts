import { Breed } from './Breed';

export interface Pet {
    id: number;
    nomeUsuario: string;
    whatsapp: string;
    localizacao: string;
    nomePet: string;
    especie: string;
    raca: Breed;
    breedId: number;
    sexo: string;
    foto: string;
    porteFisico: string;
    biografia: string;
    infoEmail: boolean;
    curtidas: number;
}

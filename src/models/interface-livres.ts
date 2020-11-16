
export interface Livres {
  idLivre: number;
  titre: string;
  auteur: string;
  genre: string;
  nbrDePage: number;
  dateEdition: Date;
  status:number;
  etat:string;
  resume: string,
  nbrDisp: number;
  image:string[]
  availability: Availabitity;
}
export interface Availabitity {
  available: boolean;
  type: string;
  feed ?: number;
}

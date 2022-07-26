//for characters***********************
export interface IGetCharacterResults{
    info: IInfo,
    results: ICharacters[],
}

//pagination için
export interface IInfo{
    count: number,
    pages: number,
    next: string,
    prev: null,
}

//api'dan aldığım json dosyasını quicktype ile typlarını belirledim.
export interface ICharacters {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}


//for episodes*************************
export interface IEpisodes {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}
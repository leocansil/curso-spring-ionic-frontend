export interface ClienteDTO {
    id : string;
    nome : string; 
    email : string;
    imageUrl? : string; // a interrogacao indica que o campo nao precisa ser preenchido
}
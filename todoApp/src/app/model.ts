
export class Model{

    user:string
    item:any[]
   constructor()
    {
        this.user = "huseyin";
        this.item = [
            new Items("ders calisma",false),
            new Items("kitap okuma",false),
            new Items("spor",false),
            new Items("sinema",false)
        ];
    } 

}


export class Items{

    description : string
    action: boolean

    constructor(description : string , action: boolean)
    {
        this.description = description;
        this.action = action;
    }

}

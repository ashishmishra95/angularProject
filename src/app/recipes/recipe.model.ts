import { Ingredients } from "../ingredients/ingredient.model";

export class Recipe{
    public name: string;
    public desc: string;
    public imagepath: string;
    public ingredients:Ingredients[];

    constructor(name:string,desc:string,imagepath:string,ingredients:Ingredients[])
    {
        this.name=name;
        this.desc=desc;
        this.imagepath=imagepath;
        this.ingredients=ingredients;
    }
}
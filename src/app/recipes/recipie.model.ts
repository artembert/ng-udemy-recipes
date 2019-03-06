export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public uid: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.uid = name.replace(/ /g, "");
  }
}

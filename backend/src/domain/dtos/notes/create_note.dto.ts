export class CreateNoteDto {
  private constructor(
    public title: string,
    public conten: string,
    public cateogry: string
  ) {}

  static create(body: { [key: string]: any }): [string?, CreateNoteDto?] {
    const { title, content, cateogry } = body;

    if (!title) return ["missing title"];
    if (!content) return ["missing content"];
    if (!cateogry) return ["missing categori"];

    return [undefined, new CreateNoteDto(title, content, cateogry)];
  }
}

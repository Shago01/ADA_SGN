export class CusstomErrors extends Error {
  constructor(public readonly code: number, public readonly message: string) {
    super(message);
  }

  static badReques(message: string) {
    return new CusstomErrors(400, message);
  }
  static unauthorization(message: string) {
    return new CusstomErrors(401, message);
  }
  static forbidden(message: string) {
    return new CusstomErrors(403, message);
  }
  static notFond(message: string) {
    return new CusstomErrors(404, message);
  }
  static internalServer(message = "internal error server") {
    return new CusstomErrors(500, message);
  }
}

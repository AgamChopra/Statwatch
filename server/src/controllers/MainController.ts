import { Request, Response } from 'express';

export default class MainController {
  public root(req: Request, res: Response) {
    res.status(200).send({
      message: 'GET request successful!!',
    });
  }
}

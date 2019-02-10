import * as bodyParser from 'body-parser';
import * as express from 'express';
import MainRoutes from './routes/root';

class App {
  public app: express.Application;
  public root: MainRoutes = new MainRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.route();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private route(): void {
    this.root.routes(this.app);
  }
}

export default new App().app;

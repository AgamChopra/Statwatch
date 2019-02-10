import MainController from '../controllers/MainController';

export default class MainRoutes {
  private mainController: MainController = new MainController();

  public routes(app: any): void {
    app.route('/')
        .get(this.mainController.root);
  }
}

import Stat from '../models/Stat';

export default interface StatwatchApi {
  getStats(): Stat[];
}

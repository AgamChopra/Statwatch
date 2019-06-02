import StatsResponse from './StatsResponse.json';
import Stat from '../models/Stat';
import StatGrabApi from './Statwatch';

export default class MockApi implements StatGrabApi {
  private Stats: Stat[] = StatsResponse.map(Stat => {
    return {
      ...Stat,
    };
  });

  getStats(): Stat[] {
    return this.Stats;
  }

  getStat(id: number): Stat {
    return this.Stats[id];
  }
}

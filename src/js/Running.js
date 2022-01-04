import { Workout } from './Workout';

export class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.clacPace();
    this._setDescrption();
  }

  clacPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

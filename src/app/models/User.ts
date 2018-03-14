import {Bonus} from './Bonus';

export class User {
  id: any;
  name: string;
  bonus: number = 0;
  bonusHistory: Bonus[] = [];
}

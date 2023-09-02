import { createId } from '@paralleldrive/cuid2';

type Color = 'red' | 'green' | 'blue' | 'purple' | 'yellow' | 'orange';
const COLORS: Color[] = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];

export class Item {

  id = this.getRandomId();
  int = this.getRandomIntNumber();
  float = this.getRandomNumber();
  color = this.getRandomColor();
  child = {
    id: this.getRandomId(),
    color: this.getRandomColor()
  }

  private getRandomNumber() {
    return Math.random();
  }

  private getRandomIntNumber() {
    return Math.floor(Math.random() * 999_999);
  }

  private getRandomId() {
    return createId();
  }

  private getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }
}

export * from './pow/power';
import { add as add2 } from '@nx-example/utils2';

export function add(a: number, b: number) {
  return add2(a, b);
}

export function sub(a: number, b: number) {
  return a - b;
}

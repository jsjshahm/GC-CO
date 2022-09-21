import { makeAutoObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

class AStore {
  name = 'GCNCOMPANY';
  age = 1;
  array = [1, 2, 3, 4];

  constructor() {
    makeAutoObservable(this, {
      name: observable,
      age: observable,
      array: observable,
    });
  }
}

export default AStore;

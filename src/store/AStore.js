import { makeAutoObservable } from 'mobx';

class AStore {
  name = 'GCNCOMPANY';
  age = 1;
  array = [1, 2, 3, 4];

  constructor(rootStore) {
    makeAutoObservable(this);
  }
}

export default AStore;

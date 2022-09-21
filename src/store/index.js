import AStore from './AStore';

class RootStore {
  constructor() {
    this.aStore = new AStore(this);
  }
}

export default RootStore;

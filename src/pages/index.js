import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { RootContext } from '../store/context';

const Home = observer(() => {
  const { aStore } = useContext(RootContext);

  return (
    <div>
      <p>name: {aStore.name}</p>
      <p>age: {aStore.age}</p>
    </div>
  );
});

export default Home;

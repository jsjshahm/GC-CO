import { observer } from 'mobx-react-lite';
import { useStore } from '../store/StoreProvider';

const Home = observer(() => {
  const { aStore } = useStore();

  return (
    <div>
      <p>name: {aStore.name}</p>
      <p>age: {aStore.age}</p>
      <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <ol>bbbbbb</ol>
        <ol>bbbbbb</ol>
        <ol>bbbbbb</ol>
        <ol>bbbbbb</ol>
        <a href="">fdsafasdfadsf</a>
      </ul>
    </div>
  );
});

export default Home;

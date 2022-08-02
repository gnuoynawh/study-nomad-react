import Button from './Button';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"버튼"}/>
    </div>
  );
}

export default App;

import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForm />
      {/* <Content /> */}
      {/* Converting above Content.js to ContentHooks, original work is still there */}
      {/* <ContentHooks /> */}
      {/* Content.js and PostItem.js files to ContentAPI.js, and PostItemAPI.js, original work is still there. */}
      <ContentAPI />
    </div>
  );
}

export default App;
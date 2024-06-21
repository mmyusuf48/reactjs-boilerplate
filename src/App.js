import './App.css';
import './tailwind.css';
import Button from './components/button/index.jsx';
import Input from './components/input/index.jsx';

function App() {
  return (
    <div className='h-screen bg-slate-200 text-white'>
      <div className="container mx-auto py-4 flex w-full">
        <Input placeholder="search" type="number"/>
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white my-2 font-bold py-2 px-4 rounded">
          klik
        </Button>
      </div>
    </div>
  );
}

export default App;

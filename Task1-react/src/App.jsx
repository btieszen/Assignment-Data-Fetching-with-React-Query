import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import AddPost from './components/AddPost';
import { store } from './store';
import { Provider } from 'react-redux';
import ViewPost from './components/ViewPost';
import HomePage from './components/HomePage';
import EditPost from './components/EditPost';
import  DeletePost  from './components/DeletePost';


const queryClient = new QueryClient();

function App(){
  return(
    <QueryClientProvider client = {queryClient}>
    <Provider store = {store}>
        <Router>
          <NavigationBar />
       
        
          <Routes>
          <Route path='/viewPost' element={<ViewPost/>} />
          <Route path='/addPost' element={<AddPost/>} />
          <Route path='/' exact element={<HomePage />}/>
          <Route path='/editPost' element={<EditPost/>} />
          <Route path='/deletePost' element={<DeletePost/>} />
         
          </Routes>
       
      
      </Router>
 
    </Provider>
    </QueryClientProvider>
  )
}

export default App
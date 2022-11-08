import "./App.css";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import RealtimeStudent from "./components/RealtimeStudent";
function App() {
  return (
    <div>
      <StudentList />
      <AddStudent />
    </div>
  );
}

export default App;

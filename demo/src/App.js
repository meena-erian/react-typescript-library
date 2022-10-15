import Comp from "./Comp";
import { ExportedComponent } from "mylib";


export default function App() {
    return (
        <div>
            <h1>React Demo App</h1>
            <Comp title="Test" />
            <ExportedComponent />
        </div>
    );
}
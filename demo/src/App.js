import Comp from "./Comp";
import { ExportedComponent } from "react-typescript-library";


export default function App() {
    return (
        <div>
            <h1>React Demo App</h1>
            <Comp title="Test" />
            <ExportedComponent />
        </div>
    );
}
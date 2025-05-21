import {createRoot} from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./frameworkList";
import './framework.json';
import FrameworkListSearchFilter from "./frameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";


createRoot(document.getElementById("root"))
    .render(
        <div>
            {/*<FrameworkList/>*/}
            <FrameworkListSearchFilter/>
            {/*<ResponsiveDesign/>*/}

        </div>
    )
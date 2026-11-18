
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <PageContent />
      </div>
    </BrowserRouter>
  );
}

export default App;

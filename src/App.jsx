
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex-1">
        <PageContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;

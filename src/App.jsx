import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="mx-auto flex w-full max-w-[414px] flex-col">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
import { HowItWorks } from './components/HowItWorks';
import UI from './components/UI.jsx'
import UIcourse from './components/UIcourse.jsx'
import UInewsletter from './components/UInewsletter.jsx';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
function App() {
    return (
        <>
            <Header />
            <UI/>
            <UIcourse/>
            <HowItWorks />
            <UInewsletter/>
            <Footer />
        </>
    );
}

export default App;

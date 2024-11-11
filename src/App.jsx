import { HowItWorks } from './components/HowItWorks';
import UI from './components/UI.jsx'
import UIcourse from './components/UIcourse.jsx'
import UInewsletter from './components/UInewsletter.jsx';
import Header from './components/Header';
function App() {
    return (
        <>
            <Header />
            <UI/>
            <UIcourse/>
            <HowItWorks />
            <UInewsletter/>
        </>
    );
}

export default App;

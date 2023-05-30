import '../public/styles/App.css'
import NextNProgress from 'nextjs-progressbar';
const App = ({Component, pageProps})=>{
    return(
        <>
        <NextNProgress color="#0da2ff" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <Component {...pageProps} />
        </>
    )
}

export default App
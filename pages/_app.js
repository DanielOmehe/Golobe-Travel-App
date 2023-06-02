import '../public/styles/App.css'
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';

const App = ({Component, pageProps})=>{
    return(
        <>
        <NextNProgress color="#0da2ff" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />
        <Component {...pageProps} />
        </>
    )
}

export default App
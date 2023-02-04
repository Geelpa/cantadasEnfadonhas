import { useEffect, useState } from 'react'
import './styles/global.css'

function App() {
  const [flertQuote, setFlertQuote] = useState([''])
  const [showFlertQuote, setShowFlertQuote] = useState('')

  useEffect(() => {
    setFlertQuote(
      ['E ai, gata! Seu pai é mecânico?',
        'Doeu muito quando você caiu do céu?',
        'Pronto, estou aqui! Quais são os seus outros dois desejos?',
        'Tem alguma coisa errada com o meu celular. Não consigo encontrar o seu número nele...',
        'Você acredita em amor à primeira vista ou devo passar por aqui mais uma vez?',
        'As rosas são vermelhas, violetas são azuis, eu não sei rimar, mas posso namorar você?',
        'Então, além de me deixar sem ar, o que mais você faz?',
        'Nossa, estou sentindo uma dor no peito! Espero que seja amor, porque se for infarto, eu nunca mais te verei!']

    )
  }, [setFlertQuote])

  function genereateRandomFlertQuotes() {
    flertQuote.toString()
    setShowFlertQuote(flertQuote[Math.floor(Math.random() * flertQuote.length)])

  }

  return (
    <div className='App'>
      <div className="h-screen w-screen flex flex-col items-center justify-center  bg-slate-900">
        <main className='flex flex-col w-1/2 h-fit rounded bg-slate-600 p-6 text-xl justify-center items-center' >
          <span className=' text-2xl text-slate-100'>
            Gere sua cantada!
          </span>
          <span className='text-center m-10'>
            {showFlertQuote}
          </span>

          <button className='bg-slate-400 p-2 rounded w-1/4  hover:bg-slate-200' onClick={genereateRandomFlertQuotes}>
            Gerar
          </button>
        </main>
      </div>
    </div>
  )
}

export default App

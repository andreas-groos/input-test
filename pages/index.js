import { useEffect, useState, useRef } from 'react'
import Layout from '../components/Layout'

export default function Home() {
  const [text, setText] = useState()
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    function handleFocus() {
      setIsFocused(true);
      inputRef.current.scrollIntoView(true);
    }
    inputRef.current.addEventListener("focus", () => handleFocus());
    return inputRef.current.removeEventListener("focus", () => handleFocus());
  }, []);

  console.log('isFocused', isFocused)

  return (
    <Layout isFocused={isFocused}>
      <div>
        {!isFocused && (
          <div>
            <p>Some content on top just like in Landslide</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita possimus totam amet, deleniti eveniet atque inventore sit necessitatibus, quas ratione. Obcaecati facilis at aperiam corporis recusandae, placeat quia soluta?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita possimus totam amet, deleniti eveniet atque inventore sit necessitatibus, quas ratione. Obcaecati facilis at aperiam corporis recusandae, placeat quia soluta?</p>
          </div>
        )}
        <input ref={inputRef} onChange={setText} type="text" />
        <div id="bottom-button-wrapper" className={isFocused ? 'non-sticky' : ''}>
          <button>Keep Track</button>
          <button>Skip</button>
        </div>
      </div>
    </Layout>
  )
}

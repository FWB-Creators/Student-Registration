import Image from 'next/image'
import './page.css'
const test = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center backdrop-blur">
      <div className="spin-slow">
        <Image
          src="/static/sieng.png"
          alt="Vercel Logo"
          width={72}
          height={72}
          className="scale-in-out"
        />
      </div>
      <div className="flex flex-row justify-center mt-2 pulse">Loading ...</div>
    </div>
  )
}
export default test

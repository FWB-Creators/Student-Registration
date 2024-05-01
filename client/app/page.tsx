import Image from 'next/image'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center font-rubik ">
        <Image
          className="animate-bounce"
          src="/static/sieng2.png"
          alt="logo"
          width={85}
          height={85}
        />
        <div className="mt-2 text-2xl font-bold">Student Registration</div>
        <Link href="/" className="mt-2">
          Enter site &gt;
        </Link>
      </div>
    </div>
  )
}
export default Home

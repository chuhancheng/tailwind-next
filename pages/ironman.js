import Image from 'next/image'

const Page = () => {
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between h-10 bg-nav-gray w-full">
                <div className="w-36 pl-5">
                    <a href="www.google.com" className="flex items-center">
                        <Image src="/logo-fastival-w.svg" alt="iThome 鐵⼈祭" width={120} height={19}></Image>
                    </a>
                </div>
                <div className="px-5 flex items-center">
                    <ul className="flex">
                        <li>
                            <a href="/a" className="py-0.5 px-5 text-gray-300">鐵人賽</a>
                        </li>
                        <li>
                            <a href="/a" className="py-0.5 px-5 text-gray-300">鐵人館</a>
                        </li>
                        <li>
                            <a href="/a" className="py-0.5 px-5 text-gray-300">關於鐵人祭</a>
                        </li>
                        <li>
                            <a href="/a" className="py-0.5 px-5 text-gray-300">回 iT 邦幫忙</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="relative flex flex-wrap items-center justify-between bg-nav-blue w-full">
                <div className="px-1 w-250">
                    <a href="www.google.com" className="flex items-center">
                        <Image src="/kv_logo.svg" alt="第 13 屆 iThome 鐵人賽" width={250} height={30}></Image>
                    </a>
                </div>
                <ul className="flex items-center h-20">
                    <li className="flex items-center h-full">
                        <a href="/a" className="flex items-center h-full py-2.5 px-5 text-gray-100 font-bold text-shadow hover:bg-ligh-blue">
                            馬上報名
                        </a>
                    </li>
                    <li className="flex items-center h-full">
                        <a href="/a" className="flex items-center h-full py-2.5 px-5 text-gray-100 font-bold text-shadow hover:bg-ligh-blue">
                            選手列表
                        </a>
                    </li>
                    <li className="flex items-center h-full">
                        <a href="/a" className="flex items-center h-full py-2.5 px-5 text-gray-100 font-bold text-shadow hover:bg-ligh-blue">
                            活動辦法
                        </a>
                    </li>
                    <li className="flex items-center h-full">
                        <a href="/a" className="flex items-center h-full py-2.5 px-5 text-gray-100 font-bold text-shadow hover:bg-ligh-blue">
                            贊助方案
                        </a>
                    </li>
                    <li className="flex items-center h-full">
                        <a href="/a" className="flex items-center h-full py-2.5 px-5 text-gray-100 font-bold text-shadow hover:bg-ligh-blue">
                            歷年回顧
                        </a>
                    </li>
                    <li className="flex items-center h-full">
                        <a href="/a" className="flex items-center h-full py-2.5 px-5 text-nav-blue bg-gray-100 font-bold hover:bg-ligh-blue">
                            登入
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Page;
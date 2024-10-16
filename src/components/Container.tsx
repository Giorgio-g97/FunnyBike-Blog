export default function Container({children}: {children: React.ReactNode}){
    return <div className="max-w-[1280px] mx-auto min-h-screen flex flex-col bg-white border shadow-lg">{children}</div>
}
export default function Button({ children, className } : { children: React.ReactNode, className: string }) {
    return (
        <button className={`flex justify-center items-center p-3 cursor-pointer rounded-xl w-full ${className}`}>
            {children}
        </button>
    )
}


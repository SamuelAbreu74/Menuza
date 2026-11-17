import { X } from "lucide-react"
import Button from "./Button"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
}

export default function CreateAndEditCategoryModal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null
    return (
        <div onClick={(e) => { e.stopPropagation(); onClose(); }} className="cursor-auto fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div onClick={(e) => { e.stopPropagation(); }} className="rounded-4xl relative w-full max-w-md  bg-white shadow-xl dark:bg-gray-800 sm:m-4">
                {/* Cabeçalho do Modal */}
                <div className="flex items-center justify-end">
                    <Button onClick={onClose} className="absolute top-5 right-3 rounded-xl text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200">
                        <X className="size-5" strokeWidth={2.5} />
                    </Button>
                </div>

                {/* Conteúdo do Modal */}
                <div className="flex flex-col gap-1 mt-2 p-6 text-gray-700 dark:text-gray-300">
                    {title && <h3 className="text-2xl font-semibold font-montserrat uppercase text-black dark:text-white mb-3">{title}</h3>}
                    {children}
                </div>
            </div>
        </div>
    )
}
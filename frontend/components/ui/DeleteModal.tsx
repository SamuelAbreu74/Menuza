import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function DeleteModal({ isOpen, onClose, title, children }: ModalProps) {

    if (!isOpen) return null;

    return (
        <div onClick={(e) => { e.stopPropagation(); onClose(); }} className="cursor-auto fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div onClick={(e) => { e.stopPropagation(); }} className="rounded-4xl relative w-full max-w-md  bg-white shadow-xl dark:bg-gray-800 sm:m-4">
                {/* Cabeçalho do Modal */}
                <div className="flex items-center justify-end">
                    <button onClick={onClose} className="absolute top-5 right-3 rounded-xl p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200">
                        <X size={24} className="cursor-pointer" />
                    </button>
                </div>

                {/* Conteúdo do Modal */}
                <div className="flex flex-col gap-1 mt-2 p-6 text-gray-700 dark:text-gray-300">
                    {title && <p className="text-lg font-bold font-montserrat uppercase  dark:text-white">{title}</p>}
                    {children}
                </div>
            </div>
        </div>
    )
}
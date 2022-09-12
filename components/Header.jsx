import Image from "next/image"

import reactIcon from "./../public/React-icon.svg"

export const Header = () => {
    return (
        <div className="flex flex-row bg-[#7e3fe7] w-full md:px-12 px-4">
            <div className="w-1/2 py-4">
                <div className="inline-block align-middle">
                    <Image src={reactIcon} width="28" height="28" />
                </div>
                <div className="inline-block h-full align-middle ml-4 text-[18px]">
                    Healt Overview
                </div>
            </div>
            <div className="w-1/2 text-right py-4">
                <span class="material-icons">menu</span>
            </div>

        </div>
    )
}

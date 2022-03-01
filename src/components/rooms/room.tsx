import { FC } from "react";


type TRoomProps = {
    roomName: string,
    adults: number,
    children: number,
    longDescription: string,
}

export const Room: FC<TRoomProps> = ({ roomName, adults, children, longDescription }: TRoomProps) => {
    return (
        <>
            <div className="flex border-x-2 p-4 border-b-2">

                <div className="w-1/5" >
                    <h1 className="text-2xl">{roomName}</h1>
                    <p>Adults:{adults}</p>
                    <p>Children{children}</p>
                </div>
                <div className="w-4/5">
                    <p>{longDescription}</p>
                </div>
            </div>

        </>
    )
}
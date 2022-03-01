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
            <div className="flex border-solid border-2 border-indigo-600">

                <div>
                    <h1>{roomName}</h1>
                    <p>{adults}</p>
                    <p>{children}</p>
                </div>
                <div>
                    <p>{longDescription}</p>
                </div>
            </div>

        </>
    )
}
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Room } from "../rooms/room";
import { Star } from "../stars/star";
import { Carouselle } from "./carousel";







export const Hotel: FC<any> = ({ hotel }: { hotel: any }) => {

    const filters = useSelector((state: RootState) => state.filters)

    const [apiCall, setApiCall] = useState({
        loading: true,
        data: [],
    })
    //? this component wont rerender when filters.start changes since it does not access this property -- thats why we solve it with useEffect

    // ! At this point would start thinking about making my own hook
    useEffect(() => {
        const URL = `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`
        axios.get(URL).then((response) => {
            setApiCall({ loading: false, data: response.data.rooms })
        })

    }, [filters.stars])

    return (

        <div className="w-5/6 m-auto mt-12">

            <div className=" flex w-full p-3 border-x-2 border-y-2" >
                <Carouselle images={hotel.images} />
                <div className="flex-auto px-8">
                    <h1 className="text-2xl">{hotel.name}</h1>
                    <p>{hotel.address1}</p>
                    <p>{hotel.address2}</p>
                </div>
                <div className="flex flex-3 items-start  ">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                       
                                <Star key={index} props={index <= hotel.starRating ? false : true} />
                        );
                    })}
                </div>

            </div>
            {
                !apiCall.loading && apiCall.data.filter((element: any) => element.occupancy.maxAdults >= filters.adults && element.occupancy.maxChildren >= filters.children).map((element: any, index: number) => {
                    return (
                        <Room roomName={element.name} adults={element.occupancy.maxAdults} children={element.occupancy.maxChildren} longDescription={element.longDescription} key={index} />
                    )
                })

            }
        </div>


    )
}
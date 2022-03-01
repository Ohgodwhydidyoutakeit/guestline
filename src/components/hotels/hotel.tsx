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
    // ! At this point would start thinking about making my own hook
    useEffect(() => {
        const URL = `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`

        axios.get(URL).then((response) => {
            // console.log(response.data)
            setApiCall({ loading: false, data: response.data.rooms })
        })
    }, [])

    return (
        <>

            <div className=" flex">
                <Carouselle images={hotel.images} />
                <div>
                    <h1>{hotel.name}</h1>
                    <p>{hotel.address1}</p>
                    <p>{hotel.address2}</p>
                </div>
                <div>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                            >
                                <Star props={index <= hotel.starRating ? false : true} />
                            </button>
                        );
                    })}
                </div>

            </div>
            {
                !apiCall.loading && apiCall.data.filter((element: any) => element.occupancy.maxAdults >= filters.adults && element.occupancy.maxChildren >= filters.children).map((element: any, index: number) => {
                    console.log(element)
                    return (
                        <Room roomName={element.name} adults={element.occupancy.maxAdults} children={element.occupancy.maxChildren} longDescription={element.longDescription} key={index} />
                    )
                })

            }
        </>
    )
}
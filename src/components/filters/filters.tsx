import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeStars, decrementAdults, decrementChildren, incrementAdults, incrementChildren } from "../../redux/filtersSlice";
import { RootState } from "../../redux/store"
import { Star } from "../stars/star";



export const Filters: React.FC = () => {

    const filters = useSelector((state: RootState) => state.filters)
    const dispatch = useDispatch();
    return (
        <>
            <div>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            onClick={() => {
                                dispatch(changeStars(index))
                            }}
                        >
                            <Star props={index <= filters.stars ? false : true} />
                        </button>
                    );
                })}
            </div>
            <div className="flex">
                <p>Adults</p>
                <button onClick={() => { dispatch(incrementAdults()) }}>+</button>
                <p>{filters.adults}</p>
                <button onClick={() => { dispatch(decrementAdults()) }}>-</button>
            </div>
            <div className="flex">
                <p>Children</p>
                <button onClick={() => { dispatch(incrementChildren()) }}>+</button>
                <p>{filters.children}</p>
                <button onClick={() => { dispatch(decrementChildren()) }}>-</button>
            </div>
        </>
    )
}
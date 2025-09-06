'use client'

import { GoogleMap } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '15px',
};

const MapComponent = () => {
    return (
        <div className="w-full flex justify-center lg:justify-end my-4">
            <GoogleMap mapContainerStyle={defaultMapContainerStyle} />
        </div>
    )
};

export { MapComponent };
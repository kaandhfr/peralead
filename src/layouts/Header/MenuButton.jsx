import React from 'react'
import { IconMenu } from "~/components/icons/icons";

export default function MenuButton() {
    return (
        <button type="button" className="w-10 h-10 flex items-center justify-center" >
            <IconMenu />
        </button>
    )
}

import React from 'react'
import { IconUser } from "~/components/icons/icons";

export default function UserButton() {
    return (
        <button type="button" className="w-10 h-10 flex items-center justify-center" >
            <IconUser />
        </button>
    )
}

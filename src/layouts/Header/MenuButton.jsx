import React from 'react'
import { useDispatch } from 'react-redux';
import { IconMenu } from "~/components/icons/icons";
import { toggleMenu } from '~/redux/headerSlice';

export default function MenuButton() {
    const dispatch = useDispatch();
    return (
        <button type="button" onClick={() => dispatch(toggleMenu())} className="w-10 h-10 flex items-center justify-center" >
            <IconMenu />
        </button>
    )
}

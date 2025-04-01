import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IconUser } from "~/components/icons/icons";
import { toggleUserDropdown } from '~/redux/headerSlice';
import UserDropdown from './UserDropdown';

export default function UserButton({ className='', showIcon=false, children }) {
    const dispatch = useDispatch();
    const { isUserDropdown } = useSelector((store) => store.header);

    return (
        <>
            <div className="relative">
                <button type="button" onClick={() => dispatch(toggleUserDropdown())} className={className} >
                    {children}
                    {showIcon && <IconUser />}
                </button>
                {isUserDropdown && <UserDropdown />}
            </div>
        </>
    )
}

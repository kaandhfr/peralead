import React, { useState } from 'react'
import { IconLogIn } from '~/components/icons/icons';

export default function UserDropdown() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log('Kullanıcı adı:', username);
        console.log('Şifre:', password);
        console.log('Beni Hatırla:', rememberMe);
    };

    return (
        <>
            <div className="absolute right-0 top-100 mt-2 w-80 bg-secondary bg-opacity-90 rounded-lg shadow-lg p-4 z-10">
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Kullanıcı Adı veya E-posta"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="px-3 text-sm font-semibold py-2 border-0 bg-third rounded-lg focus:outline-none mb-3"
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-3 text-sm font-semibold py-2 border-0 bg-third rounded-lg focus:outline-none"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2 bg-secondary"
                            />
                            <span className='text-sm'>Beni Hatırla</span>
                        </div>
                        <button
                            onClick={handleLogin}
                            className="text-sm flex items-center justify-center gap-2 rounded-lg hover:bg-primary hover:bg-opacity-25 transition duration-300 ease-in-out py-1 px-2"
                        >
                            <span>Giriş</span>
                            <IconLogIn width={16} height={16} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

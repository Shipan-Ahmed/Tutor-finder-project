
'use client';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';

import NavLink from './NavLink';
import { Button } from '@/components/ui/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { useState } from 'react';
import { signOut } from 'better-auth/api';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {
        data: session,
        isPending
    } = authClient.useSession() 

    if (isPending) {
        return <div className='text-center py-4'><div><span className="loading loading-spinner text-error"></span></div></div>;
    }

    const user = session?.user;
    
    const signOut = async () => {
        await authClient.signOut();
    }
   
    const links = <>
        <li><NavLink href='/' >Home</NavLink></li>
        <li><NavLink href='/tutors' >Tutors</NavLink></li>
        <li><NavLink href='/add-tutor' >Add Tutor</NavLink></li>
        <li><NavLink href='/my-tutors' >My Tutors</NavLink></li>
        <li><NavLink href='/my-booked-sessions' >My Booked Sessions</NavLink></li>
    </>
    return (
        <header className='bg-base-100 shadow-md mb-4'>
            <nav className='max-w-7xl mx-auto  rounded p-4 mb-4 flex items-center justify-between'>
                <div className='flex '>
                    <div className='lg:hidden mr-2'>
                        <Button variant='outline' className='ml-4 bg-blue-600 hover:bg-indigo-600 text-white lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {
                                isMenuOpen ? <ImCross /> : <GiHamburgerMenu size={20} />
                            }
                        </Button>
                        {
                            isMenuOpen && (
                                <ul className='absolute top-16 left-0  bg-base-100 shadow-md rounded flex flex-col items-start space-y-2  justify-start pl-8 pr-4 '>
                                    {links}
                                </ul>
                            )
                        }
                    </div>
                    <h2 className='text-3xl font-bold text-black'>Tutor<span className='text-blue-500'>Finder</span></h2>
                </div>
                <div className="hidden lg:flex ">
                    <ul className='hidden lg:flex space-x-4'>
                        {links}
                    </ul>
                   
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex  items-center gap-2'>
                        <span> Dark mode</span>
                        {/* <Switch /> */}
                        <ThemeToggle/>
                    </div>
                    <div>
                        {user ? (
                            <div className='flex items-center gap-3'>
                                <Avatar size="sm">
                                    <Avatar.Image alt={user.name} src={user.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user.name?.[0]}</Avatar.Fallback>
                                </Avatar>
                                <Button onClick={() => signOut()} className='btn btn outline bg-blue-500 hover:bg-blue-600 text-white border-none'>
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <div className='flex gap-2'>
                                    <Link href="/login"><Button className='btn  bg-blue-500 hover:bg-blue-600  text-white border-none'>  Sign In</Button></Link>
                                    <Link href="/signup" ><Button className='btn  bg-blue-500 hover:bg-blue-600 text-white  border-none'>Sign Up</Button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
     </header>
    );
};

export default Navbar;
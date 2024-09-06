
import { Outlet } from "react-router-dom";
import logo from "/bytelink.png";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"



const AppLayout = () => {
    const user = true;
    return (
        <div>
            <main className="min-h-screen m-4 min-w-screen overflow-hidden">
                <nav className="w-full p-7 mt-4 flex flex-row items-center place-content-between">
                    <img src={logo} className="w-20" alt="logo" />

                    {!user ? (<Button>
                        <Mail className="mr-2 h-4 w-4" /> Login
                    </Button>) : (
                        <div className="border-none">

                            <DropdownMenu>
                                <DropdownMenuTrigger className="border-none">   <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" className="border-0 focus-within:none" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Abin Thomas</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Links</DropdownMenuItem>
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>


                    )
                    }

                </nav>
                <Outlet />

            </main>
            {/* FOOTER */}
            <div className="p-10 text-center bg-slate-700 text-slate-100 mt-10">
                &copy; Abin Thomas
            </div>
        </div>
    )
}

export default AppLayout;

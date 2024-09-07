import { Outlet } from "react-router-dom";
import logo from "/bytelink.png";
import { Button } from "@/components/ui/button";
import { LinkIcon, LogOut, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const AppLayout = () => {
    const user = true;
    return (
        <div>
            <main className="min-h-12 m-2 min-w-screen overflow-hidden">
                <nav className="w-full p-4 flex flex-row items-center place-content-between">
                    <img src={logo} className="w-10 md:w-14" alt="logo" />

                    {!user ? (
                        <Button>
                            <Mail className="mr-2 h-4 w-4" /> Login
                        </Button>
                    ) : (
                        <div className="border-none pr-1">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" className="w-10 md:w-14" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="pr-9 md:pr-0">
                                    <DropdownMenuLabel>Abin Thomas</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LinkIcon className="mr-2 w-4 h-4"/>
                                        Links</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-400">
                                        <span><LogOut  className="mr-2 h-4 w-4"/></span>
                                        Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}
                </nav>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;

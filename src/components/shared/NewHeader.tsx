import { Switch } from "@nextui-org/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useDarkmode } from "@/providers/darkModeProvider";
import { Button } from "@/components/ui/button";

export const NewHeader: React.FC = () => {
    const darkModeContext = useDarkmode();
    if (!darkModeContext) {
        return null;
    }

    const { darkMode, toggleDarkMode } = darkModeContext;

    
    return (
        <header className="flex w-full h-20 items-center justify-between px-10 bg-zinc-100 dark:bg-zinc-900">
            <h1 onClick={() => {window.location.href = "/1"}} className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent cursor-pointer h-full flex justify-center items-center text-3xl font-bold text-center dark:text-zinc-200">
                Vote Now
            </h1>
            <div className="flex justify-center items-center gap-5">
                <Button
                    onClick={() => {
                        window.location.href = "/post"
                    }}
                >Crie sua enquete</Button>
            <Switch
                isSelected={darkMode}
                onValueChange={toggleDarkMode}
                defaultSelected
                size="lg"
                color="default"
                startContent={<FiMoon />}
                endContent={<MdOutlineWbSunny />}
            />
            </div>
        </header>
    );
};

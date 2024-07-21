import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Profile = ({ prompt, birthday, setBirthday, imageUrl }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img src={imageUrl} className="w-36 h-36" />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !birthday && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {birthday ? format(birthday, "PPP") : <span>{prompt}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className=" w-auto p-0">
          <DatePicker
            mode="single"
            captionLayout="dropdown-buttons"
            selected={birthday}
            onSelect={setBirthday}
            fromYear={1950}
            toDate={new Date()}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Profile;

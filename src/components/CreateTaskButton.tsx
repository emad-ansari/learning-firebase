import { PlusIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Pressable } from "react-native";

interface Props {
  onPress: () => void;
}

export const CreateTaskButton = ({ onPress }: Props) => {
  return (
    <Pressable
      className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-blue-500 items-center justify-center shadow-lg"
      onPress={onPress}
    >
      <HugeiconsIcon
        icon={PlusIcon}
        size={22}
        color="#FFFFFF"
        strokeWidth={2}
      />
    </Pressable>
  );
};

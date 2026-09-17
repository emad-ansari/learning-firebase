import { Task } from "@/utils/types";
import {
  Delete02Icon,
  PencilEdit02Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Pressable, Text, View } from "react-native";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskCard = ({
  task,
  onToggle,
  onUpdate,
  onDelete,
}: TaskCardProps) => {
  const { id, title, description, completed } = task;

  return (
    <View className="mx-4 mb-3 rounded-2xl border border-gray-200 bg-white p-4">
      {/* Task information */}
      <View className="flex-row items-start">
        {/* Checkbox */}
        <Pressable
          onPress={() => onToggle(id)}
          className={`mr-3 mt-1 h-6 w-6 items-center justify-center rounded-md border-2 ${
            completed
              ? "border-blue-600 bg-blue-600"
              : "border-gray-400 bg-white"
          }`}
        >
          {completed && (
            <HugeiconsIcon
              icon={Tick02Icon}
              size={16}
              color="white"
              strokeWidth={2}
            />
          )}
        </Pressable>

        {/* Title + description */}
        <View className="flex-1">
          <Text
            className={`text-base font-semibold ${
              completed ? "text-gray-400 line-through" : "text-gray-900"
            }`}
          >
            {title}
          </Text>

          <Text className="mt-1 text-sm text-gray-500">{description}</Text>
        </View>
      </View>

      {/* Actions */}
      <View className="mt-4 flex-row justify-end gap-3">
        {/* Update */}
        <Pressable
          onPress={() => onUpdate(id)}
          className="flex-row items-center rounded-lg bg-gray-100 px-3 py-2"
        >
          <HugeiconsIcon icon={PencilEdit02Icon} size={16} color="#374151" />
        </Pressable>

        {/* Delete */}
        <Pressable
          onPress={() => onDelete(id)}
          className="flex-row items-center rounded-lg bg-red-50 px-3 py-2"
        >
          <HugeiconsIcon icon={Delete02Icon} size={16} color="#dc2626" />
        </Pressable>
      </View>
    </View>
  );
};

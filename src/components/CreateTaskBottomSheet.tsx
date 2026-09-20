import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { RenderBackdrop } from "./BottomSheetRenderBackdrop";
import { useTask } from "@/store/taskStore";
import { useAuth } from "@/store/authStore";

interface Props {
  bottomSheetModalRef: React.RefObject<BottomSheetModal | null>;
}

export const CreateTaskBottomSheet = ({ bottomSheetModalRef }: Props) => {
  const snapPoints = useMemo(() => ["55%"], []);

  const {addTask} = useTask();
  const {user} = useAuth();
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = async() => {
    if (!title.trim()) return;
    await addTask(user!.uid, title, description)

    setTitle("");
    setDescription("");
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={RenderBackdrop}
      enableDynamicSizing={false}
    >
      <BottomSheetView>
        <View className="gap-3 p-4">
          <Text className="text-lg font-semibold">Create Task</Text>

          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Task title"
            className="rounded-lg border border-gray-300 bg-white px-4 py-3"
          />

          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Task description"
            multiline
            numberOfLines={4}
            className="rounded-lg border border-gray-300 bg-white px-4 py-3"
          />

          <TouchableOpacity
            onPress={handleCreateTask}
            className="rounded-xl bg-blue-500 px-4 py-3 "
            activeOpacity={0.9}

          >
            <Text className="text-center font-semibold text-white">
              Create Task
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

import userAvatar from "@/assets/images/avatar.png";
import { data, filterBadges } from "@/utils/data";
import { useRef, useState } from "react";

import { CreateTaskBottomSheet } from "@/components/CreateTaskBottomSheet";
import { CreateTaskButton } from "@/components/CreateTaskButton";
import { TaskCard } from "@/components/TaskCard";
import { FilterBadgeType } from "@/utils/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  EllipsisIcon,
  MultiplicationSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<FilterBadgeType>("All");

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openTaskFormSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const onToggle = (id: string) => {
    // Handle task toggle logic here
  };

  const onDelete = (id: string) => {
    // Handle task delete logic here
  };

  const onUpdate = () => {
    // handle update task
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between  px-6 py-3 mb-4">
        <View className="flex-row items-center gap-3">
          <View className=" w-12 h-12 rounded-full bg-gray-50 items-center justify-center p-1">
            <Image source={userAvatar} className="w-full h-full rounded-full" />
          </View>
          <View className="mb-1">
            <Text className="text-md font-semibold text-gray-500">
              Welcome Back!
            </Text>
            <Text className="text-sm font-bold">Mohammad</Text>
          </View>
        </View>
        <View className="flex-row items-end ">
          <TouchableOpacity className="w-10 h-10  items-center justify-center rounded-full bg-gray-200">
            <HugeiconsIcon icon={EllipsisIcon} color="#000000" size={18} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1 px-6">
        <Text className="text-2xl font-bold mb-4 text-blue-500">My Tasks</Text>

        <View className="mb-6">
          <View className="flex-row items-center justify-between  border border-gray-300 rounded-full px-4 h-12 mb-4">
            <TextInput
              placeholder="Search task...."
              className="flex-1 h-full  text-sm"
            />
            <TouchableOpacity
              className="w-6 h-6  items-center justify-center rounded-full bg-gray-100"
              activeOpacity={0.5}
            >
              <HugeiconsIcon
                icon={MultiplicationSignIcon}
                color="#"
                size={14}
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-2 mb-4">
            {filterBadges.map((badge) => (
              <TouchableOpacity
                key={badge}
                className={`px-4 py-1 rounded-full bg-gray-100 border border-gray-100 mb-2 ${selectedBadge === badge ? "bg-blue-500 text-white" : ""}`}
                activeOpacity={0.5}
                onPress={() => setSelectedBadge(badge as FilterBadgeType)}
              >
                <Text className="text-sm font-normal text-gray-700">
                  {badge}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {data.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ScrollView>
      </View>

      <CreateTaskButton onPress={openTaskFormSheet} />
      <CreateTaskBottomSheet bottomSheetModalRef={bottomSheetModalRef} />
    </SafeAreaView>
  );
}
